import './Background.css';
import bgc from '../assets/bgc.png';
import bgo from '../assets/bgo.png';

const Background = ({ theme }) => {
  return (
    <div className="background-container">
      <img
        src={bgc}
        alt="Fondo claro"
        className={`background-img ${theme === 'light' ? 'active' : ''}`}
      />
      <img
        src={bgo}
        alt="Fondo oscuro"
        className={`background-img ${theme === 'dark' ? 'active' : ''}`}
      />
    </div>
  );
};

export default Background;
