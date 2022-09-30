import React from "react";
import { FaCat } from "react-icons/fa";

function Page() {
  return (
    <div>
      <div class="container-fluid text-center heroo1">
        <div class="row">
          <div class="col">
            <div className="hero2">
              <span className="text-start firstbtn">The Token</span>
              <h1 className="text-start heading">
                The SafeMoon Protocol V2 is a community focused DeFi token that
                forms part of the expanding SafeMoon ecosystem.
              </h1>
              <p className="text-start para1">
                Four simple functions occur during each trade
              </p>
              <br />
              <br />
              <ul className="text-start para3 list-unstyled ">
                <b>
                  <div className="d-flex">
                    <div>
                      <FaCat size={50} color="#2AEEE4" />
                    </div>
                    &nbsp;
                    <div>
                      Reflections <br /> 4% is Redistributed to all existing
                      holders
                    </div>
                  </div> &nbsp;

                  <div className="d-flex">
                    <div>
                      <FaCat size={50} color="#2AEEE4" />
                    </div>
                    &nbsp;
                    <div>
                      LP Acquisition <br /> 3% is added to liquidity
                    </div>
                  </div>&nbsp;

                  <div className="d-flex">
                    <div>
                      <FaCat size={50} color="#2AEEE4"  />
                    </div>
                    &nbsp;
                    <div>Token Burn <br /> 2% of tokens are burned</div>
                  </div>&nbsp;

                  <div className="d-flex">
                    <div>
                      <FaCat size={50} color="#2AEEE4" />
                    </div>
                    &nbsp;
                    <div>
                      Growth Fund <br /> 1% is added to the SafeMoon Ecosystem
                      Growth Fund
                    </div>
                  </div>
                </b>
              </ul>
            </div>
          </div>

          <div class="col">
            <div className="aboutimg">
              <img className="img" width="" src="Assests/V7.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
