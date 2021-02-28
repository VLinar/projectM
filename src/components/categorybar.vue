<template>
  <div class="left_bar">
    <div class="category_bar">
      <div class="category_column">
        <h2 @click="activegroup = null">Категории</h2>
        <div class="category">
          <router-link
            v-for="item in getmaincategory"
            :key="item.id"
            @mouseover.native="activegroup = item.id"
            :class="activegroup === item.id ? 'active' : ''"
            tag="h4"
            :to="item.url"
          >
            {{ item.name }}
          </router-link>
        </div>
      </div>
      <div v-if="getsubcategory(activegroup).length > 0" class="subcategory">
        <SubCategories
          v-for="item in getsubcategory(activegroup)"
          :key="item.id"
          :item="item"
        />
      </div>

      <i class="fa fa-close fa-2x" @click="$emit('closecategorybar')"></i>
    </div>

    <div class="background"></div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import SubCategories from "@/components/subcategories.vue";
export default {
  props: {
    categorybar: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  components: {
    SubCategories
  },
  data() {
    return {
      activegroup: null
    };
  },
  computed: {
    ...mapGetters(["getmaincategory", "getcategoryname", "getsubcategory"])
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.left_bar {
  position: fixed;
  left: 0;
  top: 0;
  width: auto;
  z-index: 1;
  .category_bar {
    background: white;
    height: 100vh;
    width: auto;
    position: relative;
    display: flex;
    gap: 1rem;
    .category_column {
      padding: 10px 20px 10px 20px;
      overflow-y: auto;
      border-right: 1px solid #e2e2e2;
      h4 {
        cursor: pointer;
        width: 200px;
        padding: 5px;
        margin: 5px 0px;
      }
      .active {
        background: red;
        border-radius: 10px;
        color: white;
      }
    }
    .subcategory {
      min-width: 25vw;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      overflow-y: auto;
      height: fit-content;
    }
    h2 {
      margin: 0;
      padding: 5px;
    }
    i {
      position: absolute;
      top: 10px;
      right: -35px;
      cursor: pointer;
      color: white;
      &:hover {
        color: red;
      }
    }
  }
  .background {
    position: absolute;
    top: 0%;
    height: 100vh;
    width: 100vw;
    background: rgb(0 0 0 / 65%);
    z-index: -1;
  }
}
</style>
