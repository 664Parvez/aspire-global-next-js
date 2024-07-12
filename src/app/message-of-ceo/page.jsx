import React from "react";
import Image from "next/image";
import ceoCss from "../styles/ceomessage.module.css"

import ceo from "../../../public/image/ceo/ceo-photo.jpg"

const ceoMessage = () => {
    return (
        <>
            <div className={ceoCss.first_section}>
                <h1>Chief Executive Officer Message</h1>
            </div>
            <div className={ceoCss.second_section}>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="text-center">
                            <Image src={ceo} alt=""/>
                            <h4>Ujjol Mia</h4>
                            <p>Chief Executive Officer (CEO)</p>
                            <p><b>Email</b> : umia@aspireglobalpathways.com</p>
                            <p><b>Phone</b> : +447512648787</p>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className={ceoCss.ceoMessage}>
                            <h3>Aspire Global Pathways</h3>
                            <p>Greetings,</p>

                            <p>As we navigate through these unprecedented times, I want to take a moment to express my sincerest gratitude to each and every one of you for your unwavering resilience and commitment to education. At Aspire Global Pathways, our dedication to supporting students and university partners remains steadfast, and we are here to provide assistance and guidance every step of the way.</p>

                            <p>To our students: Your determination to pursue your dreams of studying abroad inspires us every day. We understand the challenges you may face, and we are fully committed to helping you overcome them. Whether you need assistance with your applications, visa processes, or simply someone to talk to, our team is here to support you throughout your journey.</p>

                            <p>To our university partners: Your collaboration and partnership are invaluable to us. Together, we have the opportunity to shape the future of international education and provide students with life-changing opportunities. We remain committed to fostering strong relationships and working together to ensure the success of our students.</p>

                            <p>As we move forward, let us continue to support and uplift one another. Together, we will overcome any obstacles that come our way and emerge stronger than ever before.</p>

                            <p>Warm regards,</p>

                            <p>Ujjol Mia</p>

                            <p>Aspire Global Pathways</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ceoMessage