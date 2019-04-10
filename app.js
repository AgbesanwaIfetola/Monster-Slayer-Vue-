new Vue({
  el: '#app',
  data: {
    mon: 100,
    play: 100,
    gameStart: false,
    turns: [],
  },
  methods: {
    startGame: function() {
      this.gameStart = true;
      this.play = 100;
      this.mon = 100;
      this.turns=[];
    },
    endGame: function() {
      this.gameStart = false;
      this.turns=[];
      alert('You have concluded the game \nYou may start a new game if you want');
    },
    attack: function() {
      var damage = this.battle(3, 10);
      this.mon -= damage;
      this.turns.unshift({
        isPlay: true,
        text: 'Player Hits monster for' + damage,
      });
      ///------------------------------------------------------------
      this.monsterAttack();

      if (this.mon <= 0) {
        alert(' Congratulations You defeated the Monster!');
        this.askNewGame();
      } else if (this.play <= 0) {
        alert('Sorry you just Lost :(');
        this.askNewGame();
      }
    },
    specialAttack: function() {
      var damage = this.battle(10, 20);
      this.mon -= damage;
      this.turns.unshift({
        isPlay: true,
        text: 'Player Hits monster hard for ' + damage,
      });
      ///------------------------------------------------------------
      this.monsterAttack();

      if (this.mon <= 0) {
        alert(' Congratulations You defeated the Monster!');
        this.askNewGame();
      } else if (this.play <= 0) {
        alert('Sorry you just Lost :(');
        this.askNewGame();
      }
    },
    heal: function() {
      if (this.play <= 90) {
        this.play += 10;
      } else {
        this.play = 100;
      }
      
      this.monsterAttack();
      this.turns.unshift({
        isPlay: true,
        text: 'Player Heals for ' + 10,
      });
      ///------------------------------------------------------------
    },
    askNewGame: function() {
      this.gameStart = false;
      alert(confirm('New Game?'));
    },
    monsterAttack() {
      var damage = this.battle(5, 12);
      this.play -= damage;
      this.turns.unshift({
        isPlay: false,
        text: 'Monster Hits player for ' + damage,
      });
    },
    battle: function(min, max) {
      return Math.max(Math.floor(Math.random() * max) + 1, min);
    },
  },
});
