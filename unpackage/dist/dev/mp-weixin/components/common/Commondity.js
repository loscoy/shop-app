"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "Commondity",
  props: {
    size: {
      type: String,
      default: "375"
    },
    wrap: {
      type: String,
      default: "wrap"
    }
  },
  setup(__props) {
    const list = common_vendor.inject("list");
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.unref(list).commodityList
      }, common_vendor.unref(list).commodityList ? {
        b: common_vendor.f(common_vendor.unref(list).commodityList.data, (item, k0, i0) => {
          return {
            a: item.imgUrl,
            b: common_vendor.t(item.title),
            c: common_vendor.t(item.price),
            d: common_vendor.t(item.oprice),
            e: common_vendor.t(item.discount),
            f: item.id
          };
        }),
        c: common_vendor.s(`height:${__props.size}rpx`),
        d: common_vendor.s(`width:${__props.size}rpx`),
        e: common_vendor.s(`flex-wrap:${__props.wrap}`)
      } : {});
    };
  }
};
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-766770ce"], ["__file", "F:/Git/shop-app/components/common/Commondity.vue"]]);
wx.createComponent(Component);
