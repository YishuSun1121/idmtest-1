/*global input, objectID */

(function () {

    var userinfo = openidm.read(objectID,null,["*"]); // Get user information
    var params =  new Object();
    params.from = "iamprojecttestyishu@gmail.com"; 
    params.to = userinfo.mail;
    params.subject = "Your password will be expired";
    params.type = "text/html";
    params.body = "<html><body><p>Your password will be expired in 15 days, please change a new password.</p></body></html>";
    
    openidm.action("external/email", "send", params); // idm send action

    return true; // return true to indicate successful completion
}());