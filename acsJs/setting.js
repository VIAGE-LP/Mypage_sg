// **************************************************
// - SETTING_ACTION_URL
//  => 'https://stg.acs-tpkg.com/mypageapi';
//  => 'https://asp.acs-tpkg.com/mypageapi';
//  => 'https://ekkyo.acs-tpkg.com/mypageapi';
// **************************************************
const SETTING_ACTION_URL = "https://asp.acs-tpkg.com/mypageapi";

// **************************************************
// - SETTING_SHIPPING_DATE_ACTION_URL
//  => 'https://stg.acs-tpkg.com/ld?type=init';
//  => 'https://asp.acs-tpkg.com/ld?type=init';
//  => 'https://ekkyo.acs-tpkg.com/ld?type=init';
// **************************************************
const SETTING_SHIPPING_DATE_ACTION_URL = "https://asp.acs-tpkg.com/ld?type=init";

// **************************************************
// 使用する環境の設定
// - SETTING_USER_ID
//  => 使用するユーザーIDを指定する
// - SETTING_ACCOUNT_ID
//  => 使用するACCOUNT_IDを指定する
// **************************************************
const SETTING_USER_ID    = "nextage_lpsg2";
const SETTING_ACCOUNT_ID = "2021110001";
// const SETTING_USER_ID    = "tatest1";
// const SETTING_ACCOUNT_ID = "2014030002";

// **************************************************
// 利用言語情報
// - tw : 台湾語
// - en : 英語
// **************************************************
const SETTING_LANGUAGE = "tw";

// **************************************************
// 利用日期
// - tw : https://www.cros.tw/support/hld/holiday_tw.js
// - en : https://www.cros.tw/support/hld/holiday_sg.js
// **************************************************
const SETTING_HOLIDAY = "https://www.cros.tw/support/hld/holiday_tw.js";

// **************************************************
// 日期顯示格式設定
// => 1 : 日/月/年 (Sat Jan 01 2022)
// => 2 : 年/月/日 (2022/01/01)
// **************************************************
const SETTING_DEFAULT_DATE_DISPALY = "2";

// **************************************************
// 姓名顯示設定
// => 1 : 名，姓
// => 2 : 姓，名
// **************************************************
const SETTING_DEFAULT_NAME = "2";

// **************************************************
// 客製顏色
// - SETTING_COLOR_PRIMARY 底色
// - SETTING_COLOR_SECOND  框線
// **************************************************
const SETTING_COLOR_PRIMARY = "#FFE9E9";
const SETTING_COLOR_SECOND  = "#FFC3C0";

document.documentElement.style.setProperty("--primaryBGColor", SETTING_COLOR_PRIMARY);
document.documentElement.style.setProperty("--secondaryBGColor", SETTING_COLOR_SECOND);

// **************************************************
// Mypage 相關檔案存放位置
// **************************************************
// const SETTING_MYPAGE  = "Mypage/";
const SETTING_MYPAGE  = "";

// **************************************************
// SETTING_IMAGE 填寫上方圖檔放置位置
// e.g: VCommonFiles/Mypage/img/logo.jpg
// **************************************************
// const SETTING_IMAGE = "Mypage/img/logo.jpg";
const SETTING_IMAGE = "img/logo.svg";
const SETTING_IMAGE_BGL = "img/left_bg.png";
const SETTING_IMAGE_BGR = "img/right_bg.png";
// **************************************************
// 依據利用言語情報引入不同語言包
// 設定引入holiday
// **************************************************
document.write('<script type="text/javascript" src="' + SETTING_MYPAGE + 'lang_' + SETTING_LANGUAGE + '.js"></script>');
document.write('<script type="text/javascript" src="' + SETTING_HOLIDAY + '"></script>');
