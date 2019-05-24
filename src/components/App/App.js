import React, { Component } from 'react';
import './App.css';
import Waveform from '../Waveform/Waveform';
import Uploader from '../Uploader/Uploader';
import UppyModal from '../UppyModal/UppyModal';
// import BubbleViz from './BubbleViz';


class App extends Component {
  
  render() {
    return (
      <div className='parent-component'>
        <Waveform />
        {/* <Uploader /> */}
        <UppyModal />
        {/* <BubbleViz /> */}
      </div>
    )
      
  }
  // render () {
    

  //   return(
  //   <div className = "App" >
  //       <header className="App-header">
  //         <h1> waveSurfer trial</h1>
  //       </header>
       
  //   </div>
  // );
  // }
  
}

export default App;
