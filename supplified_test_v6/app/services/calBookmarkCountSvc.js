/**
 * Created by Ankit Gupta on 4/22/2016.
 */
/**
 * Created by ankit on 20/4/16.
 */

(function () {

    angular.module("app").factory("calBookmarkCount",["$localStorage",calBookmarkCount]);

    function calBookmarkCount($localStorage){

        function calCount() {

            if(!$localStorage.bookmarks.length)
                vm.isBookmarksAvailable=false;
            return $localStorage.bookmarks.length;
        }
        return {

            calCount: calCount
        }
    }
})();