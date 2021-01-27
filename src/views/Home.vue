<template>
  <div class="home">
    <div class="slide-img"></div>
    <!-- <img
      src="https://www.romanticanawear.com/assets/37097f60-53fe-11eb-8a62-f5f2e076f6e1_m.jpeg"
      alt=""
    /> -->
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {}
};
</script>

<style lang="scss">
.home {
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
  .slide-img {
    background-position: 50%;
    background: url("https://www.romanticanawear.com/assets/37097f60-53fe-11eb-8a62-f5f2e076f6e1_m.jpeg")
      center no-repeat;
    height: 780px;
    width: 100%;
  }
  img {
    width: 90%;
    max-height: 780px;
    background-position: 50%;
    object-fit: cover;
    object-position: center;
  }
}
</style>
