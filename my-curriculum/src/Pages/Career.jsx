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

const data02 = [
  { x: "Mitek Systems", y: 20 },
  { x: 50, y: 180 },
  { x: 75, y: 240 },
  { x: 100, y: 100 },
  { x: 120, y: 190 },
];

const getIntroOfPage = (label) => {
  if (label === 'Web Designer / SEO Ass.') {
    return "Page A is about men's clothing";
  }
  if (label === 'Web Designer') {
    return "Page B is about women's dress";
  }
  if (label === 'Web Marketing Ass.') {
    return "Page C is about women's bag";
  }
  if (label === 'Hospitality Industry') {
    return 'Page D is about household goods';
  }
  if (label === 'Mitek Systems') {
    return 'Page E is about food';
  }
  return '';
};

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const label = payload[0].payload.x;
    return (
      <div className="custom-tooltip">
        <p className="label">{`${label}: ${payload[0].payload.y}`}</p>
        <p className="intro">{getIntroOfPage(label)}</p>
        <p className="desc">Anything you want can be displayed here.</p>
      </div>
    );
  }
  return null;
};

function Career() {
  
  const data = [

    { x: "Web Designer / SEO Ass.", y: 2015 },
    { x: "Web Designer", y: 2016 },
    { x: "Web Marketing Ass.", y: 2017 },
    { x: "Hospitality Industry", y: 2017 },
    { x: "Mitek Systems", y: 2021 },
    { x: "Mitek Systems", y: 2025 },

  ];

  return (
    <div className="container d-flex flex-column align-items-center justify-content-center">
      <h1 className="text-center mt-5">My Career path</h1>
      <p className="text-center mb-5">
        Here you can find information about my professional journey, skills, and
        experiences.
      </p>
      <div className="row">
        <div className="col-md-12 mb-5 d-flex flex-column align-items-center justify-content-center">
          <h2>Professional Experience</h2>

          <ScatterChart
            width={1200}
            height={300}
            margin={{
              top: 20,
              right: 20,
              bottom: 10,
              left: 20,
            }}
          >
            <CartesianGrid />
            <XAxis 
              type="category" 
              dataKey="x" 
              name="Job" />
            <YAxis
              type="number"
              dataKey="y"
              name="Year"
              domain={['dataMin', 'dataMax']}
              tickFormatter={tick => tick.toString()}
            />
            <ZAxis type="number" range={[100]} />
            <Tooltip cursor={{ strokeDasharray: "3 3" }} content={<CustomTooltip />} />
            <Legend />
            <Scatter
              name="Job Experience"
              data={data}
              fill="var(--primary-color)"
              line shape="rounded"
            />
          </ScatterChart>
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
