import { RouterProvider } from "react-router-dom";
import Routes from "./routes/Routes";
import "./styles/global.scss"
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
// AOS.init({
//   duration: 1200,
//   easing: 'ease',
//   delay: 100,
//   once: true,
// });



function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: 'ease',
      delay: 100,
      once: true,
    });
    AOS.refresh();
  }, []);
  return (
    <RouterProvider router={Routes}/>
  );
}

export default App;
