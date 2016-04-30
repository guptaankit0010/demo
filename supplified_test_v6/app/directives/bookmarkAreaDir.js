/**
 * Created by Ankit Gupta on 4/21/2016.
 */
(function(){

    angular.module("app").directive("bookmarkArea",["$localStorage",function($localStorage) {

        return {

            restrict: 'AE',
            templateUrl: 'app/templates/bookmarkAreaView.html',
            link: function (scope) {
                //display bookmark in results view
                vm.showBookmarkedDefinitions=function(word){

                    vm.word=word;
                    for(var i=0 ; i<$localStorage.bookmarks.length;i++){
                        vm.allDefinitions=[];
                        if($localStorage.bookmarks[i].word === word){
                            $localStorage.bookmarks[i].definitions.forEach(function(definition){
                                vm.isError=false;
                                vm.allDefinitions.push(definition);
                                vm.wordSearched=$localStorage.bookmarks[i].word;
                                vm.isBookmarkSelected=true;
                                vm.isBookmarked=true;

                            });
                            break;
                        }
                    }

                };

                //removing the bookmark from bookmark list
                vm.removeBookmark=function(word){

                    for(var i=0 ; i<$localStorage.bookmarks.length;i++){
                        if($localStorage.bookmarks[i].word === word){
                            $localStorage.bookmarks.splice(i,1);
                            vm.bookmarks=$localStorage.bookmarks;
                            //check if selected bookmark is in the results view
                            if(vm.word === word){
                                vm.allDefinitions=[];
                                vm.wordSearched="";
                                vm.word="";
                                vm.isBookmarked=false;
                                vm.isResultAvailable=false;
                                vm.isBookmarkSelected=false;
                            }
                            //check if bookmarks list is empty

                            if(!$localStorage.bookmarks.length){
                                vm.bookmarks=[];
                                $localStorage.bookmarks=[];
                                vm.isBookmarksAvailable=false;
                            }
                            else{
                                vm.bookmarks=$localStorage.bookmarks;
                                vm.isBookmarksAvailable=true;
                            }
                            break;
                        }
                    }
                    vm.calBookmarkCount();
                };



            }

        }
    }]);

})();