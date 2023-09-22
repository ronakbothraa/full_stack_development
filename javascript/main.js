let a = "ronak";
let b = "patel";

localStorage.setItem("name", a);
let score = JSON.parse(localStorage.getItem("score")) || {
    wins: 0,
    losses: 0,
    ties: 0
};
document.write(score.wins + " " + score.losses + " " + score.ties);

//destructure
const object1 = {
    message: 'good job!'
    price: 799
}
const {message, price} = object1;