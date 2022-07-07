"use strict";
var common_vendor = require("../../common/vendor.js");
if (!Math) {
  (indexSwiper + recommend + Card + Commondity)();
}
const indexSwiper = () => "./recommend/indexSwiper.js";
const recommend = () => "./recommend/recommend.js";
const Card = () => "../common/Card.js";
const Commondity = () => "../common/Commondity.js";
const _sfc_main = {
  __name: "recommend",
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          size: "375"
        })
      };
    };
  }
};
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "F:/Git/shop-app/components/index/recommend.vue"]]);
wx.createComponent(Component);
