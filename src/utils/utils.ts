/**
 * 时间戳格式转换
 * @param string | number 时间
 * @param format 格式
 * @returns string
 * const timestamp = 1640995200000;
 * const format = 'yyyy-MM-dd hh:mm:ss';
 * const result = formatTimestamp(timestamp, format);
 * console.log(result); // 输出：2022-01-01 00:00:00
 */
export const formatTimestamp = (timestamp: number, format: string, type: number): string => {
  let times = timestamp
  if (type === 1)
    times = timestamp * 1000

  const date = new Date(times)
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()
  const o: Record<string, any> = {
    'M+': month,
    'd+': day,
    'h+': hour,
    'm+': minute,
    's+': second,
    'q+': Math.floor((month + 2) / 3),
    'S': date.getMilliseconds(),
  }
  if (/(y+)/.test(format))
    format = format.replace(RegExp.$1, (`${year}`).substr(4 - RegExp.$1.length))

  for (const k in o) {
    if (new RegExp(`(${k})`).test(format))
      format = format.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : ((`00${o[k]}`).substr((`${o[k]}`).length)))
  }
  return format
}

/**
 * 时间格式转换
 * @param date 时间
 * @param format 格式
 * @returns string
 * const date = new Date('2022-01-01 00:00:00');
 * const format = 'yyyy-MM-dd hh:mm:ss';
 * const result = formatDate(date, format);
 * console.log(result); // 输出：2022-01-01 00:00:00
 */
export const formatDate = (date: Date, format: string): string => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()
  const o: Record<string, any> = {
    'M+': month,
    'd+': day,
    'h+': hour,
    'm+': minute,
    's+': second,
    'q+': Math.floor((month + 2) / 3),
    'S': date.getMilliseconds(),
  }
  if (/(y+)/.test(format))
    format = format.replace(RegExp.$1, (`${year}`).substr(4 - RegExp.$1.length))

  for (const k in o) {
    if (new RegExp(`(${k})`).test(format))
      format = format.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : ((`00${o[k]}`).substr((`${o[k]}`).length)))
  }
  return format
}
