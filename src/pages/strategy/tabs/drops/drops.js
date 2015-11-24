(function(){
    "use strict";

    KC3StrategyTabs.drops = new KC3StrategyTab("drops");
    KC3StrategyTabs.drops.definition = {
        tabSelf: KC3StrategyTabs.drops,

        /* INIT
         Prepares all data needed
         ---------------------------------*/
        init: function() {
            if(typeof localStorage.maps != "undefined"){
                this.maps = JSON.parse( localStorage.maps );
            }else{
                return false;
            }
        },

        /* EXECUTE
         Places data onto the interface
         ---------------------------------*/
        execute: function() {

        },

        /*
        SHOW PAGE
         */
        showPage: function() {

        }

    }

})();
