import React, {Component} from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

import "./MyCalendar.css";

// class MyCalendar extends Component {
//     // constructor(props) {
//     //     super(props);
//     // };

//     // changeColor (dateInfo) {

//     //     console.log(dateInfo.dateStr);
//     //     console.log(dateInfo.jsEvent);

//     //     document.addEventListener("DOMContentLoaded", function() {
//     //         const calendarEl = document.getElementById("calendar");

//     //         const calendar = new FullCalendar.Calendar(calendarEl, {
//     //             initialView : "dayGridMonth",
//     //             initialDate : dateInfo.dateStr,
//     //             events : [
//     //                 {
//     //                     display : "backgound",
//     //                     color : "black"
//     //                 }
//     //             ],
//     //             dayRender : function (dateInfo, cell){
//     //                 cell.css("background-color", "red");
//     //             } 
//     //         });
//     //     })         
//     // };

//     state = {
//         background : "#fff"
//     }

//     backgroundSubmit = (e) => {
//         e.preventDefault();
//     }

//     backgroundChange = (e) => {
//         console.log(this.state.background);
//     }

//     render() {

//         function change(dateInfo) {

//             console.log(dateInfo.date.getDate()+2);

//             document.getElementsByClassName("fc-daygrid-day-frame fc-scrollgrid-sync-inner")[dateInfo.date.getDate()+2].style.backgroundColor = this.state;
//         };

//         return(
//             <div className="mypage-body">
//                 <form onSubmit={this.backgroundSubmit}>
//                     <input 
//                         name="input_color" 
//                         placeholder="Input Color" 
//                         onChange={this.backgroundChange}
//                         value={this.state.background}
//                     />
//                     <button type="submit">Input Color</button>
//                 </form>
//                 <div className="body-wrapper box">
//                     <div className="body-info-coutainer">
//                         <div className="calender-wrapper">
//                             <FullCalendar 
//                                 defaultView="dayGridMonth" 
//                                 plugins={[dayGridPlugin, interactionPlugin]}
//                                 dateClick={change}
//                             />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }


function MyCalendar (props) {

    return (
        <div className="calendar">
            <FullCalendar 
                initialView ="dayGridMonth" 
                plugins={[dayGridPlugin, interactionPlugin]}
                dateClick={(dateInfo) => {
                    document.getElementsByClassName("fc-daygrid-day-frame fc-scrollgrid-sync-inner")
                    [dateInfo.date.getDate()+2].style.backgroundColor 
                    = props.color;
                }} 
            />
        </div>
    );
}

export default MyCalendar;