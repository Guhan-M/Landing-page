import React from 'react'

function CalltoAction({callactiondata}) {
  return<>
  <section className="call-to-action text-white text-center" id="signup">
            <div className="container position-relative">
                <div className="row justify-content-center">
                    <div className="col-xl-6">
                        <h2 className="mb-4">{callactiondata}</h2>
                            <div className="row">
                                <div className="col">
                                    <input className="form-control form-control-lg" id="emailAddressBelow" type="email" placeholder="Email Address" data-sb-validations="required,email" />
                                </div>
                                <div className="col-auto"><button className="btn btn-primary btn-lg disabled" id="submitButton" type="submit">Submit</button></div>
                            </div>
                    </div>
                </div>
            </div>
        </section>
  </>
}

export default CalltoAction