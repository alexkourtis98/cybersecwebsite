<style>
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
          <router-link to="/cybersecwebsite/">
            <li>
              Home
            </li>
          </router-link>
          <router-link to="/cybersecwebsite/members">
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
                       src="./linkedin.png"
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

