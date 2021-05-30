<template>
  <div>
    <div class="swich">
      <h4
        @click="showswitch = !showswitch"
        :class="!showswitch ? 'active' : ''"
      >
        Инфорация о товаре
      </h4>
      <h4 @click="showswitch = !showswitch" :class="showswitch ? 'active' : ''">
        Характеристики
      </h4>
    </div>
    <div class="attributes" v-if="showswitch">
      <div v-for="(item, index) in paramsvalue" :key="index">
        <h4>{{ item.name }}:</h4>
        <span>{{ item.value }}</span>
      </div>
    </div>
    <div class="product_discription" v-else>
      {{ description }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    description: {
      type: String
    },
    paramsvalue: {
      type: Array
    }
  },
  data() {
    return {
      showswitch: false
    };
  }
};
</script>

<style lang="scss" scoped>
.swich {
  display: flex;
  gap: 0.5em;
  h4 {
    padding: 5px;
    cursor: pointer;
    border-bottom: 1px solid white;
  }
  .active {
    border-bottom: 1px solid red;
  }
}
.attributes div {
  display: flex;
  align-items: center;
  gap: 10px;
}
</style>
