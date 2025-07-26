import { FaYoutube, FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Tarja com redes sociais */}
      <div className="flex justify-center gap-6 py-6">
        <a
          href="https://www.youtube.com/@devzapp"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-500 text-3xl hover:scale-110 transition-transform"
        >
          <FaYoutube />
        </a>

        <a
          href="https://www.facebook.com/devzapp/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 text-3xl hover:scale-110 transition-transform"
        >
          <FaFacebook />
        </a>

        <a
          href="https://www.instagram.com/devzapp/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-500 text-3xl hover:scale-110 transition-transform"
        >
          <FaInstagram />
        </a>
      </div>

      {/* Linha divisória */}
      <div className="border-t border-gray-700"></div>

      {/* Direitos autorais */}
      <div className="text-center py-4 text-sm">
        <p>© 2024, Todos direitos reservados. Devzapp</p>
      </div>
    </footer>
  );
};

export default Footer;
