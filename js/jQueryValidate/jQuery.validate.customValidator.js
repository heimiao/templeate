// 邮政编码验证   
jQuery.validator.addMethod("checkTime", function(value, element) {   
    var value = new Date(value).getTime() ; 
    var currentTime = new Date().getTime();
    return this.optional(element) || (value > currentTime);
}, "必须大于当前时间");