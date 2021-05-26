<template>
  <div class="rightbar">
    <div class="background"></div>
    <div class="adminordersbar">
      <i
        id="clos"
        class="fa fa-close fa-2x"
        @click="$emit('closeadminordersbar')"
      >
      </i>
      <div class="adminorders_header">
        <div class="adminorders_button_group">
          <router-link
            to="/admin/adminorders"
            tag="button"
            @click.native="$emit('closeadminordersbar')"
            >Сохранить</router-link
          >
        </div>
      </div>
      <div class="adminorders_product">
        <label>Номер</label><br />
        <input type="text" id="fullname" v-model="name" /><br />
        <label>Дата</label><br />
        <input type="text" id="price" v-model="name" /><br />
        <label>Сумма</label><br />
        <input type="text" id="address" v-model="name" /><br />
        <label>Адрес</label><br />
        <input type="text" id="phone" v-model="name" /><br />
        <label>Телефон</label><br />
        <input type="text" id="email" v-model="name" /><br />
        <label>Email</label><br />
        <input type="text" id="pass" v-model="name" /><br />
        <i id="trash" class="fa fa-trash" aria-hidden="true"
          ><label class="trash"> Удалить</label></i
        >
      </div>
    </div>
  </div>
</template>

<script></script>

<style lang="scss" scoped>
.rightbar {
  position: fixed;
  right: 0;
  top: 0;
  width: auto;
  z-index: 1;
  .adminordersbar {
    background: white;
    height: 100vh;
    width: auto;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 10px 20px 10px 20px;
    #clos {
      position: absolute;
      top: 10px;
      left: -35px;
      cursor: pointer;
      color: white;
      &:hover {
        color: red;
      }
    }
    .adminorders_header {
      .adminorders_button_group {
        display: flex;
        gap: 1em;
        button {
          border: 1px solid white;
          padding: 10px 30px;
          cursor: pointer;
          width: 390px;
          &:hover {
            border: 1px solid red;
            background: white;
            color: red;
          }
        }
      }
    }
    .adminorders_product {
      margin: 10px;
      input {
        padding: 7px 12px;
        width: 345px;
        border: none;
        border-bottom: 1px solid;
        margin-bottom: 29px;
        margin-top: 5px;
      }
      select {
        margin-bottom: 19px;
        margin-top: 10px;
        height: 30px;
        width: 200px;
      }
      hr {
        border: 0;
        height: 1px;
        background: #80808065;
        margin-left: 2px;
        margin-right: 2px;
        margin-bottom: 19px;
      }
      #trash {
        color: black;
        cursor: pointer;
        position: absolute;
        bottom: 0;
        margin-bottom: 50px;
      }
      #trash:hover {
        color: red;
      }
      .trash {
        cursor: pointer;
        position: absolute;
        bottom: 0;
        margin-left: 5px;
      }
      .trash:hover {
        color: red;
      }
    }
  }
  .background {
    position: absolute;
    top: 0%;
    right: 0;
    height: 100vh;
    width: 100vw;
    background: rgb(0 0 0 / 65%);
    z-index: -1;
  }
}
</style>
