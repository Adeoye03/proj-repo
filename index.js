jquery(function($) {
    var path = Window.location.href;
    $('ul a').each(function () {
       if (this.href === path) {
        $(this).addclass('active');
       } 
    });    
});