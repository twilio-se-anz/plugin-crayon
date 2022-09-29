import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HouseIcon from '@material-ui/icons/House';
import DraftsIcon from '@material-ui/icons/Drafts';
import Typography from '@material-ui/core/Typography';
import HelpIcon from '@material-ui/icons/Help';
import { Actions } from '@twilio/flex-ui'


export default function ReasonsTable(props) {
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
    },
    listItem: {
        paddingTop: '25px',
    },
    moreText: {
        display: 'flex',
        textDecoration: 'underline',
        justifyContent: 'flex-end',
        padding: '20px',
    },
}

  return (
    <div style={classes.root}>
      <List aria-label="main mailbox folders">
        <ListItem
          selected={false}
          onClick={() => handleListItemClick(false)}
          style={classes.listItem}
        >
          <ListItemIcon>
            <HouseIcon style={classes.icons}/>
          </ListItemIcon>
          <ListItemText style={classes.listItemText} primary="Recently used the Refinance Home Loan Calculator" />
          <Typography variant='h6'>2 days ago</Typography>
        </ListItem>
        <ListItem
          selected={false}
          onClick={() => handleListItemClick(true)}
          style={classes.listItem}
        >
          <ListItemIcon>
            <HelpIcon style={classes.icons}/>
          </ListItemIcon>
          <ListItemText style={classes.listItemText} primary="Viewed article: How to use Authenticator App" />
          <Typography variant='h6'>2 days ago</Typography>
        </ListItem>
        <ListItem
          selected={false}
          onClick={() => handleListItemClick(true)}
          style={classes.listItem}
        >
          <ListItemIcon>
            <HelpIcon style={classes.icons}/>
          </ListItemIcon>
          <ListItemText style={classes.listItemText} primary="Viewed article: Login to Mobile Banking" />
          <Typography variant='h6'>2 days ago</Typography>
        </ListItem>
        <ListItem
          selected={false}
          onClick={() => handleListItemClick(false)}
          style={classes.listItem}
        >
          <ListItemIcon>
            <DraftsIcon style={classes.icons}/>
          </ListItemIcon>
          <ListItemText style={classes.listItemText} primary="Engaged with refinance offer 2.89% email" />
          <Typography variant='h6'>4 days ago</Typography>
        </ListItem>
      </List>
      <span style={classes.moreText}>
        <Typography variant='body' >View more interactions </Typography>
      </span>
    </div>
  );
}
