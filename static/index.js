// The issue could be that you haven't included the jQuery library properly, or that you're running your code before the DOM is ready.
console.log("running");
$(document).ready(function () {
  // $("p").hover(function () {
  //   alert("Beware");
  // });

  setInterval(myTimer, 1500);
  var imageUrl = "https://wallpapercave.com/wp/wp8349755.jpg";
  function myTimer() {
    // if ($("#arsenalHeader").text() == "Vandal")
    //   $("#arsenalHeader").html("Phantom");
    // else $("#arsenalHeader").html("Vandal");
    if (imageUrl === "https://wallpapercave.com/wp/wp8349755.jpg") {
      $("#arsenal").css("background-image", "url(" + imageUrl + ")");
      imageUrl = "https://wallpapercave.com/wp/wp8349717.jpg";
    } else {
      $("#arsenal").css("background-image", "url(" + imageUrl + ")");
      imageUrl = "https://wallpapercave.com/wp/wp8349755.jpg";
    }
  }

  setInterval(myTimer2, 1500);
  var imageUrl2 = "/static/introBg1.jpg";
  function myTimer2() {
    if (imageUrl2 === "/static/introBg.jpg") {
      imageUrl2 = "/static/introBg1.jpg";
      $("#introSection").css("background-image", "url(" + imageUrl2 + ")");
    } else if (imageUrl2 === "/static/introBg1.jpg") {
      imageUrl2 = "/static/introBg2.jpg";
      $("#introSection").css("background-image", "url(" + imageUrl2 + ")");
    } else if (imageUrl2 === "/static/introBg2.jpg") {
      imageUrl2 = "/static/introBg3.jpg";
      $("#introSection").css("background-image", "url(" + imageUrl2 + ")");
    } else {
      imageUrl2 = "/static/introBg.jpg";
      $("#introSection").css("background-image", "url(" + imageUrl2 + ")");
    }
  }

  // For Controlling Abilities of Agents
  // Agent1

  var index1 = 0;
  var c1 =
    "Instantly throw a projectile that expands into a brief vision-blocking cloud on impact with a surface. Hold the ability key to curve the smoke in the direction of your crosshair.";
  var q1 =
    "Instantly propel Jett high into the air. The ability is majorly used to get access to higher altitude positions which cannot be reached by most of the other agents.";
  var e1 =
    "Instantly propel Jett in the direction she is moving. If Jett is standing still, she will propel forward. Use it to escape from any possible unlikely situation.";
  var x1 =
    "Equip a set of highly accurate knives that recharge on killing an opponent. Fire to throw a single knife at your target. Alternate fire to throw all remaining daggers at your target.";

  const arr1 = [c1, q1, e1, x1];

  var C1 = "Cloudburst";
  var Q1 = "Updraft";
  var E1 = "Dash";
  var X1 = "BladeStorm";

  const Arr1 = [C1, Q1, E1, X1];
  const images1 = ["c", "q", "e", "x"];

  $("#ability1Name").html("Cloudburst");
  $("#ability1Info").html(c1);

  // $("#ability1Info").hover(function () {
  //   $("#ability1Info").html(e1);
  // });

  $("#rightArrow1").hover(
    function () {
      if (index1 < 3) {
        $(this).css("cursor", "pointer");
        var u2 = "/static/rightArrowHover.png";
        $(this).css("background-image", `url(${u2})`);
      } else {
        $(this).css("cursor", "default");
      }
    },
    function () {
      var u2 = "/static/rightArrow.png";
      $(this).css("background-image", `url(${u2})`);
    }
  );

  $("#rightArrow1").click(function () {
    if (index1 < 3) {
      var urlOfImage = `/static/jett${images1[index1 + 1]}.png`;
      $("#ability1Image").css("background-image", `url(${urlOfImage})`);
      $("#ability1Name").html(Arr1[index1 + 1]);
      $("#ability1Info").html(arr1[index1 + 1]);
      index1++;
    }
  });

  $("#leftArrow1").hover(
    function () {
      if (index1 > 0) {
        $(this).css("cursor", "pointer");
        var u2 = "/static/leftArrowHover.png";
        $(this).css("background-image", `url(${u2})`);
      } else {
        $(this).css("cursor", "default");
      }
    },
    function () {
      var u2 = "/static/leftArrow.png";
      $(this).css("background-image", `url(${u2})`);
    }
  );

  $("#leftArrow1").click(function () {
    if (index1 > 0) {
      var urlOfImage = `/static/jett${images1[index1 + -1]}.png`;
      $("#ability1Image").css("background-image", `url(${urlOfImage})`);
      $("#ability1Name").html(Arr1[index1 - 1]);
      $("#ability1Info").html(arr1[index1 - 1]);
      index1--;
    }
  });

  // $("#rightArrow1").click(function () {
  //   if (index1 < 3) {
  //     var urlOfImage = `/static/jett${images1[index1 + 1]}.png`;
  //     $("#ability1Image").css("background-image", `url(${urlOfImage})`);
  //     $("#ability1Name").html(Arr1[index1 + 1]);
  //     $("#ability1Info").html(arr1[index1 + 1]);
  //     index1++;
  //   }
  // });

  // $("#leftArrow1").click(function () {
  //   if (index1 > 0) {
  //     var urlOfImage = `/static/jett${images1[index1 + -1]}.png`;
  //     $("#ability1Image").css("background-image", `url(${urlOfImage})`);
  //     $("#ability1Name").html(Arr1[index1 - 1]);
  //     $("#ability1Info").html(arr1[index1 - 1]);
  //     index1--;
  //   }
  // });

  // $("#rightArrow").click(function () {
  //   if (index1 == 0) {
  //     $("#ability1Image").css(
  //       "background-image",
  //       "url(" + "/static/jettq.png" + ")"
  //     );
  //     $("#ability1Name").html(Q1);
  //     $("#ability1Info").html(q1);
  //   } else if (index1 == 1) {
  //     $("#ability1Image").css(
  //       "background-image",
  //       "url(" + "/static/jette.png" + ")"
  //     );
  //     $("#ability1Name").html(E1);
  //     $("#ability1Info").html(e1);
  //   } else if (index1 == 2) {
  //     $("#ability1Image").css(
  //       "background-image",
  //       "url(" + "/static/jettx.png" + ")"
  //     );
  //     $("#ability1Name").html(X1);
  //     $("#ability1Info").html(x1);
  //   }
  //   index1++;
  // });

  // Agent2
  var index2 = 0;
  var c2 =
    "Deploy's a bot, causing it to travel in a straight line on the ground, bouncing off walls. The Boom Bot will lock on to any enemies in its frontal cone and chase them, exploding for heavy damage if it reaches them.";
  var q2 =
    "Throw a Blast Pack that will stick to surfaces. Trigger it after deployment to detonate, damaging and moving anything hit. Raze isn't damaged by this ability, but will still take fall damage if launched up far enough.";
  var e2 =
    "Equip a cluster grenade. Fire to throw the grenade, which does damage and creates sub-munitions, each doing damage to anyone in their range.";
  var x2 =
    "Equip a rocket launcher. Fire shoots a rocket that does massive area damage on contact with anything. Deals enough damage to send your enemies back to their base.";

  const arr2 = [c2, q2, e2, x2];

  var C2 = "Boombot";
  var Q2 = "Blast Pack";
  var E2 = "Paint Shells";
  var X2 = "Showstopper";

  const Arr2 = [C2, Q2, E2, X2];
  const images2 = ["c", "q", "e", "x"];

  $("#ability2Name").html("Boombot");
  $("#ability2Info").html(c2);

  $("#rightArrow2").hover(
    function () {
      if (index2 < 3) {
        $(this).css("cursor", "pointer");
        var u2 = "/static/rightArrowHover.png";
        $(this).css("background-image", `url(${u2})`);
      } else {
        $(this).css("cursor", "default");
      }
    },
    function () {
      u = "/static/rightArrow.png";
      $(this).css("background-image", `url(${u})`);
    }
  );

  $("#rightArrow2").click(function () {
    if (index2 < 3) {
      var urlOfImage2 = `/static/raze${images2[index2 + 1]}.png`;
      $("#ability2Image").css("background-image", `url(${urlOfImage2})`);
      $("#ability2Name").html(Arr2[index2 + 1]);
      $("#ability2Info").html(arr2[index2 + 1]);
      index2++;
    }
  });

  $("#leftArrow2").hover(
    function () {
      if (index2 > 0) {
        $(this).css("cursor", "pointer");
        var u2 = "/static/leftArrowHover.png";
        $(this).css("background-image", `url(${u2})`);
      } else {
        $(this).css("cursor", "default");
      }
    },
    function () {
      u = "/static/leftArrow.png";
      $(this).css("background-image", `url(${u})`);
    }
  );

  $("#leftArrow2").click(function () {
    if (index2 > 0) {
      var urlOfImage2 = `/static/raze${images2[index2 + -1]}.png`;
      $("#ability2Image").css("background-image", `url(${urlOfImage2})`);
      $("#ability2Name").html(Arr2[index2 - 1]);
      $("#ability2Info").html(arr2[index2 - 1]);
      index2--;
    }
  });

  // Agent3

  var index3 = 0;
  var c3 =
    "Equip a chemical launcher. Fire to launch a canister that shatters upon hitting the floor, creating a lingering chemical zone that damages and slows enemies.";
  var q3 =
    "Fire to throw an emitter that perpetually remains throughout the round. Re-use it to create a toxic gas cloud at the cost of fuel. This ability can be re-used more than once and can be picked up to be redeployed.";
  var e3 =
    "Equip a gas emitter launcher. Fire to deploy a long line of gas emitters. Re-use the ability to create a tall wall of toxic gas at the cost of fuel. This ability can be re-used more than once.";
  var x3 =
    "Equip a chemical sprayer. Fire to spray a chemical cloud in all directions around Viper, creating a large cloud that reduces the vision range and maximum health of players inside of it.";

  const arr3 = [c3, q3, e3, x3];

  var C3 = "Snake Bite";
  var Q3 = "Poison Cloud";
  var E3 = "Toxic Screen";
  var X3 = "Vipe's Pit";

  const Arr3 = [C3, Q3, E3, X3];
  const images3 = ["c", "q", "e", "x"];

  $("#ability3Name").html("Snake Bite");
  $("#ability3Info").html(c3);

  $("#rightArrow3").hover(
    function () {
      if (index3 < 3) {
        $(this).css("cursor", "pointer");
        var u2 = "/static/rightArrowHover.png";
        $(this).css("background-image", `url(${u2})`);
      } else {
        $(this).css("cursor", "default");
      }
    },
    function () {
      var u2 = "/static/rightArrow.png";
      $(this).css("background-image", `url(${u2})`);
    }
  );

  $("#rightArrow3").click(function () {
    if (index3 < 3) {
      var urlOfImage3 = `/static/viper${images3[index3 + 1]}.png`;
      $("#ability3Image").css("background-image", `url(${urlOfImage3})`);
      $("#ability3Name").html(Arr3[index3 + 1]);
      $("#ability3Info").html(arr3[index3 + 1]);
      index3++;
    }
  });

  $("#leftArrow3").hover(
    function () {
      if (index3 > 0) {
        $(this).css("cursor", "pointer");
        var u2 = "/static/leftArrowHover.png";
        $(this).css("background-image", `url(${u2})`);
      } else {
        $(this).css("cursor", "default");
      }
    },
    function () {
      var u2 = "/static/leftArrow.png";
      $(this).css("background-image", `url(${u2})`);
    }
  );

  $("#leftArrow3").click(function () {
    if (index3 > 0) {
      var urlOfImage3 = `/static/viper${images3[index3 + -1]}.png`;
      $("#ability3Image").css("background-image", `url(${urlOfImage3})`);
      $("#ability3Name").html(Arr3[index3 - 1]);
      $("#ability3Info").html(arr3[index3 - 1]);
      index3--;
    }
  });

  // For about section services

  var s1 =
    "A proper one-to-one interaction will take place between the client and the trainer using the discord app wherein the trainer will personally provide guidance to the client and will also be open to solve all of your quries regarding the game.";

  var s2 =
    "The client can pick up any gaming video of their choice, preferabely a clip involving some of their own gameplay. The trainer will analyse the video and provide a constrcutive feedback to help you imrpove over your mistakes.";
  var s3 =
    "A proper statistics tracker will be provided to keep check of the client's various in-game statistics. This will allow the client to know about the areas where they are lagging and also keep a track of their performance throughout the duration of the course.";
  var s4 =
    "The client will be given access to special tournaments hosted by our academy, wherein they can compete against other players frequently and get a hang of the way official valorant tournaments are held. This will help to get familiarized with the format of tournaments and overcome its fear.";

  const arr4 = [s1, s2, s3, s4];

  var S1 = "Personal Coaching";
  var S2 = "VOD Reviews";
  var S3 = "Stats Tracker";
  var S4 = "Access to Tournaments";

  const Arr4 = [S1, S2, S3, S4];

  var service = 0;

  $("#next").hover(
    function () {
      if (service < 3) {
        $(this).css("cursor", "pointer");
        $(this).css("color", "black");
      } else {
        $(this).css("cursor", "default");
      }
    },
    function () {
      $(this).css("color", "white");
    }
  );

  $("#next").click(function () {
    if (service < 3) {
      $("#service").html(Arr4[service + 1]);
      $("#services").html(arr4[service + 1]);
      service++;
    }
  });

  $("#back").hover(
    function () {
      if (service > 0) {
        $(this).css("cursor", "pointer");
        $(this).css("color", "black");
      } else {
        $(this).css("cursor", "default");
      }
    },
    function () {
      $(this).css("color", "white");
    }
  );

  $("#back").click(function () {
    if (service > 0) {
      $("#service").html(Arr4[service - 1]);
      $("#services").html(arr4[service - 1]);
      service--;
    }
  });
});
