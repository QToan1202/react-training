import React from 'react';
import PropTypes from 'prop-types';
import './form.css';

class Form extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { action, method, children } = this.props;
    return (
      <form action={action} method={method} className="form">
        {children}
      </form>
    );
  }
}

Form.propTypes = {
  action: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired,
  children: PropTypes.any,
};

export default Form;
