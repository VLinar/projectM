<template>
  <div class="bread">
    <div>
      <router-link to="/" tag="a">Главная</router-link>
      <router-link
        v-for="(item, idx) in groupbread()"
        :key="item.id"
        :to="item.url"
        tag="a"
        :style="idx + 1 === groupbread().length ? 'border-right: 0px' : ''"
        >{{ item.name }}</router-link
      >
      <router-link v-if="prod" to="/" tag="a"></router-link>
    </div>
    <div>3 иконки</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: {
    prod: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    ...mapGetters(["breadcrumbs", "getidongroup"])
  },
  methods: {
    groupbread() {
      let idgroup;
      this.$props.prod
        ? (idgroup = 2)
        : (idgroup = this.getidongroup(this.$route.params.categories));
      return this.breadcrumbs(idgroup);
    }
  }
};
</script>

<style lang="scss" scoped>
.bread {
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  a {
    text-decoration: none;
    cursor: pointer;
    padding: 0 5px;
    border-right: 1px solid;
  }
}
</style>
