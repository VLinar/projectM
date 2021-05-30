<template>
  <section id="a" class="page-content">
    <div class="cdcd">
      <button class="btn" aria-expanded="true" aria-label="collapse menu">
        <span>Добавить товар</span>
      </button>
    </div>
    <table class="table">
      <thead>
        <tr>
          <th><input type="checkbox" name="" id="" /></th>
          <th>Номер</th>
          <th>Дата</th>
          <th>Сумма</th>
          <th>Адрес</th>
          <th>Телефон</th>
          <th>Email</th>
          <th>Удалить</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><input type="checkbox" name="" id="" /></td>
          <td class="name" @click="adminordersbar = !adminordersbar">2</td>
          <td>2012</td>
          <td>200 р.</td>
          <td>Пушкина</td>
          <td>8800565656</td>
          <td>@mail.ru</td>
          <td>
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
      <Ordersbar
        v-if="adminordersbar"
        @closeadminordersbar="adminordersbar = !adminordersbar"
      />
    </transition>
  </section>
</template>

<script>
import Ordersbar from "@/components/adminordersbar";
export default {
  data() {
    return {
      adminordersbar: false
    };
  },
  components: {
    Ordersbar
  }
};
</script>

<style lang="scss" scoped>
.table {
  width: 100%;
  border: none;
  margin-bottom: 20px;
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
.name {
  cursor: pointer;
}
.name:hover {
  color: red;
}
input[type="checkbox"] {
  cursor: pointer;
}
</style>
