import { useState } from "react"
import ProductsList from "./components/ProductsList"
import "./App.css";

function App() {
  

  return (
    <>
      <div>
        <Header />
        <Main/>
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

const Main = () => {
  const [products] = useState([
    { id: 1, name: "Vanilla Dream", price: 4.50, description: "A slightly creamy and sweeten chai tea infused with vanilla, honey, and half & half" },
    { id: 2, name: "Tropical Melody", price: 4.00, description: "A refreashing red tea with a hint of pineapple and Mango" },
    { id: 3, name: "Jasmine Bliss", price: 4.25, description: "A soothing of jasmine tea with a hint honey and vanilla" }
  ]);
   
  return (
    <main className="main">
      <div className="welcome">
        <h2>Welcome to Sweet Dream Tea</h2>
        <p>We offer a variety of delicious teas to satisfy your cravings.</p>
      </div>
      <div className="products">
          <ProductsList products = {products} />
      </div>
    </main>
  );
};

export default App
