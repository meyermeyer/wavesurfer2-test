import React from 'react'
import ReactDOM from 'react-dom'
import WaveSurfer from 'wavesurfer'
import soundFile from './Big_Dog_Barking.mp3'

export default class Waveform extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    
    playAudio = () => {
        this.wavesurfer.play();
    }

    stopAudio = () => {
        this.wavesurfer.stop();
    }
    componentDidMount() {
        this.$el = ReactDOM.findDOMNode(this)
        this.$waveform = this.$el.querySelector('.wave')
        this.wavesurfer = WaveSurfer.create({
            container: this.$waveform,
            waveColor: 'violet',
            progressColor: 'purple',
            backend: 'MediaElement'
        })
        this.wavesurfer.load('http://ia902606.us.archive.org/35/items/shortpoetry_047_librivox/song_cjrg_teasdale_64kb.mp3')
        this.wavesurfer.load(soundFile)
    }
    componentWillUnmount() {

    }
    render() {
        return (
            <div className='waveform'>
                <div className='wave'></div>
                <button onClick={this.playAudio}>Play</button>
                <button onClick={this.stopAudio}>Stop</button>
            </div>
        )
    }
}

Waveform.defaultProps = {
    src: ""
}