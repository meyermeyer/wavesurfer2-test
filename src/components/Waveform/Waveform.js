import React from 'react'
import ReactDOM from 'react-dom'
import WaveSurfer from 'wavesurfer.js'
// import RegionsPlugin from 'wavesurfer/plugin/wavesurfer.regions';
import dogBarking from '../../audio/Big_Dog_Barking.mp3'
import RegionsPlugin from 'wavesurfer.js/dist/plugin/wavesurfer.regions.js'


export default class Waveform extends React.Component {
    constructor(props) {
        super(props)
        // WaveSurfer.Regions = RegionsPlugin
        this.state = {

        }
    }

    allowAnnotation = () => {
        console.log('in allowAnnotation');
        this.wavesurfer.enableDragSelection();
    
    }
   
    
    playAudio = () => {
        this.wavesurfer.play();
    }

    stopAudio = () => {
        this.wavesurfer.stop();
    }

    componentDidMount() {
        console.log('WaveSurfer object:', WaveSurfer);        
        this.$el = ReactDOM.findDOMNode(this)
        this.$waveform = this.$el.querySelector('.wave')
        this.wavesurfer = WaveSurfer.create({
            container: this.$waveform,
            waveColor: 'violet',
            progressColor: 'purple',
            backend: 'MediaElement',
            // plugins: [RegionsPlugin.create({})]
        })
        // const RegionsPlugin = WaveSurfer.regions
        // this.wavesurfer.load('http://ia902606.us.archive.org/35/items/shortpoetry_047_librivox/song_cjrg_teasdale_64kb.mp3')
        this.wavesurfer.load(dogBarking);
        
        // this.wavesurfer.load('https://master.tus.io/files/c0f264e71bb8721c0e5d4c4ff7cb5444+j5m5FZ8RQ_N.7TS3hWsr0YBbwuQMgRS9BCQIM9t7GXGjE_wxpGNo.AFUnAhKC9PHpHpgrXocLzfUvDPRG1Jx4y327NlQktYB00E_0JNlgH7f7JCaiF8SfREDar06HOVE')
    }
    componentWillUnmount() {

    }
    render() {
        return (
            <div className='waveform'>
                <div onClick={this.handleClick} className='wave'></div>
                <button onClick={this.playAudio}>Play</button>
                <button onClick={this.stopAudio}>Stop</button>
                <button onClick={this.allowAnnotation}>Annotate</button>
            </div>
        )
    }
}

Waveform.defaultProps = {
    src: ""
}