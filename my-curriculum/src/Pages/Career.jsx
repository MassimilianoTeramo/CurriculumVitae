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


const getIntroOfPage = (label) => {
  if (label === 'emediaweb') {
    return(
      <div> 
        <p> Role: Web Designer / SEO Assistant</p>
      <ul>
        <li className="my-1">Built and updated websites using HTML and CSS.</li>
        <li className="mb-1">Applied SEO principles to improve Google search visibility.</li>
        <li className="mb-1">Managed e-commerce CMS uploading and editing product images and details using Adobe tools.</li>
        <li className="mb-1">Promoting business by phone, email and face to face</li>
        <li className="mb-1">Collaborated in the development of a Youtube Channel ("Surprise Toys Eggs")</li>
      </ul>
      </div>
    );
  }
  if (label === 'Digitaly') {
    return (
      <div> 
        <p> Role: Web Designer / Commercial Manager</p>
      <ul>
        <li className="my-1">Improved the company website using HTML, CSS, and SEO strategies.</li>
        <li className="mb-1">Assisted in basic accounting: managed invoices and client orders</li>
        <li className="mb-1">Contacted high potential clients by phone and mail to promote our business</li>
        <li className="mb-1">Analyzed government tenders satisfying all the requirements to partecipate </li>
      </ul>
      </div>
    );
  }
  if (label === 'SearchPoint Uk') {
    return (
      <div>
        <p>Role: Web Marketing Assistant</p>
      <ul>
        <li className="my-1">Created and managed Google My Business pages, exceeding daily targets.</li>
        <li className="mb-1">Designed logos and backgrounds using GIMP 2.0.</li>
        <li className="mb-1">Developed and implemented marketing strategies to enhance online presence.</li>
        <li className="mb-1">Contributed to content creation and page layout</li>
      </ul>
      </div>
    );
  }
  if (label === 'Hospitality Industry') {
    return  (
      <div>
        <p>Double Tree by Hilton Leeds / Sport Direct</p>
      <ul>
        <li className="my-1">Delivered a high standard of customer service in fast-paced hospitality and retail settings.</li>
        <li className="mb-1">Assisted with guest reception, car park management, and customer satisfaction initiatives.</li>
      </ul>
      </div>
    );
  }
  if (label === 'Mitek Systems') {
    return (
      <div>
        <p>Role: Identity Verification Analyst</p>
      <ul>
        <li className="my-1">Analyze	300–400 documents daily to verify proof of identity and address.</li>
        <li className="mb-1">Detect and report fraudulent activity to ensure customer security.</li>
        <li className="mb-1">Contribute to delivering high-quality digital access services.</li>
      </ul>
      </div>
    );
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
      </div>
    );
  }
  return null;
};

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

          <ScatterChart
            style={{backgroundColor:"transparent"}}
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

            <Tooltip cursor={{ strokeDasharray: "3 3" }} content={<CustomTooltip />} />
            
            <Scatter
              name="Job Experience"
              data={data}
              fill="var(--primary-color)"
              line shape="rounded"
              style={{ stroke: 'var(--primary-color)', strokeWidth: 3 }}
              className="scatter-point"
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
