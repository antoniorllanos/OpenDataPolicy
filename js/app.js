$.ajax({
  url: 'http://antoniorllanos.github.io/OpenDataPolicy/test.json',
  
  success: function(data) {
      $.each(data, function(i, obj) {
       var line = "<li><img style='height:25px;width:25px' src='"+ obj.avatar + "' /> " + obj.firstname + " " + obj.lastname + " " + obj.zipcode +"</li>"
       $('#signupList').append(line)

   });
  },
  dataType: 'json'
});
// Generated by CoffeeScript 1.7.1
(function() {
  $(function() {
    var $body, $window;
    $window = $(window);
    $body = $(document.body);
    $body.scrollspy({
      target: ".sidebar"
    });
    $window.on("load", function() {
      return $body.scrollspy("refresh");
    });
    $(".sidenav [href=#]").click(function(e) {
      return e.preventDefault();
    });
    $('.sidebar').on('activate.bs.scrollspy', function() {
      return console.log('scroll spyed');
    });
    return $("a[href*=#]:not([href=#])").click(function() {
      var target;
      if (location.pathname.replace(/^\//, "") === this.pathname.replace(/^\//, "") || location.hostname === this.hostname) {
        target = $(this.hash);
        target = (target.length ? target : $("[name=" + this.hash.slice(1) + "]"));
        if (target.length) {
          $("html,body").animate({
            scrollTop: target.offset().top
          }, 800);
          return false;
        }
      }
    });
  });

}).call(this);

//# sourceMappingURL=app.map

