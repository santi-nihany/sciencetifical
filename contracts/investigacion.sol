// SPDX-License-Identifier: MIT

pragma solidity ^0.8.4;

contract SurveyContract {
    // Estructura de pregunta, puede ser multiple choice o abierta
    struct Question {
        string questionText;        // Texto de la pregunta
        string type_of_question;    // Tipo de prsegunta: "multiplechoice" u "open"
        string[] options;           // Opciones para preguntas de opción múltiple
        uint256[] voteCounts;       // Recuento de votos para cada opción
    }
    
    // Estructura de una encuesta
    struct Survey {
        string research;            // Nombre de la investigación
        address researcher;         // Dirección del investigador
        Question[] questions;       // Preguntas de la encuesta
    }
    
    // Almacena todas las encuestas
    Survey[] public surveys;
    
    // Mapea la dirección del user a la encuesta en la que está participando
    mapping(address => Survey) public participantToSurvey;
    
    //  Emito evento cuando se crea una nueva encuesta
    event SurveyCreated(address indexed researcher, uint256 surveyIndex);
    
    //Verificar que solo el investigador pueda realizar ciertas operaciones
    modifier onlyResearcher(uint256 surveyIndex) {
        require(msg.sender == surveys[surveyIndex].researcher, "Ups! Esta parte es solo para researchers :)");
        _;
    }
    
    // Creo una nueva encuesta
    function createSurvey(string memory research, string[] memory questionTexts, string[] memory typeOfQuestions, string[][] memory options) external {
        require(questionTexts.length == typeOfQuestions.length && questionTexts.length == options.length, "Mmm... algo anda mal, chequea tus preguntas!");
        
        Question[] memory questions = new Question[](questionTexts.length); // Preguntas
        
        for (uint256 i = 0; i < questionTexts.length; i++) { // Itera sobre todas las preguntas
            string[] memory optionList = options[i];
            uint256[] memory voteCounts = new uint256[](optionList.length);
            
            for (uint256 j = 0; j < optionList.length; j++) {
                voteCounts[j] = 0;
            }
            
            questions[i] = Question({ // Agrego la pregunta al coso de preguntas
                questionText: questionTexts[i],
                type_of_question: typeOfQuestions[i],
                options: optionList,
                voteCounts: voteCounts
            });
        }
        
        surveys.push(Survey({ // Agrego la encuesta al coso de encuestas
            research: research,
            researcher: msg.sender,
            questions: questions
        }));
        
        emit SurveyCreated(msg.sender, surveys.length - 1); // tira evento de q se creó la survey
    }
    
    // Responder una encuesta
    function answerSurvey(uint256 surveyIndex, string[] memory textAnswers, uint256[] memory selectedOptions) external {
        require(surveyIndex < surveys.length, "Oh oh... el index no es valido");
        require(textAnswers.length + selectedOptions.length == surveys[surveyIndex].questions.length, "Huh... hay algo mal con la cantidad de respuestas");
        
        uint256 questionIndex = 0;
        
        for (uint256 i = 0; i < surveys[surveyIndex].questions.length; i++) {
            Question storage question = surveys[surveyIndex].questions[i];
            
            if (keccak256(abi.encodePacked(question.type_of_question)) == keccak256(abi.encodePacked("open"))) {
                require(questionIndex < textAnswers.length, "Ey ey, para seguir necesitamos que respondas todas las preguntas abiertas :)");
                // Almacenar respuesta de texto en un mapeo con la dirección del participante y la respuesta
                participantToSurvey[msg.sender].questions[i].options.push(textAnswers[questionIndex]);
                questionIndex++;
            } else {
                require(questionIndex < selectedOptions.length, "Mmm... algo anda mal, chequea tus preguntas!");
                require(question.options.length > 0, "Ups! Esta pregunta no tiene opciones :)");
                
                if (selectedOptions[questionIndex] < question.options.length) {
                    question.voteCounts[selectedOptions[questionIndex]]++;
                }
                
                questionIndex++; 
            }
        }
        
        participantToSurvey[msg.sender] = surveys[surveyIndex]; // guardo la encuesta en la que participó el usuario
    }
    
    // Obtener el recuento de votos para una pregunta 
    function getVoteCount(uint256 surveyIndex, uint256 questionIndex, uint256 optionIndex) external view returns (uint256) {
        return surveys[surveyIndex].questions[questionIndex].voteCounts[optionIndex];
    }
    
    // Obtener la respuesta de texto 
    function getTextAnswer(uint256 surveyIndex, uint256 questionIndex, address participant) external view returns (string memory) {
        require(surveyIndex < surveys.length, "Oh oh... el index no es valido");
        require(questionIndex < surveys[surveyIndex].questions.length, "Oh oh... el index no es valido");
        
        return participantToSurvey[participant].questions[questionIndex].options[0];
    }
}