import React, { Component } from "react";
import { connect } from "react-redux";
import { updateTicket } from "../actions/updateTicketAction";

class EditProfileForm extends Component {
  state = {
    logo: "",
    price: "",
    description: ""
  };

  onSubmit = event => {
    event.preventDefault();
    const update = {
      logo: this.state.logo,
      price: this.state.price,
      description: this.state.description
    };

    this.props.updateTicket(this.props.ticketId, update);
  };

  onChange = event => {
    const { value, name } = event.target;
    const update = { [name]: value };

    this.setState(update);
  };

  reset = () => {
    this.setState({ logo: "", price: "", description: "" });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div>
          Logo Url{" "}
          <input
            type="text"
            placeholder="logo"
            name="logo"
            onChange={this.onChange}
            value={this.state.logo}
          />
        </div>
        <div>
          Price{" "}
          <input
            type="text"
            placeholder="price"
            name="price"
            value={this.state.price}
            onChange={this.onChange}
          />
        </div>
        <div>
          Description{" "}
          <input
            type="text"
            placeholder="description"
            name="description"
            value={this.state.description}
            onChange={this.onChange}
          />
        </div>
        <div>
          <button>Edit Ticket</button>
        </div>
        <button onClick={this.reset}>reset</button>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    comments: state.comments,
    tickets: state.tickets,
    events: state.events,
    signedUpUsers: state.signedUpUsers,
    loggedInUser: state.loggedInUser
  };
}

const mapDispatchToProps = {
  updateTicket
};

export default connect(mapStateToProps, mapDispatchToProps)(EditTicketForm);
