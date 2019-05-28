import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import WaveSurfer from 'wavesurfer.js'
import MicrophonePlugin from 'wavesurfer.js/dist/plugin/wavesurfer.microphone.js'
import { connect } from 'react-redux'

class Microphone extends Component {
    render() {
        return(
            <p>mic here</p>
        )
    }
}

export default connect()(Microphone)