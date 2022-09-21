let home_score = document.getElementById("home-score");
let home_count = 0;
function home_add_one() {
    home_count += 1;
    home_score.textContent = home_count;  
}
function home_add_two() {
    home_count += 2;
    home_score.textContent = home_count;  
}
function home_add_three() {
    home_count += 3;
    home_score.textContent = home_count;  
}

let guest_score = document.getElementById("guest-score");
let guest_count = 0;
function guest_add_one() {
    guest_count += 1;
    guest_score.textContent = guest_count;  
}
function guest_add_two() {
    guest_count += 2;
    guest_score.textContent = guest_count;  
}
function guest_add_three() {
    guest_count += 3;
    guest_score.textContent = guest_count;  
}

const period_score = document.getElementById("period-scorecard");

function period_increase() {
    if (period_score.textContent < 4) {
        period_score.textContent = Number(period_score.textContent) + 1;
    } else {
        period_score.textContent = 1;
    }  
}

function refreshPage() {
    window.location.reload();
} 
