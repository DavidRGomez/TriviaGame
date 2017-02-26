$( document ).ready(function() {
	count = 10;
	var obj1 =  [{question:"Whats the most points Kobe Bryant has ever Scored?", choices: {choice1: "1 billion",choice2: "81",choice3: "62",choice4: "70"}},
					{question:"Who has won the most Nba championships?", choices: {choice1: "Bostin Celtics", choice2: "Los Angeles Lakers",choice3: "San Antonio Spurs",choice4:"Chicago Bulls"}},
					{question: "Which coach has the most Titles?", choices: { choice1: "Phil Jackson", choice2: "Gregg Popovich", choice3: "John Kundla", choice4: "Steve Kurr"}},
					{question: "What is the basketball court floor made off?", choices: {choice1: "Hardwood", choice2:"asphalt", choice3: "concrete", choice4: "chalk"}},
					{question: "", choices: {choice1: "", choice2:"", choice3: "", choice4: ""}}];
	var correct = 0;
	var wrong = 0;
	var template;
	var counter;
	
	$('#startGame').on("click", function(){ 
		var counter = setInterval(timer, 1000);
		var indexPlaceHolder;
		
		function displayCorrect(){
			$('.correct').css('display', 'block');
			correct++;
			
		}
		function displayWrong(){
			$('.wrong').css('display', 'block');
			wrong++;
		}
		function endOfGame(){
			$('.endGame').css("display", "block");

			$('.finalCorrect').html(correct);
			$('.finalWrong').html(wrong);
		}
		function startOver(){
			$('#startGame').css('display', "block");
			$('.endGame').css("display", "none");
			correct = 0;
			wrong = 0;
			$('.timer').css("display", "none");
			count = 10;
			clearInterval(counter)
		}
		function timer(){
			count = count-1;
			if(count<=0){
					wrong++
					clearInterval(counter);
					showText(indexPlaceHolder + 1);
			};
			$('.timer').css("display", "block");
			$('.timer').html("Time Remaining: " + count );
		};//end of timer()
		

		$('#startGame').css('display', 'none');
	
		function showText(index){
			indexPlaceHolder = index;
			var template= '<p class="question">' + obj1[index].question + '</p>' 
							+ '<li class="choice1">'+ obj1[index].choices.choice1 +'</li>' 
							+ '<li class="choice2">' + obj1[index].choices.choice2 + '</li>' 
							+ '<li class="choice3">' + obj1[index].choices.choice3 + '</li>' 
							+ '<li class="choice4">' + obj1[index].choices.choice4 + '</li>';
			
			$('#outPut').html(template);
			$('#outPut').css('display','block');
			
			switch(indexPlaceHolder){
				case 0: 
						$('.choice2').on("click", function(){
							$('#outPut').css('display', 'none');
							displayCorrect();
							setTimeout(function(){ 
								$('.correct').css('display', 'none');
								showText(1);
								}, 1500);
							clearInterval(counter);							
						})
						$('.choice1').on("click", function(){
							setTimeout(function(){
								$('.wrong').css('display', 'none');
								showText(1);
								}, 1500);
							$('#outPut').css("display", 'none');
							displayWrong();
							clearInterval(counter);
						})
						$('.choice3').on("click", function(){
							setTimeout(function(){
								$('.wrong').css('display', 'none');
								showText(1);
								}, 1500);
							$('#outPut').css("display", 'none');
							displayWrong();
							clearInterval(counter);
						})
						$('.choice4').on("click", function(){
							setTimeout(function(){
								$('.wrong').css('display', 'none');
								showText(1);
								}, 1500);
							$('#outPut').css("display", 'none');
							displayWrong();
							clearInterval(counter);
						});		
						break;

				case 1:
						count = 10;
						counter = setInterval(timer, 1000);
						
						$('.choice1').on("click", function(){
							$('#outPut').css('display', 'none');
							displayCorrect();
							setTimeout(function(){
								$('.correct').css('display', "none");
								showText(2);}, 1500);
							clearInterval(counter);
						});
						$('.choice2').on('click', function(){
							$('#outPut').css('display', 'none');
							displayWrong();
							setTimeout(function(){
								$('.wrong').css('display', 'none'); 
								showText(2);
								}, 1500);
							clearInterval(counter);
						})
						$('.choice3').on('click', function(){
							$('#outPut').css('display', 'none');
							displayWrong();
							setTimeout(function(){
								$('.wrong').css('display', 'none'); 
								showText(2);
								}, 1500);
							clearInterval(counter);
						})
						$('.choice4').on('click', function(){
							$('#outPut').css('display', 'none');
							displayWrong();
							setTimeout(function(){
								$('.wrong').css('display', 'none'); 
								showText(2);
								}, 1500);
							clearInterval(counter);
						})
						break;
				case 2:
						count = 10;
						counter = setInterval(timer, 1000);
						$('.choice1').on("click", function(){
							$('#outPut').css('display', 'none');
							displayCorrect();
							setTimeout(function(){
								$('.correct').css('display', "none");
								showText(3);}, 1500);
							clearInterval(counter);
						});
						$('.choice2').on('click', function(){
							$('#outPut').css('display', 'none');
							displayWrong();
							setTimeout(function(){
								$('.wrong').css('display', 'none'); 
								showText(3);}, 
								1500);
							clearInterval(counter);
						})
						$('.choice3').on('click', function(){
							$('#outPut').css('display', 'none');
							displayWrong();
							setTimeout(function(){
								$('.wrong').css('display', 'none'); 
								showText(3);
								}, 1500);
							clearInterval(counter);
						})
						$('.choice4').on('click', function(){
							$('#outPut').css('display', 'none');
							displayWrong();
							setTimeout(function(){
								$('.wrong').css('display', 'none'); 
								showText(3);
								}, 1500);
							clearInterval(counter);
						})
						break;
				case 3:
						count = 10;
						counter = setInterval(timer, 1000);
						$('.choice1').on("click", function(){
							correct++;
							$('#outPut').css('display', "none");
							endOfGame();
							setTimeout(startOver, 4000);
							clearInterval(counter);
						})
						$('.choice2').on('click', function(){
							wrong++;
							$('#outPut').css('display', 'none');
							endOfGame();
							setTimeout(startOver, 4000);
							clearInterval(counter);	
						})
						$('.choice3').on('click', function(){
							wrong++;
							$('#outPut').css('display', 'none');
							endOfGame();
							setTimeout(startOver, 4000);
							clearInterval(counter);	
						})
						$('.choice4').on('click', function(){
							wrong++;
							$('#outPut').css('display', 'none');
							endOfGame();
							setTimeout(startOver, 4000);
							clearInterval(counter);
						});	
						break;
				case 4:
						$('#outPut').css('display', 'none');
						endOfGame();
						setTimeout(startOver, 4000);

							
			};//}end of switch statement
		}; //end of showText
		showText(0);
	});	//end of #startGame.on("click")
	clearInterval(counter);
});//end of document.ready()

	

    

