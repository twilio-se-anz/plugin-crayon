import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import { Actions } from '@twilio/flex-ui'


export default function HelpfulArticlesTable(props) {
  const { data } = props;
  const accentColor = data['cdp-accent']

  const handleListItemClick = (call) => {
    if(call === true){
        Actions.invokeAction("StartOutboundCall", {destination: data.general.phoneNumber});
    }   
  };

const classes = {
    root: {
        width: '100%',
    },
    icons: {
        color: accentColor,
    },
    listItemText: {
        paddingLeft: '40px',
        textDecoration: 'underline',
        color: 'blue',
    },
    listItem: {
        paddingTop: '25px',
    },
}

  return (
    <div style={classes.root}>
      <List aria-label="main mailbox folders">
        <ListItem
          style={classes.listItem}
        >
          <ListItemText style={classes.listItemText} primary="Various Types of Home Loan Accounts" />
          <Typography variant='body'>Likely</Typography>
        </ListItem>
        <ListItem
          selected={false}
          style={classes.listItem}
        >
          <ListItemText style={classes.listItemText} primary="Helping a customer reset their 2FA on the phone" />
          <Typography variant='body'>Likely</Typography>
        </ListItem>
        <ListItem
          selected={false}
          style={classes.listItem}
        >
          <ListItemText style={classes.listItemText} primary="Information on Offset Accounts" />
          <Typography variant='body'>Unlikely</Typography>
        </ListItem>
      </List>
    </div>
  );
}
