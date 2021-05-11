<template>
  <div class="bread">
    <div>
      <router-link to="/" tag="a">Главная<i class="right"></i></router-link>
      <router-link
        v-for="(item, idx) in groupbread()"
        :key="item.id"
        :to="item.url"
        tag="a"
        >{{ item.name
        }}<i
          class="right"
          v-if="idx + 1 === groupbread().length && !prod ? false : true"
        ></i>
      </router-link>
      <router-link v-if="prod" to="/" tag="a">
        {{ prodname }}
      </router-link>
    </div>

    <div v-if="!prod">3 иконки</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: {
    prod: {
      type: Number
    },
    prodname: {
      type: String
    }
  },
  computed: {
    ...mapGetters(["breadcrumbs", "getidongroup"])
  },
  methods: {
    groupbread() {
      let idgroup;

      this.$props.prod
        ? (idgroup = this.$props.prod)
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
    i {
      border: solid rgb(117, 117, 117);
      border-width: 0 4px 4px 0;
      display: inline-block;
      padding: 4px;
      margin-left: 5px;
      vertical-align: middle;
    }
    .right {
      transform: rotate(-45deg);
      -webkit-transform: rotate(-45deg);
    }
  }
}
</style>
