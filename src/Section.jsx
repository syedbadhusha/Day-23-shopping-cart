import Star from "./Star";
function Section({item,addCartItem,cart,removeCartItem}){
    return (
        
        <div className="col mb-5">
            <div className="card h-100">
                {/* <!-- Product image--> */}
                <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..."/>
                {/* <!-- Product details--> */}
                <div className="card-body p-4">
                <div className="text-center">
                {/* <!-- Product name--> */}
                <h5 className="fw-bolder">{item.name}</h5>
                {/* <!-- Product reviews--> */}
                        <Star starcount={item.star}/>
                {/* <!-- Product price--> */}
                {item.priceRange}
                {/* <!-- Product price--> */}
                <span className="text-muted text-decoration-line-through">{item.oldPrice}</span>
                {item.newPrice}
                </div>
                </div>
                {/* <!-- Product actions--> */}
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div className="text-center">
                    {
                       cart.some((ele)=>item.id===ele.id) ? 
                       <a className="btn btn-outline-dark mt-auto" href="#" onClick={()=>removeCartItem(item)}>Remove From Card</a>:
                       <a className="btn btn-outline-dark mt-auto" href="#" onClick={()=>addCartItem(item)}>Add To Cart</a>
                       
                    }
                </div>
            </div>
            </div>
        </div>
    )
}
export default Section;