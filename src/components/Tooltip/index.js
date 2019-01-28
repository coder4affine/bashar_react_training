import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class index extends Component {
  state = {
    // active: false,
  };

  constructor(props) {
    super(props);
    this.sourceRef = React.createRef();
    const id = 'tooptip';
    this.domNode = document.querySelector(`#${id}`);
    if (!this.domNode) {
      this.domNode = document.createElement('div');
      this.domNode.setAttribute('id', id);
      document.body.appendChild(this.domNode);
    }
  }

  showTooltip = () => {
    this.setState({ active: true });
  };

  hideTooltip = () => {
    this.setState({ active: false });
  };

  renderTootip = () => {
    if (!this.state.active) return null;
    const { top, left, width } = this.sourceRef.current.getBoundingClientRect();
    const tooltip = {
      position: 'absolute',
      bottom: window.innerHeight - top + 8 - window.scrollY,
      left: left + width / 2 + window.scrollX,
    };
    return ReactDOM.createPortal(
      <div style={tooltip}>
        <div
          role="tooltip"
          style={{
            position: 'relative',
            left: '-50%',
            padding: '8px 16px',
            borderRadius: 4,
            background: '#424242',
            color: 'white',
          }}
        >
          {this.props.text}
          <span
            style={{
              position: 'absolute',
              bottom: -10,
              left: 'calc(50% - 5px',
              borderWidth: 5,
              borderStyle: 'solid',
              borderColor: '#424242 transparent transparent transparent',
            }}
          />
        </div>
      </div>,
      this.domNode,
    );
  };

  render() {
    const source = (
      <span
        ref={this.sourceRef}
        tabIndex="0"
        role="button"
        onMouseEnter={this.showTooltip}
        onMouseLeave={this.hideTooltip}
        onFocus={this.showTooltip}
        onBlur={this.hideTooltip}
      >
        {this.props.children}
      </span>
    );
    return [source, this.renderTootip()];
  }
}

index.propTypes = {
  children: PropTypes.element.isRequired,
  text: PropTypes.string.isRequired,
};

export default index;
