<template>
  <div class="container">
    <h2>Спасибо за заказ!</h2>
    <hr />
    <h4>Заказ №12</h4>
    <label for="">Май 19,2021 04:11</label>
    <hr />
    <h4>Статус платежа: Ожидается оплата</h4>
    <label for="">Итого 6500р.</label>
    <hr />
    <h4>Доставим по адресу</h4>
    <label for="">Ул. Ленина дом каруселина</label>
    <h4>Способ доставки</h4>
    <label for="">Чёршдоставка</label>
    <hr />
    <h4>Ваш заказ</h4>
    <div class="fixed">
      <img src="" alt="" />
      <div class="name">
        <label for="">Название</label><br /><br />
        <label for="">*1</label>
      </div>
    </div>
    <router-link tag="button" to="/shop">Продолжить покупки</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.container {
  min-height: calc(100vh - 345px);
  width: 800px;
  h2 {
    text-align: center;
  }
  h4 {
    margin-bottom: 10px;
  }
  hr {
    border: 0;
    height: 1px;
    background: #80808065;
    margin-top: 20px;
  }
  .fixed {
    display: flex;
    align-items: center;
  }
  .fixed img {
    width: 70px;
    height: 70px;
  }
  .name {
    margin: 10px;
  }
  button {
    position: relative;
    left: 50%;
    transform: translate(-50%, 0);
    margin-top: 10px;
    border: 1px solid white;
    padding: 10px 30px;
    cursor: pointer;
    height: 50px;
    &:hover {
      border: 1px solid #2ba22b;
      color: #2ba22b;
      background: white;
      &:disabled {
        cursor: not-allowed;
        color: red;
        border: 1px solid red;
      }
    }
  }
}
</style>
