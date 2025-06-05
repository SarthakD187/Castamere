import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gray-900 text-gray-300 overflow-hidden">
      {/* Background flickering grid */}
      <FlickeringGrid
        className="absolute top-0 left-0 w-full h-full z-0"
        squareSize={4}
        gridGap={6}
        flickerChance={0.2}
        color="rgb(255, 255, 255)"
        maxOpacity={0.3}
      />

      {/* Center Card Content */}
      <div className="relative z-10 flex justify-center items-center min-h-screen px-4">
        <div className="bg-gray-800/80 backdrop-blur-md border border-white/10 rounded-xl shadow-xl max-w-4xl w-full p-8 space-y-10 text-center">

          {/* Intro */}
          <div>
            <h1 className="text-4xl font-bold text-white">Welcome to Castamere</h1>
            <p className="mt-2 text-gray-400">Explore this archive of my work.</p>
          </div>

          {/* Navigation Links */}
          <div className="grid sm:grid-cols-2 gap-6 text-left">
            <HubLink href="/personal-info" title="Personal Info" description="About me, background, and what I’m into." />
            <HubLink href="/projects" title="Projects" description="A collection of coding and creative work." />
            <HubLink href="/art" title="Art" description="Digital and traditional art I've made." />
            <HubLink href="/photographs" title="Photographs" description="Moments I’ve captured through the lens." />
            <HubLink href="/map" title="Places I've Been" description="A visual map of my travels." />
          </div>

        </div>
      </div>
    </div>
  );
}

// 👇🏽 Reusable Link Card Component
function HubLink({ href, title, description }: { href: string; title: string; description: string }) {
  return (
    <Link href={href}>
      <div className="bg-gray-700/70 hover:bg-gray-600/70 transition rounded-lg p-4 cursor-pointer border border-gray-600">
        <h2 className="text-xl font-semibold text-white">{title}</h2>
        <p className="text-gray-300 mt-1 text-sm">{description}</p>
      </div>
    </Link>
  );
}
