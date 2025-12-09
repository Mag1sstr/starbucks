import { useEffect } from "react";
import Header from "./components/Header/Header";
import AOS from "aos";
import "aos/dist/aos.css";
import Delicious from "./components/Delicious/Delicious";
import Products from "./components/Products/Products";
import Events from "./components/Events/Events";
import Footer from "./components/Footer/Footer";
function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Header />
      <Delicious />
      <Products />
      <Events />
      <Footer />
    </>
  );
}

export default App;
