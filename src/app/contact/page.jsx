import React from 'react'
import Link from 'next/link'

import contactCss from "../styles/contact.module.css"

import { FaMap } from "react-icons/fa";

const ContactUs = () => {
    return (
        <>
            <div className={contactCss.first_section}>
                <h1>Here to <span>help</span></h1>
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <form action="">
                            <div className="row">
                                <div className="col-lg-12 mt-4">
                                    <label htmlFor="name">Full Name <span>*</span></label>
                                    <input type="text" name='fullname' id='name' className='form-control' placeholder='Full Name' />
                                </div>
                                <div className="col-lg-6 mt-4">
                                    <label htmlFor="email">Email <span>*</span></label>
                                    <input type="email" name='email' id='email' className='form-control' placeholder='Email' />
                                </div>
                                <div className="col-lg-6 mt-4">
                                    <label htmlFor="phone">Phone Number <span>*</span></label>
                                    <input type="tel" name='phone' id='phone' className='form-control' placeholder='Phone' />
                                </div>
                                <div className="col-lg-12 mt-4">
                                    <label htmlFor="message">Message</label>
                                    <textarea name="message" id="message" rows="5" className='form-control'></textarea>
                                </div>
                            </div>
                            <button type='submit' className='btn mt-5'>Submit</button>
                        </form>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <h3>Contact Info</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam, perspiciatis. Error, harum cumque atque quae fugit repellat sapiente aliquid ipsa!</p>
                        <div className="mt-4">
                            <h4 className='mb-4'>General Inquiries</h4>
                            <p><b>Phone</b>:- 44 7512 648787</p>
                            <p><b>Email</b>:- info@aspireglobalpathways.com</p>
                            <h4 className='mt-5'>Our Location</h4>
                            <p><b>Address</b>:- Churchill Court , 3 Manor Royal, Crawley, United Kingdom</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className={contactCss.second_section}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m19!1m8!1m3!1d5007.666384225624!2d-0.1725057!3d51.129984814350095!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x4875f160e4fd8029%3A0xcc035b5aa6984cbc!2sRegus%20-%20Crawley%2C%20Gatwick%20Airport%20Manor%20Royal%20Churchill%20Court%203%20Manor%20Royal%20Crawley%20RH10%209LU%2C%20United%20Kingdom!3m2!1d51.1299552!2d-0.17250569999999998!5e0!3m2!1sen!2sbd!4v1715531226307!5m2!1sen!2sbd" width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </>
    )
}

export default ContactUs