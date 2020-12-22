import React, { Component } from "react";
import AnimalDetail from "./AnimalDetails";

const withDonationColor = (WrappedComponent) => {
  return class extends Component {
    state = { donationColor: "black" };
    componentDidMount() {
      const donationAmount = this.props.detail.donation;
      const donationColor = donationAmount > 50 ? "green" : "red";
      this.setState({ donationColor });
    }

    render() {
      return (
        <WrappedComponent
          {...this.props}
          donationColor={this.state.donationColor}
        />
      );
    }
  };
};
const WrapperComponent = withDonationColor(AnimalDetail);

export default WrapperComponent;
