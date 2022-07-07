"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "Card",
  props: {
    title: {
      type: String,
      default: "\u731C\u4F60\u559C\u6B22"
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(__props.title)
      };
    };
  }
};
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-3879f0e9"], ["__file", "F:/Git/shop-app/components/common/Card.vue"]]);
wx.createComponent(Component);
