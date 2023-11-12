import React, { Component } from "react";
import { Button, Tab, Tabs } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import moment from "moment";
// import Slider from "react-rangeslider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faDownload,
  faUpload,
} from "@fortawesome/free-solid-svg-icons";
import "./energy.css";
import Web3 from "web3";
var input, filter, table, tr, td, i, txtValue;

//searches Agreements
function agreement_search() {
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  console.log(filter);
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}
function rent_search() {
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  console.log(filter);
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[5];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}
function landlord_search() {
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  console.log(filter);
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[7];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}
function tenant_search() {
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  console.log(filter);
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[8];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}
function R_agreement_search() {
  input = document.getElementById("RentInput");
  filter = input.value.toUpperCase();
  console.log(filter);
  table = document.getElementById("rentTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}
function R_rent_search() {
  input = document.getElementById("RentInput");
  filter = input.value.toUpperCase();
  console.log(filter);
  table = document.getElementById("rentTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[2];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}
function R_landlord_search() {
  input = document.getElementById("RentInput");
  filter = input.value.toUpperCase();
  console.log(filter);
  table = document.getElementById("rentTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[3];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}
function R_tenant_search() {
  input = document.getElementById("RentInput");
  filter = input.value.toUpperCase();
  console.log(filter);
  table = document.getElementById("rentTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[4];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

//searches rents

class Transactions extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      rvalue: 12, //fetch the current commision percentage and assign it here
    };
  }

  handleChange = (rvalue) => {
    this.setState({
      rvalue: rvalue,
    });
  };

  render() {
    const { rvalue } = this.state;
    const chooseParameter = () => {
      let option = document.getElementById("search_options");
      if (option.value === "room_number") {
        agreement_search();
      } else if (option.value === "consumerbill") {
        rent_search();
      } else if (option.value === "prosumer") {
        landlord_search();
      } else if (option.value === "consumer") {
        tenant_search();
      }
    };

    const chooseParameter2 = () => {
      let option = document.getElementById("search_options2");
      if (option.value === "room_number") {
        R_agreement_search();
      } else if (option.value === "consumerbill") {
        R_rent_search();
      } else if (option.value === "prosumer") {
        R_landlord_search();
      } else if (option.value === "consumer") {
        R_tenant_search();
      }
    };
    return (
      // ============================================== Notes Upload Form ==============================================
      <div className="container-fluid mt-1 text-center">
        <Tabs
          fill
          justify
          defaultActiveKey="Agreement"
          id="uncontrolled-tab-example"
          className="mb-3"
          style={{
            marginTop: "28px",
            fontSize: "25px",
            backgroundColor: "#DCDCDC",
          }}
        >
          <Tab eventKey="Agreement" title="Agreement">
            <h2 style={{ margin: "0.5%", marginTop: "2%" }}>Agreements</h2>
            <div className="left">
              <input
                type="text"
                id="myInput"
                placeholder="Search Energy Device Number"
                title="Type in a name"
              />
              <label htmlFor="search_options">Choose search parameter: </label>
              <select name="search_options" id="search_options">
                <option id="room_number" value="room_number">
                  Device ID
                </option>
                <option id="consumerbill" value="consumerbill">
                  Price
                </option>
                <option id="prosumer" value="prosumer">
                  Prosumer
                </option>
                <option id="consumer" value="consumer">
                  Consumer
                </option>
              </select>
              <button
                style={{ marginLeft: "1%" }}
                type="submit"
                onClick={chooseParameter}
                className="btn btn-primary"
              >
                Filter
              </button>
            </div>
            <br></br>
            <table
              id="myTable"
              class="table table-bordered"
              // style={{ width: "1000px", maxHeight: "450px" }}
            >
              <thead style={{ fontSize: "15px" }}>
                <tr className="bg-dark text-white">
                  {/* <th scope="col" style={{ width: "10px" }}>
                id
              </th> */}
                  <th scope="col" style={{ width: "20px" }}>
                    Agreement No
                  </th>
                  <th scope="col" style={{ width: "20px" }}>
                    Device No
                  </th>
                  <th scope="col" style={{ width: "100px" }}>
                    Device name
                  </th>
                  <th scope="col" style={{ width: "120px" }}>
                    House Address
                  </th>
                  <th scope="col" style={{ width: "100px" }}>
                    Security deposit
                  </th>
                  <th scope="col" style={{ width: "100px" }}>
                    Price
                  </th>
                  <th scope="col" style={{ width: "100px" }}>
                    Energy in Kwh
                  </th>
                  <th scope="col" style={{ width: "100px" }}>
                    Lockin Period
                  </th>
                  <th scope="col" style={{ width: "120px" }}>
                    Prosumer Address
                  </th>
                  <th scope="col" style={{ width: "120px" }}>
                    Consumer Address
                  </th>
                  <th scope="col" style={{ width: "100px" }}>
                    Contract Agreed On
                  </th>

                  {/* <th scope="col" style={{ width: "120px" }}>
                Uploaded By
              </th> */}

                  {/* <th scope="col" style={{ width: "80px" }}>
                Delete
              </th> */}
                </tr>
              </thead>

              {/* ========================================= Show all Notes (Mapping) ========================================= */}
              {this.props.EnergyAgreement_by_No.map((file, key) => {
                return (
                  // =================================================== Table

                  <thead style={{ fontSize: "12px" }} key={key}>
                    {
                      <tr>
                        <td>{file.agreementid}</td>
                        <td>{file.energydeviceid}</td>
                        <td>{file.Roomname.substring(0, 20)}</td>
                        <td>{file.RoomAddresss.substring(0, 25)}...</td>
                        <td>
                          {Web3.utils.fromWei(
                            file.securityDeposit.toString(),
                            "ether"
                          )}{" "}
                          ETH
                        </td>
                        <td>
                          {Web3.utils.fromWei(
                            file.price.toString(),
                            "ether"
                          )}{" "}
                          ETH
                        </td>
                        <td>{file.commisionpercentage}</td>
                        <td>365 Days</td>
                        <td>
                          <a
                            href={
                              "https://etherscan.io/address/" +
                              file.prosumerAddress
                            }
                            rel="noopener noreferrer"
                            target="_blank"
                          >
                            {file.prosumerAddress.substring(0, 6)}...
                            {file.prosumerAddress.substring(38, 42)}
                          </a>
                        </td>
                        <td>
                          <a
                            href={
                              "https://etherscan.io/address/" +
                              file.consumerAddress
                            }
                            rel="noopener noreferrer"
                            target="_blank"
                          >
                            {file.consumerAddress.substring(0, 6)}...
                            {file.consumerAddress.substring(38, 42)}
                          </a>
                        </td>

                        <td>
                          {moment
                            .unix(file.timestamp)
                            .format("D-MM-YYYY h:mm:ss A")}
                        </td>
                        {/* <td>
                      <a
                        href={"https://etherscan.io/address/" + file.uploader}
                        rel="noopener noreferrer"
                        target="_blank"
                        class="text-muted text-decoration-none"
                      >
                        {file.uploader.substring(0, 6)}...
                        {file.uploader.substring(38, 42)}
                      </a>
                    </td> */}
                        {/* <td>
                    <Button
                      id="view"
                      href={"https://ipfs.infura.io/ipfs/" + file.proofid_Hash}
                      target="_blank"
                      onClick={() => onClickOpenVacancy(id)}
                    >
                      View
                    </Button> */}
                        {/* <Button
                      variant="success btn-sm"
                      href={"https://ipfs.infura.io/ipfs/" + file.proofid_Hash}
                      target="_blank"
                    >
                      Downlod
                    </Button> */}
                        {/* <a
                      href={"https://ipfs.infura.io/ipfs/" + file.proofid_Hash}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {file.proofid_Hash.substring(0, 10)}...
                    </a> 
                  </td>*/}
                      </tr>
                    }
                  </thead>
                );
              })}
            </table>
          </Tab>
          <Tab eventKey="Consumer" title="Consumer">
            <h2 style={{ margin: "0.5%", marginTop: "2%" }}>Transaction Details</h2>
            <div className="left">
              <input
                type="text"
                id="RentInput"
                placeholder="Search Energy Device Number"
                title="Type in a name"
              />
              <label htmlFor="search_options2">Choose search parameter: </label>
              <select name="search_options2" id="search_options2">
                <option id="room_number2" value="room_number">
                  Device Number
                </option>
                <option id="rent2" value="consumerbill">
                  Price
                </option>
                <option id="landlord2" value="prosumer">
                  Prosumer
                </option>
                <option id="tenant2" value="consumer">
                  Consumer
                </option>
              </select>
              <button
                style={{ marginLeft: "1%" }}
                type="submit"
                onClick={chooseParameter2}
                className="btn btn-primary"
              > 
                Filter
              </button>
            </div>
            <br></br>
            <table
              id="rentTable"
              class="table table-bordered"
              // style={{ width: "1000px", maxHeight: "450px" }}
            >
              <thead style={{ fontSize: "15px" }}>
                <tr className="bg-dark text-white">
                  {/* <th scope="col" style={{ width: "10px" }}>
                id
              </th> */}
                  {/* <th scope="col" style={{ width: "100px" }}>
                Security deposit
              </th> */}
                  <th scope="col" style={{ width: "50px" }}>
                    Id
                  </th>
                  <th scope="col" style={{ width: "50px" }}>
                    EnergyDevice No
                  </th>
                  <th scope="col" style={{ width: "100px" }}>
                    Price
                  </th>
                  <th scope="col" style={{ width: "200px" }}>
                    Prosumer Address
                  </th>
                  <th scope="col" style={{ width: "120px" }}>
                    Consumer Address
                  </th>
                  <th scope="col" style={{ width: "120px" }}>
                    Paid On
                  </th>
                </tr>
              </thead>

              {/* ========================================= Show all Notes (Mapping) ========================================= */}
              {this.props.Consumer_by_No.map((file, key) => {
                return (
                  // =================================================== Table

                  <thead style={{ fontSize: "12px" }} key={key}>
                    {
                      <tr>
                        <td>{file.consumerno}</td>
                        <td>{file.energydeviceid}</td>
                        {/* <td>
                      {Web3.utils.fromWei(
                        file.securityDeposit.toString(),
                        "ether"
                      )}{" "}
                      ETH
                    </td> */}
                        <td>
                          {Web3.utils.fromWei(
                            file.price.toString(),
                            "ether"
                          )}{" "}
                          ETH
                        </td>
                        <td>
                          <a
                            href={
                              "https://etherscan.io/address/" +
                              file.prosumerAddress
                            }
                            rel="noopener noreferrer"
                            target="_blank"
                          >
                            {file.prosumerAddress}
                          </a>
                        </td>
                        <td>
                          <a
                            href={
                              "https://etherscan.io/address/" +
                              file.consumerAddress
                            }
                            rel="noopener noreferrer"
                            target="_blank"
                          >
                            {file.consumerAddress}
                          </a>
                        </td>

                        <td>
                          {moment
                            .unix(file.timestamp)
                            .format("D-MM-YYYY h:mm:ss A")}
                        </td>
                      </tr>
                    }
                  </thead>
                );
              })}
            </table>
          </Tab>
        </Tabs>

        {/* 

        <br></br>
        <h3>Change Commision Percentage</h3>
        <div>{rvalue} %</div>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            const _commision = this.commision.value;
            this.props.changeCommision(_commision);
          }}
        >
          <input
            id="commision"
            type="range"
            class="form-range"
            min="0"
            max="50"
            step="1"
            defaultValue={rvalue}
            //onChange={this.handleChange}
            ref={(input) => {
              this.commision = input;
            }}
          />

          <button
            type="submit"
            disabled={!this.props.admin}
            className="btn btn-success col-md-1.5"
          >
            <b>Change</b>
          </button>
        </form>

        <br></br>
        <h3>Agreement Termination Request</h3>
        <h9>{this.props.admin}</h9>
        <table
          class="table table-bordered"
          // style={{ width: "1000px", maxHeight: "450px" }}
        >
          <thead style={{ fontSize: "15px" }}>
            <tr className="bg-dark text-white">
              
              <th scope="col" style={{ width: "50px" }}>
                Id
              </th>
              <th scope="col" style={{ width: "20px" }}>
                EnergyDevice No
              </th>
              <th scope="col" style={{ width: "20px" }}>
                Agreement No
              </th>
              <th scope="col" style={{ width: "100px" }}>
                Request date
              </th>
              <th scope="col" style={{ width: "100px" }}>
                prosumer
              </th>
              <th scope="col" style={{ width: "100px" }}>
                Tenant
              </th>
              <th scope="col" style={{ width: "80px" }}>
                Terminated
              </th>
              <th scope="col" style={{ width: "80px" }}>
                Rejected
              </th>
              <th scope="col" style={{ width: "8px" }}>
                Pending
              </th>
              <th scope="col" style={{ width: "150px" }}>
                Terminate (Admin Only)
              </th>
            </tr>
          </thead>

          {this.props.RequestAgreementTermination_By_No.map((file, key) => {
            return (
              // =================================================== Table

              <thead style={{ fontSize: "12px" }} key={key}>
                {
                  <tr>
                    <td>{file.terminationno}</td>
                    <td>{file.energydeviceid}</td>
                    <td>{file.agreementid}</td>
                    
                    <td>
                      {moment
                        .unix(file.timestamp)
                        .format("D-MM-YYYY h:mm:ss A")}
                    </td>
                    <td>
                      {file.prosumer.substring(0, 6)}...
                      {file.prosumer.substring(38, 42)}
                    </td>
                    <td>
                      {file.consumer.substring(0, 6)}...
                      {file.consumer.substring(38, 42)}
                    </td>
                    <td>{file.terminated ? "Yes" : "No"}</td>
                    <td>{file.rejected ? "Yes" : "No"}</td>
                    <td>{file.completed ? "No" : "Yes"}</td>
                    <td>
                      <Button
                        id="Reject"
                        disabled={file.completed == true}
                        variant="danger btn-sm"
                        onClick={() =>
                          this.props.reject(
                            file.energydeviceid,
                            file.agreementid,
                            file.terminationno
                          )
                        }
                      >
                        Reject
                      </Button>
                      &nbsp;
                      <Button
                        id="Terminate"
                        disabled={file.completed == true}
                        variant="danger btn-sm"
                        onClick={() =>
                          this.props.agreementTerminated(
                            file.energydeviceid,
                            file.terminationno
                          )
                        }
                      >
                        Terminate
                      </Button>
                    </td>
                  </tr>
                }
              </thead>
            );
          })}
        </table> */}
      </div>
    );
  }
}

export default Transactions;
