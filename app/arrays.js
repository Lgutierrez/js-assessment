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
        var x = arr.indexOf(item);
        for(i=arr.length-1; i>=0; i--) {
            if(arr[i] === item) {
                arr.splice(i, 1);
            }
        }
        return arr;
    },

    append : function(arr, item) {
        arr.push(item);
        return arr;
    },

    truncate : function(arr) {
        arr.pop();
        return arr;
    },

    prepend : function(arr, item) {
        arr.unshift(item);
        return arr;
    },

    curtail : function(arr) {
        arr.shift();
        return arr;
    },

    concat : function(arr1, arr2) {
        arr1.push.apply(arr1, arr2);
        return arr1;
    },

    insert : function(arr, item, index) {
        arr.splice(index, 0, item);
        return arr;
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
      var sorted = arr.sort();
      var results = [];
      for(var i=0; i < sorted.length; i++) {
        if(sorted[i+1] == sorted[i]) {
          results.push(sorted[i]);
        }
      }
      console.log(results);
    },

    square : function(arr) {
    
    },

    findAllOccurrences : function(arr, target) {

    }
  };
});
