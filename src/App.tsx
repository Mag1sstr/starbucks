import { useEffect } from "react";
import Header from "./components/Header/Header";
import AOS from "aos";
import "aos/dist/aos.css";
import Delicious from "./components/Delicious/Delicious";
import Products from "./components/Products/Products";
function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Header />
      <Delicious />
      <Products />
    </>
  );
}

export default App;
