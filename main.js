function Updatescore(){
score = score+1;
document.getElementById("Add User").innerHTML = "Score :"+score;
}
function Savescore(){
    localStorage.setItem("Score",score);
}
function NextPage(){
    window.location = "Activity 2.html";
}