$(document).ready(function() {
    
    var wins = 0;
    var losses = 0;
    var userTotal = 0;
  
    
    var randomNumber = Math.floor(Math.random() * 102 + 19);
    var amethystNumber = Math.floor(Math.random() * 12 + 1);
    var quartzNumber = Math.floor(Math.random() * 12 + 1);
    var emeraldNumber = Math.floor(Math.random() * 12 + 1);
    var rubyNumber = Math.floor(Math.random() * 12 + 1);

    function determineWinner() {
        if (userTotal == randomNumber) {
          wins++;
    
          $("#userWins").html("Wins: " + wins);
          reset();
        } else if (userTotal > randomNumber) {
          losses++;
    
          $("#userLosses").html("Losses: " + losses);
          reset();
        }
      }
    
      function reset() {
        randomNumber = Math.floor(Math.random() * 102 + 19);
        $("#computerScore").html(randomNumber);
        amethystNumber = Math.floor(Math.random() * 12 + 1);
        quartzNumber = Math.floor(Math.random() * 12 + 1);
        emeraldNumber = Math.floor(Math.random() * 12 + 1);
        rubyNumber = Math.floor(Math.random() * 12 + 1);
        userTotal = 0;
        $("#userPoints").text(userTotal);
      }
    
      
      $("#amethyst").on("click", function() {
        userTotal = userTotal + amethystNumber;
        $("#userPoints").html(userTotal);
        determineWinner();
      });
    
      $("#quartz").on("click", function() {
        userTotal = userTotal + quartzNumber;
        $("#userPoints").html(userTotal); 
        determineWinner();
      }); 
    
      $("#emerald").on("click", function() {
        userTotal = userTotal + emeraldNumber;
        $("#userPoints").html(userTotal); 
        determineWinner();
      });
    
      $("#ruby").on("click", function() {
        userTotal = userTotal + rubyNumber;
        $("#userPoints").html(userTotal); 
        determineWinner();
      }); 
    });