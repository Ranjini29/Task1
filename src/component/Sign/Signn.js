import React, { Component } from 'react';

export class Signn extends Component {
  render() {
    return (
      <div className="cointainer">
        <div class="border">
      <div class="mobile-number-login__whiteBox">
        <div class="mobile-number-login__headSec">
            <h2>Welcome to Tata CLiQ</h2>
            <p>Please enter your mobile number</p>
            </div>
            <div class="mobile-number-login__formSec">
        <div class="mobile-number-login__feildSec">
            <div class="mobile-number-login__form_outer mobile-number-login__countryCode">
            <div class="mobile-number-login__dateSlct">+91</div>
        <input type="text"  maxlength="10" class="mobile-number-login__form_control" name="mobileNumber" placeholder="Enter Mobile Number" autocomplete="off"  value=""></input>
            <label for="mobileNumber">Mobile Number</label></div>
            <div class="mobile-number-login__formInfoTxt">
                <button type="button"  class="mobile-number-login__btnLink">Use Email Address</button>
                </div>
        <div class="mobile-number-login__signNwTxtInfo">
            <div class="mobile-number-login__signUpInfoSec"></div>
            <div class="mobile-number-login__signUpTxt">By continuing, you agree to our <a href="/terms-of-use" class="mobile-number-login__btnLink">Terms of Use</a> and <a href="/privacy-policy" class="mobile-number-login__btnLink">Privacy Policy</a></div></div>
            <button type="button" disabled="" class="mobile-number-login__btnPrimary" >Continue</button>
            </div>
            </div>
          </div>
          </div>
          </div>
    )
  }
}
export default Signn