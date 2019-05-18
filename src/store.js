import Vue from 'vue';
import Vuex from 'vuex';
import { filter } from 'lodash';
import data from '@/configs/data';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    matches: data.matches
  },
  getters: {
    stats: state => {
      return {
        wins: filter(state.matches, match => match.won).length,
        losses: filter(state.matches, match => !match.won).length
      };
    }
  },
  mutations: {

  },
  actions: {

  }
});
