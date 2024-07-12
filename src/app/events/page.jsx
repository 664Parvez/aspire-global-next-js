import React from "react";
import Image from "next/image";
import Link from "next/link";

import eventCss from '../styles/event.module.css'
import { FaArrowRight } from "react-icons/fa6";

import event1 from "../../../public/image/events/IELTS_campaign_Section_1_image_f8341259d9.jpg"
import event2 from "../../../public/image/events/Card_Image_2_fd038eda9d.jpg"
import event3 from "../../../public/image/events/Card_Image_3_fcb7bf1dbb.jpg"

const event = () => {
    return (
        <>
            <div className={eventCss.first_section}>
                <div className="container">
                    <div className="text-center">
                        <h1>Webinars & Events</h1>
                    </div>
                    <div className="events_cards">
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <div className="card mt-4 h-100">
                                    <div className="card-img">
                                        <Image src={event1} layout="responsive" alt=""/>
                                    </div>
                                    <div className="card-body">
                                        <h6>7th June, 2024 · 7:30 am - 9:00 am</h6>
                                        <h4 className="mt-4">Test Preparation for GMAT</h4>
                                        <p>Score 690+ in GMAT. The Smart Choice for the Top Business School</p>
                                        <div className="mt-5">
                                        <Link href="/register-now">Register Now <FaArrowRight /></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div>
                                    <div className="card mt-4 h-100">
                                        <div className="row">
                                            <div className="col-lg-5 col-md-6">
                                                <div className="card-img">
                                                <Image src={event2} layout="responsive" alt=""/>
                                                </div>
                                            </div>
                                            <div className="col-lg-7 col-lg-6">
                                                <div className="card-body">
                                                <h6>7th June, 2024 · 7:30 am - 9:00 am</h6>
                                                <h4 className="mt-4">Test Preparation for GMAT</h4>
                                                <p>Score 690+ in GMAT. The Smart Choice for the Top Business School</p>
                                                <div className="mt-5">
                                                    <Link href="/register-now">Register Now <FaArrowRight /></Link>
                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card mt-4 h-100">
                                        <div className="row">
                                            <div className="col-lg-5 col-md-6">
                                                <div className="card-img">
                                                <Image src={event3} layout="responsive" alt=""/>
                                                </div>
                                            </div>
                                            <div className="col-lg-7 col-md-6">
                                                <div className="card-body">
                                                <h6>7th June, 2024 · 7:30 am - 9:00 am</h6>
                                                    <h4 className="mt-4">Test Preparation for GMAT</h4>
                                                    <p>Score 690+ in GMAT. The Smart Choice for the Top Business School</p>
                                                    <div className="mt-5">
                                                    <Link href="/register-now">Register Now <FaArrowRight /></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className={eventCss.second_section}>
                <div className="text-center">
                    <h2>All our events & webinars</h2>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className={eventCss.second_section_card}>
                                <div className="card mt-4 h-100">
                                    <div className="card-img">
                                        <Image src={event1} layout="responsive" alt=""/>
                                    </div>
                                    <div className="card-body">
                                        <h6>7th June, 2024 · 7:30 am - 9:00 am</h6>
                                        <h4 className="mt-4">Test Preparation for GMAT</h4>
                                        <p>Score 690+ in GMAT. The Smart Choice for the Top Business School</p>
                                        <div className="mt-5">
                                        <Link href="/register-now">Register Now <FaArrowRight /></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className={eventCss.second_section_card}>
                                <div className="card mt-4 h-100">
                                    <div className="card-img">
                                        <Image src={event1} layout="responsive" alt=""/>
                                    </div>
                                    <div className="card-body">
                                        <h6>7th June, 2024 · 7:30 am - 9:00 am</h6>
                                        <h4 className="mt-4">Test Preparation for GMAT</h4>
                                        <p>Score 690+ in GMAT. The Smart Choice for the Top Business School</p>
                                        <div className="mt-5">
                                        <Link href="/register-now">Register Now <FaArrowRight /></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className={eventCss.second_section_card}>
                                <div className="card mt-4 h-100">
                                    <div className="card-img">
                                        <Image src={event1} layout="responsive" alt=""/>
                                    </div>
                                    <div className="card-body">
                                        <h6>7th June, 2024 · 7:30 am - 9:00 am</h6>
                                        <h4 className="mt-4">Test Preparation for GMAT</h4>
                                        <p>Score 690+ in GMAT. The Smart Choice for the Top Business School</p>
                                        <div className="mt-5">
                                        <Link href="/register-now">Register Now <FaArrowRight /></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default event