"use client"

import Image from "next/image";
import Link from "next/link"
import homeCss from "./styles/page.module.css";

// Slider 

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import 'swiper/css/effect-coverflow';

// import required modules
import { EffectCoverflow, Autoplay, Pagination } from 'swiper/modules';

// Slider 

import { FaArrowUpRightFromSquare, FaHandshakeAngle, FaArrowRight } from "react-icons/fa6";

import hero from "../../public/image/home-page/banner_girl_1b83fde144.svg"
import aboutImg from "../../public/image/home-page/Home_Page_Frenchisee_8da0fbcdf9.svg"
import sixthImg from "../../public/image/home-page/multi_country_421976599b.svg"
import findUniImg from "../../public/image/home-page/find-university.webp"
import findCorImg from "../../public/image/home-page/find-course.webp"
import scholarImg from "../../public/image/home-page/scholership.webp"
import applicaImg from "../../public/image/home-page/applications.webp"
import blog from "../../public/image/home-page/benefits-of-studying-in-the-uk.jpg"
import event1 from "../../public/image/home-page/IELTS_campaign_Section_1_image_f8341259d9.jpg"
import event2 from "../../public/image/home-page/Card_Image_2_fd038eda9d.jpg"
import event3 from "../../public/image/home-page/Card_Image_3_fcb7bf1dbb.jpg"

export default function Home() {

  const date = new Date().toDateString()

  return (
    <>

    <div className={homeCss.hero_section}>
      <div className="row align-items-center">
        <div className="col-lg-6 col-md-6">
          <h1>We are bringing overseas education within everyone’s reach</h1>
          <p className="my-5">Our Tech-enabled solutions help international students and recruitment partners choose the best global universities</p>
          <Link href="/book-now" className="btn btn-lg">Enquire Now</Link>
        </div>
        <div className="col-lg-6 col-md-6">
          <Image src={hero} layout="responsive" alt="" />
        </div>
      </div>
    </div>

      <div className={homeCss.second_section}>
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className={homeCss.second_items_div}>
              <div className="text-center">
                <FaHandshakeAngle className={homeCss.second_section_icon} />
              </div>
              <h4>Free Counselling</h4>
              <p>Explore a world of possibilities with our expert study abroad consultants who will guide you through the process of selecting the right course, institution, and destination for your academic goals.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className={homeCss.second_items_div}> 
              <div className="text-center">
                <FaHandshakeAngle className={homeCss.second_section_icon} />
              </div> 
              <h4>Student Admission Services</h4>
              <p>We know that the admissions process can feel overwhelming, which is why we are here to help. Our experienced team of education consultants is committed to simplifying your journey towards your academic goals.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className={homeCss.second_items_div}>
              <div className="text-center">
                <FaHandshakeAngle className={homeCss.second_section_icon} />
              </div>
              <h4>Student Accommodation</h4>
              <p>Finding the perfect place to call home is crucial for a successful academic journey. At Aspire Global Pathways, we strive to make this process effortless. We try our best to provide comfortable, safe, and well-located housing options tailored to your needs and budget.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className={homeCss.second_items_div}>
              <div className="text-center">
                <FaHandshakeAngle className={homeCss.second_section_icon} />
              </div>
              <h4>Compliance Assistance</h4>
              <p>Navigating regulatory compliance can be complicated. However, with Aspire Global Pathways by your side, your educational journey can be smooth and hassle-free. We aim to help you grasp and comply with all relevant regulations and requirements. </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className={homeCss.second_items_div}>
              <div className="text-center">
                <FaHandshakeAngle className={homeCss.second_section_icon} />
              </div>
              <h4>End-to-End Services</h4>
              <p>Embark on a seamless journey with Aspire Global Pathways' End-to-End Services. Our team provides comprehensive support customized to your academic and career requirements, assisting you at each stage of your path. </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className={homeCss.second_items_div}>
              <div className="text-center">
                <FaHandshakeAngle className={homeCss.second_section_icon} />
              </div>
              <h4>Interview Guidance</h4>
              <p>At Aspire Global Pathways, we understand that interviews with institutes and embassies can be intimidating and play a decisive role in shaping your academic future. Our Institute and Embassy Interview Guidance service is designed to help you confidently navigate these interviews।</p>
            </div>
          </div>
        </div>
      </div>

      <div className={homeCss.admission_categ}>
        <div className="container text-center mb-5">
          <h5>ADMISSIONS CATEGORIES</h5>
          <h2>Admissions Requirements Across Academic Programs</h2>
        </div>
        <div className="row">
          <div className="col-lg-3" id={homeCss.admit_categ_div}>
            <div id={homeCss.admit_category} className="mb-4">
              <span>01</span>
              <h4>Masters Program</h4>
              <ul className="mt-4">
                <li><FaArrowUpRightFromSquare /> Bachelor's degree</li>
                <li><FaArrowUpRightFromSquare /> Minimum GPA</li>
                <li><FaArrowUpRightFromSquare /> GRE/GMAT scores (depending on program)</li>
                <li><FaArrowUpRightFromSquare /> English language proficiency (TOEFL or IELTS)</li>
                <li><FaArrowUpRightFromSquare /> Statement of purpose</li>
                <li><FaArrowUpRightFromSquare /> Letters of recommendation</li>
                <li><FaArrowUpRightFromSquare /> Resume or CV</li>
                <li><FaArrowUpRightFromSquare /> Research proposal (sometimes)</li>
                <li><FaArrowUpRightFromSquare /> Possible admission interview</li>
              </ul>
              <div className="text-start mt-5" id={homeCss.admit_btn}>
                <Link className="btn" href="">Apply Now</Link>
              </div>
            </div>
          </div>
          <div className="col-lg-3" id={homeCss.admit_categ_div}>
            <div id={homeCss.admit_category} className="mb-4">
              <span>02</span>
              <h4>Pre-Masters Program</h4>
              <ul className="mt-4">
                <li><FaArrowUpRightFromSquare /> Bachelor's degree</li>
                <li><FaArrowUpRightFromSquare /> Minimum GPA</li>
                <li><FaArrowUpRightFromSquare /> English language proficiency (TOEFL or IELTS)</li>
                <li><FaArrowUpRightFromSquare /> Statement of purpose</li>
                <li><FaArrowUpRightFromSquare /> Letters of recommendation</li>
                <li><FaArrowUpRightFromSquare /> Possible admission interview</li>
              </ul>
              <div className="text-start mt-5" id={homeCss.admit_btn}>
                <Link className="btn" href="">Apply Now</Link>
              </div>
            </div>
          </div>
          <div className="col-lg-3" id={homeCss.admit_categ_div}>
            <div id={homeCss.admit_category} className="mb-4">
              <span>03</span>
              <h4>Undergraduate Program</h4>
              <ul className="mt-4">
                <li><FaArrowUpRightFromSquare /> High school diploma or equivalent</li>
                <li><FaArrowUpRightFromSquare /> Minimum GPA</li>
                <li><FaArrowUpRightFromSquare /> SAT/ACT scores (for US students)</li>
                <li><FaArrowUpRightFromSquare /> English language proficiency (TOEFL or IELTS)</li>
                <li><FaArrowUpRightFromSquare /> Statement of purpose</li>
                <li><FaArrowUpRightFromSquare /> Letters of recommendation</li>
                <li><FaArrowUpRightFromSquare /> Portfolio or skills demonstration (for certain programs)</li>
                <li><FaArrowUpRightFromSquare /> Possible admission interview</li>
              </ul>
              <div className="text-start mt-5" id={homeCss.admit_btn}>
                <Link className="btn" href="">Apply Now</Link>
              </div>
            </div>
          </div>
          <div className="col-lg-3" id={homeCss.admit_categ_div}>
            <div id={homeCss.admit_category} className="mb-4">
              <span>04</span>
              <h4>Foundation Program</h4>
              <ul className="mt-4">
                <li><FaArrowUpRightFromSquare /> High school diploma or equivalent</li>
                <li><FaArrowUpRightFromSquare /> Minimum age requirement</li>
                <li><FaArrowUpRightFromSquare /> English language proficiency (TOEFL or IELTS)</li>
                <li><FaArrowUpRightFromSquare /> Statement of purpose</li>
                <li><FaArrowUpRightFromSquare /> Letters of recommendation (sometimes)</li>
                <li><FaArrowUpRightFromSquare /> Possible admission interview</li>
              </ul>
              <div className="text-start mt-5" id={homeCss.admit_btn}>
                <Link className="btn" href="">Apply Now</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={homeCss.third_section}>
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <Link href="/contact-us">
              <Image layout="responsive" src={findUniImg} alt=""/>
              <div className={homeCss.third_features}>
                <h4>Find University</h4>
              </div>
            </Link>
          </div>
          <div className="col-lg-3 col-md-6">
            <Link href="/contact-us">
              <Image layout="responsive" src={findCorImg} alt=""/>
              <div className={homeCss.third_features}>
                <h4>Find a Course</h4>
              </div>
            </Link>
          </div>
          <div className="col-lg-3 col-md-6">
            <Link href="/contact-us">
              <Image layout="responsive" src={scholarImg} alt=""/>
              <div className={homeCss.third_features}>
                <h4>Find a Scholarship</h4>
              </div>
            </Link>
          </div>
          <div className="col-lg-3 col-md-6">
            <Link href="/contact-us">
              <Image layout="responsive" src={applicaImg} alt=""/>
              <div className={homeCss.third_features}>
                <h4>Application Proccess</h4>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className={homeCss.forth_section}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 col-md-6">
              <h3>ABOUT ASPIRE GLOBAL PATHWAYS</h3>
              <p className="mb-3">Welcome to Aspire Global Pathways, a leading representative of higher education providers. Based in London, UK, we are dedicated to helping students from around the world navigate their educational journey and achieve their academic goals.</p>

              <p className="mb-3">At Aspire Global Pathways, we understand the importance of making informed decisions when it comes to pursuing higher education. With the ever-changing landscape of global education, students need reliable guidance and support to make the best choices for their future. That's where we come in.</p>

              <p className="mb-3">Our team of experienced professionals is committed to providing comprehensive student counseling services to individuals from all corners of the globe. We believe that every student deserves access to world-class education and the opportunity to explore their potential. By offering personalized guidance tailored to each student's unique needs, we aim to empower aspiring learners to seize the countless opportunities available in the international education arena.</p>
            </div>
            <div className="col-lg-5 col-md-6">
              <Image src={aboutImg} layout="responsive" alt=""/>
            </div>
          </div>
        </div>
      </div>

      <div className={homeCss.fifth_section}>
        <div className="row justify-content-center">
          <div className="col-lg-3 col-md-6">
            <div className={homeCss.numberDiv}>
              <h4>5+</h4>
              <p>Global Offices</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className={homeCss.numberDiv}>
              <h4>50+</h4>
              <p>Global Offices</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className={homeCss.numberDiv}>
              <h4>3+</h4>
              <p>Global Offices</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className={homeCss.numberDiv}>
              <h4>10+</h4>
              <p>Global Offices</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className={homeCss.numberDiv}>
              <h4>120+</h4>
              <p>Global Offices</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className={homeCss.numberDiv}>
              <h4>1000+</h4>
              <p>Global Offices</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className={homeCss.numberDiv}>
              <h4>100+</h4>
              <p>Global Offices</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className={homeCss.numberDiv}>
              <h4><FaHandshakeAngle /></h4>
              <p>Global Offices</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className={homeCss.numberDiv}>
              <h4>95%</h4>
              <p>Global Offices</p>
            </div>
          </div>
        </div>
      </div>

      <div className={homeCss.sixth_section}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6">
              <Image src={sixthImg} layout="responsive" alt=""/>
            </div>
            <div className="col-lg-6 col-md-6">
              <h2>Aspire Global Pathways Multi Country Advantage</h2>
              <h5 className="py-4">The World is your Campus!</h5>
              <p>Aspire for more. Choose what suits you the best from 800+ global universities in 33 countries, world over. The choices and opportunities our universities offer are endless!</p>

              <div className="mt-5">
                <Link href="/explore-countries">Explore Countries <FaArrowRight /></Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={homeCss.testimonial_section}>
        <h2>Our Testimonial</h2>
        <div>
          <Swiper
          slidesPerView="auto"
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          breakpoints= {{
            300: {
              slidesPerView: 1,
              spaceBetween: 10
            },
            480: {
              slidesPerView: 1,
              spaceBetween: 20
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 30
            },
            1025: {
              slidesPerView: 3,
              spaceBetween: 30
            },
            1440: {
              slidesPerView: 5,
              spaceBetween: 30
            }
          }}
          modules={[Pagination]}
          className="testimonial_Swiper"
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
        </div>
      </div>

      <div className={homeCss.seven_section}>
        <div className="container">
          <div className="text-center">
            <h2>Webinars & Events</h2>
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
                      <Link href="">Register Now <FaArrowRight /></Link>
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
                            <Link href="">Register Now <FaArrowRight /></Link>
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
                              <Link href="">Register Now <FaArrowRight /></Link>
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

      <div className={homeCss.home_blog}>
        <h2 className="my-5 text-center">Blogs</h2>
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div id={homeCss.blog_Cart} className="card">
              <div className="card-img">
                <Image className="rounded" src={blog} layout="responsive" alt=""/>
              </div>
              <div className="card-body">
                <h4>Benefits Of Studying In The UK</h4>
                <p>Are you considering studying abroad? The United Kingdom (UK) stands out as one</p>
                <Link href="" className="btn mt-4">Explore More</Link>
              </div>
              <div className="card-footer d-flex justify-content-between">
                <div className={homeCss.blog_date}>
                  <p><b>Date: </b>{date}</p>
                </div>
                <div className={homeCss.blog_author}>
                  <p><b>Posted by: </b>Parvez Rabbi</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div id={homeCss.blog_Cart} className="card">
              <div className="card-img">
                <Image className="rounded" src={blog} layout="responsive" alt=""/>
              </div>
              <div className="card-body">
                <h4>Benefits Of Studying In The UK</h4>
                <p>Are you considering studying abroad? The United Kingdom (UK) stands out as one</p>
                <Link href="" className="btn mt-4">Explore More</Link>
              </div>
              <div className="card-footer d-flex justify-content-between">
                <div className={homeCss.blog_date}>
                  <p><b>Date: </b>{date}</p>
                </div>
                <div className={homeCss.blog_author}>
                  <p><b>Posted by: </b>Parvez Rabbi</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div id={homeCss.blog_Cart} className="card">
              <div className="card-img">
                <Image className="rounded" src={blog} layout="responsive" alt=""/>
              </div>
              <div className="card-body">
                <h4>Benefits Of Studying In The UK</h4>
                <p>Are you considering studying abroad? The United Kingdom (UK) stands out as one</p>
                <Link href="" className="btn mt-4">Explore More</Link>
              </div>
              <div className="card-footer d-flex justify-content-between">
                <div className={homeCss.blog_date}>
                  <p><b>Date: </b>{date}</p>
                </div>
                <div className={homeCss.blog_author}>
                  <p><b>Posted by: </b>Parvez Rabbi</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={homeCss.partner_section}>
        <h2 className="mt-5">Aspire Global eminent university tie-ups</h2>
        <p className="mb-4">We represent 65 of World’s Top 300 Universities according to QS World Rankings 2024</p>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView='auto'
          loop={true} 
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints= {{
            300: {
              slidesPerView: 1,
              spaceBetween: 10
            },
            480: {
              slidesPerView: 1,
              spaceBetween: 20
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 30
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 30
            },
            1440: {
              slidesPerView: 7,
              spaceBetween: 30
            }
          }}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[Autoplay, EffectCoverflow]}
          className="partnerSliderSwiper"
      >
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
        </SwiperSlide>
      </Swiper>
      </div>
    </>
  );
}
