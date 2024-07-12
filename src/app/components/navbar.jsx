"use client"

import React, {useState} from "react";

import Link from "next/link"
import Image from "next/image";
import navbarCss from "../styles/navbar.module.css"

import Logo from "../../../public/image/logo.png"


// Social Icons
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

import { FaRegEnvelope, FaRegTimesCircle, FaPhoneAlt } from "react-icons/fa";
import { HiBars3BottomLeft } from "react-icons/hi2";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {

    const [navbar, setNavbar] = useState(false)
    const [mobileCompany, setMobileCompany] = useState(false)
    const [mobileServices, setMobileServices] = useState (false)

    return (
        <>
            {/* Top Bar */}
            <div className={navbarCss.top_bar}>
                <div className="d-flex justify-content-between align-items-center">
                    <div className={navbarCss.topbar_email}>
                        <ul>
                            <li><Link href="mailto:sayhello@mafoli.com"><FaRegEnvelope /> info@aspireglobalpathways.com</Link></li>
                        </ul>
                    </div>
                    <div className={navbarCss.top_social}>
                        <ul>
                            <li>
                                <Link href=""><FaFacebook /></Link>
                            </li>
                            <li>
                                <Link href=""><FaInstagram/></Link>
                            </li>
                            <li>
                                <Link href=""><FaLinkedin/></Link>
                            </li>
                            <li>
                                <Link href=""><FaYoutube/></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* Top Bar */}

            {/* Main Bar */}
            <div className={navbarCss.main_bar}>
                <div className="d-flex justify-content-between align-items-center">
                    <div className={navbarCss.navbar_left}>
                        <p className={navbarCss.nav_main_mobile}><Link href="tel:44 7512 648787"><FaPhoneAlt/> <b>44 7512 648787</b></Link></p>
                        <div className={navbarCss.mobile_left_icon}>
                            <ul>
                                <li className={navbarCss.hambar} onClick={() => setNavbar(!navbar)}><HiBars3BottomLeft /></li>
                            </ul>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className={navbarCss.menu_items}>
                            <ul>
                                <li><Link href="/">Home</Link></li>
                                <li className={navbarCss.company_menu}><Link href="#">Company <IoIosArrowDown /></Link>
                                    <div className={navbarCss.company_dropdown}>
                                        <ul className={navbarCss.company_items}>
                                            <li>
                                                <Link href="/about-us">About Us</Link>
                                            </li>
                                            <li>
                                                <Link href="/mission-and-vision">Mission & Vision</Link>
                                            </li>
                                            <li>
                                                <Link href="/message-of-ceo">Message Of CEO</Link>
                                            </li>
                                            <li>
                                                <Link href="/career">Career</Link>
                                            </li>
                                            <li>
                                                <Link href="/events">Events</Link>
                                            </li>
                                            <li>
                                                <Link href="/blogs">Blogs</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className={navbarCss.country_menu}><Link href="#">Study Destinations <IoIosArrowDown /></Link>
                                    <div className={navbarCss.country_dropdown}>
                                        <ul className={navbarCss.country_items}>
                                            <li>
                                                <Link href="/services/study-in-uk">Study In UK</Link>
                                            </li>
                                            <li>
                                                <Link href="/services/study-in-australia">Study In Australia</Link>
                                            </li>
                                            <li>
                                                <Link href="/services/study-in-canada">Study In Canada</Link>
                                            </li>
                                            <li>
                                                <Link href="/services/study-in-asia">Study In Asia</Link>
                                            </li>
                                            <li>
                                                <Link href="/services/study-in-europe">Study In Europe</Link>
                                            </li>
                                            <li>
                                                <Link href="/services/study-in-usa">Study In USA</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                
                            </ul>
                        </div>
                        <div className={navbarCss.navbar_logo}>
                            <Link href="/"><Image src={Logo} alt=""/></Link>
                        </div>
                        <div className={navbarCss.menu_items}>
                            <ul>
                                <li><Link href="/branches">Branches</Link></li>
                                <li><Link href="/our-partners">Our Partners</Link></li>
                                <li><Link href="/university">Universities</Link></li>
                                <li><Link href="/contact">Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className={navbarCss.nav_btn_option}>
                        <Link href="/appointment" className="btn">Appointment</Link>
                    </div>
                </div>
            </div>
            {/* Main Bar */}

            {/* Responsive Menu */}
            <div className={navbar ? navbarCss.responsive_menu_show : navbarCss.responsive_menu_hide}>
                <p className="mt-3" onClick={() => setNavbar(false)}>Close <FaRegTimesCircle /></p>
                <ul>
                    <li className="mt-4">
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="#" onClick={() => setMobileCompany(!mobileCompany)}>Company <IoIosArrowDown /></Link>
                        <div className={mobileCompany ? navbarCss.mobile_company_show : navbarCss.mobile_company_hide}>
                            <ul>
                                <li>
                                    <Link href="/about-us">About Us</Link>
                                </li>
                                <li>
                                    <Link href="/mission-and-vision">Mission & Vision</Link>
                                </li>
                                <li>
                                    <Link href="/message-of-ceo">Message Of CEO</Link>
                                </li>
                                <li>
                                    <Link href="/career">Career</Link>
                                </li>
                                <li>
                                    <Link href="/events">Events</Link>
                                </li>
                                <li>
                                    <Link href="/blogs">Blogs</Link>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <Link href="#" onClick={() => setMobileServices(!mobileServices) }>Services <IoIosArrowDown /></Link>
                        <div className={mobileServices ? navbarCss.mobile_services_show : navbarCss.mobile_services_hide}>    
                            <ul>
                                <li>
                                    <Link href="/services/study-in-uk">Study In UK</Link>
                                </li>
                                <li>
                                    <Link href="/services/study-in-australia">Study In Australia</Link>
                                </li>
                                <li>
                                    <Link href="/services/study-in-canada">Study In Canada</Link>
                                </li>
                                <li>
                                    <Link href="/services/study-in-asia">Study In Asia</Link>
                                </li>
                                <li>
                                    <Link href="/services/study-in-europe">Study In Europe</Link>
                                </li>
                                <li>
                                    <Link href="/services/study-in-usa">Study In USA</Link>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <Link href="/our-partners">Our Partners</Link>
                    </li>
                    <li>
                        <Link href="/branches">Branches</Link>
                    </li>
                    <li>
                        <Link href="/university">Universities</Link>
                    </li>
                    <li>
                        <Link href="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
            {/* Responsive Menu */}

        </>
    )
}

export default Navbar