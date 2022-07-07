"use strict";
var common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  __name: "recommend",
  setup(__props) {
    const list = common_vendor.ref({});
    common_vendor.onReady(() => {
      getData();
    });
    const getData = async () => {
      const db = common_vendor.tn.database();
      const res = await db.collection("Aolai").where('_id=="62c63dc10d08220001d296cf"').get();
      list.value = res.result.data[0].Children;
    };
    return (_ctx, _cache) => {
      return {
        a: list.value.bigImg,
        b: common_vendor.f(list.value.data, (item, k0, i0) => {
          return {
            a: item,
            b: item.imgUrl
          };
        })
      };
    };
  }
};
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1c2887c1"], ["__file", "F:/Git/shop-app/components/index/recommend/recommend.vue"]]);
wx.createComponent(Component);
