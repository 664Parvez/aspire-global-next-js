import React from "react";
import Image from "next/image"
import missionCss from "../styles/mission.module.css"

import mis from "../../../public/image/mission-vision/mission.webp"
import vis from "../../../public/image/mission-vision/vision.webp"

const mission = () => {
    return (
        <>
            <div className={missionCss.first_section}>
                <h1>Mission & <span>Vision</span></h1>
            </div>

            <div className={missionCss.second_section}>
                <div className="row align-items-center">
                    <div className="col-lg-7 col-md-6">
                        <h2>Our Mission</h2>
                        <p>At Aspire Global Pathways, our mission is to empower students from around the world to achieve their dreams of studying abroad. We are committed to providing personalized guidance, comprehensive services, and unwavering support to help students navigate the complexities of international education. Through our dedication to excellence and our passion for student success, we strive to be the trusted partner that students turn to for guidance and support on their journey to studying abroad.</p>
                    </div>
                    <div className="col-lg-5 col-md-6">
                        <Image src={mis} layout="responsive" alt=""/>
                    </div>
                </div>
            </div>

            <div className={missionCss.third_section}>
                <div className="row align-items-center">
                    <div className="col-lg-5 col-md-6">
                        <Image src={vis} layout="responsive" alt=""/>
                    </div>
                    <div className="col-lg-7 col-md-6">
                        <h2>Our Vision</h2>
                        <p>Our vision at Aspire Global Pathways is to be the leading provider of international education consultancy services, recognized for our commitment to excellence, integrity, and student-centric approach. We envision a world where every student has access to the opportunities and resources they need to pursue their educational goals and unlock their full potential. By fostering global connections, promoting cultural exchange, and empowering students to succeed, we aim to create a brighter future for the next generation of global leaders.</p>
                    </div>
                </div>
            </div>

            <div className={missionCss.forth_section}>
                <h2 className="text-center">Study Counseling and Support</h2>
                <p className="mb-3">At Aspire Global Pathways, we are committed to providing international students with comprehensive counseling and support in their pursuit of higher education all around the world. Our team of experienced counselors offers personalized guidance to help you make informed decisions and select the right academic program and institution that aligns with your interests and aspirations.</p>

                <p className="mb-3">We assist with every step of the application process and provide ongoing support throughout your journey. From college applications and visa arrangements to pre-departure orientations and mentoring, we ensure a seamless transition into your chosen field of study.</p>

                <p className="mb-3">With our extensive network of renowned higher education providers, we offer access to a diverse range of programs and institutions that are tailored to your unique needs and preferences. Join us at Aspire Global Pathways and take the next step towards a transformative educational journey.
 </p>
            </div>
        </>
    )
}

export default mission