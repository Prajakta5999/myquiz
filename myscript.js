var questions = [
		
		{	
			question : "What type of computing technology refers to services and applications that typically run on a distributed network through virtualized resources?",
			choices : ["Distributed Computing","Cloud Computing","Soft Computing","Parallel Computing"],
			correctAnswer : 1 
		},
		{	
			question : "Which one of the following options can be considered as the Cloud?",
			choices : ["Hadoop","Intranet","Web Applications","All of the mentioned"],
			correctAnswer : 0 
		},
		{	
			question : "Which of the following has many features of that is now known as cloud computing?",
			choices : ["Web Service","Softwares","All of the mentioned","Internet"],
			correctAnswer : 3 
		},
		{	
			question : "Which one of the following cloud concepts is related to sharing and pooling the resources?",
			choices : ["Polymorphism","Virtualization","Abstraction","None of the mentioned"],
			correctAnswer : 1 
		},
		{	
			question : "Which of the following is an essential concept related to Cloud?",
			choices : ["Reliability","Abstraction","Productivity","All of the mentioned"],
			correctAnswer : 1 
		},
		{	
			question : "Which one of the following is Cloud Platform by Amazon?",
			choices : ["Azure","AWS","Cloudera","All of the mentioned"],
			correctAnswer : 1 
		},
		{	
			question : "In which one of the following phases, IT Architecture Development came?",
			choices : ["Strategy Phase","Planning Phase","Deployment Phase","Development Phase"],
			correctAnswer : 1 
		},
		{	
			question : "Which one of the following is related to the services provided by Cloud?",
			choices : ["Sourcing","Ownership","Reliability","PaaS"],
			correctAnswer : 0 
		},
		{	
			question : "How many phases are present in Cloud Computing Planning?",
			choices : ["2","3","4","5"],
			correctAnswer : 0 
		}
			
			];

var currentQuestion = 0 ;
var correctAnswers =  0 ;
var quizOver = false ;

$(document).ready(function() {

	displayCurrentQuestion();

	$(this).find(".quizMessage").hide();
	$(this).find(".nextButton").on("click", function() {

		if(!quizOver) 
		{

			value = $("input[type = 'radio']:checked").val() ;
			if(value == undefined)
			{
				$(document).find(".quizMessage").text("please select an answer !");
			    $(document).find(".quizMessage").show();

		 	}
			else 
			{

				$(document).find(".quizMessage").hide() ;
				if(value == questions[currentQuestion].correctAnswer)  
				{

					correctAnswers++;
			    }
				currentQuestion++ ;

				if(currentQuestion < questions.length)
				{

					displayCurrentQuestion() ;
				} 
				else
				{

					displayScore();
					$(document).find(".nextButton").text("Play again?");
					quizOver = true ;
				}

			}
   		}
		else 
		{

			quizOver = false ;
			$(document).find(".nextButton").text("Next Question");
			resetQuiz() ;
			displayCurrentQuestion();
			hideScore() ;

		}

	})
});

function displayCurrentQuestion(){

	console.log("In display current questions") ;
	var question = questions[currentQuestion].question ;
	var questionClass = $(document).find(".quizContainer > .question ") ;
	var choiceList = $(document).find(".quizContainer > .choiceList")
	var numChoices = questions[currentQuestion].choices.length;

	$(questionClass).text(question) ;

	$(choiceList).find("li").remove() ;

	var choice ;

	for(i = 0 ; i < numChoices ; i++)
	{
		choice = questions[currentQuestion].choices[i] ;
		$('<li> <input type = "radio" value = ' +i+'name = "dynradio"/>' + choice + '</li>').appendTo(choiceList);


	}
}

function resetQuiz()
{
	currentQuestion = 0;
	correctAnswers = 0 ;
	hideScore() ;


}
function displayScore()
{
	$(document).find(".quizContainer > .result ").text("you scored" +correctAnswers+"out of"+questions.length) ;
	$(document).find(".quizContainer > .result ").show() ;

}
function hideScore()
{

	$(document).find(".result").hide();

}
