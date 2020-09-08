import { h } from "vue";

export default {
  render(localH) {
    return (h || localH)("div", {}, this.$slots.default());
  }
};
