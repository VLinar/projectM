<template>
  <div class="home">
    <Slider />
    <div class="main_text">
      <h1>
        Бренд одежды, вдохновлённый этим безумным миром и девичьей силой. Сшито
        и напечатано вручную.
      </h1>
    </div>
  </div>
</template>

<script>
import Slider from "@/components/Slider.vue";
export default {
  name: "Home",
  components: {
    Slider
  }
};
</script>

<style lang="scss" scoped>
.home {
  height: 100%;
  margin: auto;
  .main_text {
    text-align: center;

    width: 40%;
    margin: auto;
    margin-top: 60px;
    h1 {
      font-weight: 600;
      font-size: 32px;
      line-height: 53px;
      font-family: "Open Sans", Arial, sans-serif;
      text-transform: none;
    }
  }
  .slide-img {
    background-position: 50%;
    background: url("https://www.romanticanawear.com/assets/37097f60-53fe-11eb-8a62-f5f2e076f6e1_m.jpeg")
      center no-repeat;
    height: 780px;
    width: 100px;
  }
}
</style>
