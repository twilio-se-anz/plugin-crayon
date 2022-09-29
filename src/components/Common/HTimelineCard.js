import React from "react";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { Button } from '@twilio-paste/core'
import Typography from '@material-ui/core/Typography';
import FlexThemeProvider from '../Common/FlexThemeProvider'


export default function HTimeline(props)  {
    const { data, SegmentData } = props;
    const {imgURL, tweetURL, titleText, bodyText } = SegmentData
    const accentColor = data['cdp-accent'];

    const classes = {
        container: {
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            height: '100%',
            height: '25vh',
        },
        imageContainer: {
            width: '50%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'white',
        },
        image: {
            maxWidth: '80%',
            maxHeight: '70%',
            borderRadius: '10px',         
        },
        textContainer: {
            display: 'flex',
            flexDirection: 'column',
            width: '50%',
            height: '100%',
            justifyContent: 'space-between',
            paddingBottom: '10px',
        },
        actions: {
            color: '#0063e0'
        }
    }

      return (
        <FlexThemeProvider>
            <div style={classes.container}>
                <div style={classes.imageContainer}>
                    <img src={imgURL} style={classes.image} />
                </div>
                <Card style={classes.textContainer}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {titleText}
                        </Typography>
                        <Typography variant="body" color="textSecondary" component="p">
                            {bodyText}
                        </Typography>
                    </CardContent>
                    <CardActions >
                        <Button variant="link">Share</Button>
                        <Button variant="link">More Information</Button>
                    </CardActions>
                </Card>
            </div>
        </FlexThemeProvider>       
      );
}

        