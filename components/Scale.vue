<template>
  <section class="scale">
    <div class="scale__wrapper">
      <div class="scale__box">
        <div class="scale__item">
          <h1 class="scale__text">
            Scale Your
          </h1>

          <h2 class="scale__title">
            Content <span>Fast</span>
          </h2>
        </div>
        <div class="scale__content">
          <h1>DESIGNED TO GIVE YOU RESULTS</h1>
        </div>
        <div class="scale__images">

          <kinesis-container>
            <kinesis-element :strength="100">
              <img class="scale__img" src="@/public/Hoski Astronaut floating.png" alt="">
            </kinesis-element>
          </kinesis-container>
        </div>

      </div>

      <div class="scale__column">
        <div class="scale__col">
          <div class="scale__col__img">
            <img class="scale__logo" src="@/public/Squares logos/Lendtable.png" alt="">
          </div>
          <p>Spending multiple
            6 figures within KPI</p>
        </div>
        <div class="scale__col2">
          <div class="scale__col__img">
            <img class="scale__logo" src="@/public/Squares logos/Dormeo.png" alt="">
          </div>
          <p>0 to 10k
            monthly listeners
            in 9 months</p>

        </div>
        <div class="scale__col3">
          <div class="scale__col__im">
            <img class="scale__logo" src="@/public/Squares logos/Fraudology.png" alt="">
          </div>
          <p>40 MILLION in 18 months.</p>

        </div>
        <div class="scale__col4">
          <div class="scale__col__img">
            <img class="scale__logo" src="@/public/Squares logos/Apex-Physique.png" alt="">
          </div>
          <p>10X ROI</p>
        </div>
      </div>

    </div>


  </section>
</template>

<script>
  import {
    KinesisContainer,
    KinesisElement
  } from "vue-kinesis";
  export default {
    name: "App",
    components: {
      KinesisContainer,
      KinesisElement,
    },
  };

</script>

<style scoped>
  .scale {
    padding-left: 50px;
    padding-top: 150px;
    background-image: url('../public/Copy of Section 3 Background image.png');
    background-repeat: no-repeat;
    background-position: center;
  }

  .scale__wrapper {
    max-width: 1921px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    height: 100vh;
  }

  .scale__item .scale__text {
    font-size: 112px;
    font-weight: 500;
  }

  .scale__item .scale__title {
    font-size: 112px;
    font-weight: 500;
  }

  .scale__item .scale__title span {
    font-weight: bold;
  }

  .scale__content h1 {
    width: 458px;
    color: #38ebdc;
    font-size: 42px;

  }

  .scale__box {
    color: white;
    max-width: 650px;
    position: relative;
  }

  .scale__images {
    position: absolute;
    left: 334px;
    top: 250px;
    z-index: 1;
  }

  .scale__img {
    width: 546px;
    height: 576px;
  }

  .scale__column {
    display: grid;
    grid-template-columns: auto auto;
    flex-wrap: wrap;
    gap: 30px;
    right: 150px;
    top: 25px;
    width: 873px;
    height: 100px;
    position: relative;
  }

  .scale__col {
    text-align: center;
    padding-top: 50px;
    width: 417px;
    height: 309px;

    border-radius: 10px;
    background-color: #ff4954;
  }

  .scale__col2 {
    text-align: center;
    padding-top: 50px;
    width: 417px;
    height: 309px;

    border-radius: 10px;
    background-color: #3666e0;
  }

  .scale__col3 {
    text-align: center;
    padding-top: 50px;
    width: 417px;
    height: 309px;

    border-radius: 10px;
    background-color: #6f00ff;
  }

  .scale__col4 {
    text-align: center;
    padding-top: 50px;
    width: 417px;
    height: 309px;

    border-radius: 10px;
    background-color: #36a2ba;
  }

  .scale__col p {
    color: white;
    width: 390px;
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 34px;
  }

  .scale__col2 p {
    color: white;
    width: 390px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 34px;
  }

  .scale__col3 p {
    color: white;
    width: 390px;
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 34px;
  }

  .scale__col4 p {
    color: white;
    width: 390px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 34px;
  }

  .scale__logo {
    width: 250px;
  }

</style>
