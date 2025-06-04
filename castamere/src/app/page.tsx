import Image from "next/image";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gray-900 text-gray-300">
      {/* Flickering Grid Component */}
      <FlickeringGrid
        className="absolute top-0 left-0 w-full h-full"
        squareSize={4}
        gridGap={6}
        flickerChance={0.2}
        color="rgb(255, 255, 255)"
        maxOpacity={0.3}
      />

      {/* Sign-In Form */}
      <div className="grid place-items-center min-h-screen p-8 sm:p-20 relative z-10">
        <form className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-sm space-y-6">
          {/* Elegant Title */}
          <h1
            className="text-3xl font-semibold text-center text-white"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Welcome to Castamere
          </h1>

          {/* Email Field */}
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

          {/* Password Field */}
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

          {/* Sign-In Button */}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-white text-black font-semibold rounded hover:bg-gray-300 transition-colors"
          >
            Sign In
          </button>

          {/* Forgot Password Link */}
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
  );
}
