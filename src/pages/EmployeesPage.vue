<template>
    <div class="main">
        <div class="wrapper">
            <div class="page__title">
                Сотрудники
            </div>
            <div class="page__subtitle">
                Поиск сотрудников
            </div>
            <div class="search__field">
                <input type="text" placeholder="Введите ФИО сотрудника">
                <img class="loop" src="../assets/search.png" alt="">
            </div>
            <div class="list">
                <div class="list__item" v-for="emp in employees" :key="emp.id">
                    <div class="name">{{emp.name}}</div>
                    <button class="more">Перейти</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    setup() {
        const employees = [
            {id: 1, name: "Иванов Иван Иванович"},
            {id: 2, name: "Иванов Иван Иванович"},
            {id: 3, name: "Иванов Иван Иванович"},
            {id: 4, name: "Иванов Иван Иванович"},
            {id: 5, name: "Иванов Иван Иванович"},
            {id: 6, name: "Иванов Иван Иванович"},
            {id: 6, name: "Иванов Иван Иванович"},
            {id: 6, name: "Иванов Иван Иванович"},
            {id: 6, name: "Иванов Иван Иванович"},
            {id: 6, name: "Иванов Иван Иванович"},
            {id: 6, name: "Иванов Иван Иванович"},
        ]

        return {
            employees
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
    .search__field {
        width: 100%;
        display: flex;
        margin: 10px 0;
        position: relative;

        & > input {
            font-size: 18px;
            width: 100%;
            outline: none;
            border: 1px solid transparent;
            padding: 8px 12px;
            border-radius: 5px;
            box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
        }
        .loop {
            cursor: pointer;
            position: absolute;
            width: 25px;
            height: 25px;
            right: 10px;
            top: 50%;
            transform: translateY(-50%);
        }
    }
    .list {
        margin: 10px 0;
        border: 1px solid #0063db;
        padding: 10px;
        width: 100%;
        height: 72vh;
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