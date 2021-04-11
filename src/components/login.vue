<template>
  <form>
    <input
      type="text"
      placeholder="Логин"
      v-model.trim="$v.login.$model"
      :class="$v.login.$dirty && $v.login.$error ? 'invalid' : ''"
    />
    <div class="error" v-if="!$v.login.required && $v.login.$dirty">
      Обязательное поле
    </div>
    <div class="error" v-if="!$v.login.email && $v.login.$dirty">
      Некорректный email адрес
    </div>

    <input
      type="password"
      placeholder="Пароль"
      v-model="$v.pass.$model"
      :class="$v.pass.$dirty && $v.pass.$error ? 'invalid' : ''"
    />
    <div class="error" v-if="!$v.pass.minLength && $v.pass.$dirty">
      Пароль не должен быть менее 6 символов
    </div>
    <div class="error" v-if="!$v.pass.required && $v.pass.$dirty">
      Обязательное поле
    </div>

    <input type="button" value="Войти" @click="test()" />
    <span>Забыли пароль?</span>
  </form>
</template>

<script>
import { mapActions } from "vuex";
import { required, email, minLength } from "vuelidate/lib/validators";
export default {
  data() {
    return {
      login: "",
      pass: ""
    };
  },
  validations: {
    login: {
      required,
      email
    },
    pass: {
      required,
      minLength: minLength(6)
    }
  },
  methods: {
    ...mapActions(["checkauth"]),
    async test() {
      let auth = await this.checkauth({
        login: this.login,
        pass: this.pass
      });
      if (auth === true) {
        this.$router.push("/about");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
form {
  display: flex;
  flex-direction: column;
  padding: 25px;

  position: relative;
  z-index: 1;
  .invalid {
    border-bottom: 1px solid red;
  }
  .error {
    color: red;
    font-size: 12px;
    margin-bottom: 10px;
  }
  input {
    padding: 10px;
    margin-bottom: 10px;
    border: 0px;
    // background: #f1f1f1;
    border-bottom: 1px solid silver;
    outline: none;
  }
  input[type="button"] {
    background: #2ec32e;
    color: white;
    cursor: pointer;
  }
  span {
    text-align: center;
    cursor: pointer;
    font-size: 12px;
  }
}
</style>
