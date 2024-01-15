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
      disable-stepper-input
      reset-stepper-on-hide
      safe-area-inset-bottom
      reset-selected-sku-on-hide
      @buy-clicked="onBuyClicked"
      @add-cart="onAddCartClicked"
    />
    <van-button block type="primary" @click="showBase = true">基础用法</van-button>
  </div>
</template>

<script setup>
import { Sku } from '@edram/vant-pro';
import { getSkuData } from './data';
import { ref } from 'vue';
import { Toast } from 'vant';

const skuData = getSkuData();
const showBase = ref(false);
const messageConfig = {
  initialMessages: {
    留言1: '商品留言',
  },
  uploadImg: (file, img) =>
    new Promise((resolve) => {
      setTimeout(() => resolve(img), 1000);
    }),
  uploadMaxSize: 3,
};

const onBuyClicked = (data) => {
  Toast('buy:' + JSON.stringify(data));
};
const onAddCartClicked = (data) => {
  Toast('buy:' + JSON.stringify(data));
};
</script>
