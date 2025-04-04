function Footer(){
    return(
        <footer className="py-8 px-12 bg-[#05111d] text-center border-t border-[#081c30] border-opacity-5">
        <div className="flex flex-col gap-5 max-w-6xl mx-auto">
          <div className="flex justify-center gap-8 mb-5">
            {['Privacy Policy', 'Terms of Service', 'FAQ', 'Support'].map((item) => (
              <a 
                key={item}
                href="#" 
                className="text-white text-opacity-70 no-underline hover:text-red-500 transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </div>
          <p className="text-white text-opacity-50 text-sm">
            © 2025 HectoClash - Elevating Mathematical Excellence Worldwide
          </p>
        </div>
      </footer>

    )
}
export default Footer;