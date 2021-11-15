//tools.js
const relativeTime = (oldTime) => {
  const t = new Date(oldTime);
  // Date.now()：现在的时间戳（毫秒）
  // t.getTime()：旧时间的时间戳（毫秒）

  const diff = Date.now() - t.getTime(); // 相隔多少毫秒
  // Math.floor 向下取整： 1.7年 ---> 1年前
  const year = Math.floor(diff / (1000 * 3600 * 24 * 365));
  if (year) {
    return `${year}年前`;
  }
  const month = Math.floor(diff / (1000 * 3600 * 24 * 30));
  if (month) {
    return `${month}月前`;
  }
  const day = Math.floor(diff / (1000 * 3600 * 24));
  if (day) {
    return `${day}天前`;
  }
  const hour = Math.floor(diff / (1000 * 3600));
  if (hour) {
    return `${hour}小时前`;
  }
  const minute = Math.floor(diff / (1000 * 60));
  if (minute) {
    return `${minute}分钟前`;
  } else {
    return "刚刚";
  }
};

const formatDate = (dateTime) => {
  // console.log(date)
  // date = new Date();
  const date = new Date(dateTime); // 转换成Data();
  console.log(date);
  var y = date.getFullYear();
  console.log(y);
  var m = date.getMonth() + 1;
  m = m < 10 ? "0" + m : m;
  var d = date.getDate();
  d = d < 10 ? "0" + d : d;
  return y + "-" + m + "-" + d;
};

// 通过module.exports来导出模块
module.exports = {
  formatDate,
  relativeTime,
};
