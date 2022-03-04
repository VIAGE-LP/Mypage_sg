// **************************************************
// 文字設定 - EN
// **************************************************

// **************************************************
// - 訂單資訊
// **************************************************
const SETTING_ORDER_TITLE       = 'Order Details';
const SETTING_ORDERID           = 'Order ID';
const SETTING_NAME              = 'Name';
const SETTING_PAYMENT           = 'Purchased Amount';
const SETTING_PRODUCT_ITEM      = 'Purchased Item';
const SETTING_SHIPPING_DATE     = 'Delivery Date';
const SETTING_CHANGEDATE_BOTTOM = 'Reschedule';

// **************************************************
// - 付款資訊
// **************************************************
const SETTING_PAYMENT_METHOD    = 'Payment Method';
const SETTING_PAYMENT_CASH      = 'Cash On Delivery';
const SETTING_PAYMENT_CONV      = 'Pay on In-store pickup';
const SETTING_PAYMENT_CARD      = 'Credit Card Payment';
const SETTING_PAYMENT_AFTEE     = 'AFTEE';
const SETTING_PAYMENT_LINEPAY   = 'Line Pay';
const SETTING_PAYMENT_PAYPAL    = 'PayPal';
const SETTING_PAYMENT_STRIPE    = 'Stripe';
const SETTING_PAYMENT_FRX       = 'FRX';

// **************************************************
// - 配送資訊
// **************************************************
const SETTING_RECEINING_METHOD  = 'Delivery Method';
const SETTING_RECEINING_HOME    = 'By Ninja Van';
const SETTING_RECEINING_CONV    = 'In-store Pickup';

// **************************************************
// - 備註資訊
// **************************************************
const SETTING_MEMO              = 'Delivery notes';
const SETTING_REGULAR_YES       = 'Include subsciption items';
const SETTING_REGULAR_NO        = 'Exclude subsciption items';
const SETTING_COD_MEMO          = "No delivery service for Sunday & Public Holiday.";
const SETTING_CONV_MEMO         = "Unable to deliver on public holidays for pickup orders.";

// **************************************************
// 備註資訊顯示
// SETTING_MEMO_TOP    : 最上方的文字備註(表格上)，不需要則留空
// SETTING_MEMO_BOTTOM : 最下方的文字備註(表格下)，不需要則留空
// SETTING_MEMO_DATE   : 選擇配送日下方的備註，不需要則留空
// SETTING_MEMO_STYLE 顯示格式設定
// => 靠左 : TextLeft
// => 置中 : TextCenter
// **************************************************
const SETTING_MEMO_TOP          = 'To change the date, please press Reschedule';
const SETTING_MEMO_BOTTOM       = 'To change further order details, please email our customer service, <a href="mailto:info@xxx.com" target="_blank">info@xxx.com</a>';
const SETTING_MEMO_DATE         = "Can not choose a public holiday.";
const SETTING_MEMO_STYLE        = 'TextLeft';

// **************************************************
// - 更換日期資訊
// **************************************************
const SETTING_CHOOSEDATE_TEXT   = 'Please choose a delivery date';
const SETTING_CHOOSEDATE_BOTTOM = 'Submit';
const SETTING_DATE_CONFIRM      = 'Confirm';
const SETTING_DATE_UPDATED      = 'Update completed!';
const SETTING_DATE_NRWDATE      = 'New Delivery Date: ';

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
const SETTING_STAUTS                = 'Status';
const SETTING_STAUTS_DELIVERY       = '配送貨態';
const SETTING_STAUTS_TEXT           = {
    300: 'Ready To Ship',
    400: 'Shipping',
    700: 'Paying',
    900: 'Shipped',
    910: 'Order Cancel',
    920: 'Return to Seller (wait for refund)',
    930: 'Return to Seller (refunded)',
};

// **************************************************
// - 日期錯誤資訊
// **************************************************
const SETTING_ERROR_DATE_CHOOSE  = "The selected date can't be used as a delivery date, please reschedule.";
const SETTING_ERROR_DATE_ORDER   = 'Unable to read a correct order';

// **************************************************
// - 錯誤資訊
// **************************************************
const SETTING_ERROR_TEXT        = 'Order data fetching failed, please refresh or contact customer service.';
const SETTING_ERROR_CONNECTED   = 'Connection failed, please refresh or contact customer service';
const SETTING_ERROR_ORDER       = 'Order details are wrong';
const SETTING_ERROR_CHOOSE      = 'Please choose a delivery date';
const SETTING_ERROR_SHIPMENT    = 'The order has been cancelled or ready to be shipped, thus unable to modify';
const SETTING_ERROR_FAILED      = 'Update failed, please reconfirm the order details and the delivery date';
