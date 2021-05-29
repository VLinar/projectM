<template>
  <div class="rightbar">
    <div class="background"></div>
    <div class="adminuserbar">
      <i
        id="clos"
        class="fa fa-close fa-2x"
        @click="
          $emit('closeadminuserbar', { adminuserbar: false, addmode: false })
        "
      >
      </i>
      <div class="adminuser_header">
        <div class="adminuser_button_group">
          <button @click="saveuser">
            Сохранить
          </button>
        </div>
      </div>
      <div class="adminuser_product">
        <label>Фамилия</label><br />
        <input type="text" id="lastname" v-model="lastname" /><br />
        <label>Имя</label><br />
        <input type="text" id="firstname" v-model="firstname" /><br />
        <label>Адрес</label><br />
        <input type="text" id="address" v-model="address" /><br />
        <label>Телефон</label><br />
        <input
          type="text"
          id="phone"
          v-mask="'+7 (###) ###-##-##'"
          v-model="phone"
        /><br />
        <label>Email</label><br />
        <input type="text" id="email" v-model="email" /><br />
        <label>Пароль</label><br />
        <input type="text" id="password" v-model="password" /><br />
        <i
          id="trash"
          class="fa fa-trash"
          aria-hidden="true"
          @click="deleteusers"
          ><label class="trash"> Удалить</label></i
        >
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import axios from "axios";
export default {
  props: {
    addmode: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      lastname: "",
      firstname: "",
      address: "",
      phone: "",
      email: "",
      password: ""
    };
  },
  created() {
    if (!this.$props.addmode) {
      this.getoneusers(this.$route.query.usersid).then(() => {
        this.setinitialvalue();
      });
    }
  },
  computed: {
    ...mapState(["oneuser"])
  },
  methods: {
    ...mapActions(["getoneusers"]),
    setinitialvalue() {
      this.lastname = this.oneuser.lastname;
      this.firstname = this.oneuser.firstname;
      this.address = this.oneuser.address;
      this.phone = this.oneuser.phone;
      this.email = this.oneuser.email;
      this.password = this.oneuser.password;
    },
    saveuser() {
      if (this.$route.query.usersid) {
        axios
          .put(`http://localhost:3012/users/${this.$route.query.usersid}`, {
            lastname: this.lastname,
            firstname: this.firstname,
            address: this.address,
            phone: this.phone,
            email: this.email,
            password: this.password,
            roleId: 2
          })
          .then(() => {
            this.$emit("closeadminuserbar", {
              adminuserbar: true,
              addmode: false,
              reload: true
            });
          })
          .catch(err => console.log(err));
      } else {
        axios
          .post("http://localhost:3012/users", {
            lastname: this.lastname,
            firstname: this.firstname,
            address: this.address,
            phone: this.phone,
            email: this.email,
            password: this.password,
            roleId: 2
          })
          .then(res => {
            this.$emit("closeadminuserbar", {
              adminbar: true,
              addmode: false,
              reload: true
            });
            this.$router.push(`?usersid=${res.data.id}`);
          })
          .catch(err => console.log(err));
      }
    },
    deleteusers() {
      axios
        .delete(`http://localhost:3012/users/${this.$route.query.usersid}`)
        .then(() => {
          this.$emit("closeadminuserbar", {
            adminbar: false,
            addmode: false,
            reload: true
          });
        })
        .catch(err => console.log(err));
    }
  }
};
</script>

<style lang="scss" scoped>
.rightbar {
  position: fixed;
  right: 0;
  top: 0;
  width: auto;
  z-index: 1;
  .adminuserbar {
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
    .adminuser_header {
      .adminuser_button_group {
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
    .adminuser_product {
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
