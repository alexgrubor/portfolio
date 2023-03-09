import { education } from "../constants";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import {motion} from "framer-motion"
import { textVariant } from "../utils/motion";
import { styles } from "../styles";


const Education = () => {
  return (
    <div>
       <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have learn so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Education Experience.
        </h2>
      </motion.div>
      <div className="relative z-0">
        <div className="flex justify-center items-center">
          <div className="w-[90%]">
            <VerticalTimeline>
              {education.map((edu, index) => (
                <VerticalTimelineElement
                  key={`edu-${index}`}
                  contentStyle={{
                    background: "#1d1836",
                    color: "#010101",
                  }}
                  contentArrowStyle={{ borderRight: "7px solid  #232631" }}
                  date={edu.date}
                  iconStyle={{ background: edu.iconBg }}
                >
                  <h3 className="vertical-timeline-element-title text-white">
                    {edu.title}
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    {edu.degree}
                  </h4>
                  <p 
                  className="flex flex-col "
                  >
                    {edu.points.map((points, index) => {
                      return (
                        <span className="block text-sm text-gray-400" key={index + Math.random()}>
                          &#9210; {points}

                        </span>
                      );
                    })}
                  </p>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
