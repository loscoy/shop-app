"use strict";
var common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  __name: "indexSwiper",
  setup(__props) {
    const list = common_vendor.ref({});
    common_vendor.onReady(() => {
      getData();
    });
    const getData = async () => {
      const db = common_vendor.tn.database();
      const res = await db.collection("Aolai").where('_id=="62c575def17d0200011bd94c"').get();
      list.value = res.result.data[0].swiperList.data;
      console.log(list.value);
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(list.value, (item, index, i0) => {
          return {
            a: item.imgUrl,
            b: index
          };
        })
      };
    };
  }
};
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1c3abea2"], ["__file", "F:/Git/shop-app/components/index/recommend/indexSwiper.vue"]]);
wx.createComponent(Component);
