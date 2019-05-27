import React from 'react'
import ReactDOM from 'react-dom'
import WaveSurfer from 'wavesurfer.js'
import dogBarking from '../../audio/Big_Dog_Barking.mp3'
import RegionsPlugin from 'wavesurfer.js/dist/plugin/wavesurfer.regions.js'
import {connect} from 'react-redux'



class Waveform extends React.Component {
    state = {
        regionsArray: [],
        trackName: 'track 1',
        randomColor: ''
    }

    // wavesurfer = WaveSurfer.create({
    //     container: this.$waveform,
    //     waveColor: 'violet',
    //     progressColor: 'purple',
    //     backend: 'MediaElement',
    //     plugins: [RegionsPlugin.create({})]
    // })
    // saveRegions = () => {
    //     console.log('in saveRegions');
    //     this.setState({
    //         regions: 
    //     })
        
    // }



    randomColor = (alpha) => {
    return (
        'rgba(' +
        [
            ~~(Math.random() * 255),
            ~~(Math.random() * 255),
            ~~(Math.random() * 255),
            alpha || 1
        ] +
        ')'
    );
    }

    allowAnnotation = () => {
        console.log('in allowAnnotation');
        this.wavesurfer.enableDragSelection({
            color: this.randomColor(.1)
        });
    }

    handleHover = (region) => {
        console.log('hovering over', region.data.regionTag);

        
    }

    editTrackName = () => {
        console.log('in editTrackName');
        this.setState({
            ...this.state,
            trackName: 
                <form onSubmit={this.handleNameSubmit}>
                    <input onChange={this.handleNameInput}></input>
                </form>
                
        }) 
        
    }

    handleNameInput = (event) =>{
        console.log('in handleNameInput', event.target.value);
        this.setState({
            ...this.state,
            trackNameInput: event.target.value 
        })
    }

    handleNameSubmit = (event) => {
        event.preventDefault();
        console.log('in handleNameSubmit');
        this.setState ({
            ...this.state,
            trackName: this.state.trackNameInput,
            trackNameInput: ''
        })

        
    }
   
    saveRegions = (region) => {
        // alert('you created a region');
        let regionTag = prompt("Tag")
        let regionNotes = prompt("Notes")
        console.log('region:', region);
        //update 'region' created by clicking to include user's data
        region.update({
            data: {
                regionTag,
                regionNotes
            }
        })
        console.log('updated region', region);
        console.log('prompt responses:', regionTag, regionNotes);
        console.log(this.wavesurfer.regions);
       
        //add regions.list objects to arrat
        let regionsArray = []
        for (let i in this.wavesurfer.regions.list){
            regionsArray.push(this.wavesurfer.regions.list[i])
        }
        console.log('in saveRegions', this.wavesurfer.regions.list);
        console.log('regionsArray', regionsArray);
        
        this.wavesurfer.regions.list && this.setState({
            ...this.state,
            regionsArray: regionsArray
        })
        this.props.dispatch({type:"SEND_REGIONS", payload: regionsArray, })
    }

    playAudio = () => {
        this.wavesurfer.play();
    }

    pauseAudio = () => {
        this.wavesurfer.pause();
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
            plugins: [RegionsPlugin.create({})]
        })
        this.wavesurfer.load(dogBarking);
        console.log(this.wavesurfer.regions);
        this.wavesurfer.on('region-update-end', this.saveRegions);
        this.wavesurfer.on('region-mouseenter',this.handleHover)
        this.wavesurfer.on('ready', this.allowAnnotation)
        this.wavesurfer.on()
        
    }

    // componentDidUpdate() {
    //     this.wavesurfer.enableDragSelection({
    //         color: this.randomColor(0.1)
    //     });
    // }
    componentWillUnmount() {

    }
    render() {
        
       
        console.log('setting regions', this.state.regionsList);
        
        
        return (
            <div className='waveform'>
                <h3 onClick={this.editTrackName}>{this.state.trackName}</h3>
                <div onClick={this.handleClick} className='wave'></div>
                <button onClick={this.playAudio}>Play</button>
                <button onClick={this.pauseAudio}>Pause</button>
                <button onClick={this.stopAudio}>Stop</button>
                {/* <button onClick={this.allowAnnotation}>Annotate</button> */}
                <ul>
                    {this.state.regionsArray.map((region)=>{
                        return(
                            <li>{region.data.regionTag}</li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

Waveform.defaultProps = {
    src: ""
}

export default connect()(Waveform);