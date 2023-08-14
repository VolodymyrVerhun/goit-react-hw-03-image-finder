import { Component } from 'react';
import style from './Button.module.css';
import PropTypes from 'prop-types';

export default class Button extends Component {
  render() {
    const { submit } = this.props;
    return (
      <button onClick={submit} className={style.button}>
        Load more
      </button>
    );
  }
}

Button.propTypes = {
  submit: PropTypes.func,
};
