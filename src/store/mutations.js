/**
 * Created by 32783 on 2018/7/23.
 */
export default {
  changeCity(state, city) {
    state.city = city
    try {
      localStorage.city = city
    } catch (e) {}
  }
}
