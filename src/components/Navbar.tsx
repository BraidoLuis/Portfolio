import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="top-0 w-full h-[64px] bg-[#0a0c10] text-white flex items-center justify-between px-6 shadow-md z-50">
      <h1 className="text-white font-bold text-2xl">Meu Portfolio</h1>
      <nav className="flex gap-10">
        <Link to="/" className="cursor-pointer hover:text-gray-400 transition-colors duration-300">
          Sobre mim
        </Link>
        <Link to="/portfolio" className="cursor-pointer hover:text-gray-400 transition-colors duration-300">
          Projetos
        </Link>
        <Link to="/contatos" className="cursor-pointer hover:text-gray-400 transition-colors duration-300">
          Contato
        </Link>
      </nav>
    </header>
  );
}

