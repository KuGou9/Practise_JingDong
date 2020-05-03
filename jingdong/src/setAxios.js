import axios from "axios"
import store from "./store/index"
import router from "./router/index"

// http全局拦截
//token要放在我们请求的header上面带回去给后端

export default function setAxios() {
    //请求拦截
    axios.interceptors.request.use(
        config => {
            if (store.state.token) {
                config.headers.token = store.state.token;
            }
            return config;
        }
    )
    // 拦截器。//每次的请求有返回的，都是先经过这个拦截器先的
    axios.interceptors.response.use(
        response => {
            console.log("response", response)
            const data = response.data;
            if (response.status == 200) {
                if (data.code == -1) {
                    // 登录过期，需重新登录，清除vuex、localStorage的token
                    store.commit("setToken", "");
                    localStorage.removeItem("token");
                    //跳转到login页面
                    router.replace({
                        path: "/login"
                    });
                }
                return data;
            }
            return response;

        },
        // console.log("response", response)
    )
}