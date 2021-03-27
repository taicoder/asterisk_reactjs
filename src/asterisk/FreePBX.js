import React, { useState, useEffect } from "react";
import Header from "../template/Header";
import Footer from "../template/Footer";
import myconfig from "../api/config";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import MessageIcon from "@material-ui/icons/Message";
import IconButton from "@material-ui/core/IconButton";
import { AddIcCallOutlined, Call } from "@material-ui/icons";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export default function FreePBX() {
  const [users, setUser] = useState([]);
  const [username, setUserName] = useState("");
  const [password, setPassWord] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [message, setMessage] = useState("");

  const getUsers = () => {
    axios
      .post(myconfig.url_server + `/endpoints`, {})
      .then(function (response) {
        setUser(response.data.filter((x) => x.resource !== "dpma_endpoint"));
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getUsers();
  }, []);

  const SignUp = () => {
    axios
      .post(myconfig.url_server + `/signup`, {
        username,
        password,
      })
      .then(function (response) {
        if (response.data === 1) alert("Tài khoản đã tồn tại");
        else alert("Thành công");
        setTimeout(() => {
          getUsers();
        }, 300);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const Delete = (_username) => {
    axios
      .post(myconfig.url_server + `/delete`, {
        username: _username,
      })
      .then(function (response) {
        console.log(response);
        if (response.data === 1) alert("Đã xóa");
        setTimeout(() => {
          getUsers();
        }, 300);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const sendMessage = () => {
    if (to !== "" && message !== "") {
      axios
        .post(myconfig.url_server + `/sendmessage`, {
          from,
          to,
          message,
        })
        .then(function (response) {
          alert("Thành công");
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      alert("Chưa nhập đầy đủ thông tin");
    }
  };

  const Call = (_from) => {
    if (to !== "") {
      axios
        .post(myconfig.url_server + `/call`, {
          from: _from,
          to,
        })
        .then(function (response) {
          alert("Thành công");
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      alert("Chưa nhập số cần gọi");
    }
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Header />
      <div style={{ padding: "1px", paddingTop: "10px" }}>
        <table align="center">
          <tr>
            <td align="center" style={{ padding: "30px", fontSize: "25px" }}>
              <strong>NHÓM 17 DEMO SIP/VOIP</strong>
            </td>
          </tr>
          {/* <tr>
            <td align="center">
              <TextField
                autoFocus
                size="small"
                id="outlined-basic"
                label="Tên đăng nhập"
                variant="outlined"
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
              />
            </td>
          </tr>
          <tr>
            <td style={{ paddingTop: "10px" }} align="center">
              <TextField
                size="small"
                type="password"
                id="outlined-basic"
                label="Mật khẩu"
                variant="outlined"
                onChange={(e) => {
                  setPassWord(e.target.value);
                }}
              />
            </td>
          </tr>
          <tr>
            <td style={{ paddingTop: "20px" }} align="center">
              <Button
                onClick={() => {
                  SignUp();
                }}
                variant="outlined"
                color="primary"
              >
                Đăng ký tài khoản sip
              </Button>
            </td>
          </tr> */}
        </table>
        Số người dùng: {users.length}
        <table class="table table-bordered border-primary">
          <thead>
            <tr>
              <td>Loại</td>
              <td>Tài khoản</td>
              <td>Trạng thái</td>
              <td>Nhắn tin</td>
              <td>Gọi</td>
              {/* <td></td> */}
            </tr>
          </thead>
          <tbody>
            {users.map((item, index) => {
              return (
                <tr>
                  <td>{item.technology}</td>
                  <td>{item.resource}</td>
                  <td>
                    <img
                      src={
                        item.state === "online"
                          ? "/images/online.png"
                          : "/images/offline.png"
                      }
                      width="70"
                      //  style={{ margin: "5px" }}
                      height="30"
                      alt=""
                    />
                  </td>
                  <td>
                    <IconButton
                      size="small"
                      onClick={() => {
                        handleClickOpen();
                        setFrom(item.resource);
                      }}
                    >
                      <MessageIcon />
                    </IconButton>
                  </td>
                  <td>
                    <TextField
                      autoFocus
                      size="small"
                      id="outlined-basic"
                      label="Số cần gọi"
                      variant="outlined"
                      onChange={(e) => {
                        setTo(e.target.value);
                      }}
                    />
                    <IconButton
                      size="small"
                      onClick={() => {
                        Call(item.resource);
                      }}
                    >
                      <AddIcCallOutlined />
                    </IconButton>
                  </td>

                  {/* <td>
                    <a
                      class="text-danger"
                      href="#"
                      onClick={() => {
                        Delete(item.resource);
                      }}
                    >
                      Xóa
                    </a>
                  </td> */}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Nhắn tin từ tài khoản {from}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <table>
              <tr>
                <td>
                  <TextField
                    autoFocus
                    size="small"
                    id="outlined-basic"
                    label="Đến tài khoản"
                    variant="outlined"
                    onChange={(e) => {
                      setTo(e.target.value);
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td style={{ paddingTop: "10px" }}>
                  <TextField
                    autoFocus
                    size="small"
                    multiline
                    rows="4"
                    width="10"
                    id="outlined-basic"
                    label="Nội dung"
                    variant="outlined"
                    onChange={(e) => {
                      setMessage(e.target.value);
                    }}
                  />
                </td>
              </tr>
            </table>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={sendMessage} color="primary">
            Gửi
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Đóng
          </Button>
        </DialogActions>
      </Dialog>
      <Footer />
    </React.Fragment>
  );
}
