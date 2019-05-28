// import React, {Component} from 'react'
// import ReactDOM from 'react-dom'
// import WaveSurfer from 'wavesurfer.js'
// import MicrophonePlugin from 'wavesurfer.js/dist/plugin/wavesurfer.microphone.js'
// import { connect } from 'react-redux'

// class Microphone extends Component {
//     componentDidMount() {
//         // console.log('WaveSurfer object:', WaveSurfer);
//         // this.$el = ReactDOM.findDOMNode(this)
//         // this.$waveform = this.$el.querySelector('.wave')
//         // this.wavesurfer = WaveSurfer.create({
//         //     container: this.$waveform,
//         //     waveColor: 'violet',
//         //     progressColor: 'purple',
//         //     backend: 'MediaElement',
//         //     plugins: [MicrophonePlugin.create({})]
//         // })
       


//     }


//     render() {
//         return(
//             <div onClick={this.handleClick} className='wave'>
//                 <WaveSurfer
//                     audioFile={prop.comment_url}
//                     pos={this.state.pos}
//                     onPosChange={this.handlePosChange}
//                     playing={this.state.playing}
//                 />
//             </div>
//         )
//     }
// }

// Microphone.defaultProps = {
//     src: ""
// }
// export default connect()(Microphone)