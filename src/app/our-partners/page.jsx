import React from "react";
import Image from "next/image";
import partnerCss from "../styles/partners.module.css"

import par1 from "../../../public/image/partners/buckinghamshire.jpg"
import par2 from "../../../public/image/partners/into.jpg"
import par3 from "../../../public/image/partners/oxford.webp"

const ourPartner = () => {
    return (
        <>
            <div className={partnerCss.first_section}>
                <h1>Our <span>Partners</span></h1>
            </div>
            <div className={partnerCss.second_section}>
                <div className="row justify-content-lg-between">
                    <div className="col-lg-3">
                        <div className={partnerCss.image}>
                            <Image layout="responsive" src={par1} alt=""/>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className={partnerCss.image}>
                            <Image layout="responsive" src={par2} alt=""/>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className={partnerCss.image}>
                            <Image layout="responsive" src={par3} alt=""/>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className={partnerCss.image}>
                            <Image layout="responsive" src={par3} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ourPartner