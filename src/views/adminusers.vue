<template>
  <section id="a" class="page-content">
    <div class="cdcd">
      <h2>Пользователи</h2>
      <button
        class="btn"
        aria-expanded="true"
        aria-label="collapse menu"
        @click="openbar"
      >
        <span>Добавить пользователя</span>
      </button>
    </div>
    <table class="table">
      <thead>
        <tr>
          <th><input type="checkbox" name="" id="" /></th>
          <th>Фамилия</th>
          <th>Имя</th>
          <th>Адрес</th>
          <th>Телефон</th>
          <th>Email</th>
          <th>Пароль</th>
          <th>Удалить</th>
        </tr>
      </thead>
      <tbody>
        <tr class="users_item" v-for="item in users" :key="item.id">
          <td><input type="checkbox" name="" id="" /></td>
          <router-link
            tag="td"
            :to="`?usersid=${item.id}`"
            @click.native="adminuserbar = !adminuserbar"
            class="name"
          >
            {{ item.lastname }}
          </router-link>
          <td>{{ item.firstname }}</td>
          <td>{{ item.address }}</td>
          <td>{{ item.phone }}</td>
          <td>{{ item.email }}</td>
          <td>{{ item.password }}</td>
          <td @click="deleteusers(item.id)">
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
      <Userbar
        v-if="adminuserbar"
        @closeadminuserbar="closebar($event)"
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
import Userbar from "@/components/adminuserbar";
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      adminuserbar: false,
      page: 1,
      limit: 16,
      records: 0,
      addmode: false
    };
  },
  created() {
    this.user();
  },
  watch: {
    async page(newvalue) {
      this.records = await this.getalluser({
        limit: this.limit,
        pages: newvalue
      });
    }
  },
  computed: {
    ...mapState(["users"])
  },
  components: {
    Userbar,
    Pagination
  },
  methods: {
    ...mapActions(["getalluser"]),
    async user() {
      this.records = await this.getalluser({
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
      this.adminuserbar = true;
    },
    closebar(event) {
      this.adminuserbar = event.adminuserbar;
      this.addmode = event.addmode;
      if (event.reload) {
        this.user();
      }
    },
    deleteusers(id) {
      axios
        .delete(`http://localhost:3012/users/${id}`)
        .then(() => {
          this.user();
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
  .users_item {
    cursor: pointer;
    &:hover {
      background: rgba(82, 81, 81, 0.13);
    }
  }
  .name {
    &:hover {
      color: red;
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
