<style>
#router-link {
  display: inline-block;
  width: 100%;
}

@media (max-width: 700px) {
  #cyberlogo {
    display: none;
  }
}

@media (max-width: 600px) {
  .container h2 {
    padding-top: 30px !important;
  }
}

.twitterwrapper {
  margin-bottom: 10px !important;
}
</style>
<template>
  <div class="contentwrapper" style="max-width: 80vw; margin: auto; text-align: left">
    <h1>CyberSec</h1>
    <p>[Cracking the web one bit at a time]</p>
    <hr>
    <h3 style="margin-bottom: 0">About us</h3>
    <div style="display: flex; justify-content: left; align-content: center; align-items: center; margin-top: 0;">
      <h3 style="font-weight: normal; margin-right: 20px;">
        CyberSec is a team that originated in <a href="https://dccyberclub.com">Cyber Club @ ACG.</a> It's a
        cybersecurity team that participates in CTF competitions. It was founded in 2022.
        The Cyber Club is open to all students who are interested in the IT field. It aims to cultivate a community of
        motivated individuals who are passionate about technology and want to enrich their academic and student-life
        experience at Deree.
      </h3>
      <div style="height: 150px;">
        <img id="cyberlogo" alt="" src="../cyberseclogotrans.png"
             style="object-fit: cover; height: 100%;">
      </div>
    </div>
    <div class="buttons">
      <router-link id="router-link" style="width: 160px !important;" to="/members">
        <div id="membersbtn" style="width: 160px !important;">
          <button
              style="background: #202020; border: 1px solid #EDEADE; border-radius: 4px; padding: 11px; color: #3DE60C; font-weight: bold">
            <i
                aria-hidden="true" class="fa fa-users"></i>
            Members
          </button>
        </div>
      </router-link>
    </div>
  </div>
</template>
