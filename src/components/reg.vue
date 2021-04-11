<template>
  <form>
    <input type="text" placeholder="Фамилия" />
    <input type="text" placeholder="Имя" />
    <input type="text" placeholder="Логин" v-model="login" />
    <input type="password" placeholder="Пароль" v-model="pass" />
    <input type="button" value="Зарегистрироваться" @click="routeform" />
  </form>
</template>

<script>
export default {
  data() {
    return {
      login: "",
      pass: ""
    };
  },
  methods: {
    routeform() {
      this.$emit("close");
      this.$router.push("/about");
    },
    testclose() {
      this.$emit("close");
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
