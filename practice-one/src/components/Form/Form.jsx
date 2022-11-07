import React from 'react';
import PropTypes from 'prop-types';
import './form.css';
import Button from '../Button/Button';

class Form extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, subTitle } = this.props;
    return (
      <form action="/" className="form">
        <h2 className="form__title">{title}</h2>
        <p className="form__sub-title">{subTitle}</p>
        <input className="form__input" type="text" placeholder="Enter your email" />
        <Button size="large" style="warning" title="sign up" />
      </form>
    );
  }
}

Form.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
};

export default Form;
