const helpers = () => {
    return {
        section: function(name, options){
            if(!this.section) this.section = {};
            this.section[name] = options.fn(this);
            return null;
        },
        compare: function(lvalue, rvalue, options) {

            if (arguments.length < 3)
                throw new Error("Handlerbars Helper 'compare' needs 2 parameters");

            let operator = options.hash.operator || "==";

            let operators = {
                '==':       function(l,r) { return l == r; },
                '===':      function(l,r) { return l === r; },
                '!=':       function(l,r) { return l != r; },
                '<':        function(l,r) { return l < r; },
                '>':        function(l,r) { return l > r; },
                '<=':       function(l,r) { return l <= r; },
                '>=':       function(l,r) { return l >= r; },
                'typeof':   function(l,r) { return typeof l == r; }
            }

            if (!operators[operator]) {
                throw new Error("Handlerbars Helper 'compare' doesn't know the operator " + operator);
            }

            let result = operators[operator](lvalue,rvalue);

            if( result ) {
                return options.fn(this);
            } else {
                return options.inverse(this);
            }

        }
    }
}

module.exports = helpers;