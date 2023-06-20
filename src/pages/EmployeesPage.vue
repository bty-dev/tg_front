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
                <input v-model="searchQuery" type="text" placeholder="Введите ФИО сотрудника">
                <img class="loop" src="../assets/search.png" alt="">
            </div>
            <div class="list">
                <div class="list__item" v-for="emp in filteredEmployees" :key="emp.id">
                    <div class="name">{{emp.name}}</div>
                    <button class="more" @click="() => openModalWithId(emp.id)">Перейти</button>
                </div>
            </div>
        </div>
        <div class="modal__wrapper" v-if="isModalOpen" @click="isModalOpen = false">
          <div class="modal__content" @click.stop>
            <div class="modal__title">
              Карточка сотрудника
            </div>
            <div class="modal__controls">
              <label for="name">ФИО</label>
              <input id="name" type="text" readonly  :value="currentEmp.name">
            </div>
            <div class="modal__controls">
              <label for="id">Идентификатор</label>
              <input id="id" type="text" readonly :value="currentEmp.id">
            </div>
            <div class="modal__controls">
              <label for="position">Должность</label>
              <input id="position" type="text" readonly :value="currentEmp.position">
            </div>
          </div>
        </div>
    </div>
</template>

<script>
import {computed, onMounted, reactive, ref} from "vue";
import axios from "axios";
import instance from "@/api/api";

export default {
    setup() {
      // const employees = [
      //     {id: 1, name: "Иванов Ильнар Иванович", position: "Программист"},
      //     {id: 2, name: "Иванов Иван Иванович", position: "Программист"},
      //     {id: 3, name: "Иванов Иван Иванович", position: "Программист"},
      //     {id: 4, name: "Иванов Иван Иванович", position: "Программист"},
      //     {id: 5, name: "Иванов Иван Иванович", position: "Программист"},
      //     {id: 6, name: "Иванов Иван Иванович", position: "Программист"},
      //     {id: 7, name: "Иванов Иван Иванович", position: "Программист"},
      //     {id: 8, name: "Иванов Иван Иванович", position: "Программист"},
      //     {id: 9, name: "Иванов Иван Иванович", position: "Программист"},
      //     {id: 10, name: "Иванов Иван Иванович", position: "Программист"},
      //     {id: 11, name: "Иванов Иван Поварович", position: "Повар"},
      // ]
      const employees = ref([]);

      onMounted(() => {
        instance.get("/api/employees")
            .then(res => {
              employees.value = res.data;
              console.log(res.data)
            });
      })

      let currentEmp = ref({});

      const isModalOpen = ref(false);
      const openModalWithId = (empId) => {
        currentEmp.value = employees.value[employees.value.findIndex(item => item.id === empId)];
        console.log(currentEmp)
        isModalOpen.value = true;
      }

      const searchQuery = ref("");

      const filteredEmployees = computed(() => {
        return employees.value.filter(item => {
          return (
              item.name
                  .toLowerCase()
                  .includes(searchQuery.value.toLowerCase())
          )
        })
      })

        return {
            employees,
            searchQuery,
            filteredEmployees,
            isModalOpen,
            openModalWithId,
            currentEmp
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
        margin-bottom: 0;
        border-radius: 5px;
        box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
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