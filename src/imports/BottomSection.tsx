import { imgTextBlockMask } from "./svg-kz02o";

function LiveTranscriptOnPlay() {
  return (
    <div className="absolute contents left-[calc(50%+0.5px)] top-[60px] translate-x-[-50%]" data-name="Live Transcript - On play">
      <div className="absolute bg-[#c0b5b3] bottom-[45.49%] left-[calc(50%+0.5px)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[20.576px_43.271px] mask-size-[468.402px_150.633px] top-[4.51%] translate-x-[-50%] w-[511px]" data-name="Text Block Mask" style={{ maskImage: `url('${imgTextBlockMask}')` }} />
      <div className="absolute bg-[#221a18] bottom-[72.75%] left-[calc(50%+0.5px)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[20.576px_43.271px] mask-size-[468.402px_150.633px] top-[4.51%] translate-x-[-50%] w-[511px]" data-name="Current Words Mask" style={{ maskImage: `url('${imgTextBlockMask}')` }} />
    </div>
  );
}

function Playtime() {
  return (
    <div className="absolute content-stretch flex font-['Inter:Regular',sans-serif] font-normal items-center justify-between leading-[20px] left-[454px] not-italic text-[14px] text-[rgba(34,25,23,0.54)] text-nowrap top-[8px] w-[537px] whitespace-pre" data-name="Playtime">
      <p className="relative shrink-0">02:34</p>
      <p className="relative shrink-0">6:23</p>
    </div>
  );
}

export default function BottomSection() {
  return (
    <div className="bg-white relative shadow-[0px_2px_4px_-1px_rgba(1,19,69,0.04),0px_1px_2px_0px_rgba(1,19,69,0.11),0px_0px_0px_1px_rgba(1,19,69,0.06)] size-full" data-name="Bottom Section">
      <LiveTranscriptOnPlay />
      <Playtime />
    </div>
  );
}