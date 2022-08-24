<template>
  <section class="hoskines">
    <div class="wrapper__hoskines">
      <div class="hoskines__title">
        <h1 class="hoskines__text"><span>Meet</span> the Hoskines</h1>
        <p class="wrapper__prgf">
          This is not just a random group of people. We’ve taken the time to
          find the best professionals to help spread your story
          as far and wide as possible by being involved in the entire process.
        </p>
      </div>


      <div class="slide__container">
        <div class="swipper__slide">
          <div class="slide__wrapper">
            <div class="slide">
              <img src="@/public/Team members/Slide 1/Hoski web profiles_Antonio.png" alt="">
            </div>
            <div class="slide">
              <img src="@/public/Team members/Slide 1/Hoski web profiles_Kingsley Eugene.png" alt="">
            </div>
            <div class="slide">
              <img src="@/public/Team members/Slide 1/Hoski web profiles_Wesley Oliveira.png" alt="">
            </div>

          </div>
          <div class="slide__wrapper2">
            <div class="slide1">
              <img src="@/public/Team members/Slide 1/Hoski-web-profiles_ivan.png" alt="">
            </div>
            <div class="slide1">
              <img src="@/public/Team members/Slide 1/Hoski-web-profiles_ivy.png" alt="">
            </div>


          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<style>
.hoskines {
    margin-top: 250px;
}
.hoskines__title {
    color: white;
    text-align: center;

}
.hoskines__text {
    font-size: 112px;
}
.hoskines__text span {
    font-weight: 500;
}
.wrapper__prgf {
    width: 500px;
    margin: 0 auto;

}
.slide__container {
    margin: 0 auto;
    border-radius: 3px;
    height:875px;
    width: 100%;
    background-image: url('../public/Hoski-web-team-background.png');
    background-position: bottom;
    background-repeat: no-repeat;
    object-fit: cover;

}
.slide__wrapper {
    display: flex;;
    width: 100%;
    gap: 20px;
    align-items: center;
    justify-content: center;
}
.slide__wrapper2 {
    display: flex;

    width: 100%;
    gap: 20px;
    align-items: center;
    justify-content: center;
}
.swipper__slide {
    padding-top: 100px;
}
</style>
