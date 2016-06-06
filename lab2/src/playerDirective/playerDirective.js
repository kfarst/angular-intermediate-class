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

      _.merge(scope, _.pick(controller, 'goFishActive'));

      function firstDraw () {
        scope.cards = controller.drawCard(4);
      }

      function checkCardsForScoring () {
        _(scope.cards).groupBy('rank').forEach(function (group, rank) {
          if (group.length === 4) {
            scope.player.giveCards(rank);
            scope.player.points++;
          }
        });
      }

      scope.player = {
        name: scope.name,
        myTurn: false,
        goFish: false,
        points: 0,
        giveCards: function (rank) {
          return _.remove(scope.cards, function (card) {
            return card.rank === rank;
          });
        },
        takeCards: function (cards) {
          Array.prototype.push.apply(scope.cards, cards);
          checkCardsForScoring();
        },
        reset: function () {
          scope.cards = [];

          _.assign(this, {
            myTurn: false,
            goFish: false,
            points: 0
          });

          firstDraw();
        }
      };

      controller.registerPlayer(scope.player);

      firstDraw();

      scope.selectCard = function (card) {
        var selectedCard = _.find(scope.cards, { selected: true });

        if (selectedCard) {
          selectedCard.selected = false;
        }

        card.selected = true;

        controller.selectedCard(card);
      };
    }
  };
});
