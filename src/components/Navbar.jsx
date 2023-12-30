import React from 'react'

function Navbar({headtopic}) {
  return <>
    <nav className="navbar navbar-light bg-light static-top">
            <div className="container">
                <a className="navbar-brand" href="#!">{headtopic}</a>
                <a className="btn btn-primary" href="#signup">Sign Up</a>
            </div>
        </nav>

  </>
}

export default Navbar