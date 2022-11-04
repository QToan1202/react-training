import React from "react";
import PropTypes from "prop-types";
import "./productSection.css";
import Button from "../Button/Button";

class ProductSection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { productImg, title, upperTitle, price, description } = this.props;
    return (
      <div className="container">
        <img className="product_image" src={productImg} alt="photo for the header section" />
        <div className="content">
          <h2 className="upper-title">{upperTitle}</h2>
          <h1 className="title">{title}</h1>
          <span style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <p className="price">&#36;{price}</p>
            <Button size="medium" style="warning" />
          </span>
          <p className="description">{description}</p>
        </div>
      </div>
    );
  }
}

ProductSection.propTypes = {
  productImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  upperTitle: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};

export default ProductSection;
