import React from 'react'

function Testimonials({peoplename,peoplecontent,peopleimage}) {
  return <>
   <section class="testimonials text-center bg-light"id='totalcontainer001'>
            <div class="container" >
                <div class="row" >
    <div class="testimonial-item mx-auto  mb-lg-0">
    <div className='image001'>
<img class="img-fluid rounded-circle mb-3" src={peopleimage}/>
</div>
<div className='content001'>
<h5>{peoplename}</h5>
<p class="font-weight-light mb-0">"{peoplecontent}"</p>
</div>
</div>
</div>
  </div>
  </section>
  </>
}
export default Testimonials