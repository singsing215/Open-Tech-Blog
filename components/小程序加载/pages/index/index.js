Page({
  btnShow: function(e) {
    console.log('show loading');
    this.selectComponent("#loading").show();
  },
  btnHide: function(e) {
    console.log('hide loading');
    this.selectComponent("#loading").hide();
  },
})

