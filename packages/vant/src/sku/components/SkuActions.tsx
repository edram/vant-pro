import { defineComponent, PropType } from 'vue';

export default defineComponent({
  props: {},

  setup(props, { slots }) {
    return () => <div>12</div>;
  },
});
