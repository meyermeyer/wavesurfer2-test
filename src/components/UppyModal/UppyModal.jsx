import React, { Component } from "react";

import { DragDrop, XHRUpload, Dashboard, DashboardModal } from '@uppy/react';
import '@uppy/core/dist/style.css'
import '@uppy/drag-drop/dist/style.css'
import Uppy from '@uppy/core'
import Tus from '@uppy/tus'
// import '@uppy/core/dist/style.css'
import '@uppy/dashboard/dist/style.css'
// import { XHRUpload } from '@uppy/xhr-upload'
// import { Dashboard } from '@uppy/dashboard'
// import {Transloadit} from '@uppy/transloadit'
import { Transloadit } from 'uppy'
// import { DashboardModal } from 'uppy/lib/react/DashboardModal'
// const Uppy = require("uppy/lib/core");
// const DashboardModal = require("uppy/lib/react/DashboardModal");
// const Tus = require("uppy/lib/plugins/Tus");

class UppyModal extends Component {
    state = { 
        modalOpen: false,
        uploads: [] 
    };

    handleUploadModalOpen = () => this.setState({ ...this.state, modalOpen: true });
    handleUploadModalClose = () => this.setState({ ...this.state, modalOpen: false });
    handleUploadCompleted = (id, url) => this.setState({...this.state, uploads: this.state.uploads.push({id: id, url: url})})

    componentWillUnmount() {
        this.uppy.close();
    }

    render() {
        const { handleUploadCompleted } = this.props;

        this.uppy = Uppy({
            meta: { type: "avatar" },
            autoProceed: true
        });

        this.uppy.use(Tus, { endpoint: "https://master.tus.io/files/" });

        this.uppy.on("complete", result => {
            console.log("Completed upload, result:", result);
        
            
            const id = result.successful[0].id;
            const url = result.successful[0].uploadURL;
            console.log('id:', id, 'url:', url);
            
            handleUploadCompleted(id, url);
        });

        this.uppy.run();

        // const Dashboard = () => {
        //   return (
        //     <DashboardModal
        //       uppy={this.uppy}
        //       closeModalOnClickOutside
        //       open={this.state.modalOpen}
        //       onRequestClose={this.handleUploadModalClose}
        //     />
        //   );
        // };

        return (
            <div>
                {/*<Dashboard/>*/}
                <DashboardModal
                    uppy={this.uppy}
                    closeModalOnClickOutside
                    open={this.state.modalOpen}
                    onRequestClose={this.handleUploadModalClose}
                />
                <button onClick={this.handleUploadModalOpen}>add new files</button>
            </div>
        );
    }
}

export default UppyModal;
