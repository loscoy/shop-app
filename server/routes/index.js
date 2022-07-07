var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", {
    title: "Express",
  });
});
router.get("/indexData", function (req, res, next) {
  res.json({
    code: "0",
    navBar: [
      {
        id: 1,
        name: "推荐",
      },
      {
        id: 2,
        name: "运动户外",
      },
      {
        id: 3,
        name: "服饰内衣",
      },
      {
        id: 4,
        name: "鞋靴箱包",
      },
      {
        id: 5,
        name: "美妆个护",
      },
      {
        id: 6,
        name: "家居数码",
      },
      {
        id: 7,
        name: "食品母婴",
      },
    ],
    data: {
      swiperList: {
        type: "swiperList",
        data: [
          { imgUrl: "../../../static/images/img/swiper1.jpg" },
          { imgUrl: "../../../static/images/img/swiper2.jpg" },
          { imgUrl: "../../../static/images/img/swiper3.jpg" },
        ],
      },
      recommendList: {
        type: "recommendList",
        data: [
          {
            bigImg: "../../../static/images/img/Children.jpg",
            data: [
              { imgUrl: "../../../static/images/img/Children1.jpg" },
              { imgUrl: "../../../static/images/img/Children2.jpg" },
              { imgUrl: "../../../static/images/img/Children3.jpg" },
            ],
          },
          {
            bigImg: "../../../static/images/img/Furnishing.jpg",
            data: [
              { imgUrl: "../../../static/images/img/Furnishing1.jpg" },
              { imgUrl: "../../../static/images/img/Furnishing2.jpg" },
              { imgUrl: "../../../static/images/img/Furnishing3.jpg" },
            ],
          },
        ],
      },
      commodityList: {
        type: "commodityList",
        data: [
          {
            id: 1,
            imgUrl: "../../static/images/img/commodity1.jpg",
            title: "Lucky Ozasec女士流速浪漫蝴蝶绑带衬衫K19238",
            price: 229,
            oprice: 300,
            discount: 5.2,
          },
          {
            id: 2,
            imgUrl: "../../static/images/img/commodity2.jpg",
            title: "Lucky Ozasec女士流速浪漫蝴蝶绑带衬衫K19238",
            price: 239,
            oprice: 300,
            discount: 5.2,
          },
          {
            id: 3,
            imgUrl: "../../static/images/img/commodity3.jpg",
            title: "Lucky Ozasec女士流速浪漫蝴蝶绑带衬衫K19238",
            price: 299,
            oprice: 300,
            discount: 5.2,
          },
          {
            id: 4,
            imgUrl: "../../static/images/img/commodity4.jpg",
            title: "Lucky Ozasec女士流速浪漫蝴蝶绑带衬衫K19238",
            price: 329,
            oprice: 400,
            discount: 5.2,
          },
        ],
      },
    },
  });
});

module.exports = router;
