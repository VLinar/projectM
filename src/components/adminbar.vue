<template>
  <div class="rightbar">
    <div class="background"></div>
    <div class="adminbar">
      <i
        id="clos"
        class="fa fa-close fa-2x"
        @click="$emit('closeadminbar', { adminbar: false, addmode: false })"
      >
      </i>
      <div class="admin_header">
        <div class="admin_button_group">
          <button @click="saveproduct">
            Сохранить
          </button>
        </div>
      </div>
      <div class="admin_product">
        <label>Название</label><br />
        <input type="text" id="name" v-model="name" /><br />
        <label>Цена</label><br />
        <input type="text" id="price" v-model="price" /><br />
        <label>Описание</label><br />
        <textarea id="description" v-model="description" /><br />
        <label>Количество</label><br />
        <input type="text" id="amount" v-model="amount" /><br />
        <hr />
        <label>Раздел каталога</label><br />
        <select id="group" v-model="groupId">
          <option v-for="group in category" :key="group.id" :value="group.id">{{
            group.name
          }}</option>
        </select>
        <br />
        <hr />
        <!-- <label>Характеристика</label><br />
        <input type="text" id="amount" v-model="name" /><br />
        <label>Значение характеристики</label><br />
        <input type="text" id="amount" v-model="name" /><br /> -->
        <i id="trash" class="fa fa-trash" aria-hidden="true" @click="delprod"
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
      name: "",
      price: "",
      description: "",
      amount: "",
      groupId: ""
    };
  },
  created() {
    if (!this.$props.addmode) {
      this.getoneproduct(this.$route.query.productid).then(() => {
        this.setinitialvalue();
      });
    }
  },
  computed: {
    ...mapState(["oneproduct", "category"])
  },
  methods: {
    ...mapActions(["getoneproduct"]),
    setinitialvalue() {
      this.name = this.oneproduct[0].name;
      this.price = this.oneproduct[0].price;
      this.description = this.oneproduct[0].description;
      this.amount = this.oneproduct[0].amount;
      this.groupId = this.oneproduct[0].groupId;
    },
    saveproduct() {
      if (this.$route.query.productid) {
        axios
          .put(
            `http://localhost:3012/product/${this.$route.query.productid}`,
            {
              name: this.name,
              price: this.price,
              description: this.description,
              amount: this.amount,
              groupId: this.groupId,
              measureId: 1
            }
          )
          .then(() => {
            this.$emit("closeadminbar", {
              adminbar: true,
              addmode: false,
              reload: true
            });
          })
          .catch(err => console.log(err));
      } else {
        axios
          .post("http://localhost:3012/product", {
            name: this.name,
            price: this.price,
            description: this.description,
            amount: this.amount,
            groupId: this.groupId,
            measureId: 1
          })
          .then(res => {
            this.$emit("closeadminbar", {
              adminbar: true,
              addmode: false,
              reload: true
            });
            this.$router.push(`?productid=${res.data.id}`);
          })
          .catch(err => console.log(err));
      }
    },
    delprod() {
      axios
        .delete(`http://localhost:3012/product/${this.$route.query.productid}`)
        .then(() => {
          this.$emit("closeadminbar", {
            adminbar: false,
            addmode: false,
            reload: true
          });
        })
        .catch(err => console.log(err));
    },
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
  .adminbar {
    background: white;
    height: 100vh;
    width: auto;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 10px 20px 10px 20px;
    overflow-y: scroll;
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
    .admin_header {
      .admin_button_group {
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
    .admin_product {
      margin: 10px;
      input {
        padding: 7px 12px;
        width: 345px;
        border: none;
        border-bottom: 1px solid;
        margin-bottom: 29px;
        margin-top: 5px;
      }
      textarea {
        padding: 7px 12px;
        width: 345px;
        height: 70px;
        border: none;
        border-bottom: 1px solid;
        margin-bottom: 29px;
        margin-top: 5px;
         resize: none;
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
      }
      #trash:hover {
        color: red;
      }
      .trash {
        cursor: pointer;
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
