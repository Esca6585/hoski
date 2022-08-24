<template>
  <section class="panel">

    <div class="panel__nav">
      <ul class="panel__link">
        <li class="panel__last" v-for="tab, index in tabs" :key="tab">
          <a @click="changePanel(index)" class="link" :class="{ 'active': show == index }">{{ tab[0] }}<br>{{ tab[1] }}</a></li>
      </ul>
    </div>

    <div v-for="tab, index in tabs" :key="tab">
      <div class="panel__wrapper" v-if="show == index">
        <h1 class="white">{{ tab[0] }}</h1>
        <div class="panel__grid">
          <div class="panel__left__img">
            <img class="panel__img" src="@/public/image-(26).png" alt="">
          </div>
          <div class="panel__top__img">
            <img class="panel__img1" src="@/public/image-(28).png" alt="">
          </div>
          <div class="panel__bottom__img">
            <img class="panel__img2" src="@/public/image-(25).png" alt="">
          </div>
          <div class="panel__right__img">
            <img class="panel__img3" src="@/public/image-(27) (1).png" alt="">
          </div>
        </div>
      </div>
    </div>

  </section>
</template>

<script>
export default {
  data() {
    return {
      tabs: [
        ['SUCCESS METRIC', ''],
        ['Create Content', 'Strategy'],
        ['Execution', ''],
        ['Depoyment', '(Organic & Paid)'],
        ['Tweak & Refine', ''],
        ['Add Layers', '']
      ],
      show: 0,
    }
  },
  methods: {
    changePanel: function(index){
      this.show = index
    }
  }
}
</script>

<style>
  .panel {
    width: 100%;
  }

  .panel__left__img {
    grid-area: leftside;
  }

  .panel__top__img {
    grid-area: middletop;
  }

  .panel__bottom__img {
    grid-area: middlebottom;
  }

  .panel__right__img {
    grid-area: rightside;
  }

  .panel__wrapper {
    margin: 0 auto;
    border-radius: 3px;
    background-color: #3666e0;
    height: 875px;
    width: 1785px;
    background-image: url('../public/Copy of Section 3 Background image.png');
    background-position: bottom;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .panel__grid {
    display: grid;
    grid-template-areas:
      'leftside leftside middletop middletop rightside rightside'
      'leftside leftside middlebottom middlebottom rightside rightside';
    gap: 30px;
    justify-content: center;
    align-items: center;
  }

  .panel__img {
    width: 570px;
    height: 523px;
  }

  .panel__img1 {
    width: 417px;
    height: 277px;
  }

  .panel__img2 {
    width: 417px;
    height: 275px;
  }

  .panel__img3 {
    width: 569px;
    height: 534px;
  }

  .panel__nav .panel__link .panel__list {
    display: inline-flex;
  }

  .panel__nav .panel__link .panel__list a {
    display: flex;
    font-size: 20px;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    width: 247px;
    border-radius: 2px;
    height: 116px;
    background-color: #2b8194;
    color: white;
  }

  .panel__link {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: 0 auto;
    max-width: 1921px;
  }

  .link {
    display: flex;
    font-size: 20px;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    width: 247px;
    border-radius: 2px;
    height: 116px;
    background-color: #7291e0;
    color: white;
  }

  ul li a:hover {
    cursor: pointer;
    background-color: #3666e0;
  }

  ul li {
    list-style: none;
  }

  .active {
    background-color: #3666e0;
  }

  .white {
    color: white;
  }
</style>
