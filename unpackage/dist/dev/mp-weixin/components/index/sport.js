"use strict";
var common_vendor = require("../../common/vendor.js");
if (!Math) {
  (banner + sportIcon + Card + Commondity + Shop)();
}
const banner = () => "./sport/banner.js";
const sportIcon = () => "./sport/sportIcon.js";
const Card = () => "../common/Card.js";
const Commondity = () => "../common/Commondity.js";
const Shop = () => "./sport/shop.js";
const _sfc_main = {
  __name: "sport",
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          text: "\u8FD0\u52A8\u70ED\u95E8"
        }),
        b: common_vendor.p({
          title: "\u8D85\u7EA7\u5927\u724C"
        }),
        c: common_vendor.p({
          isFill: true
        }),
        d: common_vendor.p({
          title: "\u70ED\u9500\u7206\u54C1"
        }),
        e: common_vendor.p({
          size: "250"
        }),
        f: common_vendor.p({
          title: "\u63A8\u8350\u5E97\u94FA"
        })
      };
    };
  }
};
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "F:/Git/shop-app/components/index/sport.vue"]]);
wx.createComponent(Component);
