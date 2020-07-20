import React ,{ Component }  from 'react';
import Header from './header';
import '../css/interact.css';
import Footer from './footer';



//import {Navbar,Nav} from 'react-bootstrap';
import moment from 'moment';
import ReactTimeslotCalendar from 'react-timeslot-calendar';
import Calendar from 'react-calendar';
import {Button} from 'react-bootstrap'; 

// class interact extends Component{
 
//   state = {
//     date: new Date(),
//   }
 
//   onChange = date => this.setState({ date });
 
//   render() {
//     return (
//       <div>
//         <Calendar
//           onChange={this.onChange}
//           value={this.state.date}
//         />
//         <button onClick={()=>{console.log(this.date);}}></button>
//       </div>

//     );
//   }
    
  
// }


// bookTimeSlot = event => {
  
//   // let localUser = JSON.parse(localStorage.getItem("credentials"));
  

//   let bookedTennisCourtTable = {
//     UserId: localUser.userId,
//     TennisCourtId: this.props.tennisCourtId,
//     StartTime: startDateClone,
//     EndTime: endDateClone,
//     Partners: ""
//   }

//   let bookedTennisCourtIdClone = 0;

//   if (startDateClone) {
//     let alertCourtDate = moment(startDateClone).format('llll');

//     this.setState({
//       startDate: alertCourtDate
//     })

//     APIManager.bookTennisCourt(bookedTennisCourtTable).then(court => {
//       bookedTennisCourtIdClone = court.id;
//       this.setState({
//         bookedTennisCourtId: bookedTennisCourtIdClone
//       })
//     });
//   }

class interact extends Component{
  // let onSelectTimeslot=(allTimeslots, lastSelectedTimeslot)=>{
  //   console.log(lastSelectedTimeslot.startDate);
  // }
  book = event =>{
    let startDateClone = "";
    let endDateClone = "";

    let selectedStartDateInput = document.getElementsByName("tsc-startDate");

    for (let i = 0; i < selectedStartDateInput.length; i++) {
      let selectedStartDate = selectedStartDateInput[i].value;
      let sliceSelectedStartDate = selectedStartDate.slice(0, 19);
      let fullStartDate = sliceSelectedStartDate.slice(0, 10);
      let fullStartTime = sliceSelectedStartDate.slice(11, 19);

      startDateClone = `${fullStartDate} ${fullStartTime}`; // 2018-11-02 14:00:00
    }

    let selectedEndDateInput = document.getElementsByName("tsc-endDate");

    for (let i = 0; i < selectedEndDateInput.length; i++) {
      let selectedEndDate = selectedEndDateInput[i].value;
      let sliceSelectedEndDate = selectedEndDate.slice(0, 19);
      let fullEndDate = sliceSelectedEndDate.slice(0, 10);
      let fullEndTime = sliceSelectedEndDate.slice(11, 19);

      endDateClone = `${fullEndDate} ${fullEndTime}`;
    }
  
    console.log(startDateClone);
    console.log(endDateClone);
  }

  render(){
   

    return (
      <div>
        <h2> Available Time Slots </h2>
      <ReactTimeslotCalendar
        initialDate={moment().format()}
        timeslots= {[
          ['5', '6'], // 1:00 AM - 2:00 AM
          ['6', '7'], // 2:00 AM - 3:00 AM
          ['7', '8'], // 4:00 AM - 6:00 AM
          ['18', '19'],
          ['19', '20'],
          ['20', '21']
      ]}
      />
      <a className="btn btn-primary py-3 px-4 mr-3" href={process.env.PUBLIC_URL +"/book"}>BOOK HERE!!</a>
      <Footer/>
      </div>
    );
  }
}

export default interact;