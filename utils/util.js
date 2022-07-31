const formatTime = date => {
  var time = date==null ? "" : Date.parse(date.replace(/-/g, '/')); // 时间戳
  var date = new Date(time);
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  // const hour = date.getHours()
  // const minute = date.getMinutes()
  // const second = date.getSeconds()

  // return `${[year, month, day].map(formatNumber).join('/')} ${[hour, minute, second].map(formatNumber).join(':')}`
  return `${[month, day].map(formatNumber).join('/')}`
}


const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : `0${n}`
}

module.exports = {
  formatTime
}
