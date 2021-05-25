<template>
  <form>
    <h2>Панель администратора</h2>
    <input
      type="text"
      placeholder="Логин"
      v-model.trim="$v.login.$model"
      @focus="errlog = ''"
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
      @focus="errlog = ''"
      :class="$v.pass.$dirty && $v.pass.$error ? 'invalid' : ''"
    />
    <div class="error" v-if="!$v.pass.minLength && $v.pass.$dirty">
      Пароль не должен быть менее 6 символов
    </div>
    <div class="error" v-if="!$v.pass.required && $v.pass.$dirty">
      Обязательное поле
    </div>
    <div class="error autherr" v-html="errlog"></div>
    <input
      type="button"
      value="Войти"
      @click="signin()"
      :disabled="$v.pass.minLength && !$v.login.$error ? false : true"
    />
    <span>Забыли пароль?</span>
  </form>
</template>

<script>
import { mapActions, mapState } from "vuex";
import { required, email, minLength } from "vuelidate/lib/validators";
export default {
  data() {
    return {
      login: "",
      pass: "",
      errlog: ""
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
  computed: {
    ...mapState(["authuser"])
  },
  methods: {
    ...mapActions(["checkauth", "cleanuserauth"]),
    async signin() {
      await this.cleanuserauth();
      await this.checkauth({
        login: this.login,
        pass: this.pass
      });
      this.authuser.roleId === 3
        ? this.accesslogin()
        : (this.errlog =
            "Не верные данные авторизации.<br> Проверьте введенные данные");
    },
    accesslogin() {
      this.$router.push("/admin");
    }
  }
};
</script>

<style lang="scss" scoped>
form {
  display: flex;
  flex-direction: column;
  padding: 200px;
  align-items: center;
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
  .autherr {
    font-size: 15px;
    text-align: center;
  }
  input {
    width: 550px;
    padding: 10px;
    margin-bottom: 10px;
    border: 0px;
    border-bottom: 1px solid silver;
    outline: none;
  }
  input[type="button"] {
    background: red;
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
