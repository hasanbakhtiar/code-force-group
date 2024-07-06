import React from 'react'
import { useCart } from 'react-use-cart'

const Basket = () => {
    const {items,updateItemQuantity,removeItem,cartTotal,emptyCart,isEmpty} = useCart();
    return (
        <>
        {isEmpty?<div className="d-flex align-items-center justify-content-center">
        <img src="https://mcivils.ir/wp-content/themes/megawp/img/cart-empty.gif" alt="" /></div>
        :<div>
            <h1 className='text-center my-5'>Cart Page</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Photo</th>
                        <th scope="col">Title</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    
                    {items.map((item,index)=>(
                        <tr key={index}>
                        <th scope="row">{index+1}</th>
                        <td><img src={item.images[0]} width={70} alt="" /></td>
                        <td>{item.title}({item.quantity})</td>
                        <td>${parseFloat((item.price*item.quantity).toFixed(3))}</td>
                        <td><button className='btn btn-dark' onClick={()=>{
                            updateItemQuantity(item.id, item.quantity - 1)
                        }}>-</button><span className='mx-3'>{item.quantity}</span><button className='btn btn-dark' onClick={()=>{
                            updateItemQuantity(item.id, item.quantity + 1)
                        }}>+</button></td>
                        <td><button onClick={()=>{
                            swal({
                                title: "Are you sure?",
                                text: "Once deleted, you will not be able to recover this product!",
                                icon: "warning",
                                buttons: true,
                                dangerMode: true,
                              })
                              .then((willDelete) => {
                                if (willDelete) {
                                  swal("Poof! Your product has been deleted!", {
                                    icon: "success",
                                  });
                                  removeItem(item.id)
                                } else {
                                  swal("Your product file is safe!");
                                }
                              });
                            }} className='btn btn-danger'>X</button></td>
                    </tr>
                    ))}
                </tbody>
            </table>

            <p className='h3 mt-5'>Total Price:<span className='text-danger'>${parseFloat(cartTotal.toFixed(3))}</span></p>
            <button className='btn btn-danger mt-3' onClick={()=>{
                    swal({
                        title: "Are you sure?",
                        text: "Once deleted, you will not be able to recover this product!",
                        icon: "warning",
                        buttons: true,
                        dangerMode: true,
                      })
                      .then((willDelete) => {
                        if (willDelete) {
                          swal("Poof! Your product has been deleted!", {
                            icon: "success",
                          });
                          emptyCart()
                        } else {
                          swal("Your product file is safe!");
                        }
                      });
                    }
                
            }>Clear All</button>

        </div>}
        
        </>
    )
}

export default Basket