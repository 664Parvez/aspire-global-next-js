import Image from "next/image"
import Link from "next/link"
import destinationCss from "../styles/destinations.module.css"


const UniversityComponent = (props) => {
    return (
        <>
            <div className={destinationCss.first_section}>
                <div className="container">
                    <h1 className="text-center">{props.title}</h1>
                    <div className="d-flex justify-content-center mt-4" id={destinationCss.first_images}>
                        <div className="mx-2">
                            <Image src={props.img1} alt="" />
                        </div>
                        <div className="mx-2">
                            <Image src={props.img2} alt="" />
                        </div>
                    </div>
                    <p className="mt-4 text-center">{props.firstSectionPara}</p>

                    <div className="text-center mt-5">
                        <Link href="/book-now" className="btn btn-lg">Enquiry Now</Link>
                    </div>

                    <hr className="my-5" />
                </div>
            </div>

            <div className={destinationCss.second_section}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <h3>Why Study in {props.country}</h3>
                            <p>{props.secondSectionPara}</p>
                        </div>
                        <div className="col-lg-6"></div>
                    </div>
                </div>
            </div>

            <div className={destinationCss.third_section}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            
                        </div>
                        <div className="col-lg-6">
                            <h3>Careers & Industry Insights</h3>
                            <p>{props.thirdSectionPara}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className={destinationCss.third_section}>
                <h2 className="text-center">Student's Speak</h2>
                <div className="container mt-5">
                    <div className={destinationCss.student_video}>
                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div className="shadow bg-white rounded mx-1 p-3">
                                    <iframe className="rounded" width="100%" height="180" src="https://www.youtube.com/embed/CHVhwcOg6y8?si=AW71eo8Rmdh8wAM4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

                                    <h5 className="mt-4 mb-0">John Doe</h5>
                                    <p>Northwest University, Boston</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="shadow bg-white rounded mx-1 p-3">
                                    <iframe className="rounded" width="100%" height="180" src="https://www.youtube.com/embed/CHVhwcOg6y8?si=AW71eo8Rmdh8wAM4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

                                    <h5 className="mt-4 mb-0">John Doe</h5>
                                    <p>Northwest University, Boston</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="shadow bg-white rounded mx-1 p-3">
                                    <iframe className="rounded" width="100%" height="180" src="https://www.youtube.com/embed/CHVhwcOg6y8?si=AW71eo8Rmdh8wAM4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

                                    <h5 className="mt-4 mb-0">John Doe</h5>
                                    <p>Northwest University, Boston</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={destinationCss.forth_section}>
                <div className="container">
                    <div className={destinationCss.forth_content}>
                        <div>
                            <h3 className="mb-0">Need guidance? Let us help you.</h3>
                        </div>
                        <div>
                            <div className="d-flex justify-content-between">
                                <div className="mx-3">
                                    <Link href="/contact" className="btn" id={destinationCss.forth_contact}>Contact Us</Link>
                                </div>
                                <div className="mx-3">
                                    <Link href="/book-now" className="btn" id={destinationCss.forth_enquire}>Enquire Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default UniversityComponent