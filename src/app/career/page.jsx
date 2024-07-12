import React from "react";
import Link from "next/link";
import careerCss from "../styles/career.module.css"

const career = () => {

    const jobs = [
        {
            name: "React JS Developer",
            slag: "react-js",
            position: "Web Developer",
            salary: "$21000"
        },
        {
            name: "Graphics Design",
            slag: "graphics-design",
            position: "Graphics Designer",
            salary: "$5000"
        },
        {
            name: "Digital Marketing",
            slag: "digital-marketing",
            position: "Marketer",
            salary: "$5000"
        },
    ]


    return (
        <>
            <div className="my-5" id={careerCss.first_section}>
                {
                    jobs.length > 0 ?
                        <div className="row justify-content-center">
                            {
                                jobs.map((data) => {
                                    return (
                                            <div className="col-lg-4 mt-3">
                                                <Link href={`/career/${data.slag}`}>
                                                    <div className={careerCss.careerJobs}>
                                                        <h3>{data.name}</h3>
                                                        <p>{data.salary}</p>
                                                    </div>
                                                </Link>
                                            </div>
                                        )
                                    })
                                }
                        </div> 
                    :
                    <div className={careerCss.jobExpire}>
                        <div className="text-center">
                            <h4 className="text-danger">Attention</h4>
                            <h1>The job you are trying to view has already expired!</h1>
                        </div>
                    </div>
                }
            </div>
        </>
    )
}

export default career