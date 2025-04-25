import ProductsItem from "./ProductsItem"

const ProductsList = ({products}) => {
    return(
        <div className="products-container">
            {products.map((product) => (
                <ProductsItem key = {product.id} product = {product} />
            ))}
        </div>
    )
}
export default ProductsList