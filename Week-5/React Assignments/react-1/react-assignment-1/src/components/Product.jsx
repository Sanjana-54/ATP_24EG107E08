function Product(props){
    const{prodObj}=props;
    return(
        <div className="border p-3 rounded-lg text-center">
            <img src={prodObj.image} alt="image unavailable" />
            <h3>{prodObj.title}</h3>
            <p>{prodObj.category}</p>
            <h4>Rs.{prodObj.price}</h4>
        </div>
    )
}

export default Product;