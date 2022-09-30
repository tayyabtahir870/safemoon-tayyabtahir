import React from "react";
import Typed from "react-typed";

function Page4() {
  return (
    <>
      <div className="hero-1">
      <div className="container pt-5 pb-5 hero-5">
        <div className="row pt-5">
          <div className="col-md-6">
            <div className="">
                <div className="hero-6 pt-5 ">
              <p className="para1">WELCOME TO</p>
              <Typed className="para1 fs-1 fw-bold" strings={[
                "SAFEMOON"
              ]}
              typeSpeed={150} />
              <p className="para1">Community-driven Innovation for Good</p>
              <div>
              <button type="button" class="btn btn-success fw-bold">Consolidate to V2 SafeMoon!</button>
                <button type="button" class="btn text-white fw-bold">
                  buy V2
                </button>
                <button type="button" class="btn text-white fw-bold">
                  Swap
                </button>
                <button type="button" class="btn text-white fw-bold">
                  Live Chart
                </button>

                <br /> &nbsp;
                <p className="para1">SafeMoon (SFM) V2 Contract:</p>
              </div>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className=" text-center pt-5">
              <div className="-text">
                <h5 className="para1">Out Now:</h5>
                <h3 className="para1">SafeMoon Wallet</h3>
                <h5 className="para1">Get it on:</h5>
              </div>
              <div className="google">
                <img
                  src="https://safemoon.com/_next/image?url=%2Fimg%2Fgoogle_play.png&w=256&q=75"
                  alt=""
                  width="10%"
                />
                <img
                  src="https://safemoon.com/_next/image?url=%2Fimg%2Fapp_store.png&w=256&q=75"
                  alt=""
                  width="10%"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default Page4;
