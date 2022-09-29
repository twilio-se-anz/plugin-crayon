import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import HouseIcon from '@material-ui/icons/House';
import DraftsIcon from '@material-ui/icons/Drafts';
import PhoneIcon from '@material-ui/icons/Phone';
import Typography from '@material-ui/core/Typography';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import NoEncryptionIcon from '@material-ui/icons/NoEncryption';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import CloseIcon from '@material-ui/icons/Close';
import Chip from '@material-ui/core/Chip';
import { Actions } from '@twilio/flex-ui'


export default function SegmentTable(props) {
  const { data } = props;

  const classes = {
    headings: {
        fontWeight: 'bold',
        paddingLeft: '10px',
        paddingTop: '10px',
    },
    chipContainer: {
        paddingLeft: '10px',
        paddingTop: '10px',

    },
    listItem: {
        fontSize:'1rem',
    },

  }

  const handleListItemClick = (call) => {
    if(call === true){
        Actions.invokeAction("StartOutboundCall", {destination: data.general.phoneNumber});
    }   
  };

  return (
    <div style={{width: '100%'}}>
        <Typography variant="h6" style={classes.headings}>About: </Typography>
        <List>
        <ListItem
            selected={false}
            onClick={() => handleListItemClick(false)}
        >
            <ListItemIcon>
                <SupervisorAccountIcon />
            </ListItemIcon>
            <Typography variant='body' style={classes.listItem}>65</Typography>
        </ListItem>
        <ListItem
            selected={false}
            onClick={() => handleListItemClick(false)}
        >
            <ListItemIcon>
                <LocationOnIcon />
            </ListItemIcon>
            <Typography variant='body' style={classes.listItem}>{data['cdp-suburb']}, {data['cdp-city']}</Typography>
        </ListItem>
        <ListItem
            selected={false}
            onClick={() => handleListItemClick(true)}
        >
            <ListItemIcon>
            <MonetizationOnIcon />
            </ListItemIcon>
            <Typography variant='body' style={classes.listItem}>New Money (High Net Worth)</Typography>
        </ListItem>
        <ListItem
            selected={false}
            onClick={() => handleListItemClick(true)}
        >
            <ListItemIcon>
            <PhoneIphoneIcon/>
            </ListItemIcon>
            <Typography variant='body' style={classes.listItem}>Digital Native</Typography>
        </ListItem>
        <ListItem
            selected={false}
            onClick={() => handleListItemClick(true)}
        >
            <ListItemIcon>
            <PhoneIcon />
            </ListItemIcon>
            <Typography variant='body' style={classes.listItem}>{data['cdp-phoneNumber']}</Typography>
        </ListItem>
        <ListItem
            selected={false}
            onClick={() => handleListItemClick(false)}
        >
            <ListItemIcon>
            <DraftsIcon />
            </ListItemIcon>
            <Typography variant='body' style={classes.listItem}>{data['cdp-email']}</Typography>
        </ListItem>
        </List>
        <Typography variant="h6" style={classes.headings}>Key Data Points: </Typography>
        <div style={classes.chipContainer}>
            <Chip icon={<HouseIcon style={{color: 'black'}}/>} label="Home Loan Interest" style={{margin: '5px'}}/>
            <Chip icon={<NoEncryptionIcon style={{color: 'black'}}/>} label="No 2FA" style={{margin: '5px'}} />
            <Chip icon={<CloseIcon style={{color: 'black'}}/>} label="Unsuccessful Private Banking Application" style={{margin: '5px'}}/>
        </div>
    </div>
  );
}
