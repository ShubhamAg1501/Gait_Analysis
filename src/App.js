import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
    <header>
      <nav className="navbar">
        <div className="logo"><i className="bi bi-code-slash"></i> GAIT Analysis</div>
        <input type="checkbox" name="check" id="check" />
        <label for="check" id="checkbtn"><i className="bi bi-list"></i></label>
        <ul className="menu-items">
          <li><a href="#hero">Home</a></li>
          <li><a href="#features">About</a></li>
          <li><a href="videos.html">Videos</a></li>
          <li><a href="#contact">Contact Us</a></li>
          <li><a href="signup.html">Signup</a></li>
          <li><a href="login.html">Login</a></li>
        </ul>
      </nav>
    </header>
    <section id="hero">
      <div className="text">
        <h1>Why Gait Analysis is important?</h1>
        <p>
          Gait analysis is vital for injury prevention, diagnosis, and rehabilitation by identifying abnormal movement patterns. It enhances performance in sports, customizes orthotic devices, and monitors progress effectively. This tool aids in research and development, offering valuable insights into biomechanics and healthcare. By optimizing movement efficiency, gait analysis improves quality of life, enables tailored treatments, and fosters advancements in understanding human motion.  
        </p>
        <button>Upload a video</button>
      </div>
      <div className="img">
        <img src="./img/hero-bg.svg" alt="" />
      </div>
    </section>
    <section id="features">
      <div className="content">
        <p>About</p>
        <h2>Correct analysis of the posture</h2>
        <img src="./img/features.png" alt="" />
      </div>
      <div className="cards">
        <div className="card">
          <i className="bi bi-check"></i>
          <h3>Injury Prevention</h3>
        </div>
        <div className="card">
          <i className="bi bi-check"></i>
          <h3>Diagnostic Tool</h3>
        </div>
        <div className="card">
          <i className="bi bi-check"></i>
          <h3>Performance Enhancement</h3>
        </div>
        <div className="card">
          <i className="bi bi-check"></i>
          <h3>Orthotic Devices</h3>
        </div>
        <div className="card">
          <i className="bi bi-check"></i>
          <h3>Monitoring progress</h3>
        </div>
        <div className="card">
          <i className="bi bi-check"></i>
          <h3>R & D</h3>
        </div>
      </div>
    </section>

    <section id="contact">
      <div className="content">
        <p>Contact</p>
        <h2>Contact Us</h2>
      </div>
      <form action="" method="get" accept-charset="utf-8">
        <label for="name">Your Name</label>
        <input type="text" name="name" id="name" value="" />
        <label for="email">Your Email</label>
        <input type="email" name="email" id="email" value="" />
        <label for="subject">Subject</label>
        <input type="text" name="subject" id="subject" value="" />
        <label for="message">Message</label>
        <textarea name="message" id="message" rows="8" cols="40"></textarea>
        <button type="submit">Send</button>
      </form>
    </section>
    <footer>
      <div className="footer-content">
        <h3><i className="bi bi-code-slash"></i> BITS Pilani</h3>
        <p>
          Website made under the guidance of Dr. Tathagata Ray Sir along with Shubham Agrawal and Harshit Agarwal
        </p>
        <ul className="socials">
          <li>
            <a href="#"><i className="bi bi-facebook"></i></a>
          </li>
          <li>
            <a href="#"><i className="bi bi-twitter"></i></a>
          </li>
          <li>
            <a href="#"><i className="bi bi-github"></i></a>
          </li>
          <li>
            <a href="#"><i className="bi bi-youtube"></i></a>
          </li>
          <li>
            <a href="#"><i className="bi bi-linkedin"></i></a>
          </li>
        </ul>
      </div>
    </footer>
  </div>
  );
}

export default App;
