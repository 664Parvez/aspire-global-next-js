import React from "react";
import universityCss from "../styles/university.module.css"

const university = () => {
    return (
        <>
            <div className={universityCss.first_section}>

            </div>
            <div className={universityCss.second_section}>
                <nav>
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                        <button className="nav-link active" id="nav-uk-tab" data-bs-toggle="tab" data-bs-target="#nav-uk" type="button" role="tab" aria-controls="nav-uk" aria-selected="true">UK</button>
                        <button className="nav-link" id="nav-usa-tab" data-bs-toggle="tab" data-bs-target="#nav-usa" type="button" role="tab" aria-controls="nav-usa" aria-selected="false">USA</button>
                        <button className="nav-link" id="nav-australia-tab" data-bs-toggle="tab" data-bs-target="#nav-australia" type="button" role="tab" aria-controls="nav-australia" aria-selected="false">AUSTRALIA</button>
                    </div>
                </nav>
                <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show active" id="nav-uk" role="tabpanel" aria-labelledby="nav-uk-tab">UK</div>
                    <div className="tab-pane fade" id="nav-usa" role="tabpanel" aria-labelledby="nav-usa-tab">USA</div>
                    <div className="tab-pane fade" id="nav-australia" role="tabpanel" aria-labelledby="nav-australia-tab">Australia</div>
                </div>
            </div>
        </>
    )
}

export default university