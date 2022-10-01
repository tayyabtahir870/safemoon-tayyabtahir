import React from "react";
// import { FaUsers } from "react-icons/fa";
import {AiOutlineArrowRight} from 'react-icons/ai'

function Page1() {
  return (
    <div>
      <div class="container-fluid text-center herooo1">
        <div class="row">
          <div class="col para1">
            <div className="hero4">
             
              <div>
                <h2 className=" text-start">Community Focused</h2>
                <p className="text-start">
                  Community Focused and fair launch. The dev team burned all of
                  their tokens and participated with everyone else.
                </p>
                <h5 className="arrow text-start">Join Us<AiOutlineArrowRight/></h5>
              </div>
            </div>
          </div>

          <div class="col para1">
            <div className="hero4">
              <h2 className="text-start">Automatic LP</h2>
              <p className="text-start">
                Every trade contributes towards auto-generating liquidity that
                goes into multiple pools used by exchanges
              </p>
              <h5 className="arrow text-start">View bscScan<AiOutlineArrowRight/></h5>
            </div>
          </div>

          <div class="col para1">
            <div className="hero4">
              <h2 className="  text-start">RFI Static Rewards</h2>
              <p className="text-start">
                Holders earn passive rewards through static reflection as they
                watch their balance of SafeMoon grow indefinitely.
              </p>
              <h5 className="arrow text-start">Check your Wallet<AiOutlineArrowRight/></h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page1;
