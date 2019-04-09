// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import classNames from 'classnames';
// import withStyles from '@material-ui/core/styles/withStyles';
// import Grid from '@material-ui/core/Grid';
// import Button from 'components/CustomButtons/Button.js';
// import Parallax from '../Layouts/Parallax';

// import Typography from '@material-ui/core/Typography';
// import ReactHtmlParser from 'react-html-parser';
// import AboutEvent from './Meetups/AboutEvent';
// import EventMap from './modules/EventMap';
// import placeholderImg from './placeholder.jpg';

// import UpcomingEvents from './Meetups/UpcomingEvents/UpcomingEvents';

// import axios from 'axios';

// const styles = theme => ({
//   ...theme.cardStyles,
//   ...theme.landingStyles,
//   root: {
//     flexGrow: 1
//   },
//   appContainer: {
//     flex: 1
//   },
//   fontStyles: {
//     color: 'white'
//   },
//   mobileContainer: {
//     [theme.breakpoints.down('sm')]: {
//       margin: 0,
//       padding: '0 8px',
//       maxWidth: 'unset'
//     }
//   },
//   imageStyle: {
//     borderRadius: '24px',
//     padding: '8px',
//     width: '100%'
//   },
//   scheduleText: {
//     color: 'rgba(0,0,0,0.8)'
//   }
// });

// class CerritosPage extends Component {
//   state = {
//     isFetching: true,
//     isComplete: false,
//     eventList: null,
//     eventListLength: 0,
//     eventObject: null,
//     parsedSchedule: ''
//   };
//   componentDidMount() {
//     axios.get('/events/meetups/cerritos').then(({ data }) => {
//       let parsedSchedule = ReactHtmlParser(data.results[0].description);
//       this.setState({
//         isFetching: false,
//         isComplete: true,
//         eventList: data.results,
//         eventListLength: data.resultslength,
//         eventObject: data.results[0],
//         parsedSchedule
//       });
//     });
//   }
//   render() {
//     const { classes } = this.props;
//     return (
//       <React.Fragment>
//         {this.state.isComplete && !this.state.isFetching ? (
//           <React.Fragment>
//             <Parallax filter image={placeholderImg}>
//               <div className={classNames(classes.container, 'main-content')}>
//                 <Grid
//                   container
//                   justify="flex-start"
//                   spacing={32}
//                   alignItems="center"
//                   className={classes.container}
//                 >
//                   <Grid item xs={12} sm={12} md={8}>
//                     <Typography
//                       variant="h1"
//                       paragraph
//                       className={classes.title}
//                     >
//                       Cerritos Meetup page
//                     </Typography>

//                     <Typography
//                       paragraph
//                       variant="body1"
//                       className={classes.fontStyles}
//                     >
//                       Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                       Sed tempus, turpis vestibulum pulvinar ultrices, ante orci
//                       convallis enim, vel finibus ipsum urna vitae orci.{' '}
//                     </Typography>

//                     <Button size="large" variant="contained" color="primary">
//                       See signup
//                     </Button>
//                   </Grid>
//                 </Grid>
//               </div>
//             </Parallax>
//             <div className={classNames(classes.mobileContainer, classes.main)}>
//               <div
//                 className={classNames(
//                   classes.container,
//                   classes.mobileContainer,
//                   'main-content'
//                 )}
//               >
//                 <AboutEvent />

//                 <a href="/auth/meetup">TEST LINK FOR SIGN UP</a>
//                 <hr className="hr-text" data-content="Meetup Schedule" />
//                 <Grid container justify="space-between" spacing={32}>
//                   <Grid item xs={12} sm={6}>
//                     <Typography
//                       variant="h6"
//                       align="left"
//                       className={classes.scheduleText}
//                     >
//                       {this.state.parsedSchedule}
//                     </Typography>
//                   </Grid>
//                   <Grid item xs={12} sm={6}>
//                     <img
//                       src="/images/600.jpg"
//                       alt="meetup"
//                       title="meetup"
//                       className={classes.imageStyle}
//                     />
//                   </Grid>
//                 </Grid>

//                 <UpcomingEvents
//                   eventList={this.state.eventList}
//                   hosts={this.state.eventObject.event_hosts}
//                 />
//                 <EventMap meetupLocation={this.state.eventObject.venue} />
//               </div>
//             </div>
//           </React.Fragment>
//         ) : (
//           <div>Loading...</div>
//         )}
//       </React.Fragment>
//     );
//   }
// }

// CerritosPage.propTypes = {
//   classes: PropTypes.object.isRequired
// };

// export default withStyles(styles)(CerritosPage);

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  root: {
    flexGrow: 1
  }
});

const CerritosPage = props => {
  const { classes } = props;

  return <div className={classes.root}>Cerritos</div>;
};

CerritosPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CerritosPage);
