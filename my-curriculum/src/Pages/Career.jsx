import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  ZAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import epicodeLogo from "../Assets/logoEpicode.png";
import lifeLogo from "../Assets/logo-life-learning.png";
import uniLogo from "../Assets/uniLogo.png";




function Career() {
  
  const data = [

    { x: "emediaweb", y: 2015 },
    { x: "Digitaly", y: 2016 },
    { x: "SearchPoint Uk", y: 2017 },
    { x: "Hospitality Industry", y: 2017 },
    { x: "Mitek Systems", y: 2021 },
    { x: "Present: Mitek Systems", y: 2025 },

  ];

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

       {/*  */}
        </div>
        <div className="col-md-12 pt-2 d-flex flex-column align-items-center justify-content-center">
          <h2>Education</h2>
          <ul className="list-unstyled mt-4">
            <li className="mb-2"><div><img src={epicodeLogo} alt="Epicode Logo" className="edLogo"/> <span className="ms-1">- Bootcamp Full Stack Web Development (2025)</span></div></li>
            <li className="mb-2"><div className="d-flex align-items-center"><img src={lifeLogo} alt="Life Learning Logo" className="edLogo" style={{height:"60px", width:"115px", marginRight:"10px"}}/> <span className="ms-1"> - Programming and web development (2018)</span> </div></li>
            <li className="mb-2"><div className="d-flex align-items-center"><img src={uniLogo} alt="University Logo" className="edLogo" style={{height:"45px", width:"130px", marginRight:"10px"}}/> <span className="ms-1"> - Master in Business Communication and Marketing(2014)</span> </div></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Career;

