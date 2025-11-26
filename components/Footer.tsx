export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-primary-400">
              YourName
            </h3>
            <p className="text-sm sm:text-base text-gray-400">
              Full Stack Developer creating innovative digital solutions with modern web technologies.
            </p>
          </div>
          
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-sm sm:text-base text-gray-400 active:text-primary-400 transition-colors touch-target inline-block py-1">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-sm sm:text-base text-gray-400 active:text-primary-400 transition-colors touch-target inline-block py-1">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="text-sm sm:text-base text-gray-400 active:text-primary-400 transition-colors touch-target inline-block py-1">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm sm:text-base text-gray-400 active:text-primary-400 transition-colors touch-target inline-block py-1">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Connect</h4>
            <p className="text-sm sm:text-base text-gray-400 mb-2 break-all">
              Email: hello@yourportfolio.com
            </p>
            <p className="text-sm sm:text-base text-gray-400 break-all">
              WhatsApp: +62 812-3456-7890
            </p>
            <p className="text-sm sm:text-base text-gray-400 mt-3">
              Jakarta, Indonesia
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-gray-400">
          <p className="text-xs sm:text-sm">&copy; {currentYear} YourName. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
