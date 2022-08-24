<template>
  <div class="header__wrapper">
    <a href="#" class="header__logo"><img src="@/public/MenuLogo.png" alt="section-background-image"></a>
    <ul class="header__link">
      <li class="header__list">WORK</li>
      <li class="header__list">VISION</li>
      <li class="header__list">CALL</li>
    </ul>
  </div>
</template>

<style scoped>
  .header__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1921px;
    margin: 0 auto;
    padding: 25px;
    height: 50px;
    background-color: black;
  }

  .header__link {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .header__list {
    margin-right: 25px;
    color: white;
    list-style: none;
    font-weight: bold;
  }

</style>
