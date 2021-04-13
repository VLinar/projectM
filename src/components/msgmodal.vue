<template>
  <div>{{ msg }}</div>
</template>

<script>
export default {
  props: {
    msg: String
  }
};
</script>

<style lang="scss" scoped>
div {
  display: flex;
  flex-direction: column;
  padding: 25px;
  margin: 10px;
  position: relative;
}
</style>
