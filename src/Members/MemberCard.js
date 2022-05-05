import "./MemberCard.css";
import memberpic from './user.png';
import { FaGithub, FaInstagram, FaLink, FaLinkedin } from 'react-icons/fa'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function MemberCard(props) {
  return (
    <div className="card">
      <div className="person-img grid-item">
        <img src={memberpic} alt="" />
      </div>
      <div className="person-info grid-item">
        <h3 className="full-name">{props.name}</h3>
        <p className="designation">{props.designation}</p>
      </div>
      <div className="person-social">
        <ul className="list-social">
          <li><a href={props.gitlink} target="_blank"><FaGithub className="icon" /></a></li>
          <li><a href={props.instalink} target="_blank"><FaInstagram className="icon"/></a></li>
          <li><a href={props.linkedinlink} target="_blank"><FaLinkedin className="icon"/></a></li>
          <li><a href={props.link} target="_blank"><FaLink className="icon"/></a></li>
          
        </ul>
      </div>
    </div>
  );
}




export default MemberCard;
