import LoginPage from "@/pages/LoginPage.vue";
import HomePage from "@/pages/HomePage.vue";
import {createRouter, createWebHistory} from "vue-router";
import DistributionPage from "@/pages/DistributionPage.vue";
import EmployeesPage from "@/pages/EmployeesPage.vue";

const routes = [
    {
        path: "/login",
        component: LoginPage,
        name: "Login"
    },
    {
        path: "/home",
        component: HomePage,
        name: "Home"
    },
    {
        path: "/distribution",
        component: DistributionPage,
        name: "Distribution"
    },
    {
        path: "/employees",
        component: EmployeesPage,
        name: "Employees"
    }

]

const router = createRouter({
    routes,
    history: createWebHistory(),
    linkActiveClass: "active",
})

export default router;