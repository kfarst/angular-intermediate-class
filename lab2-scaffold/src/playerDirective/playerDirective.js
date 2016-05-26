angular.module('player', [])
.directive('player', function () {
  return {
    restrict: 'A',
    require: '^gameManager',
    templateUrl: 'playerDirective/playerDirective.html',
    scope: {
      name: '@'
    },
    link: function (scope, ele, attrs, controller) {

      // pull goFishActive function from the controller and
      // attach it to the scope

      function firstDraw () {
        // each player starts with 4 cards
        // so draw 4 cards for the player
      }

      function checkCardsForScoring () {
        // checks for any four of a kind and
        // if finds any then remove them from
        // the player's cards and increment the
        // player's score by 1
      }

      // player object should have a name, boolean
      // for turn, boolean for go fish, integer for
      // points, and functions to give cards, take cards
      // and reset the player to original values
      scope.player = {};

      // register the player with the controller function

      // call the first draw for the player

      scope.selectCard = function (card) {
        // set a selected boolean to true for the
        // card passed in and pass it to the selected
        // card function on the controller, make sure
        // to deselect any currently selected card
        // if a another card is clicked
      };
    }
  };
});
