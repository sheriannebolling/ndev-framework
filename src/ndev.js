
var exec = require("child_process").exec;

module.exports = {

    run: function(args) {

        var repo = args[0];

        var name = args[1];

        exec(__dirname + "/../exec/ndev.sh " + repo + " " + name,
            function (error, stdout, stderr) {
                console.log(stderr.trim());
            }
        );
    }
};




