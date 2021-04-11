<template>
  <form>
    <h1>Авторизация</h1>
    <input type="text" placeholder="Логин" v-model="login" />
    <input type="password" placeholder="Пароль" v-model="pass" />
    <input type="button" value="Войти" @click="test()" />
    <div>
      Вы еще не зарегистрированы?
      <span @click="regmodalopen()"> Зарегистрироваться</span>
    </div>
    {{ pass }}
    <i class="fa fa-close fa-2x" @click="testclose()"></i>
  </form>
</template>

<script>
import { mapActions } from "vuex";
// import { required, email, minLength } from "vuelidate/lib/validators";
export default {
  data() {
    return {
      login: "",
      pass: ""
    };
  },
  methods: {
    ...mapActions(["checkauth"]),
    async test() {
      let payload = {
        login: this.login,
        pass: this.pass
      };
      let auth = await this.checkauth(payload);
      if (auth === true) {
        this.$emit("close");
        this.$router.push("/about");
      }
    },
    testclose() {
      this.$emit("close");
    },
    regmodalopen() {
      this.$emit("switchreg");
    }
  }
};
</script>

<style lang="scss" scoped>
form {
  display: flex;
  flex-direction: column;
  padding: 25px;
  border-radius: 5px;
  background: white;
  position: relative;
  z-index: 1;
  h1 {
    text-align: center;
    margin: 0;
    padding-bottom: 30px;
  }
  input {
    padding: 10px;
    margin-bottom: 10px;
    border: 0px;
    background: #f1f1f1;
    outline: none;
  }
  input[type="button"] {
    background: #2ec32e;
    color: white;
    cursor: pointer;
  }
  span {
    cursor: pointer;
  }
  i {
    position: absolute;
    right: 15px;
    top: 5px;
  }
}
</style>
