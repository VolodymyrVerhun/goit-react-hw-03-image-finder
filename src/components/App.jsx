import Searchbar from './Searchbar/Searchbar';
import { Component } from 'react';
import style from './App.module.css';
import ImageGallery from './ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    value: '',
    searchImage: '',
  };
  handleChange = event => {
    this.setState({ value: event.target.value });
  };
  handleSubmit = event => {
    event.preventDefault();
    this.handleSearch(this.state.value);
  };
  handleSearch = searchImage => {
    this.setState({ searchImage });
  };
  render() {
    return (
      <div className={style.app}>
        <Searchbar
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          value={this.state.value}
        />
        <ImageGallery searchImage={this.state.searchImage} />
      </div>
    );
  }
}
