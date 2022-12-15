import React, { Fragment, Component } from "react";
import Propsflex from "./Propsflex";
import "../component/style.css";
export default class Flex extends Component {
  render() {
    return (
      <Fragment>
        <div className="container">
          <div class="quick_row">
            <div class="quick_aa">
              <div className="row">
                <div className="col-1">
                  <Propsflex pic="https://assets.tatacliq.com/medias/sys_master/images/45057916272670.jpg" />
                </div>
                <div className="col-1">
                  <Propsflex pic="https://assets.tatacliq.com/medias/sys_master/images/45057916207134.jpg" />
                </div>
                <div className="col-1">
                  <Propsflex pic="https://assets.tatacliq.com/medias/sys_master/images/45057916338206.jpg" />
                </div>
                <div className="col-1">
                  <Propsflex pic="https://assets.tatacliq.com/medias/sys_master/images/45057916403742.jpg" />
                </div>
                <div className="col-1">
                  <Propsflex pic="https://assets.tatacliq.com/medias/sys_master/images/45057916469278.jpg" />
                </div>
                <div className="col-1">
                  <Propsflex pic="https://assets.tatacliq.com/medias/sys_master/images/45057916534814.jpg" />
                </div>
                <div className="col-1">
                  <Propsflex pic="https://assets.tatacliq.com/medias/sys_master/images/45057916600350.jpg" />
                </div>
                <div className="col-1">
                  <Propsflex pic="https://assets.tatacliq.com/medias/sys_master/images/45057916665886.jpg" />
                </div>
                <div className="col-1">
                  <Propsflex pic="https://assets.tatacliq.com/medias/sys_master/images/45057916731422.jpg" />
                </div>
                <div className="col-1">
                  <Propsflex pic="https://assets.tatacliq.com/medias/sys_master/images/45057916796958.jpg" />
                </div>
                <div className="col-1">
                  <Propsflex pic="https://assets.tatacliq.com/medias/sys_master/images/45100389138462.jpg" />
                </div>
              </div>
              <div class="Banner_aa">
                <div classname="row">
                  <div className="col-12">
                    <Propsflex pic="https://assets.tatacliq.com/medias/sys_master/images/45057503789086.jpg" />
                  </div>
                </div>
              </div>
              <div class="Banner_bb">
                <div className="row">
                  <div className="col-6">
                    <Propsflex pic="https://assets.tatacliq.com/medias/sys_master/images/45076331692062.jpg" />
                  </div>
                  <div className="col-6">
                    <Propsflex pic="https://assets.tatacliq.com/medias/sys_master/images/45076331757598.jpg" />
                  </div>
                </div>
              </div>
            </div>
            <div class="Banner_cc">
              <div className="row">
                <div className="col-6">
                  <Propsflex pic="https://assets.tatacliq.com/medias/sys_master/images/45076331823134.jpg" />
                </div>
                <div className="col-6">
                  <Propsflex pic="https://assets.tatacliq.com/medias/sys_master/images/45076331888670.jpg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
