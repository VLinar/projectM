<template>
  <footer>
    <div class="container">
      <div class="navigation">
        <span>Акции</span>
        <span>О нас</span>
        <span>Оплата</span>
        <span>Доставка</span>
        <span>Обмен и возврат</span>
        <span>Контакты</span>
        <div class="sociallinks">
          <i class="fa fa-vk" aria-hidden="true"></i>
          <i class="fa fa-telegram" aria-hidden="true"></i>
          <i class="fa fa-instagram" aria-hidden="true"></i>
        </div>
      </div>
      <div class="bankscard">
        <i class="fa fa-cc-visa" aria-hidden="true"></i>
        <i class="fa fa-cc-mastercard" aria-hidden="true"></i>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
footer {
  padding-top: 50px;
  padding-bottom: 25px;
  background-color: #f9f9f9;
  font-size: 14px;
  color: rgb(163, 163, 163);
  div {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: space-between;
    .sociallinks {
      font-size: 24px;
    }
    .bankscard {
      font-size: 45px;
    }
  }
}
</style>
