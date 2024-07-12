import Image from "next/image"
import Logo from "../../../public/image/logo.png"
import Link from "next/link"

import footerCss from "../styles/footer.module.css"

// Social Icons
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";


const Footer = () => {
    return (
        <>
            <div className="py-5">
                <div className="text-center">
                    <Link href="/"><Image src={Logo} alt=""/></Link>
                </div>
            </div>

            <div id={footerCss.footer_main}>
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <p className="pb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti assumenda tempora voluptas, aspernatur.</p>
                        <p><b><Link href="tel:44 7512 648787">44 7512 648787</Link></b></p>
                        <p><Link href="">info@aspireglobalpathways.com</Link></p>

                        <ul className={footerCss.social_icon}>
                            <li><Link href=""><FaFacebook/></Link></li>
                            <li><Link href=""><FaInstagram/></Link></li>
                            <li><Link href=""><FaLinkedin/></Link></li>
                            <li><Link href=""><FaYoutube/></Link></li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6" id={footerCss.quickLink}>
                        <h5 className="mb-4">Quick Link</h5>
                        <ul>
                            <li><Link href="/about-us">About Us</Link></li>
                            <li><Link href="/events">Events</Link></li>
                            <li><Link href="/career">Career</Link></li>
                            <li><Link href="/blogs">Blogs</Link></li>
                            <li><Link href="/contact-us">Contact Us</Link></li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6" id={footerCss.services}>
                        <h5 className="mb-4">Our Services</h5>
                        <ul>
                            <li><Link href="/services/study-in-uk">Study in UK</Link></li>
                            <li><Link href="/services/study-in-australia">Study in Australia</Link></li>
                            <li><Link href="/services/study-in-canada">Study in Canada</Link></li>
                            <li><Link href="/services/study-in-usa">Study in USA</Link></li>
                            <li><Link href="/services/study-in-germany">Study in Germany</Link></li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h5 className="mb-4">Get a Appointment</h5>
                        <p className="mb-4">New subscribers receive 10% off their first purchase</p>
                        <Link href="/appointment" className="btn" id={footerCss.footerBtn}>Get An Appointment</Link>
                    </div>
                </div>
            </div>

            <hr />

            <div id={footerCss.copywrite}>
                <div className="row">
                    <div className="col-lg-6">
                        <ul>
                            <li><Link href="">Terms & Conditions</Link></li>
                            <li><Link href="">Privacy Policy</Link></li>
                            <li><Link href="">Payment Terms</Link></li>
                        </ul>
                    </div>
                    <div className="col-lg-6">
                        <p className="pb-0 text-end" id={footerCss.copywrite_text}>
                            Copyright © Aspire Global Pathways all rights reserved. Powered by <Link href="https://parvez-rabbi.vercel.app/">Parvez Rabbi.</Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer