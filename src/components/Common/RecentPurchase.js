import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Button } from '@twilio-paste/core';

export default function RecentPurchase(props) {
    const { data, mostRecentImage, mostRecentTitle, mostRecentBody } = props;
    const accentColor = data['cdp-accent']
    const classes = {
        container: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            height: '85%',
            padding: '10px',
        },
        imageContainer: {
            display:'flex',
            width: '50%',
            height: '100%',
            alignItems: 'center',
        },
        textContainer: {
            display:'flex',
            flexDirection: 'column',
            width: '50%',
            height: '100%',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
        },
        image: {
            maxWidth: '100%',
            maxHeight: '100%',
        },
        accentText: {
            color: accentColor,
            fontWeight: '800',
        }
        
    };

    return(
        <div style={classes.container}>
            <div style={classes.imageContainer}>
                <img style={classes.image} src={mostRecentImage} alt={mostRecentTitle}/>
            </div>
            <div style={classes.textContainer}>  
                <Typography variant="h6">{mostRecentTitle}</Typography>
                <Typography variant="body">{mostRecentBody}</Typography>
                <Typography style={classes.accentText} variant="h6">15 in stock in warehouse </Typography>
            </div>
        </div>
    )

}