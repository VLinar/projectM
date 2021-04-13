<template>
  <form>
    <input
      type="text"
      placeholder="Фамилия"
      v-model.trim="$v.lastname.$model"
      :class="$v.lastname.$dirty && $v.lastname.$error ? 'invalid' : ''"
    />
    <div class="error" v-if="!$v.lastname.required && $v.lastname.$dirty">
      Обязательное поле
    </div>
    <input
      type="text"
      placeholder="Имя"
      v-model.trim="$v.firstname.$model"
      :class="$v.firstname.$dirty && $v.firstname.$error ? 'invalid' : ''"
    />
    <div class="error" v-if="!$v.firstname.required && $v.firstname.$dirty">
      Обязательное поле
    </div>
    <input
      type="text"
      @focus="errlog = ''"
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
      v-model.trim="$v.pass.$model"
      :class="$v.pass.$dirty && $v.pass.$error ? 'invalid' : ''"
    />
    <div class="error" v-if="!$v.pass.minLength && $v.pass.$dirty">
      Пароль не должен быть менее 6 символов
    </div>
    <div class="error" v-if="!$v.pass.required && $v.pass.$dirty">
      Обязательное поле
    </div>
    <input type="button" value="Зарегистрироваться" @click="switchemailform" />
    <div class="error autherr" v-html="errlog"></div>
  </form>
</template>

<script>
import { required, email, minLength } from "vuelidate/lib/validators";
import { mapActions } from "vuex";
export default {
  data() {
    return {
      lastname: "",
      firstname: "",
      login: "",
      pass: "",
      errlog: ""
    };
  },
  methods: {
    async switchemailform() {
      let regbody = {
        lastname: this.lastname,
        firstname: this.firstname,
        email: this.login,
        password: this.pass,
        roleId: 1
      };

      let result = await this.registration(regbody);
      result.status === "error"
        ? (this.errlog = result.msg)
        : this.$emit("swithmessage", result);
    },
    ...mapActions(["registration"])
  },
  validations: {
    lastname: { required },
    firstname: { required },
    login: {
      required,
      email
    },
    pass: {
      required,
      minLength: minLength(6)
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
  h1 {
    text-align: center;
    margin: 0;
    padding-bottom: 30px;
  }
  input {
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
  i {
    position: absolute;
    right: 15px;
    top: 5px;
  }
}
</style>
