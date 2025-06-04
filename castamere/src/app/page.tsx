import Image from "next/image";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { BorderBeam } from "@/components/magicui/border-beam"; // Update path if needed


export default function Home() {
  return (
    <div className="relative min-h-screen bg-gray-900 text-gray-300">
      <FlickeringGrid
        className="absolute top-0 left-0 w-full h-full"
        squareSize={4}
        gridGap={6}
        flickerChance={0.2}
        color="rgb(255, 255, 255)"
        maxOpacity={0.3}
      />

      <div className="grid place-items-center min-h-screen p-8 sm:p-20 relative z-10">
        <div
          className="relative rounded-xl overflow-hidden w-full max-w-sm bg-gray-800"
          style={{ border: "2px solid transparent" }} // Use transparent border to keep space for beam
        >
          {/* BorderBeam absolutely positioned */}
          <BorderBeam
            size={50}
            colorFrom="#ffaa40"
            colorTo="#9c40ff"
            className="absolute inset-0 rounded-xl"
            duration={5}
            initialOffset={20}
            />

          {/* Form with padding and relative z-10 to be above beam */}
          <form className="relative z-10 p-8 space-y-6">
            <h1
              className="text-3xl font-semibold text-center text-white"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Castamere
            </h1>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-white"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium mb-1">
                Password
              </label>
              <input
                id="password"
                type="password"
                required
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-white"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 px-4 bg-white text-black font-semibold rounded hover:bg-gray-300 transition-colors"
            >
              Sign In
            </button>

            <div className="text-center">
              <a
                href="#"
                className="text-sm text-gray-400 hover:text-white underline transition-colors"
              >
                Forgot password?
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
