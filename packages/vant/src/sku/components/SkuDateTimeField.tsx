import { defineComponent, PropType } from 'vue';
import { createNamespace } from 'vant/es/utils';
const [name, bem] = createNamespace('sku-datetime-field');

// Components
import Popup from 'vant/es/popup';
import type { PickerConfirmEventParams } from 'vant';
import TimePicker from 'vant/es/time-picker';
import DatePicker from 'vant/es/date-picker';
import Field from 'vant/es/field';

const title = {
  date: '选择年月日',
  time: '选择时间',
};

export default defineComponent({
  name,

  props: {
    value: String,
    label: String,
    required: Boolean,
    placeholder: String,
    type: {
      type: String as PropType<'date' | 'time'>,
      default: 'date',
    },
  },

  data() {
    const now = new Date();

    return {
      showDatePicker: false,
      currentDate:
        this.type === 'time'
          ? [`${now.getHours()}`, `${now.getMinutes()}`]
          : [
              `${now.getFullYear()}`,
              `${now.getMonth() + 1}`,
              `${now.getDate()}`,
            ],
    };
  },

  watch: {
    value(val) {
      switch (this.type) {
        case 'time':
          this.currentDate = val.split(':');
          break;
        case 'date':
          this.currentDate = val.split('-');
          break;
      }
    },
  },

  computed: {
    title(): string {
      return title[this.type];
    },
  },

  methods: {
    onClick() {
      this.showDatePicker = true;
    },
    onConfirm({ selectedValues }: PickerConfirmEventParams) {
      this.$emit(
        'update:modelValue',
        this.type == 'time'
          ? selectedValues.join(':')
          : selectedValues.join('-'),
      );
      this.showDatePicker = false;
    },

    onCancel() {
      this.showDatePicker = false;
    },
  },

  render() {
    return (
      <Field
        readonly
        is-link
        center
        value={this.value}
        label={this.label}
        required={this.required}
        placeholder={this.placeholder}
        onClick={this.onClick}
        v-slots={{
          extra: () => {
            let pick: JSX.Element | null = null;

            if (this.type == 'date') {
              pick = (
                <DatePicker
                  title={this.title}
                  modelValue={this.currentDate}
                  onCancel={this.onCancel}
                  onConfirm={this.onConfirm}
                />
              );
            } else {
              pick = (
                <TimePicker
                  modelValue={this.currentDate}
                  title={this.title}
                  onCancel={this.onCancel}
                  onConfirm={this.onConfirm}
                />
              );
            }

            return (
              <Popup
                v-model={[this.showDatePicker, 'show']}
                round
                position="bottom"
                teleport="body"
              >
                {pick}
              </Popup>
            );
          },
        }}
      ></Field>
    );
  },
});
