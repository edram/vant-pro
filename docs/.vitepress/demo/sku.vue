<template>
  <div class="sku-container">
    <Sku
      v-model:show="showBase"
      :sku="skuData.sku"
      :quota="skuData.quota"
      :goods="skuData.goods_info"
      :goods-id="skuData.goods_id"
      :quota-used="skuData.quota_used"
      :properties="skuData.properties"
      :hide-stock="skuData.sku.hide_stock"
      :message-config="messageConfig"
      :start-sale-num="skuData.start_sale_num"
      :custom-sku-validator="customSkuValidator"
      disable-stepper-input
      reset-stepper-on-hide
      safe-area-inset-bottom
      reset-selected-sku-on-hide
      @buy-clicked="onBuyClicked"
      @add-cart="onAddCartClicked"
    />
    <van-button block type="primary" @click="showBase = true"> 12 </van-button>
  </div>
</template>

<script>
/* eslint-disable no-unused-vars */
import { initialSku, getSkuData } from './data';
import { Sku } from '@edram/vant-pro';

export default {
  components: {
    Sku: Sku,
  },
  data() {
    this.skuData = getSkuData();
    this.skuData2 = getSkuData(true);
    this.initialSku = initialSku;

    return {
      showBase: false,
      showCustom: false,
      showStepper: false,
      showSoldout: false,
      showLargePicturePreview: false,
      customSkuValidator: () => '请选择xxx',
      customStepperConfig: {
        quotaText: '单次限购100件',
        stockFormatter: (stock) => `剩余${stock}`,
        handleOverLimit: (data) => {
          const { action, limitType, quota, startSaleNum = 1 } = data;

          if (action === 'minus') {
            this.$toast(
              startSaleNum > 1 ? `${startSaleNum}件起售` : '至少选择一件商品',
            );
          } else if (action === 'plus') {
          }
        },
      },
      messageConfig: {
        initialMessages: {
          留言1: '商品留言',
        },
        uploadImg: (file, img) =>
          new Promise((resolve) => {
            setTimeout(() => resolve(img), 1000);
          }),
        uploadMaxSize: 3,
      },
    };
  },

  methods: {
    onBuyClicked(data) {
      this.$toast('buy:' + JSON.stringify(data));
    },

    onAddCartClicked(data) {
      this.$toast('add cart:' + JSON.stringify(data));
    },

    onPointClicked() {
      this.$toast('积分兑换');
    },
  },
};
</script>
