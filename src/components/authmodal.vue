<template>
  <div class="modalform">
    <div class="form">
      <div class="switchbtn" v-if="switchmodal !== 3">
        <div
          :class="switchmodal === 1 ? 'activebutton' : ''"
          @click="switchmodal = 1"
        >
          Войти
        </div>
        <div
          :class="switchmodal === 2 ? 'activebutton' : ''"
          @click="switchmodal = 2"
        >
          Создать профиль
        </div>
      </div>
      <Login v-if="switchmodal === 1" @closelogin="closemodalwindow()" />
      <Reg v-else-if="switchmodal === 2" @swithmessage="regmessage" />
      <MesModal v-else :msg="message" />
      <i class="fa fa-close fa-2x" @click="closemodalwindow()"></i>
    </div>

    <div class="background"></div>
  </div>
</template>

<script>
import Login from "@/components/login.vue";
import Reg from "@/components/reg.vue";
import MesModal from "@/components/msgmodal.vue";
export default {
  data() {
    return {
      switchmodal: 1,
      message: ""
    };
  },
  components: {
    Login,
    Reg,
    MesModal
  },
  methods: {
    closemodalwindow() {
      document.body.style.overflow = "scroll";
      this.$emit("closemodalwindow");
    },
    regmessage(msg) {
      if (msg.status === "success") {
        this.message = `На почту ${msg.msg[0]} отправлено письмо`;
        this.switchmodal = 3;
        setTimeout(() => {
          this.$emit("closemodalwindow");
        }, 1500);
      } else {
        return;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.modalform {
  position: fixed;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
  top: 0;
  z-index: 1;
  .form {
    background: white;
    border-radius: 5px;
    position: relative;
    i {
      position: absolute;
      top: 0;
      right: 5px;
      cursor: pointer;
    }
  }
  .switchbtn {
    display: flex;
    padding: 40px;
    // padding-bottom: 40px;
    border-bottom: 1px solid silver;
    div {
      margin: 0px 10px;
      padding: 5px;
      border-bottom: 1px solid white;
      cursor: pointer;
    }
    div:hover {
      border-bottom: 1px solid silver;
    }
    .activebutton {
      color: red;
      border-bottom: 1px solid red;
    }
    .activebutton:hover {
      border-bottom: 1px solid red;
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
