import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";
import Card  from "@/components/Card";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import RotatingText from '@/components/RotatingText'
import TiltedCard from "@/components/TiltedCard";
import Squares from "@/components/Squares";
import Aurora from "@/components/Aurora";

export default function Home() {
  return (
    <>
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 h-[70vh]">
      <div className="absolute w-full h-[100vh] top-0 left-0">
      <Squares 
        speed={0.5} 
        squareSize={40}
        direction='diagonal' // up, down, left, right, diagonal
        borderColor='#212121'
        />
      </div>
      <div className="inline-block max-w-xl text-center justify-center z-1">
        <span className={title()}>This my&nbsp;</span>
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
    </>
  );
}
