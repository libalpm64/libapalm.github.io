const staticTexts = [
"Libalpm - Your Cybersecurity weeb.",
"Active exploits: x64_86, arm5, shells.",
"OSINIT enthusiast, Zer0day is the way.",
"Linux Ethuatist"
];

const songs = [
  { name: "JVKE - Golden Hour", video: "https://hugh.cdn.rumble.cloud/video/s8/2/6/Y/x/T/6YxTp.haa.mp4" },
  { name: "Lil Peep - Downtown", video: "https://hugh.cdn.rumble.cloud/video/s8/2/Q/A/1/V/QA1Vp.baa.mp4" },
  { name: "xx", video: "https://hugh.cdn.rumble.cloud/video/s8/2/J/7/m/Y/J7mYp.caa.mp4" },
  { name: "xx", video: "https://hugh.cdn.rumble.cloud/video/s8/2/t/5/m/Y/t5mYp.caa.mp4" }
  
];

let currentIndex = 0;

function rotateText() {
  const rotatingTextContainer = document.getElementById('rotatingTextContainer');
  if (!rotatingTextContainer) return;

  let textToShow = '';

  if (currentIndex < staticTexts.length) {
    textToShow = staticTexts[currentIndex];
  } else {
    textToShow = getCurrentTime();
  }

  rotatingTextContainer.innerHTML = textToShow;

  currentIndex = (currentIndex + 1) % (staticTexts.length + 1);


  setTimeout(rotateText, 2000);
}
  
function getCurrentTime() {
    const currentTime = new Date();
    const h = currentTime.getHours();
    const m = currentTime.getMinutes();
    const s = currentTime.getSeconds();

    // Convert to 12-hour format
    const hour = (h % 12 === 0) ? 12 : h % 12;
    const diem = (h >= 12) ? "PM" : "AM";

    // Add leading zeros if needed
    const formattedHour = (hour < 10) ? "0" + hour : hour;
    const formattedMinute = (m < 10) ? "0" + m : m;
    const formattedSecond = (s < 10) ? "0" + s : s;

    return `${formattedHour}:${formattedMinute}:${formattedSecond} ${diem}`;
}


var i=0;
setInterval(function(){
var titles=[
"| --> Libalpm.Dev <--- |",
"Libalpm | Dev",
"Libalpm | Bored Linux Ethauist",
"Libalpm | Love from Dayton, OH."
]

if(i===titles.length) {
    i=0;
}
document.title = titles[i];
i++;
}, 2000);


function toggleMute() {

var video=document.getElementById("myVideo");

video.muted = !video.muted;

}

const emojis = ['😀','😃','😄','😁','😆','😅','😂','🤣','🥲','🥹','☺️','😊','😇','🙂','🙃','😉','😌','😍','🥰','😘','😗','😙','😚','😋','😛','😝','😜','🤪','🤨','🧐','🤓','😎','🥸','🤩','🥳','😏','😒','😞','😔','😟','😕','🙁','☹️','😣','😖','😫','😩','🥺','😢','😭','😮‍💨','😤','😠','😡','🤬','🤯','😳','🥵','🥶','😱','😨','😰','😥','😓','🫣','🤗','🫡','🤔','🫢','🤭','🤫','🤥','😶','😶‍🌫️','😐','😑','😬','🫨','🫠','🙄','😯','😦','😧','😮','😲','🥱','😴','🤤','😪','😵','😵‍💫','🫥','🤐','🥴','🤢','🤮','🤧','😷','🤒','🤕','🤑','🤠','😈','👿','👹','👺','🤡','💩','👻','💀','☠️','👽','👾','🤖','🎃','😺','😸','😹','😻','😼','😽','🙀','😿','😾','👋','🤚','🖐','✋','🖖','👌','🤌','🤏','✌️','🤞','🫰','🤟','🤘','🤙','🫵','🫱','🫲','🫸','🫷','🫳','🫴','👈','👉','👆','🖕','👇','☝️','👍','👎','✊','👊','🤛','🤜','👏','🫶','🙌','👐','🤲','🤝','🙏','✍️','💅','🤳','💪','🦾','🦵','🦿','🦶','👣','👂','🦻','👃','🫀','🫁','🧠','🦷','🦴','👀','👁','👅','👄','🫦','💋','🩸','👶','👧','🧒','👦','👩','🧑','👨','👩‍🦱','🧑‍🦱','👨‍🦱','👩‍🦰','🧑‍🦰','👨‍🦰','👱‍♀️','👱','👱‍♂️','👩‍🦳','🧑‍🦳','👨‍🦳','👩‍🦲','🧑‍🦲','👨‍🦲','🧔‍♀️','🧔','🧔‍♂️','👵','🧓','👴','👲','👳‍♀️','👳','👳‍♂️','🧕','👮‍♀️','👮','👮‍♂️','👷‍♀️','👷','👷‍♂️','💂‍♀️','💂','💂‍♂️','🕵️‍♀️','🕵️','🕵️‍♂️','👩‍⚕️','🧑‍⚕️','👨‍⚕️','👩‍🌾','🧑‍🌾','👨‍🌾','👩‍🍳','🧑‍🍳','👨‍🍳','👩‍🎓','🧑‍🎓','👨‍🎓','👩‍🎤','🧑‍🎤','👨‍🎤','👩‍🏫','🧑‍🏫','👨‍🏫','👩‍🏭','🧑‍🏭','👨‍🏭','👩‍💻','🧑‍💻','👨‍💻','👩‍💼','🧑‍💼','👨‍💼','👩‍🔧','🧑‍🔧','👨‍🔧','👩‍🔬','🧑‍🔬','👨‍🔬','👩‍🎨','🧑‍🎨','👨‍🎨','👩‍🚒','🧑‍🚒','👨‍🚒','👩‍✈️','🧑‍✈️','👨‍✈️','👩‍🚀','🧑‍🚀','👨‍🚀','👩‍⚖️','🧑‍⚖️','👨‍⚖️','👰‍♀️','👰','👰‍♂️','🤵‍♀️','🤵','🤵‍♂️','👸','🫅','🤴','🥷','🦸‍♀️','🦸','🦸‍♂️','🦹‍♀️','🦹','🦹‍♂️','🤶','🧑‍🎄','🎅','🧙‍♀️','🧙','🧙‍♂️','🧝‍♀️','🧝','🧝‍♂️','🧛‍♀️','🧛','🧛‍♂️','🧟‍♀️','🧟','🧟‍♂️','🧞‍♀️','🧞','🧞‍♂️','🧜‍♀️','🧜','🧜‍♂️','🧚‍♀️','🧚','🧚‍♂️','🧌','👼','🤰','🫄','🫃','🤱','👩‍🍼','🧑‍🍼','👨‍🍼','🙇‍♀️','🙇','🙇‍♂️','💁‍♀️','💁','💁‍♂️','🙅‍♀️','🙅','🙅‍♂️','🙆‍♀️','🙆','🙆‍♂️','🙋‍♀️','🙋','🙋‍♂️','🧏‍♀️','🧏','🧏‍♂️','🤦‍♀️','🤦','🤦‍♂️','🤷‍♀️','🤷','🤷‍♂️','🙎‍♀️','🙎','🙎‍♂️','🙍‍♀️','🙍','🙍‍♂️','💇‍♀️','💇','💇‍♂️','💆‍♀️','💆','💆‍♂️','🧖‍♀️','🧖','🧖‍♂️','💅','🤳','💃','🕺','👯‍♀️','👯','👯‍♂️','🕴','👩‍🦽','🧑‍🦽','👨‍🦽','👩‍🦼','🧑‍🦼','👨‍🦼','🚶‍♀️','🚶','🚶‍♂️','👩‍🦯','🧑‍🦯','👨‍🦯','🧎‍♀️','🧎','🧎‍♂️','🏃‍♀️','🏃','🏃‍♂️','🧍‍♀️','🧍','🧍‍♂️','👭','🧑‍🤝‍🧑','👬','👫','👩‍❤️‍👩','💑','👨‍❤️‍👨','👩‍❤️‍👨','👩‍❤️‍💋‍👩','💏','👨‍❤️‍💋‍👨','👩‍❤️‍💋‍👨','👪','👨‍👩‍👦','👨‍👩‍👧','👨‍👩‍👧‍👦','👨‍👩‍👦‍👦','👨‍👩‍👧‍👧','👨‍👨‍👦','👨‍👨‍👧','👨‍👨‍👧‍👦','👨‍👨‍👦‍👦','👨‍👨‍👧‍👧','👩‍👩‍👦','👩‍👩‍👧','👩‍👩‍👧‍👦','👩‍👩‍👦‍👦','👩‍👩‍👧‍👧','👨‍👦','👨‍👦‍👦','👨‍👧','👨‍👧‍👦','👨‍👧‍👧','👩‍👦','👩‍👦‍👦','👩‍👧','👩‍👧‍👦','👩‍👧‍👧','🗣','👤','👥','🫂','🌂','☂️','🧵','🪡','🪢','🪭','🧶','👓','🕶','🥽','🥼','🦺','👔','👕','👖','🧣','🧤','🧥','🧦','👗','👘','🥻','🩴','🩱','🩲','🩳','👙','👚','👛','👜','👝','🎒','👞','👟','🥾','🥿','👠','👡','🩰','👢','👑','👒','🎩','🎓','🧢','⛑','🪖','💄','💍','💼','👋🏻','🤚🏻','🖐🏻','✋🏻','🖖🏻','👌🏻','🤌🏻','🤏🏻','✌🏻','🤞🏻','🫰🏻','🤟🏻','🤘🏻','🤙🏻','🫵🏻','🫱🏻','🫲🏻','🫸🏻','🫷🏻','🫳🏻','🫴🏻','👈🏻','👉🏻','👆🏻','🖕🏻','👇🏻','☝🏻','👍🏻','👎🏻','✊🏻','👊🏻','🤛🏻','🤜🏻','👏🏻','🫶🏻','🙌🏻','👐🏻','🤲🏻','🙏🏻','✍🏻','💅🏻','🤳🏻','💪🏻','🦵🏻','🦶🏻','👂🏻','🦻🏻','👃🏻','👶🏻','👧🏻','🧒🏻','👦🏻','👩🏻','🧑🏻','👨🏻','👩🏻‍🦱','🧑🏻‍🦱','👨🏻‍🦱','👩🏻‍🦰','🧑🏻‍🦰','👨🏻‍🦰','👱🏻‍♀️','👱🏻','👱🏻‍♂️','👩🏻‍🦳','🧑🏻‍🦳','👨🏻‍🦳','👩🏻‍🦲','🧑🏻‍🦲','👨🏻‍🦲','🧔🏻‍♀️','🧔🏻','🧔🏻‍♂️','👵🏻','🧓🏻','👴🏻','👲🏻','👳🏻‍♀️','👳🏻','👳🏻‍♂️','🧕🏻','👮🏻‍♀️','👮🏻','👮🏻‍♂️','👷🏻‍♀️','👷🏻','👷🏻‍♂️','💂🏻‍♀️','💂🏻','💂🏻‍♂️','🕵🏻‍♀️','🕵🏻','🕵🏻‍♂️','👩🏻‍⚕️','🧑🏻‍⚕️','👨🏻‍⚕️','👩🏻‍🌾','🧑🏻‍🌾','👨🏻‍🌾','👩🏻‍🍳','🧑🏻‍🍳','👨🏻‍🍳','👩🏻‍🎓','🧑🏻‍🎓','👨🏻‍🎓','👩🏻‍🎤','🧑🏻‍🎤','👨🏻‍🎤','👩🏻‍🏫','🧑🏻‍🏫','👨🏻‍🏫','👩🏻‍🏭','🧑🏻‍🏭','👨🏻‍🏭','👩🏻‍💻','🧑🏻‍💻','👨🏻‍💻','👩🏻‍💼','🧑🏻‍💼','👨🏻‍💼','👩🏻‍🔧','🧑🏻‍🔧','👨🏻‍🔧','👩🏻‍🔬','🧑🏻‍🔬','👨🏻‍🔬','👩🏻‍🎨','🧑🏻‍🎨','👨🏻‍🎨','👩🏻‍🚒','🧑🏻‍🚒','👨🏻‍🚒','👩🏻‍✈️','🧑🏻‍✈️','👨🏻‍✈️','👩🏻‍🚀','🧑🏻‍🚀','👨🏻‍🚀','👩🏻‍⚖️','🧑🏻‍⚖️','👨🏻‍⚖️','👰🏻‍♀️','👰🏻','👰🏻‍♂️','🤵🏻‍♀️','🤵🏻','🤵🏻‍♂️','👸🏻','🫅🏻','🤴🏻','🥷🏻','🦸🏻‍♀️','🦸🏻','🦸🏻‍♂️','🦹🏻‍♀️','🦹🏻','🦹🏻‍♂️','🤶🏻','🧑🏻‍🎄','🎅🏻','🧙🏻‍♀️','🧙🏻','🧙🏻‍♂️','🧝🏻‍♀️','🧝🏻','🧝🏻‍♂️','🧛🏻‍♀️','🧛🏻','🧛🏻‍♂️','🧜🏻‍♀️','🧜🏻','🧜🏻‍♂️','🧚🏻‍♀️','🧚🏻','🧚🏻‍♂️','👼🏻','🤰🏻','🫄🏻','🫃🏻','🤱🏻','👩🏻‍🍼','🧑🏻‍🍼','👨🏻‍🍼','🙇🏻‍♀️','🙇🏻','🙇🏻‍♂️','💁🏻‍♀️','💁🏻','💁🏻‍♂️','🙅🏻‍♀️','🙅🏻','🙅🏻‍♂️','🙆🏻‍♀️','🙆🏻','🙆🏻‍♂️','🙋🏻‍♀️','🙋🏻','🙋🏻‍♂️','🧏🏻‍♀️','🧏🏻','🧏🏻‍♂️','🤦🏻‍♀️','🤦🏻','🤦🏻‍♂️','🤷🏻‍♀️','🤷🏻','🤷🏻‍♂️','🙎🏻‍♀️','🙎🏻','🙎🏻‍♂️','🙍🏻‍♀️','🙍🏻','🙍🏻‍♂️','💇🏻‍♀️','💇🏻','💇🏻‍♂️','💆🏻‍♀️','💆🏻','💆🏻‍♂️','🧖🏻‍♀️','🧖🏻','🧖🏻‍♂️','💃🏻','🕺🏻','🕴🏻','👩🏻‍🦽','🧑🏻‍🦽','👨🏻‍🦽','👩🏻‍🦼','🧑🏻‍🦼','👨🏻‍🦼','🚶🏻‍♀️','🚶🏻','🚶🏻‍♂️','👩🏻‍🦯','🧑🏻‍🦯','👨🏻‍🦯','🧎🏻‍♀️','🧎🏻','🧎🏻‍♂️','🏃🏻‍♀️','🏃🏻','🏃🏻‍♂️','🧍🏻‍♀️','🧍🏻','🧍🏻‍♂️','👭🏻','🧑🏻‍🤝‍🧑🏻','👬🏻','👫🏻','🧗🏻‍♀️','🧗🏻','🧗🏻‍♂️','🏇🏻','🏂🏻','🏌🏻‍♀️','🏌🏻','🏌🏻‍♂️','🏄🏻‍♀️','🏄🏻','🏄🏻‍♂️','🚣🏻‍♀️','🚣🏻','🚣🏻‍♂️','🏊🏻‍♀️','🏊🏻','🏊🏻‍♂️','⛹🏻‍♀️','⛹🏻','⛹🏻‍♂️','🏋🏻‍♀️','🏋🏻','🏋🏻‍♂️','🚴🏻‍♀️','🚴🏻','🚴🏻‍♂️','🚵🏻‍♀️','🚵🏻','🚵🏻‍♂️','🤸🏻‍♀️','🤸🏻','🤸🏻‍♂️','🤽🏻‍♀️','🤽🏻','🤽🏻‍♂️','🤾🏻‍♀️','🤾🏻','🤾🏻‍♂️','🤹🏻‍♀️','🤹🏻','🤹🏻‍♂️','🧘🏻‍♀️','🧘🏻','🧘🏻‍♂️','🛀🏻','🛌🏻','👋🏼','🤚🏼','🖐🏼','✋🏼','🖖🏼','👌🏼','🤌🏼','🤏🏼','✌🏼','🤞🏼','🫰🏼','🤟🏼','🤘🏼','🤙🏼','🫵🏼','🫱🏼','🫲🏼','🫸🏼','🫷🏼','🫳🏼','🫴🏼','👈🏼','👉🏼','👆🏼','🖕🏼','👇🏼','☝🏼','👍🏼','👎🏼','✊🏼','👊🏼','🤛🏼','🤜🏼','👏🏼','🫶🏼','🙌🏼','👐🏼','🤲🏼','🙏🏼','✍🏼','💅🏼','🤳🏼','💪🏼','🦵🏼','🦶🏼','👂🏼','🦻🏼','👃🏼','👶🏼','👧🏼','🧒🏼','👦🏼','👩🏼','🧑🏼','👨🏼','👩🏼‍🦱','🧑🏼‍🦱','👨🏼‍🦱','👩🏼‍🦰','🧑🏼‍🦰','👨🏼‍🦰','👱🏼‍♀️','👱🏼','👱🏼‍♂️','👩🏼‍🦳','🧑🏼‍🦳','👨🏼‍🦳','👩🏼‍🦲','🧑🏼‍🦲','👨🏼‍🦲','🧔🏼‍♀️','🧔🏼','🧔🏼‍♂️','👵🏼','🧓🏼','👴🏼','👲🏼','👳🏼‍♀️','👳🏼','👳🏼‍♂️','🧕🏼','👮🏼‍♀️','👮🏼','👮🏼‍♂️','👷🏼‍♀️','👷🏼','👷🏼‍♂️','💂🏼‍♀️','💂🏼','💂🏼‍♂️','🕵🏼‍♀️','🕵🏼','🕵🏼‍♂️','👩🏼‍⚕️','🧑🏼‍⚕️','👨🏼‍⚕️','👩🏼‍🌾','🧑🏼‍🌾','👨🏼‍🌾','👩🏼‍🍳','🧑🏼‍🍳','👨🏼‍🍳','👩🏼‍🎓','🧑🏼‍🎓','👨🏼‍🎓','👩🏼‍🎤','🧑🏼‍🎤','👨🏼‍🎤','👩🏼‍🏫','🧑🏼‍🏫','👨🏼‍🏫','👩🏼‍🏭','🧑🏼‍🏭','👨🏼‍🏭','👩🏼‍💻','🧑🏼‍💻','👨🏼‍💻','👩🏼‍💼','🧑🏼‍💼','👨🏼‍💼','👩🏼‍🔧','🧑🏼‍🔧','👨🏼‍🔧','👩🏼‍🔬','🧑🏼‍🔬','👨🏼‍🔬','👩🏼‍🎨','🧑🏼‍🎨','👨🏼‍🎨','👩🏼‍🚒','🧑🏼‍🚒','👨🏼‍🚒','👩🏼‍✈️','🧑🏼‍✈️','👨🏼‍✈️','👩🏼‍🚀','🧑🏼‍🚀','👨🏼‍🚀','👩🏼‍⚖️','🧑🏼‍⚖️','👨🏼‍⚖️','👰🏼‍♀️','👰🏼','👰🏼‍♂️','🤵🏼‍♀️','🤵🏼','🤵🏼‍♂️','👸🏼','🫅🏼','🤴🏼','🥷🏼','🦸🏼‍♀️','🦸🏼','🦸🏼‍♂️','🦹🏼‍♀️','🦹🏼','🦹🏼‍♂️','🤶🏼','🧑🏼‍🎄','🎅🏼','🧙🏼‍♀️','🧙🏼','🧙🏼‍♂️','🧝🏼‍♀️','🧝🏼','🧝🏼‍♂️','🧛🏼‍♀️','🧛🏼','🧛🏼‍♂️','🧜🏼‍♀️','🧜🏼','🧜🏼‍♂️','🧚🏼‍♀️','🧚🏼','🧚🏼‍♂️','👼🏼','🤰🏼','🫄🏼','🫃🏼','🤱🏼','👩🏼‍🍼','🧑🏼‍🍼','👨🏼‍🍼','🙇🏼‍♀️','🙇🏼','🙇🏼‍♂️','💁🏼‍♀️','💁🏼','💁🏼‍♂️','🙅🏼‍♀️','🙅🏼','🙅🏼‍♂️','🙆🏼‍♀️','🙆🏼','🙆🏼‍♂️','🙋🏼‍♀️','🙋🏼','🙋🏼‍♂️','🧏🏼‍♀️','🧏🏼','🧏🏼‍♂️','🤦🏼‍♀️','🤦🏼','🤦🏼‍♂️','🤷🏼‍♀️','🤷🏼','🤷🏼‍♂️','🙎🏼‍♀️','🙎🏼','🙎🏼‍♂️','🙍🏼‍♀️','🙍🏼','🙍🏼‍♂️','💇🏼‍♀️','💇🏼','💇🏼‍♂️','💆🏼‍♀️','💆🏼','💆🏼‍♂️','🧖🏼‍♀️','🧖🏼','🧖🏼‍♂️','💃🏼','🕺🏼','🕴🏼','👩🏼‍🦽','🧑🏼‍🦽','👨🏼‍🦽','👩🏼‍🦼','🧑🏼‍🦼','👨🏼‍🦼','🚶🏼‍♀️','🚶🏼','🚶🏼‍♂️','👩🏼‍🦯','🧑🏼‍🦯','👨🏼‍🦯','🧎🏼‍♀️','🧎🏼','🧎🏼‍♂️','🏃🏼‍♀️','🏃🏼','🏃🏼‍♂️','🧍🏼‍♀️','🧍🏼','🧍🏼‍♂️','👭🏼','🧑🏼‍🤝‍🧑🏼','👬🏼','👫🏼','🧗🏼‍♀️','🧗🏼','🧗🏼‍♂️','🏇🏼','🏂🏼','🏌🏼‍♀️','🏌🏼','🏌🏼‍♂️','🏄🏼‍♀️','🏄🏼','🏄🏼‍♂️','🚣🏼‍♀️','🚣🏼','🚣🏼‍♂️','🏊🏼‍♀️','🏊🏼','🏊🏼‍♂️','⛹🏼‍♀️','⛹🏼','⛹🏼‍♂️','🏋🏼‍♀️','🏋🏼','🏋🏼‍♂️','🚴🏼‍♀️','🚴🏼','🚴🏼‍♂️','🚵🏼‍♀️','🚵🏼','🚵🏼‍♂️','🤸🏼‍♀️','🤸🏼','🤸🏼‍♂️','🤽🏼‍♀️','🤽🏼','🤽🏼‍♂️','🤾🏼‍♀️','🤾🏼','🤾🏼‍♂️','🤹🏼‍♀️','🤹🏼','🤹🏼‍♂️','🧘🏼‍♀️','🧘🏼','🧘🏼‍♂️','🛀🏼','🛌🏼','👋🏽','🤚🏽','🖐🏽','✋🏽','🖖🏽','👌🏽','🤌🏽','🤏🏽','✌🏽','🤞🏽','🫰🏽','🤟🏽','🤘🏽','🤙🏽','🫵🏽','🫱🏽','🫲🏽','🫸🏽','🫷🏽','🫳🏽','🫴🏽','👈🏽','👉🏽','👆🏽','🖕🏽','👇🏽','☝🏽','👍🏽','👎🏽','✊🏽','👊🏽','🤛🏽','🤜🏽','👏🏽','🫶🏽','🙌🏽','👐🏽','🤲🏽','🙏🏽','✍🏽','💅🏽','🤳🏽','💪🏽','🦵🏽','🦶🏽','👂🏽','🦻🏽','👃🏽','👶🏽','👧🏽','🧒🏽','👦🏽','👩🏽','🧑🏽','👨🏽','👩🏽‍🦱','🧑🏽‍🦱','👨🏽‍🦱','👩🏽‍🦰','🧑🏽‍🦰','👨🏽‍🦰','👱🏽‍♀️','👱🏽','👱🏽‍♂️','👩🏽‍🦳','🧑🏽‍🦳','👨🏽‍🦳','👩🏽‍🦲','🧑🏽‍🦲','👨🏽‍🦲','🧔🏽‍♀️','🧔🏽','🧔🏽‍♂️','👵🏽','🧓🏽','👴🏽','👲🏽','👳🏽‍♀️','👳🏽','👳🏽‍♂️','🧕🏽','👮🏽‍♀️','👮🏽','👮🏽‍♂️','👷🏽‍♀️','👷🏽','👷🏽‍♂️','💂🏽‍♀️','💂🏽','💂🏽‍♂️','🕵🏽‍♀️','🕵🏽','🕵🏽‍♂️','👩🏽‍⚕️','🧑🏽‍⚕️','👨🏽‍⚕️','👩🏽‍🌾','🧑🏽‍🌾','👨🏽‍🌾','👩🏽‍🍳','🧑🏽‍🍳','👨🏽‍🍳','👩🏽‍🎓','🧑🏽‍🎓','👨🏽‍🎓','👩🏽‍🎤','🧑🏽‍🎤','👨🏽‍🎤','👩🏽‍🏫','🧑🏽‍🏫','👨🏽‍🏫','👩🏽‍🏭','🧑🏽‍🏭','👨🏽‍🏭','👩🏽‍💻','🧑🏽‍💻','👨🏽‍💻','👩🏽‍💼','🧑🏽‍💼','👨🏽‍💼','👩🏽‍🔧','🧑🏽‍🔧','👨🏽‍🔧','👩🏽‍🔬','🧑🏽‍🔬','👨🏽‍🔬','👩🏽‍🎨','🧑🏽‍🎨','👨🏽‍🎨','👩🏽‍🚒','🧑🏽‍🚒','👨🏽‍🚒','👩🏽‍✈️','🧑🏽‍✈️','👨🏽‍✈️','👩🏽‍🚀','🧑🏽‍🚀','👨🏽‍🚀','👩🏽‍⚖️','🧑🏽‍⚖️','👨🏽‍⚖️','👰🏽‍♀️','👰🏽','👰🏽‍♂️','🤵🏽‍♀️','🤵🏽','🤵🏽‍♂️','👸🏽','🫅🏽','🤴🏽','🥷🏽','🦸🏽‍♀️','🦸🏽','🦸🏽‍♂️','🦹🏽‍♀️','🦹🏽','🦹🏽‍♂️','🤶🏽','🧑🏽‍🎄','🎅🏽','🧙🏽‍♀️','🧙🏽','🧙🏽‍♂️','🧝🏽‍♀️','🧝🏽','🧝🏽‍♂️','🧛🏽‍♀️','🧛🏽','🧛🏽‍♂️','🧜🏽‍♀️','🧜🏽','🧜🏽‍♂️','🧚🏽‍♀️','🧚🏽','🧚🏽‍♂️','👼🏽','🤰🏽','🫄🏽','🫃🏽','🤱🏽','👩🏽‍🍼','🧑🏽‍🍼','👨🏽‍🍼','🙇🏽‍♀️','🙇🏽','🙇🏽‍♂️','💁🏽‍♀️','💁🏽','💁🏽‍♂️','🙅🏽‍♀️','🙅🏽','🙅🏽‍♂️','🙆🏽‍♀️','🙆🏽','🙆🏽‍♂️','🙋🏽‍♀️','🙋🏽','🙋🏽‍♂️','🧏🏽‍♀️','🧏🏽','🧏🏽‍♂️','🤦🏽‍♀️','🤦🏽','🤦🏽‍♂️','🤷🏽‍♀️','🤷🏽','🤷🏽‍♂️','🙎🏽‍♀️','🙎🏽','🙎🏽‍♂️','🙍🏽‍♀️','🙍🏽','🙍🏽‍♂️','💇🏽‍♀️','💇🏽','💇🏽‍♂️','💆🏽‍♀️','💆🏽','💆🏽‍♂️','🧖🏽‍♀️','🧖🏽','🧖🏽‍♂️','💃🏽','🕺🏽','🕴🏽','👩🏽‍🦽','🧑🏽‍🦽','👨🏽‍🦽','👩🏽‍🦼','🧑🏽‍🦼','👨🏽‍🦼','🚶🏽‍♀️','🚶🏽','🚶🏽‍♂️','👩🏽‍🦯','🧑🏽‍🦯','👨🏽‍🦯','🧎🏽‍♀️','🧎🏽','🧎🏽‍♂️','🏃🏽‍♀️','🏃🏽','🏃🏽‍♂️','🧍🏽‍♀️','🧍🏽','🧍🏽‍♂️','👭🏽','🧑🏽‍🤝‍🧑🏽','👬🏽','👫🏽','🧗🏽‍♀️','🧗🏽','🧗🏽‍♂️','🏇🏽','🏂🏽','🏌🏽‍♀️','🏌🏽','🏌🏽‍♂️','🏄🏽‍♀️','🏄🏽','🏄🏽‍♂️','🚣🏽‍♀️','🚣🏽','🚣🏽‍♂️','🏊🏽‍♀️','🏊🏽','🏊🏽‍♂️','⛹🏽‍♀️','⛹🏽','⛹🏽‍♂️','🏋🏽‍♀️','🏋🏽','🏋🏽‍♂️','🚴🏽‍♀️','🚴🏽','🚴🏽‍♂️','🚵🏽‍♀️','🚵🏽','🚵🏽‍♂️','🤸🏽‍♀️','🤸🏽','🤸🏽‍♂️','🤽🏽‍♀️','🤽🏽','🤽🏽‍♂️','🤾🏽‍♀️','🤾🏽','🤾🏽‍♂️','🤹🏽‍♀️','🤹🏽','🤹🏽‍♂️','🧘🏽‍♀️','🧘🏽','🧘🏽‍♂️','🛀🏽','🛌🏽','👋🏾','🤚🏾','🖐🏾','✋🏾','🖖🏾','👌🏾','🤌🏾','🤏🏾','✌🏾','🤞🏾','🫰🏾','🤟🏾','🤘🏾','🤙🏾','🫵🏾','🫱🏾','🫲🏾','🫸🏾','🫷🏾','🫳🏾','🫴🏾','👈🏾','👉🏾','👆🏾','🖕🏾','👇🏾','☝🏾','👍🏾','👎🏾','✊🏾','👊🏾','🤛🏾','🤜🏾','👏🏾','🫶🏾','🙌🏾','👐🏾','🤲🏾','🙏🏾','✍🏾','💅🏾','🤳🏾','💪🏾','🦵🏾','🦶🏾','👂🏾','🦻🏾','👃🏾','👶🏾','👧🏾','🧒🏾','👦🏾','👩🏾','🧑🏾','👨🏾','👩🏾‍🦱','🧑🏾‍🦱','👨🏾‍🦱','👩🏾‍🦰','🧑🏾‍🦰','👨🏾‍🦰','👱🏾‍♀️','👱🏾','👱🏾‍♂️','👩🏾‍🦳','🧑🏾‍🦳','👨🏾‍🦳','👩🏾‍🦲','🧑🏾‍🦲','👨🏾‍🦲','🧔🏾‍♀️','🧔🏾','🧔🏾‍♂️','👵🏾','🧓🏾','👴🏾','👲🏾','👳🏾‍♀️','👳🏾','👳🏾‍♂️','🧕🏾','👮🏾‍♀️','👮🏾','👮🏾‍♂️','👷🏾‍♀️','👷🏾','👷🏾‍♂️','💂🏾‍♀️','💂🏾','💂🏾‍♂️','🕵🏾‍♀️','🕵🏾','🕵🏾‍♂️','👩🏾‍⚕️','🧑🏾‍⚕️','👨🏾‍⚕️','👩🏾‍🌾','🧑🏾‍🌾','👨🏾‍🌾','👩🏾‍🍳','🧑🏾‍🍳','👨🏾‍🍳','👩🏾‍🎓','🧑🏾‍🎓','👨🏾‍🎓','👩🏾‍🎤','🧑🏾‍🎤','👨🏾‍🎤','👩🏾‍🏫','🧑🏾‍🏫','👨🏾‍🏫','👩🏾‍🏭','🧑🏾‍🏭','👨🏾‍🏭','👩🏾‍💻','🧑🏾‍💻','👨🏾‍💻','👩🏾‍💼','🧑🏾‍💼','👨🏾‍💼','👩🏾‍🔧','🧑🏾‍🔧','👨🏾‍🔧','👩🏾‍🔬','🧑🏾‍🔬','👨🏾‍🔬','👩🏾‍🎨','🧑🏾‍🎨','👨🏾‍🎨','👩🏾‍🚒','🧑🏾‍🚒','👨🏾‍🚒','👩🏾‍✈️','🧑🏾‍✈️','👨🏾‍✈️','👩🏾‍🚀','🧑🏾‍🚀','👨🏾‍🚀','👩🏾‍⚖️','🧑🏾‍⚖️','👨🏾‍⚖️','👰🏾‍♀️','👰🏾','👰🏾‍♂️','🤵🏾‍♀️','🤵🏾','🤵🏾‍♂️','👸🏾','🫅🏾','🤴🏾','🥷🏾','🦸🏾‍♀️','🦸🏾','🦸🏾‍♂️','🦹🏾‍♀️','🦹🏾','🦹🏾‍♂️','🤶🏾','🧑🏾‍🎄','🎅🏾','🧙🏾‍♀️','🧙🏾','🧙🏾‍♂️','🧝🏾‍♀️','🧝🏾','🧝🏾‍♂️','🧛🏾‍♀️','🧛🏾','🧛🏾‍♂️','🧜🏾‍♀️','🧜🏾','🧜🏾‍♂️','🧚🏾‍♀️','🧚🏾','🧚🏾‍♂️','👼🏾','🤰🏾','🫄🏾','🫃🏾','🤱🏾','👩🏾‍🍼','🧑🏾‍🍼','👨🏾‍🍼','🙇🏾‍♀️','🙇🏾','🙇🏾‍♂️','💁🏾‍♀️','💁🏾','💁🏾‍♂️','🙅🏾‍♀️','🙅🏾','🙅🏾‍♂️','🙆🏾‍♀️','🙆🏾','🙆🏾‍♂️','🙋🏾‍♀️','🙋🏾','🙋🏾‍♂️','🧏🏾‍♀️','🧏🏾','🧏🏾‍♂️','🤦🏾‍♀️','🤦🏾','🤦🏾‍♂️','🤷🏾‍♀️','🤷🏾','🤷🏾‍♂️','🙎🏾‍♀️','🙎🏾','🙎🏾‍♂️','🙍🏾‍♀️','🙍🏾','🙍🏾‍♂️','💇🏾‍♀️','💇🏾','💇🏾‍♂️','💆🏾‍♀️','💆🏾','💆🏾‍♂️','🧖🏾‍♀️','🧖🏾','🧖🏾‍♂️','💃🏾','🕺🏾','🕴🏿','👩🏾‍🦽','🧑🏾‍🦽','👨🏾‍🦽','👩🏾‍🦼','🧑🏾‍🦼','👨🏾‍🦼','🚶🏾‍♀️','🚶🏾','🚶🏾‍♂️','👩🏾‍🦯','🧑🏾‍🦯','👨🏾‍🦯','🧎🏾‍♀️','🧎🏾','🧎🏾‍♂️','🏃🏾‍♀️','🏃🏾','🏃🏾‍♂️','🧍🏾‍♀️','🧍🏾','🧍🏾‍♂️','👭🏾','🧑🏾‍🤝‍🧑🏾','👬🏾','👫🏾','🧗🏾‍♀️','🧗🏾','🧗🏾‍♂️','🏇🏾','🏂🏾','🏌🏾‍♀️','🏌🏾','🏌🏾‍♂️','🏄🏾‍♀️','🏄🏾','🏄🏾‍♂️','🚣🏾‍♀️','🚣🏾','🚣🏾‍♂️','🏊🏾‍♀️','🏊🏾','🏊🏾‍♂️','⛹🏾‍♀️','⛹🏾','⛹🏾‍♂️','🏋🏾‍♀️','🏋🏾','🏋🏾‍♂️','🚴🏾‍♀️','🚴🏾','🚴🏾‍♂️','🚵🏾‍♀️','🚵🏾','🚵🏾‍♂️','🤸🏾‍♀️','🤸🏾','🤸🏾‍♂️','🤽🏾‍♀️','🤽🏾','🤽🏾‍♂️','🤾🏾‍♀️','🤾🏾','🤾🏾‍♂️','🤹🏾‍♀️','🤹🏾','🤹🏾‍♂️','🧘🏾‍♀️','🧘🏾','🧘🏾‍♂️','🛀🏾','🛌🏾','👋🏿','🤚🏿','🖐🏿','✋🏿','🖖🏿','👌🏿','🤌🏿','🤏🏿','✌🏿','🤞🏿','🫰🏿','🤟🏿','🤘🏿','🤙🏿','🫵🏿','🫱🏿','🫲🏿','🫸🏿','🫷🏿','🫳🏿','🫴🏿','👈🏿','👉🏿','👆🏿','🖕🏿','👇🏿','☝🏿','👍🏿','👎🏿','✊🏿','👊🏿','🤛🏿','🤜🏿','👏🏿','🫶🏿','🙌🏿','👐🏿','🤲🏿','🙏🏿','✍🏿','💅🏿','🤳🏿','💪🏿','🦵🏿','🦶🏿','👂🏿','🦻🏿','👃🏿','👶🏿','👧🏿','🧒🏿','👦🏿','👩🏿','🧑🏿','👨🏿','👩🏿‍🦱','🧑🏿‍🦱','👨🏿‍🦱','👩🏿‍🦰','🧑🏿‍🦰','👨🏿‍🦰','👱🏿‍♀️','👱🏿','👱🏿‍♂️','👩🏿‍🦳','🧑🏿‍🦳','👨🏿‍🦳','👩🏿‍🦲','🧑🏿‍🦲','👨🏿‍🦲','🧔🏿‍♀️','🧔🏿','🧔🏿‍♂️','👵🏿','🧓🏿','👴🏿','👲🏿','👳🏿‍♀️','👳🏿','👳🏿‍♂️','🧕🏿','👮🏿‍♀️','👮🏿','👮🏿‍♂️','👷🏿‍♀️','👷🏿','👷🏿‍♂️','💂🏿‍♀️','💂🏿','💂🏿‍♂️','🕵🏿‍♀️','🕵🏿','🕵🏿‍♂️','👩🏿‍⚕️','🧑🏿‍⚕️','👨🏿‍⚕️','👩🏿‍🌾','🧑🏿‍🌾','👨🏿‍🌾','👩🏿‍🍳','🧑🏿‍🍳','👨🏿‍🍳','👩🏿‍🎓','🧑🏿‍🎓','👨🏿‍🎓','👩🏿‍🎤','🧑🏿‍🎤','👨🏿‍🎤','👩🏿‍🏫','🧑🏿‍🏫','👨🏿‍🏫','👩🏿‍🏭','🧑🏿‍🏭','👨🏿‍🏭','👩🏿‍💻','🧑🏿‍💻','👨🏿‍💻','👩🏿‍💼','🧑🏿‍💼','👨🏿‍💼','👩🏿‍🔧','🧑🏿‍🔧','👨🏿‍🔧','👩🏿‍🔬','🧑🏿‍🔬','👨🏿‍🔬','👩🏿‍🎨','🧑🏿‍🎨','👨🏿‍🎨','👩🏿‍🚒','🧑🏿‍🚒','👨🏿‍🚒','👩🏿‍✈️','🧑🏿‍✈️','👨🏿‍✈️','👩🏿‍🚀','🧑🏿‍🚀','👨🏿‍🚀','👩🏿‍⚖️','🧑🏿‍⚖️','👨🏿‍⚖️','👰🏿‍♀️','👰🏿','👰🏿‍♂️','🤵🏿‍♀️','🤵🏿','🤵🏿‍♂️','👸🏿','🫅🏿','🤴🏿','🥷🏿','🦸🏿‍♀️','🦸🏿','🦸🏿‍♂️','🦹🏿‍♀️','🦹🏿','🦹🏿‍♂️','🤶🏿','🧑🏿‍🎄','🎅🏿','🧙🏿‍♀️','🧙🏿','🧙🏿‍♂️','🧝🏿‍♀️','🧝🏿','🧝🏿‍♂️','🧛🏿‍♀️','🧛🏿','🧛🏿‍♂️','🧜🏿‍♀️','🧜🏿','🧜🏿‍♂️','🧚🏿‍♀️','🧚🏿','🧚🏿‍♂️','👼🏿','🤰🏿','🫄🏿','🫃🏿','🤱🏿','👩🏿‍🍼','🧑🏿‍🍼','👨🏿‍🍼','🙇🏿‍♀️','🙇🏿','🙇🏿‍♂️','💁🏿‍♀️','💁🏿','💁🏿‍♂️','🙅🏿‍♀️','🙅🏿','🙅🏿‍♂️','🙆🏿‍♀️','🙆🏿','🙆🏿‍♂️','🙋🏿‍♀️','🙋🏿','🙋🏿‍♂️','🧏🏿‍♀️','🧏🏿','🧏🏿‍♂️','🤦🏿‍♀️','🤦🏿','🤦🏿‍♂️','🤷🏿‍♀️','🤷🏿','🤷🏿‍♂️','🙎🏿‍♀️','🙎🏿','🙎🏿‍♂️','🙍🏿‍♀️','🙍🏿','🙍🏿‍♂️','💇🏿‍♀️','💇🏿','💇🏿‍♂️','💆🏿‍♀️','💆🏿','💆🏿‍♂️','🧖🏿‍♀️','🧖🏿','🧖🏿‍♂️','💃🏿','🕺🏿','🕴🏿','👩🏿‍🦽','🧑🏿‍🦽','👨🏿‍🦽','👩🏿‍🦼','🧑🏿‍🦼','👨🏿‍🦼','🚶🏿‍♀️','🚶🏿','🚶🏿‍♂️','👩🏿‍🦯','🧑🏿‍🦯','👨🏿‍🦯','🧎🏿‍♀️','🧎🏿','🧎🏿‍♂️','🏃🏿‍♀️','🏃🏿','🏃🏿‍♂️','🧍🏿‍♀️','🧍🏿','🧍🏿‍♂️','👭🏿','🧑🏿‍🤝‍🧑🏿','👬🏿','👫🏿','🧗🏿‍♀️','🧗🏿','🧗🏿‍♂️','🏇🏿','🏂🏿','🏌🏿‍♀️','🏌🏿','🏌🏿‍♂️','🏄🏿‍♀️','🏄🏿','🏄🏿‍♂️','🚣🏿‍♀️','🚣🏿','🚣🏿‍♂️','🏊🏿‍♀️','🏊🏿','🏊🏿‍♂️','⛹🏿‍♀️','⛹🏿','⛹🏿‍♂️','🏋🏿‍♀️','🏋🏿','🏋🏿‍♂️','🚴🏿‍♀️','🚴🏿','🚴🏿‍♂️','🚵🏿‍♀️','🚵🏿','🚵🏿‍♂️','🤸🏿‍♀️','🤸🏿','🤸🏿‍♂️','🤽🏿‍♀️','🤽🏿','🤽🏿‍♂️','🤾🏿‍♀️','🤾🏿','🤾🏿‍♂️','🤹🏿‍♀️','🤹🏿','🤹🏿‍♂️','🧘🏿‍♀️','🧘🏿','🧘🏿‍♂️','🛀🏿','🛌🏿','🐶','🐱','🐭','🐹','🐰','🦊','🐻','🐼','🐻‍❄️','🐨','🐯','🦁','🐮','🐷','🐽','🐸','🐵','🙈','🙉','🙊','🐒','🐔','🐧','🐦','🐦‍⬛','🐤','🐣','🐥','🦆','🦅','🦉','🦇','🐺','🐗','🐴','🦄','🐝','🪱','🐛','🦋','🐌','🐞','🐜','🪰','🪲','🪳','🦟','🦗','🕷','🕸','🦂','🐢','🐍','🦎','🦖','🦕','🐙','🦑','🦐','🦞','🦀','🪼','🪸','🐡','🐠','🐟','🐬','🐳','🐋','🦈','🐊','🐅','🐆','🦓','🫏','🦍','🦧','🦣','🐘','🦛','🦏','🐪','🐫','🦒','🦘','🦬','🐃','🐂','🐄','🐎','🐖','🐏','🐑','🦙','🐐','🦌','🫎','🐕','🐩','🦮','🐕‍🦺','🐈','🐈‍⬛','🪽','🪶','🐓','🦃','🦤','🦚','🦜','🦢','🪿','🦩','🕊','🐇','🦝','🦨','🦡','🦫','🦦','🦥','🐁','🐀','🐿','🦔','🐾','🐉','🐲','🌵','🎄','🌲','🌳','🌴','🪹','🪺','🪵','🌱','🌿','☘️','🍀','🎍','🪴','🎋','🍃','🍂','🍁','🍄','🐚','🪨','🌾','💐','🌷','🪷','🌹','🥀','🌺','🌸','🪻','🌼','🌻','🌞','🌝','🌛','🌜','🌚','🌕','🌖','🌗','🌘','🌑','🌒','🌓','🌔','🌙','🌎','🌍','🌏','🪐','💫','⭐️','🌟','✨','⚡️','☄️','💥','🔥','🌪','🌈','☀️','🌤','⛅️','🌥','☁️','🌦','🌧','⛈','🌩','🌨','❄️','☃️','⛄️','🌬','💨','💧','💦','🫧','☔️','☂️','🌊','🍏','🍎','🍐','🍊','🍋','🍌','🍉','🍇','🍓','🫐','🍈','🍒','🍑','🥭','🍍','🥥','🥝','🍅','🍆','🥑','🥦','🫛','🥬','🥒','🌶','🫑','🌽','🥕','🫒','🧄','🧅','🫚','🥔','🍠','🫘','🥐','🥯','🍞','🥖','🥨','🧀','🥚','🍳','🧈','🥞','🧇','🥓','🥩','🍗','🍖','🦴','🌭','🍔','🍟','🍕','🫓','🥪','🥙','🧆','🌮','🌯','🫔','🥗','🥘','🫕','🥫','🍝','🍜','🍲','🍛','🍣','🍱','🥟','🦪','🍤','🍙','🍚','🍘','🍥','🥠','🥮','🍢','🍡','🍧','🍨','🍦','🥧','🧁','🍰','🎂','🍮','🍭','🍬','🍫','🍿','🍩','🍪','🌰','🥜','🍯','🥛','🍼','🫖','☕️','🍵','🧃','🥤','🧋','🫙','🍶','🍺','🍻','🥂','🍷','🫗','🥃','🍸','🍹','🧉','🍾','🧊','🥄','🍴','🍽','🥣','🥡','🥢','🧂','⚽️','🏀','🏈','⚾️','🥎','🎾','🏐','🏉','🥏','🎱','🪀','🏓','🏸','🏒','🏑','🥍','🏏','🪃','🥅','⛳️','🪁','🏹','🎣','🤿','🥊','🥋','🎽','🛹','🛼','🛷','⛸','🥌','🎿','⛷','🏂','🪂','🏋️‍♀️','🏋️','🏋️‍♂️','🤼‍♀️','🤼','🤼‍♂️','🤸‍♀️','🤸','🤸‍♂️','⛹️‍♀️','⛹️','⛹️‍♂️','🤺','🤾‍♀️','🤾','🤾‍♂️','🏌️‍♀️','🏌️','🏌️‍♂️','🏇','🧘‍♀️','🧘','🧘‍♂️','🏄‍♀️','🏄','🏄‍♂️','🏊‍♀️','🏊','🏊‍♂️','🤽‍♀️','🤽','🤽‍♂️','🚣‍♀️','🚣','🚣‍♂️','🧗‍♀️','🧗','🧗‍♂️','🚵‍♀️','🚵','🚵‍♂️','🚴‍♀️','🚴','🚴‍♂️','🏆','🥇','🥈','🥉','🏅','🎖','🏵','🎗','🎫','🎟','🎪','🤹','🤹‍♂️','🤹‍♀️','🎭','🩰','🎨','🎬','🎤','🎧','🎼','🎹','🥁','🪘','🪇','🎷','🎺','🪗','🎸','🪕','🎻','🪈','🎲','♟','🎯','🎳','🎮','🎰','🧩','🚗','🚕','🚙','🚌','🚎','🏎','🚓','🚑','🚒','🚐','🛻','🚚','🚛','🚜','🦯','🦽','🦼','🛴','🚲','🛵','🏍','🛺','🚨','🚔','🚍','🚘','🚖','🛞','🚡','🚠','🚟','🚃','🚋','🚞','🚝','🚄','🚅','🚈','🚂','🚆','🚇','🚊','🚉','✈️','🛫','🛬','🛩','💺','🛰','🚀','🛸','🚁','🛶','⛵️','🚤','🛥','🛳','⛴','🚢','⚓️','🛟','🪝','⛽️','🚧','🚦','🚥','🚏','🗺','🗿','🗽','🗼','🏰','🏯','🏟','🎡','🎢','🛝','🎠','⛲️','⛱','🏖','🏝','🏜','🌋','⛰','🏔','🗻','🏕','⛺️','🛖','🏠','🏡','🏘','🏚','🏗','🏭','🏢','🏬','🏣','🏤','🏥','🏦','🏨','🏪','🏫','🏩','💒','🏛','⛪️','🕌','🕍','🛕','🕋','⛩','🛤','🛣','🗾','🎑','🏞','🌅','🌄','🌠','🎇','🎆','🌇','🌆','🏙','🌃','🌌','🌉','🌁','⌚️','📱','📲','💻','⌨️','🖥','🖨','🖱','🖲','🕹','🗜','💽','💾','💿','📀','📼','📷','📸','📹','🎥','📽','🎞','📞','☎️','📟','📠','📺','📻','🎙','🎚','🎛','🧭','⏱','⏲','⏰','🕰','⌛️','⏳','📡','🔋','🪫','🔌','💡','🔦','🕯','🪔','🧯','🛢','🛍️','💸','💵','💴','💶','💷','🪙','💰','💳','💎','⚖️','🪮','🪜','🧰','🪛','🔧','🔨','⚒','🛠','⛏','🪚','🔩','⚙️','🪤','🧱','⛓','🧲','🔫','💣','🧨','🪓','🔪','🗡','⚔️','🛡','🚬','⚰️','🪦','⚱️','🏺','🔮','📿','🧿','🪬','💈','⚗️','🔭','🔬','🕳','🩹','🩺','🩻','🩼','💊','💉','🩸','🧬','🦠','🧫','🧪','🌡','🧹','🪠','🧺','🧻','🚽','🚰','🚿','🛁','🛀','🧼','🪥','🪒','🧽','🪣','🧴','🛎','🔑','🗝','🚪','🪑','🛋','🛏','🛌','🧸','🪆','🖼','🪞','🪟','🛍','🛒','🎁','🎈','🎏','🎀','🪄','🪅','🎊','🎉','🪩','🎎','🏮','🎐','🧧','✉️','📩','📨','📧','💌','📥','📤','📦','🏷','🪧','📪','📫','📬','📭','📮','📯','📜','📃','📄','📑','🧾','📊','📈','📉','🗒','🗓','📆','📅','🗑','🪪','📇','🗃','🗳','🗄','📋','📁','📂','🗂','🗞','📰','📓','📔','📒','📕','📗','📘','📙','📚','📖','🔖','🧷','🔗','📎','🖇','📐','📏','🧮','📌','📍','✂️','🖊','🖋','✒️','🖌','🖍','📝','✏️','🔍','🔎','🔏','🔐','🔒','🔓','❤️','🩷','🧡','💛','💚','💙','🩵','💜','🖤','🩶','🤍','🤎','❤️‍🔥','❤️‍🩹','💔','❣️','💕','💞','💓','💗','💖','💘','💝','💟','☮️','✝️','☪️','🪯','🕉','☸️','✡️','🔯','🕎','☯️','☦️','🛐','⛎','♈️','♉️','♊️','♋️','♌️','♍️','♎️','♏️','♐️','♑️','♒️','♓️','🆔','⚛️','🉑','☢️','☣️','📴','📳','🈶','🈚️','🈸','🈺','🈷️','✴️','🆚','💮','🉐','㊙️','㊗️','🈴','🈵','🈹','🈲','🅰️','🅱️','🆎','🆑','🅾️','🆘','❌','⭕️','🛑','⛔️','📛','🚫','💯','💢','♨️','🚷','🚯','🚳','🚱','🔞','📵','🚭','❗️','❕','❓','❔','‼️','⁉️','🔅','🔆','〽️','⚠️','🚸','🔱','⚜️','🔰','♻️','✅','🈯️','💹','❇️','✳️','❎','🌐','💠','Ⓜ️','🌀','💤','🏧','🚾','♿️','🅿️','🛗','🈳','🈂️','🛂','🛃','🛄','🛅','🚹','🚺','🚼','⚧','🚻','🚮','🎦','🛜','📶','🈁','🔣','ℹ️','🔤','🔡','🔠','🆖','🆗','🆙','🆒','🆕','🆓','0️⃣','1️⃣','2️⃣','3️⃣','4️⃣','5️⃣','6️⃣','7️⃣','8️⃣','9️⃣','🔟','🔢','#️⃣','*️⃣','⏏️','▶️','⏸','⏯','⏹','⏺','⏭','⏮','⏩','⏪','⏫','⏬','◀️','🔼','🔽','➡️','⬅️','⬆️','⬇️','↗️','↘️','↙️','↖️','↕️','↔️','↪️','↩️','⤴️','⤵️','🔀','🔁','🔂','🔄','🔃','🎵','🎶','➕','➖','➗','✖️','🟰','♾','💲','💱','™️','©️','®️','〰️','➰','➿','🔚','🔙','🔛','🔝','🔜','✔️','☑️','🔘','🔴','🟠','🟡','🟢','🔵','🟣','⚫️','⚪️','🟤','🔺','🔻','🔸','🔹','🔶','🔷','🔳','🔲','▪️','▫️','◾️','◽️','◼️','◻️','🟥','🟧','🟨','🟩','🟦','🟪','⬛️','⬜️','🟫','🔈','🔇','🔉','🔊','🔔','🔕','📣','📢','👁‍🗨','💬','💭','🗯','♠️','♣️','♥️','♦️','🃏','🎴','🀄️','🕐','🕑','🕒','🕓','🕔','🕕','🕖','🕗','🕘','🕙','🕚','🕛','🕜','🕝','🕞','🕟','🕠','🕡','🕢','🕣','🕤','🕥','🕦','🕧','🏳️','🏴','🏁','🚩','🏳️‍🌈','🏳️‍⚧️','🏴‍☠️','🇦🇫','🇦🇽','🇦🇱','🇩🇿','🇦🇸','🇦🇩','🇦🇴','🇦🇮','🇦🇶','🇦🇬','🇦🇷','🇦🇲','🇦🇼','🇦🇺','🇦🇹','🇦🇿','🇧🇸','🇧🇭','🇧🇩','🇧🇧','🇧🇾','🇧🇪','🇧🇿','🇧🇯','🇧🇲','🇧🇹','🇧🇴','🇧🇦','🇧🇼','🇧🇷','🇮🇴','🇻🇬','🇧🇳','🇧🇬','🇧🇫','🇧🇮','🇰🇭','🇨🇲','🇨🇦','🇮🇨','🇨🇻','🇧🇶','🇰🇾','🇨🇫','🇹🇩','🇨🇱','🇨🇳','🇨🇽','🇨🇨','🇨🇴','🇰🇲','🇨🇬','🇨🇩','🇨🇰','🇨🇷','🇨🇮','🇭🇷','🇨🇺','🇨🇼','🇨🇾','🇨🇿','🇩🇰','🇩🇯','🇩🇲','🇩🇴','🇪🇨','🇪🇬','🇸🇻','🇬🇶','🇪🇷','🇪🇪','🇪🇹','🇪🇺','🇫🇰','🇫🇴','🇫🇯','🇫🇮','🇫🇷','🇬🇫','🇵🇫','🇹🇫','🇬🇦','🇬🇲','🇬🇪','🇩🇪','🇬🇭','🇬🇮','🇬🇷','🇬🇱','🇬🇩','🇬🇵','🇬🇺','🇬🇹','🇬🇬','🇬🇳','🇬🇼','🇬🇾','🇭🇹','🇭🇳','🇭🇰','🇭🇺','🇮🇸','🇮🇳','🇮🇩','🇮🇷','🇮🇶','🇮🇪','🇮🇲','🇮🇱','🇮🇹','🇯🇲','🇯🇵','🎌','🇯🇪','🇯🇴','🇰🇿','🇰🇪','🇰🇮','🇽🇰','🇰🇼','🇰🇬','🇱🇦','🇱🇻','🇱🇧','🇱🇸','🇱🇷','🇱🇾','🇱🇮','🇱🇹','🇱🇺','🇲🇴','🇲🇰','🇲🇬','🇲🇼','🇲🇾','🇲🇻','🇲🇱','🇲🇹','🇲🇭','🇲🇶','🇲🇷','🇲🇺','🇾🇹','🇲🇽','🇫🇲','🇲🇩','🇲🇨','🇲🇳','🇲🇪','🇲🇸','🇲🇦','🇲🇿','🇲🇲','🇳🇦','🇳🇷','🇳🇵','🇳🇱','🇳🇨','🇳🇿','🇳🇮','🇳🇪','🇳🇬','🇳🇺','🇳🇫','🇰🇵','🇲🇵','🇳🇴','🇴🇲','🇵🇰','🇵🇼','🇵🇸','🇵🇦','🇵🇬','🇵🇾','🇵🇪','🇵🇭','🇵🇳','🇵🇱','🇵🇹','🇵🇷','🇶🇦','🇷🇪','🇷🇴','🇷🇺','🇷🇼','🇼🇸','🇸🇲','🇸🇦','🇸🇳','🇷🇸','🇸🇨','🇸🇱','🇸🇬','🇸🇽','🇸🇰','🇸🇮','🇬🇸','🇸🇧','🇸🇴','🇿🇦','🇰🇷','🇸🇸','🇪🇸','🇱🇰','🇧🇱','🇸🇭','🇰🇳','🇱🇨','🇵🇲','🇻🇨','🇸🇩','🇸🇷','🇸🇿','🇸🇪','🇨🇭','🇸🇾','🇹🇼','🇹🇯','🇹🇿','🇹🇭','🇹🇱','🇹🇬','🇹🇰','🇹🇴','🇹🇹','🇹🇳','🇹🇷','🇹🇲','🇹🇨','🇹🇻','🇻🇮','🇺🇬','🇺🇦','🇦🇪','🇬🇧','🏴󠁧󠁢󠁥󠁮󠁧󠁿','🏴󠁧󠁢󠁳󠁣󠁴󠁿','🏴󠁧󠁢󠁷󠁬󠁳󠁿','🇺🇳','🇺🇸','🇺🇾','🇺🇿','🇻🇺','🇻🇦','🇻🇪','🇻🇳','🇼🇫','🇪🇭','🇾🇪','🇿🇲','🇿🇼','🫨','🩷','🩵','🩶','🫸','🫸🏻','🫸🏼','🫸🏽','🫸🏾','🫸🏿','🫷','🫷🏻','🫷🏼','🫷🏽','🫷🏾','🫷🏿','🫏','🫎','🪿','🐦‍⬛','🪽','🪼','🪻','🫛','🫚','🪭','🪮','🪈','🪇','🪯','🛜','🫠','🫢','🫣','🫡','🫥','🫤','🥹','🫱','🫱🏻','🫱🏼','🫱🏽','🫱🏾','🫱🏿','🫲','🫲🏻','🫲🏼','🫲🏽','🫲🏾','🫲🏿','🫳','🫳🏻','🫳🏼','🫳🏽','🫳🏾','🫳🏿','🫴','🫴🏻','🫴🏼','🫴🏽','🫴🏾','🫴🏿','🫰','🫰🏻','🫰🏼','🫰🏽','🫰🏾','🫰🏿','🫵','🫵🏻','🫵🏼','🫵🏽','🫵🏾','🫵🏿','🫶','🫶🏻','🫶🏼','🫶🏽','🫶🏾','🫶🏿','🤝🏻','🤝🏼','🤝🏽','🤝🏾','🤝🏿','🫱🏻‍🫲🏼','🫱🏻‍🫲🏽','🫱🏻‍🫲🏾','🫱🏻‍🫲🏿','🫱🏼‍🫲🏻','🫱🏼‍🫲🏽','🫱🏼‍🫲🏾','🫱🏼‍🫲🏿','🫱🏽‍🫲🏻','🫱🏽‍🫲🏼','🫱🏽‍🫲🏾','🫱🏽‍🫲🏿','🫱🏾‍🫲🏻','🫱🏾‍🫲🏼','🫱🏾‍🫲🏽','🫱🏾‍🫲🏿','🫱🏿‍🫲🏻','🫱🏿‍🫲🏼','🫱🏿‍🫲🏽','🫱🏿‍🫲🏾','🫦','🫅','🫅🏻','🫅🏼','🫅🏽','🫅🏾','🫅🏿','🫃','🫃🏻','🫃🏼','🫃🏽','🫃🏾','🫃🏿','🫄','🫄🏻','🫄🏼','🫄🏽','🫄🏾','🫄🏿','🧌','🪸','🪷','🪹','🪺','🫘','🫗','🫙','🛝','🛞','🛟','🪬','🪩','🪫','🩼','🩻','🫧','🪪','🟰'];

function getRandomEmoji() {
const randomIndex = Math.floor(Math.random() * emojis.length);
return emojis[randomIndex];
}

// Function to update the marquee content
function updateMarquee() {
const emojiElements = document.querySelectorAll('.emoji'); // select all elements with class 'emoji'

emojiElements.forEach((emojiElement) => {
    emojiElement.textContent = getRandomEmoji();
});
}

setInterval(updateMarquee, 3000);

function startMarquee() {
const marqueeElement = document.getElementById('emoji-marquee');
marqueeElement.start();
}

function stopMarquee() {
const marqueeElement = document.getElementById('emoji-marquee');
marqueeElement.stop();
}

document.addEventListener("DOMContentLoaded", function () {
updateMarquee();
});

const videos = [
  "https://hugh.cdn.rumble.cloud/video/s8/2/6/Y/x/T/6YxTp.haa.mp4",
  "https://hugh.cdn.rumble.cloud/video/s8/2/Q/A/1/V/QA1Vp.baa.mp4",
  "https://hugh.cdn.rumble.cloud/video/s8/2/t/5/m/Y/t5mYp.caa.mp4",
  "https://hugh.cdn.rumble.cloud/video/s8/2/J/7/m/Y/J7mYp.caa.mp4",
];

function randomVideo() {
    const videoPlayer = document.getElementById('myVideo');
    const videoSource = document.getElementById('videoSource');
    const randomVideoIndex = Math.floor(Math.random() * videos.length);
    const randomVideoUrl = videos[randomVideoIndex];
    videoSource.src = randomVideoUrl;
    videoPlayer.load();
    videoPlayer.play();
    const randomSongIndex = Math.floor(Math.random() * songNames.length);
    const songNameElement = document.getElementById('songName');
    if (songNameElement) {
        songNameElement.textContent = songNames[randomSongIndex];
    }
}

document.getElementById('myVideo').addEventListener('ended', randomVideo);
document.addEventListener('DOMContentLoaded', randomVideo);


