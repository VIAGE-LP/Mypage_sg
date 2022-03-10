// **************************************************
// Mypage HTML
// **************************************************
var myPageinnerHTML = `
<link href="` + SETTING_MYPAGE + `sass/style.css" rel="stylesheet">

  <div class="Datecontainer">
    <img src="` + SETTING_IMAGE + `" class="logo">
    <img src="` + SETTING_IMAGE_BGL + `" class="BGL">
    <img src="` + SETTING_IMAGE_BGR + `" class="BGR">
    <div class="content">
      <div class="box1">
        <!--h2>Step1 請輸入 "account_id" 及 "order_token"</h2-->
        <p>
          <input type="hidden" name="account_id" id="account_id" size="30">
        </p>
      </div>
      <div class="box2">
        <p>
          <input type="hidden" name="order_token" id="order_token" value="" size="30">
        </p>
      </div>
      
      <div class="orderTable">
        <h2 id="order_info_title"></h2>
        <table>
          <tr>
            <td><p id="order_id_info_title" name="order_id_info_title"></p></td>
            <td><p id="order_id_info" name="order_id_info"></p></td>
          </tr>
          <tr>
            <td><p id="status_title" name="status_title"></p></td>
            <td><p id="status" name="status"></p></td>
          </tr>
          <tr>
            <td><p id="name_info_title" name="name_info_title"></p></td>
            <td><p id="name_info" name="name_info"></p></td>
          </tr>
          <tr>
            <td><p id="payment_info_title" name="payment_info_title"></p></td>
            <td><p id="payment_info" name="payment_info"></p></td>
          </tr>
          <tr>
            <td><p id="product_info_title" name="product_info_title"></p></td>
            <td><p id="product_info" name="product_info"></p></td>
          </tr>
          <tr>
            <td><p id="ShippingDate_info_title" name="ShippingDate_info_title"></p></td>
            <td>
              <span id="ShippingDate_info" name="ShippingDate_info"></span>
              <input type="button" id="displayInputDate" onclick="displayInputDate();">
            </td>
          </tr>
          <tr>
            <td><p id="payment_method_title" name="payment_method_title"></p></td>
            <td><p id="payment_method" name="payment_method"></p></td>
          </tr>
          <tr>
            <td><p id="receiving_method_title" name="receiving_method_title"></p></td>
            <td><p id="receiving_method" name="receiving_method"></p></td>
          </tr>
          <tr>
            <td><p id="delivery_status_title" name="status_title"></p></td>
            <td><p id="delivery_status" name="status"></p></td>
          </tr>
         
          <tr>
            <td colspan=2><p id="receiving_forbidon" name="receiving_forbidon"></p></td>
            <p id="token_info" name="token_info"></p>
            <p id="failed" class="TextCenter TextRed" name="failed"></p>
            <p id="failed1" class="TextCenter TextRed" name="failed1"></p>
            <p id="MemoTop"></p>
          </tr>
        </table>
      </div>

      <div class="inputDate">
        <div class="changeDate">
          <a onclick="displayCancel();"><img src="` + SETTING_MYPAGE + `img/cancel.png" id="cancel"></a>
          <p id="chooseDateText"></p>
          <input type="date" id="WSD" value="" min="" max="">
          <input type="button" id="Adjust_shippingDate">
          <p id="WSDresult" name="WSDresult"></p>
          <p id="WSD_SD_info" name="WSD_SD_info"></p>
          <p id="SD_forbidon" name="SD_forbidon"></p>
          <input type="button" id="search" name="search" onclick="displayorderTable();">
          <p id="MemoDate"></p>
        </div>
      </div>
      <p id="MemoBottom"></p>
    </div>
  </div>
  `;

addMyPage();

//抓取URL資訊，帶入order token及account id
var URLinfo = location.search;
var info_string = URLinfo.substring(1, URLinfo.lengh);
var target_order_token = info_string.split("&")[1].split("=")[1];
var WSD = document.getElementById('WSD');
var shippingDate_ini = new Date();
var shippingD;
var shippingDate_con;
var shippingDate_last;
var SDID = new Date().getDay()
var TimeStamp = new Date().getTime();
order_token.value = target_order_token;
var urlShippingDate = SETTING_SHIPPING_DATE_ACTION_URL + "&userId=" + SETTING_USER_ID + "&time=" + TimeStamp + "&accountId=" + SETTING_ACCOUNT_ID;
//console.log(TimeStamp);
var Receive_Method;
var convNSDapi = [];
var convNSD;
var Date4shipping;
// CallCommonSetting(convNSDapi);
//呼叫受注情報参照 API
var url4tokenapi_info = SETTING_ACTION_URL + "?type=10&account_id=" + SETTING_ACCOUNT_ID + "&order_token=" + order_token.value;   //請根據各業主環境調整    
$.ajax({
  type: 'GET',
  url: url4tokenapi_info,
  dataType: 'json',
  success: function (data) {
    document.getElementById("WSDresult").innerHTML = "";
    document.getElementById("WSD_SD_info").innerHTML = "";

    //呼叫API成功，顯示資訊
    if (data.result == '0') {
      document.getElementById("order_info_title").innerHTML = SETTING_ORDER_TITLE;
      document.getElementById("order_id_info_title").innerHTML = SETTING_ORDERID;
      document.getElementById("order_id_info").innerHTML = data.data.order_id;
      document.getElementById("payment_info_title").innerHTML = SETTING_PAYMENT;
      document.getElementById("payment_info").innerHTML = data.data.payment_total + " " + data.data.currency;
      document.getElementById("name_info_title").innerHTML = SETTING_NAME;
      document.getElementById("name_info").innerHTML = NameFormat(data.data.name01, data.data.name02);
      document.getElementById("product_info_title").innerHTML = SETTING_PRODUCT_ITEM;

      var str = "";
      for (var num = 0; num < data.data.products.length; num++) {
        var content = "&nbsp" + data.data.products[num].product_name + "  *" + data.data.products[num].quantity + "<br />";
        str += content;
      };
      document.getElementById("product_info").innerHTML = str;

      document.getElementById("displayInputDate").value = SETTING_CHANGEDATE_BOTTOM;
      document.getElementById("chooseDateText").innerHTML = '<br>' + SETTING_CHOOSEDATE_TEXT;
      document.getElementById("Adjust_shippingDate").value = SETTING_CHOOSEDATE_BOTTOM;
      document.getElementById("search").value = SETTING_DATE_CONFIRM;
      // 備註文字
      document.getElementById("MemoTop").innerHTML = SETTING_MEMO_TOP;
      document.getElementById("MemoBottom").innerHTML = SETTING_MEMO_BOTTOM;
      document.getElementById("MemoDate").innerHTML = SETTING_MEMO_DATE;
      // css設定
      document.getElementById("MemoTop").setAttribute('class', SETTING_MEMO_STYLE)
      document.getElementById("MemoBottom").setAttribute('class', SETTING_MEMO_STYLE)
      document.getElementById("MemoDate").setAttribute('class', SETTING_MEMO_STYLE)
    };

    // status != 300 不顯示更改配送日按鈕 
    // if (data.data.status != 300) {
    //   document.getElementById('displayInputDate').style.display = 'none';
    // }
    document.getElementById('displayInputDate').style.display = 'none';
    addStatus(data.data.status, data.data.delivery_status_url);
    // addStatus(900, 'http://acs-oz.ec.ctwlogistics.com.tw');

    document.getElementById("payment_method_title").innerHTML = SETTING_PAYMENT_METHOD;
    var payment_id = data.data.payment_id;
    switch (payment_id) {
      case 2:
        document.getElementById("payment_method").innerHTML = SETTING_PAYMENT_CASH;
        break;
      case 1:
        document.getElementById("payment_method").innerHTML = SETTING_PAYMENT_CARD;
        break;
      case 5:
        document.getElementById("payment_method").innerHTML = SETTING_PAYMENT_CONV;
        break;
      case 8:
        document.getElementById("payment_method").innerHTML = SETTING_PAYMENT_AFTEE;
        break;
      case 9:
        document.getElementById("payment_method").innerHTML = SETTING_PAYMENT_LINEPAY;
        break;
      case 11:
        document.getElementById("payment_method").innerHTML = SETTING_PAYMENT_PAYPAL;
        break;
      case 12:
        document.getElementById("payment_method").innerHTML = SETTING_PAYMENT_STRIPE;
        break;
      case 13:
        document.getElementById("payment_method").innerHTML = SETTING_PAYMENT_FRX;
        break;
    }

    //確認收貨方式並記錄參數Receive_Method(並在後續判斷是否執行過查詢步驟)
    document.getElementById("receiving_method_title").innerHTML = SETTING_RECEINING_METHOD;
    if (data.data.receiving_method == '1') {
      document.getElementById("receiving_method").innerHTML = SETTING_RECEINING_CONV;
      Receive_Method = '1';
      //document.getElementById("receiving_forbidon").innerHTML = "コンビニ配送の場合は連休明けは選択できません。";
      document.getElementById("receiving_forbidon").innerHTML = SETTING_CONV_MEMO;
    }
    if (data.data.receiving_method == '0') {
      document.getElementById("receiving_method").innerHTML = SETTING_RECEINING_HOME;
      Receive_Method = '0';
      //document.getElementById("receiving_forbidon").innerHTML = "自宅配送の場合は日曜日配送予定日として選択できません。";
      document.getElementById("receiving_forbidon").innerHTML = SETTING_COD_MEMO;
    }
    document.getElementById("ShippingDate_info_title").innerHTML = SETTING_SHIPPING_DATE;
    document.getElementById("ShippingDate_info").innerHTML = LocalDateFormat(data.data.shipping_date) + "　";
    $.ajax({
      type: 'GET',
      url: urlShippingDate,
      dataType: 'json',
      success: function (data) {
        //console.log(Receive_Method);
        if (Receive_Method == '1') {
          document.getElementById("WSD").setAttribute("min", data.cvsShippingDate.replace(/\//g, "-"));
          shippingDate_con = new Date(data.cvsShippingDate);
          shippingDate_con.setDate(shippingDate_con.getDate() + 90);
          shippingDate_last = convertToISO(shippingDate_con);
          document.getElementById("WSD").setAttribute("max", shippingDate_last.replace(/\//g, "-"));
        }
        if (Receive_Method == '0') {
          document.getElementById("WSD").setAttribute("min", data.shippingDate.replace(/\//g, "-"));
          shippingDate_con = new Date(data.shippingDate);
          shippingDate_con.setDate(shippingDate_con.getDate() + 90);
          shippingDate_last = convertToISO(shippingDate_con);
          document.getElementById("WSD").setAttribute("max", shippingDate_last.replace(/\//g, "-"));
        }
        if (Receive_Method != '0' && Receive_Method != '1') {
          alert
        }
      },
      error: function (data) {
        //alert("API error");
        alert(SETTING_ERROR_TEXT);
      }
    })
    //呼叫API成功但有Error
    if (data.result == '1') {
      if (data.error.error_code == 'E000001' || 'E000002') {
        //document.getElementById("failed").innerHTML = " API type が不正です。"
        document.getElementById("failed").innerHTML = SETTING_ERROR_TEXT;
        console.log(data);
        console.log(url4tokenapi_info);
      }
      if (data.error.error_code == 'E000003' || 'E000004' || 'E000005') {
        //document.getElementById("failed").innerHTML = " API account id が不正です。"
        document.getElementById("failed").innerHTML = SETTING_ERROR_TEXT;
        console.log(data);
        console.log(url4tokenapi_info);
      }
      if (data.error.error_code == 'E100001' || 'E100002' || 'E100003' || 'E100004' || 'E100005') {
        //document.getElementById("failed").innerHTML = " API order token が不正です。"
        document.getElementById("failed").innerHTML = SETTING_ERROR_TEXT;
        console.log(data);
        console.log(url4tokenapi_info);
      }
    }
  },

  //呼叫API失敗
  error: function (data) {
    //document.getElementById("failed").innerHTML = " Error to connected "
    document.getElementById("failed").innerHTML = SETTING_ERROR_CONNECTED;
  },
})

$('#search').click(function () {
  location.reload();
})


// 選擇日期後取得值丟入WSD
$('#WSD').change(function () {
  document.getElementById("WSDresult").innerHTML = "";
  document.getElementById("WSD_SD_info").innerHTML = "";
  $('#Adjust_shippingDate').prop("disabled", false);
  $("#WSD").attr("value", $(this).val());
  Date4shipping = new Date(WSD.value).getDay();
  convNSD = WSD.value.replace(/\-/g, '/')

  // 抓取holiday的超商配送資料 
  if (Receive_Method == '1') {
    var holidays_conv = CallHolidays(str_holidays_conv);
    if (holidays_conv[DateFormat(convNSD)] != undefined) {
      // alert("Error :" + SETTING_ERROR_DATE_CHOOSE);
      $('#Adjust_shippingDate').prop("disabled", true);
    }
  }

  // 當宅配且配送日是禮拜天時阻擋
  if (Receive_Method == '0' && Date4shipping == 0) {
    //alert("Error : ご指定の日は選択できません。違う日を選択してください。");
    // alert("Error :" + SETTING_ERROR_DATE_CHOOSE);
    document.getElementById("WSDresult").innerHTML = "";
    document.getElementById("WSD_SD_info").innerHTML = "";
    $('#Adjust_shippingDate').prop("disabled", true);
  }

  // 宅配或超取都必須看holiday
  var holiday = CallHolidays(str_holidays);
  if (holiday[DateFormat(convNSD)] != undefined) {
    // alert("Error :" + SETTING_ERROR_DATE_CHOOSE);
    $('#Adjust_shippingDate').prop("disabled", true);
  }

})

// 點選更改日期後判斷是否有值，若有值則修改url(受注情報更新 API)
$('#Adjust_shippingDate').click(function () {
  var SDadjust = WSD.value.replace(/\-/g, '/');
  var urladjust = SETTING_ACTION_URL + "?type=20&account_id=" + SETTING_ACCOUNT_ID + "&order_token=" + order_token.value + "&shipping_date=" + SDadjust;   //請根據各業主環境調整    
  if (Receive_Method == null) {
    document.getElementById("WSDresult").innerHTML = SETTING_ERROR_DATE_ORDER;
  }
  if (Receive_Method != null) {
    if (SETTING_ACCOUNT_ID != "" && SETTING_ACCOUNT_ID != null && order_token.value != "" && order_token.value != null) {
      if (WSD.value == "" || WSD.value == null) {
        document.getElementById("WSDresult").innerHTML = SETTING_ERROR_CHOOSE;
        document.getElementById("WSD_SD_info").innerHTML = "";
      }
    }
    //傳送受注情報更新 API
    $.ajax({
      type: 'GET',
      url: urladjust,
      dataType: 'json',
      success: function (data) {
        if (data.result == '0' && Receive_Method != null) {
          //console.log(Receive_Method);
          //document.getElementById("WSDresult").innerHTML = "更新できました!";
          document.getElementById("WSDresult").innerHTML = SETTING_DATE_UPDATED;
          document.getElementById("WSD_SD_info").innerHTML = SETTING_DATE_NRWDATE + LocalDateFormat(SDadjust);
          remove();
          displaysubmit();
        }
        if (Receive_Method != "" && Receive_Method != null && data.result != '0') {
          if (data.error.error_code == 'E100001') {
            document.getElementById("WSDresult").innerHTML = SETTING_ERROR_ORDER;
          }
          if (data.error.error_code == 'E200001') {
            document.getElementById("WSDresult").innerHTML = SETTING_ERROR_CHOOSE;
          }
          if (data.error.error_code == 'E200003') {
            document.getElementById("WSDresult").innerHTML = SETTING_ERROR_SHIPMENT;
          }
        }
      },
      error: function (data) {
        console.log("request 受注情報更新 API failed");
        document.getElementById("WSDresult").innerHTML = SETTING_ERROR_FAILED;
      }
    });
  }
});

// 指定配送日範圍設定
function convertToISO(timebit) {
  // remove GMT offset
  timebit.setHours(0, -timebit.getTimezoneOffset(), 0, 0);
  //format convert and take first 10 characters of result
  var isodate = timebit.toISOString().slice(0, 10);
  return isodate;
}
function remove() {
  document.getElementById("order_id_info").innerHTML = "";
  document.getElementById("name_info").innerHTML = "";
  document.getElementById("payment_info").innerHTML = "";
  document.getElementById("product_info_title").innerHTML = "";
  document.getElementById("product_info").innerHTML = "";
  document.getElementById("ShippingDate_info").innerHTML = "";
  document.getElementById("payment_method").innerHTML = "";
  document.getElementById("receiving_method").innerHTML = "";
  document.getElementById("receiving_forbidon").innerHTML = "";
  document.getElementById("token_info").innerHTML = "";
  document.getElementById("failed").innerHTML = "";
  document.getElementById("failed1").innerHTML = "";
  document.getElementById("SD_forbidon").innerHTML = "";
}
function CallCommonSetting() {
  $.get('/lp/development/VCommonFiles/common-setting.json', function (dataapi) {     //請根據各業主環境調整
    for (var num1 = 0; num1 < dataapi.convNoShippingDates.length; num1++) {
      convNSDapi[num1] = dataapi.convNoShippingDates[num1];
    }
    "json"
  });
  return convNSDapi;
}

/**
 * @todo 姓名格式轉換
 * @return string
 */
function NameFormat(name01, name02) {
  // 名，姓
  if (SETTING_DEFAULT_NAME == "1") {
    return name02 + ' ' + name01;
  } else {
    // 姓，名
    return name01 + ' ' + name02;
  }
}

/**
* @todo 日期格式轉換
* @param {date} string 
* @return (Sat Jan 01 2022) or (2022/01/01)
*/
function LocalDateFormat(date) {
  if (SETTING_DEFAULT_DATE_DISPALY == '1') {
    var localDate = new Date(date)
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    var days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    localDate = days[localDate.getDay()] + ' ' + months[localDate.getMonth()] + ' ' + localDate.getDate() + ' ' + localDate.getFullYear();
    return localDate;
  } else {
    return date;
  }
}

/**
* @todo 解析holiday，String => Json
* @param {str_holidays} string 自setting.js 引入holidays
* @return Json
*/
function CallHolidays(string) {
  var json = JSON.parse(string);
  return json;
}

/**
* @todo 傳入日期，將月份/日期前的零刪除回傳
* @param {date} string 2021/01/01
* @return {date} string 2021/1/1
*/
function DateFormat(date) {
  var dateFormat = new Date(date)
  dateFormat = dateFormat.getFullYear() + '/' + (dateFormat.getMonth() + 1) + '/' + dateFormat.getDate()
  return dateFormat;
}

/**
* @todo 更改日期按鈕，按一下顯示inputDate(彈出修改配送日視窗)
*/
// 
function displayInputDate() {
  document.getElementsByClassName('inputDate')[0].style.display = 'block';
}

/**
* @todo 隱藏inputDate(關閉修改配送日視窗)
*/
// 
function displayCancel() {
  document.getElementsByClassName('inputDate')[0].style.display = 'none';
}

/**
* @todo 更改日期後隱藏 submit bottom & orderTable(後方表格) & WSD(選擇日期input) & chooseDateText(文字顯示)
* 顯示 search "確認訂單資訊按鈕" & cancel隱藏，避免直接關掉頁面空白
*/
function displaysubmit() {
  document.getElementById('Adjust_shippingDate').style.display = 'none';
  document.getElementsByClassName('orderTable')[0].style.display = 'none';
  document.getElementById('WSD').style.display = 'none';
  document.getElementById('chooseDateText').style.display = 'none';
  document.getElementById('search').style.display = 'inline';
  document.getElementById('cancel').style.display = 'none';
  document.getElementById('MemoBottom').style.display = 'none';
  document.getElementById('MemoDate').style.display = 'none';
  // inputDate因失去  orderTable(後方表格) relative定位，需要將margin歸零，以免視窗太上面無法顯示
  document.getElementsByClassName('changeDate')[0].style.marginTop = '0';
}

/**
* @todo 確認訂單資訊後顯示orderTable
*/
// 
function displayorderTable() {
  document.getElementsByClassName('orderTable')[0].style.display = 'block';
  document.getElementById('MemoBottom').style.display = 'block';
  document.getElementsByClassName('changeDate')[0].style.marginTop = '25rem';
}

/**
* @todo 在div id ='myPage' 裡面加入html
*/
//
function addMyPage() {
  var myPage = document.getElementById("myPage");
  if (myPage == null) {
    setTimeout(addMyPage, 1000);
    return;
  }
  document.getElementById("myPage").innerHTML = myPageinnerHTML;
}

/**
* @todo add status text (status!=900，display delivery_status)
*/
//
function addStatus(status, delivery_status) {
  document.getElementById("status_title").innerHTML = SETTING_STAUTS;
  document.getElementById("status").innerHTML = SETTING_STAUTS_TEXT[status];
  
  if(status==900){
    var url = addParma(delivery_status, '.asp', 'txtMainid');
    document.getElementById("delivery_status_title").innerHTML = SETTING_STAUTS_DELIVERY;
    document.getElementById("delivery_status").innerHTML = '<a href="' + url + '">' + url +'</a>'
  }else{
    removeElement('delivery_status_title')
  }
}

/**
* @todo remove parent node
*/
//
function removeElement(element) {
  var rmElement = document.getElementById(element).parentNode.parentNode.parentNode;
  var rm = document.getElementById(element).parentNode.parentNode;
  rmElement.removeChild(rm);
}

function addParma(statusURL, splitString, parma){
  if(statusURL.indexOf(parma) == -1){
    var url = statusURL.split(splitString)[0] + splitString + '?' + parma + '=' + statusURL.split(splitString)[1];
    return url
  }else{
    return statusURL
  }
}