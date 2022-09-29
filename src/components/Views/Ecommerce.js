import React from 'react';
import { withTaskContext } from '@twilio/flex-ui';
import FlexThemeProvider from '../Common/FlexThemeProvider'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ExtendedTable from '../Common/ExtendedTable';
import SuggestedItems from '../Common/SuggestedItems';
import RecentPurchase from '../Common/RecentPurchase';
import OrderSummary from '../Common/OrderSummary';


function Ecommerce(props) {
  const { data } = props;
  const accentColor = data['cdp-accent']
  const imageBaseURL = 'https://images-5674.twil.io/'
  const mostRecentImage = `${imageBaseURL}blocks.jpeg`
  const mostRecentBody = 'This wooden alphabet letters 24 piece blocks set is a great value and perfect activity to encourage letter recognition, hand-eye coordination and imagination skills. Perfect Toddler gift. Encouraging problem solving skills, learning cause and effect, and large and fine motor development.Made from quality wood and finished in beautifully modern coloured paints.'
  const mostRecentTitle = 'Wooden Alphabet Letters- 24 Piece'
  const suggestedImage1 = `${imageBaseURL}ecommerce-inventory1.png`
  const suggestedImage2 = `${imageBaseURL}ecommerce-inventory2.png`
  const suggestedImage3 = `${imageBaseURL}ecommerce-inventory3.jpeg`

  const classes = {
    root: {
        flexGrow: 1,
        margin: '30px 0px 30px 30px',
        alignItems: 'center',
        justifyContent: 'center',
      },
    table: {
        height: '41vh',
        borderRadius: '15px',
        overflow: 'hidden',
    },
    order: {
        height: '41vh',
        borderRadius: '15px',
        overflow: 'hidden',

      },
      suggestions: {
        height: '40vh',
        borderRadius: '15px',
        marginTop: '40px',
        overflow: 'hidden',
      },
      receipt: {
        height: '40vh',
        borderRadius: '15px',
        marginTop: '40px',
        overflow: 'hidden',
      },
      cardHeader: {
        backgroundColor: accentColor,
        display: 'flex',
        justifyContent: 'center',
        color: 'white',
        fontWeight: '800',
        overflow: 'hidden',
      },
  };

  return (
    
    <div style={classes.root}>
        <FlexThemeProvider>
            <Grid container direction='row' spacing={5} xs={12}>
                <Grid item xs={5}>
                    <Paper style={classes.table}>
                        <div style={classes.cardHeader}>
                            <Typography variant='h4'>Customer information</Typography>  
                        </div>
                        <ExtendedTable data={data}/>
                    </Paper>      
                </Grid>
                <Grid item xs={7}>
                    <Paper style={classes.order}>
                        <div style={classes.cardHeader}>
                            <Typography variant='h4'>Most Recent Purchase</Typography>  
                        </div>
                        <RecentPurchase data={data} mostRecentBody={mostRecentBody} mostRecentImage={mostRecentImage} mostRecentTitle={mostRecentTitle} />
                    </Paper>      
                </Grid>
            </Grid>
            <Grid container direction='row' spacing={5} xs={12}>
                <Grid item xs={4}>
                    <Paper style={classes.receipt}>
                        <div style={classes.cardHeader}>
                            <Typography variant='h4'>Order Summary</Typography>  
                        </div>
                        <OrderSummary data={data} />
                    </Paper>
                </Grid>
                <Grid item xs={8}>
                    <Paper style={classes.suggestions} >
                        <div style={classes.cardHeader}>
                            <Typography variant='h4'>Similar Items</Typography>  
                        </div>
                        <SuggestedItems suggestedImage1={suggestedImage1} suggestedImage2={suggestedImage2} suggestedImage3={suggestedImage3} title1={'Jnr Corner Blocks: $18'} title2={'8pc Wooden Animals: $35'} title3={'Animal shapes: $22'}/>
                    </Paper>
                </Grid>
            </Grid>
        </FlexThemeProvider>
    </div>
    
  );
}

export default withTaskContext(Ecommerce)