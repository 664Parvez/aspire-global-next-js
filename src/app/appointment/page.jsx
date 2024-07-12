import React from "react";
import appointmentCss from "../styles/appointment.module.css"

const appointment = () => {
    return (
        <>
            <div className={appointmentCss.first_section}>
                <h1>Appointment Form</h1>
            </div>

            <div className={appointmentCss.second_section}>
                <div className="container">
                    <form action="">
                        <div className="row">
                            <div className="col-lg-2"></div>
                            <div className="col-lg-8">
                                <div className="shadow rounded p-4">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <label htmlFor="full-name">Full Name <span>*</span></label>
                                            <input type="text" className="form-control" name="full-name" id="full-name" placeholder="Full name" required />
                                        </div>
                                        <div className="col-lg-6 mt-4">
                                            <label htmlFor="email">Email <span>*</span></label>
                                            <input type="email" className="form-control" name="email" id="email" placeholder="Email" required />
                                        </div>
                                        <div className="col-lg-6 mt-4">
                                            <label htmlFor="phone">Phone <span>*</span></label>
                                            <input type="tel" className="form-control" name="phone" id="phone" placeholder="Phone" required />
                                        </div>
                                        <div className="col-lg-12 mt-4">
                                            <label htmlFor="subject">Subject <span>*</span></label>
                                            <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
                                        </div>
                                        <div className="col-lg-12 mt-4">
                                            <label htmlFor="date">Appointment Date <span>*</span></label>
                                            <input type="date" className="form-control" name="date" id="date" required />
                                        </div>
                                        <div className="col-lg-12 mt-4">
                                            <label htmlFor="comment">What services are you interested in ?</label>
                                            <textarea name="comment" id="comment" className="form-control" rows="5" placeholder="Write your interest here . . ."></textarea>
                                        </div>

                                        <div className="mt-5">
                                            <button className="btn btn-lg">Submit</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2"></div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default appointment