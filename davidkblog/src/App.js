import "./App.css";
import "./style.css";

function App() {
  return (
    <div className="app">
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

      <section className="header">
        <nav>
          <div className="wrapper">
            <a href="index.html">
              <figure>
                <div className="hover-ani">
                  <img
                    src="./images/logo.png"
                    className="img-back"
                    alt=""
                  ></img>
                  <img
                    src="./images/logoOn.png"
                    className="img-front"
                    alt=""
                  ></img>
                </div>
              </figure>
            </a>
          </div>
          <div className="nav-links" id="navLinks">
            <i className="fa fa-times" onclick="hideMenue()"></i>
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
          <i className="fa fa-bars" onclick="showMenu()"></i>
        </nav>
        <div className="text-box">
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
    </div>
  );
}

export default App;
