var valid = {
    checkParams: function(refobj, evalueobj) {
        if (Object.keys(refobj).sort().toString() == Object.keys(evalueobj).sort().toString()) {
            return true;
        }
    return false;
    },
    checkPassword: function (password) {
        var exp1 = /^[A-Z](?=.*[a-zA-Z])(?=.*\d)\S{5,}/g;
        if (password.match(exp1) == null) {
            return false;
        }
        return true;
    },
    checkEmail: function(email) {

        var exp =/^\w{1,}@\w{1,}[.]\w{2,3}$/g;
        if (email.match(exp) == null) {
            return false;
        }
        return true;
    }
};
module.exports = valid;
