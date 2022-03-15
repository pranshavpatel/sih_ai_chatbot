let def = "How's it going? <br>Please type the number as per your question : <br>1. BYJU'S Classes program is available for which classes? <br>2. How can my child clear his/her doubts instantly during the online class? <br>3. What is a free trial class and how do I register for a trial class? <br>4. Are the trial classes free? <br>5. Will the teachers also help with school homework? <br><br>Press 6 to exit.";
let std = "Please type the number as per your question : <br>1. BYJU'S Classes program is available for which classes? <br>2. How can my child clear his/her doubts instantly during the online class? <br>3. What is a free trial class and how do I register for a trial class? <br>4. Are the trial classes free? <br>5. Will the teachers also help with school homework? <br><br>Press 6 to exit.";
function getBotResponse(input) {
    // Simple responses
    if (input == "Hello" || input == "Hi") {
        return def;
    } else if (input == "Goodbye" || input == "Bye") {
        return "Talk to you later!";
    } else if (input == "1") {
        return "Students across classes 4 to 10 can attend and learn from BYJU'S Classes. <br><br>" + std;

    } else if (input == "2") {
        return "While attending an online class, your child can ask his/her questions real-time via the “raise hand” function. Our teacher will instantly assist and solve your child's doubts. <br><br>" + std;

    } else if (input == "3") {
      return "Your child can attend a free trial class to experience BYJU'S Classes first-hand. This is a great way to understand the BYJU'S way of teaching and understand how instant doubt solving works. Our counsellor will help book a trial class for you at your convenience. <br><br>" + std;

    } else if (input == "4") {
      return "Yes, the trial classes are free. More details about the trial classes will be provided by our counsellor. <br><br>" + std;

    } else if (input == "5") {
      return "Any doubts by the student will be taken care of by the teachers during the session. After every session, tests and worksheets will be given as homework for students. The homework will be evaluated by the teachers and results will be shared on the portal. <br><br>" + std;

    } else if (input == "6") {
      return "Thank you for using our ChatBot! You can close the window or start again by typing 'Hi' or 'Hello'."
    } else if (input == "Heart clicked!") {
      return "Thank you for showing your support :D";
    } else {
        return "Try asking something else!";
    }
}


















//1. BYJU'S Classes program is available for which classes?
// Students across classes 4 to 10 can attend and learn from BYJU'S Classes.
// 2. How can my child clear his/her doubts instantly during the online class?
// While attending an online class, your child can ask his/her questions real-time via the “raise hand” function. Our teacher will instantly assist and solve your child's doubts.
// 3. What is a free trial class and how do I register for a trial class?
// Your child can attend a free trial class to experience BYJU'S Classes first-hand. This is a great way to understand the BYJU'S way of teaching and understand how instant doubt solving works. Our counsellor will help book a trial class for you at your convenience.
// 4. Are the trial classes free?
// Yes, the trial classes are free. More details about the trial classes will be provided by our counsellor
// 5. Will the teachers also help with school homework?
// Any doubts by the student will be taken care of by the teachers during the session. After every session, tests and worksheets will be given as homework for students. The homework will be evaluated by the teachers and results will be shared on the portal
