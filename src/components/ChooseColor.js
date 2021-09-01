import React, { Component, useState }from 'react';
import { SketchPicker } from 'react-color';
import MyCalendar from './MyCalendar';
import "./ChooseColor.css";

// xxxx class ColorButton extends Component {
    // state = {
    //   displayColorPicker: false,
    // };
  
    // handleClick = () => {
    //   this.setState({ displayColorPicker: !this.state.displayColorPicker })
    // };
  
    // handleClose = () => {
    //   this.setState({ displayColorPicker: false })
    // };
  
    // render() {
    //   const popover = {
    //     position: 'absolute',
    //     zIndex: '2',
    //   }
    //   const cover = {
    //     position: 'fixed',
    //     top: '0px',
    //     right: '0px',
    //     bottom: '0px',
    //     left: '0px',
    //   }
    //   return (
    //     <div>
    //       <button onClick={ this.handleClick }>Pick Color</button>
    //       { this.state.displayColorPicker ? <div style={ popover }>
    //         <div style={ cover } onClick={ this.handleClose }/>
    //         <SketchPicker />
    //       </div> : null }
    //     </div>
    //   )
    // }
// }

// function ColorButton () {
//   const [color, setColor] = useState('#fff')
//   const [showColorPicker, setShowColorPicker] = useState(false)


//   return (
//     <div>
//       <button
//         onClick={() => setShowColorPicker(showColorPicker => !showColorPicker)}
//       >
//         {showColorPicker ? 'Close color picker' : 'Pick a color'}
//       </button>
//       {showColorPicker && (
//         <SketchPicker
//           color={color}
//           onChange={updatedColor => setColor(updatedColor.hex)}
//         />
//       )}
//       <h2>You picked {color}</h2>
//     </div>
//   )
// }

// class ColorButton extends Component {
  
//   state = {
//     displayColorPicker : false,
//     background : "#fff",
//   };

//   handleClick = () => {
//     this.setState({ displayColorPicker: !this.state.displayColorPicker })
//   };

//   handleClose = () => {
//     this.setState({ displayColorPicker: false })
//   };

//   handleChangeComplete = (color) => {
//     this.setState({background : color.hex});
//   };

//   render() {
//     const popover = {
//       position: 'absolute',
//       zIndex: '2',
//     }
//     const cover = {
//       position: 'fixed',
//       top: '0px',
//       right: '0px',
//       bottom: '0px',
//       left: '0px',
//     }

//     return (
//       <div>
//         <button onClick={this.handleClick}>Pick a Color</button> 
//         <div>{this.state.displayColorPicker ? <div style={ popover}>
//           <div style={cover} onClick={this.handleClose}/>
//             <SketchPicker 
//             color={this.state.background}
//             onChangeComplete={this.handleChangeComplete}
//             />
//             </div> : null}
//           </div>
//         <h2>You picked {this.state.background}</h2>
//         <MyCalendar/>
//       </div>
//     )
//   }
// }

function ColorButton () {

  const [color, setColor] = useState('#fff')
  const [showColorPicker, setShowColorPicker] = useState(false)

  return (
    <div>
      <button className="button"
        onClick={() => setShowColorPicker(showColorPicker => !showColorPicker)}
      >
        {showColorPicker ? 'Close color picker' : 'Pick a color'}
      </button>
      {showColorPicker && (
        <SketchPicker
          color={color}
          onChange={updatedColor => setColor(updatedColor.hex)}
        />
      )}
      <MyCalendar color={color}/>
    </div>
  )
}

export default ColorButton;
