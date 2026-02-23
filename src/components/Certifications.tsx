export default function Certifications() {
  const certificates = [
    {
      title: "Blockchain Fundamentals",
      issuer: "Udemy",
      file: "/certificates/blockchain.pdf",
    },
    {
      title: "Advanced React",
      issuer: "Online Course",
      file: "/certificates/react.pdf",
    },
  ];

  return (
    <section className="space-y-8">
      <h2 className="text-3xl font-bold text-center">Certifications</h2>

      <div className="space-y-6 max-w-2xl mx-auto">
        {certificates.map((cert, index) => (
          <div
            key={index}
            className="bg-slate-800 p-6 rounded-xl hover:bg-slate-700 transition"
          >
            <h3 className="text-lg font-semibold">{cert.title}</h3>
            <p className="text-gray-400">{cert.issuer}</p>

            <a
              href={cert.file}
              target="_blank"
              className="text-blue-400 hover:underline"
            >
              View Certificate
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}