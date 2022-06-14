import styles from '../About/About.module.css';
import { Link } from 'react-router-dom';
const About = () => {
  return (
    <div className={styles.about}>
      <h2>
        Sobre o Mini <span>Blog</span>
      </h2>
      <p>
        Este projeto consiste em um blog feito com React no front-End e FireBase
        no back-end.
      </p>

      <Link to="/posts/create" className="btn">
        Criar Post
      </Link>
    </div>
  );
};

export default About;
