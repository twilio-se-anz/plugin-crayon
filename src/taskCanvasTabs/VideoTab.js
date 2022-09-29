import React from 'react';
import { withTaskContext, } from '@twilio/flex-ui';
import { Manager } from '@twilio/flex-ui';

class VideoTab extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {

        const videoUser = Manager.getInstance().workerClient.name

        return (
            <div>
                <iframe style={{margin: '1px', width: "400px", height: '100%'}} allow="camera;microphone" src={`https://eli-video.web.app/room/Connected-${videoUser}-false`}/>
            </div>
        )
    }      
}

export default withTaskContext(VideoTab);

