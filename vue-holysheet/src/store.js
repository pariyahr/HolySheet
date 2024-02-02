import { createStore } from 'vuex';

export default createStore({
  state: {
    backgroundVolume: 50, // default volume level
  },
  mutations: {
    SET_VOLUME(state, volume) {
      state.backgroundVolume = volume;
    },
  },
  actions: {
    setVolume({ commit }, volume) {
      commit('SET_VOLUME', volume);
    },
  },
});

