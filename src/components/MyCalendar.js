import React, {Component, component} from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import "./MyCalendar.css";


// import "./MyCalender.scss";

class MyCalendar extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return(
            <div className="mypage-body">
                <div className="body-wrapper box">
                    <div className="body-info-coutainer">
                        <div className="calender-wrapper">
                            <FullCalendar defaultView="dayGridMonth" plugins={[dayGridPlugin]}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MyCalendar;