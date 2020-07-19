// import React ,{ Component }  from 'react';
// import Header from './header';
// import '../css/interact.css';
// import Footer from './footer';
// import { makeStyles } from '@material-ui/core/styles';
// import InputLabel from '@material-ui/core/InputLabel';
// import MenuItem from '@material-ui/core/MenuItem';
// import FormHelperText from '@material-ui/core/FormHelperText';
// import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';


// export default function SimpleSelect() {
//     // const classes = useStyles();
//     const [slot, setSlot] = React.useState('');
  
//     const handleChange = (event) => {
//       setSlot(event.target.value);
//     };
//     state = {
//         details: {start_time: '', end_time :'' , resource_id :'' }
//     }
    
//     slot = event =>{
//         fetch('http://127.0.0.1:8000/api/slot', {
//             method = 'POST',
//             headers: {'Content-Type': 'application/json'},
//             body: JSON.stringify(this.state.details)
//         }).then( data => data.json())
//         .catch( error => console.error(error))
//     }

//     return (
//       <div>
//         {/* <Header/> */}
//         <React.StrictMode>
//         <FormControl>
//           <InputLabel id="demo-simple-select-label">Slot</InputLabel>
//           <Select
//             labelId="demo-simple-select-label"
//             id="demo-simple-select"
//             value={slot}
//             onChange={handleChange}
//           >
//             <MenuItem value={1}>5:00 - 6:00AM</MenuItem>
//             <MenuItem value={2}>6:00 - 7:00AM</MenuItem>
//             <MenuItem value={3}>7:00 - 8:00AM</MenuItem>
//             <MenuItem value={4}>6:00 - 7:00PM</MenuItem>
//             <MenuItem value={5}>7:00 - 8:00PM</MenuItem>
//             <MenuItem value={6}>8:00 - 9:00PM</MenuItem> 
//           </Select>
        
//         </FormControl>
//         </React.StrictMode>
//         {/* <Footer/> */}
//       </div>
//     );
//   }
  

import React, { Component } from "react";
import axios from 'axios';
class book extends Component {
    state = {
        details: {start_time: '', end_time :'' , resource_id :'' }
    }
    det = {
        'id' : 1,
        'resource_id':1,
        'date':"20-08-2020",
        'start_time' :"7:00",
        'end_time' : "8:00",
    }
  
   handleChange = (event) => {
    const cred = this.state.details;
    cred[event.target.name] = event.target.value;
    this.setState({details: cred});
  };

//   book = (event) =>{
//       console.log('HI');
//       fetch('http://127.0.0.1:8000/api/slot',{
//         method :'POST',
//         headers: {'Content-Type': 'application/json'},
//         body: JSON.stringify(this.state.details)
//       }).then( data => {
//         console.log('HI');  
//         data.json()})
        
//   };

  componentDidMount(){
    //   const det = this.state.details;
      axios.post('http://127.0.0.1:8000/api/create', this.det)
      .catch( error => console.error(error));
  }
  render(){
  return (
    <form>
      <label>
          <p>Start_time</p>
        <select name="start_time" onChange={this.handleChange} value={this.state.details.start_time}>
          <option value="16.8">6:00AM</option>
          <option value="16.7">7:00AM</option>
          <option value="16.6">8:00AM</option>
        </select>
      </label>
      <label>
      <p>End_time</p>
        <select name="end_time" onChange={this.handleChange} value={this.state.details.end_time}>
          <option value="16.8">7:00AM</option>
          <option value="16.7">8:00AM</option>
          <option value="16.6">9:00AM</option>
        </select>
      </label>
      <label>
          <p>Sport</p>
        <select name="resource_id" onChange={this.handleChange} value={this.state.details.resource_id}>
          <option value="1">Tennis</option>
          <option value="2">Table Tennis</option>
          <option value="2">Badminton</option>
        </select>
      </label>
      <button type="submit" className="btn btn-login">BOOK</button>
    </form>
  );
}}

export default book;