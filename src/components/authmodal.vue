<template>
  <div class="form">
    <Login
      @close="test()"
      v-if="!switchmodal"
      @switchreg="switchmodal = !switchmodal"
    />
    <Reg @close="test()" v-else />
    <div class="background"></div>
  </div>
</template>

<script>
import Login from "@/components/login.vue";
import Reg from "@/components/reg.vue";
export default {
  data() {
    return {
      switchmodal: false
    };
  },
  components: {
    Login,
    Reg
  },
  methods: {
    test() {
      this.$emit("auth");
    }
  }
};
</script>

<style lang="scss" scoped>
.form {
  position: fixed;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
  top: 0;
  z-index: 1;
  //   .authform {

  //   }
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
