import React, { Component } from 'react';
import style from './Modal.module.css';

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
