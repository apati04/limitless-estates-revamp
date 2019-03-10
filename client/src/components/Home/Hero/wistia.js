import React, { Component } from 'react';

class Limitless extends Component {
  state = {
    loaded: false
  };
  componentDidMount() {
    this.setState({ loaded: true });
  }
  render() {
    let opac = 0;
    if (this.state.loaded) {
      opac = 1;
    }
    return (
      <div
        className={this.props.wistiaClass}
        style={{ height: '100%', position: 'relative', width: '100%' }}
      >
        <div
          className="wistia_swatch"
          style={{
            height: '100%',
            left: 0,
            opacity: opac,
            overflow: 'hidden',
            position: 'absolute',
            top: 0,
            transition: 'opacity 200ms',
            width: '100%'
          }}
        >
          <img
            src={this.props.wistiaSrc}
            style={{
              filter: 'blur(5px)',
              height: '100%',
              objectFit: 'contain',
              width: '100%'
            }}
            alt=""
          />
        </div>
      </div>
    );
  }
}

export default Limitless;
