import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import svgPaths from "./imports/svg-eo6gzb6faz";
import imgImage33 from "figma:asset/fc08b86159a859fa7cb161330ecdb9059ec30392.png";
import { imgEllipse1 } from "./imports/svg-emt2f";

// Waveform data - heights for each bar
const waveformData = [
  8, 14, 42, 53, 29, 38, 53, 38, 38, 20, 43, 26, 54, 16, 7, 19, 46, 37, 49, 37, 4, 38, 30, 25, 24, 29, 48, 36, 11, 12,
  21, 54, 30, 28, 31, 41, 24, 1, 43, 3, 23, 45, 18, 15, 30, 10, 48, 54, 15, 34, 14, 33, 1, 34, 35, 18, 3, 27, 34, 30,
  14, 39, 14, 52, 32, 12, 1, 23, 13, 37, 47, 32, 31, 27, 9, 20, 6, 47, 18, 11, 13, 42, 23, 15, 23, 3, 24, 7, 1, 35, 49,
  54, 51, 53, 39, 42, 35, 12, 50, 21, 52, 40, 36, 11, 49, 26, 19, 3, 47, 40, 49, 12, 16, 16, 25, 12, 1, 29, 49, 48, 9,
  53, 13, 3, 52, 5, 11, 13, 34, 46, 16, 31, 5, 1, 48, 5, 19, 54, 27, 40, 31, 31, 26, 41, 51, 24, 32, 21, 53, 13, 8, 35,
  55, 1, 26, 46, 41, 43, 7, 1, 23, 38, 10, 6, 52, 16, 48, 16, 45, 27, 43, 32, 47, 52, 31, 49, 40, 47, 9, 26, 16, 16, 23,
  4, 27, 1, 6, 33, 6, 48, 51, 28, 32, 4, 13, 42, 7, 29, 42, 48, 26, 3, 40, 14, 1, 31, 26, 54, 37, 54, 10, 9, 13, 3, 43,
  27, 35, 20, 27, 35, 46, 30, 53, 49, 21, 30, 40, 35, 13, 19, 37, 52, 10, 38, 34, 26, 34, 35, 21, 35, 21, 24, 12, 41, 12,
  25, 53, 5, 7, 16, 6, 52, 1, 27, 53, 53, 1, 7, 46, 35, 9, 53, 19, 27, 48, 14, 45, 54, 40, 10, 20, 19, 33
];

// Mock transcript data with timing
interface TranscriptWord {
  word: string;
  startTime: number;
  endTime: number;
}

const transcriptData: TranscriptWord[] = [
  // Fast natural speech - multiple words per second
  { word: "Discover", startTime: 0, endTime: 0.4 },
  { word: "the", startTime: 0.4, endTime: 0.5 },
  { word: "secrets", startTime: 0.5, endTime: 0.9 },
  { word: "beneath", startTime: 0.9, endTime: 1.3 },
  { word: "our", startTime: 1.3, endTime: 1.5 },
  { word: "feet", startTime: 1.5, endTime: 1.8 },
  { word: "in", startTime: 1.8, endTime: 1.9 },
  { word: "'Terra", startTime: 1.9, endTime: 2.2 },
  { word: "Firma", startTime: 2.2, endTime: 2.5 },
  { word: "Tales.'", startTime: 2.5, endTime: 2.9 },
  { word: "We", startTime: 3.0, endTime: 3.1 },
  { word: "explore", startTime: 3.1, endTime: 3.6 },
  { word: "the", startTime: 3.6, endTime: 3.7 },
  { word: "vital", startTime: 3.7, endTime: 4.1 },
  { word: "role", startTime: 4.1, endTime: 4.4 },
  { word: "of", startTime: 4.4, endTime: 4.5 },
  { word: "soil", startTime: 4.5, endTime: 4.9 },
  { word: "in", startTime: 4.9, endTime: 5.0 },
  { word: "our", startTime: 5.0, endTime: 5.2 },
  { word: "ecosystem,", startTime: 5.2, endTime: 5.9 },
  { word: "uncovering", startTime: 6.0, endTime: 6.6 },
  { word: "stories", startTime: 6.6, endTime: 7.1 },
  { word: "of", startTime: 7.1, endTime: 7.2 },
  { word: "regeneration,", startTime: 7.2, endTime: 8.0 },
  { word: "innovation,", startTime: 8.1, endTime: 8.8 },
  { word: "and", startTime: 8.8, endTime: 9.0 },
  { word: "the", startTime: 9.0, endTime: 9.1 },
  { word: "profound", startTime: 9.1, endTime: 9.7 },
  { word: "connection", startTime: 9.7, endTime: 10.4 },
  { word: "between", startTime: 10.4, endTime: 10.9 },
  { word: "earth", startTime: 10.9, endTime: 11.2 },
  { word: "and", startTime: 11.2, endTime: 11.4 },
  { word: "life.", startTime: 11.4, endTime: 11.8 },
  { word: "Join", startTime: 12.2, endTime: 12.5 },
  { word: "us", startTime: 12.5, endTime: 12.7 },
  { word: "as", startTime: 12.7, endTime: 12.8 },
  { word: "we", startTime: 12.8, endTime: 13.0 },
  { word: "dig", startTime: 13.0, endTime: 13.3 },
  { word: "deep", startTime: 13.3, endTime: 13.6 },
  { word: "into", startTime: 13.6, endTime: 13.9 },
  { word: "the", startTime: 13.9, endTime: 14.0 },
  { word: "ground", startTime: 14.0, endTime: 14.4 },
  { word: "where", startTime: 14.4, endTime: 14.7 },
  { word: "life", startTime: 14.7, endTime: 15.0 },
  { word: "begins", startTime: 15.0, endTime: 15.5 },
  { word: "and", startTime: 15.5, endTime: 15.7 },
  { word: "where", startTime: 15.7, endTime: 16.0 },
  { word: "every", startTime: 16.0, endTime: 16.3 },
  { word: "handful", startTime: 16.3, endTime: 16.8 },
  { word: "holds", startTime: 16.8, endTime: 17.1 },
  { word: "a", startTime: 17.1, endTime: 17.2 },
  { word: "universe", startTime: 17.2, endTime: 17.8 },
  { word: "of", startTime: 17.8, endTime: 17.9 },
  { word: "possibilities.", startTime: 17.9, endTime: 18.8 },
  { word: "From", startTime: 19.5, endTime: 19.8 },
  { word: "ancient", startTime: 19.8, endTime: 20.3 },
  { word: "farming", startTime: 20.3, endTime: 20.8 },
  { word: "practices", startTime: 20.8, endTime: 21.5 },
  { word: "to", startTime: 21.5, endTime: 21.7 },
  { word: "cutting-edge", startTime: 21.7, endTime: 22.5 },
  { word: "research,", startTime: 22.5, endTime: 23.2 },
  { word: "discover", startTime: 23.3, endTime: 23.8 },
  { word: "how", startTime: 23.8, endTime: 24.0 },
  { word: "soil", startTime: 24.0, endTime: 24.4 },
  { word: "shapes", startTime: 24.4, endTime: 24.9 },
  { word: "our", startTime: 24.9, endTime: 25.1 },
  { word: "world", startTime: 25.1, endTime: 25.5 },
  { word: "and", startTime: 25.5, endTime: 25.7 },
  { word: "our", startTime: 25.7, endTime: 25.9 },
  { word: "future.", startTime: 25.9, endTime: 26.5 },
  { word: "In", startTime: 78, endTime: 78.2 },
  { word: "this", startTime: 78.2, endTime: 78.5 },
  { word: "episode,", startTime: 78.5, endTime: 79.1 },
  { word: "we", startTime: 79.1, endTime: 79.3 },
  { word: "travel", startTime: 79.3, endTime: 79.7 },
  { word: "to", startTime: 79.7, endTime: 79.8 },
  { word: "rural", startTime: 79.8, endTime: 80.2 },
  { word: "communities", startTime: 80.2, endTime: 81.0 },
  { word: "where", startTime: 81.0, endTime: 81.3 },
  { word: "soil", startTime: 81.3, endTime: 81.7 },
  { word: "is", startTime: 81.7, endTime: 81.8 },
  { word: "considered", startTime: 81.8, endTime: 82.5 },
  { word: "sacred,", startTime: 82.5, endTime: 83.1 },
  { word: "and", startTime: 83.2, endTime: 83.4 },
  { word: "climate", startTime: 83.4, endTime: 83.9 },
  { word: "change", startTime: 83.9, endTime: 84.3 },
  { word: "is", startTime: 84.3, endTime: 84.4 },
  { word: "rarely", startTime: 84.4, endTime: 84.9 },
  { word: "discussed.", startTime: 84.9, endTime: 85.6 },
  { word: "We", startTime: 86.0, endTime: 86.2 },
  { word: "meet", startTime: 86.2, endTime: 86.5 },
  { word: "farmers", startTime: 86.5, endTime: 87.1 },
  { word: "who", startTime: 87.1, endTime: 87.3 },
  { word: "have", startTime: 87.3, endTime: 87.5 },
  { word: "worked", startTime: 87.5, endTime: 87.9 },
  { word: "the", startTime: 87.9, endTime: 88.0 },
  { word: "same", startTime: 88.0, endTime: 88.3 },
  { word: "land", startTime: 88.3, endTime: 88.6 },
  { word: "for", startTime: 88.6, endTime: 88.8 },
  { word: "generations,", startTime: 88.8, endTime: 89.7 },
  { word: "understanding", startTime: 89.8, endTime: 90.6 },
  { word: "its", startTime: 90.6, endTime: 90.8 },
  { word: "rhythms", startTime: 90.8, endTime: 91.3 },
  { word: "and", startTime: 91.3, endTime: 91.5 },
  { word: "secrets", startTime: 91.5, endTime: 92.0 },
  { word: "through", startTime: 92.0, endTime: 92.4 },
  { word: "touch", startTime: 92.4, endTime: 92.8 },
  { word: "and", startTime: 92.8, endTime: 93.0 },
  { word: "tradition.", startTime: 93.0, endTime: 93.8 },
];

function formatTime(seconds: number) {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}

interface MaskGroupProps {
  progress: number;
}

function MaskGroup() {
  return (
    <div className="h-[23.943px] relative shrink-0 w-[89.83px]" data-name="Mask group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 90 24">
        <g id="Mask group">
          <mask height="24" id="mask0_3_675" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="90" x="0" y="0">
            <path d={svgPaths.p19e16000} fill="var(--fill-0, black)" id="Vector" style={{ fill: "black", fillOpacity: "1" }} />
          </mask>
          <g mask="url(#mask0_3_675)">
            <rect fill="var(--fill-0, #211917)" height="32" id="Rectangle 1" style={{ fill: "color(display-p3 0.1294 0.0980 0.0902)", fillOpacity: "1" }} width="95" x="-3" y="-4" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function HeaderContainsLogoOfSource() {
  return (
    <div className="h-[56px] max-w-[650px] relative shrink-0 w-full" data-name="Header - Contains logo of source">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[8px] h-[56px] items-center max-w-inherit px-[40px] py-[8px] relative w-full">
          <MaskGroup />
        </div>
      </div>
    </div>
  );
}

interface PlayButtonProps {
  isPlaying: boolean;
  onToggle: () => void;
}

function PlayButton({ isPlaying, onToggle }: PlayButtonProps) {
  return (
    <button
      onClick={onToggle}
      className="absolute left-[16px] top-[192px] size-[44px] bg-transparent border-0 p-0 cursor-pointer"
      data-name="Play Button"
    >
      <div className="bg-[#dc8069] mix-blend-color-dodge relative rounded-[999px] size-full" data-name="Play Button">
        <div className="absolute left-0 mix-blend-exclusion size-[44px] top-0" data-name="Ellipse 1">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 44" style={{ overflow: "visible" }}>
            <g id="Ellipse 1" style={{ mixBlendMode: "exclusion" }}>
              <circle cx="22" cy="22" r="21.5" stroke="white" style={{ mixBlendMode: "overlay", stroke: "white", strokeOpacity: 1 }} />
            </g>
          </svg>
        </div>
        {isPlaying ? (
          <div className="absolute left-1/2 size-[16px] top-[14px] translate-x-[-50%]">
            {/* Pause icon - two vertical bars */}
            <svg className="block size-full" fill="white" viewBox="0 0 16 16">
              <rect x="4" y="3" width="3" height="10" rx="1" />
              <rect x="9" y="3" width="3" height="10" rx="1" />
            </svg>
          </div>
        ) : (
          <div className="absolute left-1/2 size-[16px] top-[14px] translate-x-[-50%]" data-name="Play">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
              <g id="Play">
                <path d={svgPaths.p165ae680} fill="var(--fill-0, white)" id="Vector 1" style={{ fill: "white", fillOpacity: "1" }} />
              </g>
            </svg>
          </div>
        )}
      </div>
    </button>
  );
}

interface CoverArtProps {
  isPlaying: boolean;
  onToggle: () => void;
}

function CoverArt({ isPlaying, onToggle }: CoverArtProps) {
  return (
    <div className="bg-[#a259b9] overflow-clip relative rounded-[8px] shadow-[0px_12px_28px_-8px_rgba(33,25,23,0.6),0px_2px_4px_-1px_rgba(1,19,69,0.04),0px_1px_2px_0px_rgba(1,19,69,0.11),0px_0px_0px_1px_rgba(1,19,69,0.06)] shrink-0 size-[252px]" data-name="Cover Art">
      <div className="absolute h-[252px] left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[480px]" data-name="image 33">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage33} />
      </div>
      <PlayButton isPlaying={isPlaying} onToggle={onToggle} />
    </div>
  );
}

function SubContainer() {
  return (
    <div className="content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[4px] items-center leading-[20px] not-italic relative shrink-0 text-[#747580] text-[14px] text-nowrap whitespace-pre" data-name="Sub Container">
      <a href="#" className="relative shrink-0 underline hover:text-[#231a18] transition-colors">Offrange</a>
      <p className="relative shrink-0">·</p>
      <p className="relative shrink-0">Oct 18, 2023</p>
    </div>
  );
}

function TitleMockup() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[278px]" data-name="Title Mockup">
      <p className="font-['Inter_Display:SemiBold',sans-serif] leading-[24px] min-w-full not-italic relative shrink-0 text-[#231a18] text-[18px] w-[min-content]">Where Soil is Holy, and Climate Change Is Seldom Mentioned</p>
      <SubContainer />
    </div>
  );
}

interface MetaLockupProps {
  isPlaying: boolean;
  onToggle: () => void;
}

function MetaLockup({ isPlaying, onToggle }: MetaLockupProps) {
  return (
    <div className="basis-0 content-stretch flex gap-[24px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Meta Lockup">
      <CoverArt isPlaying={isPlaying} onToggle={onToggle} />
      <TitleMockup />
    </div>
  );
}

interface Frame2Props {
  isPlaying: boolean;
  onToggle: () => void;
}

function Frame2({ isPlaying, onToggle }: Frame2Props) {
  return (
    <div className="basis-0 grow max-w-[650px] min-h-px min-w-px relative shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[8px] items-start max-w-inherit px-[40px] py-0 relative size-full">
          <MetaLockup isPlaying={isPlaying} onToggle={onToggle} />
        </div>
      </div>
    </div>
  );
}

interface FrameProps {
  playedBars: number;
  onBarClick: (index: number) => void;
  onDrag: (index: number) => void;
  hoverBar: number | null;
  onHover: (index: number | null) => void;
  isDragging: boolean;
}

function Frame({ playedBars, onBarClick, onDrag, hoverBar, onHover, isDragging }: FrameProps) {
  const handleMouseDown = (index: number) => {
    onBarClick(index);
  };

  const handleMouseEnter = (index: number) => {
    onHover(index);
    if (isDragging) {
      onDrag(index);
    }
  };

  const handleMouseLeave = () => {
    if (!isDragging) {
      onHover(null);
    }
  };

  return (
    <div 
      className="content-stretch flex gap-px items-end relative cursor-pointer w-[570px]"
      onMouseLeave={handleMouseLeave}
    >
      {waveformData.map((height, index) => {
        const isPlayed = index < playedBars;
        const isHovered = hoverBar !== null && index <= hoverBar;
        const barColor = isPlayed ? '#dc8069' : (isHovered ? '#e89077' : '#d9d9d9');
        
        return (
          <motion.div 
            key={index}
            onMouseDown={() => handleMouseDown(index)}
            onMouseEnter={() => handleMouseEnter(index)}
            className="shrink-0 w-[2px]"
            animate={{ 
              height: `${height}px`,
              backgroundColor: barColor
            }}
            transition={{ 
              duration: 0.2,
              ease: "easeOut"
            }}
          />
        );
      })}
    </div>
  );
}

interface MaskGroup1Props extends MaskGroupProps, FrameProps {
  currentTime: number;
  duration: number;
}

function MaskGroup1({ progress, playedBars, onBarClick, onDrag, hoverBar, onHover, isDragging, currentTime, duration }: MaskGroup1Props) {
  const [tooltipPosition, setTooltipPosition] = useState<{ x: number; time: number } | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const progressCalc = x / rect.width;
    const time = progressCalc * duration;
    setTooltipPosition({ x, time });
  };

  const handleMouseLeave = () => {
    setTooltipPosition(null);
  };

  return (
    <div 
      ref={containerRef}
      className="relative shrink-0 w-[570px]" 
      data-name="Mask group"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <Frame playedBars={playedBars} onBarClick={onBarClick} onDrag={onDrag} hoverBar={hoverBar} onHover={onHover} isDragging={isDragging} />
      
      {/* Tooltip - TrackerOnHover from Figma */}
      {tooltipPosition && (
        <div 
          className="absolute backdrop-blur-[1px] backdrop-filter bg-[rgba(0,0,0,0.83)] box-border content-stretch flex gap-[8px] h-[20px] items-center justify-center p-[4px] rounded-[4px] shadow-[0px_2px_4px_-1px_rgba(18,18,20,0.04),0px_1px_2px_0px_rgba(18,18,20,0.11),0px_0px_0px_1px_rgba(18,18,20,0.06)] top-[3px] -translate-x-1/2 pointer-events-none z-10"
          style={{ left: `${tooltipPosition.x}px` }}
          data-name="Tracker - On hover"
        >
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">
            {formatTime(tooltipPosition.time)}
          </p>
        </div>
      )}
    </div>
  );
}

interface ScrubberProps extends MaskGroupProps, FrameProps {
  currentTime: number;
  duration: number;
}

function Scrubber({ progress, playedBars, onBarClick, onDrag, hoverBar, onHover, isDragging, currentTime, duration }: ScrubberProps) {
  return (
    <div className="max-w-[650px] relative shrink-0 w-full" data-name="Scrubber">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex items-start max-w-inherit px-[40px] py-0 relative w-full">
          <MaskGroup1 
            progress={progress} 
            playedBars={playedBars} 
            onBarClick={onBarClick} 
            onDrag={onDrag} 
            hoverBar={hoverBar} 
            onHover={onHover} 
            isDragging={isDragging}
            currentTime={currentTime}
            duration={duration}
          />
        </div>
      </div>
    </div>
  );
}

interface TopSectionProps extends ScrubberProps {
  isPlaying: boolean;
  onToggle: () => void;
}

function TopSection({ isPlaying, onToggle, progress, playedBars, onBarClick, onDrag, hoverBar, onHover, isDragging, currentTime, duration }: TopSectionProps) {
  return (
    <div className="relative shrink-0 h-[434px] w-full" data-name="Top section">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-center pb-0 pt-[8px] px-[414px] relative size-full">
          <HeaderContainsLogoOfSource />
          <Frame2 isPlaying={isPlaying} onToggle={onToggle} />
          <Scrubber 
            progress={progress} 
            playedBars={playedBars} 
            onBarClick={onBarClick}
            onDrag={onDrag}
            hoverBar={hoverBar}
            onHover={onHover}
            isDragging={isDragging}
            currentTime={currentTime}
            duration={duration}
          />
        </div>
      </div>
    </div>
  );
}

interface TranscriptProps {
  currentTime: number;
  duration: number;
}

function Transcript({ currentTime, duration }: TranscriptProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const activeWordRef = useRef<HTMLSpanElement>(null);

  // Find the currently active word(s) for scrolling
  const currentWordIndex = transcriptData.findIndex(
    item => currentTime >= item.startTime && currentTime < item.endTime
  );

  // Auto-scroll to keep active word in view
  useEffect(() => {
    if (currentWordIndex >= 0 && containerRef.current) {
      const container = containerRef.current;
      const words = container.querySelectorAll('span');
      const activeWord = words[currentWordIndex];
      
      if (activeWord) {
        const containerRect = container.getBoundingClientRect();
        const wordRect = activeWord.getBoundingClientRect();
        
        // Check if word is outside visible area
        if (wordRect.top < containerRect.top || wordRect.bottom > containerRect.bottom) {
          activeWord.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }
    }
  }, [currentWordIndex]);

  return (
    <div 
      ref={containerRef}
      className="overflow-y-auto font-['Freight_Text_Book',Georgia,serif] leading-[32px] max-w-[470px] h-[160px] relative shrink-0 text-[24px]"
      style={{ 
        scrollbarWidth: 'thin',
        scrollbarColor: '#d9d9d9 transparent'
      }}
    >
      {transcriptData.map((item, index) => {
        // Two states: dark (current or already spoken) vs gray (not yet spoken)
        const isSpokenOrCurrent = currentTime >= item.startTime;
        return (
          <motion.span
            key={index}
            animate={{ 
              color: isSpokenOrCurrent ? '#221a18' : '#c0b5b3'
            }}
            transition={{ 
              duration: 0.3,
              ease: "easeInOut"
            }}
          >
            {item.word}{' '}
          </motion.span>
        );
      })}
    </div>
  );
}

interface BottomSectionProps {
  currentTime: number;
  duration: number;
}

function BottomSection({ currentTime, duration }: BottomSectionProps) {
  return (
    <div className="flex-1 bg-white box-border content-stretch flex flex-col gap-[32px] items-center overflow-clip px-[414px] py-[8px] shadow-[0px_2px_4px_-1px_rgba(1,19,69,0.04),0px_1px_2px_0px_rgba(1,19,69,0.11),0px_0px_0px_1px_rgba(1,19,69,0.06)] w-full relative" data-name="Bottom Section">
      {/* Playtime */}
      <div className="max-w-[650px] relative shrink-0 w-full" data-name="Playtime">
        <div className="flex flex-row items-center max-w-inherit size-full">
          <div className="box-border content-stretch flex font-['Inter:Regular',sans-serif] font-normal items-center justify-between leading-[20px] max-w-inherit not-italic px-[40px] py-0 relative text-[14px] text-[rgba(34,25,23,0.54)] text-nowrap w-full whitespace-pre pt-[0px] pr-[0px] pb-[0px] pl-[40px]">
            <p className="relative shrink-0">{formatTime(currentTime)}</p>
            <p className="relative shrink-0">{formatTime(duration)}</p>
          </div>
        </div>
      </div>
      
      {/* Frame3 - Transcript Container */}
      <div className="content-stretch flex flex-col gap-[8px] items-center justify-center max-w-[650px] relative shrink-0 w-full">
        <Transcript currentTime={currentTime} duration={duration} />
      </div>
    </div>
  );
}

interface Frame1Props extends TopSectionProps {}

function Frame1({ isPlaying, onToggle, progress, playedBars, onBarClick, onDrag, hoverBar, onHover, isDragging, currentTime, duration }: Frame1Props) {
  return (
    <div className="absolute content-stretch flex flex-col items-start inset-0">
      <TopSection 
        isPlaying={isPlaying} 
        onToggle={onToggle}
        progress={progress}
        playedBars={playedBars}
        onBarClick={onBarClick}
        onDrag={onDrag}
        hoverBar={hoverBar}
        onHover={onHover}
        isDragging={isDragging}
        currentTime={currentTime}
        duration={duration}
      />
      <BottomSection currentTime={currentTime} duration={duration} />
    </div>
  );
}

export default function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(82); // 82 seconds = ~1:22
  const [duration] = useState(245); // Total duration in seconds
  const [backgroundColor, setBackgroundColor] = useState('#fefcfc');
  const [hoverBar, setHoverBar] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Extract dominant color from cover image
  useEffect(() => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = imgImage33;
    
    img.onload = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      
      try {
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;
        
        // Sample pixels and find lightest hue
        let maxLightness = 0;
        let dominantHue = 0;
        let dominantSat = 0;
        
        for (let i = 0; i < data.length; i += 4 * 100) {
          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];
          
          // Convert RGB to HSL
          const rNorm = r / 255;
          const gNorm = g / 255;
          const bNorm = b / 255;
          
          const max = Math.max(rNorm, gNorm, bNorm);
          const min = Math.min(rNorm, gNorm, bNorm);
          const l = (max + min) / 2;
          
          if (l > maxLightness && max !== min) {
            maxLightness = l;
            
            const d = max - min;
            const s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            
            let h = 0;
            if (max === rNorm) h = ((gNorm - bNorm) / d + (gNorm < bNorm ? 6 : 0)) / 6;
            else if (max === gNorm) h = ((bNorm - rNorm) / d + 2) / 6;
            else h = ((rNorm - gNorm) / d + 4) / 6;
            
            dominantHue = h * 360;
            dominantSat = s * 100;
          }
        }
        
        // Create a very light background with the dominant hue
        setBackgroundColor(`hsl(${dominantHue}, ${Math.min(dominantSat * 0.3, 20)}%, 98%)`);
      } catch (e) {
        // Fallback if CORS issues
        console.log('Using default background');
      }
    };
  }, []);

  // Simulate audio playback
  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentTime(prev => {
        if (prev >= duration) {
          setIsPlaying(false);
          return duration;
        }
        return prev + 1;
      });
    }, 1000);
    
    return () => clearInterval(interval);
  }, [isPlaying, duration]);

  // Handle dragging globally
  useEffect(() => {
    const handleMouseUp = () => {
      setIsDragging(false);
      setHoverBar(null);
    };

    if (isDragging) {
      window.addEventListener('mouseup', handleMouseUp);
      return () => window.removeEventListener('mouseup', handleMouseUp);
    }
  }, [isDragging]);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleBarClick = (index: number) => {
    setIsDragging(true);
    const newTime = (index / waveformData.length) * duration;
    setCurrentTime(newTime);
  };

  const handleDrag = (index: number) => {
    const newTime = (index / waveformData.length) * duration;
    setCurrentTime(newTime);
  };

  const handleHover = (index: number | null) => {
    setHoverBar(index);
  };

  const progress = currentTime / duration;
  const playedBars = Math.floor(progress * waveformData.length);

  return (
    <div 
      className="bg-[#fefcfc] overflow-clip relative rounded-[24px] shadow-[0px_72px_128px_0px_rgba(0,0,0,0.06),0px_32px_56px_0px_rgba(0,0,0,0.04),0px_16px_30px_0px_rgba(0,0,0,0.04),0px_9px_16px_0px_rgba(0,0,0,0.03),0px_2px_4px_0px_rgba(0,0,0,0.02),0px_4px_8px_0px_rgba(0,0,0,0.02),0px_0px_0px_1px_rgba(0,0,0,0.08)] size-full" 
      data-name="Playing"
      style={{ backgroundColor }}
    >
      {/* Hidden canvas for color extraction */}
      <canvas ref={canvasRef} className="hidden" />
      
      <Frame1 
        isPlaying={isPlaying}
        onToggle={togglePlayPause}
        progress={progress}
        playedBars={playedBars}
        onBarClick={handleBarClick}
        onDrag={handleDrag}
        hoverBar={hoverBar}
        onHover={handleHover}
        isDragging={isDragging}
        currentTime={currentTime}
        duration={duration}
      />
    </div>
  );
}