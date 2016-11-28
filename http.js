/*
* @Author: Marte
* @Date:   2016-11-18 20:44:41
* @Last Modified by:   Marte
* @Last Modified time: 2016-11-23 19:08:58
*/

'use strict';
(function (window,document,undefined) {
    var jsonp = function (url,data,callback){

        //1.挂载回调函数
        var cbFuncName = 'my_json_cb_' + Math.random().toString().replace('.','');
        window[cbFuncName] = callback;

        //2.将data转换为URL字符串的形式
        //{id : 1, name : 'zhangsan'} => id=1&name=zhangsan;
        var querystring = url.indexOf('?')==-1 ? "?" : "&";
        for(var key in data){
            querystring+=key+'='+data[key]+'&';
        }
        //3.处理url中的回调参数
        //url += callback=sjfdsjfl
        querystring += 'callback=' + cbFuncName;

        //4.创建一个script标签
        var scriptElement = document.createElement('script');
        scriptElement.src = url + querystring;

        //5.将script标签放到页面中
        document.documentElement.appendChild(scriptElement);

    }

    window.$jsonp = jsonp;

})(window,document);
