import React from 'react';
import { withTaskContext } from '@twilio/flex-ui';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ExtendedTable from '../Common/ExtendedTable';
import MortgageCalculator from '../Common/MortgageCalculator';
import SegmentChips from '../Common/SegmentChips';
import HTimeline from '../Common/HTimeline';
import HouseIcon from '@material-ui/icons/House';


function Mortgage(props) {
  const { data } = props;
  const accentColor = data['cdp-accent']

  const classes = {
    root: {
      flexGrow: 1,
      padding: '10px 0px 0px 30px',
      backgroundColor: data['cdp-panelBackGroundColor'],
    },
    banner: {
      textAlign: 'start',
      minHeight: '10vh',
      color: '#0063e0',
      borderRadius: '15px',
      padding: '5px',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      fontSize: '6rem',
    },
    bannerText: {
      display: 'flex',
      flexDirection: 'column',
      color: accentColor,
      padding: '10px',
    },
    timelineContainer: {
      height: '40vh',
      borderRadius: '15px',
      backgroundColor: 'white',
      overflow: 'hidden',
    },
    segmentChips: {
      height: '40vh',
      borderRadius: '15px',
      marginLeft: '30px',
    },
    table: {
      textAlign: 'center',
      minHeight: '36vh',
      borderRadius: '15px',
    },
    panel: {
      justifyContent: 'center',
      height: '50vh',
      alignItems: 'center',
      display: 'flex',
      color: accentColor,
      overflow: 'scroll',
      marginLeft: '30px',
      borderRadius: '15px',
      paddingTop: '60px',
    },
  };

  return (
    <div style={classes.root}>
        <Grid container direction='row' xs={12}>
            <Grid container item direction='column' spacing={2} xs={8}>
                    <Grid item >
                        <Paper style={classes.banner}>
                          <span style={classes.bannerText}>
                            <Typography variant='h4' >Home Loan - Existing Customer</Typography>
                            <Typography variant='h6'>New lending opportunity</Typography>
                          </span>
                          <HouseIcon fontSize="inherit"  />
                        </Paper>
                    </Grid>
                    <Grid item >
                        <Paper style={classes.table}>
                            <ExtendedTable data={data}/>
                        </Paper>
                    </Grid>
                    <Grid item >
                        <div style={classes.timelineContainer}>
                           <HTimeline data={data} />
                        </div>
                    </Grid>
            </Grid>
            <Grid container item direction='column' spacing={2} xs={4}>
                <Grid item>
                    <Paper style={classes.panel}>
                      <MortgageCalculator data={data}/>
                    </Paper>       
                </Grid>
                <Grid item>
                    <Paper style={classes.segmentChips}>
                      <SegmentChips data={data} />
                    </Paper>       
                </Grid>
            </Grid>
        </Grid>
    </div>
  );
}

export default withTaskContext(Mortgage)