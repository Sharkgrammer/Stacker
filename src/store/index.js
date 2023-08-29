import {createStore} from "vuex";
import createPersistedState from "vuex-persistedstate";

export default createStore({
    state() {
        return {
            settingsGameSize: 1,
            settingsHeight: 15,
            settingsWidth: 7,
            settingsTimerBaseSpeed: 5,
            settingsTheme: 1,
            settingsMute: false,
        }
    },
    mutations: {
        setGameSize(state, settingsGameSize) {
            state.settingsGameSize = settingsGameSize
        },
        setHeight(state, settingsHeight) {
            state.settingsHeight = settingsHeight
        },
        setWidth(state, settingsWidth) {
            state.settingsWidth = settingsWidth
        },
        setTimerBaseSpeed(state, settingsTimerBaseSpeed) {
            state.settingsTimerBaseSpeed = settingsTimerBaseSpeed
        },
        setTheme(state, settingsTheme) {
            state.settingsTheme = settingsTheme
        },
        setMute(state, settingsMute) {
            state.settingsMute = settingsMute
        },
    },
    getters: {
        settingsGameSize: state => state.settingsGameSize,
        settingsHeight: state => state.settingsHeight,
        settingsWidth: state => state.settingsWidth,
        settingsTimerBaseSpeed: state => state.settingsTimerBaseSpeed,
        settingsTheme: state => state.settingsTheme,
        settingsMute: state => state.settingsMute,
    },
    plugins: [createPersistedState()]
});
