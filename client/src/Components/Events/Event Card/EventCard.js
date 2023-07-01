import React from "react";

const EventCard = ({ title, date, eventDescription, time, uid, eventSize, hostedBy }) => {

    return (
        <div className={``}>
            <div>
                <div>
                    <span>
                        { title }
                    </span>
                    <span>
                        {`By ${ hostedBy }`}
                    </span>
                </div>
                <div>
                    <span>
                        { date }
                    </span>
                    <span>
                        { time }
                    </span>
                </div>
            </div>
            <p>
                { description }
            </p>
        </div>
    );

};


export default EventCard;