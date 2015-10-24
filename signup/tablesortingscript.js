 (function onReady() {
     var eles = document.getElementsByTagName('th');
     var cellIndex;
     for (var i = 0; i < eles.length; i++) {
         eles[i].addEventListener("click", function(e) {
             cellIndex = e.target.cellIndex + 1;
             console.log(cellIndex);
             if (this.hasAttribute("data-asc")) {
                 this.removeAttribute("data-asc");
                 this.setAttribute("data-dsc", "dsc");
                 sort(cellIndex, "asc");
             } else if (this.hasAttribute("data-dsc")) {
                 this.removeAttribute("data-dsc");
                 this.setAttribute("data-asc", "asc");
                 sort(cellIndex, "dsc");
             } else {
                 this.removeAttribute("data-asc");
                 this.setAttribute("data-dsc", "dsc");
                 sort(cellIndex, "asc");
             }
         });
     }

     function sort(cellIndex, sortOrder) {
         var table = document.getElementsByTagName("tbody")[0];
         var ids = document.querySelectorAll("table tr td:nth-child(" + cellIndex + ")");
         var tableRows = document.querySelectorAll("table tr");
         var tableCells = document.querySelectorAll("table tr td");
         var rowVal = [],
             rowId = [],
             tempAry = [];
         for (var i = 0; i < ids.length; i++) {
             rowVal.push(ids[i].innerHTML);
             rowId.push(i);
         }
         copy(rowVal, tempAry);
         var sortedAry = b(tempAry);
         var rowAry = [];
         for (var k = 0; k < tableRows.length - 1; k++) {
             for (var l = 0; l < ids.length; l++) {
                 if (ids[l].innerHTML == sortedAry[k]) {
                     rowAry.push(ids[l].parentNode);
                 }
             }
         }
         if (sortOrder === "asc") {
             for (var i = 0; i < rowAry.length; i++) {
                 var tr = rowAry[i];
                 // table.getElementsByTagName('tbody').appendChild(tr);
             }
         } else if (sortOrder === "dsc") {

             for (var i = rowAry.length - 1; i >= 0; i--) {
                 var tr = rowAry[i];
                 // table.getElementsByTagName('tbody').appendChild(tr);
             }
         }

     }

     function copy(arr1, arr2) {
         for (var i = 0; i < arr1.length; ++i) {
             arr2[i] = arr1[i];
         }
     }

     function b(ary) {
         var temp;
         for (var i = 0; i < ary.length - 1; i++) {
             for (var j = 0; j < ary.length - 1; j++) {
                 if (ary[j] > ary[j + 1]) {
                     temp = ary[j];
                     ary[j] = ary[j + 1];
                     ary[j + 1] = temp;
                 }
             }
         }
         return ary;
     }
 })();
