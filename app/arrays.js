if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
        for(var i=0; i<arr.length; i++) {
            if(arr[i] == item)
                return i;
        }
        return -1;
    },

    sum : function(arr) {

        var sum = 0;

        for(i=0; i < arr.length; i++) {
            sum += arr[i];
        }
        return sum;
    },

    remove : function(arr, item) {
        var x = arr.indexOf(item);
        for(i=arr.length-1; i>=0; i--) {
            if(arr[i] === item) {
                arr.splice(i, 1);
            }
        }
        return arr;
    },

    removeWithoutCopy : function(arr, item) {

    },

    append : function(arr, item) {

    },

    truncate : function(arr) {

    },

    prepend : function(arr, item) {

    },

    curtail : function(arr) {

    },

    concat : function(arr1, arr2) {

    },

    insert : function(arr, item, index) {

    },

    count : function(arr, item) {
        var b = 0;
        for(i=0; i < arr.length; i++) {
            if(arr[i] == item) 
                b += 1;
        }
        return b;
    },

    duplicates : function(arr) {

    },

    square : function(arr) {

    },

    findAllOccurrences : function(arr, target) {

    }
  };
});
