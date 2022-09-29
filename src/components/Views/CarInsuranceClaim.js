import React from 'react';
import { withTaskContext } from '@twilio/flex-ui';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import BasicTable from '../Common/BasicTable';
import Map from '../Common/Map';

function CarInsuranceClaim(props) {
  const { data } = props;
  const accentColor = data['cdp-accent']

  const classes = {
    root: {
      flexGrow: 1,
      paddingTop: '50px',
      paddingBottom: '50px',
      paddingLeft: '50px',
      backgroundColor: accentColor,
    },
    bannerUpper: {
      textAlign: 'start',
      color: 'black',
      backgroundColor: 'white',
      maxWidth: '27%',
      paddingLeft: '10px',
    },
    bannerLower: {
      textAlign: 'start',
      paddingTop: '10px',
      color: 'black',
      backgroundColor: 'white',
      maxWidth: '74%',
      paddingLeft: '10px',
    },
    map: {
      height: '35vh',
      marginBottom: '20px',
      overflow: 'hidden',
      borderRadius: '20px',
      marginRight: '25px',
    },
    table: {
      textAlign: 'center',
      minHeight: '20vh',
      marginBottom: '50px',
      marginTop: '60px',
      borderRadius: '30px',
    },
    profile: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '20vh',
      marginBottom: '50px',
      marginTop: '60px',
      borderRadius: '30px',
    },
    image: {
      height: '35vh',
      marginBottom: '20px',
      overflow: 'hidden',
      borderRadius: '20px',
      marginLeft: '25px',
    },
  };

  return (
    <div style={classes.root}>
        <Grid container direction='row' spacing={6} xs={12}>
            <Grid container direction='column' xs={12}>
                <Grid container direction='row'>
                    <Grid item xs={12}>
                        <div style={classes.bannerUpper}>
                            <Typography variant='h2' style={{fontWeight: 800}}>New Claim</Typography>
                        </div>
                        <div style={classes.bannerLower}>
                            <Typography variant='h2' style={{fontWeight: 800}}>Vehicle - Cracked Windscreen</Typography>
                        </div>
                    </Grid>
                </Grid>
                <Grid container direction='row'>
                  <Grid item xs={3}>
                    <div style={classes.profile}>
                      <img src={data['cdp-photoURL']} style={{height: '200px', borderRadius: '100px', border: '3px solid white'}}/>
                    </div>
                  </Grid>
                  <Grid item xs={9}>
                    <Paper style={classes.table}>
                      <BasicTable data={data}/>
                    </Paper>
                  </Grid>
                </Grid>
                <Grid container direction='row'>
                  <Grid container direction='column' xs={6}>
                      <Grid item xs={12}>
                          <div style={classes.map}>
                            <Map data={data}/>
                          </div>
                      </Grid>
                    </Grid>
                    <Grid container direction='column' xs={6}>
                      <Grid item xs={12}>
                          <div style={classes.image}>
                            <img src='https://www.bemac.ca/wp-content/uploads/2018/08/blog-windshield-crack-lg.jpg'/>
                          </div>
                      </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </div>
  );
}

export default withTaskContext(CarInsuranceClaim)