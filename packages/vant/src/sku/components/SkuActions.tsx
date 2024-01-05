import { defineComponent, PropType } from 'vue';
import { Button } from 'vant';

export default defineComponent({
  props: {},

  setup(props, { slots }) {
    return () => (
      <div>
        <div>123</div>
        <Button>123</Button>
      </div>
    );
  },
});
