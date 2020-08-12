import React, { Component } from "react";

export default class Skills extends Component {
  render() {
    return (
      <section
        className="colorlib-skills"
        data-section="skills"
        style={{ marginTop: -150 }}
      >
        <div className="colorlib-narrow-content">
          <div className="row">
            <div
              className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
              data-animate-effect="fadeInLeft"
            >
              <span className="heading-meta">My Specialty</span>
              <h2 className="colorlib-heading animate-box">My Skills</h2>
            </div>
          </div>
          <div className="row">
            <div
              className="col-md-12 animate-box"
              data-animate-effect="fadeInLeft"
            >
              <p>
                A guy who codes. Passionate about techologies and innovation.
              </p>
            </div>
            <div
              className="col-md-6 animate-box"
              data-animate-effect="fadeInLeft"
            >
              <div className="progress-wrap">
              <h3>Python, Golang, bash, Java, C</h3>
                <div className="progress">
                  <div
                    className="progress-bar color-1"
                    role="progressbar"
                    aria-valuenow={90}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: "90%" }}
                  >
                    <span>95%</span>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 animate-box"
              data-animate-effect="fadeInRight"
            >
              <div className="progress-wrap">
              <h3>CI tools: CircleCI, Jenkins</h3>
               
                <div className="progress">
                  <div
                    className="progress-bar color-2"
                    role="progressbar"
                    aria-valuenow={95}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: "95%" }}
                  >
                    <span>90%</span>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 animate-box"
              data-animate-effect="fadeInLeft"
            >
              <div className="progress-wrap">
                {/* <h3>HTML5, CSS3, JavaScript, SASS & SCSS</h3> */}
                <h3>IAC and CM tools: Terraform, Serverless framework, Ansible</h3>
                <div className="progress">
                  <div
                    className="progress-bar color-3"
                    role="progressbar"
                    aria-valuenow={94}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: "94%" }}
                  >
                    <span>94%</span>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 animate-box"
              data-animate-effect="fadeInRight"
            >
              <div className="progress-wrap">
                {/* <h3>React, Node, Spring Boot, Node-red, JUnit, Microservices, Apache Tomcat, Nginx</h3> */}
                <h3>Containerization: Docker, Kubernetes</h3>
                <div className="progress">
                  <div
                    className="progress-bar color-4"
                    role="progressbar"
                    aria-valuenow={94}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: "94%" }}
                  >
                    <span>94%</span>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 animate-box"
              data-animate-effect="fadeInLeft"
            >
              <div className="progress-wrap">
                {/* <h3>Docker, Kubernetes, Jenkins, Circle CI, git version control, Shell, Maven</h3> */}
                <h3>Cloud: AWS VPC, Lambda, Aurora, Athena, Kinesis streams and firehose, S3, Glue</h3>
                <div className="progress">
                  <div
                    className="progress-bar color-5"
                    role="progressbar"
                    aria-valuenow={80}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: "80%" }}
                  >
                    <span>85%</span>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 animate-box"
              data-animate-effect="fadeInRight"
            >
              <div className="progress-wrap">
                <h3>Database: SQL server, MongoDB, Postgres</h3>
                <div className="progress">
                  <div
                    className="progress-bar color-6"
                    role="progressbar"
                    aria-valuenow={80}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: "80%" }}
                  >
                    <span>80%</span>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 animate-box"
              data-animate-effect="fadeInRight"
            >
              <div className="progress-wrap">
                <h3>Libraries & Frameworks: React, Spring boot, Nodejs</h3>
                <div className="progress">
                  <div
                    className="progress-bar color-6"
                    role="progressbar"
                    aria-valuenow={90}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: "90%" }}
                  >
                    <span>90%</span>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 animate-box"
              data-animate-effect="fadeInLeft"
            >
              <div className="progress-wrap">
                <h3>Testing tools: Jest/Enzyme, Junit</h3>
                <div className="progress">
                  <div
                    className="progress-bar color-5"
                    role="progressbar"
                    aria-valuenow={85}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: "85%" }}
                  >
                    <span>85%</span>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 animate-box"
              data-animate-effect="fadeInLeft"
            >
              <div className="progress-wrap">
                <h3>Other tools: Microservice, REST, Shell, Linux</h3>
                <div className="progress">
                  <div
                    className="progress-bar color-5"
                    role="progressbar"
                    aria-valuenow={85}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: "85%" }}
                  >
                    <span>85%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
