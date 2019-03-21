import React, { Component } from 'react';

import api from './lib/podcast_data';
import Player from './Player';
import Moment from 'react-moment';
import withStyles from '@material-ui/core/styles/withStyles';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import SubButton from './SubButton';

const styles = theme => ({
  hLine: {
    width: '100%',
    textAlign: 'left',
    borderBottom: '1px solid #000',
    lineHeight: '0.1em',
    fontWeight: '400',
    margin: '40px 0 30px'
  },
  hLineSpan: {
    padding: '0 10px',
    background: '#EEEEEE'
  },
  hostName: {
    color: 'rgb(33,35,37)',
    fontWeight: 500,
    fontSize: '15px'
  }
});
class PodcastContainer extends Component {
  renderButtons = () => {
    return api.media.map((item, idx) => {
      return <SubButton {...item} key={idx} />;
    });
  };
  episodeRender = () => {
    if (this.props.episodes === null) {
      return;
    }
    const { episodes } = this.props;
    return episodes.map(item => {
      const s1 = item.audio_url.split('/');
      const s2 = s1[s1.length - 1].split('.')[0];
      const day = new Date(item.published_at).getDate();
      const duration = item.duration * 1000;
      let ep;
      if (item.id === 949981) {
        ep = 0;
      } else {
        ep = item.episode_number;
      }
      return (
        <Card key={item.id} className="mb-4">
          <CardHeader title={<Typography>{item.title}</Typography>} />

          <CardContent className="px-4">
            <div className="mb-1">
              <Player playerUrl={s2} />
            </div>

            <div>
              <div className="mb-2 p-0">
                <small className="text-black-50">
                  Podcast Ep.{ep} {` // `} Published on{' '}
                  <Moment format="LL">{item.published_at}</Moment> {` // `}{' '}
                  Length <Moment format="mm:ss">{duration}</Moment>
                </small>
              </div>
              <CardHeader
                title={
                  <Typography paragraph variant="h3">
                    Passive Income Through Multifamily Real Estate Podcast
                  </Typography>
                }
              />

              <p
                style={{
                  color: '#212325'
                }}
                className="mt-4"
              >
                SUMMARY: <br />
                {item.summary}
              </p>
              <p
                style={{
                  color: '#212325'
                }}
                className="pt-0 mt-0"
              >
                FEATURING: <br />
                {item.artist}
              </p>
            </div>
          </CardContent>
        </Card>
      );
    });
  };
  render() {
    const colorBg = { one: '#fafafa', two: '#eee', three: '#dee2e6' };
    const { classes } = this.props;
    return (
      <section style={{ background: `${colorBg.two}` }}>
        <div
          style={{
            minHeight: '100vh'
          }}
          id="podcastContainer"
        >
          <div style={{ padding: 0 }} className="container">
            <Card className="my-4">
              <div className="stylish-color-dark row p-2 d-flex justify-content-center align-items-center flex-wrap">
                <div style={{ borderRadius: '4px' }} className="col-md-3 p-4">
                  <img
                    src="https://i.imgur.com/TxnoBIK.jpg"
                    height="260"
                    width="260"
                    className="img-fluid"
                    alt="avatar-1"
                  />
                </div>
                <div className="col-md-9">
                  <h1 className="font-weight-bold text-white">
                    Limitless Estates Podcast
                  </h1>
                  <p
                    style={{
                      opacity: '0.97',
                      color: '#616161',
                      fontSize: '18px'
                    }}
                    className="text-white"
                  >
                    {api.description}
                  </p>
                </div>
              </div>
            </Card>
            <div className="row d-flex p-0 my-3 justify-content-between align-items-start">
              <div className="pl-0 pr-3 col-md-3">
                <div className="mb-4">
                  <Card>
                    <CardContent>
                      <div className="p-2">{this.renderButtons()}</div>
                    </CardContent>
                  </Card>
                </div>
                <div>
                  <div className="my-4">
                    <p className={classes.hLine}>
                      <span className={classes.hLineSpan}>Your Hosts</span>
                    </p>
                  </div>

                  <div className="mb-3">
                    <Card>
                      <CardContent className="p-3">
                        <div className="avatar d-flex justify-content-start align-items-center ">
                          <img
                            style={{ maxWidth: '44px' }}
                            className="card-img rounded-circle"
                            src="https://i.imgur.com/qC2iaYa.jpg?1"
                            alt="avatar-podcasthost"
                          />
                          <div className="ml-3">
                            <p className={classes.hostname}>Kyle Mitchell</p>
                            <p
                              style={{ fontSize: '13px' }}
                              className="text-black-50 p-0 m-0"
                            >
                              Managing Parter
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  <div>
                    <Card>
                      <CardContent className="p-3">
                        <div className="avatar d-flex justify-content-start align-items-center ">
                          <img
                            style={{ maxWidth: '44px' }}
                            className="card-img rounded-circle"
                            src="https://i.imgur.com/Lok4G0b.jpg?1"
                            alt="avatar"
                          />
                          <div className="ml-3">
                            <p className={classes.hostname}>
                              Lalita Patipaksiri
                            </p>
                            <p
                              style={{ fontSize: '13px' }}
                              className="text-black-50 p-0 m-0"
                            >
                              Managing Parter
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>

              <div className="pr-0 pl-3 col-md-9">{this.episodeRender()}</div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default withStyles(styles)(PodcastContainer);
