import { Component } from 'react';
import style from './ImageGalleryItem.module.css';
import Modal from 'components/Modal/Modal';

export default class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };
  toggleModal = () => {
    this.setState({ isModalOpen: !this.state.isModalOpen });
  };
  componentDidMount() {
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape') {
        console.log(event.key === 'Escape');
        this.setState({ isModalOpen: false });
      }
    });
  }

  render() {
    const { image } = this.props;

    return (
      <>
        <li onClick={this.toggleModal} className={style.imageGalleryItem}>
          <img
            className={style.imageGalleryItem__image}
            src={image.webformatURL}
            alt={image.tags}
          />
        </li>
        {this.state.isModalOpen && (
          <Modal image={image} toggleModal={this.toggleModal} />
        )}
      </>
    );
  }
}
