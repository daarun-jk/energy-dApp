// ===================================================== ABIS
import EnergyAgreement from "../build/contracts/EnergyAgreement.json";
import Landlord from "./Landlord";
// ===================================================== Package Import
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Web3 from "web3";
import Studentpg from "./Studentpg";
import Transactions from "./transactions";
import Adminonly from "./Adminonly";
import AdminNotifications from "./AdminNotifications";
import Navbar from "./Navbar";

var admin;
// var commision;
class Adminenergy extends Component {
  async componentWillMount() {
    await this.loadWeb3();
    await this.loadBlockchainData();
  }

  // ============================================== WEB3
  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      window.alert("Non-Ethereum browser detected. Try again with MetaMask!");
    }
  }

  // ============================================== Load Blockchain with WEB3
  async loadBlockchainData() {
    const web3 = window.web3;
    //Declare Web3

    //Load account   //Using web3 get account
    const accounts = await web3.eth.getAccounts();
    this.setState({ account: accounts[0] }); //============ METAMASK 1st account Address

    // ============================================== Network ID (Library.json --> networks --> address)
    const networkId = await web3.eth.net.getId();
    // ============================================== Contract Hash & Address
    const networkData = EnergyAgreement.networks[networkId];
    // ============================================== Connect to Contract
    if (networkData) {
      const rentalagreement = new web3.eth.Contract(
        EnergyAgreement.abi,
        networkData.address
      );
      this.setState({ rentalagreement });

      // Room_Count = await this.state.rentalagreement.methods.no_of_energydevices().call();
      // console.log("room total ", Room_Count);
      admin = await this.state.rentalagreement.methods.Admin().call();
      this.setState({ admin });
      // console.log("Admin", admin);
      // console.log("Commision", commision);

      const commission = await this.state.rentalagreement.methods
        .commisionpercentage()
        .call();
      this.setState({ commission });
      // ============================================== Total Books
      const no_of_energydevices = await rentalagreement.methods.no_of_energydevices().call();
      this.setState({ no_of_energydevices });

      for (var i = 1; i <= no_of_energydevices; i++) {
        const file = await rentalagreement.methods.Energydevice_by_No(i).call();
        this.setState({
          Energydevice_by_No: [...this.state.Energydevice_by_No, file],
        });
      }

      const no_of_agreement = await rentalagreement.methods
        .no_of_agreement()
        .call();
      this.setState({ no_of_agreement });

      for (var j = 1; j <= no_of_agreement; j++) {
        const file_A = await rentalagreement.methods
          .EnergyAgreement_by_No(j)
          .call();
        this.setState({
          EnergyAgreement_by_No: [...this.state.EnergyAgreement_by_No, file_A],
        });
      }

      const no_of_consumers = await rentalagreement.methods.no_of_consumers().call();
      this.setState({ no_of_consumers });

      for (var k = 1; k <= no_of_consumers; k++) {
        const file_R = await rentalagreement.methods.Consumer_by_No(k).call();
        this.setState({
          Consumer_by_No: [...this.state.Consumer_by_No, file_R],
        });
      }

      const no_of_terminationrequest = await rentalagreement.methods
        .no_of_terminationrequest()
        .call();
      this.setState({ no_of_terminationrequest });

      for (var m = 1; m <= no_of_terminationrequest; m++) {
        const file_X = await rentalagreement.methods
          .RequestAgreementTermination_By_No(m)
          .call();
        this.setState({
          RequestAgreementTermination_By_No: [
            ...this.state.RequestAgreementTermination_By_No,
            file_X,
          ],
        });
      }

    } else {
      window.alert("Library contract not deployed to detected network.");
    }
  }

  // ============================================== Upload Books
  addEnergydevice = (
    _housename,
    _houseaddress,
    _price,
    _securitydeposit,
    _energy_in_kwh
  ) => {
    // console.log("Name", _housename);

    //Set state to loading
    this.setState({ loading: true });

    this.state.rentalagreement.methods
      .addEnergydevice(
        _housename,
        _houseaddress,
        Web3.utils.toWei(_price, "ether"),
        Web3.utils.toWei(_securitydeposit, "ether"),
        _energy_in_kwh
      )
      .send({ from: this.state.account })
      .on("transactionHash", (hash) => {
        this.setState({
          loading: false,
        });
        window.location.reload();
      })
      .on("error", (e) => {
        window.alert("Error occured!! Please Refresh & Retry");
        this.setState({ loading: false });
      });
  };

  // ============================================== Upload Books
  async signAgreement(_index) {

    const web3 = window.web3;
    web3.eth.getBalance(this.state.account).then(console.log);
    //Set state to loading
    this.setState({ loading: true });

    const total = await this.state.rentalagreement.methods
      .totalfee(_index)
      .call();
    // const Total = total.then(result);

    // var amount = Web3.utils.toWei(total.toString(), "ether");
    // const amount = Web3.utils.toWei(total, "ether");
    // console.log(amount);
    // console.log("Wei", amountToSend);
    // var price = this.state.rentalagreement.methods
    //   .Energydevice_by_No(_index)
    //   .call()
    //   .then(function (result){result[5]};
    // .then(function (result) {
    //   console.log(result[5]);
    //   console.log(result[6]);
    // });
    // console.log(price);
    // console.log("Consumer", price);
    // const amount = Web3.utils.toHex(total);
    this.state.rentalagreement.methods
      .signAgreement(_index)
      .send({
        from: this.state.account,
        value: total,
      })
      .on("transactionHash", (hash) => {
        this.setState({
          loading: false,
        });
        window.location.reload();
      })
      .on("error", (e) => {
        window.alert("Error occured!! Please Refresh & Retry");
        this.setState({ loading: false });
      });
  }

  async payConsumerforenergy(_index) {

    const consumerbill = await this.state.rentalagreement.methods.consumerbill(_index).call();
    //Set state to loading
    this.setState({ loading: true });

    this.state.rentalagreement.methods
      .payConsumerforenergy(_index)
      .send({ from: this.state.account, value: consumerbill })
      .on("transactionHash", (hash) => {
        this.setState({
          loading: false,
        });
        window.location.reload();
      })
      .on("error", (e) => {
        window.alert("Error occured!! Please Refresh & Retry");
        this.setState({ loading: false });
      });
  }

  reportenergydevice = (_index) => {

    //Set state to loading
    this.setState({ loading: true });

    this.state.rentalagreement.methods
      .reportenergydevice(_index)
      .send({ from: this.state.account })
      .on("transactionHash", (hash) => {
        this.setState({
          //after completion of upload ..initial state
          loading: false,
          //type: null,
          //name: null,
        });
        window.location.reload(); //will reload the screen immedeately
      })
      .on("error", (e) => {
        window.alert("Error occured!! Please Refresh & Retry");
        this.setState({ loading: false });
        window.location.reload();
      });
  };

  async agreementCompleted(_index) {

    const securitydeposit = await this.state.rentalagreement.methods
      .securitydeposit(_index)
      .call();

    // //Set state to loading
    // this.setState({ loading: true });

    this.state.rentalagreement.methods
      .agreementCompleted(_index)
      .send({ from: this.state.account, value: securitydeposit })
      .on("transactionHash", (hash) => {
        this.setState({
          loading: false,
        });
        window.location.reload();
      })
      .on("error", (e) => {
        window.alert("Error occured!! Please Refresh & Retry");
        this.setState({ loading: false });
      });
  }

  agreementTerminated = (_index, _terminateno) => {

    //Set state to loading
    this.setState({ loading: true });

    this.state.rentalagreement.methods
      .agreementTerminated(_index, _terminateno)
      .send({ from: this.state.account })
      .on("transactionHash", (hash) => {
        this.setState({
          loading: false,
        });
        window.location.reload();
      })
      .on("error", (e) => {
        window.alert("Error occured!! Please Refresh & Retry");
        this.setState({ loading: false });
      });
  };

  reject = (_index, _agreementno, _terminateno) => {

    //Set state to loading
    this.setState({ loading: true });

    this.state.rentalagreement.methods
      .reject(_index, _agreementno, _terminateno)
      .send({ from: this.state.account })
      .on("transactionHash", (hash) => {
        this.setState({
          loading: false,
        });
        window.location.reload();
      })
      .on("error", (e) => {
        window.alert("Error occured!! Please Refresh & Retry");
        this.setState({ loading: false });
      });
  };

  changeCommision = (_commision) => {

    //Set state to loading
    this.setState({ loading: true });

    this.state.rentalagreement.methods
      .changeCommision(_commision)
      .send({ from: this.state.account })
      .on("transactionHash", (hash) => {
        this.setState({
          loading: false,
        });
        // commision = _commision;
        window.location.reload();
      })
      .on("error", (e) => {
        window.alert("Error occured!! Please Refresh & Retry");
        this.setState({ loading: false });
      });
  };

  disableEnergydevice = (_index) => {

    //Set state to loading
    this.setState({ loading: true });

    this.state.rentalagreement.methods
      .disableEnergydevice(_index)
      .send({ from: this.state.account })
      .on("transactionHash", (hash) => {
        this.setState({
          loading: false,
        });
        window.location.reload();
      })
      .on("error", (e) => {
        window.alert("Error occured!! Please Refresh & Retry");
        this.setState({ loading: false });
      });
  };

  requestTermination = (_index, _agreementid) => {

    //Set state to loading
    this.setState({ loading: true });

    this.state.rentalagreement.methods
      .requestTermination(_index, _agreementid)
      .send({ from: this.state.account })
      .on("transactionHash", (hash) => {
        this.setState({
          loading: false,
        });
        window.location.reload();
      })
      .on("error", (e) => {
        window.alert("Error occured!! Please Refresh & Retry");
        this.setState({ loading: false });
      });
  };

  // ============================== STATE OBJCET
  constructor(props) {
    super(props);
    this.state = {
      account: "",
      admin: "",
      commission: 0,
      rentalagreement: null,
      Energydevice_by_No: [],
      EnergyAgreement_by_No: [],
      Consumer_by_No: [],
      RequestAgreementTermination_By_No: [],

      loading: false,
      total: 0,
    };
    // ============================== Books
    this.addEnergydevice = this.addEnergydevice.bind(this);
    this.signAgreement = this.signAgreement.bind(this);
    this.payConsumerforenergy = this.payConsumerforenergy.bind(this);
    this.agreementCompleted = this.agreementCompleted.bind(this);
    this.agreementTerminated = this.agreementTerminated.bind(this);
    this.requestTermination = this.requestTermination.bind(this);
    this.reject = this.reject.bind(this);
    this.changeCommision = this.changeCommision.bind(this);
    this.disableEnergydevice = this.disableEnergydevice.bind(this);
  }

  render() {
    return (
      <div>
        <Router>
          <Switch>
            {/* ========================================= Students (View Books) ========================================= */}
            <Route path="/prosumers">
              <Navbar account={this.state.account} />
              <Landlord
                account={this.state.account}
                Energydevice_by_No={this.state.Energydevice_by_No}
                EnergyAgreement_by_No={this.state.EnergyAgreement_by_No}
                Consumer_by_No={this.state.EnergyAgreement_by_No}
                addEnergydevice={this.addEnergydevice}
                // payConsumerforenergy={this.payConsumerforenergy}
                agreementCompleted={this.agreementCompleted}
                agreementTerminated={this.agreementTerminated}
                requestTermination={this.requestTermination}
                disableEnergydevice={this.disableEnergydevice}
                admin={admin}
              />
            </Route>
            <Route path="/energytrading">
              <Navbar account={this.state.account} />
              <Studentpg
                account={this.state.account}
                Energydevice_by_No={this.state.Energydevice_by_No}
                EnergyAgreement_by_No={this.state.EnergyAgreement_by_No}
                Consumer_by_No={this.state.EnergyAgreement_by_No}
                signAgreement={this.signAgreement}
                payConsumerforenergy={this.payConsumerforenergy}
                reportenergydevice={this.reportenergydevice}
              />
            </Route>
            <Route path="/transactions">
              <Navbar account={this.state.account} />
              <Transactions
                // Energydevice_by_No={this.state.Energydevice_by_No}
                account={this.state.account}
                EnergyAgreement_by_No={this.state.EnergyAgreement_by_No}
                Consumer_by_No={this.state.Consumer_by_No}
                RequestAgreementTermination_By_No={
                  this.state.RequestAgreementTermination_By_No
                }
                agreementCompleted={this.agreementCompleted}
                agreementTerminated={this.agreementTerminated}
                changeCommision={this.changeCommision}
                reject={this.reject}
                // signAgreement={this.signAgreement}
                // payConsumerforenergy={this.payConsumerforenergy}
                admin={this.state.admin}
                // commision={commision}
              />
            </Route>
            <Route path="/admin">
              {/* <Navbar account={this.state.account} /> */}
              <Adminonly
                // Energydevice_by_No={this.state.Energydevice_by_No}
                account={this.state.account}
                EnergyAgreement_by_No={this.state.EnergyAgreement_by_No}
                Consumer_by_No={this.state.Consumer_by_No}
                RequestAgreementTermination_By_No={
                  this.state.RequestAgreementTermination_By_No
                }
                agreementCompleted={this.agreementCompleted}
                agreementTerminated={this.agreementTerminated}
                changeCommision={this.changeCommision}
                reject={this.reject}
                // signAgreement={this.signAgreement}
                // payConsumerforenergy={this.payConsumerforenergy}
                adminp={this.state.admin}
                commission={this.state.commission}
              />
            </Route>
            <Route path="/termination">
              <Navbar account={this.state.account} />
              <AdminNotifications
                // Energydevice_by_No={this.state.Energydevice_by_No}
                account={this.state.account}
                EnergyAgreement_by_No={this.state.EnergyAgreement_by_No}
                Consumer_by_No={this.state.Consumer_by_No}
                RequestAgreementTermination_By_No={
                  this.state.RequestAgreementTermination_By_No
                }
                agreementCompleted={this.agreementCompleted}
                agreementTerminated={this.agreementTerminated}
                changeCommision={this.changeCommision}
                reject={this.reject}
                // signAgreement={this.signAgreement}
                // payConsumerforenergy={this.payConsumerforenergy}
                admin={this.state.admin}
                // commision={commision}
              />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default Adminenergy;

// export default function Adminenergy() {
//   return (
//     <div>
//       <h1>hello pg admin</h1>
//     </div>
//   );
// }
