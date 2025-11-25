import { useEffect } from "react";
import Header from "./components/Header/Header";
import AOS from "aos";
import "aos/dist/aos.css";
import Delicious from "./components/Delicious/Delicious";
function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Header />
      <Delicious />
    </>
  );
}

export default App;
