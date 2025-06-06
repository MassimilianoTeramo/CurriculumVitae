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

const data02 = [
  { x: "Mitek Systems", y: 20 },
  { x: 50, y: 180 },
  { x: 75, y: 240 },
  { x: 100, y: 100 },
  { x: 120, y: 190 },
];

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
            <Tooltip cursor={{ strokeDasharray: "3 3" }} />
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
          <ul className="list-unstyled">
            <li>EPICODE - Bootcamp Full Stack Web Development (2025)</li>
            <li>Life Learning - Programming and web development (2018) </li>
            <li>
              Universitá degli Studi della Tuscia - Master Degree in Business
              Communication and Marketing (2014)
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Career;
