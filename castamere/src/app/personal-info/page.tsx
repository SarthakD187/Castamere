import Link from "next/link";
import { Particles } from "@/components/magicui/particles";

export default function PersonalInfo() {
  return (
    <div className="relative min-h-screen bg-gray-900 text-gray-300 overflow-hidden flex justify-center items-center px-4">

      {/* Particles Background */}
      <Particles
        className="absolute top-0 left-0 w-full h-full z-0"
        quantity={5000}
        size={0.6}
        color="#7a34eb" // light gray particles
      />

      <div className="relative z-10 bg-gray-800/80 backdrop-blur-md border border-white/10 rounded-xl shadow-xl max-w-4xl w-full p-8 space-y-10 text-center">

        {/* Page Title */}
        <h1 className="text-4xl font-bold text-white">Personal Info</h1>

        <div className="flex flex-col md:flex-row md:space-x-8 text-left">
          {/* Main Text Content */}
          <div className="flex-1 space-y-8">

            {/* Personal Info Section */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-2">About Me</h2>
              <p className="text-gray-300">
                Hi! I’m Sarthak Darekar, a passionate developer and artist. I love combining creativity with technology to build engaging experiences.
              </p>
            </section>

            {/* Skills Section */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-2">Skills</h2>
              <ul className="list-disc list-inside text-gray-300">
                <li>JavaScript / TypeScript</li>
                <li>React / Next.js</li>
                <li>Node.js</li>
                <li>Digital Art & Design</li>
                <li>Photography</li>
              </ul>
            </section>

            {/* Interests Section */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-2">Interests</h2>
              <p className="text-gray-300">
                Coding, digital art, travel, photography, and reading about history and technology.
              </p>
            </section>

            {/* Currently Into Section */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-2">What I'm Currently Into</h2>
              <p className="text-gray-300">
                Exploring creative coding with WebGL and experimenting with AI-generated art.
              </p>
            </section>

            {/* Currently Reading Section */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-2">What Book I'm Currently Reading</h2>
              <p className="text-gray-300 italic">
                "Sapiens: A Brief History of Humankind" by Yuval Noah Harari
              </p>
            </section>

          </div>

          {/* Image Box Top-Right */}
          <div className="mt-8 md:mt-0 md:w-48 h-48 bg-gray-700 rounded-lg border border-white/20 shadow-lg overflow-hidden self-start">
            <img
              src="/your-profile-image.jpg" // Replace with your image path
              alt="Profile"
              className="object-cover w-full h-full"
              draggable={false}
            />
          </div>
        </div>

        {/* Back to Home Button */}
        <div className="mt-8 text-center">
          <Link
            href="/"
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
