<template>
  <div class="slider-comp container">
    <VueSlickCarousel v-bind="settings" ref="corusel">
      <div v-for="(data, i) in img" :key="i" class="slide-img">
        <img :src="data" alt="" />
        <router-link class="slider_button" to="/shop" tag="div"
          >Магазин</router-link
        >
      </div>
    </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  components: { VueSlickCarousel },
  data() {
    return {
      img: [
        "https://i.mycdn.me/i?r=AzEPZsRbOZEKgBhR0XGMT1RkgSdfw5YnzFmdY-0VQso2K6aKTM5SRkZCeTgDn6uOyic",
        "https://img3.goodfon.ru/wallpaper/nbig/e/7d/devushka-ulybka-cvety-buket.jpg",
        "https://img1.goodfon.ru/wallpaper/nbig/9/4a/devushka-makiyazh-vzglyad-ulybka-3121.jpg",
        "https://pg21.ru/userfiles/picitem/img-20150311195429-660.jpg",
        "https://www.bykov-foto.ru/uploads/gallery/p2/fotografii-svadebnyh-buketov-01.jpg"
      ],
      settings: {
        dots: true,
        arrows: false,
        dotsClass: "slick-dots custom-dot-class",
        edgeFriction: 0.35,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        lazyLoad: "ondemand",
        infinite: true
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.slider-comp {
  padding: 0 20px;
  margin-top: 0;
  .slide-img {
    position: relative;
    display: flex !important;
    justify-content: center;
    height: 70vh;
    img {
      height: 780px;
      width: 100%;
      max-width: 1640px;
      object-fit: cover;
      object-position: center;
      pointer-events: none;
    }
  }

  .slider_button {
    padding: 15px 40px;
    background: black;
    color: white;
    width: fit-content;
    position: absolute;
    left: 5%;
    bottom: 5%;
    text-transform: uppercase;
    letter-spacing: 1px;
    cursor: pointer;
  }
}
</style>
