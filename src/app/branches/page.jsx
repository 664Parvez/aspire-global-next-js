import React from "react";
import branchCss from "../styles/branches.module.css"

import { FaPhone, FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const branches = () => {
    return (
        <>  
            <div className={branchCss.first_section}>
                <h1>Global Branches Of <span>Aspire Global Pathways</span></h1>
            </div>
            <div className={branchCss.second_section}>
                <div className={branchCss.branches}>
                    <div id={branchCss.branches_details} className="d-flex justify-content-between align-items-center">
                        <div className={branchCss.branches_info}>
                            <h2>UK Branch</h2>
                            <ul>
                                <li><FaPhone className={branchCss.details_icon} /> +44 7512 648787</li>
                                <li><MdEmail className={branchCss.details_icon} /> info@aspireglobalpathways.com</li>
                                <li><FaLocationDot className={branchCss.details_icon} /> Churchill Court , 3 Manor Royal, Crawley, United Kingdom</li>
                            </ul>
                        </div>
                        <div className={branchCss.branchCss_map}>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10015.239909773372!2d-0.171743!3d51.130413!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4875f1549ca38ee7%3A0xcc2c6f3c11e6523!2sAspire%20Global%20Pathways!5e0!3m2!1sen!2sus!4v1715789963543!5m2!1sen!2sus" width="600" height="250" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default branches