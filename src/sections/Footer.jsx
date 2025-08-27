const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3">
        {/* GitHub */}
        <a 
          href="https://github.com/aarav-12" 
          target="_blank" 
          rel="noopener noreferrer"
          className="social-icon block w-10 h-10"
        >
          <img src="/assets/github.svg" alt="github" className="w-full h-full" />
        </a>

        {/* LinkedIn */}
        <a 
          href="https://www.linkedin.com/in/aarav-mithrani-571181206" 
          target="_blank" 
          rel="noopener noreferrer"
          className="social-icon block w-6 h-6"
        >
          <img src="/assets/linkedin.svg" alt="linkedin" className="w-full h-full" />
        </a>

        {/* Instagram */}
        <a 
          href="https://instagram.com/aarav_mithrani" 
          target="_blank" 
          rel="noopener noreferrer"
          className="social-icon block w-10 h-10"
        >
          <img src="/assets/instagram.svg" alt="instagram" className="w-full h-full" />
        </a>
      </div>

      <p className="text-white-500">© 2024 Aarav Mithrani. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
