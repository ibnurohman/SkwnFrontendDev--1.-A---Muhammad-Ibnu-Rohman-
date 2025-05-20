import Navbar from './components/Navbar'
import './App.css'
import BannerOne from './components/BannerOne'
import BannerTwo from './components/BannerTwo'
import BannerThree from './components/BannerThree'
import CategorySection from './components/BannerFour'
import BestSellerSection from './components/BestSaller'
import LimitedDealBanner from './components/LimitedBanner'
import Footer from './components/Footer'
function App() {

  return (
    <>
      <Navbar/>
      <BannerOne/>
      <BannerTwo/>
      <BannerThree/>
      <CategorySection/>
      <BestSellerSection/>
      <LimitedDealBanner/>
      <Footer/>
    </>
  )
}

export default App
