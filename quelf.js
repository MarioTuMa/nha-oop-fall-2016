$(document).ready(function() {
	let p1s = 0;
	let p2s = 0;
	let counter = 0;
	$("#penalty").hide()
	$("#penalty").hide()
	class Card{
		constructor(space,message,answer, rulecode){
			this.space=space;
			this.message=message;
			this.answer=answer;
			this.rulecode=rulecode;
		}
	}
	let cards=[]
	for(let i=0;i<cardmessages.length;i++){
		cards.push(new Card(i,cardmessages[i],cardanswers[i],rules[i]))
	}
	console.log(cards)

	$("#roll").click(function(){
		$("#penalty").show()
		$("#penalty").empty()
		$("#roll").empty();
		let roll = Math.floor(Math.random() * 6 + 1);
		alert("You rolled a "+ roll +"!")
		if(counter%2==0){
			p1s=p1s+roll;
			loadScore();
			if(cards[p1s].space%5==1){
				let answergiven=prompt(cards[p1s].message, "Enter your answer as a lowercase letter");
				if(answergiven==cards[p1s].answer){
					alert("You got it right!")
				}
				else{
					alert("You got it wrong! Click ok and then penalize yourself")
				}
			}
			else{
			alert(cards[p1s].message)
			}
			if((0<=cards[p1s].rulecode && cards[p1s].rulecode<=6)||(9<=cards[p1s].rulecode && cards[p1s].rulecode<=11)){
				$("#p1").append(cards[p1s].message)
			}
			else{ if(cards[p1s].rulecode==8){
				$("#global").append(cards[p1s].message)
			}
			}

			$("#roll").append("PLAYER 2 ROLL")
			$("#penalty").append("PENALIZE PLAYER 1")
		}
		else{
			p2s=p2s+roll;
			loadScore();
			if(cards[p2s].space%5==1){
				let answergiven=prompt(cards[p2s].message, "Enter your answer as a lowercase letter");
				if(answergiven==cards[p2s].answer){
					alert("You got it right!")
				}
				else{
					alert("You got it wrong! Click ok and then penalize yourself")
				}
			}
			else{
			alert(cards[p2s].message)
			}
			if((0<=cards[p2s].rulecode && cards[p1s].rulecode<=6)||(9<=cards[p2s].rulecode && cards[p1s].rulecode<=11)){
				$("#p2").append(cards[p1s].message+"<br>")
			}
			else{ if(cards[p2s].rulecode==8){
				$("#global").append(cards[p2s].message)
			}
			}
			$("#roll").append("PLAYER 1 ROLL")
			$("#penalty").append("PENALIZE PLAYER 2")

		}
		counter += 1;
	});

    $("#penalty").click(function(){
		alert("You have just been given a penalty, and you have moved back two spaces.");
		if(counter%2==1){
			if(p1s<2){
				p1s=0
			}
			else{
			p1s=p1s-2;
			}
			$("#penalty").hide()
		}
		else{
			if(p2s<2){
				p2s=0
			}
			else{
			p2s=p2s-2;
			}
		}
		loadScore();

    });

	function loadScore() {
		$("#player1space").html("Player 1 Score: " + p1s);
		$("#player2space").html("Player 2 Score: " + p2s);
		$("#")
	}
});
