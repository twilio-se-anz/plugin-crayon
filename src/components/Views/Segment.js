import React from 'react';
import { withTaskContext } from '@twilio/flex-ui';
import FlexThemeProvider from '../Common/FlexThemeProvider'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import SegmentTable from '../Common/SegmentTable';
import ReasonsTable from '../Common/ReasonsTable';
import HelpfulArticlesTable from '../Common/HelpfulArticlesTable';
import HouseIcon from '@material-ui/icons/House';


function Segment(props) {
  const { data } = props;
  const accentColor = data['cdp-accent']

  const classes = {
    root: {
        flexGrow: 1,
        padding: '30px 0px 30px 30px',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: data['cdp-panelBackGroundColor'],
      },
    table: {
        height: '60vh',
        borderRadius: '5px',
        overflow: 'hidden',
    },
    reasons: {
        height: '38vh',
        borderRadius: '5px',
        overflow: 'hidden',

      },
      helpfulArticles: {
        height: '30vh',
        borderRadius: '5px',
        overflow: 'hidden',
        marginTop: '30px',
      },
      lastAgent: {
        height: '25vh',
        borderRadius: '5px',
        overflow: 'hidden',
        marginTop: '30px',
      },
      cardHeader: {
        backgroundColor: accentColor,
        padding: '5px',
        display: 'flex',
        justifyContent: 'center',
        color: 'white',
        fontWeight: '800',
        overflow: 'hidden',
      },
      customerHeader: {
        textAlign: 'start',
        color: accentColor,
        padding: '25px 20px 5px 20px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        fontSize: '2rem',
      },
      customerHeaderText: {
        display: 'flex',
        flexDirection: 'column',
        paddingLeft: '25px',
      },
      customerHeaderIcon: {
        marginTop: '5px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        borderRadius: '20px',
        width: '40px',
        height: '40px',
        backgroundColor: accentColor,
        color: 'white',
      },
      agentHeader: {
        textAlign: 'start',
        color: accentColor,
        padding: '20px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
      },
      agentHeaderText: {
        display: 'flex',
        flexDirection: 'column',
        paddingLeft: '35px',
      },
      agentHeaderIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        borderRadius: '35px',
        width: '70px',
        height: '70px',
        color: 'white',
        overflow: 'hidden',
      },
      agentBody: {
        display: 'flex',
        flexDirection: 'column',
        paddingLeft: '15px',
        paddingTop: '30px',
      },       
  };

  return (
    
    <div style={classes.root}>
        <FlexThemeProvider>
            <Grid container direction='row' spacing={4} xs={12}>
                <Grid item direction='column' xs={4}>
                    <Grid item>
                        <Paper style={classes.table}>
                            <div style={classes.customerHeader}>
                                <div style={classes.customerHeaderIcon}>
                                    <HouseIcon fontSize="inherit"  />
                                </div>
                                <span style={classes.customerHeaderText}>
                                    <Typography variant='h5' style={{fontWeight: 'bold'}}>{data['cdp-name']}</Typography>
                                    <Typography variant='h6'>{data['cdp-city']}</Typography>
                                </span>
                            </div>
                            <SegmentTable data={data}/>
                        </Paper>      
                    </Grid>
                    <Grid item>
                        <Paper style={classes.lastAgent}>
                            <div style={classes.cardHeader}>
                                <Typography variant='h5'>Last Agent Interaction</Typography>  
                            </div>
                            <div style={classes.agentHeader}>
                                <div style={classes.agentHeaderIcon}>
                                    <img src='https://ca.slack-edge.com/EFUJK1UC8-U036MT4TPV3-8bb1188bf928-512' style={{maxHeight:'70px', maxWidth: '70px'}}/>
                                </div>
                                <span style={classes.agentHeaderText}>
                                    <Typography variant='h6' style={{fontWeight: 'bold'}}>Chris Connolly</Typography>
                                    <Typography variant='body'>Level 2 support admin</Typography>
                                </span>
                            </div>
                            <div style={classes.agentHeaderText}>
                                <Typography variant='body' style={{fontWeight: 'bold', paddingBottom: '5px'}}>{data['cdp-name']} has called 4 times in the last year</Typography>
                                <Typography variant='body'>Last interaction led to a successful case closed</Typography>
                            </div>
                        </Paper>
                    </Grid>
                </Grid>
                <Grid item direction='column' xs={8}>
                    <Grid item>
                        <Paper style={classes.reasons}>
                            <div style={classes.cardHeader}>
                                <Typography variant='h5'>Reasons that {data['cdp-name']} might be calling</Typography>  
                            </div>
                            <ReasonsTable data={data}/>
                        </Paper>      
                    </Grid>
                    <Grid item>
                        <Paper style={classes.helpfulArticles} >
                            <div style={classes.cardHeader}>
                                <Typography variant='h5'>Helpful Articles</Typography>  
                            </div>
                            <HelpfulArticlesTable data={data}/>
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
        </FlexThemeProvider>
    </div>
    
  );
}

export default withTaskContext(Segment)