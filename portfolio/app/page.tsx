import { title } from "@/components/primitives";
import RotatingText from '@/components/RotatingText'
import TiltedCard from "@/components/TiltedCard";
import TextType from "@/components/TextType";
import Particles from "@/components/Particles";
import {Code} from "@heroui/react";
import Magnet from "@/components/Magnet";
import RippleGrid from "@/components/RippleGrid";

export default function Home() {
  return (
    <>
    <div style={{ width: '100%', height: '100%', position: 'absolute' }}>
        <Particles
          particleColors={['#ffffff', '#8800C9']}
          particleCount={1000}
          particleSpread={40}
          speed={0.075}
          particleBaseSize={100}
          alphaParticles={true}
          disableRotation={false}
        />
      </div>
    <section className="relative flex flex-col items-center justify-center gap-4 md:py-10 h-screen container mx-auto" id="home">
      <div className="inline-block max-w-xl text-center justify-center">
        <span className={title()}>Life is&nbsp;</span>
        <span className={title({ color: "violet" })}>{"{"}Coding{"};"}&nbsp;</span>
        <br />
        <span className={title()}>
          Welcome to my <span className={title({ color: "violet" })}>Portfolio</span>
        </span>
      </div>
      <div className="my-5 z-1">
        <div className="inline-block max-w-xl text-center justify-center text-2xl font-bold text-white">
          I'm a
          <RotatingText
          texts={['Front end Developer', 'Back end Developer', 'Web Developer', 'Full stack Developer', 'Software Developer']}
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
    <section className="mt-3 flex flex-col items-center justify-center gap-4 md:py-10 h-screen bg-[linear-gradient(to_bottom,_#000000,_#0E0021,_#000000)]" id="stack">
      <div className="container mx-auto text-center z-50 flex flex-col items-center justify-center">
        <TextType 
          text={["MY STACK", "OF TECHNOLOGIES"]}
          typingSpeed={75}
          pauseDuration={1500}
          showCursor={true}
          cursorCharacter="_"
          className="text-4xl sm:text-4xl md:text-6xl font-bold text-white text-center"
        />
        <Magnet padding={50} disabled={false} magnetStrength={10}>
          <Code color="secondary" className="ring-purple-400 ring-1 text-sm md:text-md my-5 font-semibold bg-gradient-to-r from-pink-600 via-fuchsia-500 to-violet-600 bg-clip-text text-transparent">✨ ALL LANGUAGES AND FRAMEWORK I USE</Code>
        </Magnet>
      <div className="mt-20 flex flex-row flex-wrap justify-center gap-4 mx-3">
        <div>
            <div className="flex items-center justify-center gap-2 px-5 py-2 bg-gradient-to-br from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-white rounded-4xl font-semibold text-2xl shadow-[0_8px_32px_rgba(255,109,0,0.4)] hover:shadow-[0_12px_48px_rgba(255,109,0,0.6)] hover:-translate-y-1 transition-all duration-300 border border-orange-400/20">
                <img src="/logo/htmllogo.png" alt="HTML" className="w-7 h-7"/>
                HTML
            </div>
        </div>
        
        <div>
            <div className="flex items-center justify-center gap-2 px-5 py-2 bg-gradient-to-br from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 text-white rounded-4xl font-semibold text-2xl shadow-[0_8px_32px_rgba(59,130,246,0.4)] hover:shadow-[0_12px_48px_rgba(59,130,246,0.6)] hover:-translate-y-1 transition-all duration-300 border border-blue-400/20">
                <img src="/logo/csslogo.png" alt="HTML" className="w-7 h-7"/>
                CSS
            </div>
        </div>
        
        <div>
            <div className="flex items-center justify-center gap-2 px-5 py-2 bg-gradient-to-br from-yellow-400 to-yellow-500 hover:from-yellow-300 hover:to-yellow-400 text-white rounded-4xl font-semibold text-2xl shadow-[0_8px_32px_rgba(251,191,36,0.4)] hover:shadow-[0_12px_48px_rgba(251,191,36,0.6)] hover:-translate-y-1 transition-all duration-300 border border-yellow-400/20">
                <img src="/logo/jslogo.png" alt="HTML" className="w-7 h-7 rounded-md"/>
                JavaScript
            </div>
        </div>
        
        <div>
            <div className="flex items-center justify-center gap-2 px-5 py-2 bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white rounded-4xl font-semibold text-2xl shadow-[0_8px_32px_rgba(37,99,235,0.4)] hover:shadow-[0_12px_48px_rgba(37,99,235,0.6)] hover:-translate-y-1 transition-all duration-300 border border-blue-500/20">
                <img src="/logo/tslogo.png" alt="HTML" className="w-7 h-7"/>
                TypeScript
            </div>
        </div>
        
        <div>
            <div className="flex items-center justify-center gap-2 px-5 py-2 bg-gradient-to-br from-white to-cyan-300 hover:from-white hover:to-cyan-200 text-blue-400 rounded-4xl font-semibold text-2xl shadow-[0_8px_32px_rgba(6,182,212,0.4)] hover:shadow-[0_12px_48px_rgba(6,182,212,0.6)] hover:-translate-y-1 transition-all duration-300 border border-cyan-400/20">
                <img src="/logo/reactlogo.png" alt="HTML" className="w-7 h-7"/>
                React.js
            </div>
        </div>
        
        <div>
            <div className="flex items-center justify-center gap-2 px-5 py-2 bg-gradient-to-br from-gray-600 to-black hover:from-gray-600 hover:to-gray-900 text-white rounded-4xl font-semibold text-2xl shadow-[0_8px_32px_rgba(0,0,0,0.6)] hover:shadow-[0_12px_48px_rgba(0,0,0,0.8)] hover:-translate-y-1 transition-all duration-300 border border-gray-600/20">
                <img src="/logo/nextlogo.png" alt="HTML" className="w-7 h-7"/>
                Next.js
            </div>
        </div>
        
        <div>
            <div className="flex items-center justify-center gap-2 px-5 py-2 bg-gradient-to-br from-teal-200 to-cyan-300 hover:from-teal-100 hover:to-cyan-200 text-blue-500 rounded-4xl font-semibold text-2xl shadow-[0_8px_32px_rgba(20,184,166,0.4)] hover:shadow-[0_12px_48px_rgba(20,184,166,0.6)] hover:-translate-y-1 transition-all duration-300 border border-teal-400/20">
                <img src="/logo/tailwindlogo.png" alt="HTML" className="w-12 h-7"/>
                Tailwind
            </div>
        </div>
        
        <div>
            <div className="flex items-center justify-center gap-2 px-5 py-2 bg-gradient-to-br from-emerald-400 to-teal-600 hover:from-emerald-300 hover:to-teal-500 text-white rounded-4xl font-semibold text-2xl shadow-[0_8px_32px_rgba(16,185,129,0.4)] hover:shadow-[0_12px_48px_rgba(16,185,129,0.6)] hover:-translate-y-1 transition-all duration-300 border border-emerald-400/20">
                <img src="/logo/daisylogo.png" alt="HTML" className="w-7 h-7"/>
                DaisyUI
            </div>
        </div>
        
        <div>
            <div className="flex items-center justify-center gap-2 px-5 py-2 bg-gradient-to-br from-purple-600 to-indigo-700 hover:from-purple-500 hover:to-indigo-600 text-white rounded-4xl font-semibold text-2xl shadow-[0_8px_32px_rgba(147,51,234,0.4)] hover:shadow-[0_12px_48px_rgba(147,51,234,0.6)] hover:-translate-y-1 transition-all duration-300 border border-purple-500/20">
                <img src="/logo/phplogo.png" alt="HTML" className="w-13 h-7"/>
                PHP
            </div>
        </div>
        
        <div>
            <div className="flex items-center justify-center gap-2 px-5 py-2 bg-gradient-to-br from-red-500 to-red-600 hover:from-red-400 hover:to-red-500 text-white rounded-4xl font-semibold text-2xl shadow-[0_8px_32px_rgba(239,68,68,0.4)] hover:shadow-[0_12px_48px_rgba(239,68,68,0.6)] hover:-translate-y-1 transition-all duration-300 border border-red-400/20">
                <img src="/logo/laravellogo.png" alt="HTML" className="w-7 h-7"/>
                Laravel
            </div>
        </div>
        
        <div>
            <div className="flex items-center justify-center gap-2 px-5 py-2 bg-gradient-to-br from-slate-700 to-slate-800 hover:from-slate-600 hover:to-slate-700 text-white rounded-4xl font-semibold text-2xl shadow-[0_8px_32px_rgba(51,65,85,0.4)] hover:shadow-[0_12px_48px_rgba(51,65,85,0.6)] hover:-translate-y-1 transition-all duration-300 border border-slate-500/20">
                <img src="/logo/prismalogo.png" alt="HTML" className="w-7 h-7"/>
                Prisma
            </div>
        </div>
        
        <div>
            <div className="flex items-center justify-center gap-2 px-5 py-2 bg-gradient-to-br from-orange-500 to-blue-600 hover:from-orange-400 hover:to-blue-500 text-white rounded-4xl font-semibold text-2xl shadow-[0_8px_32px_rgba(255,109,0,0.4)] hover:shadow-[0_12px_48px_rgba(59,130,246,0.6)] hover:-translate-y-1 transition-all duration-300 border border-orange-400/20">
                <img src="/logo/mysqllogo.webp" alt="HTML" className="w-7 h-7"/>
                MySQL
            </div>
        </div>
        
        <div>
            <div className="flex items-center justify-center gap-2 px-5 py-2 bg-gradient-to-br from-blue-700 to-slate-800 hover:from-blue-600 hover:to-slate-700 text-white rounded-4xl font-semibold text-2xl shadow-[0_8px_32px_rgba(29,78,216,0.4)] hover:shadow-[0_12px_48px_rgba(29,78,216,0.6)] hover:-translate-y-1 transition-all duration-300 border border-blue-600/20">
                <img src="/logo/postgresqllogo.png" alt="HTML" className="w-7 h-7"/>
                PostgreSQL
            </div>
        </div>
      </div>
      </div>
    </section>
    </>
  );
}
