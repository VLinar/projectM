<template>
  <form>
    Имя: <input type="text" /> Фамилия: <input type="text" /> Почта:<input
      type="text"
    />
    Мобильный телефон:<input type="text" /> Адрес: <input type="text" />
    <a>Сменить пароль</a>
    <button>Сохранить</button>
  </form>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
form {
  display: flex;
  flex-direction: column;
  input {
    width: 100%;
  }
}
</style>
