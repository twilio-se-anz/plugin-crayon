import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Button } from '@twilio-paste/core'

export default function SuggestedItems(props) {
    const { suggestedImage1, suggestedImage2, suggestedImage3, title1, title2, title3 } = props;
    const classes = {
        container: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'space-between',
            height: '85%',
            paddingTop: '5px',
            paddingBottom: '5px',
        },
        suggestedItems: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '100%',
            width: '33%',
        },
        image: {
            maxWidth: '100%',
            maxHeight: '100%',
        },
        imageContainer: {
            display:'flex',
            width: '100%',
            height: '60%',
            alignItems: 'center',
            justifyContent: 'center',
        },
    };

    return(
        <div style={classes.container}>
            <div style={classes.suggestedItems}>
                <Typography variant="h6">{title1}</Typography>
                <div style={classes.imageContainer}>
                    <img style={classes.image} src={suggestedImage1} alt={title1}/>
                </div>
                <Button variant="destructive_secondary">Order</Button>
            </div>
            <div style={classes.suggestedItems}>
                <Typography variant="h6">{title2}</Typography>
                <div style={classes.imageContainer}>
                    <img style={classes.image} src={suggestedImage2} alt={title2}/>
                </div>
                <Button variant="destructive_secondary">Order</Button>
            </div>
            <div style={classes.suggestedItems}>
                <Typography variant="h6">{title3}</Typography>
                <div style={classes.imageContainer}>
                    <img style={classes.image} src={suggestedImage3} alt={title3}/>
                </div>                
                <Button variant="destructive_secondary">Order</Button>
            </div>
        </div>
    )

}