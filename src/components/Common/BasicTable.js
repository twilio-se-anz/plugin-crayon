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
import { Actions } from '@twilio/flex-ui'


export default function BasicTable(props) {
  const { data } = props;

  const handleListItemClick = (call) => {
    if(call === true){
        Actions.invokeAction("StartOutboundCall", {destination: data['cdp-phoneNumber']});
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
            <PhoneIcon />
          </ListItemIcon>
          <ListItemText primary="Phone Number" />
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
      </List>
    </div>
  );
}
