import logoOn from "./images/logoOn.png";
import logoOff from "./images/logo.png";
import "./App.css";
import "./style.css";

function App() {
  return (
    <div className="App">
      <head>
        <meta name="viewport" content="with=device-width, initial-scale=1.0" />
        <title> David Kan's Blog </title>
        <link rel="stylesheet" href="style.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600;1,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </head>
      <body>
        <section className="header">
          <nav>
            <div className="wrapper">
              <a href="index.html">
                <figure>
                  <div class="hover-ani">
                    <img src={logoOff} className="img-back" alt="" />
                    <img src={logoOn} className="img-front" alt="" />
                  </div>
                </figure>
              </a>
            </div>
            <div class="nav-links" id="navLinks">
              <i class="fa fa-times" onclick="hideMenu()"></i>
              <ul>
                <li>
                  <a href="index.html">HOME</a>
                </li>
                <li>
                  <a href="about.html">ABOUT</a>
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

          <div class="text-box">
            <h1>David Kan</h1>
            <p>
              This website was{" "}
              <a
                href="https://github.com/StreetLamp05/Blog"
                class="repo"
                target="_blank"
                rel="noreferrer"
              >
                created
              </a>{" "}
              to serve both as a digital portfolio and a blog.
            </p>
            <a
              href="https://github.com/StreetLamp05"
              target="_blank"
              rel="noreferrer"
              class="hero-btn"
            >
              {" "}
              Visit My GitHub Profile{" "}
            </a>
          </div>
        </section>
      </body>
    </div>
  );
}

export default App;
