import React from 'react'

export const ResearchGap = (props) => {
    return (
        <div id="researchGap" className="text-center">
            <div className="container">
                <div className="col-md-8 col-md-offset-2 section-title">
                    <h2>Research Gap</h2>
                    <p>
                        The research highlights several gaps in the current field of vehicle fire safety and monitoring with rapid emergency dispatch solutions.
                    </p>
                </div>

                <div className="col-md-12 gap-container">
                    <div className="gap-card">
                        <div className='gaptopic'>
                            Reactive Fire Detection Systems
                        </div>
                        <p>
                            Current systems are mostly reactive, lacking the capability to predict fire outbreaks in advance. This limitation results in delayed responses and potentially greater damage or loss.
                        </p>
                    </div>

                    <div className="gap-card">
                        <div className='gaptopic'>
                            Non-automotive Design
                        </div>
                        <p>
                            Existing fire detection technologies are not specifically designed for automotive environments. This general-purpose approach leads to suboptimal performance in detecting and preventing vehicle fires.
                        </p>
                    </div>

                    <div className="gap-card">
                        <div className='gaptopic'>
                            Limited Proactive Measures
                        </div>
                        <p>
                            There is a lack of advanced detection mechanisms that can proactively signal the onset of a vehicle fire before it fully develops. This proactive capability is crucial for preventing fires rather than merely responding to them after they occur.
                        </p>
                    </div>

                    <div className="gap-card">
                        <div className='gaptopic'>
                            Emergency Routing
                        </div>
                        <p>
                        Current routing systems do not adequately support dynamic and real-time decision-making for fire trucks navigating through traffic, which can delay emergency responses to optimize emergency routing. 
                        </p>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
