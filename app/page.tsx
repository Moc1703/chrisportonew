import Home from '@/components/sections/Home'
import About from '@/components/sections/About'
import Projects from '@/components/sections/Projects'
import Gallery from '@/components/sections/Gallery'
import Contact from '@/components/sections/Contact'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import StructuredData from '@/components/StructuredData'
import { getContentData } from '@/lib/cms'

export default async function HomePage() {
  const content = await getContentData()

  return (
    <main className="min-h-screen">
      <StructuredData />
      <Navigation />
      <Home data={content.home} />
      <About data={content.about} />
      <Projects data={content.services} />
      <Gallery data={content.gallery} />
      <Contact data={content.contact} />
      <Footer />
    </main>
  )
}
