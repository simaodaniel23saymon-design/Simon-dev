export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-6">
      <h1 className="text-xl font-bold">Simon Dev</h1>
      <div className="space-x-6 text-gray-400">
        <a href="#projects" className="hover:text-white">Projects</a>
        <a href="#contact" className="hover:text-white">Contact</a>
      </div>
    </nav>
  );
}