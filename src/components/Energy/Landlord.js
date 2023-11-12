import React, { Component } from "react";
import { Badge, Button, Form } from "react-bootstrap";
import "./energy.css";
import Card from "react-bootstrap/Card";
import Web3 from "web3";
import moment from "moment";
// import { Modal } from "react-responsive-modal";
// import "react-responsive-modal/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsDown,
  faWindowClose,
  faUpload,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

class Landlord extends Component {
  // state = {
  //   openModal: false,
  // };

  // onClickButton = (e) => {
  //   e.preventDefault();
  //   this.setState({ openModal: true });
  // };

  // onCloseModal = () => {
  //   this.setState({ openModal: false });
  // };

  render() {
    const closeIcon = <FontAwesomeIcon icon={faWindowClose} color="red" />;
    return (
      <div className="container" style={{ textAlign: "center" }}>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            const _housename = this.housename.value;

            const _houseaddress = this.houseaddress.value;
            const _price = this.rentcost.value;
            const _energy_in_kwh = this.energyinkwh.value;
            const _securitydeposit = this.securitydeposit.value;
            if (_houseaddress.length > 80 || _housename.length > 30) {
              window.alert(
                "Please enter Name within 30 characters\nor, Enter Address within 80 characters"
              );
            } else {
              this.props.addEnergydevice(
                _housename,
                _houseaddress,
                _price,
                _securitydeposit,
                _energy_in_kwh
              );
            }
          }}
        >
          <div style={{ marginBottom: "2.5%", marginTop: "2.5%" }}>
          <h1
          style={{ textAlign: "center", marginBottom: "2%", marginTop: "2%" }}
        >
          Welcome to Energy Trading, Prosumer: <span> {this.props.account ? this.props.account.substring(0, 6) : "0x0"}
          ...
          {this.props.account ? this.props.account.substring(38, 42) : "0x0"}</span>
        </h1>
        <p  style={{ textAlign: "center", marginBottom: "2%", marginTop: "2%", fontSize:"30px"}}>The below are the list of energy you can buy:</p>
          </div>
          <div class="sidenavl" >
            <div class="form-row" style={{ padding: "5%"}}>
              <div className="form-group form_components">
                <h5 className="form_components" style={{ textAlign: "center"}}>
                  Add your Energy Device:
                </h5>
                <h6 style={{ textAlign: "left" }}>Energy Type</h6>
                <input
                  id="housename"
                  type="text"
                  ref={(input) => {
                    this.housename = input;
                  }}
                  className="form-control"
                  placeholder="Enter your Energy Type (e.g. Solar, Wind)"
                  required
                />
              </div>
              <div className="form-group form_components">
                <h6 style={{ textAlign: "left" }}>House Address</h6>
                <input
                  id="houseaddress"
                  type="text"
                  ref={(input) => {
                    this.houseaddress = input;
                  }}
                  className="form-control text-monospace"
                  placeholder="Enter your Home Address"
                  required
                />
              </div>
              <div className="form-group form_components">
                <h6 style={{ textAlign: "left" }}>Energy in Kwh</h6>
                <input
                  id="energyinkwh"
                  type="text"
                  ref={(input) => {
                    this.energyinkwh = input;
                  }}
                  className="form-control text-monospace"
                  placeholder="Enter Power in KWh"
                  required
                />
              </div>
              
              <div className="form-group form_components">
                <h6 style={{ textAlign: "left" }}>Price (ETH)</h6>
                <input
                  id="rentcost"
                  type="number"
                  step="any"
                  ref={(input) => {
                    this.rentcost = input;
                  }}
                  className="form-control text-monospace"
                  placeholder="Enter the Price (in ETH)"
                  required
                />
              </div>
              <div className="form-group form_components">
                <h6 style={{ textAlign: "left" }}>
                  One Time Security Deposit(ETH)
                </h6>
                <input
                  id="securitydeposit"
                  type="number"
                  step="any"
                  ref={(input) => {
                    this.securitydeposit = input;
                  }}
                  className="form-control text-monospace"
                  placeholder="Enter: Onetime Security Deposit (ETH)"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={!this.props.account}
                className="btn btn-success col-md-1.5"
                style={{ boxShadow : "0px 17px 10px -10px rgba(0, 0, 0, 0.4)",
              }}
              >
                <b>
                  <FontAwesomeIcon icon={faPlus} />
                  &nbsp;&nbsp; Add Device
                </b>
              </button>
            </div>
          </div>
        </form>
        <div class="cardnavl">
          <div class="card-group">
            {this.props.Energydevice_by_No.map((file, key) => {
              // console.log(this.props.EnergyAgreement_by_No[key].timestamp);
              return (
                <div class="cardspg">
                  <Card
                    border="shadow"
                    style={{
                      height: "24.5rem",
                      width: "19.5rem",
                      backgroundColor: "#e6f9d4",
                      textAlign: "left",
                    }}
                    key={key}
                  >
                    {/* ======================== Book Image (From Google Books)  */}
                    {/* ======================== Book Name  */}
                    <Card.Body>
                      {/* <div class="dropdownpg-container" tabindex="-1">
                      <div class="three-dots"></div>
                      <div class="dropdownpg">                      
                      <div class="form-check form-switch">
                      <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" disabled={this.props.account != this.props.admin} checked={!file.disableroom}
                        variant={
                          file.disableroom ? "checked" : "unchecked"
                        }
                        onClick={() => this.props.disableEnergydevice(file.energydeviceid)}
                        />
                    </div>
                      </div>
                    </div> */}
                      <Card.Img
                        src={
                          file.disableroom
                            ? "https://freepngimg.com/thumb/blocked/6-2-blocked-png-clipart-thumb.png"
                            : file.vacant
                            ? "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Transparent_square.svg/1024px-Transparent_square.svg.png"
                            : "https://images.squarespace-cdn.com/content/v1/52b7145ae4b0af23bf047e39/1598180087757-F9NHODH3UTG62HSYEWBR/ptaa-pilgrimage-booked-out-300x176.png?format=2500w"
                        }
                        alt="Card image"
                      />
                      <Card.ImgOverlay>
                        <div
                          class="form-check form-switch"
                          style={{ marginLeft: "90%" }}
                        >
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="flexSwitchCheckDefault"
                            disabled={this.props.account != this.props.admin}
                            checked={!file.disableroom}
                            variant={file.disableroom ? "checked" : "unchecked"}
                            onClick={() => this.props.disableEnergydevice(file.energydeviceid)}
                          />
                        </div>
                        <Card.Title
                          style={{
                            fontSize: "16px",
                            color: "green",
                            fontFamily: "monospace",
                          }}
                        >
                          <b>{file.housename}</b>
                        </Card.Title>

                        {/* ======================== Author  */}
                        <Card.Title
                          style={{
                            fontSize: "14px",
                            fontFamily: "monospace",
                          }}
                        >
                          <b>Device No:</b> {file.energydeviceid}
                        </Card.Title>
                        <Card.Title
                          style={{
                            fontSize: "14px",
                            fontFamily: "monospace",
                          }}
                        >
                          <b>Current Agreement:</b> {file.agreementid}
                        </Card.Title>
                        <Card.Title
                          // className="mb-1 text"
                          style={{ fontSize: "14px", fontFamily: "monospace" }}
                        >
                          <b>House Address:</b> {file.houseaddress.substring(0, 50)}
                          ...
                        </Card.Title>
                        <Card.Title
                          // className="mb-1 text"
                          style={{ fontSize: "14px", fontFamily: "monospace" }}
                        >
                          <b>Energy in Kwh:</b> {file.energy_in_kwh.toString()}
                          {" "}
                          Kwh
                        </Card.Title>
                        {/* ======================== ISBN No.  */}
                        <Card.Title
                          // className="mb-1 text"
                          style={{ fontSize: "14px", fontFamily: "monospace" }}
                        >
                          {console.log(file)}
                          <b>Price:</b>
                          {"  "}
                          {Web3.utils.fromWei(
                            file.price.toString(),
                            "ether"
                          )}{" "}
                          ETH
                        </Card.Title>
                        <Card.Title
                          // className="mb-1 text"
                          style={{ fontSize: "14px", fontFamily: "monospace" }}
                        >
                          <b>Security Deposit :</b>
                          {"  "}
                          {Web3.utils.fromWei(
                            file.securityDeposit.toString(),
                            "ether"
                          )}{" "}
                          ETH
                        </Card.Title>
                        <Card.Title
                          // className="mb-1 text"
                          style={{ fontSize: "14px", fontFamily: "monospace" }}
                        >
                          <b>Lastest Contract on:</b>
                          {"  "}
                          {file.timestamp != 0
                            ? moment.unix(file.timestamp).format("D-MM-YYYY ")
                            : " "}
                        </Card.Title>
                        {/* ======================== Google Books Link  */}
                        <Card.Title
                          // className="mb-1 text"
                          style={{ fontSize: "14px", fontFamily: "monospace" }}
                        >
                          <b>Prosumer:</b>{" "}
                          <Card.Link
                            href={
                              "https://etherscan.io/address/" + file.prosumer
                            }
                            rel="noopener noreferrer"
                            target="_blank"
                          >
                            {file.prosumer.substring(0, 6)}...
                            {file.prosumer.substring(38, 42)}
                          </Card.Link>
                        </Card.Title>
                        {/* ======================== Button : Delete  */}
                        <Card.Title
                          // className="mb-1 text"
                          style={{ fontSize: "14px", fontFamily: "monospace" }}
                        >
                          <b>
                            {file.vacant ? "Previous " : "Current "} Consumer:{" "}
                          </b>
                          <Card.Link
                            href={
                              "https://etherscan.io/address/" +
                              file.currentProsumer
                            }
                            rel="noopener noreferrer"
                            target="_blank"
                          >
                            {file.currentProsumer !=
                            "0x0000000000000000000000000000000000000000"
                              ? file.currentProsumer.substring(0, 6)
                              : "0x0"}
                            ...
                            {file.currentProsumer !=
                            "0x0000000000000000000000000000000000000000"
                              ? file.currentProsumer.substring(38, 42)
                              : "0x0"}
                          </Card.Link>
                        </Card.Title>
                        <Card.Title
                          // className="mb-1 text"
                          style={{ fontSize: "14px", fontFamily: "monospace" }}
                        >
                          <b>Is it Available:</b> {file.vacant ? "YES" : "NO"}
                        </Card.Title>
                        <Card.Title
                          className="mb-1 text"
                          style={{ fontSize: "14px", fontFamily: "monospace" }}
                        >
                          <b>Reports:</b>&nbsp;{" "}
                          <FontAwesomeIcon icon={faThumbsDown} />
                          <a
                            id="report"
                            style={{
                              margin: "1%",
                              borderRadius: "8px",
                              fontFamily: "monospace",
                            }}
                            disabled
                          >
                            {" "}
                            <a>{file.reports}</a>
                          </a>
                        </Card.Title>
                        <div>
                          <Button
                            id="Completed"
                            style={{
                              margin: "1%",
                              borderRadius: "8px",
                              marginTop: "5%",
                            }}
                            disabled={
                              file.disableroom == true ||
                              file.prosumer != this.props.account ||
                              file.vacant == true
                            }
                            variant="success btn-sm"
                            onClick={() =>
                              this.props.agreementCompleted(key + 1)
                            }
                          >
                            Completed
                          </Button>

                          {/* <Button
                        id="Terminate"
                        disabled={
                          file.disableroom == true ||
                          file.prosumer != this.props.account
                        }
                        variant="danger btn-sm"
                        onClick={() =>
                          this.props.requestTermination(
                            file.energydeviceid,
                            file.agreementid
                          )
                        }
                      >
                       Req. Termination
                      </Button> */}

                          <Button
                            style={{
                              margin: "1%",
                              borderRadius: "8px",
                              marginTop: "5%",
                            }}
                            disabled={
                              file.disableroom == true ||
                              file.prosumer != this.props.account ||
                              file.vacant == true
                            }
                            variant="danger btn-sm"
                            onClick={() =>
                              this.props.requestTermination(
                                file.energydeviceid,
                                file.agreementid
                              )
                            }
                          >
                            Req. Termination
                          </Button>
                          {/* <Modal
                          animationDuration={100}
                          styles={{
                            modal: {},
                            overlay: { background: "#ccc" },
                          }}
                          closeIconSize={500}
                          center
                          open={this.state.openModal}
                          onClose={this.onCloseModal}
                          closeIcon={closeIcon}
                        >
                          <form
                            onSubmit={(event) => {
                              event.preventDefault();
                              const _reason = this.reason.value;
                              this.props.requestTermination(
                                file.energydeviceid,
                                file.agreementid,
                                _reason
                              );
                            }}
                          >
                            <h3>Please mention the reason,</h3>{" "}
                            <h6>
                              why you want to terminate the Agreement<br></br>
                              This will help Admin to Verify the process
                              <br></br>You also can add Image/Video URL
                            </h6>
                            <input
                              id="houseaddress"
                              type="text"
                              ref={(input) => {
                                this.reason = input;
                              }}
                              className="form-control text-monospace"
                              placeholder="Enter : Reason of Termination Req."
                              required
                            />
                            <button
                              style={{ margin: "1%", borderRadius: "8px" }}
                              type="submit"
                              disabled={
                                file.disableroom == true ||
                                file.prosumer != this.props.account
                              }
                              className="btn btn-success col-md-1.5"
                            >
                              <b>Send</b>
                            </button>
                          </form> */}
                          {/* <Button
                            id="Terminate"
                            // disabled={
                            //   file.disableroom == true ||
                            //   file.prosumer != this.props.account
                            // }
                            variant="danger btn-sm"
                            onClick={() =>
                              this.props.requestTermination(
                                file.energydeviceid,
                                file.agreementid
                              )
                            }
                          >
                            Req. Termination
                          </Button> */}
                          {/* </Modal>                   */}
                        </div>
                      </Card.ImgOverlay>
                    </Card.Body>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Landlord;
