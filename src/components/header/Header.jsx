import { motion } from "framer-motion";
import "./header.css";
import { HashLink} from "react-router-hash-link";
import {BsArrowDownCircleFill} from 'react-icons/bs'
import {FiDownload} from 'react-icons/fi'
import cartoonImg from '../../assets/aleksandraCartoon.jpg'
const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};
const Header = () => {
  return (
    <div className="header">
      <motion.div
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 2 }}
        className="header-content"
      >
        <h2>Welcome to my world</h2>
        <p>
          My name is <span>Aleksandra</span> and I build things for the
          <span> WEB</span>.
          </p>
          <div>
            <HashLink to="/#about">
              {" "}
              <BsArrowDownCircleFill /> Meet me
            </HashLink>
            <a href="https://www.dropbox.com/s/6i9sx2qw5kf6elk/CV%20Aleksandra%20Grubor.pdf?dl=0">
              {" "}
              <FiDownload /> Resume
            </a>
          </div>
    
      </motion.div>
      <div className="header-img">
        <img loading='lazy' src={cartoonImg} alt="cartoonImgAleksandra" />
      </div>
    </div>
  );
};

export default Header;
