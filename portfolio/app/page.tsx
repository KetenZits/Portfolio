import { title } from "@/components/primitives";
import RotatingText from '@/components/RotatingText'
import TiltedCard from "@/components/TiltedCard";
import TextType from "@/components/TextType";
import Particles from "@/components/Particles";
import {Code} from "@heroui/react";
import Magnet from "@/components/Magnet";
import {Card, CardHeader, CardBody, Image} from "@heroui/react";
import Link from "next/link";

export default function Home() {

    const projectlist = [
        {tiltedimg: "#", name1: "", count: "", name2: "", detail: "", stack: ['Blade', 'Tailwind', 'DaisyUI', 'PHP', 'Laravel', 'MySQL', 'GSAP']},
        {tiltedimg: "#", name1: "", count: "", name2: "", detail: "", stack: []},
        {tiltedimg: "#", name1: "", count: "", name2: "", detail: "", stack: []},
    ];

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
    <div style={{ width: '100%', height: '100%', position: 'absolute' }}>
        <Particles
          particleColors={['#ffffff', '#8800C9']}
          particleCount={1000}
          particleSpread={40}
          speed={0.075}
          particleBaseSize={150}
          alphaParticles={true}
          disableRotation={false}
        />
      </div>
    <section className="mt-3 flex flex-col items-center justify-center gap-4 md:py-10 h-screen bg-black" id="project">
        <div className="container mx-auto text-center z-50 flex flex-col items-center justify-center">
          <TextType 
          text={["MY ALL PROJECTS"]}
          typingSpeed={75}
          pauseDuration={1500}
          showCursor={true}
          cursorCharacter="_"
          className="text-4xl sm:text-4xl md:text-6xl font-bold text-white text-center"
        />
        <Magnet padding={50} disabled={false} magnetStrength={10}>
          <Code color="secondary" className="ring-purple-400 ring-1 text-sm md:text-md my-5 font-semibold bg-gradient-to-r from-pink-600 via-fuchsia-500 to-violet-600 bg-clip-text text-transparent">💫 ALL OF MY PROJECTS I DO</Code>
        </Magnet>
        <div className="flex flex-col my-5">
          {/* ------------------ */}
          <div className="flex flex-col lg:flex-row lg:flex-wrap justify-center items-center lg:items-start gap-6 lg:gap-10 bg-gradient-to-r from-pink-600/10 via-fuchsia-500/10 to-violet-600/10 py-6 lg:py-10 px-4 lg:px-8 ring-2 ring-white/20 rounded-2xl shadow-lg">
            <div className="relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black/40 to-pink-900/20 backdrop-blur-sm"></div>
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-pink-500/10"></div>
              
              <div className="relative flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12 p-6 lg:p-10 border border-white/10 rounded-3xl shadow-2xl backdrop-blur-lg hover:border-purple-500/30 transition-all duration-500 group">
                
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-400/30 rounded-full animate-pulse"></div>
                  <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-pink-400/40 rounded-full animate-bounce"></div>
                  <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-purple-300/20 rounded-full animate-pulse delay-1000"></div>
                </div>

                <div className="relative flex-shrink-0 w-full flex justify-center items-center lg:basis-[320px]">
                  <div className="absolute bg-gradient-to-r from-purple-600/20 to-pink-600/20 blur-xl rounded-2xl w-[300px] h-[300px] lg:w-[340px] lg:h-[340px] group-hover:scale-110 transition-transform duration-700"></div>
                  
                  <div className="relative">
                    <TiltedCard
                      imageSrc="/project/project1.png"
                      altText="Thanapon Khawkumkrong - Dev"
                      captionText="Thanapon Khawkumkrong - Dev"
                      containerHeight="280px"
                      containerWidth="280px"
                      imageHeight="280px"
                      imageWidth="280px"
                      className="lg:!h-[320px] lg:!w-[300px] shadow-2xl"
                      rotateAmplitude={8}
                      scaleOnHover={1.08}
                      showMobileWarning={false}
                      showTooltip={true}
                      displayOverlayContent={true}
                      overlayContent={
                        <div className="backdrop-blur-lg bg-gradient-to-r from-purple-900/80 to-pink-900/80 border border-purple-400/30 py-2 px-3 rounded-2xl shadow-xl relative top-4 lg:top-6 left-3 lg:left-4 transform hover:scale-105 transition-all duration-300">
                          <h1 className="text-sm lg:text-base font-bold bg-gradient-to-r from-purple-200 via-pink-200 to-purple-200 bg-clip-text text-transparent">
                            NBAC REPAIR SYSTEM ✨
                          </h1>
                        </div>
                      }
                    />
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left flex-1 min-w-0 max-w-full lg:max-w-2xl space-y-6">
                  
                  {/* Title Section */}
                  <div className="space-y-2">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full mb-4">
                      <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                      <span className="text-xs sm:text-sm md:text-sm text-purple-300 font-medium">FEATURED PROJECT</span>
                    </div>
                    
                    <div className="space-y-1">
                      <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent tracking-tight">
                        {"{"}PROJECT 1{"};"}
                      </span>
                      <span className="block text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent">
                        NBAC Repair System
                      </span>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="absolute -left-2 top-0 w-1 h-full bg-gradient-to-b from-purple-500 to-pink-500 rounded-full opacity-30"></div>
                    
                    <p className="text-xs sm:text-sm md:text-base lg:text-base font-normal leading-relaxed text-gray-300 pl-6 lg:pl-8 relative z-10">
                      A sophisticated system engineered for seamless computer repair reporting and equipment condition monitoring. 
                      <span className="text-purple-300 font-medium"> Built with modern tech stack</span>, focusing on 
                      <span className="text-pink-300 font-medium"> convenience, speed, and operational efficiency</span> 
                      within organizational infrastructure.
                    </p>
                  </div>

                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                    {['Blade', 'Tailwind', 'DaisyUI', 'PHP', 'Laravel', 'MySQL', 'GSAP'].map((tech, index) => (
                      <span key={tech} className="px-3 py-1 text-xs font-medium bg-gray-800/50 border border-purple-500/20 text-purple-200 rounded-full hover:bg-purple-500/10 transition-colors duration-300">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                    <Link
                      href="#contact"
                      className="group relative px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white rounded-2xl shadow-lg hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300 font-semibold flex justify-center items-center gap-2 text-sm lg:text-base overflow-hidden"
                    >
                      
                      <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <span className="relative z-10 text-sm md:text-base">View Source</span>
                      <svg className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                    
                    <button className="px-6 py-3 bg-transparent border border-purple-500/30 text-purple-300 hover:bg-purple-500/10 hover:border-purple-400/50 rounded-2xl transition-all duration-300 font-medium flex justify-center items-center gap-2 text-sm md:text-base group">
                      <span>Live Demo</span>
                      <svg className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ------------------ */}    
        </div>
        </div>
    </section>
    </>
  );
}
