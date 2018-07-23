/**
 * Created by 32783 on 2018/7/23.
 */
export default {
  changeCity(ctx, city) {
    // 调用mutations中的方法,如何调用，通过commit，这里的上下文ctx可以帮我们commit
    ctx.commit('changeCity', city)
  }
}
