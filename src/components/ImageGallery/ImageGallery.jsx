import { Component } from 'react';
import style from './ImageGallery.module.css';
import { getImage } from 'components/servises/getImage';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { ColorRing } from 'react-loader-spinner';
import Button from 'components/Button/Button';
import PropTypes from 'prop-types';

export default class ImageGallery extends Component {
  state = {
    imageList: [],
    isLoadng: false,
    page: 1,
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchImage !== this.props.searchImage) {
      this.setState({ isLoadng: true });
      getImage(this.props.searchImage)
        .then(response => response.json())
        .then(imageList => {
          this.setState({ imageList: imageList.hits });
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => {
          this.setState({ isLoadng: false });
        });
    }
  }

  onSubmitLoadMore = e => {
    e.preventDefault();
    getImage(this.props.searchImage, this.state.page + 1)
      .then(response => response.json())
      .then(imageList => {
        this.setState({
          imageList: [...this.state.imageList, ...imageList.hits],
          page: this.state.page + 1,
        });
      })
      .finally(() => {
        this.setState({ isLoadng: false });
      });
  };

  render() {
    const { imageList, isLoadng } = this.state;

    return (
      <>
        {isLoadng && <ColorRing />}
        <ul className={style.imageGallery}>
          {imageList.map(image => {
            return (
              <ImageGalleryItem
                toggleModal={this.toggleModal}
                image={image}
                key={image.id}
              />
            );
          })}
          {imageList.length > 0 && <Button submit={this.onSubmitLoadMore} />}
        </ul>
      </>
    );
  }
}

ImageGallery.propTypes = {
  searchImage: PropTypes.string,
};
