//how to solve blocked-mixed-content
//docs : https://developer.mozilla.org/en-US/docs/Web/Security/Mixed_content/How_to_fix_website_with_mixed_content
//docs : https://stackoverflow.com/questions/18251128/why-am-i-suddenly-getting-a-blocked-loading-mixed-active-content-issue-in-fire


/* 
 first solution method
-------------------------
-For your own domain, serve all content as HTTPS and fix your links. Often,
-the HTTPS version of the content already exists and this just requires adding an "s" to links - http:// to https://.
*/  


/* 
 second solution method
-------------------------
Put the below <meta> tag into the <head> section of your document 
to force the browser to replace unsecured connections 
(HTTP) with secured connections (HTTPS). This can solve the
 mixed content problem if the connection is able to use HTTPS.

 1 =>  <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" /></meta>
 2 => <meta http-equiv="Content-Security-Policy" content="block-all-mixed-content"></meta>
*/  




