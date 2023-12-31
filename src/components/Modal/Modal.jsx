import React, { Component } from 'react';
import style from './Modal.module.css';
import PropTypes from 'prop-types';

export default class Modal extends Component {
  render() {
    const { image, toggleModal } = this.props;

    return (
      <div onClick={toggleModal} className={style.overlay}>
        <div className={style.modal}>
          <img src={image.largeImageURL} alt="" />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  toggleModal: PropTypes.func,
  image: PropTypes.string,
};
