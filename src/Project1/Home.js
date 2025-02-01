import React from 'react'
import { useEffect } from 'react'
import gsap from 'gsap'


const Home = () => {
  let a = gsap.timeline()
  useEffect(()=>{
    a.from(".bgimg",{
      opacity:0,
      duration:2,
      delay:3,
      x:800
    })
    a.from(".firsth1",{
      y:20,
      duration: 0.5,
      opacity:0,
      color:"grey",
      scale:0.5
    })
    
  })
  return (
    <>
      <div className="bgimg position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-body-tertiary"
        style={{ backgroundImage: "url('https://demo.athemes.com/sydney-fashion/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/sites/136/2022/08/h1-1.jpg.webp')", backgroundSize: "cover", backgroundPosition: "0% 30% " }}>
        <div className="col-md-6 p-lg-5 mx-3 my-5">
          <h1 className="firsth1 display-3 fw-normal">Upgrade your wardrobe with new collections</h1>
        </div>
        <div className="col-md-6 p-lg-5 ms-auto my-5">
          <h3 className="fw-normal mb-3">
            starting at $19.99
          </h3>
          <div className="d-flex gap-3 justify-content-center lead fw-normal">
            <a className="homeBtn btn btn-danger" href="#">
            <span class="material-symbols-outlined" style={{ marginRight: "8px", verticalAlign: "middle" }}>
                  arrow_forward
                </span>Shop now
            </a>
          </div>
        </div>


      </div>


      <div className="container">
        <div className="row" style={{ margin: "40px" }}>
          <div className="cards col-md-6 mb-3">
            <div className="card" style={{ height: "80%", position: "relative" }}>
              <img src="https://demo.athemes.com/sydney-fashion/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/sites/136/2022/08/unsplash_mU88MlEFcoU-1-1.jpg.webp" className="card-img-top" alt="Men's Pant 1" />
              <a href="#" className="homeBtn btn btn-light " style={{ position: "absolute", bottom: "50px", right: "10px", border: "2px solid grey" }}>
                <span class="material-symbols-outlined" style={{ marginRight: "8px", verticalAlign: "middle" }}>
                  arrow_forward
                </span> Men's Pant
              </a>
            </div>
          </div>
          <div className="col-md-6 mb-3">
            <div className="card" style={{ height: "80%", position: "relative", marginTop: "50px" }}>
              <img src="https://demo.athemes.com/sydney-fashion/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/sites/136/2022/08/ian-keefe-zeh5pg_7H1g-unsplash-1-1.jpg.webp" className="card-img-top" alt="Men's Pant 2" />
              <a href="#" className="homeBtn btn btn-light " style={{ position: "absolute", bottom: "10px", right: "10px", border: "2px solid grey" }}>
                <span class="material-symbols-outlined" style={{ marginRight: "8px", verticalAlign: "middle" }}>
                  arrow_forward
                </span> Trench coats
              </a>
            </div>
          </div>
        </div>
      </div>


      <div className='container'>
        <div className="row">
          <div className="col-md-6 mb-3">
            <div className="card" style={{ height: "80%", position: "relative" }}>
              <img src="https://demo.athemes.com/sydney-fashion/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/sites/136/2022/08/unsplash_r5xHI_H44aM-1-1.jpg.webp" className="card-img-top" alt="Men's Pant 1" />
              <a href="#" className="homeBtn btn btn-light " style={{ position: "absolute", bottom: "50px", right: "10px", border: "2px solid grey" }}>
                <span class="material-symbols-outlined" style={{ marginRight: "8px", verticalAlign: "middle" }}>
                  arrow_forward
                </span> Leather bags
              </a>
            </div>
          </div>

          <div className="col-md-6 mb-3">
            <div className="card" style={{ height: "52%", position: "relative", marginTop: "50px" }}>
              <img src="https://demo.athemes.com/sydney-fashion/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/sites/136/2022/08/unsplash_3OZr-hLbsq0-1-1.jpg.webp" className="card-img-top" alt="Men's Pant 2" />
              <a href="#" className="homeBtn btn btn-light " style={{ position: "absolute", bottom: "10px", right: "10px", border: "2px solid grey" }}>
                <span class="material-symbols-outlined" style={{ marginRight: "8px", verticalAlign: "middle" }}>
                  arrow_forward
                </span> Shoes
              </a>
            </div>
          </div>
        </div>
      </div>


      <div>
        <h1 style={{ textAlign: "center" }}>Top Products</h1>
      </div>

      <div className="topProducts" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around", margin: "20px",textAlign:"center" }}>
        <div className="card" style={{ width: "18rem" }}>
          <img src="https://demo.athemes.com/sydney-fashion/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/sites/136/2022/08/Mask-group-2_1-1-480x562.jpg.webp" className="card-img-top" alt="..." />
          <div className="card-body" style={{ padding: "1px" }}>
            <h5 className="card-title">Accessories</h5>
            <p className="card-text">
              Boho Swing Midi Dresses with Extra Large Pockets
            </p>
            <a href="#" className="btn btn-light btn-sm" >
              £12.00
            </a>
          </div>
        </div>

        <div className="card" style={{ width: "18rem" }}>
          <img src="https://demo.athemes.com/sydney-fashion/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/sites/136/2022/08/image-1_1-1-480x562.jpg.webp" className="card-img-top" alt="..." />
          <div className="card-body" style={{ padding: "1px" }}>
            <h5 className="card-title">Shirts</h5>
            <p className="card-text">
              Florence Gathered Detail Half Sleeve V-Neck Dress
            </p>
            <a href="#" className="btn btn-light btn-sm " >
              £20.00
            </a>
          </div>
        </div>

        <div className="card" style={{ width: "18rem" }}>
          <img src="https://demo.athemes.com/sydney-fashion/wp-content/uploads/sites/136/2022/08/Mask-group-4_1-480x562.jpg" className="card-img-top" alt="..." />
          <div className="card-body" style={{ padding: "1px" }}>
            <h5 className="card-title">Jackets</h5>
            <p className="card-text">
              Women’s Short-Sleeve Scoop Neck Swing Dress
            </p>
            <a href="#" className="btn btn-light btn-sm " >
              £25.00
            </a>
          </div>
        </div>


      </div>

      <div className="topProducts" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around", margin: "20px ",textAlign:"center"}}>
        <div className="card" style={{ width: "18rem" }}>
          <img src="https://demo.athemes.com/sydney-fashion/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/sites/136/2022/08/Mask-group-3_1-1-480x562.jpg.webp" className="card-img-top" alt="..." />
          <div className="card-body" style={{ padding: "1px" }}>
            <h5 className="card-title">Shirts</h5>
            <p className="card-text">
              One Shoulder Bow Detail Midi Sheath Dress
            </p>
            <a href="#" className="btn btn-light btn-sm " >
              £25.00
            </a>
          </div>
        </div>

        <div className="card" style={{ width: "18rem" }}>
          <img src="https://demo.athemes.com/sydney-fashion/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/sites/136/2022/08/ezgif-1-1-480x562.jpg.webp" className="card-img-top" alt="..." />
          <div className="card-body" style={{ padding: "1px" }}>
            <h5 className="card-title">Accessories</h5>
            <p className="card-text">
              Gathered Detail Florence Half Sleeve V-Neck Dress
            </p>
            <a href="#" className="btn btn-light btn-sm " >
              £18.00
            </a>
          </div>
        </div>

        <div className="card" style={{ width: "18rem" }}>
          <img src="https://demo.athemes.com/sydney-fashion/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/sites/136/2022/08/ezgif-2-480x562.jpg.webp" className="card-img-top" alt="..." />
          <div className="card-body" style={{ padding: "1px" }}>
            <h5 className="card-title">Accessories</h5>
            <p className="card-text">
              Casual V Neck T Shirts for Women Mesh Short Sleeve Dressy Tops
            </p>
            <a href="#" className="btn btn-light btn-sm " >
              £17.00
            </a>
          </div>
        </div>


      </div>


      <div style={{ display: "flex", flexDirection: "row", margin: "50px", height: "500px" }}>
        <div className='container-fluid' style={{ flex: "2" }}>
          <img src="https://images.pexels.com/photos/3965545/pexels-photo-3965545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="img-fluid" alt="..." style={{ height: "100%", width: "100%", objectFit: "cover" }} />
        </div>
        <div className='container-fluid' style={{ flex: "1", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", backgroundColor: "#f0f0f0" }}>
          <h1>We craft sustainable fashion</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
          <button>Learn More</button>
        </div>
      </div>

      <footer style={{ backgroundColor: "yellowgreen", padding: "50px" }}>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around" }}>
          <div style={{ maxWidth: "600px" }}>
            <h1>About our store</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nibh risus, finibus id rhoncus et, dictum feugiat neque. Sed at imperdiet ex, vehicula dapibus lorem. Curabitur at convallis odio, ut suscipit odio.</p>
          </div>
          <div>
            <h1>Useful links</h1>
            <p>Cookie policy</p>
            <p>Term and conditions</p>
            <p>Delivery Methods</p>
          </div>
          <div>
            <h1>Contact</h1>
            <p>Email at: office@example.org</p>
            <p>Call us: +12127772754</p>
          </div><br />
        </div>
        <div style={{ marginLeft: "80px" }}><p>© 2024 Sydney. Proudly powered by Sydney</p></div>
      </footer>
    </>




  )
}

export default Home