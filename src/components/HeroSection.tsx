import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import { TextGenerateEffect } from "./ui/text-generate-effect";

function HeroSection() {
  const words = `Dance isn't just steps, it's a story. Let your body be the language,weaving emotions into motion.Unleash your inner storyteller! Dance transforms you into a living narrative. Every movement speaks, weaving
  emotions into a captivating performance`;
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="p-4 relative z-10 w-full text-center">
        <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text bg-gradient-to-b from-neutral-50 to-neutral-400 text-teal-400">
          Weave a Story with Your Body
        </h1>
        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
          <TextGenerateEffect words={words} />
        </p>
        <div className="mt-4 flex justify-center text-center">
          <Link href={"/courses"}>
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 "
            >
              Discover Your Dance Style!!! 
            </HoverBorderGradient>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
