"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "navBar",
  props: ["current", "navBarList", "currentId"],
  setup(__props) {
    const changeIndex = (index) => {
      common_vendor.index.$emit("index", index);
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(__props.navBarList, (item, index, i0) => {
          return {
            a: common_vendor.t(item),
            b: `v${index}`,
            c: index,
            d: common_vendor.o(($event) => changeIndex(index)),
            e: common_vendor.n(__props.current === index ? "active" : "")
          };
        }),
        b: __props.currentId
      };
    };
  }
};
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-194ae808"], ["__file", "F:/Git/shop-app/components/index/navBar.vue"]]);
wx.createComponent(Component);
