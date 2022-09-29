import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import { makeStyles } from '@material-ui/core/styles';
import FaceIcon from '@material-ui/icons/Face';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import NoEncryptionIcon from '@material-ui/icons/NoEncryption';
import { Typography } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        padding: '5px 10px 10px 10px',
        height: '100%',
    },
    textContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        width: '100%',     
    },
    chipContainerUpper: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
        margin: theme.spacing(0.5),
        },
        justifyContent: 'space-evenly',
        alignItems: 'space-evenly',
        borderBottom: '1px solid #000', 
        paddingBottom: '10px',     
    },
    chipContainerLower: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
        margin: theme.spacing(0.5),
        },
        justifyContent: 'space-evenly',
        alignItems: 'space-evenly',     
    }
  }));

export default function SegmentChips(props) {
    const { data } = props;
    const classes = useStyles();

  return (
        <div className={classes.root}>
            <Typography variant="h4" style={{color: 'black'}}>Persona Data</Typography>
            <div className={classes.textContainer}>
                <Typography variant="h6" style={{color: 'black'}}>SQL traits</Typography>
            </div>
            <div className={classes.chipContainerUpper}>
                <Chip icon={<FaceIcon style={{color: 'white'}}/>} label="married" style={{backgroundColor: '#0063e0', color: 'white'}} />
                <Chip avatar={<Avatar alt="DanSimth" src="https://images-5674.twil.io/danface.png" />} label="High Income Earner" style={{backgroundColor: '#0063e0', color: 'white'}} />
                <Chip label="Credit Card holder"/>
                <Chip icon={<NoEncryptionIcon style={{color: 'white'}}/>} label="No 2FA configured" style={{backgroundColor: '#d71f1f', color: 'white'}} />
            </div>
            <div className={classes.textContainer}>
                <Typography variant="h6" style={{color: 'black'}}>Computed Traits</Typography>
            </div>
            <div className={classes.chipContainerLower}>
                <Chip label="Traveler" />
                <Chip label="Insurance Upsell" />
                <Chip avatar={<Avatar alt="DanSmith" src="https://images-5674.twil.io/danface.png" />} label="Social Media" style={{backgroundColor: '#0063e0', color: 'white'}} />
                <Chip label="High Engagement Score" style={{backgroundColor: '#0063e0', color: 'white'}} />
                <Chip icon={<CreditCardIcon style={{color: 'white'}}/>} label="Low Credit Score" style={{backgroundColor: '#d71f1f', color: 'white'}}/>
            </div>
        </div>
  );
}
