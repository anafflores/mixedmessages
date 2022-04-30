/*
function teamlead(){
    let randomIndex = Math.floor(Math.random() * 9);
    let avengers = ['Iron Man', 'Captain America', 'Black Widow', 'Thor','Scarlet Witch', 'Hawkeye', 'Hulk', 'Black Panther', 'Ant-Man'];
    let result = avengers[randomIndex];
    document.getElementById('leader').innerHTML= result;
}; 

function trg(){
let randomIndex = Math.floor(Math.random() * 9);
let secondary = ['War Machine', 'Falcon', 'Spider-Man', 'Valkyrie', 'The Wasp', 'Bucky Barnes', 'Shuri', 'Vision', 'Yelena Belova'];
let target = secondary[randomIndex];
document.getElementById('target').innerHTML= "Target:" + target;
};

function vlln(){
let randomIndex = Math.floor(Math.random() * 9);
let villians = ['Loki', 'Agatha', 'Ultron', 'Thanos', 'Ego', 'Hela', 'Mysterio', 'Dreykov', 'Rumlow'];
let enemy = villians[randomIndex];
document.getElementById('villian').innerHTML= "Enemy:" + enemy;
};

function loc(){
let randomIndex = Math.floor(Math.random() * 9);
let places = ['Sokovia', 'New York', 'Hydra Research Base', 'Wakanda', 'Red Room', 'Asgard', 'Mirror Dimension', 'Westview'];
let location = places[randomIndex];
document.getElementById('location').innerHTML= "Location:" + location;
}; 
*/

let discover = document.getElementById('testing');

function changeText(){
    let randomIndex = Math.floor(Math.random() * 9);

    let avengers = ['Iron Man', 'Captain America', 'Black Widow', 'Thor','Scarlet Witch', 'Hawkeye', 'Hulk', 'Black Panther', 'Ant-Man'];

    let result = avengers[randomIndex];

    document.getElementById('avenger').innerHTML = "Avenger leading the mission: " + result;

  
    let random = Math.floor(Math.random() * 9);

    let secondary = ['War Machine', 'Falcon', 'Spider-Man', 'Valkyrie', 'The Wasp', 'Bucky Barnes', 'Shuri', 'Vision', 'Yelena Belova'];

    document.getElementById('target').innerHTML = "Target: " + secondary[random];
  
    
    let randomNumber = Math.floor(Math.random() * 9);

    let locations = ['Sokovia', 'New York', 'Hydra Research Base', 'Wakanda', 'Red Room', 'Asgard', 'Mirror Dimension', 'Westview'];

    document.getElementById('location').innerHTML = "Location: " + locations[randomNumber];



    let randomVillian = Math.floor(Math.random() * 9);
        
    let enemies = ['Loki', 'Agatha', 'Ultron', 'Thanos', 'Ego', 'Hela', 'Mysterio', 'Dreykov', 'Rumlow'];
        
    document.getElementById('enemy').innerHTML = "Enemy: " + enemies[randomVillian];
    
    
    
    
}

discover.addEventListener('click', changeText);