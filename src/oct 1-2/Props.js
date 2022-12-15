import React, { Fragment } from "react";
class Props extends React.Component{
    render(){
        return(
            <Fragment>          
          <div className="card">
            <img
              src={this.props.pic}
              class="card-img-top"
              alt=""
            />
            <div class="card-body">
              <h5 class="card-title">{this.props.title}</h5>
              <p class="card-text">{this.props.text}
              </p>
              <a href="#" class={this.props.bname}>{this.props.button}
              </a>
              <button className="btn btn-primary">{this.props.ban}</button>
            </div>
            </div>
            </Fragment>
        )
    }

}
export default Props;