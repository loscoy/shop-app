if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor;
    return this.then((value) => promise.resolve(callback()).then(() => value), (reason) => promise.resolve(callback()).then(() => {
      throw reason;
    }));
  };
}
;
if (typeof uni !== "undefined" && uni && uni.requireGlobal) {
  const global = uni.requireGlobal();
  ArrayBuffer = global.ArrayBuffer;
  Int8Array = global.Int8Array;
  Uint8Array = global.Uint8Array;
  Uint8ClampedArray = global.Uint8ClampedArray;
  Int16Array = global.Int16Array;
  Uint16Array = global.Uint16Array;
  Int32Array = global.Int32Array;
  Uint32Array = global.Uint32Array;
  Float32Array = global.Float32Array;
  Float64Array = global.Float64Array;
  BigInt64Array = global.BigInt64Array;
  BigUint64Array = global.BigUint64Array;
}
;
if (uni.restoreGlobal) {
  uni.restoreGlobal(Vue, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
(function(shared, vue) {
  "use strict";
  const ON_LOAD = "onLoad";
  const ON_READY = "onReady";
  function isDebugMode() {
    return typeof __channelId__ === "string" && __channelId__;
  }
  function jsonStringifyReplacer(k, p) {
    switch (shared.toRawType(p)) {
      case "Function":
        return "function() { [native code] }";
      default:
        return p;
    }
  }
  function normalizeLog(type, filename, args) {
    if (isDebugMode()) {
      args.push(filename.replace("at ", "uni-app:///"));
      return console[type].apply(console, args);
    }
    const msgs = args.map(function(v) {
      const type2 = shared.toTypeString(v).toLowerCase();
      if (["[object object]", "[object array]", "[object module]"].indexOf(type2) !== -1) {
        try {
          v = "---BEGIN:JSON---" + JSON.stringify(v, jsonStringifyReplacer) + "---END:JSON---";
        } catch (e) {
          v = type2;
        }
      } else {
        if (v === null) {
          v = "---NULL---";
        } else if (v === void 0) {
          v = "---UNDEFINED---";
        } else {
          const vType = shared.toRawType(v).toUpperCase();
          if (vType === "NUMBER" || vType === "BOOLEAN") {
            v = "---BEGIN:" + vType + "---" + v + "---END:" + vType + "---";
          } else {
            v = String(v);
          }
        }
      }
      return v;
    });
    return msgs.join("---COMMA---") + " " + filename;
  }
  function formatAppLog(type, filename, ...args) {
    const res = normalizeLog(type, filename, args);
    res && console[type](res);
  }
  const createHook = (lifecycle) => (hook, target = vue.getCurrentInstance()) => {
    !vue.isInSSRComponentSetup && vue.injectHook(lifecycle, hook, target);
  };
  const onLoad = /* @__PURE__ */ createHook(ON_LOAD);
  const onReady = /* @__PURE__ */ createHook(ON_READY);
  var _imports_0 = "/static/images/test.jpg";
  var _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main$e = {
    data() {
      return {};
    }
  };
  function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "indexSwiper" }, [
      vue.createElementVNode("swiper", {
        "indicator-dots": true,
        autoplay: true,
        interval: 3e3,
        duration: 1e3
      }, [
        (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, vue.renderList(3, (item) => {
          return vue.createElementVNode("swiper-item", { key: item }, [
            vue.createElementVNode("view", { class: "swiper-item" }, [
              vue.createElementVNode("image", {
                class: "swiper-images",
                src: _imports_0
              })
            ])
          ]);
        }), 64))
      ])
    ]);
  }
  var indexSwiper = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["render", _sfc_render$4], ["__scopeId", "data-v-1c3abea2"], ["__file", "F:/Git/shop-app/components/index/recommend/indexSwiper.vue"]]);
  const _sfc_main$d = {};
  function _sfc_render$3(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "recommend" }, [
      vue.createElementVNode("view", { class: "recommend-card" }, [
        vue.createElementVNode("view", { class: "top" }, [
          vue.createElementVNode("image", {
            class: "top-image",
            src: "/static/images/test.jpg"
          })
        ]),
        vue.createElementVNode("view", { class: "bottom" }, [
          vue.createElementVNode("image", {
            class: "bottom-image",
            src: "/static/images/test.jpg"
          }),
          vue.createElementVNode("image", {
            class: "bottom-image",
            src: "/static/images/test.jpg"
          }),
          vue.createElementVNode("image", {
            class: "bottom-image",
            src: "/static/images/test.jpg"
          })
        ])
      ])
    ]);
  }
  var recommend = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["render", _sfc_render$3], ["__scopeId", "data-v-1c2887c1"], ["__file", "F:/Git/shop-app/components/index/recommend/recommend.vue"]]);
  const _sfc_main$c = {
    props: {
      title: {
        type: String,
        default: "\u731C\u4F60\u559C\u6B22"
      }
    },
    setup(__props) {
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "Card" }, [
          vue.createElementVNode("header", { class: "header" }, [
            vue.createElementVNode("view", null, "-"),
            vue.createElementVNode("view", null, vue.toDisplayString(__props.title), 1),
            vue.createElementVNode("view", null, "-")
          ])
        ]);
      };
    }
  };
  var Card = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["__scopeId", "data-v-3879f0e9"], ["__file", "F:/Git/shop-app/components/common/Card.vue"]]);
  const _sfc_main$b = {
    props: {
      list: {
        type: Array
      },
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
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", {
          class: "commondity",
          style: vue.normalizeStyle(`flex-wrap:${__props.wrap}`)
        }, [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(__props.list, (item) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              class: "commondity-item",
              style: vue.normalizeStyle(`width:${__props.size}rpx`),
              key: item.id
            }, [
              vue.createElementVNode("image", {
                class: "commondity-img",
                style: vue.normalizeStyle(`height:${__props.size}rpx`),
                src: item.imgUrl
              }, null, 12, ["src"]),
              vue.createElementVNode("view", { class: "commodity-content" }, [
                vue.createElementVNode("text", { class: "item-title" }, vue.toDisplayString(item.title), 1),
                vue.createElementVNode("view", { class: "item-price" }, [
                  vue.createElementVNode("text", { class: "nprice" }, "\uFFE5" + vue.toDisplayString(item.price), 1),
                  vue.createElementVNode("text", { class: "oprice" }, "\uFFE5" + vue.toDisplayString(item.oprice), 1)
                ]),
                vue.createElementVNode("text", { class: "discount" }, vue.toDisplayString(item.discount) + "\u6298", 1)
              ])
            ], 4);
          }), 128))
        ], 4);
      };
    }
  };
  var Commondity = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["__scopeId", "data-v-766770ce"], ["__file", "F:/Git/shop-app/components/common/Commondity.vue"]]);
  const _sfc_main$a = {
    props: ["list"],
    setup(__props) {
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "recommend" }, [
          vue.createVNode(indexSwiper),
          vue.createVNode(recommend),
          vue.createVNode(Card),
          vue.createVNode(Commondity, {
            list: __props.list,
            size: "375"
          }, null, 8, ["list"])
        ]);
      };
    }
  };
  var PagesIndexChildRecommend = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__file", "F:/Git/shop-app/pages/index/child/recommend.vue"]]);
  const _sfc_main$9 = {};
  function _sfc_render$2(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "banner" }, [
      vue.createElementVNode("image", {
        class: "banner-image",
        src: _imports_0
      })
    ]);
  }
  var banner = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$2], ["__scopeId", "data-v-75a64282"], ["__file", "F:/Git/shop-app/components/index/sport/banner.vue"]]);
  const _sfc_main$8 = {
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
        return vue.openBlock(), vue.createElementBlock("view", { class: "sportIcon" }, [
          (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, vue.renderList(8, (i) => {
            return vue.createElementVNode("view", {
              class: "icon",
              key: i
            }, [
              vue.createElementVNode("image", {
                class: vue.normalizeClass([__props.isFill ? "fill" : "notFill"]),
                src: "/static/images/tabbar/menu-fill.png"
              }, null, 2),
              __props.text !== "" ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 0,
                class: "text"
              }, vue.toDisplayString(__props.text), 1)) : vue.createCommentVNode("v-if", true)
            ]);
          }), 64))
        ]);
      };
    }
  };
  var sportIcon = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-24ec994a"], ["__file", "F:/Git/shop-app/components/index/sport/sportIcon.vue"]]);
  const _sfc_main$7 = {
    props: ["list"],
    setup(__props) {
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "shop" }, [
          vue.createElementVNode("view", { class: "shop-item" }, [
            vue.createElementVNode("image", {
              class: "title-img",
              src: "/static/images/test.jpg"
            }),
            vue.createElementVNode("scroll-view", {
              class: "scroll",
              "scroll-x": "true"
            }, [
              vue.createVNode(Commondity, {
                list: __props.list,
                size: "250",
                wrap: "no-wrap"
              }, null, 8, ["list"])
            ])
          ])
        ]);
      };
    }
  };
  var Shop = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-b1ae6f6e"], ["__file", "F:/Git/shop-app/components/index/sport/shop.vue"]]);
  const _sfc_main$6 = {
    props: ["list"],
    setup(__props) {
      const bool = vue.ref(true);
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "sport" }, [
          vue.createVNode(banner),
          vue.createVNode(sportIcon, { text: "\u8FD0\u52A8\u70ED\u95E8" }),
          vue.createVNode(Card, { title: "\u8D85\u7EA7\u5927\u724C" }),
          vue.createVNode(sportIcon, { isFill: bool.value }, null, 8, ["isFill"]),
          vue.createVNode(Card, { title: "\u70ED\u9500\u7206\u54C1" }),
          vue.createVNode(Commondity, {
            list: __props.list,
            size: "250"
          }, null, 8, ["list"]),
          vue.createVNode(Card, { title: "\u63A8\u8350\u5E97\u94FA" }),
          vue.createVNode(Shop, { list: __props.list }, null, 8, ["list"])
        ]);
      };
    }
  };
  var PagesIndexChildSport = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__file", "F:/Git/shop-app/pages/index/child/sport.vue"]]);
  const _sfc_main$5 = {
    props: ["current", "navBarList", "currentId"],
    setup(__props) {
      onLoad(() => {
      });
      const changeIndex = (index) => {
        uni.$emit("index", index);
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "navBar" }, [
          vue.createElementVNode("scroll-view", {
            class: "navList",
            "scroll-x": "true",
            "scroll-into-view": __props.currentId
          }, [
            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(__props.navBarList, (item, index) => {
              return vue.openBlock(), vue.createElementBlock("view", {
                id: `v${index}`,
                key: index,
                onClick: ($event) => changeIndex(index),
                class: vue.normalizeClass(__props.current === index ? "active" : "")
              }, vue.toDisplayString(item), 11, ["id", "onClick"]);
            }), 128))
          ], 8, ["scroll-into-view"])
        ]);
      };
    }
  };
  var navBar = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-194ae808"], ["__file", "F:/Git/shop-app/components/index/navBar.vue"]]);
  const _sfc_main$4 = {
    setup(__props) {
      const list = vue.reactive([
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
      const navBarList = vue.reactive(["\u63A8\u8350", "\u8FD0\u52A8\u6237\u5916", "\u670D\u9970\u5185\u8863", "\u978B\u9774\u7BB1\u5305", "\u7F8E\u5986\u4E2A\u62A4", "\u5BB6\u5C45\u6570\u7801", "\u98DF\u54C1\u6BCD\u5A74"]);
      const pageIndex = vue.ref(0);
      const currentId = vue.ref("v0");
      const containerHeight = vue.ref(0);
      onLoad(() => {
        uni.$on("index", (index) => {
          pageIndex.value = index;
          currentId.value = `v${index}`;
        });
        getData();
      });
      onReady(() => {
        let container = uni.createSelectorQuery().select(".container");
        container.boundingClientRect((data) => {
          containerHeight.value = data.height;
        }).exec();
      });
      const getData = () => {
        wx.request({
          url: "http://localhost:3000/api",
          method: "GET",
          success: (res) => {
            formatAppLog("log", "at pages/index/index.vue:100", res);
          }
        });
      };
      const changePage = (e) => {
        pageIndex.value = e.detail.current;
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "index" }, [
          vue.createCommentVNode(" \u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u5934\u90E8 "),
          vue.createCommentVNode(" app\u5934\u90E8 "),
          vue.createElementVNode("view", { class: "app-nav nav" }, [
            vue.createElementVNode("view", { class: "icon-left iconfont icon-sousuo" }),
            vue.createElementVNode("text", null, "\u767E\u5E74\u5965\u83B1"),
            vue.createElementVNode("view", { class: "icon-right iconfont icon-pinglun-" })
          ]),
          vue.createVNode(navBar, {
            current: pageIndex.value,
            navBarList: vue.unref(navBarList),
            currentId: currentId.value
          }, null, 8, ["current", "navBarList", "currentId"]),
          vue.createElementVNode("swiper", {
            onChange: changePage,
            current: pageIndex.value,
            style: vue.normalizeStyle(`height:${containerHeight.value}px`)
          }, [
            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(navBarList), (item, index) => {
              return vue.openBlock(), vue.createElementBlock("swiper-item", { key: index }, [
                vue.createElementVNode("view", { class: "container" }, [
                  pageIndex.value === 0 ? (vue.openBlock(), vue.createBlock(PagesIndexChildRecommend, {
                    key: 0,
                    list: vue.unref(list)
                  }, null, 8, ["list"])) : vue.createCommentVNode("v-if", true),
                  pageIndex.value === 1 ? (vue.openBlock(), vue.createBlock(PagesIndexChildSport, {
                    key: 1,
                    list: vue.unref(list)
                  }, null, 8, ["list"])) : vue.createCommentVNode("v-if", true)
                ])
              ]);
            }), 128))
          ], 44, ["current"]),
          vue.createCommentVNode(' <recommend :list="list"></recommend>\r\n		<sport :list="list"></sport> ')
        ]);
      };
    }
  };
  var PagesIndexIndex = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-57280228"], ["__file", "F:/Git/shop-app/pages/index/index.vue"]]);
  const _sfc_main$3 = {
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
        return vue.openBlock(), vue.createElementBlock("view");
      };
    }
  };
  var PagesListList = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__file", "F:/Git/shop-app/pages/list/list.vue"]]);
  const _sfc_main$2 = {
    data() {
      return {};
    }
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view");
  }
  var PagesShopCartShopCart = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1], ["__file", "F:/Git/shop-app/pages/shopCart/shopCart.vue"]]);
  const _sfc_main$1 = {
    data() {
      return {};
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view");
  }
  var PagesUserCenterUserCenter = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__file", "F:/Git/shop-app/pages/userCenter/userCenter.vue"]]);
  __definePage("pages/index/index", PagesIndexIndex);
  __definePage("pages/list/list", PagesListList);
  __definePage("pages/shopCart/shopCart", PagesShopCartShopCart);
  __definePage("pages/userCenter/userCenter", PagesUserCenterUserCenter);
  __definePage("pages/index/child/sport", PagesIndexChildSport);
  __definePage("pages/index/child/recommend", PagesIndexChildRecommend);
  const _sfc_main = {
    onLaunch: function() {
      formatAppLog("log", "at App.vue:4", "App Launch");
    },
    onShow: function() {
      formatAppLog("log", "at App.vue:7", "App Show");
    },
    onHide: function() {
      formatAppLog("log", "at App.vue:10", "App Hide");
    }
  };
  var App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "F:/Git/shop-app/App.vue"]]);
  function createApp() {
    const app = vue.createVueApp(App);
    return {
      app
    };
  }
  const { app: __app__, Vuex: __Vuex__, Pinia: __Pinia__ } = createApp();
  uni.Vuex = __Vuex__;
  uni.Pinia = __Pinia__;
  __app__.provide("__globalStyles", __uniConfig.styles);
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.mount("#app");
})(uni.VueShared, Vue);
