import React from "react";
import "./Events.css"

export default function Events() {
  return (
    <>
      <h1 className="event-head">Upcoming Events</h1>
      <div className="event-container">

        <div className="e1-container">
            <div className="e1-title">
                <h5 className="event-title">Event 1</h5>
            <div className="e-button">
                <button className="event-button">View More</button>
            </div>
            </div>
        </div>

        <div className="e2-container">
            <div className="e2-title">
                <h5 className="event-title">Event 2</h5>
            </div>
            <div className="e-button">
                <button className="event-button">View More</button>
            </div>
        </div>

        <div className="e3-container">
            <div className="e3-title">
                <h5 className="event-title">Event 3</h5>
            </div>
            <div className="e-button">
                <button className="event-button">View More</button>
            </div>
        </div>

      </div>
    </>
  );
}
