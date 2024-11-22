import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";


const App = () => {
 
  
  const routers=createBrowserRouter([
    {path:"/",element:<Layout/>,children:[{index:true,element:<Home/>}
      ,{path:"/About",element:<About/>},
      {path:"/Portfolio",element:<Portfolio/>},
      {path:"/Contact",element:<Contact/>}
    ]}
  ]);
  return (
    <>
      <RouterProvider router={routers}/>
    </>
  );
}

export default App;
