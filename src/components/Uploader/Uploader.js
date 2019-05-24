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
        this.uppy.upload().then((result) => {
            console.info('Successful uploads:', result.successful)

            if (result.failed.length > 0) {
                console.error('Errors:')
                result.failed.forEach((file) => {
                    console.error(file.error)
                })
            }
        })
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