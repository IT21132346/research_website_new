import React from "react";
import { FaDownload } from "react-icons/fa6";
export const Documents =(props)=>{
    return(
        <div id="portfolio" className="text-center">
            <div className="container">
                <div className="section-title">
                    <h2>Documents</h2>
                </div>

                <div className="row">
                    <div className="portfolio-items">
                        {props.data
                            ? props.data.map((d, i) => (
                                <div
                                    key={`${d.title}-${i}`}
                                    className="col-sm-6 col-md-4 col-lg-3"
                                >
                                    <h6>{d.title}</h6>
                                    <a href={d.document} download>
                                        <button type="button" className="btn btn-primary">
                                            download <FaDownload />
                                        </button>
                                    </a>
                                </div>
                            ))
                            : "Loading..."}
                    </div>
                </div>

            </div>
        </div>
    )
}