const ProductsItem = ({product}) => {
    return (
        <div className = "product-items">
            <h2>{product.name}</h2>
            <p>${product.price.toFixed(2)}</p>
            <p>{product.description}</p>
        </div>
    );
}

export default ProductsItem;
