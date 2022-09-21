import "./style.css";
import logoOff from ".//images/logo.png";
import logoOn from ".//images/logoOn.png";
import htmlLogo from ".//images/html.png";
import cssLogo from ".//images/css.png";
import javascriptLogo from ".//images/javascript.png";
import javaLogo from ".//images/java.png";
import pythonLogo from ".//images/python.png";
import cPlusLogo from ".//images/cplus.png";
import githubLogo from ".//images/github.png";

function About() {
  return (
    <div className="about">
      <head>
        <meta
          name="viewport"
          content="with=device-width, initial-scale=1.0"
        ></meta>
        <title>David Kan's Blog</title>
        <link rel="stylesheet" href="./style.css"></link>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin
        ></link>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600;1,700&display=swap"
        ></link>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        ></link>
      </head>

      <section className="sub-header">
        <nav>
          <a href="./App.js">
            <figure>
              <div class="hover-ani">
                <img src={logoOn} className="img-back" alt=""></img>
                <img src={logoOff} className="img-front" alt=""></img>
              </div>
            </figure>
          </a>
          <div className="nav-links" id="navLinks">
            <i class="fa fa-times" onclick="hideMenu()"></i>
            <ul>
              <li>
                <a href="App.js">HOME</a>
              </li>
              <li>
                <a href="about.js">ABOUT</a>
              </li>
              <li>
                <a href="blog.html">BLOG</a>
              </li>
              <li>
                <a href="photography.html">PHOTOGRAPHY</a>
              </li>
              <li>
                <a href="music.html">MUSIC</a>
              </li>
              <li>
                <a href="contact.html">CONTACT</a>
              </li>
            </ul>
          </div>
          <i class="fa fa-bars" onclick="showMenu()"></i>
        </nav>
        <h1>About Me</h1>
      </section>

      {/* ------Details-------- */}

      <section className="details">
        <h1>About Me</h1>
        <p>
          Hello World! My name is David Kan; I am a 17-year-old high school
          student based in Atlanta with <br> </br>several seemingly unrelated
          hobbies and interests trying to get into the field of computer
          science.
        </p>

        <h1>
          <br></br> My Interests{" "}
        </h1>
        <div className="row">
          <div className="details-col">
            <h3>Computer Science</h3>
            <p>
              I first became interested in computer science back in 2018, the
              summer following 7th grade, when I built my current gaming
              desktop. I remember the months spent doing research on parts and
              how to assemble them into a miraculous machine that could do
              seemingly everything. Ever since then, I've been hooked with my
              passion only getting stronger after seeing and understanding how
              websites are designed and function.
            </p>
          </div>
          <div className="details-col">
            <h3>Photography/ Digital Design</h3>
            <p>
              I've always been facinated with the ability to capture moments in
              time that cameras have given us. This facination was only
              intensified when I learned photo and video editing. This can be
              seen in the pictures I take, the spotify playlist cover art I
              create and use, and even the logo on this website! I also really
              enjoy creating user interactions like the ones showcased on this
              website such as making my logo light up on mouse hover, or
              creating a navigation menu that turns into a hamburger menu for
              smaller displays.
            </p>
          </div>
          <div className="details-col">
            <h3>Music</h3>
            <p>
              Music has been a constant for me my whole life, from when I was
              playing it on the piano and viola to listening to it in my spare
              time. My Spotify Premium subscription has become something I
              wouldn't be able to live without. From lyrical story telling to
              just feel good music you can bump your head to, music has become
              an integral part of how I experience the world. While my
              lackluster highschool orchestra has made me lose passion about
              performing in one, my love for piano has been rekindled and I hope
              to relearn it this coming spring semester after finishing my
              college applications.
            </p>
          </div>
        </div>
      </section>

      {/* ----skills------ */}

      <section className="skills">
        <h1>Skills</h1>
        <div className="row">
          <div className="skills-col">
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/HTML/Reference"
              target="_blank"
              rel="no=referrer"
            >
              <img src={htmlLogo} alt=""></img>
            </a>
            <div className="layer">
              <h2>HTML</h2>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
