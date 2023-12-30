import React from 'react'
import Navbar from './components/Navbar'
import Masterhead from './components/Masterhead'
import CalltoAction from './components/CalltoAction'
import Footer from './components/Footer'
import Icongrid from './components/Icongrid'
import ImageShowcase from './components/ImageShowcase'
import Testimonials from './components/Testimonials'
import background1 from "./assets/bg-showcase-1.jpg"
import background2 from "./assets/bg-showcase-2.jpg"
import background3 from "./assets/bg-showcase-3.jpg"
import peopleimage1 from "./assets/testimonials-1.jpg"
import peopleimage2 from "./assets/testimonials-2.jpg"
import peopleimage3 from "./assets/testimonials-3.jpg"

let data=[
  {
    name:"Fully Responsive",
    content:"This theme will look great on any device, no matter the size!",
    icon:"window"
  },
  {
    name:"Bootstrap 5 Ready",
    content:"Featuring the latest build of the new Bootstrap 5 framework!",
    icon:"layers"
  },
  {
    name:"Easy to Use",
    content:"Ready to use with your own content, or customize the source files!",
    icon:"terminal"
  }
]
let showdata=[
  {
    value:true,
    background:background1,
    designname:"Fully Responsive Design",
    designcontent:"When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!"
  },
  {
    value:false,
    background:background2,
    designname:"Updated For Bootstrap 5",
    designcontent:"Newly improved, and full of great utility classes, Bootstrap 5 is leading the way in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 5!"
  },
  {
    value:true,
    background:background3,
    designname:"Easy to Use & Customize",
    designcontent:"Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!"
  },
]
let peopledata=[
  {
    peopleheading:"What people are saying...",
    peopleimage:peopleimage1,
    peoplename:"Margaret E",
    peoplecontent:"This is fantastic! Thanks so much guys!"
   },
   {
    peopleheading:"What people are saying...",
    peopleimage:peopleimage2,
    peoplename:"Fred S",
    peoplecontent:"Bootstrap is amazing. I've been using it to create lots of super nice landing pages."
   },
   {
    peopleheading:"What people are saying...",
    peopleimage:peopleimage3,
    peoplename:"Sarah W",
    peoplecontent:"Thanks so much for making these free resources available to us!"
   }
]


function App() {
  return <>
  <Navbar headtopic={"Start Bootstrap"}/>
  <Masterhead contenthead1={"Generate more leads with a professional landing page!"}/>
  <div className='container-icon bg-light'>
  {data.map((e,i)=>{
    return<Icongrid key={i}
      name={e.name}
      content={e.content}
      icon={e.icon}/>
     }) 
    }
    </div>
   
  {showdata.map((e,i)=>{
    return<ImageShowcase key={i}
    background={e.background}
    designnaame={e.designname}
    designcontent={e.designcontent}
    value={e.value}/>
  })}
  

<div className='container-fluid01 bg-light'>
<h2 >What people are saying...</h2>
  <div className='container02 bg-light'>
  {peopledata.map((e,i)=>{
  return <Testimonials key={i}
   peoplename={e.peoplename}
   peoplecontent={e.peoplecontent}
   peopleimage={e.peopleimage}/>
 })}
 </div>
 </div>
 <CalltoAction callactiondata={"Ready to get started? Sign up now!"}/>
  <Footer/>
    
</>
}
export default App

     