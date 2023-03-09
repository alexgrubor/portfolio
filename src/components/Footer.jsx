const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="flex flex-col items-center justify-center w-full h-32 bg-tertiary">
      <p className="text-white text-sm">Made by Aleksandra © {year} - All Rights Reserved</p>
      <div className="flex space-x-4 mt-4">
        <a href="https://www.linkedin.com/in/aleksandragrubordev/" target="_blank" className="text-white text-sm hover:text-[#e5279f]">
          LinkedIn
        </a>
        <a href="https://twitter.com/aleksandragrubo" target="_blank" className="text-white text-sm hover:text-[#e5279f]">
          Twitter
        </a>
        <a href="https://github.com/alexgrubor" target="_blank" className="text-white text-sm hover:text-[#e5279f]">
          GitHub
        </a>
      </div>
    </footer>
  );
};
export default Footer;
