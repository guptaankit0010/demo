/**
 * Created by Ankit Gupta on 4/22/2016.
 */
/**
 * Created by ankit on 20/4/16.
 */

(function () {

    angular.module("app").factory("checkLocalStorage",["$localStorage",checkLocalStorage]);

    function checkLocalStorage($localStorage){

        function check() {

            if(!$localStorage.bookmarks){
                vm.bookmarks=[];
                $localStorage.bookmarks=[];
                console.log("checking local storage");
            }
            else{
                vm.bookmarks=$localStorage.bookmarks;
                vm.isBookmarksAvailable=true;
            }

        }
        return {

            check: check
        }
    }
})();
