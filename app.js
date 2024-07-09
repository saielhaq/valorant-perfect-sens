const app = Vue.createApp({
  data() {
    return {
      calculatedSens: 1.0,
    };
  },
  methods: {
    lower() {
      this.calculatedSens = (this.calculatedSens / 2).toFixed(3);
    },
    higher() {
      this.calculatedSens = (this.calculatedSens * 1.5).toFixed(3);
    },
  },
});

app.mount("#app");
