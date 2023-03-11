<style>

.cards {
  display: flex;
  flex-grow: 1;
  justify-content: start;
  align-items: center;
  padding: 25px 0;
  flex-wrap: wrap;
  gap: 60px;
}

.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 0 0 100%;
  background: var(--bg-color);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.20);
  box-shadow: 6px 6px 6px 0 rgba(0, 0, 0, 0.2),
  -6px -6px 12px 0 rgba(255, 255, 255, 0.5);
  scroll-snap-align: start;
  transition: all 0.2s;
}

.card:hover {
  scale: 1.05;
}

.card .card-title {
  font-size: 1.5rem;
}

.round {
  width: 100px;
  height: 100px;
}

.card .round {
  border: 2px solid var(--persian-orange);
  border-radius: 50%;
  padding: .35rem;
}

.card .card-content {
  margin: 20px 0;
}

.card-content p {
  font-size: 1.3rem
}

button.primary {
  background-color: var(--color3);
  border: 1px solid var(--color3);
  border-radius: 3px;
  color: var(--white);
  font-family: inherit;
  font-weight: 500;
  padding: 10px 25px;
  margin-top: 1rem;
}

button.primary:hover {
  background: var(--color2);
}

button.primary.ghost {
  background-color: transparent;
  color: var(--color3);
}

button.ghost:hover {
  background: var(--color2);
  color: var(--white);
}

/* Media Query */
@media (min-width: 700px) {
  .card {
    flex-basis: calc(calc(100% / 3) - 20px);
  }
}

@media (min-width: 1100px) {
  .card {
    flex-basis: calc(30% - 10px);
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
            <p>Web Exploitation</p>
          </div>
        </div>
      </li>
      <li class="card">
        <div style="margin-top: 5px">
          <img alt="user" class="round" src="./michael.jpg"/>
          <h3 class="card-title">Michael Strintzis</h3>
          <div class="card-content">
            <p>User Interface Designer</p>
          </div>
        </div>
      </li>
      <li class="card">
        <div style="margin-top: 5px">
          <img alt="user" class="round" src="./haris.jpg"/>
          <h3 class="card-title">Haris Chastoukis</h3>
          <div class="card-content">
            <p>User Interface Designer</p>
          </div>
        </div>
      </li>
      <li class="card">
        <div style="margin-top: 5px">
          <img alt="user" class="round" src="./cereal.jpg"/>
          <h3 class="card-title">Cereal</h3>
          <div class="card-content">
            <p>Reverse Engineering</p>
          </div>
        </div>
      </li>
      <li class="card">
        <div style="margin-top: 5px">
          <img alt="user" class="round" src="./pinelopi.jpg"/>
          <h3 class="card-title">Pinelopi (Deyonna) Gkinala</h3>
          <div class="card-content">
            <p>Cryptography</p>
          </div>
        </div>
      </li>
      <li class="card">
        <div style="margin-top: 5px">
          <img alt="user" class="round" src="./epit.png"/>
          <h3 class="card-title">Epitidios</h3>
          <div class="card-content">
            <p>User Interface Designer</p>
          </div>
        </div>
      </li>
      <li class="card">
        <div style="margin-top: 5px">
          <img alt="user" class="round" src="./241335002_149230457370724_3976215612855430451_n.jpg"/>
          <h3 class="card-title">Chris Kalos</h3>
          <div class="card-content">
            <p>Binary Exploitation (PWN)</p>
          </div>
        </div>
      </li>
      <li class="card">
        <div style="margin-top: 5px">
          <img alt="user" class="round" src="./ghost.png"/>
          <h3 class="card-title">Manos Karageorgiou</h3>
          <div class="card-content">
            <p>Forensics</p>
          </div>
        </div>
      </li>

      <li class="card">
        <div style="margin-top: 5px">
          <img alt="user" class="round" src="./meletios.jpg"/>
          <h3 class="card-title">Meletios Flevarakis</h3>
          <div class="card-content">
            <p>Steganography</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
