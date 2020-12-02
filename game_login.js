function Sign_in()
{
player_name1 = document.getElementById("Username1").value;
player_name2 = document.getElementById("Username2").value;
localStorage.setItem("Username1"),player_name1;
localStorage.setItem("Username2"),player_name2;
window.location.replace("game_page.html");
}