function Footer(){
    return(
      <footer className="py-9 px-7 bg-[#05111d] text-center border-t border-white/[0.05]">
      <div className="flex flex-col gap-5 max-w-6xl mx-auto">
        <div className="flex justify-center gap-8 mb-5">
          <a href="#" className="text-white/70 no-underline transition-colors duration-300 hover:text-[#F95738]">Privacy Policy</a>
          <a href="#" className="text-white/70 no-underline transition-colors duration-300 hover:text-[#F95738]">Terms of Service</a>
          <a href="#" className="text-white/70 no-underline transition-colors duration-300 hover:text-[#F95738]">FAQ</a>
          <a href="#" className="text-white/70 no-underline transition-colors duration-300 hover:text-[#F95738]">Support</a>
        </div>
        <p className="text-white/50 text-sm">© 2025 HectoClash - Elevating Mathematical Excellence Worldwide</p>
      </div>
    </footer>

    )
}
export default Footer;