define('firetpl-templates',['firetpl'],function(FireTPL) {FireTPL.templateCache['test']=function(data,scopes) {var h=new FireTPL.Runtime(),l=FireTPL.locale;scopes=scopes||{};var root=data,parent=data;var s='';s+='<div class="test"><h1>Hello World</h1></div>';return s;};FireTPL.templateCache['test2']=function(data,scopes) {var h=new FireTPL.Runtime(),l=FireTPL.locale;scopes=scopes||{};var root=data,parent=data;var s='';s+='<div class="test2"><h1>Hello World II</h1></div>';return s;};});