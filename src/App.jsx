import Application from './assets/components/Application'
import Footer from './assets/components/Footer'
import Gallery from './assets/components/Gallery'
import Greting from './assets/components/Greting'
import Header from './assets/components/Header'
import Laboratory from './assets/components/Laboratory'

export default function App() {
  return (
    <div>
      <div className="container">
        <Header />
        <Greting />
        <Laboratory />
        <Gallery />
        <Application />
      </div>
      <Footer />
    </div>
  )
}
