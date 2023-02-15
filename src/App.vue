<style>
:root {
}

html, body {
  background-color: #202020;
}

* {
  color: #EDEADE;
}

#menuToggle {
  display: block;
  position: fixed;
  top: 50px;
  right: 50px;
  z-index: 1;
  -webkit-user-select: none;
  user-select: none;
}

#menu * {
  color: #232323;
}

#menu *:hover {
  color: #3DE60C !important;
  font-weight: bold;
}

#menuToggle a {
  text-decoration: none;
  transition: color 0.3s ease;
}

#menuToggle a:hover {
}

#menuToggle input {
  display: block;
  width: 40px;
  height: 32px;
  position: absolute;
  top: -7px;
  cursor: pointer;
  opacity: 0;
  z-index: 2;
  -webkit-touch-callout: none;
}

#menuToggle span {
  display: block;
  width: 33px;
  height: 4px;
  margin-bottom: 5px;
  position: relative;
  background: #cdcdcd;
  border-radius: 3px;
  z-index: 1;
  transform-origin: 4px 0;
  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1.0),
  background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1.0),
  opacity 0.55s ease;
}

#menuToggle span:first-child {
  transform-origin: 0 0;
}

#menuToggle span:nth-last-child(2) {
  transform-origin: 0 100%;
}

#menuToggle input:checked ~ span {
  opacity: 1;
  transform: rotate(45deg) translate(-2px, -1px);
  background: #232323;
}

#menuToggle input:checked ~ span:nth-last-child(3) {
  opacity: 0;
  transform: rotate(0deg) scale(0.2, 0.2);
}

#menuToggle input:checked ~ span:nth-last-child(2) {
  transform: rotate(-45deg) translate(0, -1px);
}

#menu {
  position: fixed;
  width: 200px;
  text-align: left;
  margin: -100px 0 0 -50px;
  padding: 125px 50px 50px;
  background: #ededed;
  list-style-type: none;
  -webkit-font-smoothing: antialiased;
  transform-origin: 0 0;
  transform: translate(100%, 0);
  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1.0);
}

#menu li {
  padding: 10px 0;
  font-size: 22px;
}

#menuToggle input:checked ~ ul {
  transform: translate(-150px, 0);
}

#membersbtn * {
  cursor: pointer !important;
}

#twitter-widget-0, #twitter-widget-1 {
  height: 250px !important;
}

.linkswrapper ul li {
  list-style-type: none;
  display: inline-block;
  margin-left: 15px;
}

.linkswrapper {
  text-align: left;
}

.linkswrapper ul {
  margin: 0 !important;
  padding: 0 !important;;
}

.twitterwrapper {
  width: 400px;
  height: 250px;
  float: right;
}

/* Media Query */
@media (max-width: 700px) {
  .footerwrapper {
    width: 100vw;
  }

  .footerwrapper .contents {
    display: block !important;
  }

  .contents .twitterwrapper {
    width: 100% !important;
    display: block !important;
  }

  .contents .linkswrapper {
    display: block !important;
    width: 100% !important;
    text-align: left !important;
  }
}

@media (min-width: 1100px) {
  .card {
    flex-basis: calc(30% - 10px);
  }
}

</style>
<template>
  <nav>
    <nav role="navigation">
      <div id="menuToggle">
        <input type="checkbox"/>
        <span></span>
        <span></span>
        <span></span>
        <ul id="menu">
          <router-link to="/">
            <li>
              Home
            </li>
          </router-link>
          <router-link to="/members">
            <li>
              Members
            </li>
          </router-link>
          <a href="https://dccyberclub.com">
            <li>Cyber Club</li>
          </a>
        </ul>
      </div>
    </nav>
  </nav>
  <main>
    <router-view/>
  </main>
  <br>
  <footer>
    <div class="footerwrapper" style="margin: auto; max-width: 80vw">
      <div class="titles" style="display: flex; justify-content: space-between;">
        <h4>Twitter posts</h4>
        <h4>Connect with us</h4>
      </div>
      <div class="contents" style="display: flex; justify-content: space-between; align-content: end">
        <div class="twitterwrapper">
          <section style="height: 250px;">
            <a class="twitter-timeline" href=
                "https://twitter.com/CyberClubDeree">
            </a>
          </section>
        </div>
        <div class="linkswrapper">
          <ul>
            <a href="https://www.youtube.com/@cyberclubderee">
              <li>
                <div class="imgwrappersocialicon" style="width: 40px; height: 40px; margin: auto">
                  <img alt="" src="https://cdn.cdnlogo.com/logos/y/57/youtube-icon.svg"
                       style="object-fit: cover; width: 100%; height: 100%;">
                </div>
              </li>
            </a>
            <a href="https://twitter.com">
              <li>
                <div class="imgwrappersocialicon" style="width: 40px; height: 40px; margin: auto">
                  <img alt="" src="https://cdn-icons-png.flaticon.com/512/124/124021.png"
                       style="object-fit: cover; width: 100%; height: 100%;">
                </div>
              </li>
            </a>
            <a href="https://www.instagram.com/deree_cyber_club/">
              <li>
                <div class="imgwrappersocialicon" style="width: 40px; height: 40px; margin: auto">
                  <img alt=""
                       src="https://www.transparentpng.com/download/logo-instagram/N0iIUX-logo-instagram-transparent-hd.png"
                       style="object-fit: cover; width: 100%; height: 100%;">
                </div>
              </li>
            </a>

            <a href="https://www.linkedin.com/groups/9303214/">
              <li>
                <div class="imgwrappersocialicon" style="width: 40px; height: 40px; margin: auto">
                  <img alt=""
                       src="https://assets.stickpng.com/images/58e91afdeb97430e81906504.png"
                       style="object-fit: cover; width: 100%; height: 100%;">
                </div>
              </li>
            </a>

            <a href="https://www.facebook.com/profile.php?id=100090099947594&sk=about_privacy_and_legal_info">
              <li>
                <div class="imgwrappersocialicon" style="width: 40px; height: 40px; margin: auto">
                  <img alt=""
                       src="https://www.freeiconspng.com/uploads/photos-facebook-logo-png-transparent-background-13.png"
                       style="object-fit: cover; width: 100%; height: 100%;">
                </div>
              </li>
            </a>
          </ul>
        </div>
      </div>
      <br>
      <hr>
      <div class="copyright">
        <p style="text-align: left">@ 2023. All rights reserved | <a href="https://dccyberclub.com">Cyber Club</a> | <a
            href="mailto:alexandros.kourtis@acg.edu">Alexandros Kourtis</a></p>
      </div>
    </div>
  </footer>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

