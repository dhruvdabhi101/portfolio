import React from 'react'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"


const Exp = () => {
    return (
      <div className="bg-[#0a192f] w-full h-full text-gray-300 " name="exp" >
        <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
          <div>
            <p className=" text-4xl font-bold inline border-b-4 border-pink-600">
              Expirience
            </p>
          </div>
          <VerticalTimeline className='-z-0 md:z-0'>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "#0A192F",
                color: "rgb(209 213 219)",
              }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(33, 150, 243)",
              }}
              date="April, 2022 - present"
              iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
              // icon={<WorkIcon />}
            >
              <h3 className="vertical-timeline-element-title">
                GeeksForGeeks Campus Mantri
              </h3>
              <p>Campus Ambassador</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="March, 2022 - May, 2022"
              contentArrowStyle={{
                borderRight: "7px solid  rgb(33, 150, 243)",
              }}
              iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
              contentStyle={{
                background: "#0A192F",
                color: "rgb(209 213 219)",
              }}
              // icon={<WorkIcon />}
            >
              <h3 className="vertical-timeline-element-title">Contributor</h3>

              <p>GirlScript Summer Of Code</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2021 - Present"
              contentArrowStyle={{
                borderRight: "7px solid  rgb(33, 150, 243)",
              }}
              iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
              contentStyle={{
                background: "#0A192F",
                color: "rgb(209 213 219)",
              }}
            >
              <h3 className="vertical-timeline-element-title">
                Computer Engineering
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Bachelor Degree
              </h4>
              <p>Dharmsinh Desai University</p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    );
}

export default Exp