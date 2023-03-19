<style>

.cards {
  display: flex;
  flex-grow: 1;
  justify-content: start;
  align-items: center;
  padding: 25px 0;
  flex-wrap: wrap;
  gap: 20px;
  margin: auto;
}

.card {
  cursor: pointer;
  width: 250px !important;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background: var(--bg-color);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.20);
  scroll-snap-align: start;
  transition: all 0.2s;
}

.card:hover {
  scale: 1.05;
  box-shadow: 6px 6px 6px 0 rgba(0, 0, 0, 0.2),
  -6px -6px 12px 0 rgba(255, 255, 255, 0.5);
}

.card .card-title {
  font-size: 1.5rem;
}

.card {
  overflow: hidden;
  padding: 10px;
}

.round {
  width: 150px !important;
  object-fit: cover !important;
  position: relative;
  top: 10px;
  height: 150px !important;
}

.card .round {
  border: 2px solid var(--persian-orange);
  padding: .35rem;
}

.card-content p {
  font-size: 1.3rem
}


@media (min-width: 1100px) {
  .card {
    flex-basis: calc(20%);
  }
}

@media (max-width: 600px) {
  .cards {
    justify-content: center !important;
    margin: auto !important;
  }
}


</style>
<template>
  <div class="container" style="max-width: 80vw; margin: auto">
    <h2 style="text-align: left">The team members of CyberSec</h2>
    <p style="text-align: left">[Each member specializes on a subject, but we all make it happen together!]</p>
    <ul class="cards">
      <li class="card">
        <div style="margin-top: 5px">
          <img alt="user" class="round" src="./alex.jpeg"/>
          <h3 class="card-title">Alexandros Kourtis</h3>
          <div class="card-content">
            <p>Web</p>
          </div>
        </div>
      </li>
      <li class="card">
        <div style="margin-top: 5px">
          <img alt="user" class="round" src="./michael.jpg"/>
          <h3 class="card-title">Michael Strintzis</h3>
          <div class="card-content">
            <p>TBA</p>
          </div>
        </div>
      </li>
      <li class="card">
        <div style="margin-top: 5px">
          <img alt="user" class="round" src="./pinelopi.jpg"/>
          <h3 class="card-title">Pinelopi (Deyonna) Gkinala</h3>
          <div class="card-content">
            <p>PWN & RE</p>
          </div>
        </div>
      </li>
      <li class="card">
        <div style="margin-top: 5px">
          <img alt="user" class="round" src="./epit.png"/>
          <h3 class="card-title">Epitidios</h3>
          <div class="card-content">
            <p>Μεταξύ κατεργαρέων, ειλικρίνεια</p>
          </div>
        </div>
      </li>
      <li class="card">
        <div style="margin-top: 5px">
          <img alt="user" class="round" src="./cereal.jpg"/>
          <h3 class="card-title">Nikol</h3>
          <div class="card-content">
            <p>Forensics</p>
          </div>
        </div>
      </li>
      <li class="card">
        <div style="margin-top: 5px">
          <img alt="user" class="round" src="./cereal.jpg"/>
          <h3 class="card-title">Nikol</h3>
          <div class="card-content">
            <p>OSINT</p>
          </div>
        </div>
      </li>
      <li class="card">
        <div style="margin-top: 5px">
          <img alt="user" class="round" src="./ghost.png"/>
          <h3 class="card-title">Manos Karageorgiou</h3>
          <div class="card-content">
            <p>Misc</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
