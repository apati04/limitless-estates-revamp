import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Truncate from 'react-truncate';
class ReadMore extends Component {
    state = {
        expanded: false,
        truncated: false
    };
    handleTruncate = truncated => {
        if (this.state.truncated !== truncated) {
            this.setState({ truncated });
        }
    };
    toggleLines = event => {
        event.preventDefault();
        this.setState({
            expanded: !this.state.expanded
        });
    };
    render() {
        const { children, more, less, lines } = this.props;
        const { expanded, truncated } = this.state;
        return (
            <>
                <Truncate
                    lines={!expanded && lines}
                    ellipsis={
                        <span style={{ paddingLeft: '10px' }}>
                            <a
                                href='#'
                                style={{
                                    color: '#3b5998',
                                    textTransform: 'uppercase'
                                }}
                                onClick={this.toggleLines}
                            >
                                {more}
                            </a>
                        </span>
                    }
                    onTruncate={this.handleTruncate}
                >
                    {children}
                </Truncate>
                {!truncated && expanded && (
                    <span style={{ paddingLeft: '10px' }}>
                        <a
                            href='#'
                            style={{
                                background: 'transparent',
                                color: '#3b5998',
                                textTransform: 'uppercase'
                            }}
                            onClick={this.toggleLines}
                        >
                            {less}
                        </a>
                    </span>
                )}
            </>
        );
    }
}

ReadMore.defaultProps = {
    lines: 3,
    more: 'Read more',
    less: 'Show less'
};
ReadMore.propTypes = {
    children: PropTypes.node.isRequired,
    lines: PropTypes.number,
    less: PropTypes.string,
    more: PropTypes.string
};

export default ReadMore;
