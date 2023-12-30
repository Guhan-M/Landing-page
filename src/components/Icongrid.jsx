import React from 'react'
// import { useState } from 'react'

function Icongrid({name,content,icon}) {
  return <>
   <section className="features-icons bg-light text-center"> 
    {/* <div className="container"> */}
       {/* <div className="row"> */}
           {/* <div className="col-lg-4"> */}
               <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-2">
                   <div className="features-icons-icon d-flex">
                     <i className={`bi-${icon} m-auto text-primary`}></i>
                     </div>
                   <h3>{name}</h3>
                   <p className="lead mb-0">{content}</p>
               </div>
           {/* </div> */}
           {/* </div> */}
   {/* </div> */}
 </section>
        
</>
}
export default Icongrid 
