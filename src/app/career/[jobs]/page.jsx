const Jobs = ({ params }) => {

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
            <h2>{params.jobs}</h2>
            {
                jobs.filter((data, index = index + 1) => {
                    if (data.name === params.jobs) {
                        <div key={index}>
                            <h5>{data.position}</h5>
                        </div>
                    }
                })
            }
        </>
    )
}

export default Jobs