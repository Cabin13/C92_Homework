var player1= document.getElementById("p1").innerHTML
var player2= document.getElementById("p2").innerHTML

function next_page() {
    localStorage.setItem("player1", player1)
    localStorage.setItem("player2", player2)
    window.location= "quiz.html"
}
