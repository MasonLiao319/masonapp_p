import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/banner-bg.png";

const CustomLeftArrow = ({ onClick }) => {
  return <div className="custom-left-arrow" onClick={onClick} />;
};

const CustomRightArrow = ({ onClick }) => {
  return <div className="custom-right-arrow" onClick={onClick} />;
};

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>Below are the skills I have acquired and my proficiency levels in each.<br></br>Use the arrows to navigate through all the skills and see more details about my expertise.</p>
              <Carousel 
                responsive={responsive} 
                infinite={true} 
                className="owl-carousel owl-theme skill-slider"
                customLeftArrow={<CustomLeftArrow />}
                customRightArrow={<CustomRightArrow />}
              >
                <div className="item">
                  <img src={meter1} alt="95" />
                  <h5>Web Design</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="95" />
                  <h5>Web Development</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="95" />
                  <h5>Java</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="95" />
                  <h5>Python</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="90" />
                  <h5>C++</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="80" />
                  <h5>C#</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="color" />
    </section>
  );
}
