
/* const getIntroOfPage = (label) => {
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
}; */

 /*   <ScatterChart
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
          </ScatterChart> */