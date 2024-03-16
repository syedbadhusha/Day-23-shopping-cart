
function CartItems({cart,removeCartItem}) {
  return (
    <div className="container position-absolute">
        <div className="row ">
            <div className="col-md-4"></div>
            <div className="col-md-6 bg-info text-secondary p-3">
            <h3 className="text-center">LIST OF CART ITEMS</h3>
            {
                (cart.length === 0) ?
                <h4 className="text-danger">ITEMS NOT AVAILABLE IN CART</h4> :
                <ol>
                {
                    cart.map((item,index) => {
                        return (
                        <li key={index} className="list-group-item d-flex justify-content-between align-items-start border border-white">
                            <div className="ms-2 me-auto">
                            <div className="fw-bold">{index+1}. {item.name}</div>
                            </div>
                            <button className="badge text-bg-danger rounded-pill" onClick={()=>removeCartItem(item)}>X</button>
                        </li>
                        )
                    })
                }
                </ol>
            }
            </div>
            <div className="col-md-2 text-center"></div>
        </div>
    </div>
  )
}

export default CartItems