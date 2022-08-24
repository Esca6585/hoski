<template>
  <section class="gallery">
    <h1 class="gallery__text">
      Check out these success stories
    </h1>
    <div class="gallery__wrapper">
      <div class="gallery__box">
        <div class="gallery__background"></div>
        <img src="@/public/Beri Cheetham_Dormeo.png" alt="">
        <h2>Dormeo</h2>
        <p>Beri Cheetham</p>
      </div>
      <div class="gallery__box">
        <div class="backgorund"></div>
        <img src="@/public/Sahar-Sircar_Fancii.png" alt="">
        <h2>FANCII</h2>
        <p>Sahar Sircar</p>
      </div>
      <div class="gallery__box">
        <div class="gallery__background"></div>
        <img src="@/public/Romans Ivanovs_RIU Media.png" alt="">
        <h2>RIU MEDIA</h2>
        <p>Romans Ivanovs</p>
      </div>
      <div class="gallery__box">
        <div class="backgorund"></div>
        <img src="@/public/Leon Reyes_Swati.png" alt="">
        <h2>SWATI</h2>
        <p>Leon Reyes</p>
      </div>

    </div>
    <div class="gallery__container">
      <div class="gallery__item">
        <div class="item__background"></div>
        <img src="@/public/Courtney Alexander_Alexander marketing Solutions.png" alt="">
        <h2>AMS</h2>
        <P>Courtney Alexander</P>
      </div>
      <div class="gallery__item">
        <div class="gal__background"></div>
        <img src="@/public/Joel Kaplan_Agency Lab.png" alt="">
        <h2>AGENCY LAB</h2>
        <P>Joel Kaplan</P>
      </div>
      <div class="gallery__item">
        <div class="item__background"></div>
        <img src="@/public/Saladin J McClain_CNR Digital.png" alt="">
        <h2>CNR</h2>
        <P>Saladin J McClain</P>
      </div>
      <div class="gallery__item">
        <div class="gal__background"></div>
        <img src="@/public/Mordechai Arba_EcomHunt.png" alt="">
        <h2>ECOMHUNT</h2>
        <P>Mordechai Arabia</P>
      </div>
    </div>
  </section>
</template>

<style>
  .gallery__wrapper {
    display: flex;
    flex-wrap: wrap;
    position: relative;
    bottom: 265px;
    max-width: 1921px;
    margin: 0 auto;
  }

  .gallery__box {
    flex: 1 1 1rem;
    position: relative;
    height: 100%;
    overflow: hidden;

  }

  .gallery__box img {
    width: 100%;
    height: 700px;
    object-fit: cover;
    overflow: hidden;
    position: relative;

  }

  .gallery__background:hover {
    background-color: #ff4954;
    position: absolute;
    background-image: url('../public/normalstate.png');
    background-repeat: no-repeat;
    background-position: center;
    transition: 1s ease-in;
    opacity: 0.5;

  }

  .backgorund:hover {
    background-color: #ff4954;
    position: absolute;
    background-image: url('../public/normalstate.png');
    background-repeat: no-repeat;
    background-position: center;
    transition: 1s ease-in;
    opacity: 0.5;
  }

  .gal__background:hover {
    background-color: #ff4954;
    position: absolute;
    background-image: url('../public/normalstate.png');
    background-repeat: no-repeat;
    background-position: center;
    transition: 1s ease-in;
    opacity: 0.5;
  }

  .item__background:hover {
    background-color: #ff4954;
    position: absolute;
    background-image: url('../public/normalstate.png');
    background-repeat: no-repeat;
    background-position: center;
    transition: 1s ease-in;
    opacity: 0.5;
  }

  .gallery__background {
    width: 100%;
    height: 700px;
    background: #3666e0;
    position: absolute;
    z-index: 11;
    opacity: 0.6;
  }

  .backgorund {
    width: 100%;
    height: 700px;
    background: #2b8194;
    position: absolute;
    z-index: 11;
    opacity: 0.7;
  }

  .gallery__box h2 {
    position: absolute;
    bottom: 5rem;
    font-size: 1rem;
    color: white;
    font-size: 50px;
    padding: 18px;
    border-radius: 0.5rem;
  }

  .gallery__box p {
    color: white;
    position: absolute;
    bottom: 5rem;
    left: 1.5rem;
  }

  .gallery__container {
    display: flex;
    flex: wrap;
    position: relative;
    bottom: 255px;
    margin: 0 auto;
    max-width: 1921px;
  }

  .gallery__item {
    flex: 1 1 17rem;
    position: relative;
    height: 100%;
    overflow: hidden;
    bottom: 15px;
  }

  .gallery__item img {
    width: 100%;
    height: 350px;
    object-fit: cover;
    overflow: hidden;

  }

  .item__background {
    width: 100%;
    height: 350px;
    background: #2b8194;
    position: absolute;
    z-index: 11;
    opacity: 0.7;
  }

  .gal__background {
    width: 100%;
    height: 350px;
    background: #3666e0;
    position: absolute;
    z-index: 11;
    opacity: 0.7;
  }

  .gallery__item h2 {
    position: absolute;
    bottom: 0.5rem;
    font-size: 1rem;
    color: white;
    font-size: 50px;
    padding: 18px;
    border-radius: 0.5rem;
  }

  .gallery__item p {
    color: white;
    position: absolute;
    bottom: 0.5rem;
    left: 1.5rem;
  }

  .gallery__text {
    color: white;
    font-size: 112px;
    position: relative;
    top: 50px;
    z-index: 14;
    width: 50%;
    max-width: 1921px;
    margin: 0 auto;
  }

</style>
