import React, { useState, useEffect } from "react";
import Header from "../template/Header";
import Footer from "../template/Footer";
import myconfig from "../api/config";
import axios from "axios";

export default function FreePBX() {
  const [users, setUser] = useState([]);
  const getUsers = () => {
    axios
      .post(myconfig.url_server + `/endpoints`, {})
      .then(function (response) {
        setUser(response.data.filter(x=>x.resource!=='dpma_endpoint'));
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <React.Fragment>
      <Header />
      <div style={{ padding: "1px", paddingTop: "10px" }}>
        Số người dùng: {users.length}
       
        <table class="table table-bordered border-primary">
          <thead>
            <tr>
              <td>Technology</td>
              <td>Resource</td>
              <td>State</td>
            </tr>
          </thead>
          <tbody>
          {users.map((item, index) => {
          return (<tr>
              <td>{item.technology}</td>
              <td>{item.resource}</td>
              <td>{item.state}</td>
          </tr>);
        })}
          </tbody>
        </table>
        {/* <TableContainer>
          <Table
            size="small"
            aria-label="a dense table"
          >
            <TableHead>
              <TableRow>
                <TableCell align="right">Technology</TableCell>
                <TableCell align="right">Resource</TableCell>
                <TableCell align="right">State</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((row, index) => (
                <TableRow key={index}>
                  <TableCell component="th" scope="row">
                    {row.technology}
                  </TableCell>
                  <TableCell align="right">{row.resource}</TableCell>
                  <TableCell align="right">{row.state}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer> */}
      </div>
      <Footer />
    </React.Fragment>
  );
}
