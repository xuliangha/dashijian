//使用的layui
let layer = layui.layer;
// 切换登录和注册
$('#goto-register').on('click', function () {
  $('#login').hide()
  $('#register').show()
})
$('#goto-login').on('click', function () {
  $('#register').hide()
  $('#login').show()
})


$('.layui-form').on('submit', function (e) {
  e.preventDefault()
  let data = $(this).serialize()
  $.ajax({
    type: 'post',
    url: 'http://ajax.frontend.itheima.net/api/reguser',
    data: data,
    success: function (res) {
      layer.msg(res.message)
      if (res.status == 0) {
        //切换到登录
        $('#goto-login').click()
        //清空表单
        $('.layui-form')[0].reset();
      }
    }
  })
})