"use strict";

const body = document.querySelector("body");

const choice1 = document.getElementById("btn-choice1");
const choice2 = document.getElementById("btn-choice2");
const choice3 = document.getElementById("btn-choice3");

const heading = document.querySelector(".heading");
const storyText = document.querySelector(".storyText");

let page = 1;

const showBTN = function (btn, text) {
  btn.classList.remove("hidden");
  btn.textContent = text;
};

const hideBTN = function (btn) {
  btn.classList.add("hidden");
};

const HideBTNs = function () {
  choice1.classList.add("hidden");
  choice2.classList.add("hidden");
  choice3.classList.add("hidden");
};

const lose = function (text) {
  heading.classList.remove("hidden");
  heading.classList.add("lose");
  heading.textContent = "👹👹👹YOU LOSE!!!👹👹👹";
  HideBTNs();
  storyText.textContent = text;
};

choice1.addEventListener("click", function () {
  switch (page) {
    case 1:
      page = 2;
      heading.classList.add("hidden");
      storyText.textContent =
        "You were walking at a steady pace when Jason tripped but Banjo gained five billion aura by catching him and it's overwhelming causing you to lose your grip on the ground!";

      choice1.textContent = "Use ur dagger to try and stay on the ground";
      showBTN(
        choice2,
        "Start massively farming aura with Jason T to stay on the ground",
      );

      showBTN(choice3, "control air (airbend) to save yourself");
      break;
    case 2:
      //   storyText.textContent =
      //     "You only cut off the grass and flew into the sky; To restart refresh the tab like a sigma";
      lose(
        "You only cut off the grass and flew into the sky; To restart refresh the tab like a sigma",
      );
      break;
    case 3:
      page = 4;
      storyText.innerHTML =
        "HELLO, I AM A MAGIC YAPPING MAP! <br> You are currently at Gargagoodian. <br> There is a fork in the road!!! OoOOoOOOoooOOhhhhh! <br> On your left is the land of Natures <br> On your right is the land of Machines <br> CHOOSE WHEREE TO GO!!!";
      showBTN(choice1, "Go to THE LAND OF TREES");
      showBTN(choice2, "Go to THE LAND OF MACHINES");
      break;
    case 4:
      page = 5;
      storyText.innerHTML =
        "You see the castle surrounded by trees however you see a puzzle. <br> The buttons names are Tung Tung Tung Sahur, Jimmy Joffnovel, and Geiser. <br> Two can only lie, whereas one must say the truth. The one that says the truth is the one you gotta click btw. Also I'm the yapping map not one of them. <br> Tung Tung Tung Sahur: Geiser is saying the truth. <br> Jimmy Joffnovel: I am a big back who eats 67 fries, 47 big macs, 60021 chips, 6 drinks, and a 'light snack' as my order. <br> Geiser: I don't watch cocomelon";
      HideBTNs();
      showBTN(choice1, "Tung Tung Tung Sahur");
      showBTN(choice2, "Jimmy Joffnovel");
      showBTN(choice3, "Geiser");
      break;
    case 5:
      lose();
      storyText.textContent =
        "WRONG!!! WRONG WRNOG WRONG SAHURRRRR!!HE WAS A LIAR. WHY DID U CLICK A LIAR. LISTEN TO THE MAP. TWO PEOPLE ARE LYING. IF TUNG TUNG TUNG SAHUR WAS SAYING THE TRUTH THEN GEISER WOULD BE SAYING THE TRUTH AND THAT WOULD MAKE TWO PEOPLE SAYING THE TRUTH, MEANING IT HAS TO BE JIMMY JOFFNOVEL. LOCK IN!!!";
      break;
    case 6:
      HideBTNs();
      showBTN(heading, "Ending #1 finding Aymaan");
      showBTN(
        storyText,
        "Aymaan and the gooboodooboogoblogablangiblegoosgaboombimbobambobimbacoconut were just playing the new game, the Legend of, Yelda? From this disappointment you, Jasonicus, and Banjo vaporize into ash. Aymaan and the gooboodooboogoblogablangiblegoosgaboombimbobambobimbacoconut just went back to playing their game like you bothered them",
      );
      break;
    case 7:
      lose();
      showBTN(
        storyText,
        "That was not the right answer, and it doesn't make that much sense either.",
      );
      break;
    default:
  }
});

choice2.addEventListener("click", function () {
  switch (page) {
    case 2:
      page = 3;
      storyText.textContent =
        "This counteracted Banjo's immense aura and after a while of aurafarming it went back to normal. Going across your path you have found a map!";
      hideBTN(choice2);
      hideBTN(choice3);
      showBTN(choice1, "Read it?");
      break;
    case 4:
      page = 7;
      storyText.innerHTML =
        "You're in the land of Machines, a drone comes and identifies you as Humans. Suddenly you are inside a cell with an 'impossible puzzle' that is the key to leaving. <br> What rhymes with the verb fiddle while using that verb to find something from your brain. ";
      HideBTNs();
      showBTN(choice1, "belittle");
      showBTN(choice2, "diddle");
      showBTN(choice3, "fiddle");
      break;
    case 5:
      page = 6;
      storyText.innerHTML =
        "You have passed the riddle and after walking for 3 seconds you reach the castle, although it looks like there are three holes <br> Inside the red hole is a baboon playing games with gooboodooboogoblogablangiblegoosgaboombimbobambobimbacoconut, <br> inside the green hole is a fat little boy drooling as he looks at a screen, <br> inside the blue hole is a nintendo switch 3";
      HideBTNs();
      showBTN(choice1, "The red hole");
      showBTN(choice2, "The green hole");
      showBTN(choice3, "The blue hole");
      break;
    case 6:
      HideBTNs();
      showBTN(heading, "Ending #2 Awkward Chud");
      showBTN(
        storyText,
        "Your gang and the chud are just awkwardly staring at eachother",
      );
      break;
    case 7:
      lose();
      showBTN(storyText, "That was not the right answer");
      break;
  }
});

choice3.addEventListener("click", function () {
  switch (page) {
    case 2:
      console.log("CHOICE 3 SELECTED");
      lose("You can't airbend bro. Ur just good with daggers");
      break;
    case 5:
      lose();
      storyText.textContent =
        "WRONG! IF GEISER WAS SAYING THE TRUTH THEN TUNG TUNG TUNG SAHUR WAS SAYING THE TRUTH MEANING TWO PEOPLE SAID THE TRUTH. THE MAP LITERALLY SAID 'Only ONE person can say the truth' ONE, ONE, LOCK IN NOW!!!";
      break;
    case 6:
      lose();
      storyText.innerHTML =
        "You got trapped noooo :( <br> Jason: Atleast we can play games, right Jidi Jobson? <br> Banjo: Right. Oh yo it's my favourite game the Legend of, Yelda? All these games are ripoffs! <br> You: Jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi jidi <br> Jasonicus: Burrito, you good?";

      break;
    case 7:
      page = 8;
      HideBTNs();
      showBTN(heading, "Ending #3 The super happy ending or smth idk");
      showBTN(
        storyText,
        "You got out of the cell and your gang suddenly started floating into the sky and started being happy or smth I'm too lazy to finish this ending this is the end go back and find the other endings.",
      );
      break;
  }
});

const click = new Audio("clickerx.wav");
const music = new Audio("BackgroundMusic.mp3");

document.addEventListener("click", function () {
  music.loop = true;
  music.play();
  click.play();
});
