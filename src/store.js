import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      userName: localStorage.getItem("UserName") || "",
      userID: localStorage.getItem("UserID") || "",
    };
  },
  mutations: {
    setName(state, value) {
      state.userName = value;
      localStorage.setItem("UserName", value);
    },
    setKey(state, value) {
      state.userID = value;
      localStorage.setItem("UserID", value);
    },

    clearUser(state) {
      state.userName = "";
      state.userID = "";
      localStorage.removeItem("UserName");
      localStorage.removeItem("UserID");
    },
  },
  actions: {
    // Các hàm để xử lý logic và gọi các mutations
  },
  getters: {
    getUserName: (state) => state.userName,
    getKey: (state) => state.userID,
    isLoginID: (state) => !!state.userID,
  },
});

export default store;
