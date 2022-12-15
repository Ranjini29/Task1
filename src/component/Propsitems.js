import React, { Component,Fragment } from 'react'
export default class Propsitems extends Component {
  render() {
    return (
      <div>
        <Fragment> 
        
          <div className="card">
            <img
              src={this.props.pic}
              class="card-img-top"
              alt=""
            />
            <div class="card-body">
              <h3 class="card-title">{this.props.title}</h3>
              <p class="card-text">{this.props.text}
              </p>
              <a href="#" class={this.props.bname}>{this.props.button}
              </a>
              <button className="btn btn-primary">{this.props.ban}</button>
            </div>
            </div>
            </Fragment>
      </div>
    )
  }
}
