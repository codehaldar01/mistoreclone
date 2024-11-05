import "./App.css"
import PreNavbar from "./components/PreNavbar";
import Navbar from "./components/Navbar.js"
import NavOptions from './components/NavOptions.js'
import Offer from "./components/Offer.js"
import Heading from "./components/Heading.js";
import StarProduct from "./components/StarProduct.js"
import HotAccessoriesMenu from "./components/HotAccessoriesMenu.js"
import HotAccessories from "./components/HotAccessories.js"
import ProductReview from "./components/ProductReview.js"
import Footer from './components/Footer.js'
import Banner from './components/Banner.js'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Slider from "./components/Slider.js"
import data from "./Data/data.json"
const banner = data.banner;
const offers = data.offer;
const starProduct = data.starProduct;
const hotAccessories = data.hotAccessories;
const hotAccessoriesCover = data.hotAccessoriesCover;
const productReviews = data.productReviews;
const miPhones = data.miPhones;
const redmiPhones = data.redmiPhones;
const tv = data.tv;
const laptop = data.laptop;
const fitnessAndLifeStyle = data.fitnessAndLifeStyle;
const home = data.home;
const audio = data.audio;
const accessories = data.accessories;


function App() {
  return (
    <Router>
      <PreNavbar />
      <Navbar />
      <NavOptions miPhones={miPhones} redmiPhones={redmiPhones} tv={tv} laptop={laptop} fitnessAndLifeStyle={fitnessAndLifeStyle} home={home} audio={audio} accessories={accessories} />
      <Slider start={banner.start} />
      <Offer offers={offers} />
      <Heading text="STAR PRODUCTS" />
      <StarProduct starProduct={starProduct} />
      <Heading text=" HOT ACCESSORIES" />
      <HotAccessoriesMenu />
      <Routes>
        <Route path="/music" element={<HotAccessories music={hotAccessories.music} musicCover={hotAccessoriesCover.music} />} ></Route>
      </Routes>
      <Routes>
        <Route path="/smartdevices" element={<HotAccessories smartDevices={hotAccessories.smartDevice} smCover={hotAccessoriesCover.smartDevice} ></HotAccessories>}  ></Route>
      </Routes>
      <Routes>
        <Route path="/home" element={<HotAccessories home={hotAccessories.home} homeCover={hotAccessoriesCover.home} />} ></Route>
      </Routes>
      <Routes>
        <Route path="/lifestyle" element={<HotAccessories lifeStyle={hotAccessories.lifeStyle} lsCover={hotAccessoriesCover.lifeStyle} />} ></Route>
      </Routes>
      <Routes>
        <Route path="/mobileAccessories" element={<HotAccessories mb={hotAccessories.mobileAccessories} mbCover={hotAccessoriesCover.mobileAccessories} />} ></Route>
      </Routes>
      <Heading text="Product Reviews" />
      <ProductReview productReviews={productReviews} />
      <Banner banner={banner} />
      <Footer footer={data.footer} />
    </Router >
  );
}

export default App;
