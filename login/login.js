//使用的layui
let layer = layui.layer;
let form = layui.form;

// 切换登录和注册
$('#goto-register').on('click', function () {
  $('#login').hide()
  $('#register').show()
})
$('#goto-login').on('click', function () {
  $('#register').hide()
  $('#login').show()
})



//注册密码的验证
form.verify({
  changdu: function(value, dom) {
    let reg = /^\S{6,12}$/;
    if (reg.test(value) == false) {
      return "密码必须6到12位，且不能出现空格";
    }
  },
  same: function(value, dom) {
    // value：谁的value？重复密码的值
    // 验证：获取密码值！密码的值 如何获取?  设置类名.val(); 
    //       可以不写正则！
    if ($(".pwd").val() != value) {
      return "密码和重复密码必须一致!"
    }
  },
});     













//注册密码
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