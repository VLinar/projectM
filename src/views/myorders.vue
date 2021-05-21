<template>
  <div class="container">
    <h2>История заказов</h2>
    <div class="inf">
      <div class="info">
        <p>Заказ №1331</p>
        <p>Дата заказа: 12.12.2012</p>
        <p>Статус заказа: новый</p>
      </div>
      <div class="order_info">
        <div class="user_info">
          <div class="fixed">
            <img src="" alt="" />
            <div class="name">
              <label for="">Название</label>
              <label for="">3000р</label>
              <label for="">Количество: 1 шт.</label>
            </div>
          </div>
        </div>
        <div class="product_info">
          <h4>Способ оплаты</h4>
          <label for="">Оплата при получении</label>
          <h4>Количество:</h4>
          <label for="">х5</label>
          <h4>Итого: 31652 р.</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.container {
  min-height: calc(100vh - 345px);
  width: 850px;
  background: #f7f7f7;
  border-radius: 6px;
  .inf {
    background: #eceef1;
    border-radius: 6px;
    padding: 0;
  }
  .info {
    display: flex;
    padding-left: 20px;
    padding-right: 20px;
    justify-content: space-between;
  }
  .info p {
    padding-right: 20px;
  }
  .order_info {
    display: grid;
    grid-template-columns: 1.5fr 0.5fr;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    background: #fff;
    padding: 15px;
  }
  h2 {
    text-align: left;
    margin-top: 3px;
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
    width: 85px;
    height: 85px;
  }
  .name {
    margin: 10px;
  }
  button {
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
