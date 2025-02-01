import React from 'react'
import { useEffect } from 'react'
import gsap from 'gsap'

const About = () => {
  useEffect(()=>{
    gsap.from(".h1about",{
      x:-150,
      duration:1,
    })
    gsap.from(".plantimg",{
      y:-600,
      opacity:-6,
      duration:2,
      delay:1
    })
  })
  return (
    <><main>
      <div style={{ textAlign: "center", margin: "20px", fontFamily:"monospace" }}>
        <h1 className='h1about'>About Our Store</h1>
      </div>
      <div className='container plantimg' style={{ height: "auto", margin: "auto" }} >
        <img src="https://demo.athemes.com/sydney-fashion/wp-content/uploads/sites/136/2022/08/pexels-sid-maia-3489129-1.jpg" class="img-fluid" style={{}} />
      </div>

      <section style={{ margin: "40px", padding: " 50px" }}>
        <h1 style={{ textAlign: "center" }}>Our Story</h1>
        <p style={{ fontSize: "20px", textAlign: "center" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
        <div style={{ display: "flex", flexWrap: "wrap", textAlign: "center", justifyContent: "center" }}>
          <p style={{ maxWidth: "500px" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum venenatis odio sed convallis mollis. Sed faucibus aliquet fringilla. Mauris rhoncus nisl arcu, in congue ex consectetur ut. Suspendisse vulputate auctor est, ut congue augue tempus sit amet.</p>
          <p style={{ maxWidth: "500px" }}>Sed eleifend nisi at quam hendrerit, tincidunt consectetur ligula eleifend. Cras sit amet volutpat orci. Integer sodales mattis rutrum. Vestibulum pulvinar sapien arcu, quis pharetra nisl pretium eget.</p>
          <p style={{ maxWidth: "500px" }}>Aliquam a lorem ac quam elementum placerat. Vivamus in arcu dui. Aliquam aliquam neque sit amet quam euismod, sed efficitur erat ullamcorper. Integer condimentum tellus et eleifend commodo.</p>
          <p style={{ maxWidth: "500px" }}>Sed in augue mollis, aliquam massa a, molestie justo. Maecenas libero ante, rutrum id turpis in, ornare sollicitudin ex.</p>
        </div>
      </section>

      <section style={{ margin: "40px", padding: " 50px" }}>
        <h1 style={{ textAlign: "center" }}>Philosophy</h1>

        <div style={{ display: "flex", flexWrap: "wrap", textAlign: "center", justifyContent: "center" }}>
          <p style={{ maxWidth: "500px" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum venenatis odio sed convallis mollis. Sed faucibus aliquet fringilla. Mauris rhoncus nisl arcu, in congue ex consectetur ut. Suspendisse vulputate auctor est, ut congue augue tempus sit amet.</p>
          <p style={{ maxWidth: "500px" }}>Sed eleifend nisi at quam hendrerit, tincidunt consectetur ligula eleifend. Cras sit amet volutpat orci. Integer sodales mattis rutrum. Vestibulum pulvinar sapien arcu, quis pharetra nisl pretium eget.</p>
          <p style={{ maxWidth: "500px" }}>Aliquam a lorem ac quam elementum placerat. Vivamus in arcu dui. Aliquam aliquam neque sit amet quam euismod, sed efficitur erat ullamcorper. Integer condimentum tellus et eleifend commodo.</p>
          <p style={{ maxWidth: "500px" }}>Sed in augue mollis, aliquam massa a, molestie justo. Maecenas libero ante, rutrum id turpis in, ornare sollicitudin ex.</p>
        </div>
      </section>

      <section style={{ padding: "100px" }}>
        <div style={{ margin: "20px" }}>
          <h1>Want to talk to us?</h1>
          <div style={{margin:"40px auto"}}>
            <h5>Follow the link below to send us a message or quickly get in touch over phone or email.</h5>
          </div>
          <button type="button" class="btn btn-danger"><span class="material-symbols-outlined" style={{ marginRight: "8px", verticalAlign: "middle" }}>
            arrow_forward
          </span>Get in touch</button>
        </div>
      </section>

<footer style={{backgroundColor:"ButtonFace",padding:"50px"}}>
  <div style={{display:"flex",flexWrap:"wrap", justifyContent:"space-around"}}>
    <div style={{maxWidth:"600px"}}>
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
    </div><br/>
  </div>
  <div style={{marginLeft:"80px"}}><p>© 2024 Sydney. Proudly powered by Sydney</p></div>
</footer>

    </main>
    </>
  )
}

export default About