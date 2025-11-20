/**
 * Generate waveform data from an audio file
 * Returns an array of normalized amplitudes (0-55)
 */
export async function generateWaveform(
  audioFile: File,
  samples: number = 285
): Promise<number[]> {
  const audioContext = new AudioContext();
  const arrayBuffer = await audioFile.arrayBuffer();
  const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);

  // Get the first channel data
  const channelData = audioBuffer.getChannelData(0);
  const blockSize = Math.floor(channelData.length / samples);
  const waveform: number[] = [];

  for (let i = 0; i < samples; i++) {
    const start = i * blockSize;
    const end = start + blockSize;
    let sum = 0;

    // Calculate RMS (Root Mean Square) for this block
    for (let j = start; j < end && j < channelData.length; j++) {
      sum += channelData[j] * channelData[j];
    }

    const rms = Math.sqrt(sum / blockSize);

    // Normalize to 1-55 range (matching your existing waveform data)
    const normalized = Math.max(1, Math.min(55, Math.floor(rms * 55 * 10)));
    waveform.push(normalized);
  }

  return waveform;
}

/**
 * Generate a simple mock waveform (for testing without processing audio)
 */
export function generateMockWaveform(samples: number = 285): number[] {
  const waveform: number[] = [];
  for (let i = 0; i < samples; i++) {
    // Generate a random value between 1 and 55
    waveform.push(Math.floor(Math.random() * 54) + 1);
  }
  return waveform;
}
