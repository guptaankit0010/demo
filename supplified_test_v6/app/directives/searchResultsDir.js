/**
 * Created by Ankit Gupta on 4/21/2016.
 */
(function(){

    angular.module("app").directive("searchResults",["$localStorage",function($localStorage) {

        return {

            restrict: 'AE',
            templateUrl: 'app/templates/searchResultsView.html',
            link: function (scope) {
                //cancelling the bookmark when bookmark button reclicked
                vm.remove=function(word){

                    for(var i=0;i<$localStorage.bookmarks.length;i++){

                        if($localStorage.bookmarks[i].word === word){
                            $localStorage.bookmarks.splice(i,1);
                            vm.bookmarks=$localStorage.bookmarks;
                            vm.isBookmarked=false;
                            vm.isBookmarkSelected=false;
                            vm.isResultAvailable=true;
                            //counting the bookmarks
                            vm.calBookmarkCount();
                        }
                    }
                };
                //adding the bookmark
                vm.addBookmark=function(word){
                    if(word)
                        var storedWord={
                            isbookMarked:true,
                            word:word,
                            definitions:vm.allDefinitions
                        }
                    else{
                            storedWord={
                            isbookMarked:true,
                            word:"null",
                            definitions:vm.allDefinitions
                        }
                    }
                        $localStorage.bookmarks.push(storedWord);
                        vm.bookmarks=$localStorage.bookmarks;
                        vm.isBookmarksAvailable=true;
                        vm.isBookmarked=true;
                        //counting the bookmarks
                        vm.calBookmarkCount();
                };
            }

        }
    }])

})();
