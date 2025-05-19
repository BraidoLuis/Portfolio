import { Instagram, Linkedin} from "lucide-react";
import WhatsAppImg from '../assets/whatsapp-logo-4456.svg';

export default function Footer() {
  return (
    <footer className="bottom-0 w-full h-[64px] bg-[#0a0c10] text-white flex items-center justify-between px-6 shadow-md z-50">
      <h1 className="text-white font-bold text-2xl">Entre em contato</h1>
      <div className="flex gap-10">
        <a href="https://www.linkedin.com/in/lu%C3%ADs-felipe-braido-857a28352/" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-8 h-8 text-blue-600" />
        </a>
        <a href="https://wa.me/5521988124064" target="_blank" rel="noopener noreferrer">
            <img src= {WhatsAppImg} alt="imagem wpp" className="w-8 h-8 text-green-600 hover:text-green-500"></img>
        </a>
        <a href="https://www.instagram.com/luis_braido/" target="_blank" rel="noopener noreferrer">
          <Instagram className="w-8 h-8 text-pink-500" />
        </a>
      </div>
    </footer>
  );
}
