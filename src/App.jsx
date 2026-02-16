import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import About from './components/sections/About'
import Publications from './components/sections/Publications'
import Teaching from './components/sections/Teaching'
import Contact from './components/sections/Contact'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <About />
        <Publications />
        <Teaching />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
