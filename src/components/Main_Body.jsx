import { useState } from "react"
import ProductsList from "./ProductsList"

/* Main.jsx  */
const Main = () => {
    const [products] = useState([
      { id: 1, name: "Vanilla Dream", price: 4.50, description: "Slightly-sweet chai-milk tea with a splash of vanilla and honey" },
      { id: 2, name: "Tropical Melody", price: 4.00, description: "Refreashing red tea with a hint of pineapple and mango" },
      { id: 3, name: "Jasmine Bliss", price: 4.25, description: "Soothing and sweetened jasmine tea with a dash of honey and ginseng" }
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

  export default Main
  