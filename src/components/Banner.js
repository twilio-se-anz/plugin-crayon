import React from 'react';
import Typography from '@material-ui/core/Typography';



export default function Banner(props) {
    const { data } = props;
    const missingKeys = data['Missing Keys']
   
    return (
            <div style={{background: data['cdp-panelBannerBackgroundColor'], minHeight: "100vh", paddingLeft: "20px", paddingBottom:'50px', display: 'flex', alignItems:'center', justifyContent: 'center'}}>            
                {missingKeys.length != 0 ?  
                <div style={{display: 'flex', flexDirection: 'column', justifyContent: "center", alignItems: 'center'}}>
                    <Typography variant='h3'>You MUST configure customer data to use this demo</Typography>
                    <Typography variant='h4'>Missing config keys:</Typography>
                    <br />
                    {missingKeys.map(item => {
                    return (<Typography variant='h6'>{item}</Typography>)
                    })}
                </div> : 
                    <img style={{ maxWidth: "50vw", minWidth: "50vw"}} src={data['fte-splash-url']}></img>
            }    
        </div>
    );
}
