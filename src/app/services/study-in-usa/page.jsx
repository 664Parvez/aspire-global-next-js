import UniversityComponent from "../../components/university-componet"

import img1 from "../../../../public/image/USA/nw_usa1_3ce326a7cc.png"
import img2 from "../../../../public/image/USA/nw_usa4_8d52abb15b.webp"

const StudyUsa = () => {
    return (
        <>
            <UniversityComponent
                country="USA"
                title="Study in USA"
                img1={img1}
                img2={img2}
                firstSectionPara="The United States of America has been a global leader in the field of education and boasts of a lion’s share of top ranked universities according to all major international rankings. Few countries offer as many high ranked universities and noble laureate academia, as USA does."
                secondSectionPara="Study in one of the most prestigious higher education systems globally and access some high-end technology and cutting-edge research for an immersive, engaging & collaborative study experience. Choose from an extensive range of schools, numerous study disciplines and niche qualifications that are difficult to find by in other parts of the world and experience a uniquely flexible education system allowing you to apply to a variety of programs suiting your academic & career goals. Graduate with a truly global outlook and real-world skills for the future."
                thirdSectionPara="One of the most technologically powerful and dynamic countries, USA is the largest & most dominant economy globally. Sectors that empower this world’s most productive economy include Healthcare, Technology, Construction, Retail, Manufacturing, Finance & Insurance and Real Estate. Top jobs with high remuneration prospects for international students include Medicine, Computer & Information Systems Managers, Architectural & Engineering Managers and Marketing & Financial Managers. Standard of living in the USA is among the highest in the world with high per capita income. This nation performs very well in many measures of well-being such as income & wealth, health status, jobs and earnings, education & skills and environmental quality."
            />
        </>
    )
}

export default StudyUsa