import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div className="footer-container ">
        <footer className="footer mt-auto py-3">
          <div className="row">
            <div className="col-md-6">
              <h5 className="footer-hLine">UIM</h5>

              <ul className="foot_links">
                <li>Principal: Joshua T. Partridge</li>
                <li>Address: 650 Hollywood Avenue, Bronx, NY 10465</li>
                <li>Telephone: (718) 823-6042</li>
                <li>Fax: (718) 823-6347</li>

                <li>Parent Coordinator: Deborah Acevedo Claudio</li>
                <li>Email: DAcevedoClaudio@schools.nyc.gov</li>
              </ul>
            </div>
            <div className="col-md-5">
              <div id="map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3019.0446264164566!2d-73.8204771843383!3d40.826983438509394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c28b158bdd8a39%3A0x4cdfb12da56ecc2!2s650%20Hollywood%20Ave%2C%20The%20Bronx%2C%20NY%2010465!5e0!3m2!1sen!2sus!4v1566961933428!5m2!1sen!2sus"
                  width="400"
                  height="300"
                  frameborder="0"
                  allowfullscreen=""
                ></iframe>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
