/**
 * Created by 32783 on 2018/7/23.
 */
// 使用 try catch
let defaultCity = '上海'
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {}

export default {
  city: defaultCity
}
