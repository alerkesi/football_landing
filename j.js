$(document).ready(function () {
  var tabToggle = function t($tab, $tabContent){
    $tabContent.toggle();
    $tab.toggleClass('selected');
  };
  $('.size-list li').click(function(){
      var tabId = $(this).attr('tab-id');
      tabToggle($(this), $('#'+tabId));
  })
});