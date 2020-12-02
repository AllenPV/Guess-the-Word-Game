function Back()
{
    window.location = "Activity 1.html";
}
function Get_Score()
{
    Score = localStorage.getItem("score");
    document.getElementById("Update").innerHTML = "<h1>Score :" + Score + "</h1>";
}
