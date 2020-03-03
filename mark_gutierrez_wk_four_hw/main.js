/*
//Question 2
//for loop complex syntax 
for (i = 0; i < 8; i++) { 
  text += "Number count: " + i + "<br>"; 
} 
*/

//question 4
//
let weaponList = ["Sword", "Lance", "Axe", "Bow"];
let i = 0;
let weaponType = weaponList.length;
let text = "";

for (; i < weaponType;) {
	text += weaponList[i] + "<br>";
	i++;
}

document.querySelector(".output_text").innerHTML = text;

//console.log(i);
let playerClass = ["Warrior", "Paladin", "Pirate"];
console.log(playerClass[0]);

/*
let swordAttack = 0;
let armorDefense = 20;
let damageComment = "";
//let noDamage = armorDefense - swordAttack;


for (; swordAttack < armorDefense; swordAttack++){
	//damageComment += swordAttack + " No damage." + "<br>";
	if (swordAttack < armorDefense){
	//damageComment += swordAttack + " Damage";	
	damageComment += swordAttack + " No damage." + "<br>";
	break;
	}
}
document.querySelector(".damage_cal").innerHTML = damageComment;
*/
//Question 7
let swordLevel = "";
for (let swordAttack = 1; swordAttack < 100; swordAttack++) { 
    if (swordAttack > 20) {
		document.querySelector(".damage_cal").innerHTML = swordLevel;
    break;
    }
    swordLevel +=  `Sword has reached ${swordAttack} Attack!` + `<br>`;
}
document.querySelector(".damage_cal").innerHTML = swordLevel;

//Question 8
let field = "";
for (apples = 1; apples < 10 ; apples++) { 
    if (apples === 3) { continue; } 
    field +=`${apples} apple collected! <br>`;
}
const appleCollected = document.querySelector(".field");
appleCollected.innerHTML = field;
               
//Question 9
let promoteClass = ["Mage", "Thief", "cleric"];
console.log(promoteClass);

//question 10 
let countNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(countNum);

//question 11
let loopArrayDataType = ["string", true, 0, false];
let allDataType = loopArrayDataType.length;
let arrayResult = "";

for (i = 0; i < allDataType; i++) {
	arrayResult += loopArrayDataType[i] + "<br>";
}
let loopArrayShow = document.querySelector(".data_type");
loopArrayShow.innerHTML = arrayResult;

//question 12
let person = {
	name: "Katharina",
	hairColor: "Blonde",
	eyeColors: "Blue"
};
personInfo = "";
for (let x in person){
	personInfo += person[x] + "<br>"; 
}
document.querySelector(".Person").innerHTML = personInfo;

const cardType = ["Common", "Rare", "Legendary", "Exclusive"];
for (const cardTypeValue of cardType) {
	console.log(cardTypeValue);
}

//question 15
let doResult = "";
let i_var = 0;

do {
	i_var = i_var + 1;
	doResult = doResult + i_var;
} while (i_var < 5);

console.log(doResult);