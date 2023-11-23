import React from "react";
import { Link } from "react-router-dom";

const About = () => (
  <div className="container">
    <div className="row">
      <div className="col-12 col-md-12 p-3 text-center">
        <h1>
          <strong>
            <a href="/" className="text-dark">
              Contact
            </a>
          </strong>
        </h1>
      </div>
      <div className="col-12 col-md-8 p-3 text-center">
        <img
          className="img-fluid rounded"
          alt="penjual mesin kasir"
          src="https://1.bp.blogspot.com/-YVnCIS3UdIU/XzpJR9HByuI/AAAAAAAALEk/ECdc7iWQMIEMTh2seBIJoUB5hPJGjGziQCLcBGAsYHQ/s960/mesin%2Bkasir%2Btablet%2Bpos%2Bhybrid.jpg"
        />
      </div>
      <div className="col-12 col-md-4 p-3">
        <div
          className="shadow rounded p-3 p-md-5 bg-white"
          style={{
            opacity: 0.6
          }}
        >
          <p>Hubungi kami untuk informasi </p>
          <p>
            WhatsApp : <br />
            +62895339403223
          </p>
          <p>
            Call Us : <br />
            +62895339403223
          </p>
          <p>
            <a href="https://goo.gl/maps/V2Wxp2RcbF3cHxFC6" target="_blank">
              Visit Showroom here.
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default About;
