import React,{Fragment,Component} from 'react'
export default class Propsflex extends Component {
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
            </div>
            </Fragment>
      </div>
    )
  }
}
