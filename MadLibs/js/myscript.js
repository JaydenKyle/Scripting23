

//write function
function write(){

var animal1 = document.getElementById('animal1').value;
console.log(animal1);


var animal2 = document.getElementById('animal2').value;
console.log(animal2);


var structure= document.getElementById('structure').value;
console.log(structure);

var candy = document.getElementById('candy').value;
console.log(candy);

 
var carbdrink = document.getElementById('carbdrink').value;
console.log(carbdrink);


var food = document.getElementById('food').value;
console.log(food);

 
var liquid = document.getElementById('liquid').value;
console.log(liquid);


var username = document.getElementById('username').value;
console.log(username);

var reward = document.getElementById('reward').value;
console.log(reward);

//radio variables
var item;
if(document.querySelector('input[name="item"]:checked') != null){
    item= document.querySelector('input[name="item"]:checked').value;
}else { item=" ";
    console.log(item);
}

var character;
if(document.querySelector('input[name="character"]:checked') != null){
    item= document.querySelector('input[name="character"]:checked').value;
}else{
    character=" ";
console.log(character);
}

if(character=="monster" != null){
    characterMessage = "This one is a real terrorizer!";
}else if (character=="fighter" != null){
    characterMessage = "nothing peaceful about this one!";
}else if(character=="warrior" != null){
    characterMessage = "Oooooh a warrior, somebody thinks their better then a fighter.";
}else if(character=="healer" != null){
    characterMessage = "Finally, a peaceful one. I sure was getting sick of all the fighters and warriors, in my opinion you picked the best one!";
}

//output message

document.getElementById('output').innerHTML = "<img class='img-fluid' src='images/spooky_nature.jpg' alt='stories'>";

document.getElementById('output').innerHTML += "<h2>Adventure For What You Deserve</h2>";

document.getElementById('output').innerHTML += "Lurking in the dark is a <b> " +animal1+ " </b> waiting for a <b> " +structure+ " </b> to arise from underneath the ground of a cave. This place is hidden so only the true <b> " +character+ " </b> can enter. "

document.getElementById('output').innerHTML += characterMessage; 

document.getElementById('output').innerHTML += "<br> To prove <b> " +username+ " </b> the <b>" +animal1+ " </b> is worthy it needs to present <b> " +food+ " </b> at the entrance of the cave. To get to the entrance <b> " +username+ " </b> has to cross the river of <b> " +liquid+ " </b> and <b> " +animal2+ " </b>. <b> " +animal2+ " </b> feeds off <b> " +animal1+ " </b> so <b> " +username+  " </b> must plan carefully. First up is hiding the scent of <b> " +animal1+ " </b>, <b> "  +username+  " </b>must pour <b> " +carbdrink+ " </b> all over them. Second, is the distraction, <b> " +animal2+  " </b> can not resist the sweet taste of <b> " +candy+ " </b> With the mountain of <b> " +candy+  " </b> for distraction, the third step would be to swing across using a <b> " +item+ " </b> with the <b> " +food+ " </b> in it's arm. Once across <b> " +username+ " </b> places the <b> " +food+ " </b> in front of the cave immediately revealing the <b> " +structure+ " </b> entering from the bottom there is a small room with a pedestal displaying the reward for the true <b>" +character+ " </b>. <b> " +username+ " </b> the <b> " +animal1+ "</b> is the true <b> " +character+ " </b> as they do their victory dance they lift the reward, a <b> " +reward+ " </b> in the air, their life is now complete. ";



}

