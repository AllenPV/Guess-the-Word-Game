Player_name1 = localStorage.getItem("Username1");
Player_name2 = localStorage.getItem("Username2");
Player1_score = 0;
Player2_score = 0;
document.getElementById("player1_name").innerHTML = Player_name1 + ":";
document.getElementById("player2_name").innerHTML = Player_name2 + ":";
document.getElementById("score1").innerHTML = Player1_score;
document.getElementById("score2").innerHTML = Player2_score;
document.getElementById("player_question").innerHTML = "Question turn -"+Player_name1;
document.getElementById("player_answer").innerHTML = "Answer turn -"+ Player_name2;
function Send()
{
    get_word = document.getElementById("Word").value;
    word = get_word.toLowerCase();
    console.log("word in lower case = "+word);
    CharAt1 = word.CharAt1(1);
    console.log(CharAt1);
    length_divide_2 = Math.floor(word.length/2);
    CharAt2 = word.CharAt2(length_divide_2);
    console.log(CharAt2);
    length_minus_1 = word.length-1;
    CharAt3 = word.CharAt3(length_minus_1);
    remove_CharAt1 = word.replace(CharAt1,"_");
    remove_CharAt2 = remove_CharAt1.replace(CharAt2,"_");
    remove_CharAt3 = remove_CharAt2.replace(CharAt3,"_");
    console.log(CharAt3);
}

