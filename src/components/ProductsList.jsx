import ProductsItem from "./ProductsItem"

const ProductsList = ({products}) => {
    return(
        <div className="products-container">
            <h1>Teas</h1>
            {products.map((product) => (
                <ProductsItem key = {product.id} product = {product} />
            ))}
        </div>
    )
}
export default ProductsList