var re = /<wsse:Security[\s\S]*<\/wsse:Security>/;
var req = context.getVariable("request.content");
req = req.replace(re, '');
context.setVariable("request.content", req);