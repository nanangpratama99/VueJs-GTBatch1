import Detail from "./pages/Detail.vue"
import Galery from "./pages/Galery.vue"
import Form from "./pages/Form.vue"


export default [
    {
        path: '/',
        component: Detail,
    },
    {
        path: '/galery',
        component: Galery
    },
    {
        path: '/form',
        component: Form
    }

]