import "./App.css";
import "./css/variables.css";
// import "./swiper/swiper.min.css";
// import "./swiper/swiper-bundle.min.css";
import "swiper/css";
import "swiper/css/bundle";

// import "./css/swiper/swiper.mim.css"
// Import Swiper React components
import Swiper from "swiper";
// Import Swiper styles

// import "./swiper-bundle.css",
// import "./swiper-bundle.css",

import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Routes from "./config/Routes";

function App() {
  return (
    <BrowserRouter>
      {/* <Route
        render={(props) => (
          <>
            <Header {...props} />
            <Routes />
            <Footer />
          </>
        )}
      /> */}

      <>
        <Header />
        <Routes />
        <Footer />
      </>
    </BrowserRouter>
  );
}

export default App;
