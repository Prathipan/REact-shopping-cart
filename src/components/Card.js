import React from 'react'

function Card(props) {
  return <>
    <div className="col mb-5">
                        <div className="card h-100">
                            {
                                props.data.Batch ? (
                                    <div class="badge bg-dark text-white position-absolute" style={{"top": "0.5rem", "right": "0.5rem"}}>Sale</div>) :
                                    <></>
                            }
                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." /> 
                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h5 className="fw-bolder">{props.data.value}</h5>
                                    {
                                        props.data.Rating ? (<div class="d-flex justify-content-center small text-warning mb-2">
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                    </div>) : <></>
                                    }
                                    {
                                    props.data.SalePrice ? ( <><span class="text-muted text-decoration-line-through">{props.data.price}</span> <span>{props.data.SalePrice} </span></>  ) :( <span>{props.data.price}</span>)
                                    }
                                </div>
                            </div>
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">{props.data.view ? (<span>View Options</span>) : (<span>Add to cart</span>)}</a></div>
                            </div>
                        </div>
                    </div>
  </>
}

export default Card