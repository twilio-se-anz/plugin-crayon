import React from 'react';
import ReactGoogleSlides from "react-google-slides";
import Typography from '@material-ui/core/Typography';

export default function Slides(props) {
    const { data } = props;
    const slidesURL = data['cdp-slidesUrl']
   
    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent:'center', height: "100%", width: "100%"}}>
            <ReactGoogleSlides
                width={'90%'}
                height={950}
                slidesLink={slidesURL}
                loop
              />
            <div style={{padding: '50px'}}>
                <Typography variant="h2" gutterBottom> SMS to  0488-883-192  to interact </Typography> 
            </div>
        </div>
    );
}
