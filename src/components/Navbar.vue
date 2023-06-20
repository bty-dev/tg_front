<template>
    <div class="main">
        <div class="wrapper">
          <div class="logo">
              <img src="../assets/nav/logo.png" alt="">
          </div>
          <nav class="nav">
              <ul class="nav__list">
                  <router-link to="/home" class="nav__list__item"><img class="img" src="../assets/nav/home_ic.png" alt="">Главная</router-link>
                  <router-link to="/distribution" class="nav__list__item"><img class="img" src="../assets/nav/messages_ic.png" alt="">Рассылка</router-link>
                  <router-link to="/employees" class="nav__list__item"><img class="img" src="../assets/nav/team.png" alt="">Сотрудники</router-link>
                  <router-link @click="exit" to="/login" class="nav__list__item"><img class="img" src="../assets/nav/quit.png" alt="">Выйти</router-link>
              </ul>
          </nav>
        </div>
    </div>
</template>

<script>
import store from "@/store";

export default {
    setup() {

        const exit = () => {
          store.dispatch("setAuth", false);
        }
        return {
          exit
        }
    }
}
</script>

<style lang="scss" scoped>
.main {
  height: 100vh;
  width: 18%;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;

  .wrapper {
    width: 100%;
    height: 100%;
    padding: 30px 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    .logo {
      color: #fff;
      background-color: transparent;
      border: 2px solid #01164d;
      color: #000;
      border-radius: 50%;
      width: 120px;
      height: 120px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .nav {
      padding: 50px 0;
      width: 100%;

      &__list {
        list-style-type: none;
        margin-left: 40px;

        &__item {
          width: 100%;
          font-size: 20px;
          display: flex;
          align-items: center;
          margin-bottom: 20px;
          border: 2px solid transparent;
          border-radius: 10px;
          padding: 12px 15px;
          cursor: pointer;
          transition: .2s;
          color: #01164d;
          text-decoration: none;
          border-radius: 5px;
          box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;

          &__active {
            background-color: #0063db;
            color: #fff;
          }

          &__active .img {
            filter: brightness(0) invert(1);
          }

          &:hover {
            background-color: #0063db;
            color: #fff;
          }
          &:hover .img {
            filter: brightness(0) invert(1);
          }
          &:nth-last-child(1) {
            position: relative;
            bottom: -450px;
          }

          .img {
            width: 25px;
            height: 25px;
            margin-right: 40px;
            transition: .2s;
          }
        }
      }
    }
  }
}
</style>