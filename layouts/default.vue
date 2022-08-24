<template>
  <el-container>

    <el-header>
      <Header />
    </el-header>

    <el-main>
      <nuxt />
    </el-main>

  </el-container>
</template>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Raleway', sans-serif;
  }

  .el-header {
    width: 100%;
    padding: 0;
    margin: 0 auto;
    position: fixed;
    background-image: url('../public/section-background-image.png');
  }

  .el-container {
    background-image: url('../public/Hoski_web_home_background.jpg');
    background-repeat:no-repeat;
    background-size:cover;
  }

  .el-main {
    padding: 0;
  }

  @media (max-width:991px) {
    .el-container {
      width: 100%;
      height: 100%;
    }
  }

</style>
