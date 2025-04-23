const ProductsItem = ({product}) => {
    return (
        <div className = "product-items">
            <h2>{product.name}</h2>
            <p>${product.price}</p>
            <p>{product.description}</p>
        </div>
    );
}

export default ProductsItem;
