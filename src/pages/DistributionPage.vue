<template>
    <div class="main">
        <div class="wrapper">
            <div class="page__title">
                Рассылка
            </div>
            <div class="page__subtitle">
                Настройки
            </div>
            <button @click="isModalOpen = true" class="create">Создать рассылку +</button>
            <div class="list">
                <div class="list__item" v-for="msg in messages" :key="msg.id">
                    <div class="name">{{msg.date}}</div>
                    <button class="more">Перейти</button>
                </div>
            </div>
        </div>
        <div class="modal__wrapper" v-if="isModalOpen" @click="isModalOpen = false">
          <div class="modal__content" @click.stop>
            <div class="modal__title">
              Создание новой рассылки
            </div>
            <div class="modal__controls">
              <label for="send_date">Дата отправки:</label>
              <input id="send_date" type="text">
            </div>
            <div class="modal__controls">
              <label for="send_text">Текст сообщения:</label>
              <textarea id="send_text"/>
            </div>
            <button class="create__message">Создать рассылку</button>
          </div>
        </div>
    </div>
</template>

<script>
import {ref} from "vue";

export default {
    setup() {
        const messages = [
            {id: 1, date: "17.07.2003"},
            {id: 2, date: "17.07.2003"},
            {id: 3, date: "17.07.2003"},
            {id: 4, date: "17.07.2003"},
            {id: 5, date: "17.07.2003"},
            {id: 6, date: "17.07.2003"},
            {id: 7, date: "17.07.2003"},
            {id: 7, date: "17.07.2003"},
            {id: 7, date: "17.07.2003"},
            {id: 7, date: "17.07.2003"},
        ]

        const isModalOpen = ref(false);

        return {
            messages,
            isModalOpen
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
    .create {
        cursor: pointer;
        width: 100%;
        outline: none;
        border: 2px solid transparent;
        font-size: 20px;
        background-color: #0063db;
        margin: 10px 0;
        padding: 10px 12px;
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
      .list {
          margin: 10px 0;
          border-radius: 5px;
          box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
          padding: 10px;
          width: 100%;
          height: 68vh;
          overflow-y: scroll;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;

          &__item {
              width: 100%;
              display: flex;
              justify-content: space-between;
              align-items: center;
              padding: 10px 15px;
              border-radius: 5px;
              box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
              color: #01164d;
              margin-bottom: 10px;

              .name {
                  font-size: 20px;
              }
              .more {
                  cursor: pointer;
                  outline: none;
                  border: 2px solid transparent;
                  font-size: 20px;
                  background-color: #0063db;
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
  }

  .modal__wrapper {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, .6);
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .modal__content {
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 30%;
    padding: 50px 80px;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
    border-radius: 5px;
  }
  .modal__title {
    font-size: 30px;
    color: #0063db;
    margin-bottom: 30px;
  }
  .modal__controls {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    & > label {
      font-size: 20px;
      margin-bottom: 5px;
    }
    & > input, textarea {
      font-size: 18px;
      width: 100%;
      outline: none;
      border: 1px solid transparent;
      padding: 8px 12px;
      border-radius: 5px;
      box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
      margin-bottom: 20px;
      resize: none;
    }
  }
  .create__message {
    width: 100%;
    cursor: pointer;
    outline: none;
    border: 2px solid transparent;
    font-size: 20px;
    background-color: #0063db;
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
</style>