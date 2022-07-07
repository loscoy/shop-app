"use strict";
var common_vendor = require("../../common/vendor.js");
if (!Math) {
  (navBar + recommend + sport)();
}
const recommend = () => "../../components/index/recommend.js";
const sport = () => "../../components/index/sport.js";
const navBar = () => "../../components/index/navBar.js";
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const navBarList = common_vendor.reactive(["\u63A8\u8350", "\u8FD0\u52A8\u6237\u5916", "\u670D\u9970\u5185\u8863", "\u978B\u9774\u7BB1\u5305", "\u7F8E\u5986\u4E2A\u62A4", "\u5BB6\u5C45\u6570\u7801", "\u98DF\u54C1\u6BCD\u5A74"]);
    const pageIndex = common_vendor.ref(0);
    const currentId = common_vendor.ref("v0");
    const containerHeight = common_vendor.ref(0);
    const shopData = common_vendor.ref({});
    common_vendor.onInit(() => {
    });
    common_vendor.onReady(() => {
      common_vendor.index.$on("index", (index) => {
        pageIndex.value = index;
        currentId.value = `v${index}`;
      });
      Data();
    });
    common_vendor.watch([shopData, pageIndex], (nval) => {
      common_vendor.nextTick(getContainer);
    });
    common_vendor.provide("list", shopData);
    const Data = async () => {
      const db = common_vendor.tn.database();
      let res = await db.collection("Aolai").get();
      shopData.value = res.result.data[0].data;
    };
    const getContainer = () => {
      let container = common_vendor.index.createSelectorQuery().select(".container");
      container.boundingClientRect((data) => {
        containerHeight.value = data.height;
      }).exec();
    };
    const changePage = (e) => {
      pageIndex.value = e.detail.current;
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          current: pageIndex.value,
          navBarList,
          currentId: currentId.value
        }),
        b: common_vendor.f(navBarList, (item, index, i0) => {
          return {
            a: "57280228-1-" + i0,
            b: "57280228-2-" + i0,
            c: index
          };
        }),
        c: pageIndex.value === 0,
        d: pageIndex.value === 1,
        e: common_vendor.o(changePage),
        f: pageIndex.value,
        g: common_vendor.s(`height:${containerHeight.value}px`)
      };
    };
  }
};
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-57280228"], ["__file", "F:/Git/shop-app/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
