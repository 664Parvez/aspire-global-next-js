import registerCss from "../styles/register.module.css"

const registerNow = () => {
    return (
        <>
            <div className={registerCss.first_section}>
                <h1>Registration Form</h1>
            </div>

            <div className={registerCss.second_section}>
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
                                            <label htmlFor="address">Your Address <span>*</span></label>
                                            <input type="text" className="form-control" name="address" id="address" placeholder="address" required />
                                        </div>
                                        <div className="col-lg-12 mt-4">
                                            <label htmlFor="destination">Preferred Destination <span>*</span></label>
                                            <select name="" id="destination" className="form-select" required>
                                                <option value="" selected>Select Country</option>
                                                <option value="">UK</option>
                                                <option value="">Australia</option>
                                                <option value="">Canada</option>
                                                <option value="">Asia</option>
                                                <option value="">USA</option>
                                                <option value="">Europe</option>
                                            </select>
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

export default registerNow