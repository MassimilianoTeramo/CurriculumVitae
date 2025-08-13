import { Col } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import JobExperience from "../jobEx.json";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";



function Experience(){

    //display the job experience in reverse order for the sm devices
    const reversedJobs = [...JobExperience].reverse();

    return (
      <div className="job-experience">
        <Swiper
          className="myswiper ms-4"
          initialSlide={4}
          modules={[EffectCoverflow, Autoplay]}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          speed={600}
          coverflowEffect={{
            rotate: 0,
            stretch: 7,
            depth: 100,
            modifier: 3,
            slideShadows: false,
          }}
          loop={true}
          pagination={{ clickable: true }}
          slidesPerView="auto"
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            391: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 5,
            },
            1560: {
              slidesPerView: 5,
            },
          }}
        >
          {reversedJobs.map((job, index) => (
            <SwiperSlide key={index} className="mb-3">
              <Card key={index} className="mb-3 card-experience p-0">
                <Card.Header className="bg-dark text-white " style={{ position: "sticky", top: 0 }}>
                  <strong>{job.jobTitle}</strong> <br /> @ {job.company}
                </Card.Header>
                <Card.Body>
                  <Card.Text>
                    <bold style={{ color: "black" }}>From: {job.startDate} To: {job.endDate}</bold>
                  </Card.Text>
                 
                    <div>
                        <ul style={{ color: "black" }}>
                      {job.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="mb-2">{responsibility}</li>
                      ))}
                    </ul>
                    </div>
                </Card.Body>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
        <Col className="text-center mt-4 jobExperience-sm">
          {reversedJobs.map((job, index) => (
            <Card key={index} className="mb-3 card-experience p-0">
              <Card.Header className="bg-dark text-white" style={{ position: "sticky", top: 0 }}>
                <strong>{job.jobTitle}</strong> <br /> @ {job.company}
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  <bold style={{ color: "black" }}>From: {job.startDate} To: {job.endDate}</bold>
                </Card.Text>
                <div>
                  <ul style={{ color: "black" }}>
                    {job.responsibilities.map((responsibility, idx) => (
                      <li key={idx} className="mb-2">{responsibility}</li>
                    ))}
                  </ul>
                </div>
              </Card.Body>
            </Card>
          ))}
        </Col>
      </div>
    );
}

export default Experience;