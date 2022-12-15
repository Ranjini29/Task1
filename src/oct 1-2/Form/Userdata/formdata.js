import React from "react";
import SimpleReactValidator from "simple-react-validator";
class Userdata extends React.Component {
  constructor(props) {
    super(props);
    this.validator = new SimpleReactValidator();
    this.state = {
      objectHandle: {
        name: "",
        dob: "",
        email: "",
        password: "",
        address: "",
      },
    };
  }

  handleSubmit = () => {
    if (this.validator.allValid()) {
      this.props.getUserform(this.state.objectHandle);
      alert("Your application is filled correctly")
      
    } else {
      this.validator.showMessages();
      this.forceUpdate();
    }
  };

  handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      objectHandle: {
        ...this.state.objectHandle,
        [name]: value
        ,
      },
    });
  };
  render() {
    return (
      <div className="container">
        <div class="border-10">
          <div className="row">
            <div className="col-lg-6 col-sm-6">
              <h3>UserForm</h3>
              <div className="row">
                <div className="col-sm-6">
                  <input
                    type="text"
                    name="name"
                    value={this.state.objectHandle.value1}
                    onChange={this.handleInput}
                    className="form-control"
                    placeholder="name"
                  ></input>
                  {this.validator.message(
                    "name",
                    this.state.objectHandle.name,
                    "required|alpha|min:6|max:10"
                  )}
                </div>
                <div className="col-sm-6">
                  <input
                    type="date"
                    name="dob"
                    value={this.state.objectHandle.value2}
                    onChange={this.handleInput}
                    className="form-control"
                    placeholder="dob"
                  ></input>
                  {this.validator.message(
                    "dob",
                    this.state.objectHandle.dob,
                    "required|number"
                  )}
                </div>
                <div className="col-6">
                  <input
                    type="e-mail"
                    name="email"
                    value={this.state.objectHandle.value3}
                    onChange={this.handleInput}
                    className="form-control"
                    placeholder="e-mail"
                  ></input>
                  {this.validator.message(
                    "email",
                    this.state.objectHandle.email,
                    "required|email"
                  )}
                </div>
                <div className="col-6">
                  <input
                    type="password"
                    name="password"
                    value={this.state.objectHandle.value4}
                    onChange={this.handleInput}
                    className="form-control"
                    placeholder="password"
                  ></input>
                  {this.validator.message(
                    "password",
                    this.state.objectHandle.password,
                    "required|number"
                  )}
                </div>
                <div className="col-12">
                  <input
                    type="text"
                    name="address"
                    value={this.state.objectHandle.value5}
                    onChange={this.handleInput}
                    className="form-control"
                    placeholder="address"
                  ></input>
                  {this.validator.message(
                    "address",
                    this.state.objectHandle.address,
                    "required|alpha"
                  )}
                </div>
                <div className="col-2">
                  <button
                    onClick={this.handleSubmit}
                    className="btn btn-primary"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Userdata;
