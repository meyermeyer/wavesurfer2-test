import React, { Component } from 'react';
import './App.css';
import Waveform from './Waveform';

class App extends Component {
  
  render() {
    return <div className='parent-component'><Waveform src={'./Big_Dog_Barking.mp3'} /></div>
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
