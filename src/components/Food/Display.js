import React from "react";
import "./display.css";
import "../home.css";
import { render } from "react-dom";
import { Parallax, Background } from "react-parallax";
import transaction1 from "../../assets/transaction1.svg";
import transaction2 from "../../assets/transaction2.svg";
import transaction3 from "../../assets/transaction3.svg";
import transaction4 from "../../assets/transaction4.svg";
import foodorder from "../../assets/foodorder.svg";
import orderhistory from "../../assets/orderhistory.svg";
import foodowner from "../../assets/foodowner.svg";
import house4 from "../../assets/house4.svg";
import business from "../../assets/business.svg";
import additems from "../../assets/additems.svg";
import homesale from "../../assets/homesale.svg";
import historycard from "../../assets/historycard.svg";
import ordercard from "../../assets/ordercard.svg";
import ownercard from "../../assets/ownercard.svg";

function Display() {
  return (
    <>
      <div className="row p-5 home_about_container">
        <div className="col-lg-6">
          <a href="/foodiegenie">
            <h3 className="home_about_header">Order Food</h3>
          </a>
          <p className="home_about_description_main">

          </p>
        </div>
        <div className="col-lg-6 d-flex align-items-center justify-content-center">
          <div className="logo">
            <a href="/foodiegenie">
              <img src={foodorder} width="500px" />
            </a>
          </div>
        </div>
      </div>
      <div className="row p-5 home_about_container">
        <div className="col-lg-6">
          <div className="logo">
            <a href="/foodiegenie-owner">
              <img src={foodowner} width="580px" />
            </a>
          </div>
        </div>
        <div className="col-lg-6 d-flex align-items-right justify-content-center">
          {/* <div className="col-lg-6"> */}
          <a href="/foodiegenie-owner">
            <h3 className="home_about_header">Canteen Owner</h3>
          </a>
          <p className="home_about_description_main">

          </p>
          {/* </div> */}
        </div>
      </div>
      <div className="row p-5 home_about_container">
        <div className="col-lg-6">
          <a href="/foodiegenie-orders">
            <h3 className="home_about_header">Order History</h3>
          </a>
          <p className="home_about_description_main">

          </p>
        </div>
        <div className="col-lg-6 d-flex align-items-center justify-content-center">
          <div className="logo">
            <a href="/foodiegenie-orders">
              <img src={orderhistory} width="500px" />
            </a>
          </div>
        </div>
      </div>
      <div className=" home_about_container">
        <div className="container login_cards" style={{ marginBottom: "2%" }}>
          <a
            href="/foodiegenie"
            class="card each_card text-dark text-decoration-none"
          >
            <img
              // src="https://images.unsplash.com/photo-1559308448-de7de9315f9b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&h=650&q=80"
              src={ordercard}
              height="220"
              class="card-img-top"
            />
            <div class="card-body">
              <h4 class="card-title">Order Food</h4>
              <p class="card-text">

              </p>
            </div>
          </a>
          <a
            href="/foodiegenie-owner"
            class="card each_card text-dark text-decoration-none"
          >
            <img
              // src="https://images.unsplash.com/photo-1559308448-de7de9315f9b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&h=650&q=80"
              src={ownercard}
              height="220"
              class="card-img-top"
            />
            <div class="card-body">
              <h4 class="card-title">Canteen Owner</h4>
              <p class="card-text">

              </p>
            </div>
          </a>

          <a
            href="/foodiegenie-orders"
            class="card each_card text-dark text-decoration-none"
          >
            <img
              // src="https://images.unsplash.com/photo-1563461661026-49631dd5d68e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&h=650&q=80"
              src={historycard}
              height="220"
              class="card-img-top"
            />
            <div class="card-body">
              <h4 class="card-title">Order History</h4>
              <p class="card-text">

              </p>
            </div>
          </a>
        </div>
      </div>
      {/* </div>
      </Parallax> */}
      {/* </div> */}
    </>
  );
}

export default Display;
