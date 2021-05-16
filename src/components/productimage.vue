<template>
  <div>
    <div class="scrollimage">
      <img
        v-for="item in image"
        :key="item.id"
        :src="item.url"
        :alt="item.name"
        :class="item.url === activeimage.url ? 'activeimg' : ''"
        height="50"
        width="50"
        @click="activeimage = item"
      />
    </div>
    <img :src="deafaultimage" width="600px" height="550px" />
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: Array
    },
    deafaultimage: {
      type: String
    }
  },
  data() {
    return {
      activeimage: ""
    };
  },
  created() {
    this.activeimage = this.$props.deafaultimage;
  }
};
</script>

<style lang="scss" scoped>
div {
  padding: 20px 0px;
  display: flex;
  gap: 0.5em;
  .scrollimage {
    display: flex;
    flex-direction: column;
    gap: 0.5em;
    max-height: 550px;
    padding: 0px;
    img {
      padding: 0px 5px;
      border-left: 2px solid white;
      cursor: pointer;
      &:hover {
        border-left: 2px solid red;
      }
      &.activeimg {
        border-left: 2px solid red;
      }
    }
  }
}
</style>
