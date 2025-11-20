export interface ParagraphBlock {
  type: string;
  timestamp?: string;
  text?: string;
  level?: number;
}

export interface ParagraphTranscript {
  type: string;
  blocks: ParagraphBlock[];
}

export interface WordTranscript {
  word: string;
  startTime: number;
  endTime: number;
}

/**
 * Converts various transcript formats to word-level format
 * Supports:
 * - Word-level arrays (pass-through)
 * - Paragraph/block format with timestamps
 */
export function normalizeTranscript(data: any): WordTranscript[] {
  if (!data) return [];

  // Already word-level? Return as-is
  if (Array.isArray(data) && data.length > 0) {
    if (data[0]?.word !== undefined && data[0]?.startTime !== undefined) {
      return data as WordTranscript[];
    }
  }

  // Paragraph/block format? Convert it
  if (data?.blocks && Array.isArray(data.blocks)) {
    return convertParagraphsToWords(data.blocks);
  }

  // Unknown format? Return empty
  console.warn('Unknown transcript format:', data);
  return [];
}

function convertParagraphsToWords(blocks: ParagraphBlock[]): WordTranscript[] {
  const words: WordTranscript[] = [];

  blocks.forEach((block, blockIndex) => {
    // Only process paragraph blocks with text
    if (block.type === 'paragraph' && block.text && block.timestamp) {
      const startSeconds = parseTimestamp(block.timestamp);

      // Calculate end time (start of next paragraph or +20 seconds)
      let endSeconds = startSeconds + 20;
      const nextBlock = blocks[blockIndex + 1];
      if (nextBlock?.timestamp) {
        endSeconds = parseTimestamp(nextBlock.timestamp);
      }

      const duration = endSeconds - startSeconds;
      const wordsList = block.text.split(/\s+/).filter(word => word.length > 0);
      const timePerWord = duration / wordsList.length;

      wordsList.forEach((word, wordIndex) => {
        words.push({
          word: word,
          startTime: startSeconds + (wordIndex * timePerWord),
          endTime: startSeconds + ((wordIndex + 1) * timePerWord)
        });
      });
    }
  });

  return words;
}

/**
 * Parse timestamp from "00:00:00" or "00:00" format to seconds
 */
function parseTimestamp(timestamp: string): number {
  const parts = timestamp.split(':').map(Number);

  if (parts.length === 3) {
    // HH:MM:SS
    return parts[0] * 3600 + parts[1] * 60 + parts[2];
  } else if (parts.length === 2) {
    // MM:SS
    return parts[0] * 60 + parts[1];
  }

  return 0;
}
