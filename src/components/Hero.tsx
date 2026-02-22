export default function Hero() {
  return (
    <section className="text-center space-y-6 py-20">

      <h1 className="text-6xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
        Simon Dev
      </h1>

      <p className="text-gray-400 text-lg max-w-2xl mx-auto">
        Frontend & Web3 Developer building scalable, modern and high-performance web applications.
      </p>

      <div className="flex justify-center gap-6 pt-6">
        <a
          href="#projects"
          className="px-6 py-3 bg-blue-500 rounded-xl hover:bg-blue-400 transition"
        >
          View Projects
        </a>

        <a
          href="#contact"
          className="px-6 py-3 border border-gray-500 rounded-xl hover:bg-gray-700 transition"
        >
          Contact Me
        </a>
      </div>

    </section>
  );
}