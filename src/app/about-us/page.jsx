import Image from "next/image"
import aboutCss from "../styles/about.module.css"

import about_one from "../../../public/image/about/about-us-photo.png"
import about_two from "../../../public/image/about/offer-image.jpg"

const About = () => {
    return (
        <>
            <div className={aboutCss.first_section}>
                <h1>About Aspire Global Pathways</h1>
            </div>
            <div className={aboutCss.second_section}>
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6">
                        <p>Welcome to Aspire Global Pathways, a leading representative of higher education providers. Based in London, UK, we are dedicated to helping students from around the world navigate their educational journey and achieve their academic goals.</p>

                        <p>At Aspire Global Pathways, we understand the importance of making informed decisions when it comes to pursuing higher education. With the ever-changing landscape of global education, students need reliable guidance and support to make the best choices for their future. Thats where we come in.</p>

                        <p>Our team of experienced professionals is committed to providing comprehensive student counseling services to individuals from all corners of the globe. We believe that every student deserves access to world-class education and the opportunity to explore their potential. By offering personalized guidance tailored to each students unique needs, we aim to empower aspiring learners to seize the countless opportunities available in the international education arena.</p>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <Image layout="responsive" src={about_one} alt=""/>
                    </div>
                </div>
            </div>
            <div className={aboutCss.third_section}>
                <h3 className="mb-4">Why Choose Us</h3>
                <p>At Aspire Global Pathways, we are committed to providing international students with comprehensive counseling and support in their pursuit of higher education all around the world. Our team of experienced counselors offers personalized guidance to help you make informed decisions and select the right academic program and institution that aligns with your interests and aspirations.

                We assist with every step of the application process and provide ongoing support throughout your journey. From college applications and visa arrangements to pre-departure orientations and mentoring, we ensure a seamless transition into your chosen field of study.

                With our extensive network of renowned higher education providers, we offer access to a diverse range of programs and institutions that are tailored to your unique needs and preferences. Join us at Aspire Global Pathways and take the next step towards a transformative educational journey.Why us ?</p>
                <p>Expert Guidance: Our team of experienced education consultants is committed to providing personalized guidance and support tailored to your unique needs and aspirations.

                Experienced Counselor: Most of out counselors are international graduate including the ceo has first hand experience 

                Global Network: With a vast network of partner institutions and industry connections, we offer unparalleled access to top-tier educational opportunities worldwide.

                Success Stories: Join the ranks of our successful students who have achieved their academic and career goals with the support of Aspire Global Pathways.</p>
            </div>

            <div className={aboutCss.forth_section}>
                <div className="row">
                    <div className="col-lg-7 col-md-6">
                        <div className={aboutCss.forth_left}>
                            <h5>WHAT WE OFFER</h5>
                            <h2>Consult with Bangladesh Best Educational Consultants.</h2>
                            <p className="mt-4">Talent Pro Education is your Top Choice for Admission Consulting in Bangladesh. With a 90-95% Admission Approval Rate, we simplify the process for students aiming to study abroad. As representatives of 50+ esteemed institutions worldwide, we ensure diverse opportunities for international students.</p>
                            <ul className="mt-4">
                                <li>Research and eligibility check.</li>
                                <li>Profile evaluation.</li>
                                <li>Course selection support.</li>
                                <li>Document preparation help.</li>
                                <li>Job-oriented course guidance</li>
                                <li>Personalized recommendations for the best course and college.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-6">
                        <Image layout="responsive" src={about_two} alt=""/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About