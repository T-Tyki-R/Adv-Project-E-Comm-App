import { useState } from "react"
import ProductsList from "./components/ProductsList"
import "./App.css";

function App() {
  const [products] = useState([
    { id: 1, name: "Vanilla Dream", price: 4.50, description: "A slightly creamy and sweeten chai tea infused with vanilla and half & half" },
    { id: 2, name: "Tropical Melody", price: 4.00, description: "A refreashing red tea with a hint of pineapple and Mango" },
    { id: 3, name: "Jasmine Bliss", price: 4.25, description: "A soothing of jasmine tea with a hint honey and vanilla" }
  ]);
   

  return (
    <>
      <div>
        <Header />
        <ProductsList products = {products} />
      </div>
    </>
  )
}

const Header = () => {
  return (
    <header>
      <nav>
        <h1>Sweet Dream Tea</h1>
      </nav>
      
    </header>
  );
};


export default App
