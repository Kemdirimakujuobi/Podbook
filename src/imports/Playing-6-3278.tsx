import svgPaths from "./svg-74jr778cm8";
import imgImage33 from "figma:asset/fc08b86159a859fa7cb161330ecdb9059ec30392.png";
import { imgEllipse1, imgTextBlockMask } from "./svg-vguaz";

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
      <div className="flex flex-row items-center max-w-inherit overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[8px] h-[56px] items-center max-w-inherit px-[40px] py-[8px] relative w-full">
          <MaskGroup />
        </div>
      </div>
    </div>
  );
}

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

function PlayButton() {
  return (
    <div className="absolute bg-[#dc8069] left-[16px] mix-blend-color-dodge rounded-[999px] size-[44px] top-[192px]" data-name="Play Button">
      <div className="absolute left-0 mix-blend-exclusion size-[44px] top-0">
        <img alt="" className="block max-w-none size-full" src={imgEllipse1} />
      </div>
      <Play />
    </div>
  );
}

function CoverArt() {
  return (
    <div className="bg-[#a259b9] overflow-clip relative rounded-[8px] shadow-[0px_12px_28px_-8px_rgba(33,25,23,0.6),0px_2px_4px_-1px_rgba(1,19,69,0.04),0px_1px_2px_0px_rgba(1,19,69,0.11),0px_0px_0px_1px_rgba(1,19,69,0.06)] shrink-0 size-[252px]" data-name="Cover Art">
      <div className="absolute h-[252px] left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[480px]" data-name="image 33">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage33} />
      </div>
      <PlayButton />
    </div>
  );
}

function SubContainer() {
  return (
    <div className="content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[4px] items-center leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(34,25,23,0.54)] text-nowrap whitespace-pre" data-name="Sub Container">
      <p className="[text-underline-position:from-font] decoration-solid relative shrink-0 underline">Offrange</p>
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

function MetaLockup() {
  return (
    <div className="basis-0 content-stretch flex gap-[24px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Meta Lockup">
      <CoverArt />
      <TitleMockup />
    </div>
  );
}

function Frame1() {
  return (
    <div className="basis-0 grow max-w-[650px] min-h-px min-w-px relative shrink-0 w-full">
      <div className="max-w-inherit overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[8px] items-start max-w-inherit pb-0 pt-[8px] px-[40px] relative size-full">
          <MetaLockup />
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex gap-px items-end ml-0 mt-0 relative w-[570px]">
      <div className="bg-[#d9d9d9] h-[8px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[14px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[42px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[53px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[29px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[38px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[53px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[38px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[38px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[20px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[43px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[26px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[54px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[16px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[7px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[19px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[46px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[37px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[49px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[37px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[4px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[38px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[30px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[25px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[24px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[29px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[48px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[36px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[11px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[12px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[21px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[54px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[30px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[28px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[31px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[41px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[24px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] shrink-0 size-[2px]" />
      <div className="bg-[#d9d9d9] h-[43px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[3px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[23px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[45px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[18px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[15px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[30px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[10px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[48px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[54px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[15px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[34px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[14px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[33px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-px shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[34px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[35px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[18px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[3px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[27px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[34px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[30px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[14px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[39px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[14px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[52px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[32px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[12px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] shrink-0 size-[2px]" />
      <div className="bg-[#d9d9d9] h-[23px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[13px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[37px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[47px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[32px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[31px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[27px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[9px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[20px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[6px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[47px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[18px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[11px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[13px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[42px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[23px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[15px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[23px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[3px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[24px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[7px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-px shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[35px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[49px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[54px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[51px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[53px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[39px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[42px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[35px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[12px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[50px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[21px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[52px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[40px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[36px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[11px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[49px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[26px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[19px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[3px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[47px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[40px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[49px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[12px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[16px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[16px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[25px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[12px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] shrink-0 size-[2px]" />
      <div className="bg-[#d9d9d9] h-[29px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[49px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[48px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[9px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[53px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[13px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[3px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[52px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[5px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[11px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[13px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[34px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[46px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[16px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[31px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[5px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] shrink-0 size-[2px]" />
      <div className="bg-[#d9d9d9] h-[48px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[5px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[19px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[54px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[27px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[40px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[31px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[31px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[26px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[41px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[51px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[24px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[32px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[21px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[53px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[13px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[8px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[35px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[55px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-px shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[26px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[46px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[41px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[43px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[7px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] shrink-0 size-[2px]" />
      <div className="bg-[#d9d9d9] h-[23px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[38px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[10px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[6px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[52px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[16px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[48px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[16px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[45px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[27px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[43px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[32px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[47px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[52px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[31px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[49px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[40px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[47px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[9px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[26px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[16px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[16px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[23px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[4px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[27px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] shrink-0 size-[2px]" />
      <div className="bg-[#d9d9d9] h-[6px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[33px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[6px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[48px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[51px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[28px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[32px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[4px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[13px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[42px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[7px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[29px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[42px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[48px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[26px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[3px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[40px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[14px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-px shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[31px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[26px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[54px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[37px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[54px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[10px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[9px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[13px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[3px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[43px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[27px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[35px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[20px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[27px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[35px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[46px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[30px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[53px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[49px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[21px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[30px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[40px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[35px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[13px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[19px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[37px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[52px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[10px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[38px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[34px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[26px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[34px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[35px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[21px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[35px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[21px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[24px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[12px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[41px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[12px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[25px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[53px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[5px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[7px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[16px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[6px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[52px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] shrink-0 size-[2px]" />
      <div className="bg-[#d9d9d9] h-[27px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[53px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[53px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-px shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[7px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[46px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[35px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[9px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[53px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[19px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[27px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[48px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[14px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[45px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[54px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[40px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[10px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[20px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[19px] shrink-0 w-[2px]" />
      <div className="bg-[#d9d9d9] h-[33px] shrink-0 w-[2px]" />
    </div>
  );
}

function MaskGroup1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 w-full" data-name="Mask group">
      <Frame />
      <div className="[grid-area:1_/_1] bg-[rgba(190,163,156,0.34)] h-[68px] ml-0 mt-[-8px] w-[570px]" data-name="Full mask" />
      <div className="[grid-area:1_/_1] bg-[#dc8069] h-[68px] ml-0 mt-[-8px] opacity-30 w-[258.315px]" data-name="Hover mask" />
      <div className="[grid-area:1_/_1] bg-[#dc8069] h-[68px] ml-0 mt-[-8px] w-[234.132px]" data-name="Current Progress Mask" />
    </div>
  );
}

function Frame2() {
  return <div className="absolute left-[273px] size-[24px] top-[21px]" />;
}

function TrackerOnHover() {
  return (
    <div className="absolute backdrop-blur-[1px] backdrop-filter bg-[rgba(0,0,0,0.83)] box-border content-stretch flex gap-[8px] h-[20px] items-center justify-center left-[calc(50%-23px)] p-[4px] rounded-[4px] shadow-[0px_2px_4px_-1px_rgba(18,18,20,0.04),0px_1px_2px_0px_rgba(18,18,20,0.11),0px_0px_0px_1px_rgba(18,18,20,0.06)] top-[3px] translate-x-[-50%]" data-name="Tracker - On hover">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">6:23</p>
    </div>
  );
}

function Scrubber() {
  return (
    <div className="max-w-[650px] relative shrink-0 w-full" data-name="Scrubber">
      <div className="flex flex-col items-end justify-center max-w-inherit overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-end justify-center max-w-inherit px-[40px] py-0 relative w-full">
          <MaskGroup1 />
          <Frame2 />
          <TrackerOnHover />
        </div>
      </div>
    </div>
  );
}

function TopSection() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[8px] h-[434px] items-center justify-center left-0 overflow-clip px-[414px] py-0 right-0 top-0" data-name="Top section">
      <HeaderContainsLogoOfSource />
      <Frame1 />
      <Scrubber />
    </div>
  );
}

function Playtime() {
  return (
    <div className="max-w-[700px] relative shrink-0 w-full" data-name="Playtime">
      <div className="flex flex-row items-center max-w-inherit size-full">
        <div className="box-border content-stretch flex font-['Inter:Regular',sans-serif] font-normal items-center justify-between leading-[20px] max-w-inherit not-italic px-[40px] py-0 relative text-[14px] text-[rgba(34,25,23,0.54)] text-nowrap w-full whitespace-pre">
          <p className="relative shrink-0">02:34</p>
          <p className="relative shrink-0">6:23</p>
        </div>
      </div>
    </div>
  );
}

function LiveTranscriptOnPlay() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] max-w-[470px] place-items-start relative shrink-0" data-name="Live Transcript - On play">
      <div className="[grid-area:1_/_1] bg-[#c0b5b3] h-[233px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[20.534px_43.271px] mask-size-[468.402px_150.633px] ml-[-19.96px] mt-[-39px] w-[509.915px]" data-name="Text Block Mask" style={{ maskImage: `url('${imgTextBlockMask}')` }} />
      <div className="[grid-area:1_/_1] bg-[#221a18] h-[106px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[20.534px_43.271px] mask-size-[468.402px_150.633px] ml-[-19.96px] mt-[-39px] w-[509.915px]" data-name="Current Words Mask" style={{ maskImage: `url('${imgTextBlockMask}')` }} />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-center max-w-[650px] relative shrink-0 w-full">
      <LiveTranscriptOnPlay />
    </div>
  );
}

function BottomSection() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[32px] h-[466px] items-center left-0 overflow-clip px-[414px] py-[8px] right-0 shadow-[0px_2px_4px_-1px_rgba(1,19,69,0.04),0px_1px_2px_0px_rgba(1,19,69,0.11),0px_0px_0px_1px_rgba(1,19,69,0.06)] top-[434px]" data-name="Bottom Section">
      <Playtime />
      <Frame3 />
    </div>
  );
}

export default function Playing() {
  return (
    <div className="bg-[#fefcfc] relative shadow-[0px_72px_128px_0px_rgba(0,0,0,0.06),0px_32px_56px_0px_rgba(0,0,0,0.04),0px_16px_30px_0px_rgba(0,0,0,0.04),0px_9px_16px_0px_rgba(0,0,0,0.03),0px_2px_4px_0px_rgba(0,0,0,0.02),0px_4px_8px_0px_rgba(0,0,0,0.02),0px_0px_0px_1px_rgba(0,0,0,0.08)] size-full" data-name="Playing">
      <TopSection />
      <BottomSection />
    </div>
  );
}