<template>
  <section class="work">
    <div class="work__wrapper">
      <div class="work__flex">
        <div class="work__title">
          <h1 class="work__text">
            Our Work:
            <span>The universe,</span>
            the limit
          </h1>
        </div>
        <div class="work__video">
          <video loop autoplay>
            <source src="@/public/Louis Vuitton Gif.mp4" type="video/mp4">
          </video>
        </div>
      </div>
      <div class="work__container__flex">
        <div class="work__box">
          <video controls autoplay>
            <source src="@/public/02-6 Additional videos/Gothrider.mp4" type="video/mp4">
          </video>
        </div>
        <div class="work__box">
          <video controls autoplay>
            <source src="@/public/02-6 Additional videos/Friendbuy.mp4" type="video/mp4">
          </video>
        </div>
        <div class="work__box">
          <video controls autoplay>
            <source src="@/public/02-6 Additional videos/Xpunks_whatisanNFT_1.mp4" type="video/mp4">
          </video>
        </div>

      </div>
      <div class="work__container__flex">
        <div class="work__box">
          <video controls autoplay>
            <source src="@/public/02-6 Additional videos/Apricoat.MP4" type="video/mp4">
          </video>
        </div>
        <div class="work__box">
          <video controls autoplay>
            <source src="@/public/02-6 Additional videos/Radioshack.mp4" type="video/mp4">
          </video>
        </div>
        <div class="work__box">
          <video controls autoplay>
            <source src="@/public/02-6 Additional videos/Bopied.mp4" type="video/mp4">
          </video>
        </div>

      </div>
    </div>
  </section>
</template>

<style>
.work {
    margin-top: 150px;
    width: 100%;

}
.work__title {

    max-width: 697px;
    max-height: 344px;

}

.work__wrapper {
  max-width: 1921px;
  margin: 0 auto;
}

.work__text {
    color: white;
    font-size: 112px;
   font-weight: 300;
}
.work__text span {
    font-weight: bold;
}
.work__flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.work__video video {
    width: 961px;
    height: 769px;
    object-fit: cover;
}
.work__container__flex {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
}

.work__box video {
    width: 631px;
    height: 641px;
    object-fit: cover;
}
</style>
