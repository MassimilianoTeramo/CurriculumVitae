import epicodeLogo from "../Assets/logoEPIC.png";
import lifeLogo from "../Assets/logo-life-learning.png";
import uniLogo from "../Assets/uniLogo.png";
import Experience from "../Components/JobExperience";
import { useState } from "react";

function Career() {

  return (
    <div className="container d-flex flex-column align-items-center justify-content-center">
      <h1 className="text-center mt-5 mb-3">My Career path</h1>
      <p className="text-center mb-5">
        Here you can find information about my professional journey, skills, and
        experiences.
      </p>
      <div className="row">
        <div className="col-md-12 mb-5 d-flex flex-column align-items-center justify-content-center">
          <h2 className="mt-4">Professional Experience</h2>
          <Experience />
        </div>
        <div className="col-md-12 pt-2 d-flex flex-column align-items-center justify-content-center">
          <h2>Education</h2>
          <div className="table-container">
             <table
               className="table mt-4 w-50 text-center"
               style={{ borderRadius: "6px", overflow: "hidden"}}
             >
            <thead>
              <tr className="table-dark">
                <th scope="col">School</th>
                <th scope="col">year</th>
                <th scope="col">Course</th>
              </tr>
            </thead>
            <tbody className="text-center align-middle">
              <tr className=" table-group-divider">
                <td>
                  <img
                    src={epicodeLogo}
                    alt="Epicode Logo"
                    className="edLogo"
                  />
                </td>
                <td>2025</td>
                <td className="desc">
                  <span>Bootcamp Full Stack Web Development</span>
                </td>
              </tr>
              <tr>
                <td>
                  <img
                    src={lifeLogo}
                    alt="Life Learning Logo"
                    className="edLogo"
                    style={{
                      height: "60px",
                      width: "115px",
                      marginRight: "10px",
                    }}
                  />
                </td>
                <td>2018</td>
                <td className="desc">
                  Master in Programming and web development
                </td>
              </tr>
              <tr>
                <td>
                  <img
                    src={uniLogo}
                    alt="University Logo"
                    className="edLogo"
                    style={{
                      height: "45px",
                      width: "130px",
                      marginRight: "10px",
                    }}
                  />
                </td>
                <td>2014</td>
                <td className="desc">
                  Master in Business Communication and Marketing
                </td>
              </tr>
            </tbody>
          </table>
          </div>
         
        </div>
      </div>
    </div>
  );
}
export default Career;
