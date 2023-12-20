import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { IoSchoolSharp } from "react-icons/io5";
import { MdOutlineWork } from "react-icons/md";

const Experience = () => {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2016 - 2018"
          iconStyle={{ background: "purple", color: "#fff" }}
          icon={<IoSchoolSharp />}
        >
          <h3 className="vertical-timeline-element-title">Call Polly Pomona</h3>
          <p>Bacholor's in Finance, Real Estate, and Law</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2018 - 2019"
          iconStyle={{ background: "green", color: "#fff" }}
          icon={<MdOutlineWork />}
        >
          <h3 className="vertical-timeline-element-title">DOKA USA LTD</h3>
          <p>Inventory Analyst</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2023 - 2023"
          iconStyle={{ background: "green", color: "#fff" }}
          icon={<MdOutlineWork />}
        >
          <h3 className="vertical-timeline-element-title">
            Full Stack Engineer - RadioHeadz
          </h3>
          <p>Radio listening App</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2023 - 2023"
          iconStyle={{ background: "green", color: "#fff" }}
          icon={<MdOutlineWork />}
        >
          <h3 className="vertical-timeline-element-title">
            UCR Cooding Bootcamp
          </h3>
          <p>Certificate of Completion</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2023 - 2023"
          iconStyle={{ background: "green", color: "#fff" }}
          icon={<MdOutlineWork />}
        >
          <h3 className="vertical-timeline-element-title">
            Full Stack Engineer - MyE-shop-3000
          </h3>
          <p>Online Welding Supply Retailer</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Experience;
