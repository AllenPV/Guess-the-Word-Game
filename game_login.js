function Sign_in()
{
player_name1 = document.getElementById("Username1").value;
player_name2 = document.getElementById("Username2").value;
localStorage.setItem("player_name1",player_name1);
localStorage.setItem("player_name2",player_name2);
window.location="game_page.html";
}