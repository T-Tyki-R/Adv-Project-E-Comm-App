import { useState } from "react"
import ProductsList from "./ProductsList"

/* Main.jsx  */
const Main = () => {
    const [products] = useState([
      { id: 1, name: "Vanilla Dream", price: 4.50, description: "A slightly creamy and sweetened chai tea blended with vanilla, honey, and half & half" },
      { id: 2, name: "Tropical Melody", price: 4.00, description: "A refreashing red tea with a hint of pineapple and mango" },
      { id: 3, name: "Jasmine Bliss", price: 4.25, description: "A soothing and sweetened jasmine tea with a hint honey and vanilla" }
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
  