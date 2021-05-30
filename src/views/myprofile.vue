<template>
  <form v-on:submit.prevent>
    <div class="input_group">
      <div class="group">
        <input type="text" id="firstname" v-model="firstname" />
        <label for="firstname">Имя</label>
      </div>
      <div class="group">
        <input type="text" id="lastname"  v-model="lastname"/>
        <label for="lastname">Фамилия</label>
      </div>
       
      <div class="group">
        <input type="text" id="email" v-model="email" />
        <label for="email">Почта</label>
      </div>
      <div class="group">
        <input
          type="text"
          id="phone"
          v-model="phone"
          v-mask="'+7 (###) ###-##-##'"
        />
        <label for="phone">Тел.</label>
      </div>
      <div class="group">
        <input type="text" id="address" v-model="address" />
        <label for="address">Адрес</label>
      </div>
    </div>
    <div class="button_group">
      <button id="save" @click="setnewvalue">Сохранить</button>
      <button id="delete">Удалить аккаунт</button>
    </div>
  </form>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      lastname: "",
      firstname: "",
      email: "",
      address: "",
      phone: ""
    };
  },
  created() {
    // newphone.match(/[0-9]/g).join("") Регулярка для получения цифр
    if (this.authuser.lastname) {
      this.setinitialvalue();
    } else {
      setTimeout(() => {
        this.setinitialvalue();
      }, 1500);
    }
  },
  computed: {
    ...mapState(["authuser"])
  },
  methods: {
    ...mapActions(["updateuser", "updaterefresh"]),
    setinitialvalue() {
      this.lastname = this.authuser.lastname;
      this.firstname = this.authuser.firstname;
      this.email = this.authuser.email;
      this.address = this.authuser.address;
      this.phone = this.authuser.phone;

    },

    async setnewvalue() {
      let updateresult = await this.updateuser({
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email,
        address: this.address,
        phone: this.phone

      });

      if (updateresult === 401) {
        console.log("testestset");
        this.updaterefresh(this.getCookie("refresh_token")).then(async () => {
          await this.updateuser({
            firstname: this.firstname,
            lastname: this.lastname,
            email: this.email,
            address: this.address,
            phone: this.phone
          });
        });
      }
    },
    getCookie(name) {
      /* eslint-disable */
      let matches = document.cookie.match(
        new RegExp(
          `(?:^|; )${name.replace(
            /([\.$?*|{}\(\)\[\]\\\/\+^])/g,
            "\\$1"
          )}=([^;]*)`
        )
      );
      return matches ? decodeURIComponent(matches[1]) : undefined;
    }
  },
  
};
</script>

<style lang="scss" scoped>
form {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 90%;
  gap: 2em;
  .input_group {
    display: flex;
    flex-flow: wrap;
    gap: 2em;
    .group {
      flex-direction: column-reverse;
      display: flex;
      label {
        padding-bottom: 5px;
        font-size: 14px;
      }
      input {
        padding: 7px 12px;
        border-radius: 5px;
        width: 345px;
        border: 1px solid;

        &:focus {
          + label {
            color: red;
          }
          outline: none;
          border: 1px solid red;
        }
      }
    }
  }
  .button_group {
    padding: 10px;
    display: flex;
    gap: 2em;
    flex-direction: column;
    button {
      padding: 10px 20px;
      border: none;
      border-radius: 5px;
      color: white;
      font-size: 14px;
      cursor: pointer;
      &#save {
        background: rgb(112, 163, 35);
        &:hover {
          background: rgb(103, 155, 26);
        }
      }
      &#delete {
        color: red;
        background: none;
        border: 1px solid red;
        &:hover {
          color: white;
          background: red;
        }
      }
    }
  }
}
</style>
