import React, {Component} from 'react'
import { DragDrop, XHRUpload, Dashboard } from '@uppy/react';
import '@uppy/core/dist/style.css'
import '@uppy/drag-drop/dist/style.css'
import Uppy from '@uppy/core'
// import { XHRUpload } from '@uppy/xhr-upload'
// import { Dashboard } from '@uppy/dashboard'
// import {Transloadit} from '@uppy/transloadit'
import {Transloadit} from 'uppy'

class Uploader extends Component {
    constructor(props) {
        super(props)
        this.uppy = Uppy()
            // .use(Transloadit, {})
    }

    componentWillUnmount() {
        this.uppy.close()
    }
    render() {
        return(
            <DragDrop uppy={this.uppy} />
        )
    }
}

export default Uploader