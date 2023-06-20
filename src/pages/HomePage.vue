<template>
    <div class="main">
      <div class="wrapper">
        <div class="page__title">
          Главная
        </div>
        <div class="page__subtitle">
          Общая статистика
        </div>
        <div class="stats__block">
          <div class="stats__col">
              <div class="col__img">
                  <img src="../assets/nav/messages_ic.png" alt="">
              </div>
              <div class="col__title">
                  Писем отправлено
              </div>
              <div class="col__content">
                  {{count}}
              </div>
          </div>
            <div class="stats__col">
                <div class="col__img">
                    <img src="../assets/nav/team.png" alt="">
                </div>
                <div class="col__title">
                    Сотрудники
                </div>
                <div class="col__content">
                    {{stats.employees}}
                </div>
            </div>
        </div>
      </div>
    </div>
</template>

<script>
import {onMounted, ref} from "vue";
import axios from "axios";
import store from "@/store";
import instance from "@/api/api";

export default {
    setup() {
      const stats = ref({});

      onMounted(() => {
        instance.get("/api/statistics")
            .then(res => stats.value = res.data);
      })
      const count = store.state.messages.length;
        return {
          stats,
          count,
        }
    }
}
</script>

<style lang="scss" scoped>
.main {
  width: 82%;

  .wrapper {
    padding: 40px 60px;

    .page__title {
      font-size: 40px;
      color: #0063db;
    }
    .page__subtitle {
      font-size: 20px;
      color: #01164d;
      margin-bottom: 50px;
    }
    .stats__block {
      width: 100%;
      background-color: #f9f8f4;
      padding: 30px 25px;
      border-radius: 30px;
      display: flex;
      justify-content: space-around;
      align-items: center;

      .stats__col {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        color: #01164d;

        .col__img {
          background-color: #e1e1d5;
          border-radius: 50%;
          padding: 12px;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 20px;
        }
        .col__title {
          font-size: 20px;
        }
        .col__content {
          font-size: 80px;
          font-weight: 700;
          color: #0063db;
        }
      }
    }
  }
}
</style>