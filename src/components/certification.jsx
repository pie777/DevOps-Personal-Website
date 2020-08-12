// import React, { Component } from "react";

// export default class Expertise extends Component {
//   render() {
//     return (
//       <section className="colorlib-about" data-section="expertise">
//         <div className="colorlib-narrow-content">
//           <div className="row">
//             <div
//               className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
//               data-animate-effect="fadeInLeft"
//             >
//               <span className="heading-meta">What I Achieved?</span>
//               <h2 className="colorlib-heading">
//                 CERTIFICATIONS
//               </h2>
//             </div>
//           </div>
//           <div className="row row-pt-md">
//             <div className="col-md-4 text-center animate-box">
//               <div className="services color-1">
//                 <span className="icon">
//                   <i className="icon-bulb" />
//                 </span>
//                 <div className="desc">
//                 {/* <h3>DevOps</h3>
//                   <p>Serverless Framework, Docker, Kubernetes, Jenkins, Circle CI, Terraform, Ansible, AWS, Microservices, Linux</p>     
//                 </div> */}
//                 <div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="9108da04-8439-498d-ab68-2c514d1e029b" data-share-badge-host="https://www.youracclaim.com"></div><script type="text/javascript" async src="//cdn.youracclaim.com/assets/utilities/embed.js"></script>
//               </div>
//             </div>
//             <div className="col-md-4 text-center animate-box">
//               <div className="services color-3">
//                 <span className="icon">
//                   <i className="icon-phone3" />
//                 </span>
//                 <div className="desc">
//                   <h3>Back End Development</h3>
//                   <p>Spring boot framework, Apache Tomcat, JUnit Testing, Swagger API, Nodejs, Golang, SQL Server, Python, MongoDB, MySQL</p>
//                 </div>
//               </div>
//             </div>
//             <div className="col-md-4 text-center animate-box">
//               <div className="services color-5">
//                 <span className="icon">
//                   <i className="icon-data" />
//                 </span>
//                 <div className="desc">
//                 <h3>Front End Development</h3>
//                   <p>
//                     React, Javascript, React Native, Jest/Enzyme, SASS & SCSS
//                     styling, Nginx, Webpack and Babel{" "}
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className="col-md-4 text-center animate-box" />
//             <div className="col-md-4 text-center animate-box">
//               <div className="services color-5">
//                 <span className="icon">
//                   <i className="icon-data" />
//                 </span>
//                 <div className="desc">
               
//                   <h3>Internet Of Things</h3>
//                   <p>
//                     Wireless Sensor Networks, Gateways, Lora Network, MQTT
//                     protocol, Lighting and Alarm Systems, IoT Platform{" "}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div style={{ height: "100px" }}></div>
//       </section>
//     );
//   }
// }

import React, { Component } from "react";

export default class Certifications extends Component {
  render() {
    return (
      <section className="colorlib-about" data-section="expertise">
        
        <div className="colorlib-narrow-content">
          <div className="row">
            <div
              className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
              data-animate-effect="fadeInLeft"
            >
              <span className="heading-meta">What I Achieved?</span>
              <h2 className="colorlib-heading">
                Certifications
              </h2>
            </div>
          </div>
          <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
              <div className="services color-1">
                <span className="icon">
                  <i className="icon-bulb" />
                </span>
                <div className="desc">
                <h3>AWS Cloud Practitioner</h3>
                </div>
              </div>
            </div>
            <div className="col-md-4 text-center animate-box">
              <div className="services color-3">
                <span className="icon">
                  <i className="icon-phone3" />
                </span>
                <div className="desc">
                <h3>AWS Solution Architect Associate</h3>
                </div>
              </div>
            </div>
            <div className="col-md-4 text-center animate-box">
              <div className="services color-5">
                <span className="icon">
                  <i className="icon-data" />
                </span>
                <div className="desc">
                <h3>Terraform Certified Associate</h3>
                </div>
              </div>
            </div>

            
          </div>
        </div>
        <div style={{ height: "50px" }}></div>
      </section>
    );
  }
}
