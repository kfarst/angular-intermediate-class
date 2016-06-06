angular.module('gameManager', [])
.directive('gameManager', function ($rootScope) {
  return {
    restrict: 'A',
    templateUrl: 'gameManagerDirective/gameManagerDirective.html',
    transclude: true,
    controller: function ($scope) {
      var ctrl = this;

      $scope.players = [];

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
        return $scope.cards.length;
      }, function (cardsRemain) {
        if (!cardsRemain) {
          var firstPlayer = _.first($scope.players),
            secondPlayer = _.last($scope.players);

          $rootScope.view = $rootScope.view || {};

          if (firstPlayer.points === secondPlayer.points) {
            $rootScope.view.winnerMessage = 'Tie Game';
          } else {
            $rootScope.view.winnerMessage = (firstPlayer.points > secondPlayer.points ?
                                             firstPlayer.name : secondPlayer.name) + ' Wins!';
          }
        }
      }, true);

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

        $scope.cards = shuffle(cards);

        $scope.players.forEach(angular.bind(ctrl, function (player) {
          player.reset();
          ctrl.registerPlayer(player);
        }));
      };

      $scope.askForSelectedCard = function () {
        var selectedPlayer = _.find($scope.players, { myTurn: true }),
          nonSelectedPlayer = _.find($scope.players, function (player) {
            return !player.myTurn;
          }),
          matchingCards = nonSelectedPlayer.giveCards($scope.selectedCard.rank);

          if (matchingCards.length) {
            selectedPlayer.takeCards(matchingCards);
            selectedPlayer.myTurn = false;
            _.assign(nonSelectedPlayer, { myTurn: true, goFish: false });
          } else {
            nonSelectedPlayer.goFish = true;
          }

          $scope.selectedCard.selected = false;
          $scope.selectedCard = null;
      };

      $scope.drawCardForPlayer = angular.bind(ctrl, function (selectedPlayer) {
        selectedPlayer.takeCards(ctrl.drawCard(1));
        selectedPlayer.myTurn = false;

        _.assign(_.find($scope.players, function (player) {
          return player !== selectedPlayer;
        }), { myTurn: true, goFish: false });
      });

      ctrl.drawCard = function (numOfCards) {
        return $scope.cards.splice(0, numOfCards);
      };

      ctrl.registerPlayer = function (player) {
        if (!_.find($scope.players, player)) {
          $scope.players.push(player);
        }

        if ($scope.players.length > 1) _.first($scope.players).myTurn = true;
      };

      ctrl.selectedCard = function (card) {
        $scope.selectedCard = card;
      };

      ctrl.goFishActive = function () {
        return _.find($scope.players, { goFish: true });
      };

      $scope.newGame();
    }
  };
});
