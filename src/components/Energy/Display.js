import React from "react";
import "./Display.css";
import "./home.css";
import { render } from "react-dom";
import { Parallax, Background } from "react-parallax";
import transaction1 from "../../assets/transaction1.svg";
import transaction2 from "../../assets/transaction2.svg";
import transaction3 from "../../assets/transaction3.svg";
import transaction4 from "../../assets/transaction4.svg";
import house1 from "../../assets/house1.svg";
import house2 from "../../assets/house2.svg";
import house3 from "../../assets/house3.svg";
import house4 from "../../assets/house4.svg";
import business from "../../assets/business.svg";
import additems from "../../assets/additems.svg";
import homesale from "../../assets/homesale.svg";

function Display() {
  return (
    <>
      <div className="row p-5 home_about_container">
        <div className="col-lg-6">
          <a href="/energytrading">
            <h3 className="home_about_header">Search Rooms</h3>
          </a>
          <p className="home_about_description_main">
          </p>
        </div>
        <div className="col-lg-6 d-flex align-items-center justify-content-center">
          <div className="logo">
            <a href="/energytrading">
              <img src={house1} width="300px" />
            </a>
          </div>
        </div>
      </div>
      <div className="row p-5 home_about_container">
        <div className="col-lg-6">
          <div className="logo">
            <a href="/prosumers">
              <img src={house3} width="480px" />
            </a>
          </div>
        </div>
        <div className="col-lg-6 d-flex align-items-right justify-content-center">
          {/* <div className="col-lg-6"> */}
          <a href="/prosumers">
            <h3 className="home_about_header">Landlord</h3>
          </a>
          <p className="home_about_description_main">
          </p>
          {/* </div> */}
        </div>
      </div>
      <div className="row p-5 home_about_container">
        <div className="col-lg-6">
          <a href="/transactions">
            <h3 className="home_about_header">Transactions</h3>
          </a>
          <p className="home_about_description_main">
          </p>
        </div>
        <div className="col-lg-6 d-flex align-items-center justify-content-center">
          <div className="logo">
            <a href="/transactions">
              <img src={transaction4} width="500px" />
            </a>
          </div>
        </div>
      </div>
      {/* <div
        id="carouselExampleInterval"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="3000">
            <img
              src="https://images.unsplash.com/photo-1494203484021-3c454daf695d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&h=450&q=80"
              className="d-block w-100"
              alt="First image here"
            />
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <img
              src="https://images.unsplash.com/photo-1617545293648-b4847530f8a8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&h=450&q=80"
              className="d-block w-100"
              alt="Second image here"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://images.unsplash.com/photo-1617544926793-e5dd78afc0b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&h=450&q=80"
              className="d-block w-100"
              alt="Third image here"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <Parallax
        bgImage={
          "https://i.pinimg.com/originals/8f/b8/41/8fb841d386e1acf32e2b36bd40c67f50.jpg"
        }
        strength={400}
        renderLayer={(percentage) => (
          <div
            style={{
              position: "absolute",
              // background: `rgba(255, 125, 0, ${percentage * 1})`,
              left: "50%",
              top: "50%",
              width: percentage * 500,
              height: percentage * 500,
            }}
          />
        )}
      >
        <div className="container about">
          <h1 className="about_heading">About Us</h1>
          <h4 className="sub_heading">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
            velit.
          </h4>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti
            quidem maxime autem rerum soluta quos deleniti, impedit excepturi
            odio odit nesciunt ex earum, reprehenderit hic architecto dolores.
            Aliquid ab amet voluptates dolore delectus hic expedita eos dolorem
            adipisci iure, veniam ad eaque, cumque explicabo. Fugiat, dicta,
            laborum soluta excepturi dolor ad quis distinctio, consequuntur
            laudantium enim rem blanditiis similique ab esse? Voluptate repellat
            molestias ducimus voluptatibus unde fugiat placeat eligendi odit
            tempora dolores similique deleniti nam corrupti ea optio, tenetur
            assumenda nulla! Velit nostrum recusandae labore obcaecati modi sint
            cupiditate illum sapiente commodi ea accusantium quam nihil, quidem,
            laboriosam voluptas!
          </p> */}
      <div className=" home_about_container">
        <div className="container login_cards" style={{ marginBottom: "2%" }}>
          <a
            href="/energytrading"
            class="card each_card text-dark text-decoration-none"
          >
            <img
              // src="https://images.unsplash.com/photo-1559308448-de7de9315f9b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&h=650&q=80"
              src={homesale}
              height="220"
              class="card-img-top"
            />
            <div class="card-body">
              <h4 class="card-title">Students</h4>
              <p class="card-text">
              Don't waste time finding a perfect home for you. Click here now!
              </p>
            </div>
          </a>
          <a
            href="/prosumers"
            class="card each_card text-dark text-decoration-none"
          >
            <img
              // src="https://images.unsplash.com/photo-1559308448-de7de9315f9b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&h=650&q=80"
              src={additems}
              height="220"
              class="card-img-top"
            />
            <div class="card-body">
              <h4 class="card-title">Landlord</h4>
              <p class="card-text">
              Show what you can offer for the college students. Provide all
                details.
              </p>
            </div>
          </a>

          <a
            href="/transactions"
            class="card each_card text-dark text-decoration-none"
          >
            <img
              // src="https://images.unsplash.com/photo-1563461661026-49631dd5d68e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&h=650&q=80"
              src={business}
              height="220"
              class="card-img-top"
            />
            <div class="card-body">
              <h4 class="card-title">Transactions</h4>
              <p class="card-text">
              Don't panic if you forgot to track down previous agreements. See
                all here.
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
