"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "list",
  setup(__props) {
    reactive([
      {
        id: 1,
        imgUrl: "../../static/images/test.jpg",
        title: "Lucky Ozasec\u5973\u58EB\u6D41\u901F\u6D6A\u6F2B\u8774\u8776\u7ED1\u5E26\u886C\u886BK19238",
        price: 229,
        oprice: 300,
        discount: 5.2
      },
      {
        id: 2,
        imgUrl: "../../static/images/test.jpg",
        title: "Lucky Ozasec\u5973\u58EB\u6D41\u901F\u6D6A\u6F2B\u8774\u8776\u7ED1\u5E26\u886C\u886BK19238",
        price: 239,
        oprice: 300,
        discount: 5.2
      },
      {
        id: 3,
        imgUrl: "../../static/images/test.jpg",
        title: "Lucky Ozasec\u5973\u58EB\u6D41\u901F\u6D6A\u6F2B\u8774\u8776\u7ED1\u5E26\u886C\u886BK19238",
        price: 299,
        oprice: 300,
        discount: 5.2
      },
      {
        id: 4,
        imgUrl: "../../static/images/test.jpg",
        title: "Lucky Ozasec\u5973\u58EB\u6D41\u901F\u6D6A\u6F2B\u8774\u8776\u7ED1\u5E26\u886C\u886BK19238",
        price: 329,
        oprice: 400,
        discount: 5.2
      }
    ]);
    return (_ctx, _cache) => {
      return {};
    };
  }
};
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "F:/Git/shop-app/pages/list/list.vue"]]);
wx.createPage(MiniProgramPage);
