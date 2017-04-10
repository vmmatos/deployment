var _firebase = require("firebase");

var _firebase2 = babelHelpers.interopRequireDefault(_firebase);

var Firebase = function () {
    function Firebase() {
        babelHelpers.classCallCheck(this, Firebase);
    }

    babelHelpers.createClass(Firebase, null, [{
        key: "initialise",
        value: function initialise() {
            _firebase2.default.initializeApp({
                apiKey: "AIzaSyDd4vcbA7M4zgMb034Tti5h_uWvXPMOphc",
                authDomain: "simple-todo-app-c370f.firebaseapp.com",
                databaseURL: "https://simple-todo-app-c370f.firebaseio.com",
                storageBucket: "simple-todo-app-c370f.appspot.com"
            });
        }
    }]);
    return Firebase;
}();

module.exports = Firebase;