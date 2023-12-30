import React from 'react'
import background from "../assets/bg-showcase-1.jpg"
function ImageShowcase({background,designnaame,designcontent,value}) {
  return <>
  {
  value?<><section className="showcase">
  <div className="container-fluid p-0">
      <div className="row g-0">
          <div className="col-lg-6 order-lg-2 text-white showcase-img" 
           style={{backgroundImage:`url(${background})`}}>
          </div>
          <div className="col-lg-6 order-lg-1 my-auto showcase-text">
              <h2>{designnaame}</h2>
              <p className="lead mb-0">{designcontent}</p>
          </div>
      </div>
      </div>
      </section>
      </>:
      <><section className="showcase">
  <div className="container-fluid p-0">
      <div className="row g-0 d-flex flex-row-reverse">
          <div className="col-lg-6 order-lg-2 text-white showcase-img" 
           style={{backgroundImage:`url(${background})`}}>
          </div>
          <div className="col-lg-6 order-lg-1 my-auto showcase-text">
              <h2>{designnaame}</h2>
              <p className="lead mb-0">{designcontent}</p>
          </div>
      </div>
      </div>
      </section>
      </>

  }
 </>
}

export default ImageShowcase