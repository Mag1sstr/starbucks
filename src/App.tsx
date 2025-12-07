import { useEffect } from "react";
import Header from "./components/Header/Header";
import AOS from "aos";
import "aos/dist/aos.css";
import Delicious from "./components/Delicious/Delicious";
import Products from "./components/Products/Products";
import Events from "./components/Events/Events";
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
    </>
  );
}

export default App;
