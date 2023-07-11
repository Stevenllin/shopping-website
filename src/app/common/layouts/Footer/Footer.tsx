import React from 'react';
import { AiFillGithub } from 'react-icons/ai';

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="footer-container d-flex justify-content-center align-items-center">
        <p className="m-0">To see more side projects, please check my Github</p>
        <a href="https://github.com/Stevenllin" >
          <AiFillGithub className="icons icons-sm icons-main-dark" />
        </a>
      </div>
    </footer>
  )
}

export default Footer;
