import React from "react";
import Banner5 from '../images/banner5.jpeg'
import Layout from "../layouts/Layout";
const About = () => {
  return (
    <>
    <Layout>
      <div className="container about-us-main-component">
        <div className="row">
          <h1>About Sheetla</h1>
          <div className="chairman-message ">
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
              <div className="chairman-image">
                <img src={Banner5} alt="chairman_image"></img>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
              <div className="chairman-message-display">
                <p>
                  This is an institution which was started in 2020 . In this
                  institute we help our student in the computer langauge and
                  programs . As we have seen in recent years 21st century is the
                  century of knowledge in which revoutionary changes are taking
                  place in the world of higher education in general and
                  professional education in particular. Latest technologies
                  changes have made not only our world but whole of this
                  universe look like a small village where we can watch the
                  happenings of the space on T.V. in the blink of eye. The
                  technical and computer Training in INDIA aims at devloping
                  skilled manpower through various courses to meet the
                  requirements of the today's industries and to prepare people
                  for their bright future. We felt a treamendous scope and
                  opportunity to expand this special eductaion through our study
                  center in various parts of the country and thus providing
                  ample procpect to our students for their bright future.
                  Loopking forward to a long term and manually benficial
                  business association which can give us self satisfacation.
                  With due respect i thank all the students, parents and
                  teachers for their contribution for this SHEETLA INSTITUTION
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </Layout>
    </>
  );
};

export default About;
