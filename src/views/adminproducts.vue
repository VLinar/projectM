<template>
  <section id="a" class="page-content">
    <div class="cdcd">
      <h2>Товары</h2>
      <button
        class="btn"
        aria-expanded="true"
        aria-label="collapse menu"
        @click="openbar"
      >
        <span>Добавить товар</span>
      </button>
    </div>
    <table class="table">
      <thead>
        <tr>
          <th><input type="checkbox" name="" id="" /></th>
          <th>Название</th>
          <th>Цена</th>
          <th>Описание</th>
          <th>Количество</th>
          <th>Удалить</th>
        </tr>
      </thead>
      <tbody>
        <tr
          
          class="product_item"
          v-for="item in products"
          :key="item.id"
          
        >
          <td><input type="checkbox" name="" id="" /></td>
          <router-link tag='td' :to="`?productid=${item.id}`" @click.native="adminbar = !adminbar" class="name">
            
            {{ item.name }}</router-link>
          <td>{{ item.price }}</td>
          <td>{{ item.description }}</td>
          <td>{{ item.amount }}</td>
          <td @click="delprod(item.id)">
            <button
              class="collapse-btn"
              aria-expanded="true"
              aria-label="collapse menu"
            >
              <i class="fa fa-trash" aria-hidden="true"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <transition name="category">
      <Goods
        v-if="adminbar"
        @closeadminbar="closebar($event)"
        :addmode="addmode"
      />
    </transition>
    <pagination
      v-model="page"
      :per-page="limit"
      :records="records"
      @paginate="myCallback"
    />
  </section>
</template>

<script>
import axios from "axios";
import Pagination from "vue-pagination-2";
import Goods from "@/components/adminbar";
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      adminbar: false,
      page: 1,
      limit: 16,
      records: 0,
      addmode: false
    };
  },
  created() {
    this.product();
    this.getgroups();
  },
  watch: {
    async page(newvalue) {
      this.records = await this.getallproducts({
        limit: this.limit,
        pages: newvalue
      });
    }
  },
  computed: {
    ...mapState(["products"])
  },
  components: {
    Goods,
    Pagination
  },
  methods: {
    ...mapActions(["getallproducts", "getgroups"]),
    async product() {
      this.records = await this.getallproducts({
        limit: this.limit,
        pages: this.page
      });
    },
    myCallback(page) {
      this.page = page;
    },
    openbar() {
      this.$router.push("?");
      this.addmode = true;
      this.adminbar = true;
    },
    closebar(event) {
      this.adminbar = event.adminbar;
      this.addmode = event.addmode;
      if (event.reload) {
        this.product();
      }
    },
    delprod(id) {
      axios
        .delete(`http://localhost:3012/product/${id}`)
        .then(() => {
          this.product();
        })
        .catch(err => console.log(err));
    }
  }
};
</script>

<style lang="scss" scoped>
.table {
  width: 100%;
  border: none;
  margin-bottom: 20px;
  .product_item {
    cursor: pointer;
    &:hover {
      background: rgba(82, 81, 81, 0.13);
    }
  }
  .name{
    &:hover{
      color:red
    }
  }
}
.table thead th {
  font-weight: bold;
  text-align: left;
  border: none;
  padding: 10px 15px;
  background: #d8d8d8;
  font-size: 14px;
}
.table thead tr th:first-child {
  border-radius: 8px 0 0 8px;
}
.table thead tr th:last-child {
  border-radius: 0 8px 8px 0;
}
.table tbody td {
  text-align: left;
  border: none;
  padding: 10px 15px;
  font-size: 14px;
  vertical-align: top;
}
.table tbody tr:nth-child(even) {
  background: #f3f3f3;
}
.table tbody tr td:first-child {
  border-radius: 8px 0 0 8px;
}
.table tbody tr td:last-child {
  border-radius: 0 8px 8px 0;
}
.btn {
  position: relative;
  left: 100%;
  transform: translate(-100%, 0);
  border-radius: 8px;
  margin: 10px 0px 10px;
  border: 1px solid black;
  padding: 10px 20px;
  cursor: pointer;
  height: 40px;
}
.btn:hover {
  border: 1px solid #2ba22b;
  color: #2ba22b;
  background: white;
}
.collapse-btn {
  border: none;
  cursor: pointer;
}

input[type="checkbox"] {
  cursor: pointer;
}
</style>
