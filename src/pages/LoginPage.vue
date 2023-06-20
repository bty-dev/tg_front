<template>
    <div class="main">
      <div class="card">
        <div class="card__title">
          Добро пожаловать!
        </div>
        <div class="card__subtitle">
          Введите данные от своего аккаунта :)
        </div>
        <div class="card__controls">
            <label for="login">Логин</label>
            <input @input="invalid = false" v-model="login" id="login" type="text">
            <small v-if="invalid">Проверьте правильность введенных данных!</small>
        </div>
        <div class="card__controls">
            <label for="password">Пароль</label>
            <input v-model="password" id="password" type="password">
            <small v-if="invalid">Проверьте правильность введенных данных!</small>
        </div>
        <button @click="signIn" class="card__btn">Авторизоваться!</button>
      </div>
    </div>
</template>

<script>
import {ref} from "vue";
import {useRouter} from "vue-router";
import axios from "axios";
import store from "@/store";

export default {
    setup() {
        const login = ref("");
        const password = ref("");

        const invalid = ref(false);

        const router = useRouter();

        const signIn = () => {
          axios.post("http://localhost:5000/api/login", {
            login: login.value,
            password: password.value
          })
          .then(res => {
            if (res.status === 200) {
              store.dispatch("setAuth", true);
              router.push("/home")
            }
          })
          .catch(e => invalid.value = true);

        }

        return {
          login,
          password,
          signIn,
          invalid
        }
    }
}
</script>

<style lang="scss" scoped>
.main {
  background-color: #fff;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .card {
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    padding: 50px 30px;
    border-radius: 25px;
    padding-bottom: 0;
    color: #01164d;

    &__title {
      text-align: center;
      font-size: 40px;
      font-weight: 700;
      margin-bottom: 10px;
    }
    &__subtitle {
      text-align: center;
      font-size: 18px;
      margin-bottom: 30px;
    }
    &__controls {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;

      label {
        font-size: 20px;
        margin-bottom: 8px;
        margin-top: 5px;
      }
      input {
        font-size: 18px;
        width: 100%;
        outline: none;
        border: 1px solid transparent;
        padding: 8px 12px;
        border-radius: 5px;
        box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
      }
    }
    &__btn {
      cursor: pointer;
      width: 100%;
      outline: none;
      border: 2px solid transparent;
      font-size: 20px;
      background-color: #0063db;
      margin: 30px 0;
      padding: 8px 12px;
      border-radius: 10px;
      transition: .2s;
      color: #fff;
      font-weight: 700;

      &:hover {
        color: #0063db;
        border-color: #0063db;
        background-color: #fff;

      }
    }
  }
}
small {
  color: red;
  font-size: 15px;
}
</style>