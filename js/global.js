$(function(){
    var $el = $("pre code");
    if($el.length){
        $el.parent().addClass("prettyprint");
        prettyPrint();
    }   
});
