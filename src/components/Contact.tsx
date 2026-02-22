import { FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="text-center space-y-6">
      <h2 className="text-3xl font-bold">Contact</h2>

      <div className="flex justify-center gap-8 text-2xl">

        <a
          href="https://linkedin.com/in/simão-daniel-mbulo-b71a53363"
          target="_blank"
          className="hover:text-blue-400 transition"
        >
          <FaLinkedin />
        </a>

        <a
          href="mailto:simaoaniel23saymon@email.com"
          className="hover:text-red-400 transition"
        >
          <FaEnvelope />
        </a>

        <a
          href="https://wa.me/244951702823"
          target="_blank"
          className="hover:text-green-400 transition"
        >
          <FaWhatsapp />
        </a>

      </div>
    </section>
  );
}