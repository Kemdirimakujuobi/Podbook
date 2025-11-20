import svgPaths from "./svg-heypd7w2e4";
import { imgEllipse1 } from "./svg-zakjl";

function Play() {
  return (
    <div className="absolute left-1/2 size-[16px] top-[14px] translate-x-[-50%]" data-name="Play">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Play">
          <path d={svgPaths.p165ae680} fill="var(--fill-0, white)" id="Vector 1" style={{ fill: "white", fillOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

export default function PlayButton() {
  return (
    <div className="bg-[#dc8069] mix-blend-color-dodge relative rounded-[999px] size-full" data-name="Play Button">
      <div className="absolute left-0 mix-blend-exclusion size-[44px] top-0">
        <img alt="" className="block max-w-none size-full" src={imgEllipse1} />
      </div>
      <Play />
    </div>
  );
}