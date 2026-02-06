import svgPaths from "./svg-769rb64zmd";
import { imgRectangle3353 } from "./svg-0ap24";

function Bg() {
  return (
    <div className="absolute contents left-1/2 top-[10812px] translate-x-[-50%]" data-name="Bg">
      <div className="absolute bg-[#070707] h-[329px] left-1/2 top-[10812px] translate-x-[-50%] w-[1800px]" />
    </div>
  );
}

function Right() {
  return (
    <div className="absolute contents left-[80.78%] right-[10.83%] top-[calc(50%+5377px)] translate-y-[-50%]" data-name="Right">
      <div className="absolute font-['Satoshi:Medium',sans-serif] font-['Satoshi:Regular',sans-serif] h-[161px] leading-[41px] left-[80.78%] not-italic right-[10.83%] text-[0px] text-[24px] text-white top-[calc(50%+5296.5px)]">
        <p className="mb-0">{`About `}</p>
        <p className="mb-0 text-[rgba(255,255,255,0.4)]">Work Gallery</p>
        <p className="mb-0 text-[rgba(255,255,255,0.4)]">Blog</p>
        <p className="text-[rgba(255,255,255,0.4)]">Contact</p>
      </div>
    </div>
  );
}

function Social() {
  return (
    <div className="absolute h-[65px] left-[calc(41.67%+81px)] top-[10867px] w-[219px]" data-name="Social">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 219 65">
        <g id="Social">
          <g id="Insta">
            <circle cx="32.5" cy="32.5" id="Ellipse 806" r="32" stroke="var(--stroke-0, white)" strokeOpacity="0.16" />
          </g>
          <g id="Linkeding">
            <circle cx="109.5" cy="32.5" id="Ellipse 807" r="32" stroke="var(--stroke-0, white)" strokeOpacity="0.16" />
          </g>
          <g id="Linkeding_2">
            <circle cx="186.5" cy="32.5" id="Ellipse 807_2" r="32" stroke="var(--stroke-0, white)" strokeOpacity="0.16" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Facebook() {
  return (
    <div className="absolute left-[calc(33.33%+154px)] size-[65px] top-[10867px]" data-name="Facebook">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 65 65">
        <g id="Facebook">
          <circle cx="32.5" cy="32.5" fill="var(--fill-0, white)" fillOpacity="0.11" id="Ellipse 805" r="32.5" />
        </g>
      </svg>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents left-[calc(33.33%+154px)] top-[10867px]">
      <Facebook />
      <p className="absolute font-['Satoshi:Bold',sans-serif] leading-[50px] left-[calc(41.67%+24px)] not-italic text-[20px] text-nowrap text-white top-[10873px] whitespace-pre">Fb</p>
    </div>
  );
}

function Social1() {
  return (
    <div className="absolute contents left-[calc(33.33%+154px)] top-[10867px]" data-name="Social">
      <Social />
      <Group6 />
      <p className="absolute font-['Satoshi:Bold',sans-serif] leading-[50px] left-[calc(41.67%+103px)] not-italic text-[20px] text-nowrap text-white top-[10873px] whitespace-pre">In</p>
      <p className="absolute font-['Satoshi:Bold',sans-serif] leading-[50px] left-[calc(50%+28px)] not-italic text-[20px] text-nowrap text-white top-[10873px] whitespace-pre">Be</p>
      <p className="absolute font-['Satoshi:Bold',sans-serif] leading-[50px] left-[calc(50%+111px)] not-italic text-[20px] text-nowrap text-white top-[10873px] whitespace-pre">Li</p>
    </div>
  );
}

function CopyrightText() {
  return (
    <div className="absolute contents left-[37.06%] right-[37.5%] top-[calc(50%+5431.5px)] translate-y-[-50%]" data-name="Copyright Text">
      <p className="absolute font-['Satoshi:Medium',sans-serif] font-['Satoshi:Regular',sans-serif] h-[30px] leading-[normal] left-[37.06%] not-italic right-[37.5%] text-[0px] text-[20px] text-[rgba(255,255,255,0.88)] text-center top-[calc(50%+5416.5px)]">
        <span>{`@2023. `}</span>
        <span className="text-[rgba(255,255,255,0.4)]">{`All Right Reserved. `}</span>
        <span className="text-[rgba(255,255,255,0.4)]">Design by</span>
        <span>{` CreativeGigs`}</span>
      </p>
    </div>
  );
}

function Middle() {
  return (
    <div className="absolute contents left-[calc(33.33%+67px)] top-[10867px]" data-name="Middle">
      <Social1 />
      <CopyrightText />
    </div>
  );
}

function Address() {
  return (
    <div className="absolute contents left-[183px] top-[10967px]" data-name="Address">
      <div className="absolute font-['Satoshi:Regular',sans-serif] leading-[42px] left-[183px] not-italic text-[24px] text-[rgba(255,255,255,0.8)] top-[10967px] w-[343px]">
        <p className="mb-0">210 Qilo Stereet, California,</p>
        <p>Main OC, USA</p>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-[183px] top-[10867px]">
      <div className="absolute bg-neutral-100 left-[183px] size-[60px] top-[10867px]" />
      <p className="absolute font-['Outfit:Regular',sans-serif] font-normal leading-[normal] left-[203px] text-[36px] text-black text-nowrap top-[10874px] whitespace-pre">P</p>
    </div>
  );
}

function Logo() {
  return (
    <div className="absolute contents left-[183px] top-[10867px]" data-name="Logo">
      <Group2 />
    </div>
  );
}

function Left() {
  return (
    <div className="absolute contents left-[183px] top-[10867px]" data-name="Left">
      <Address />
      <Logo />
    </div>
  );
}

function MainFooter() {
  return (
    <div className="absolute contents left-0 top-[10812px]" data-name="Main Footer">
      <Bg />
      <Right />
      <Middle />
      <Left />
    </div>
  );
}

function BgImage() {
  return (
    <div className="absolute contents left-0 top-[10372px]" data-name="Bg Image">
      <div className="absolute bg-gradient-to-b from-[rgba(0,0,0,0.22)] h-[440px] left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[1800px_440px] to-[#070707] top-[10372px] via-[39.545%] via-[rgba(3,3,3,0.59)] w-[1800px]" style={{ maskImage: `url('${imgRectangle3353}')` }} />
    </div>
  );
}

function Bg1() {
  return (
    <div className="absolute contents left-[calc(50%+90px)] top-[10476px]" data-name="Bg">
      <div className="absolute bg-[#ffe03c] h-[194px] left-[calc(50%+90px)] top-[10476px] w-[615px]" />
    </div>
  );
}

function Button() {
  return (
    <div className="absolute contents left-[calc(83.33%-55px)] top-[10537px]" data-name="Button">
      <div className="absolute bg-[#0c0c0c] h-[55px] left-[calc(83.33%-55px)] top-[10537px] w-[109px]" />
      <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[35px] left-[calc(83.33%-29px)] not-italic text-[18px] text-nowrap text-white top-[10548px] tracking-[4px] whitespace-pre">SEND</p>
    </div>
  );
}

function Input() {
  return (
    <div className="absolute contents left-[calc(58.33%+1px)] top-[10537px]" data-name="Input">
      <Button />
      <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[normal] left-[58.39%] not-italic right-[30.83%] text-[20px] text-black top-[calc(50%+4973.5px)] tracking-[-0.5px]">Enter your email</p>
      <div className="absolute h-0 left-[calc(58.33%+3px)] top-[10590px] w-[361px]">
        <div className="absolute bottom-[-0.75px] left-0 right-0 top-[-0.75px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 361 2">
            <path d="M0 0.75H361" id="Vector 909" stroke="var(--stroke-0, black)" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ContactForm() {
  return (
    <div className="absolute contents left-[calc(50%+90px)] top-[10476px]" data-name="Contact form">
      <Bg1 />
      <p className="absolute font-['Gordita:Regular',sans-serif] font-['Satoshi:Regular',sans-serif] leading-[26px] left-[58.39%] not-italic right-[27.78%] text-[0px] text-[16px] text-[rgba(0,0,0,0.5)] top-[calc(50%+5032.5px)]">
        <span className="text-[rgba(0,0,0,0.6)]">Already subscribed?</span>
        <span className="text-[#dc0000]"> </span>
        <span className="text-black">Unsubscribe</span>
      </p>
      <Input />
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute contents left-[183px] top-[10488px]" data-name="Heading">
      <div className="absolute font-['Satoshi:Medium',sans-serif] leading-[80px] left-[183px] not-italic text-[82px] text-white top-[10488px] tracking-[-2.46px] w-[670px]">
        <p className="mb-[10px]">Signup for regular</p>
        <p>Newsletter.</p>
      </div>
    </div>
  );
}

function Left1() {
  return (
    <div className="absolute contents left-[183px] top-[10488px]" data-name="Left">
      <Heading />
    </div>
  );
}

function SubscribeUs() {
  return (
    <div className="absolute contents left-0 top-[10372px]" data-name="Subscribe us">
      <BgImage />
      <ContactForm />
      <Left1 />
    </div>
  );
}

function Cta() {
  return (
    <div className="absolute contents left-[calc(8.33%+199px)] top-[10102px]" data-name="CTA">
      <div className="absolute bg-black h-[70px] left-[calc(8.33%+199px)] top-[10102px] w-[1100px]" />
      <p className="absolute font-['Satoshi:Medium',sans-serif] leading-[40px] left-[calc(41.67%+152.5px)] not-italic text-[16px] text-center text-nowrap text-white top-[10117px] tracking-[1px] translate-x-[-50%] uppercase whitespace-pre">SEND MESSAGE</p>
    </div>
  );
}

function Input3() {
  return (
    <div className="absolute contents left-[19.39%] right-[19.5%] top-[9878px]" data-name="Input 3">
      <div className="absolute bg-black inset-[90.19%_19.5%_9.8%_19.39%] opacity-[0.803]" data-name="Rectangle">
        <div aria-hidden="true" className="absolute border-0 border-black border-solid inset-0 pointer-events-none" />
      </div>
      <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[normal] left-[19.39%] not-italic opacity-60 right-[73.83%] text-[20px] text-black top-[calc(50%+4307.5px)]">Message*</p>
    </div>
  );
}

function Input2() {
  return (
    <div className="absolute contents left-[19.39%] right-[19.41%] top-[9733px]" data-name="Input 2">
      <div className="absolute bg-black inset-[87.92%_19.41%_12.06%_19.48%]" data-name="Rectangle">
        <div aria-hidden="true" className="absolute border-0 border-black border-solid inset-0 pointer-events-none" />
      </div>
      <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[normal] left-[19.48%] not-italic right-[69.35%] text-[20px] text-black top-[calc(50%+4185.2px)]">Your Email Address</p>
      <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[normal] left-[19.39%] not-italic opacity-[0.499] right-[72.08%] text-[16px] text-black top-[calc(50%+4162.5px)]">Email*</p>
    </div>
  );
}

function Input1() {
  return (
    <div className="absolute contents left-[19.39%] right-[19.44%] top-[9622px]" data-name="Input 1">
      <div className="absolute bg-black inset-[86.96%_19.44%_13.02%_19.45%] opacity-[0.803]" data-name="Rectangle">
        <div aria-hidden="true" className="absolute border-0 border-black border-solid inset-0 pointer-events-none" />
      </div>
      <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[normal] left-[19.39%] not-italic opacity-[0.499] right-[73.83%] text-[16px] text-black top-[calc(50%+4051.5px)]">Name*</p>
      <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[normal] left-[19.39%] not-italic right-[72.06%] text-[20px] text-black top-[calc(50%+4077.5px)]">Your Fullname</p>
    </div>
  );
}

function Form() {
  return (
    <div className="absolute contents left-[calc(8.33%+199px)] top-[9622px]" data-name="Form">
      <Cta />
      <Input3 />
      <Input2 />
      <Input1 />
    </div>
  );
}

function Text() {
  return (
    <div className="absolute contents left-[calc(16.67%+165px)] top-[9470px]" data-name="Text">
      <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[52px] left-[calc(16.67%+600px)] not-italic text-[28px] text-black text-center top-[9470px] translate-x-[-50%] w-[870px]">Contact our team for swift, informative responses to your inquiries</p>
    </div>
  );
}

function Heading1() {
  return (
    <div className="absolute contents left-[264px] top-[9150px]" data-name="Heading">
      <p className="absolute font-['Satoshi:Medium',sans-serif] leading-[140px] left-[900px] not-italic text-[140px] text-black text-center top-[9150px] tracking-[-4px] translate-x-[-50%] w-[1272px]">{`Anything in Mind? Let's Talk`}</p>
    </div>
  );
}

function Heading2() {
  return (
    <div className="absolute contents left-[264px] top-[9150px]" data-name="Heading">
      <Heading1 />
    </div>
  );
}

function GetAQuote() {
  return (
    <div className="absolute contents left-1/2 top-[9150px] translate-x-[-50%]" data-name="Get A Quote">
      <Form />
      <Text />
      <Heading2 />
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute h-[74.999px] left-[195px] top-[8652px] w-[63.754px]" data-name="Icon">
      <div className="absolute bottom-[-0.26%] left-0 right-0 top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 76">
          <g id="Icon">
            <path d={svgPaths.p9609c00} fill="var(--fill-0, white)" id="Rectangle 3827" stroke="var(--stroke-0, white)" strokeWidth="1.5" />
            <path d={svgPaths.p1078f500} id="Vector 1498" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="1.5" />
            <path d={svgPaths.pbfbee00} id="Vector 1499" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Block1() {
  return (
    <div className="absolute contents left-[125px] top-[8584px]" data-name="Block 2">
      <div className="absolute bg-black h-[206px] left-1/2 rounded-[300px] top-[8584px] translate-x-[-50%] w-[1550px]">
        <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[300px]" />
      </div>
      <div className="absolute left-[calc(91.67%-117px)] size-[92px] top-[8641px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 92 92">
          <circle cx="46" cy="46" fill="var(--fill-0, white)" fillOpacity="0.15" id="Ellipse 936" r="46" />
        </svg>
      </div>
      <p className="absolute font-['Satoshi:Medium_Italic',sans-serif] leading-[70px] left-[calc(91.67%-73px)] not-italic text-[48px] text-center text-white top-[8651px] tracking-[-2px] translate-x-[-50%] w-[60px]">02</p>
      <p className="absolute font-['Satoshi:Medium',sans-serif] h-[86px] leading-[77px] left-[calc(8.33%+152px)] not-italic text-[64px] text-white top-[8646px] tracking-[-1.28px] w-[702px]">Concept Design</p>
      <Icon />
    </div>
  );
}

function Bg2() {
  return (
    <div className="absolute contents left-1/2 top-[8792px] translate-x-[-50%]" data-name="Bg">
      <div className="absolute bg-black h-[206px] left-1/2 rounded-[300px] top-[8792px] translate-x-[-50%] w-[1550px]">
        <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[300px]" />
      </div>
    </div>
  );
}

function Number() {
  return (
    <div className="absolute contents left-[calc(91.67%-117px)] top-[8845px]" data-name="Number">
      <div className="absolute left-[calc(91.67%-117px)] size-[92px] top-[8845px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 92 92">
          <circle cx="46" cy="46" fill="var(--fill-0, white)" fillOpacity="0.15" id="Ellipse 936" r="46" />
        </svg>
      </div>
      <p className="absolute font-['Satoshi:Medium_Italic',sans-serif] leading-[70px] left-[calc(91.67%-73px)] not-italic text-[48px] text-center text-white top-[8856px] tracking-[-2px] translate-x-[-50%] w-[60px]">03</p>
    </div>
  );
}

function Title() {
  return (
    <div className="absolute contents left-[calc(8.33%+152px)] top-[8848px]" data-name="Title">
      <p className="absolute font-['Satoshi:Medium',sans-serif] h-[86px] leading-[77px] left-[calc(8.33%+152px)] not-italic text-[64px] text-white top-[8848px] tracking-[-1.28px] w-[966px]">{`Process, Review & Approvals`}</p>
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute h-[65px] left-[190px] top-[8862px] w-[65.478px]">
      <div className="absolute inset-[-1.61%_-1.63%_-1.71%_-1.77%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 68 68">
          <g id="Group 427320353">
            <path d={svgPaths.pfeb900} fill="var(--fill-0, white)" id="Vector 2034" stroke="var(--stroke-0, white)" strokeWidth="1.5" />
            <path d={svgPaths.p3177ecc0} id="Vector 2035" stroke="var(--stroke-0, white)" strokeWidth="1.5" />
            <path d={svgPaths.pfd42900} id="Vector 2036" stroke="var(--stroke-0, white)" strokeWidth="1.5" />
            <circle cx="26.1901" cy="42.7675" fill="var(--fill-0, white)" id="Ellipse 932" r="4.95946" stroke="var(--stroke-0, white)" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute contents left-[190px] top-[8862px]" data-name="Icon">
      <Group8 />
    </div>
  );
}

function Block2() {
  return (
    <div className="absolute contents left-[125px] top-[8792px]" data-name="Block 3">
      <Bg2 />
      <Number />
      <Title />
      <Icon1 />
    </div>
  );
}

function Bg3() {
  return (
    <div className="absolute contents left-1/2 top-[8376px] translate-x-[-50%]" data-name="Bg">
      <div className="absolute bg-black h-[206px] left-1/2 rounded-[300px] top-[8376px] translate-x-[-50%] w-[1550px]">
        <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[300px]" />
      </div>
    </div>
  );
}

function Number1() {
  return (
    <div className="absolute contents left-[calc(91.67%-117px)] top-[8428px]" data-name="Number">
      <div className="absolute left-[calc(91.67%-117px)] size-[92px] top-[8428px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 92 92">
          <circle cx="46" cy="46" fill="var(--fill-0, white)" fillOpacity="0.15" id="Ellipse 935" r="46" />
        </svg>
      </div>
      <p className="absolute font-['Satoshi:Medium_Italic',sans-serif] leading-[70px] left-[calc(91.67%-73px)] not-italic text-[48px] text-center text-white top-[8439px] tracking-[-2px] translate-x-[-50%] w-[60px]">01</p>
    </div>
  );
}

function Title1() {
  return (
    <div className="absolute contents left-[calc(8.33%+152px)] top-[8435px]" data-name="Title">
      <div className="absolute flex flex-col font-['Satoshi:Medium',sans-serif] justify-center leading-[0] left-[calc(8.33%+152px)] not-italic text-[64px] text-white top-[8473.5px] tracking-[-1.28px] translate-y-[-50%] w-[966px]">
        <p className="leading-[77px]">{`Consultation & Initial Meeting`}</p>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute h-[70px] left-[201px] top-[8442px] w-[68px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 68 70">
        <g id="Group 27">
          <circle cx="36.5" cy="31.5" fill="var(--fill-0, black)" id="Ellipse 934" r="31.5" />
          <g id="Combined Shape">
            <mask fill="white" id="path-2-inside-1_19_1763">
              <path d={svgPaths.p3c2afc00} />
            </mask>
            <path d={svgPaths.p3c2afc00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p7a51480} fill="var(--stroke-0, black)" mask="url(#path-2-inside-1_19_1763)" />
          </g>
          <path d="M18.4648 24.8857H29.355" id="Path 21" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="2" />
          <path d="M18.4648 34.829H46.874" id="Path 22" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="2" />
          <path d="M18.4648 44.2988H46.874" id="Path 23" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute contents left-[201px] top-[8442px]" data-name="Icon">
      <Group />
    </div>
  );
}

function Block() {
  return (
    <div className="absolute contents left-[125px] top-[8376px]" data-name="Block 1">
      <Bg3 />
      <Number1 />
      <Title1 />
      <Icon2 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="absolute contents left-1/2 not-italic text-center top-[8025px] translate-x-[-50%]" data-name="Heading">
      <div className="absolute flex flex-col font-['Satoshi:Medium',sans-serif] justify-center leading-[0] left-1/2 text-[82px] text-black top-[8153px] tracking-[-2px] translate-x-[-50%] translate-y-[-50%] w-[1122px]">
        <p className="leading-[92px]">Experience the Magic where Art Meets Function.</p>
      </div>
      <p className="absolute font-['Satoshi:Italic',sans-serif] leading-[30px] left-[calc(50%+0.5px)] text-[18px] text-[rgba(0,0,0,0.4)] top-[8025px] tracking-[2px] translate-x-[-50%] w-[109px]">PROCESS</p>
    </div>
  );
}

function Process() {
  return (
    <div className="absolute contents left-1/2 top-[8025px] translate-x-[-50%]" data-name="Process">
      <Block1 />
      <Block2 />
      <Block />
      <Heading3 />
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="absolute h-[760px] left-[calc(16.67%+188px)] top-[6959px] w-[1190px]" data-name="Mask group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1190 760">
        <g id="Mask group">
          <path d={svgPaths.p2760fd00} fill="var(--fill-0, #D9D9D9)" id="Vector 2039" />
        </g>
      </svg>
    </div>
  );
}

function Right1() {
  return (
    <div className="absolute contents left-[calc(16.67%+188px)] top-[6959px]" data-name="Right">
      <MaskGroup />
    </div>
  );
}

function Heading4() {
  return (
    <div className="absolute contents left-[7.06%] right-[61.89%] top-[calc(50%+1733.5px)] translate-y-[-50%]" data-name="Heading">
      <div className="absolute font-['Satoshi:Medium',sans-serif] leading-[90px] left-[7.06%] not-italic right-[61.89%] text-[82px] text-black top-[calc(50%+1598.5px)] tracking-[-0.82px]">
        <p className="mb-0">Wooden</p>
        <p>Finish Duplex House</p>
      </div>
    </div>
  );
}

function Arrow() {
  return (
    <div className="absolute left-[167px] size-[24px] top-[7526px]" data-name="Arrow">
      <div className="absolute inset-[-3.13%_-3.12%_-2.21%_-2.21%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 26">
          <g id="Arrow">
            <path d="M0.53033 24.75L24.5303 0.75" id="Vector 49" stroke="var(--stroke-0, black)" strokeWidth="1.5" />
            <path d="M6.24439 0.75H24.5301V16.75" id="Vector 50" stroke="var(--stroke-0, black)" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Cta1() {
  return (
    <div className="absolute contents left-[127px] top-[7507px]" data-name="CTA">
      <div className="absolute h-[65px] left-[127px] rounded-[50px] top-[7507px] w-[98px]">
        <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[50px]" />
      </div>
      <Arrow />
    </div>
  );
}

function TItle() {
  return (
    <div className="absolute contents left-[127px] top-[7106px]" data-name="TItle">
      <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[52px] left-[127px] not-italic text-[24px] text-[rgba(0,0,0,0.4)] text-nowrap top-[7106px] whitespace-pre">
        <span>{`23 Jan . `}</span>
        <span className="text-black">House</span>
      </p>
    </div>
  );
}

function Left2() {
  return (
    <div className="absolute contents left-[127px] top-[7106px]" data-name="Left">
      <Heading4 />
      <Cta1 />
      <TItle />
    </div>
  );
}

function Block3() {
  return (
    <div className="absolute contents left-[127px] top-[6959px]" data-name="Block 3">
      <Right1 />
      <Left2 />
    </div>
  );
}

function Left3() {
  return (
    <div className="h-[760px] relative w-[1190px]" data-name="Left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1190 760">
        <g id="Left">
          <path d={svgPaths.p840a580} fill="var(--fill-0, #D9D9D9)" id="Vector 2039" />
        </g>
      </svg>
    </div>
  );
}

function Arrow1() {
  return (
    <div className="absolute left-[calc(91.67%-33px)] size-[24px] top-[6542px]" data-name="Arrow">
      <div className="absolute inset-[-3.13%_-3.12%_-2.21%_-2.21%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 26">
          <g id="Arrow">
            <path d="M0.53033 24.75L24.5303 0.75" id="Vector 49" stroke="var(--stroke-0, black)" strokeWidth="1.5" />
            <path d="M6.24439 0.75H24.5301V16.75" id="Vector 50" stroke="var(--stroke-0, black)" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Cta2() {
  return (
    <div className="absolute contents left-[calc(91.67%-73px)] top-[6523px]" data-name="CTA">
      <div className="absolute h-[65px] left-[calc(91.67%-73px)] rounded-[50px] top-[6523px] w-[98px]">
        <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[50px]" />
      </div>
      <Arrow1 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="absolute contents left-[64.78%] right-[6.94%] top-[calc(50%+792.5px)] translate-y-[-50%]" data-name="Heading">
      <div className="absolute font-['Satoshi:Medium',sans-serif] leading-[90px] left-[64.78%] not-italic right-[6.94%] text-[82px] text-black text-right top-[calc(50%+702.5px)] tracking-[-0.82px]">
        <p className="mb-0">Galaxy World</p>
        <p>Sky Tower</p>
      </div>
    </div>
  );
}

function TItle1() {
  return (
    <div className="absolute contents left-[calc(91.67%-152px)] top-[6210px]" data-name="TItle">
      <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[52px] left-[calc(91.67%+25px)] not-italic text-[24px] text-[rgba(0,0,0,0.4)] text-nowrap text-right top-[6210px] translate-x-[-100%] whitespace-pre">
        <span>{`23 Jan . `}</span>
        <span className="text-black">Building</span>
      </p>
    </div>
  );
}

function Right2() {
  return (
    <div className="absolute contents left-[calc(66.67%-34px)] top-[6210px]" data-name="Right">
      <Cta2 />
      <Heading5 />
      <TItle1 />
    </div>
  );
}

function Block5() {
  return (
    <div className="absolute contents left-[125px] top-[6019px]" data-name="Block 2">
      <div className="absolute flex h-[760px] items-center justify-center left-[125px] top-[6019px] w-[1190px]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <Left3 />
        </div>
      </div>
      <Right2 />
    </div>
  );
}

function MaskGroup1() {
  return (
    <div className="absolute h-[760px] left-[calc(16.67%+198px)] top-[5079px] w-[1180px]" data-name="Mask group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1180 760">
        <g id="Mask group">
          <path d={svgPaths.p2182e680} fill="var(--fill-0, #D9D9D9)" id="Vector 2039" />
        </g>
      </svg>
    </div>
  );
}

function Image() {
  return (
    <div className="absolute contents left-[calc(16.67%+198px)] top-[5079px]" data-name="Image">
      <MaskGroup1 />
    </div>
  );
}

function Arrow2() {
  return (
    <div className="absolute left-[165px] size-[24px] top-[5637px]" data-name="Arrow">
      <div className="absolute inset-[-3.13%_-3.12%_-2.21%_-2.21%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 26">
          <g id="Arrow">
            <path d="M0.53033 24.75L24.5303 0.75" id="Vector 49" stroke="var(--stroke-0, black)" strokeWidth="1.5" />
            <path d="M6.24439 0.75H24.5301V16.75" id="Vector 50" stroke="var(--stroke-0, black)" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function CtaHover() {
  return (
    <div className="absolute contents left-[125px] top-[5618px]" data-name="CTA (hover)">
      <div className="absolute bg-[#ffe03c] h-[65px] left-[125px] rounded-[50px] top-[5618px] w-[98px]" />
      <Arrow2 />
    </div>
  );
}

function Heading6() {
  return (
    <div className="absolute contents left-[6.94%] right-[65.78%] top-[calc(50%-156px)] translate-y-[-50%]" data-name="Heading">
      <p className="absolute font-['Satoshi:Medium',sans-serif] leading-[89px] left-[6.94%] not-italic right-[65.78%] text-[82px] text-black top-[calc(50%-289.5px)] tracking-[-1px]">Luxury Duplex Villa in Miami</p>
    </div>
  );
}

function TItle2() {
  return (
    <div className="absolute contents left-[125px] top-[5218px]" data-name="TItle">
      <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[52px] left-[125px] not-italic text-[24px] text-black text-nowrap top-[5218px] whitespace-pre">
        <span className="text-[rgba(0,0,0,0.4)]">07 Aug .</span>
        <span>{` Interior`}</span>
      </p>
    </div>
  );
}

function Left4() {
  return (
    <div className="absolute contents left-[125px] top-[5218px]" data-name="Left">
      <CtaHover />
      <Heading6 />
      <TItle2 />
    </div>
  );
}

function Block6() {
  return (
    <div className="absolute contents left-[125px] top-[5079px]" data-name="Block 1">
      <Image />
      <Left4 />
    </div>
  );
}

function Cta3() {
  return (
    <div className="absolute contents left-[calc(83.33%-12px)] top-[4860px]" data-name="CTA">
      <div className="absolute bg-black h-[60px] left-[calc(83.33%-12px)] top-[4860px] w-[185px]">
        <div aria-hidden="true" className="absolute border-[#141414] border-[1.5px] border-solid inset-0 pointer-events-none" />
      </div>
      <p className="absolute font-['Outfit:Medium',sans-serif] font-medium leading-[40px] left-[calc(91.67%-69.84px)] text-[15px] text-center text-white top-[4870px] tracking-[1px] translate-x-[-50%] uppercase w-[126.324px]">EXPLORE ALL</p>
    </div>
  );
}

function Heading7() {
  return (
    <div className="absolute contents left-[119px] top-[4820px]" data-name="Heading">
      <div className="absolute flex flex-col font-['Satoshi:Medium',sans-serif] justify-center leading-[0] left-[119px] not-italic text-[82px] text-black top-[4866px] tracking-[-2px] translate-y-[-50%] w-[715px]">
        <p className="leading-[92px]">Our Projects</p>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <div className="absolute contents left-[119px] top-[4820px]" data-name="Projects">
      <Block3 />
      <Block5 />
      <Block6 />
      <Cta3 />
      <Heading7 />
    </div>
  );
}

function Bg4() {
  return (
    <div className="absolute h-[1300px] left-1/2 top-[calc(50%-1632.5px)] translate-x-[-50%] translate-y-[-50%] w-[1800px]" data-name="Bg">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1800 1300">
        <g id="Bg">
          <path d="M0 0H1800V1300H0V0Z" fill="var(--fill-0, #131313)" id="Rectangle 4121" />
        </g>
      </svg>
    </div>
  );
}

function Arrow3() {
  return (
    <div className="absolute h-[25.077px] left-[calc(91.67%-99px)] top-[4421px] w-[27.167px]" data-name="Arrow">
      <div className="absolute inset-[-2.99%_-2.76%_-2.2%_-1.87%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29 27">
          <g id="Arrow">
            <path d={svgPaths.p37a7a260} id="Vector 49" stroke="var(--stroke-0, white)" strokeWidth="1.5" />
            <path d={svgPaths.p351e2e00} id="Vector 50" stroke="var(--stroke-0, white)" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Cta4() {
  return (
    <div className="absolute contents left-[calc(91.67%-128px)] top-[4393px]" data-name="CTA">
      <div className="absolute left-[calc(91.67%-128px)] rounded-[60px] size-[85px] top-[4393px]">
        <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[60px]" />
      </div>
      <Arrow3 />
    </div>
  );
}

function Bg5() {
  return (
    <div className="absolute contents left-[calc(25%+175px)] top-[4393px]" data-name="Bg">
      <div className="absolute bg-white h-[85px] left-[calc(25%+175px)] rounded-[100px] top-[4393px] w-[525px]" />
    </div>
  );
}

function Active() {
  return (
    <div className="absolute contents left-[calc(25%+192px)] top-[4405px]" data-name="Active">
      <div className="absolute bg-black h-[60px] left-[calc(25%+192px)] rounded-[50px] top-[4405px] w-[139px]" />
      <p className="absolute font-['Satoshi:Medium',sans-serif] leading-[36px] left-[calc(33.33%+114.5px)] not-italic text-[20px] text-center text-nowrap text-white top-[4416px] translate-x-[-50%] whitespace-pre">Design</p>
    </div>
  );
}

function Menu() {
  return (
    <div className="absolute contents left-[calc(25%+175px)] top-[4393px]" data-name="Menu">
      <Bg5 />
      <Active />
      <p className="absolute font-['Satoshi:Medium',sans-serif] leading-[36px] left-[calc(41.67%+112.5px)] not-italic text-[20px] text-black text-center text-nowrap top-[4416px] translate-x-[-50%] whitespace-pre">Construction</p>
      <p className="absolute font-['Satoshi:Medium',sans-serif] leading-[36px] left-[calc(50%+143px)] not-italic text-[20px] text-black text-center text-nowrap top-[4416px] tracking-[-1px] translate-x-[-50%] whitespace-pre">Architecture</p>
    </div>
  );
}

function Number2() {
  return (
    <div className="absolute contents left-[185px] top-[4418px]" data-name="Number">
      <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[36px] left-[224.5px] not-italic text-[0px] text-center text-nowrap text-white top-[4418px] translate-x-[-50%] whitespace-pre">
        <span className="text-[32px]">{`01 `}</span>
        <span className="text-[20px] text-[rgba(255,255,255,0.3)]">/ 03</span>
      </p>
    </div>
  );
}

function Bottom() {
  return (
    <div className="absolute contents left-[185px] top-[4393px]" data-name="Bottom">
      <Cta4 />
      <Menu />
      <Number2 />
    </div>
  );
}

function Cta5() {
  return (
    <div className="absolute h-[11px] left-[calc(75%-34px)] top-[4141px] w-[70px]" data-name="CTA">
      <div className="absolute bottom-[-4.55%] left-0 right-[-2.03%] top-[-3.55%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 72 12">
          <g id="CTA">
            <path d={svgPaths.p125b9cc0} id="Vector 2033" opacity="0.2" stroke="var(--stroke-0, white)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Title2() {
  return (
    <div className="absolute contents left-[68.33%] right-[18.22%] top-[calc(50%-1524px)] translate-y-[-50%]" data-name="Title">
      <p className="absolute font-['Satoshi:Medium',sans-serif] h-[87px] leading-[42px] left-[68.33%] not-italic right-[18.22%] text-[32px] text-center text-white top-[calc(50%-1567.5px)] tracking-[-1px]">{`Interior & Exterior Design`}</p>
    </div>
  );
}

function Icon3() {
  return (
    <div className="absolute h-[82px] left-[calc(75%-53px)] top-[3846px] w-[83px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 83 82">
        <g id="Icon">
          <rect height="55" id="Rectangle 4125" stroke="var(--stroke-0, white)" width="55" x="27.5" y="26.5" />
          <circle cx="27" cy="27" id="Ellipse 931" r="26.5" stroke="var(--stroke-0, white)" />
        </g>
      </svg>
    </div>
  );
}

function Block7() {
  return (
    <div className="absolute contents left-[calc(58.33%+57px)] top-[3735px]" data-name="Block 3">
      <div className="absolute left-[calc(58.33%+57px)] size-[500px] top-[3735px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 500 500">
          <circle cx="250" cy="250" fill="var(--fill-0, black)" fillOpacity="0.4" id="Ellipse 929" r="250" />
        </svg>
      </div>
      <Cta5 />
      <Title2 />
      <Icon3 />
    </div>
  );
}

function Cta6() {
  return (
    <div className="absolute h-[11px] left-[calc(41.67%+115px)] top-[4141px] w-[70px]" data-name="CTA">
      <div className="absolute bottom-[-4.55%] left-0 right-[-2.03%] top-[-3.55%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 72 12">
          <g id="CTA">
            <path d={svgPaths.p125b9cc0} id="Vector 2033" opacity="0.2" stroke="var(--stroke-0, white)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Title3() {
  return (
    <div className="absolute contents left-[44.44%] right-[44.43%] top-[calc(50%-1524.07px)] translate-y-[-50%]" data-name="Title">
      <p className="absolute font-['Satoshi:Medium',sans-serif] h-[86.863px] leading-[42px] left-[44.44%] not-italic right-[44.43%] text-[32px] text-center text-white top-[calc(50%-1567.5px)] tracking-[-1px]">{`3d Design & CAD`}</p>
    </div>
  );
}

function Icon4() {
  return (
    <div className="absolute h-[90.073px] left-[calc(41.67%+112px)] top-[3842px] w-[76.567px]" data-name="Icon">
      <div className="absolute bottom-[-0.95%] left-0 right-0 top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 77 91">
          <g id="Icon">
            <path d={svgPaths.p214e3080} id="Rectangle 3827" stroke="var(--stroke-0, white)" strokeWidth="1.5" />
            <path d={svgPaths.pc92c00} id="Vector 1498" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="1.5" />
            <path d={svgPaths.pbe7de80} id="Vector 1499" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Block8() {
  return (
    <div className="absolute contents left-[calc(33.33%+50px)] top-[3735px]" data-name="Block 2">
      <div className="absolute left-[calc(33.33%+50px)] size-[500px] top-[3735px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 500 500">
          <circle cx="250" cy="250" fill="var(--fill-0, black)" fillOpacity="0.4" id="Ellipse 929" r="250" />
        </svg>
      </div>
      <Cta6 />
      <Title3 />
      <Icon4 />
    </div>
  );
}

function Cta7() {
  return (
    <div className="absolute h-[11px] left-[calc(16.67%+103px)] top-[4141px] w-[70px]" data-name="CTA">
      <div className="absolute bottom-[-4.55%] left-0 right-[-2.03%] top-[-3.55%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 72 12">
          <g id="CTA">
            <path d={svgPaths.p125b9cc0} id="Vector 2032" stroke="var(--stroke-0, black)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="absolute contents left-[17.61%] right-[68.98%] top-[calc(50%-1524.07px)] translate-y-[-50%]" data-name="Text">
      <div className="absolute font-['Satoshi:Medium',sans-serif] h-[86.863px] leading-[42px] left-[17.61%] not-italic right-[68.98%] text-[33px] text-black text-center top-[calc(50%-1567.5px)] tracking-[-1px]">
        <p className="mb-0">{`Sketching &`}</p>
        <p>Drawing</p>
      </div>
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute h-[74px] left-[calc(16.67%+107px)] top-[3849px] w-[74.544px]">
      <div className="absolute inset-[-1.41%_-1.43%_-1.5%_-1.55%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 77 77">
          <g id="Group 427320353">
            <path d={svgPaths.p14ef5880} id="Vector 2034" stroke="var(--stroke-0, black)" strokeWidth="1.5" />
            <path d={svgPaths.p3c119e20} id="Vector 2035" stroke="var(--stroke-0, black)" strokeWidth="1.5" />
            <path d={svgPaths.p28b506c0} id="Vector 2036" stroke="var(--stroke-0, black)" strokeWidth="1.5" />
            <circle cx="29.6565" cy="48.5444" id="Ellipse 932" r="5.75" stroke="var(--stroke-0, black)" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="absolute contents left-[calc(16.67%+107px)] top-[3849px]" data-name="Icon">
      <Group9 />
    </div>
  );
}

function Block9() {
  return (
    <div className="absolute contents left-[185px] top-[3735px]" data-name="Block 1">
      <div className="absolute left-[185px] mix-blend-difference size-[500px] top-[3735px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 500 500">
          <g id="Ellipse 928" style={{ mixBlendMode: "difference" }}>
            <circle cx="250" cy="250" fill="var(--fill-0, #FFE662)" r="250" />
          </g>
        </svg>
      </div>
      <Cta7 />
      <Text1 />
      <Icon5 />
    </div>
  );
}

function AllBlocks() {
  return (
    <div className="absolute contents left-[185px] top-[3735px]" data-name="All Blocks">
      <Block7 />
      <Block8 />
      <Block9 />
    </div>
  );
}

function Heading8() {
  return (
    <div className="absolute contents left-[calc(16.67%+130px)] top-[3428px]" data-name="Heading">
      <div className="absolute font-['Satoshi:Medium',sans-serif] leading-[88px] left-[calc(16.67%+582.5px)] not-italic text-[82px] text-center text-white top-[3428px] tracking-[-1px] translate-x-[-50%] w-[905px]">
        <p className="mb-0">{`We're here to help you to `}</p>
        <p>{`Manage & Build`}</p>
      </div>
    </div>
  );
}

function OurServices() {
  return (
    <div className="absolute contents left-0 top-[3288px]" data-name="Our Services">
      <Bg4 />
      <Bottom />
      <AllBlocks />
      <Heading8 />
    </div>
  );
}

function Shape() {
  return (
    <div className="absolute h-[276.9px] left-[calc(8.33%+196.6px)] top-[2728.1px] w-[453.4px]" data-name="Shape">
      <div className="absolute bottom-0 left-[-0.29%] right-0 top-[-0.36%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 455 278">
          <g id="Shape">
            <path d={svgPaths.p1d473500} id="W" opacity="0.2" stroke="var(--stroke-0, black)" />
            <path d={svgPaths.p1ca0a00} fill="var(--fill-0, #FFE03C)" id="Rectangle 4106" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Number3() {
  return (
    <div className="absolute contents left-[123px] not-italic text-nowrap top-[2230px] tracking-[-1px] whitespace-pre" data-name="Number">
      <p className="absolute font-['Satoshi:Medium',sans-serif] leading-[120px] left-[123px] text-[120px] text-black top-[2230px]">1.9m+</p>
      <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[30px] left-[123px] text-[24px] text-[rgba(0,0,0,0.7)] top-[2351px]">Happy customers</p>
    </div>
  );
}

function Block10() {
  return (
    <div className="absolute contents left-[-785px] top-[1811px]" data-name="Block 2">
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.5)+(var(--transform-inner-height)*0.8660253882408142)))] items-center justify-center left-[-785px] top-[1811px] w-[calc(1px*((var(--transform-inner-height)*0.5)+(var(--transform-inner-width)*0.8660253882408142)))]" style={{ "--transform-inner-width": "1440", "--transform-inner-height": "636" } as React.CSSProperties}>
        <div className="flex-none rotate-[330deg]">
          <div className="h-[636px] relative w-[1440px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1440 636">
              <path d={svgPaths.p2ee9ff00} id="Ellipse 925" stroke="var(--stroke-0, black)" />
            </svg>
          </div>
        </div>
      </div>
      <Number3 />
    </div>
  );
}

function Number4() {
  return (
    <div className="absolute contents left-[115px] not-italic top-[1602px] tracking-[-1px]" data-name="Number">
      <p className="absolute font-['Satoshi:Medium',sans-serif] leading-[70px] left-[115px] text-[120px] text-black top-[1602px] w-[367px]">120k+</p>
      <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[35px] left-[115px] text-[24px] text-[rgba(0,0,0,0.7)] text-nowrap top-[1699px] whitespace-pre">Project handover</p>
    </div>
  );
}

function Block11() {
  return (
    <div className="absolute contents left-[-785px] top-[1193px]" data-name="Block 1">
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.5)+(var(--transform-inner-height)*0.8660253882408142)))] items-center justify-center left-[-785px] top-[1193px] w-[calc(1px*((var(--transform-inner-height)*0.5)+(var(--transform-inner-width)*0.8660253882408142)))]" style={{ "--transform-inner-width": "1440", "--transform-inner-height": "636" } as React.CSSProperties}>
        <div className="flex-none rotate-[330deg]">
          <div className="h-[636px] relative w-[1440px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1440 636">
              <path d={svgPaths.p2ee9ff00} id="Ellipse 925" stroke="var(--stroke-0, black)" />
            </svg>
          </div>
        </div>
      </div>
      <Number4 />
    </div>
  );
}

function Image1() {
  return (
    <div className="absolute contents left-[calc(41.67%+58px)] top-[2255px]" data-name="Image">
      <div className="absolute bg-[#c4c4c4] h-[706px] left-[calc(41.67%+58px)] top-[2255px] w-[992px]" data-name="image 2570" />
    </div>
  );
}

function Texts() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[7.972px] h-[66.972px] items-start px-[17.538px] py-[8.769px] relative rounded-[50px] w-[238.817px]" data-name="Texts">
      <div className="flex flex-col font-['Satoshi:Medium',sans-serif] h-[48.994px] justify-center leading-[0] not-italic relative shrink-0 text-[48px] text-black text-center tracking-[-2.88px] w-[205.791px]">
        <p className="leading-[58px]">Designing</p>
      </div>
    </div>
  );
}

function Texts1() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[7.972px] h-[66.972px] items-start px-[17.538px] py-[8.769px] relative rounded-[50px]" data-name="Texts">
      <div className="flex flex-col font-['Satoshi:Medium',sans-serif] h-[48.994px] justify-center leading-[0] not-italic relative shrink-0 text-[48px] text-black text-center tracking-[-2.4px] w-[121.849px]">
        <p className="leading-[58px]">Plan</p>
      </div>
    </div>
  );
}

function Texts2() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[7.972px] h-[71.687px] items-start px-[17.538px] py-[8.769px] relative rounded-[50px] w-[306.335px]" data-name="Texts">
      <div className="flex flex-col font-['Satoshi:Medium',sans-serif] h-[52.961px] justify-center leading-[0] not-italic relative shrink-0 text-[46px] text-black text-center tracking-[-2.3px] w-[274.323px]">
        <p className="leading-[58px]">Architecture</p>
      </div>
    </div>
  );
}

function Texts3() {
  return (
    <div className="bg-[#ffe921] box-border content-stretch flex gap-[9.808px] h-[77.175px] items-start px-[21.579px] py-[10.789px] relative rounded-[50px]" data-name="Texts">
      <div className="flex flex-col font-['Satoshi:Medium',sans-serif] h-[52.56px] justify-center leading-[0] not-italic relative shrink-0 text-[52.06px] text-black text-center tracking-[-2.603px] w-[156px]">
        <p className="leading-[71.362px]">colors</p>
      </div>
    </div>
  );
}

function Texts4() {
  return (
    <div className="bg-black box-border content-stretch flex gap-[7.972px] h-[70.759px] items-start px-[17.538px] py-[8.769px] relative rounded-[50px] w-[206.651px]" data-name="Texts">
      <div className="flex flex-col font-['Satoshi:Medium',sans-serif] h-[50.369px] justify-center leading-[0] not-italic relative shrink-0 text-[48px] text-center text-white tracking-[-2.4px] w-[172.064px]">
        <p className="leading-[58px]">Interior</p>
      </div>
    </div>
  );
}

function Texts5() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[7.972px] h-[66.972px] items-start px-[17.538px] py-[8.769px] relative rounded-[50px]" data-name="Texts">
      <div className="flex flex-col font-['Satoshi:Medium',sans-serif] h-[48.994px] justify-center leading-[0] not-italic relative shrink-0 text-[48px] text-black text-center tracking-[-2.4px] w-[188px]">
        <p className="leading-[58px]">Drawing</p>
      </div>
    </div>
  );
}

function Texts6() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[7.972px] h-[66.972px] items-start px-[17.538px] py-[8.769px] relative rounded-[50px] w-[327.902px]" data-name="Texts">
      <div className="flex flex-col font-['Satoshi:Medium',sans-serif] h-[48.994px] justify-center leading-[0] not-italic relative shrink-0 text-[48px] text-black text-center tracking-[-2.4px] w-[288.401px]">
        <p className="leading-[58px]">Constrcution</p>
      </div>
    </div>
  );
}

function Texts7() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[7.972px] h-[66.972px] items-start px-[17.538px] py-[8.769px] relative rounded-[50px]" data-name="Texts">
      <div className="flex flex-col font-['Satoshi:Medium',sans-serif] h-[48.994px] justify-center leading-[0] not-italic relative shrink-0 text-[48px] text-black text-center tracking-[-2.4px] w-[188px]">
        <p className="leading-[58px]">Exterior</p>
      </div>
    </div>
  );
}

function Tag() {
  return (
    <div className="absolute contents left-[calc(41.67%+73px)] top-[2795px]" data-name="Tag">
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.05081572011113167)+(var(--transform-inner-height)*0.9987080693244934)))] items-center justify-center left-[calc(41.67%+74px)] top-[2795px] w-[calc(1px*((var(--transform-inner-height)*0.05081572011113167)+(var(--transform-inner-width)*0.9987080693244934)))]" style={{ "--transform-inner-width": "238.8125", "--transform-inner-height": "66.96875" } as React.CSSProperties}>
        <div className="flex-none rotate-[357.087deg]">
          <Texts />
        </div>
      </div>
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.13389229774475098)+(var(--transform-inner-height)*0.9909958839416504)))] items-center justify-center left-[calc(75%-33px)] top-[2875.8px] w-[calc(1px*((var(--transform-inner-height)*0.13389229774475098)+(var(--transform-inner-width)*0.9909958839416504)))]" style={{ "--transform-inner-width": "156.90625", "--transform-inner-height": "66.96875" } as React.CSSProperties}>
        <div className="flex-none rotate-[7.695deg]">
          <Texts1 />
        </div>
      </div>
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.07312607765197754)+(var(--transform-inner-height)*0.9973227381706238)))] items-center justify-center left-[calc(41.67%+73px)] top-[2868.8px] w-[calc(1px*((var(--transform-inner-height)*0.07312607765197754)+(var(--transform-inner-width)*0.9973227381706238)))]" style={{ "--transform-inner-width": "306.328125", "--transform-inner-height": "71.671875" } as React.CSSProperties}>
        <div className="flex-none rotate-[4.194deg]">
          <Texts2 />
        </div>
      </div>
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.15145619213581085)+(var(--transform-inner-height)*0.9884639978408813)))] items-center justify-center left-[calc(58.33%+71px)] top-[2859.8px] w-[calc(1px*((var(--transform-inner-height)*0.15145619213581085)+(var(--transform-inner-width)*0.9884639978408813)))]" style={{ "--transform-inner-width": "199.15625", "--transform-inner-height": "77.171875" } as React.CSSProperties}>
        <div className="flex-none rotate-[351.289deg]">
          <Texts3 />
        </div>
      </div>
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.015043416991829872)+(var(--transform-inner-height)*0.9998868703842163)))] items-center justify-center left-[calc(75%-47px)] top-[2811.3px] w-[calc(1px*((var(--transform-inner-height)*0.015043416991829872)+(var(--transform-inner-width)*0.9998868703842163)))]" style={{ "--transform-inner-width": "206.640625", "--transform-inner-height": "70.75" } as React.CSSProperties}>
        <div className="flex-none rotate-[359.138deg]">
          <Texts4 />
        </div>
      </div>
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.05742604285478592)+(var(--transform-inner-height)*0.9983497858047485)))] items-center justify-center left-[calc(91.67%-152px)] top-[2805.3px] w-[calc(1px*((var(--transform-inner-height)*0.05742604285478592)+(var(--transform-inner-width)*0.9983497858047485)))]" style={{ "--transform-inner-width": "223.0625", "--transform-inner-height": "66.96875" } as React.CSSProperties}>
        <div className="flex-none rotate-[3.292deg]">
          <Texts5 />
        </div>
      </div>
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.06410687416791916)+(var(--transform-inner-height)*0.9979430437088013)))] items-center justify-center left-[calc(83.33%-32px)] top-[2874px] w-[calc(1px*((var(--transform-inner-height)*0.06410687416791916)+(var(--transform-inner-width)*0.9979430437088013)))]" style={{ "--transform-inner-width": "327.890625", "--transform-inner-height": "66.96875" } as React.CSSProperties}>
        <div className="flex-none rotate-[356.324deg]">
          <Texts6 />
        </div>
      </div>
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.07665911316871643)+(var(--transform-inner-height)*0.9970574378967285)))] items-center justify-center left-[calc(58.33%+8px)] top-[2795.3px] w-[calc(1px*((var(--transform-inner-height)*0.07665911316871643)+(var(--transform-inner-width)*0.9970574378967285)))]" style={{ "--transform-inner-width": "223.0625", "--transform-inner-height": "66.96875" } as React.CSSProperties}>
        <div className="flex-none rotate-[4.397deg]">
          <Texts7 />
        </div>
      </div>
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents left-[calc(41.67%+58px)] top-[1815px]">
      <div className="absolute h-[36px] left-[calc(41.67%+58px)] rounded-[22px] top-[1815px] w-[109px]">
        <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[22px]" />
      </div>
      <p className="absolute font-['Satoshi:Medium',sans-serif] leading-[32px] left-[calc(41.67%+113.5px)] not-italic text-[14px] text-black text-center top-[1817px] tracking-[1px] translate-x-[-50%] uppercase w-[101px]">About us</p>
    </div>
  );
}

function Text2() {
  return (
    <div className="absolute contents left-[calc(41.67%+58px)] top-[1815px]" data-name="Text">
      <Group7 />
      <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[60px] left-[calc(41.67%+58px)] not-italic text-[32px] text-black top-[1887px] w-[790px]">Tortor porttitor tortor ut vitae commodo et. Et morbi at felis vestibulum pulvinar libero ut netus neque. Eget condimentum diam et lectus.Tortor porttitor tortor ut vitae commodo et. Et morbi at felis</p>
    </div>
  );
}

function Heading9() {
  return (
    <div className="absolute contents left-[calc(41.67%+58px)] top-[1351px]" data-name="Heading">
      <p className="absolute font-['Satoshi:Bold',sans-serif] leading-[86px] left-[calc(41.67%+58px)] not-italic text-[72px] text-black top-[1351px] w-[852px]">{`In the past 7 years, we've successfully delivered 27,000+ impressive projects.`}</p>
    </div>
  );
}

function Right3() {
  return (
    <div className="absolute contents left-[calc(41.67%+58px)] top-[1351px]" data-name="Right">
      <Image1 />
      <Tag />
      <Text2 />
      <Heading9 />
    </div>
  );
}

function AboutUs() {
  return (
    <div className="absolute contents left-[-785px] top-[1193px]" data-name="About us">
      <Shape />
      <Block10 />
      <Block11 />
      <Right3 />
    </div>
  );
}

function Bg6() {
  return (
    <div className="absolute contents left-0 top-0" data-name="Bg">
      <div className="absolute bg-[#101010] h-[1183px] left-0 top-0 w-[1800px]" />
    </div>
  );
}

function SliderImage() {
  return (
    <div className="absolute contents left-[calc(41.67%+76px)] top-0" data-name="Slider Image">
      <div className="absolute bg-[#c4c4c4] h-[1183px] left-[calc(41.67%+76px)] top-0 w-[810px]" data-name="image 2579" />
    </div>
  );
}

function NextArrow() {
  return (
    <div className="absolute h-[15.838px] left-[calc(100%-75px)] top-[1117px] w-[45.078px]" data-name="Next Arrow">
      <div className="absolute bottom-[-3.47%] left-0 right-[-2.45%] top-[-3.47%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 47 17">
          <g id="Next Arrow">
            <path d="M0 8.26789H43.8586" id="Path 15" stroke="var(--stroke-0, black)" strokeWidth="1.5" />
            <path d={svgPaths.p4e56800} id="Path 16" stroke="var(--stroke-0, black)" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function PrevArrow() {
  return (
    <div className="h-[15.838px] relative w-[25.001px]" data-name="PrevArrow">
      <div className="absolute bottom-[-3.47%] left-0 right-[-4.41%] top-[-3.47%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 17">
          <g id="PrevArrow">
            <path d="M5.68247e-07 8.26789H25" id="Path 15" stroke="var(--stroke-0, black)" strokeWidth="1.5" />
            <path d={svgPaths.p2cfc5080} id="Path 16" stroke="var(--stroke-0, black)" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function SliderButton() {
  return (
    <div className="absolute contents left-[calc(91.67%-83px)] top-[1066px]" data-name="Slider Button">
      <div className="absolute bg-white left-[calc(100%-116px)] size-[117px] top-[1066px]" />
      <div className="absolute bg-[#ffe03c] left-[calc(91.67%-83px)] size-[117px] top-[1066px]" />
      <NextArrow />
      <div className="absolute flex h-[15.838px] items-center justify-center left-[calc(91.67%-42px)] top-[1117.16px] w-[25.001px]">
        <div className="flex-none rotate-[180deg]">
          <PrevArrow />
        </div>
      </div>
    </div>
  );
}

function TextSgape() {
  return (
    <div className="absolute h-[185px] left-[calc(91.67%-107.5px)] top-[464px] w-[179px]" data-name="Text Sgape">
      <div className="absolute inset-[-0.54%_-0.8%_-0.54%_-0.81%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 182 187">
          <g id="Text Sgape">
            <path d={svgPaths.p2b0fef80} id="V" stroke="var(--stroke-0, white)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Shape1() {
  return (
    <div className="absolute left-[71px] size-[25px] top-[77px]" data-name="Shape">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
        <g id="Shape">
          <path d="M0 0H25V25H0V0Z" fill="var(--fill-0, #FFE03C)" id="Rectangle 4093" />
        </g>
      </svg>
    </div>
  );
}

function AllShape() {
  return (
    <div className="absolute contents left-[71px] top-[77px]" data-name="All Shape">
      <TextSgape />
      <Shape1 />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents left-[calc(41.67%+29.57px)] top-[933.55px]">
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.30353420972824097)+(var(--transform-inner-height)*0.9528205394744873)))] items-center justify-center left-[calc(41.67%+94.25px)] top-[933.55px] translate-x-[-50%] w-[calc(1px*((var(--transform-inner-height)*0.30353420972824097)+(var(--transform-inner-width)*0.9528205394744873)))]" style={{ "--transform-inner-width": "123.71875", "--transform-inner-height": "37.78125" } as React.CSSProperties}>
        <div className="flex-none rotate-[342.33deg]">
          <p className="font-['Satoshi:Medium',sans-serif] h-[37.786px] leading-[33px] not-italic relative text-[20px] text-black text-center uppercase w-[123.734px]">EXPLORE</p>
        </div>
      </div>
      <div className="absolute h-[34.043px] left-[calc(41.67%+53.43px)] top-[982.57px] w-[102.162px]">
        <div className="absolute inset-[-2.09%_-0.23%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 103 36">
            <path d={svgPaths.pb081340} id="Vector 1497" stroke="var(--stroke-0, black)" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function StickerButton() {
  return (
    <div className="absolute contents left-[calc(33.33%+141px)] top-[877px]" data-name="Sticker Button">
      <div className="absolute left-[calc(33.33%+141px)] size-[210px] top-[877px]">
        <div className="absolute inset-[0.9%_0.97%_1.17%_0.97%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 206 206">
            <path d={svgPaths.p14da1980} fill="var(--fill-0, white)" id="Star 1" />
          </svg>
        </div>
      </div>
      <Group4 />
    </div>
  );
}

function SocialMedia() {
  return (
    <div className="absolute contents h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] left-[calc(100%-77px)] top-[728px] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" data-name="Social Media">
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-[calc(100%-65px)] top-[728px] translate-x-[-50%] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "230.75", "--transform-inner-height": "20.5" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <p className="font-['Satoshi:Medium',sans-serif] leading-[normal] not-italic relative text-[18px] text-center text-nowrap text-white whitespace-pre">
            <span className="text-[rgba(255,255,255,0.3)]">{` Follow Me -`}</span> <span className="font-['Satoshi:Bold',sans-serif]">{`Fb  /  Tw  /  Inst`}</span>.
          </p>
        </div>
      </div>
    </div>
  );
}

function SocialMedia1() {
  return (
    <div className="absolute contents left-[calc(100%-77px)] top-[728px]" data-name="Social Media">
      <SocialMedia />
    </div>
  );
}

function ProjectText() {
  return (
    <div className="absolute contents left-[29.52px] top-[921px]" data-name="Project Text">
      <div className="absolute font-['Satoshi:Medium',sans-serif] leading-[58px] left-[132px] not-italic text-[0px] text-white top-[921px] w-[475px]">
        <p className="mb-0 text-[45px]">Skyline Housing</p>
        <p className="font-['Satoshi:Regular',sans-serif] text-[32px] text-[rgba(255,255,255,0.7)]">Apartments</p>
      </div>
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.9994259476661682)+(var(--transform-inner-height)*0.033878788352012634)))] items-center justify-center left-[29.52px] top-[939px] w-[calc(1px*((var(--transform-inner-height)*0.9994259476661682)+(var(--transform-inner-width)*0.033878788352012634)))]" style={{ "--transform-inner-width": "32.6875", "--transform-inner-height": "27.5" } as React.CSSProperties}>
        <div className="flex-none rotate-[271.941deg]">
          <p className="font-['Satoshi:Medium',sans-serif] leading-[normal] not-italic relative text-[24px] text-nowrap text-white tracking-[3px] whitespace-pre">01</p>
        </div>
      </div>
    </div>
  );
}

function Heading10() {
  return (
    <div className="absolute contents left-[130.78px] top-[213px]" data-name="Heading">
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.03236202150583267)+(var(--transform-inner-height)*0.9994761943817139)))] items-center justify-center left-[130.78px] top-[355.51px] w-[calc(1px*((var(--transform-inner-height)*0.03236202150583267)+(var(--transform-inner-width)*0.9994761943817139)))]" style={{ "--transform-inner-width": "420.6875", "--transform-inner-height": "112" } as React.CSSProperties}>
        <div className="flex-none rotate-[358.145deg]">
          <div className="bg-[#ffe03c] h-[112px] w-[420.688px]" />
        </div>
      </div>
      <div className="absolute font-['Satoshi:Bold',sans-serif] h-[436px] leading-[135px] left-[132px] not-italic text-[130px] text-white top-[213px] tracking-[-1.3px] w-[976px]">
        <p className="mb-0">Our Latest</p>
        <p className="mb-0">
          <span className="text-black">Skyline</span>
          <span>{` Housing`}</span>
        </p>
        <p>Property</p>
      </div>
    </div>
  );
}

function Block4() {
  return (
    <div className="absolute contents left-[24.06%] right-[68.44%] top-[739px]" data-name="Block 5">
      <div className="absolute bg-[rgba(255,255,255,0.07)] inset-[6.63%_68.44%_92.87%_24.06%] rounded-[50px]" data-name="Rectangle">
        <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.93)] border-solid inset-[-0.5px] pointer-events-none rounded-[50.5px]" />
      </div>
      <p className="absolute font-['Satoshi:Medium',sans-serif] leading-[normal] left-[25.06%] not-italic right-[69.43%] text-[18px] text-center text-white top-[calc(50%-4818.5px)]">Building</p>
    </div>
  );
}

function Block12() {
  return (
    <div className="absolute contents left-[17.28%] right-[75.94%] top-[739px]" data-name="Block 2">
      <div className="absolute bg-[rgba(255,255,255,0.07)] inset-[6.63%_75.94%_92.87%_17.28%] rounded-[50px]" data-name="Rectangle">
        <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.93)] border-solid inset-[-0.5px] pointer-events-none rounded-[50.5px]" />
      </div>
      <p className="absolute font-['Satoshi:Medium',sans-serif] leading-[normal] left-[19.06%] not-italic right-[77.67%] text-[18px] text-center text-nowrap text-white top-[calc(50%-4819.5px)] whitespace-pre">Interior</p>
    </div>
  );
}

function Block13() {
  return (
    <div className="absolute contents left-[7.33%] right-[82.72%] top-[739px]" data-name="Block 1">
      <div className="absolute bg-[rgba(255,255,255,0.04)] inset-[6.63%_82.72%_92.87%_7.33%] rounded-[50px]" data-name="Rectangle">
        <div aria-hidden="true" className="absolute border border-solid border-white inset-[-0.5px] pointer-events-none rounded-[50.5px]" />
      </div>
      <p className="absolute font-['Satoshi:Medium',sans-serif] leading-[normal] left-[9.44%] not-italic right-[85%] text-[18px] text-center text-nowrap text-white top-[calc(50%-4817.5px)] whitespace-pre">Architecture</p>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents left-[7.33%] right-[68.44%] top-[739px]">
      <Block4 />
      <Block12 />
      <Block13 />
    </div>
  );
}

function Tag1() {
  return (
    <div className="absolute contents left-[7.33%] right-[68.44%] top-[739px]" data-name="Tag">
      <Group5 />
    </div>
  );
}

function AllTextElements() {
  return (
    <div className="absolute contents left-[29.52px] top-[213px]" data-name="All Text Elements">
      <ProjectText />
      <Heading10 />
      <Tag1 />
    </div>
  );
}

function Banner() {
  return (
    <div className="absolute contents left-0 top-0" data-name="Banner">
      <Bg6 />
      <SliderImage />
      <SliderButton />
      <AllShape />
      <StickerButton />
      <SocialMedia1 />
      <AllTextElements />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents left-0 top-0">
      <div className="absolute bg-white left-0 size-[60px] top-0" />
      <p className="absolute font-['Outfit:Regular',sans-serif] font-normal leading-[normal] left-[20px] text-[36px] text-black text-nowrap top-[7px] whitespace-pre">P</p>
    </div>
  );
}

function Logo1() {
  return (
    <div className="absolute contents left-0 top-0" data-name="Logo">
      <Group3 />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute h-[19.25px] left-[calc(100%-84px)] top-[41px] w-[28.875px]">
      <div className="absolute bottom-[-3.38%] left-0 right-0 top-[-3.38%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29 21">
          <g id="Group 16954">
            <path d="M28.875 0.65H0" id="Vector 51" stroke="var(--stroke-0, white)" strokeWidth="1.3" />
            <path d="M25.6663 10.275H3.20801" id="Vector 52" stroke="var(--stroke-0, white)" strokeWidth="1.3" />
            <path d="M20.0521 19.9L9.625 19.9" id="Vector 53" stroke="var(--stroke-0, white)" strokeWidth="1.3" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Nav() {
  return (
    <div className="absolute contents left-[calc(100%-84px)] top-[41px]" data-name="Nav">
      <Group1 />
    </div>
  );
}

function Header() {
  return (
    <div className="absolute contents left-0 top-0" data-name="Header">
      <Logo1 />
      <Nav />
    </div>
  );
}

export default function Component07ArchitectureV() {
  return (
    <div className="bg-white relative size-full" data-name="07_Architecture v2">
      <MainFooter />
      <SubscribeUs />
      <GetAQuote />
      <Process />
      <Projects />
      <OurServices />
      <AboutUs />
      <Banner />
      <Header />
    </div>
  );
}