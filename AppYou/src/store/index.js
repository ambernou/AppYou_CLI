import { createStore } from "vuex"

const appListUrl = "https://appyou.ru/app_list.json"

const store = createStore({
    state: {
        appList: [],
        error: false
    },
    mutations: {
        setAppListData (state, payload) {
            state.appList = payload
        },
        setLoadError (state, payload) {
            state.error = payload
        }
    },
    actions: {
        async getJson({ commit }) {
            try {
                const response = await fetch(appListUrl)
                // console.log('response: ', response)

                if (!response.ok) {
                    throw new Error('some error')
                }

                const result = await response.json()
                commit('setAppListData', result)
            } catch (err) {
                console.warn(err)
                const errorValue = true
                commit('setLoadError', errorValue)
            }
        }
    },
    getters: {
        getAppList: state => state.appList
    }
})

export default store