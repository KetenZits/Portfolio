import { title } from "@/components/primitives";
import RotatingText from '@/components/RotatingText'
import TiltedCard from "@/components/TiltedCard";
import TextType from "@/components/TextType";
import Particles from "@/components/Particles";
import {Code} from "@heroui/react";
import Magnet from "@/components/Magnet";

export default function Home() {
  return (
    <>
    <div style={{ width: '100%', height: '100%', position: 'absolute' }}>
        <Particles
          particleColors={['#ffffff', '#8800C9']}
          particleCount={1000}
          particleSpread={50}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
    <section className="relative flex flex-col items-center justify-center gap-4 md:py-10 h-screen container mx-auto" id="home">
      <div className="inline-block max-w-xl text-center justify-center">
        <span className={title()}>This's my&nbsp;</span>
        <span className={title({ color: "violet" })}>Website&nbsp;</span>
        <br />
        <span className={title()}>
          Welcome to my <span className={title({ color: "violet" })}>Portfolio</span>
        </span>
      </div>
      <div className="my-5 z-1">
        <div className="inline-block max-w-xl text-center justify-center text-2xl font-bold text-white">
          I'm a
          <RotatingText
          texts={['Front end Developer', 'Back end Developer', 'Web Developer', 'Full stack Developer']}
          mainClassName="px-2 sm:px-2 md:px-3 bg-violet-500 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg text-white font-bold text-3xl"
          staggerFrom={"last"}
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-120%" }}
          staggerDuration={0.025}
          splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
          transition={{ type: "spring", damping: 30, stiffness: 400 }}
          rotationInterval={2000}
        />
        </div>
      </div>
      <TiltedCard
        imageSrc="/img/main1x1.jpg"
        altText="Thanapon Khawkumkrong - Dev"
        captionText="Thanapon Khawkumkrong - Dev"
        containerHeight="300px"
        containerWidth="300px"
        imageHeight="300px"
        imageWidth="300px"
        rotateAmplitude={12}
        scaleOnHover={1.1}
        showMobileWarning={false}
        showTooltip={true}
        displayOverlayContent={true}
        overlayContent={
          <div className="backdrop-blur-lg bg-white/50 py-1.5 px-2 rounded-xl shadow-lg relative top-5 left-3">
            <h1 className="text-[16px] font-bold bg-gradient-to-r from-pink-600 via-fuchsia-500 to-violet-600 bg-clip-text text-transparent hover:drop-shadow-[0_0_10px_rgba(192,132,252,0.9)] transition-all duration-300">
              Thanapon Khawkumkrong ✨
            </h1>
          </div>
        }
      />
    </section>
    <section className="flex flex-col items-center justify-center gap-4 md:py-10 h-screen bg-[linear-gradient(to_bottom,_#000000,_#0E0021,_#000000)]">
      <div className="container mx-auto text-center z-50 flex flex-col items-center justify-center">
        <TextType 
          text={["WELCOME TO", "MY STACK", "OF TECHNOLOGIES"]}
          typingSpeed={75}
          pauseDuration={1500}
          showCursor={true}
          cursorCharacter="_"
          className="text-4xl sm:text-4xl md:text-6xl font-bold text-white text-center"
        />
        <Magnet padding={50} disabled={false} magnetStrength={10}>
          <Code color="secondary" className="ring-purple-400 ring-1 text-sm md:text-md my-5 font-semibold bg-gradient-to-r from-pink-600 via-fuchsia-500 to-violet-600 bg-clip-text text-transparent">✨ ALL LANGUAGES AND FRAMEWORK I USE</Code>
        </Magnet>
      </div>
    </section>
    </>
  );
}
