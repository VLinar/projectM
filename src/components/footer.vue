<template>
  <footer>
    <div class="container">
      <div class="navigation">
        <router-link tag="span" active-class="active" to="/info"
          >О нас</router-link
        >
        <router-link tag="span" active-class="active" to="/info/payment"
          >Оплата</router-link
        >
        <router-link tag="span" active-class="active" to="/info/delivery"
          >Доставка</router-link
        >
        <router-link tag="span" active-class="active" to="/info/contacts"
          >Контакты</router-link
        >
        <div class="sociallinks">
          <a href="https://vk.com/v.rustam"><i class="fa fa-vk" aria-hidden="true"></i></a>
          <a href="https://t.me/valdianov"><i class="fa fa-telegram" aria-hidden="true"></i></a>
          <a href="https://www.instagram.com/rustamvaldianov/"><i class="fa fa-instagram" aria-hidden="true"></i></a>
        </div>
      </div>
      <div class="bankscard">
        <a href="https://www.visa.com.ru/"><i class="fa fa-cc-visa" aria-hidden="true"></i></a>
        <a href="https://www.mastercard.ru/ru-ru.html"><i class="fa fa-cc-mastercard" aria-hidden="true"></i></a>
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
    a{
      color: rgb(163, 163, 163);
    }
    span{
      cursor: pointer;
    }
  }
}
</style>
