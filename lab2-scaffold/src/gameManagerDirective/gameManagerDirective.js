angular.module('gameManager', [])
.directive('gameManager', function ($rootScope) {
  return {
    restrict: 'A',
    templateUrl: 'gameManagerDirective/gameManagerDirective.html',
    transclude: true,
    controller: function ($scope) {
      var ctrl = this;

      // array to store players

      // shuffling algorithm to be used for array of cards
      function shuffle (array) {
        var currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;

          // And swap it with the current element.
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }

        return array;
      }

      $scope.$watch(function () {
        // check length of cards array
      }, function (cardsRemain) {
        // if no cards are left attach message
        // to the root scope to display in the view
      });

      $scope.newGame = function () {
        $rootScope.view = {};

        var cards = [],
          ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'],
          suits = ['spades', 'hearts', 'diamonds', 'clubs'];

        ranks.forEach(function (rank) {
          suits.forEach(function (suit) {
            cards.push({ rank: rank, suit: suit});
          });
        });

        // shuffle the cards

        // reset and re-register players
      };

      $scope.askForSelectedCard = function () {
        // player who has turn asks for card rank (2, 5, J, etc)
        // so check if other player has any cards matching that rank
        // and give them to the player who has the turn, otherwise
        // set go fish on the player who was asks for their cards
      };

      $scope.drawCardForPlayer = angular.bind(ctrl, function (selectedPlayer) {
        // draw a card off the pile for the selected player,
        // then reset any go fish to false and swap the boolean
        // values to give the other player the turn
      });

      ctrl.drawCard = function (numOfCards) {
        // pull one card out of the array of cards
      };

      ctrl.registerPlayer = function (player) {
        // ensure the player is not already in the array,
        // then as soon as there is more than one player in the
        // array set the first player's turn to true
      };

      ctrl.selectedCard = function (card) {
        // set selected card as the card passed in
      };

      ctrl.goFishActive = function () {
        // find the player whose go fish value is true
      };

      // start a new game
    }
  };
});
