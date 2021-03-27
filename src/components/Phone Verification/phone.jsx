import React, { Component } from "react";
import firebase from 'firebase/app';
import { auth } from 'firebase';




export default class PhoneLogin extends Component {
  constructor() {
    super();
    this.state = {
      form: true,
      alert: false,
    };
  }

  onChangeHandler = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  setUpRecaptcha = () => {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        callback: function (response) {
          console.log("Captcha Resolved");
          this.onSignInSubmit();
        },
        
      }
    );
  };

  onSignInSubmit = (e) => {
    e.preventDefault();
    this.setUpRecaptcha();
    let phoneNumber ="+20"+ this.state.mobile;
    console.log(phoneNumber);
    let appVerifier = window.recaptchaVerifier;
    firebase
      .auth()
      .signInWithPhoneNumber(phoneNumber, appVerifier)
      .then(function (confirmationResult) {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        // console.log(confirmationResult);
        console.log("OTP is sent");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  onSubmitOtp = (e) => {
    e.preventDefault();
    let otpInput = this.state.otp;
    let optConfirm = window.confirmationResult;
    // console.log(codee);
    optConfirm
      .confirm(otpInput)
      .then(function (result) {
        // User signed in successfully.
        // console.log("Result" + result.verificationID);
        let user = result.user;
      })
      .catch(function (error) {
        console.log(error);
        alert("Incorrect OTP");
      });
  };

  render() {
    return (
      
        
        <div className="App">
             <div className="container">
                 <div className="row justify-content-center align-items-center ">
                     <div className="col-sm-6 text-left">
                          <h2>Phone verification</h2>
                          <form onSubmit={this.onSignInSubmit}>
                              <div id="recaptcha-container">

                              </div>
                              <div className="form-group">
                                  <label>Phone Number</label>
                                  <input type="number" className="form-control" name="mobile" onChange={this.onChangeHandler}></input>
                              </div>
                              <input type="submit" className="btn btn-primary"/>
                                    
                                
                          </form>
                     </div>
                        <div className="col-sm-6 text-left">
                          <h2>OTP</h2>
                          <form onSubmit={this.onSubmitOtp}>
                              <div >

                              </div>
                              <div className="form-group">
                                  <label>OTP</label>
                                  <input type="number" className="form-control" id="otp"
                                    type="number"
                                    name="otp"
                                    placeholder="OTP"
                                    onChange={this.onChangeHandler}></input>
                              </div>
                              <input type="submit" className="btn btn-primary"/>
                                    
                                
                          </form>
                     </div>
                 </div>
             </div>
          </div>
     
    );
  }
}




// import React, { Component } from 'react';
// import firebase from './firebase';
// import { firebase } from 'firebase/app';

// class Phone extends Component {
//     state={
//         statepronum:""
//     }
//    setupRecaptcha =()=>{
//     window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
//         'size': 'invisible',
//         'callback': (response) => {
         
//           this.onSignInSubmit();
//         }
//       });
//    }
//    getPhoneNumberFromUserInput=(e)=>{
//         let statepronum=e.target.value;
//         console.log(statepronum);
//         this.setState({statepronum})
//    }
//    onSignInSubmit=(e)=>{
//        this.setupRecaptcha();
//         e.preventDefault();
//         const phoneNumber = this.getPhoneNumberFromUserInput();
//         const appVerifier = window.recaptchaVerifier;
//         firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
//             .then((confirmationResult) => {
            
//             window.confirmationResult = confirmationResult;
//             const code = window.prompt("Enter OTP");
//             confirmationResult.confirm(code).then((result) => {
            
//             const user = result.user;
//             console.log("Phone Number is Varified")
         
//             }).catch((error) => {
           
            
//             });
            
//             }).catch((error) => {
            
//             });
    
//    }
//     render() { 
//         return ( 
//             <div className="App">
//                <div className="container">
//                    <div className="row justify-content-center align-items-center ">
//                        <div className="col-sm-6 text-left">
//                             <h2>Phone verification</h2>
//                             <form onSubmit={this.onSignInSubmit}>
//                                 <div id="recaptcha-container">

//                                 </div>
//                                 <div className="form-group">
//                                     <label>Phone Number</label>
//                                     <input type="number" className="form-control"  onChange={this.getPhoneNumberFromUserInput}></input>
//                                 </div>
//                                 <input type="submit" className="btn btn-primary"/>
                                    
                                
//                             </form>
//                        </div>
//                    </div>
//                </div>
//             </div>
//          );
//     }
// }
 
// export default Phone;