module.exports = {

    sum : function(){
    
        var sum = 0;
        Array.from(arguments).forEach(function(e){
            sum += e;
        });

        return sum;

    },

    max : function () {

        var max = Number.MIN_SAFE_INTEGER;
        Array.from(arguments).forEach(function (e) {
            max = e > max ? e : max;
        });

        return max;
        
    },

    min : function () {

        var min = Number.MIN_SAFE_INTEGER;
        Array.from(arguments).forEach(function (e) {
            max = e < max ? e : max;
        });

        return min;

    }

}

