import React from "react";
import { useState, useEffect } from "react";
import "../About/makerdisp.css";

function Makers() {
  const [data0, setdata0] = useState(null);
  const [data1, setdata1] = useState(null);
  const [data2, setdata2] = useState(null);
  const [data3, setdata3] = useState(null);
  const [data4, setdata4] = useState(null);

  const [loading0, setloading0] = useState(true);
  const [loading1, setloading1] = useState(true);
  const [loading2, setloading2] = useState(true);
  const [loading3, setloading3] = useState(true);
  const [loading4, setloading4] = useState(true);

  useEffect(() => {
    getDevelopers();

    async function getDevelopers() {
    }
  }, []);

  if(loading0) return (<div style={{textAlign: "center"}}>loading...</div>);
  if(loading1) return (<div style={{textAlign: "center"}}>loading...</div>);
  if(loading2) return (<div style={{textAlign: "center"}}>loading...</div>);
  if(loading3) return (<div style={{textAlign: "center"}}>loading...</div>);
  if(loading4) return (<div style={{textAlign: "center"}}>loading...</div>);

  return (
    <div className="container">
      <h2 style={{marginTop: "2%"}} className="teamhead"><b>The developers of energy dApp</b></h2>
      <h6 style={{textAlign: "center"}}>This page is being fetched from GitHub</h6>
      <section className="teammem">
        <div className="teammemcont">
          {data1 && (
            <div className="teamflex columnrev">
              <div style={{ width: "60%" }} className="passiontext">
                <p>{data1.bio}</p>
              </div>
              <div className="teammemcard">
                <img
                  src={data1.avatar_url}

                  
                />

                <h3 style={{ marginBottom: "2%" }}>
                  <strong>{data1.name}</strong>
                </h3>
                <div className="contacts">
                  <a href={data1.html_url} target="_blank" class="margright">
                    <i class="fab fa-2x fa-github"></i>
                  </a>
                  <a
                    href="https://linkedin.com/in/"
                    target="_blank"
                  >
                    <i class="fab fa-2x fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
      <section className="teammem">
        <div className="teammemcont">
          {data0 && (
            <div className="teamflex ">
              <div className="teammemcard">
                <img
                  src={data0.avatar_url}
                  
                />

                <h3 style={{ marginBottom: "2%" }}>
                  <strong>{data0.name}</strong>
                </h3>
                <div className="contacts">
                  <a href={data0.html_url} target="_blank" class="margright">
                    <i class="fab fa-2x fa-github"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/"
                    target="_blank"
                  >
                    <i class="fab fa-2x fa-linkedin"></i>
                  </a>
                </div>
              </div>
              <div style={{ width: "60%" }} className="passiontext">
                <p>{data0.bio}</p>
              </div>
            </div>
          )}
        </div>
      </section>
      <section className="teammem">
        <div className="teammemcont">
          {data2 && (
            <div className="teamflex columnrev">
              <div style={{ width: "60%" }} className="passiontext">
                <p>{data2.bio}</p>
              </div>
              <div className="teammemcard">
                <img
                  src={data2.avatar_url}
                  
                />

                <h3 style={{ marginBottom: "2%" }}>
                  <strong>{data2.name}</strong>
                </h3>
                <div className="contacts">
                  <a href={data2.html_url} target="_blank" class="margright">
                    <i class="fab fa-2x fa-github"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/"
                    target="_blank"
                  >
                    <i class="fab fa-2x fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
      <section className="teammem">
        <div className="teammemcont">
          {data3 && (
            <div className="teamflex ">
              <div className="teammemcard">
                <img
                  src={data3.avatar_url}
                  
                />
                <h3 style={{ marginBottom: "2%" }}>
                  <strong>{data3.name}</strong>
                </h3>
                <div className="contacts">
                  <a href={data3.html_url} target="_blank" class="margright">
                    <i class="fab fa-2x fa-github"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/"
                    target="_blank"
                  >
                    <i class="fab fa-2x fa-linkedin"></i>
                  </a>
                </div>
              </div>
              <div style={{ width: "60%" }} className="passiontext">
                <p>{data3.bio}</p>
              </div>
            </div>
          )}
        </div>
      </section>
      <section className="teammem">
        <div style={{ marginBottom: "5%" }} className="teammemcont">
          {data4 && (
            <div className="teamflex columnrev">
              <div style={{ width: "60%" }} className="passiontext">
                <p>{data4.bio}</p>
              </div>
              <div className="teammemcard">
                <img
                  src={data4.avatar_url}
                 
                />

                <h3 style={{ marginBottom: "2%" }}>
                  <strong>{data4.name}</strong>
                </h3>
                <div className="contacts">
                  <a href={data4.html_url} target="_blank" class="margright">
                    <i class="fab fa-2x fa-github"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/"
                    target="_blank"
                  >
                    <i class="fab fa-2x fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default Makers;
