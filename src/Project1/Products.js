import React, { startTransition } from 'react'
import { useEffect, useState} from 'react'

const Products = () => {
    const [data, setdata] = useState([])
    const [loading, setloading] = useState(true)
    useEffect(() => {
        fetch("https://fakestoreapi.com/products/")
            .then(response => response.json())
            .then((data) => {
                setdata(data)
                setloading(false)
            })
    }, [])
    if (loading) {
        return <div>Please wait....</div>
    }
    return (
        <>
            <div
                id="carouselExampleInterval"
                className="carousel slide"
                data-bs-ride="carousel"
            >
                <div className="carousel-inner" style={{ height: '500px',margin:"10px 0" }}>
                    <div className="carousel-item active" data-bs-interval={1000}>
                        <img src="https://img.freepik.com/premium-photo/four-marvelous-women-summer-outfits-are-posing-street-city-center-smiling-with-joy-showing-their-purchases-camera_283617-4366.jpg?w=1060" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item" data-bs-interval={1000}>
                        <img src="https://img.freepik.com/free-photo/side-view-man-looking-clothes-hanging-rail-shop_23-2148175643.jpg?t=st=1733370952~exp=1733374552~hmac=442452e94ac596aea8bb502e676638844a48e4564d6ecda95e45c0325547efb7&w=996" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item" data-bs-interval={1000}>
                        <img src="https://img.freepik.com/free-photo/happy-people-shopping_23-2147688850.jpg?ga=GA1.1.891724481.1733132322&semt=ais_tags_boosted" className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleInterval"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleInterval"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-nzext-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>
            </div>


            <div>
                <div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', height: 700 }}>

                        {data.map((post) => ((

                            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', margin: '10px' }}>
                                <div className="card" style={{ width: "18rem", height: "100%" }}>
                                    <img src={post.image} className="postImage card-img-top" alt={post.title} /> {/* Use the product image */}
                                    <div className="card-body" style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                                        <h5 className="card-title">{post.title}</h5> {/* Display the product title */}
                                        <p className="productDescription card-text">
                                            {post.description} {/* Optionally display the product description */}
                                        </p>
                                        <a href="#" className="cardButton btn btn-primary" style={{ marginTop: "auto" }}>
                                            Buy Now
                                        </a>
                                    </div>
                                </div>

                                {/* <p>{post.title}</p> */}
                            </div>
                        )))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Products