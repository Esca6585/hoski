<template>
  <footer class="footer">
    <div class="footer__wrapper">
      <div class="footer__container">
        <div class="footer__brand">
          <a href="#" class="footer__logo">
            <img src="../public/Footer Logo.png" alt="">
          </a>
          <ul class="social__link ">
            <li class="social__list">
              <a href="#">Facebook</a>
            </li>
            <li class="social__list">
              <a href="#">Instagram</a>
            </li>
            <li class="social__list">
              <a href="#">Linkedin</a>
            </li>
          </ul>
          <div class="footer__media__link">
            <h4 class="media__link">Hoski Media ©2022</h4>
          </div>
        </div>
        <div class="footer__address">
          <h4 class="addresss">ADDRESS:</h4>
          <address>#172 3551 St Charles Blvd,
            Kirkland
            Qc Canada H0H 3C4</address>
        </div>
        <div class="footer__content">
          <div class="footer__flex">
            <ul class="contnet__link">
              <h5 class="sitemap">SITEMAP:</h5>

              <li class="content__list">Case Studies</li>
              <li class="content__list">Portfolio</li>
              <li class="content__list">Team</li>
              <li class="content__list">About Us</li>
            </ul>

          </div>
          <ul class="contnet__link">


            <li class="content__list">Blog</li>
            <li class="content__list">Jobs</li>
            <li class="content__list">Privacy Policy</li>
            <li class="content__list">Terms & Conditions</li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<style>
  .footer__wrapper {
    background-color: #3eb7d3;
    max-width: 2400px;
    margin: 0 auto;
  }

  .footer__social {
    display: flex;
    list-style: none;
    padding-left: 5px;
  }

  .social__link {
    margin-top: 15px;
    color: white;
    display: flex;
    list-style: none;

  }

  .footer__brand {
    width: 30%;
    margin-top: 10px;
  }

  .social__list a {
    margin-left: 25px;
    text-decoration: none;
    color: white;

  }

  .footer__logo {
    margin-left: 25px;
  }

  .footer__media__link {
    margin-top: 25px;
    margin-left: 25px;
    color: white;
    font-size: 20px;
    font-weight: bold;
  }

  .footer__container {
    display: flex;
    justify-content: space-between;
  }

  .footer__address {
    width: 30%;

    margin-top: 10px;

    font-size: 22px;
  }

  .addresss {
    font-weight: bold;
    font-size: 22px;
  }

  address {
    max-width: 37%;
    font-size: 22px;
    color: black;
    font-weight: 300;
    margin-top: 30px;
    font-weight: bold;
  }

  .footer__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 30%;

  }

  .contnet__link {
    list-style: none;
    width: 25%;
    margin-bottom: 25px;

  }

  .content__list {
    font-weight: bold;
    font-size: 20px;
  }

  .sitemap {
    margin-bottom: 15px;
    font-size: 22px;
    color: black;
    font-weight: bold;

  }

</style>
