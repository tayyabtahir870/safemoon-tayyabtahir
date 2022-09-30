import React from "react";
import {BsDiscord} from 'react-icons/bs'
import {FaFacebookSquare} from 'react-icons/fa'
import {BsTwitter} from 'react-icons/bs'
import {GrInstagram} from 'react-icons/gr'
import {BsLinkedin} from 'react-icons/bs'
import {AiFillYoutube} from 'react-icons/ai'
import {BsReddit} from 'react-icons/bs'
import {FaSun} from 'react-icons/fa'

function Footer() {
  return (
    <div>
      <div className="container-fluid  hero1 ">
        <div className="row">
          <div className="col-md-8">
          <div className="footer-1">

           <div className="img-1">
           < img src="https://safemoon.com/_next/image?url=%2Fimg%2Flogo.png&w=96&q=75" alt="" width="100%" />
           </div>
           <div className="pt-5">

            <h2 className="text-start para1">SafeMoon - Innovating for Good</h2>
            <p className="text-start para1">Building blockchain, commerce, metaverse and NFT products to derive <br /> new kinds of value  from crypto technology and to apply it to increasingly better <br /> use. Advancing our innovations to every part of the world.</p>
             <BsDiscord size="4%" color="#2AEEE4" /> &nbsp;
             <FaFacebookSquare size="4%" color="#2AEEE4"/>&nbsp;
             <BsTwitter size="4%" color="#2AEEE4"/>&nbsp;
             <GrInstagram size="4%" color="#2AEEE4"/>&nbsp;
             <BsLinkedin size="4%" color="#2AEEE4"/>&nbsp;
             <AiFillYoutube size="4%" color="#2AEEE4"/>&nbsp;
             <BsReddit size="4%" color="#2AEEE4"/>&nbsp;
             




           </div>
           </div>


          </div>

          <div className="col-md-2">
            <div className="footer-3 pt-5">
            <ul className=" list-unstyled para1">

              <li>Wallet Tracker</li>
              <li>Branding</li>
              <li>White Paper</li>
              <li>Contract</li>
              <li>Status</li>
              <li>SafeMoon Card</li>

            </ul>
            </div>
          </div>

          <div className="col-md-2">
            <div className="footer-2 pt-5">
              <ul className="list-unstyled para1">
                <li>Support</li>
                <li>List a Token</li>
                <li>Careers</li>
                <li>Education</li>
                <li>Wallpaper</li>
              </ul>


            </div>
             

          </div>
             <div className="footer-4 pt-5">
             <b>
             <button type="button" className="btn">Terms of Use</button>
             <button type="button" class="btn">Privacy Policy</button>
             <button type="button" class="btn">Cookies Policy</button>
             <button type="button" class="btn">Wallet EULA</button>
             <button type="button" class="btn">Wallet Privacy</button>
             <button type="button" class="btn">Disclaimer</button>
             <button type="button" class="btn">FAQ</button>
             <button type="button" class="btn">Our Partners</button>
             </b>



             </div>
             <p className="footer-4 para1">Copyright © 2022 SafeMoon US LLC | All Rights Reserved.<FaSun color="#2AEEE4"/></p>

        </div>
      </div>
    </div>
  );
}

export default Footer;
