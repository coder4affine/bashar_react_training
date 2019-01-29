import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

export default class index extends Component {
  state = {};

  static propTypes = {
    children: PropTypes.element.isRequired,
    open: PropTypes.bool.isRequired,
    closeModal: PropTypes.func.isRequired,
  };

  renderModal = () => {
    if (!this.props.open) return null;
    const id = 'modal';
    let domNode = document.querySelector(`#${id}`);
    if (!domNode) {
      domNode = document.createElement('div');
      domNode.setAttribute('id', id);

      domNode.setAttribute('key', '1');
      document.body.appendChild(domNode);
    }
    return ReactDOM.createPortal(
      <div
        style={{
          position: 'absolute',
          padding: 10,
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 100,
        }}
      >
        <div style={{ display: 'flex', flex: 1, flexDirection: 'row', alignItems: 'flex-end' }}>
          <input type="button" onClick={this.props.closeModal} value="Close" />
        </div>
        <div>{this.props.children}</div>
      </div>,
      domNode,
    );
  };

  render() {
    return this.renderModal();
  }
}
