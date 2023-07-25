"use strict";
var UserDetails;
(function (UserDetails) {
    function getUserDetails(username) {
        return loginPage.getUser(username);
    }
    UserDetails.getUserDetails = getUserDetails;
})(UserDetails || (UserDetails = {}));
