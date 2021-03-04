<template>
  <div>
    <router-link tag="h4" :to="`/categories/${item.url}`">{{
      item.name
    }}</router-link>

    <div v-if="getsubcategory(item.id).length > 0" class="subgroup">
      <router-link
        :to="`/categories/${i.url}`"
        v-for="i in getsubcategory(item.id)"
        :key="i.id"
        tag="span"
        >{{ i.name }}</router-link
      >
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: {
    item: {
      type: Object
    }
  },
  computed: {
    ...mapGetters(["getcategoryname", "getsubcategory"])
  }
};
</script>

<style lang="scss" scoped>
div {
  padding: 10px auto;
  display: flex;
  flex-direction: column;
  height: fit-content;
  .subgroup {
    display: flex;
    flex-direction: column;
  }
  h4 {
    margin-bottom: 0;
    padding: 5px;
    cursor: pointer;
    &:hover {
      color: red;
    }
  }
  span {
    margin: 2px 0px;
    font-size: 14px;
    padding: 5px;
    color: rgb(136, 136, 136);
    cursor: pointer;
  }
}
</style>
