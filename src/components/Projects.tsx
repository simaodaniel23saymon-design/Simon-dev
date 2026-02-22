export default function Projects() {
  return (
    <section id="Projects">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-gray-900 p-6 rounded-xl">
          <h3 className="text-xl font-semibold mb-2">
            Web3 Portfolio
          </h3>
          <p className="text-gray-400">
            Personal developer portfolio built with Next.js and TypeScript.
          </p>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl">
          <h3 className="text-xl font-semibold mb-2">
            Blockchain Study Project
          </h3>
          <p className="text-gray-400">
            Smart contract experiments and decentralized app prototypes.
          </p>
        </div>
      </div>
    </section>
  );
}