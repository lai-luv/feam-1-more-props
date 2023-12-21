import "../App.css";




function ProductCard ({title, price, description}){



    return(
        <div className="product_card">
            <p>
            {title}
            </p>
            <p>
            {price}
            </p>
            <p>
            {description}
            </p>
        </div>
    )
}



export default ProductCard