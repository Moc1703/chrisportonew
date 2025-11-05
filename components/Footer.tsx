export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-primary-400">
              Alat Berat Pro
            </h3>
            <p className="text-sm sm:text-base text-gray-400">
              Penyedia jasa konsultan dan training alat berat profesional dengan pengalaman bertahun-tahun.
            </p>
          </div>
          
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Tautan Cepat</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-sm sm:text-base text-gray-400 active:text-primary-400 transition-colors touch-target inline-block py-1">
                  Beranda
                </a>
              </li>
              <li>
                <a href="#about" className="text-sm sm:text-base text-gray-400 active:text-primary-400 transition-colors touch-target inline-block py-1">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a href="#services" className="text-sm sm:text-base text-gray-400 active:text-primary-400 transition-colors touch-target inline-block py-1">
                  Layanan
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm sm:text-base text-gray-400 active:text-primary-400 transition-colors touch-target inline-block py-1">
                  Kontak
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Kontak</h4>
            <p className="text-sm sm:text-base text-gray-400 mb-2 break-all">
              Email: info@alatberatpro.com
            </p>
            <p className="text-sm sm:text-base text-gray-400 break-all">
              WhatsApp: +62 812-3456-7890
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-gray-400">
          <p className="text-xs sm:text-sm">&copy; {currentYear} Alat Berat Pro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
