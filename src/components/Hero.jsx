export default function Hero({ onStore }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_0%,rgba(99,102,241,0.25)_0%,rgba(255,255,255,0)_60%)]" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
              Welcome to EZBuilds Citybuild
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              A modern Minecraft network inspired by MCC Island and Cytooxien. Jump in, build big, and be part of our community.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="minecraft://?addServer=EZBuilds|ezbuilds.net" className="px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700">Join: ezbuilds.net</a>
              <button onClick={onStore} className="px-4 py-2 rounded-md bg-white shadow hover:shadow-md">Open Store</button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-video rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-500 shadow-xl" />
            <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-xl bg-white/70 backdrop-blur shadow flex items-center justify-center text-indigo-700 font-bold">EZ</div>
          </div>
        </div>
      </div>
    </section>
  )
}
