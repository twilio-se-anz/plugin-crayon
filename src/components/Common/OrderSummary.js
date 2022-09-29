import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Button } from '@twilio-paste/core';

export default function RecentPurchase(props) {
    const { data } = props;
    const deliveryDate = new Date().toDateString()
    const accentColor = data['cdp-accent']
    const classes = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '85%',
            padding: '10px',
        },
        buttonContainer: {
            display:'flex',
            flexDirection: 'row',
            width: '90%',
            height: '30%',
            alignItems: 'flex-end',
            justifyContent: 'space-evenly',
        },
        titleContainer: {
            display:'flex',
            flexDirection: 'column',
            width: '90%',
            height: '10%',
            alignItems: 'flex-start',
            marginBottom: '25px',
        },
        textContainer: {
            display:'flex',
            flexDirection: 'column',
            width: '90%',
            height: '60%',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            paddingLeft: '25px',
        },
        multiText: {
            display:'flex',
            flexDirection: 'row',
        },
        accentText: {
            color: accentColor,
            fontWeight: '800',
            marginLeft: '5px',
        }
        
    };

    return(
        <div style={classes.container}>
            <div style={classes.titleContainer}>
                <Typography variant="h6">Order Number: 213543</Typography>
            </div>
            <div style={classes.textContainer}>     
                <Typography variant="body">Number of items: 3</Typography>
                <Typography variant="body">Shipping method: Domestic Express</Typography>
                <Typography variant="body">Tracking ID: 412352435 - Aus Post </Typography>
                <span style={classes.multiText}><Typography variant="body">Delivery Status: </Typography><Typography style={classes.accentText} variant="body">Delivered</Typography></span>
                <Typography variant="body">Delivery Date: {deliveryDate}</Typography>
                <Typography variant="body">Shipping method: Domestic Express</Typography>
            </div>
            <div style={classes.buttonContainer}>
                <Button variant="destructive_secondary">Order Details</Button>
                <Button variant="destructive_secondary">Track Order</Button>     
            </div>
        </div>
    )

}