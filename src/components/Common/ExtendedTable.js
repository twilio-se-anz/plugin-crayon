import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import HouseIcon from '@material-ui/icons/House';
import DraftsIcon from '@material-ui/icons/Drafts';
import PhoneIcon from '@material-ui/icons/Phone';
import PersonIcon from '@material-ui/icons/Person';
import Typography from '@material-ui/core/Typography';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import DirectionsSubwayIcon from '@material-ui/icons/DirectionsSubway';
import LanguageIcon from '@material-ui/icons/Language';
import { Actions } from '@twilio/flex-ui'


export default function ExtendedTable(props) {
  const { data } = props;

  const handleListItemClick = (call) => {
    if(call === true){
        Actions.invokeAction("StartOutboundCall", {destination: data.general.phoneNumber});
    }   
  };

  return (
    <div style={{width: '100%'}}>
      <List component="nav" aria-label="main mailbox folders">
        <ListItem
          selected={false}
          onClick={() => handleListItemClick(false)}
        >
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText primary="Customer Name" />
          <Typography variant='h6'>{data['cdp-name']}</Typography>
        </ListItem>
        <Divider />
        <ListItem
          selected={false}
          onClick={() => handleListItemClick(false)}
        >
          <ListItemIcon>
            <HouseIcon />
          </ListItemIcon>
          <ListItemText primary="Street Address" />
          <Typography variant='h6'>{data['cdp-streetAddress']}</Typography>
        </ListItem>
        <Divider />
        <ListItem
          selected={false}
          onClick={() => handleListItemClick(true)}
        >
          <ListItemIcon>
            <DirectionsSubwayIcon />
          </ListItemIcon>
          <ListItemText primary="Suburb" />
          <Typography variant='h6'>{data['cdp-suburb']}</Typography>
        </ListItem>
        <Divider />
        <ListItem
          selected={false}
          onClick={() => handleListItemClick(true)}
        >
          <ListItemIcon>
            <LocationCityIcon />
          </ListItemIcon>
          <ListItemText primary="City" />
          <Typography variant='h6'>{data['cdp-city']}</Typography>
        </ListItem>
        <Divider />
        <ListItem
          selected={false}
          onClick={() => handleListItemClick(true)}
        >
          <ListItemIcon>
            <PhoneIcon />
          </ListItemIcon>
          <ListItemText primary="Phone" />
          <Typography variant='h6'>{data['cdp-phoneNumber']}</Typography>
        </ListItem>
        <Divider />
        <ListItem
          selected={false}
          onClick={() => handleListItemClick(false)}
        >
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary="Email" />
          <Typography variant='h6'>{data['cdp-email']}</Typography>
        </ListItem>
        <Divider />
        <ListItem
          selected={false}
          onClick={() => handleListItemClick(false)}
        >
          <ListItemIcon>
            <LanguageIcon />
          </ListItemIcon>
          <ListItemText primary="Local Availability" />
          <Typography variant='h6'>AVAILABLE</Typography>
        </ListItem>
      </List>
    </div>
  );
}
