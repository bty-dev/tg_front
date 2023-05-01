<template>
    <div class="main">
        <div class="wrapper">
            <div class="page__title">
                Рассылка
            </div>
            <div class="page__subtitle">
                Настройки
            </div>
            <button class="create">Создать рассылку +</button>
            <div class="list">
                <div class="list__item" v-for="msg in messages" :key="msg.id">
                    <div class="name">{{msg.date}}</div>
                    <button class="more">Перейти</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
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

        return {
            messages
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
          border: 1px solid #0063db;
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
              border: 2px solid #0063db;
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
}
</style>