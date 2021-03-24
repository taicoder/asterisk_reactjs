import React, { useState, useEffect } from "react";
import Header from "../template/Header";
import Footer from "../template/Footer";
import myconfig from "../api/config";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useCookies } from "react-cookie";
import { Invitation,
  Inviter,
  InviterOptions,
  Referral,
  Registerer,
  RegistererOptions,
  Session,
  SessionState,
  UserAgent,
  UserAgentOptions,
  InvitationAcceptOptions,
  Web } from 'sip.js'

export default function Login() {
  const [users, setUser] = useState([]);
  const [cookies] = useCookies(["user"]);
  if (cookies.user) window.location.href = "/account";
  const host="192.168.1.203";
  const handleLogin = () => {
    alert('sss');
		// axios
		// 	.post(myconfig.urlapi + `/admin/login`, {
		// 		username,
		// 		password
		// 	})
		// 	.then(function(response) {
		// 		if (response.data.success === 'OK') {
		// 			setCookie('token', response.data.token);
		// 			setCookie('user', response.data.results);
		// 			setCookie('config_system', response.data.config_system);
		// 			window.location.href = '/consult';
		// 		} else {
		// 			ShowMySnackBar(response.data.results, "error", 0);
		// 		}
		// 	})
		// 	.catch(function(error) {
		// 		ShowMySnackBar('catch login '+error+'', "error", 0);
		// 	});
	}; 


  const server = "wss://"+host+":8089/ws"

 const _plugin = () =>{
   
try{
    // const uri = UserAgent.makeURI("sip:1001@"+host+":5060");
    // const transportOptions = {
    //   server : "wss://"+host+":8089/ws"
    // };
    // const userAgentOptions = {
    //   authorizationPassword: '123456',
    //   authorizationUsername: '1001',
    //   transportOptions,
    //   uri
    // };
   
    // const userAgent = new UserAgent(userAgentOptions);

    // const registerer = new Registerer(userAgent);
    // userAgent.start().then(() => {
    //   registerer.register();
    // });
    // userAgent.start().then(() => {
    //   const target = UserAgent.makeURI("sip:1005@192.168.1.123:5060");
    
    //   const inviter = new Inviter(userAgent, target);
    //   inviter.invite();
    // });


    // Options for SimpleUser
// const options = {
//   aor: "sip:1005@"+host+":5060", // caller
//   media: {
//     constraints: { audio: true, video: false }, // audio only call
//     //remote: { audio: getAudioElement("remoteAudio") } // play remote audio
//   }
// };

// WebSocket server to connect with
// const server = "wss://sip.example.com";

// Construct a SimpleUser instance
// const simpleUser = new Web.SimpleUser(server, options);

// // Connect to server and place call
// simpleUser.connect()
//   .then(() => simpleUser.call("sip:1001@"+host+":5060"))
//   .catch((error) => {
//     console.log(error)
//   });

const transportOptions = {
  server : "wss://"+host+":8089/ws"
};

const uri = UserAgent.makeURI("sip:1003@example.com");
const userAgentOptions = {
  authorizationPassword: '123456',
  authorizationUsername: '1003',
  transportOptions,
  uri
};
const userAgent = new UserAgent(userAgentOptions);
const registerer = new Registerer(userAgent);
userAgent.start().then(() => {
  registerer.register();
});

    
  }catch(err){
       console.log(err)
  }
    
 }


  return (
    <React.Fragment>
      <div style={{ padding: "1px", paddingTop: "10px" }}>
        <table align="center">
          <tr>
            <td align='center' style={{padding:'30px',fontSize:'25px'}}>
             <strong>NHÓM 7 DEMO SIP/VOIP</strong>
            </td>
          </tr>
          <tr>
            <td align='center'>
              <TextField
                autoFocus
                size="small"
                id="outlined-basic"
                label="Tên đăng nhập"
                variant="outlined"
              />
            </td>
          </tr>
          <tr>
            <td style={{ paddingTop: "10px" }} align='center'>
              <TextField
                size="small"
                type="password"
                id="outlined-basic"
                label="Mật khẩu"
                variant="outlined"
              />
            </td>
          </tr>
          <tr>
            <td style={{paddingTop:'20px'}}  align='center'>
              <Button
              onClick={()=>{
                _plugin()
              }}
              variant="outlined" color="primary">
                Đăng ký tài khoản
              </Button>
            </td>
          </tr>
        </table>
      </div>
    </React.Fragment>
  );
}
