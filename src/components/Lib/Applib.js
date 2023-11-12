// ===================================================== ABIS
import Library from "../build/contracts/Aadhar.json";
// ===================================================== Package Import
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Web3 from "web3";
// ===================================================== Local Import
import Navbar from "./Navbar";
import Student from "./Student";
import StudentNotes from "./StudentNotes";
import Librarian from "./Librarian";
import Admin from "./Adminl";

// ============================================== IPFS (infura)

const IPFS = require("ipfs-api");
const ipfs = new IPFS({
  host: "ipfs.infura.io",
  port: 5001,
  protocol: "https",
});

// ============================================== Global variable
var admin;
var con_sumers;

class Applib extends Component {
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
    //console.log(accounts)

    // ============================================== Network ID (Library.json --> networks --> address)
    const networkId = await web3.eth.net.getId();
    // ============================================== Contract Hash & Address
    const networkData = Library.networks[networkId];

    // ============================================== Connect to Contract
    if (networkData) {
      const library = new web3.eth.Contract(Library.abi, networkData.address);
      this.setState({ library });

      // ============================================== Admin & con_sumers
      admin = await this.state.library.methods.admin().call();
      con_sumers = await this.state.library.methods.con_sumers().call();
      this.setState({ admin });
      this.setState({ con_sumers });

      // ============================================== Total Books
      // const no_of_books = await library.methods.BookCount().call();
      // this.setState({ no_of_books });

      // for (var i = 1; i <= no_of_books; i++) {
      //   const file = await library.methods.books(i).call();
      //   this.setState({
      //     books: [...this.state.books, file],
      //   });
      // }

      // ============================================== Total Notes
      const no_of_notes = await library.methods.ProofIDCount().call();
      this.setState({ no_of_notes });

      for (var i = 1; i <= no_of_notes; i++) {
        const file_N = await library.methods.proofids(i).call();
        this.setState({
          proofids: [...this.state.proofids, file_N],
        });
      }
    } else {
      window.alert("Library contract not deployed to detected network.");
    }
  }

  // ============================================== Collect Books & Convert into Buffer
  // loadBook = (event) => {
  //   event.preventDefault();

  //   const file = event.target.files[0];
  //   const reader = new window.FileReader();

  //   reader.readAsArrayBuffer(file);
  //   reader.onloadend = () => {
  //     this.setState({
  //       buffer: Buffer(reader.result),
  //     });
  //     console.log("buffer", this.state.buffer);
  //   };
  // };

  // ============================================== Collect Notes & Convert into Buffer
  loadNote = (event) => {
    event.preventDefault();

    const file_N = event.target.files[0];
    const reader = new window.FileReader();

    reader.readAsArrayBuffer(file_N);
    reader.onloadend = () => {
      this.setState({
        buffer: Buffer(reader.result),
      });
      console.log("buffer", this.state.buffer);
    };
  };

  // ============================================== Change Librarian (Admin Only)
  changelibrarian = (_librarian) => {
    console.log("Before", con_sumers);
    if (this.state.account == admin) {
      this.state.library.methods
        .changelibrarian(_librarian)
        .send({ from: this.state.account });
      con_sumers = _librarian;
      // window.location.reload();
    } else {
      window.alert("Error occured!! Please Refresh & Retry");
      window.location.reload();
    }
    console.log("After", con_sumers);
  };

  // ============================================== Delete Book (Librarian Only)
  deletebook = (_index) => {
    // console.log("Book Index", _index);

    this.setState({ loading: true });
    if (this.state.account == con_sumers) {
      this.state.library.methods
        .deletebook(_index)
        .send({ from: this.state.account })
        .on("transactionHash", (hash) => {
          this.setState({
            loading: false,
          });
          window.location.reload();
        });
    } else {
      window.alert("Error occured!! Please Refresh & Retry");
      window.location.reload();
    }
  };

  // ============================================== Delete ProofID (Uploader & Librarian Only)
  deleteproofid = (_index) => {
    console.log("ProofID Index", _index);

    //Set state to loading
    this.setState({ loading: true });

    this.state.library.methods
      .deleteproofid(_index)
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

  // ============================================== Report ProofID (Except Uploader)
  reportnote = (_index) => {
    console.log("ProofID Index", _index);

    //Set state to loading
    this.setState({ loading: true });

    this.state.library.methods
      .reportnote(_index)
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
  // ============================================== Upload Books

  // uploadBook = (name, description, author, isbn) => {
  //   // ============================================== Upload Book Buffer in Infura IPFS
  //   ipfs.add(this.state.buffer, (error, result) => {
  //     // console.log("IPFS Result", result);

  //     if (error) {
  //       console.error(error);
  //       return;
  //     }

  //     this.setState({ loading: true });

  //     if (this.state.account == con_sumers) {
  //       this.state.library.methods
  //         .uploadBook(
  //           result[0].hash,
  //           result[0].size,
  //           name,
  //           description,
  //           author,
  //           isbn
  //         )
  //         .send({ from: this.state.account })
  //         .on("transactionHash", (hash) => {
  //           this.setState({
  //             loading: false,
  //           });
  //           window.location.reload();
  //         })
  //         .on("error", (e) => {
  //           window.alert("Failed to Upload Books");
  //           this.setState({ loading: false });
  //         });
  //     } else {
  //       window.alert("Only Librarian Can Upload Books");
  //       window.location.reload();
  //     }
  //   });
  // };

  // ============================================== Upload Notes

  uploadProofID = (name, house_address, phone_number, email_id) => {
    // ============================================== Upload Notes Buffer in Infura IPFS
    ipfs.add(this.state.buffer, (error, result) => {
      // console.log("IPFS Result", result);

      if (error) {
        console.error(error);
        return;
      }

      this.setState({ loading: true });

      this.state.library.methods
        .uploadProofID(
          result[0].hash,
          result[0].size,
          name,
          house_address,
          phone_number,
          email_id
        )
        .send({ from: this.state.account })
        .on("transactionHash", (hash) => {
          this.setState({
            loading: false,
          });
          window.location.reload();
        })
        .on("error", (e) => {
          window.alert("Failed to Upload Notes.");
          this.setState({ loading: false });
        });
    });
  };

  // ============================== STATE OBJCET
  constructor(props) {
    super(props);
    this.state = {
      account: "",
      library: null,
      con_sumers: "",
      admin: "",
      books: [],
      proofids: [],
      loading: false,
    };
    // ============================== Books
    // this.uploadBook = this.uploadBook.bind(this);
    // this.loadBook = this.loadBook.bind(this);

    // ============================== Notes
    this.uploadProofID = this.uploadProofID.bind(this);
    this.loadNote = this.loadNote.bind(this);
  }

  render() {
    return (
      <div>
        <Router>
          <Switch>
            {/* ========================================= Students (View Books) ========================================= */}
            {/* <Route path="/lib-ebook">
              <Navbar account={this.state.account} />
              <Student books={this.state.books} loadBook={this.loadBook} />
            </Route> */}

            {/* ========================================= Students (Upload, View & Delete Notes) ========================================= */}

            <Route exact path="/id-proof">
              <Navbar account={this.state.account} />
              {this.state.loading ? (
                <div id="loader" className="text-center mt-5">
                  <p>Loading...</p>
                </div>
              ) : (
                <StudentNotes
                  proofids={this.state.proofids}
                  loadNote={this.loadNote}
                  uploadProofID={this.uploadProofID}
                  deleteproofid={this.deleteproofid}
                  reportnote={this.reportnote}
                  account={this.state.account}
                  con_sumers={this.state.con_sumers}
                />
              )}
            </Route>

            {/* ========================================= Admin (Change Librarian)========================================= */}

            <Route path="/lib-admin">
              <Navbar account={this.state.account} />
              <Admin
                changelibrarian={this.changelibrarian}
                account={this.state.account}
                admin={admin}
              />
            </Route>

            <Route path="/admin">
              <Navbar account={this.state.account} />
              <Admin
                changelibrarian={this.changelibrarian}
                account={this.state.account}
                admin={this.state.admin}
                con_sumers={this.state.con_sumers}
              />
            </Route>

            {/* ========================================= Librarian (Upload & Delete Books)========================================= */}
{/* 
            <Route exact path="/lib-con_sumers">
              <Navbar account={this.state.account} />
              {this.state.loading ? (
                <div id="loader" className="text-center mt-5">
                  <p>Loading...</p>
                </div>
              ) : (
                <Librarian
                  books={this.state.books}
                  loadBook={this.loadBook}
                  uploadBook={this.uploadBook}
                  deletebook={this.deletebook}
                  account={this.state.account}
                  con_sumers={this.state.con_sumers}
                />
              )}
            </Route> */}
          </Switch>
        </Router>
      </div>
    );
  }
}

export default Applib;
