// **************************************************
// 文字設定 - TW
// **************************************************

// **************************************************
// - 訂單資訊
// **************************************************
const SETTING_ORDER_TITLE       = `訂購完成<br>請將此頁網址留存<br>以利可隨時確認訂單狀態`;
const SETTING_ORDERID           = '訂單編號';
const SETTING_NAME              = '訂購姓名';
const SETTING_PAYMENT           = '訂購金額';
const SETTING_PRODUCT_ITEM      = '訂購商品';
const SETTING_SHIPPING_DATE     = '預計送達日期';
const SETTING_CHANGEDATE_BOTTOM = '更改日期';

// **************************************************
// - 付款資訊
// **************************************************
const SETTING_PAYMENT_METHOD    = '付款方式';
const SETTING_PAYMENT_CASH      = '貨到付款';
const SETTING_PAYMENT_CONV      = '超商付款';
const SETTING_PAYMENT_CARD      = '信用卡';
const SETTING_PAYMENT_AFTEE     = 'AFTEE';
const SETTING_PAYMENT_LINEPAY   = 'Line Pay';
const SETTING_PAYMENT_PAYPAL    = 'PayPal';
const SETTING_PAYMENT_STRIPE    = 'Stripe';
const SETTING_PAYMENT_FRX       = 'FRX';

// **************************************************
// - 配送資訊
// **************************************************
const SETTING_RECEINING_METHOD  = '配送方式';
const SETTING_RECEINING_HOME    = '宅配';
const SETTING_RECEINING_CONV    = '超商取貨';

// **************************************************
// - 備註資訊
// **************************************************
const SETTING_MEMO              = '備註';
const SETTING_REGULAR_YES       = '含定期商品';
const SETTING_REGULAR_NO        = '不含定期商品';
const SETTING_COD_MEMO          = `Viage晚安立體美型內衣，能夠幫助您打造完美胸型，解決您對各種內在美的煩惱。您貴重的商品，我們將以「台灣宅配通」進行最專業的配送服務，寄件者將顯示為「台灣娜珂黛肌」。<br>
若您選擇的是「超商取件」，請靜候我們的到店簡訊通知。<br>
* 由於疫情期間配送運能有限，若無法在指定時間內送達，或有延遲現象，敬請見諒。詳細配送情況，請以出貨簡訊/MAIL內的追蹤狀態為主。<br>
*「農曆新年前兩週至農曆新年期間」、「端午節、中秋節前一週」及「雙11購物節後一至兩週」為物流高峰期，故無法指定配送時段敬請見諒。<br>
* 另如遇颱風地震等天災、公共工程、節慶活動管制路段,出貨時間將順延。實際送達時間，以物流公司的出貨日，送貨路線及貨量為主。`;
const SETTING_CONV_MEMO         = '超商取貨訂單無法選擇連假作為配送日';

// **************************************************
// 備註資訊顯示
// SETTING_MEMO_TOP    : 最上方的文字備註(表格上)，不需要則留空
// SETTING_MEMO_BOTTOM : 最下方的文字備註(表格下)，不需要則留空
// SETTING_MEMO_STYLE 顯示格式設定
// => 靠左 : TextLeft
// => 置中 : TextCenter
// **************************************************
const SETTING_MEMO_TOP          = '您的訂單明細';
const SETTING_MEMO_BOTTOM       = '如想更改訂單內容請聯繫客服，Facebook：<a href="https://www.facebook.com/Viage.sg" target="_blank">https://www.facebook.com/Viage.sg</a>';
const SETTING_MEMO_DATE         = "國定假日無法選擇";
const SETTING_MEMO_STYLE        = 'TextLeft';

// **************************************************
// - 更換日期資訊
// **************************************************
const SETTING_CHOOSEDATE_TEXT   = '請選擇預定配送日';
const SETTING_CHOOSEDATE_BOTTOM = '送出';
const SETTING_DATE_CONFIRM      = '確認訂單資訊';
const SETTING_DATE_UPDATED      = '更新完成！';
const SETTING_DATE_NRWDATE      = '新配送日期： ';

// **************************************************
// 出貨狀態顯示
// 300 : 出貨準備中
// 400 : 出貨中
// 700 : 取款中
// 900 : 出貨完成
// 910 : 訂單取消
// 920 : 退貨(等待退款)
// 930 : 退貨(退款完成)
// **************************************************
const SETTING_STAUTS                = `訂單狀態<br>(已出貨包裹無法更改訂單內容)`;
const SETTING_STAUTS_DELIVERY       = '配送貨態';
const SETTING_STAUTS_TEXT           = {
    300: '出貨準備中',
    400: '出貨中',
    700: '取款中',
    900: '出貨完成',
    910: '訂單取消',
    920: '退貨(等待退款)',
    930: '退貨(退款完成)',
};

// **************************************************
// - 日期錯誤資訊
// **************************************************
const SETTING_ERROR_DATE_CHOOSE  = '選擇的日期不能作為配送日，請重新選擇配送日期。';
const SETTING_ERROR_DATE_ORDER   = '未讀取到正確訂單';

// **************************************************
// - 錯誤資訊
// **************************************************
const SETTING_ERROR_TEXT        = '呼叫訂單資訊錯誤，請重新整理或聯繫客服。';
const SETTING_ERROR_CONNECTED   = '連線失敗，請重新整理或聯繫客服';
const SETTING_ERROR_ORDER       = '訂單資訊錯誤';
const SETTING_ERROR_CHOOSE      = '請選擇更改日期';
const SETTING_ERROR_SHIPMENT    = '訂單已被取消或已經準備出貨，無法修改';
const SETTING_ERROR_FAILED      = '更新失敗，請重新確認訂單資訊及預定配送日';
