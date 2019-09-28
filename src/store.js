import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    contacts: []
  },
  mutations: {
    addContact: (state, payload) => {
      console.log(state.contacts);
      state.contacts.push(payload);
      console.log(state.contacts);
    },
    setContacts: (state, payload) => {
      state.contacts = payload;
    }
  },
  actions: {
    addContact: (context, payload) => {
      Vue.http
        .post("https://peepols-a152c.firebaseio.com/contact.json", payload)
        .then(response => {
          console.log(response);
          context.commit('addContact', payload);
        });
    },
    getContacts: context => {
      Vue.http.get('https://peepols-a152c.firebaseio.com/contact.json').then(response => {
        return response.json();
      }).then(data => {
        const contactArray = [];
        for (let key in data) {
          contactArray.push(data[key]);
        }
        context.commit('setContacts', contactArray);
      });
    }
  },
  getters: {
    contacts: state => {
      return state.contacts;
    }
  }
})