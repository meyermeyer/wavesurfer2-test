import React from 'react'
import ReactDOM from 'react-dom'
import WaveSurfer from 'wavesurfer'

export default class Waveform extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    
    playAudio = () => {
        this.wavesurfer.play();
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
        this.wavesurfer.load('parking_garage.wav')
    }
    componentWillUnmount() {

    }
    render() {
        return (
            <div className='waveform'>
                <div className='wave'></div>
                <button onClick={this.playAudio}>Play</button>
            </div>
        )
    }
}

Waveform.defaultProps = {
    src: ""
}