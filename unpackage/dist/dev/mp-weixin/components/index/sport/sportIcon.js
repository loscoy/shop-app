"use strict";
var common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  __name: "sportIcon",
  props: {
    isFill: {
      type: Boolean,
      default: false
    },
    text: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(8, (i, k0, i0) => {
          return common_vendor.e(__props.text !== "" ? {
            a: common_vendor.t(__props.text)
          } : {}, {
            b: i
          });
        }),
        b: common_vendor.n(__props.isFill ? "fill" : "notFill"),
        c: __props.text !== ""
      };
    };
  }
};
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-24ec994a"], ["__file", "F:/Git/shop-app/components/index/sport/sportIcon.vue"]]);
wx.createComponent(Component);
