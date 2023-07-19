let state = 0
let startTime = Date.now()
let savedTime = 0
let mouseStarts = []
let mouseEnds = []
let ickX = 0
let ickY = 0




function next_month_dates(x, y) {
  let pos_x = 35 * Math.floor((x - 555) / 35) + 555
  let pos_y = 35 * Math.floor((y - 257) / 35) + 257
  let highlight = document.getElementById("highlight")
  let image = document.getElementById("image")
  if ((pos_x >= 625 || pos_y >= 280) && (pos_x <= 729 || pos_y <= 390)) {
    highlight.style.background = "grey"
    highlight.style.borderRadius = "0px"
    highlight.style.opacity = 0.5
    highlight.style.width = "35px"
    highlight.style.height = "35px"
    highlight.style.position = "absolute"
    highlight.style.left = pos_x + "px"
    highlight.style.top = pos_y + "px"
    highlight.style.cursor = "pointer"
    image.style.cursor = "pointer"
  }
  else {
    highlight.style.opacity = 0
  }
}

function listings(x, y) {
  change_cursor("pointer")
  if (y > 1455) {
    underline(370, 450, 1535)
  }
  else if (y > 1190) {
    underline(370, 450, 1280)
  }
  else if (y > 945) {
    underline(370, 385, 1023)
  }
  else if (y > 685) {
    underline(370, 430, 767)
  }
  else if (y > 450) {

  }
  return
}

function calendar(x, y) {
  return
}

function current_month_dates(x, y) {
  let pos_x = 35 * Math.floor((x - 290) / 35) + 290
  let pos_y = 35 * Math.floor((y - 257) / 35) + 257
  let highlight = document.getElementById("highlight")
  let image = document.getElementById("image")
  if ((pos_x > 495 || pos_y > 280) && (pos_x < 360 || pos_y < 425)) {
    highlight.style.background = "grey"
    highlight.style.borderRadius = "0px"
    highlight.style.opacity = 0.5
    highlight.style.width = "35px"
    highlight.style.height = "35px"
    highlight.style.position = "absolute"
    highlight.style.left = pos_x + "px"
    highlight.style.top = pos_y + "px"
    highlight.style.cursor = "pointer"
    image.style.cursor = "pointer"
  }
  else {
    highlight.style.opacity = 0
  }
}

function next_month_button(x, y) {
  return
}

function prev_month_button(x, y) {
  return
}

function map(x, y) {
  change_cursor("grab")
  return
}

function check_dates(x, y) {
  change_cursor("pointer")
  return
}

function change_cursor(text) {
  let image = document.getElementById("image")
  image.style.cursor = text
}


function close_button(x, y) {
  change_cursor("pointer")
  underline(804, 45, 539)
  return
}

function text(x, y){
  change_cursor("text")
}

function next_button(x, y){
  let highlight = document.getElementById("highlight")
  highlight.style.left = 806 + "px"
  highlight.style.top = 295 + "px"
  highlight.style.opacity = 0.3
  highlight.style.background = "#1d91f0"
  highlight.style.width = "40px"
  highlight.style.height = "40px"
  highlight.style.borderRadius = "50px"
}

function clickable(x, y){
  change_cursor("pointer")
}

function underline(x, width, y) {
  let highlight = document.getElementById("highlight")
  highlight.style.background = "black"
  highlight.style.opacity = 1
  highlight.style.width = width + "px"
  highlight.style.height = "1px"
  highlight.style.position = "absolute"
  highlight.style.left = x + "px"
  highlight.style.top = y + "px"
  highlight.style.cursor = "pointer"
  change_cursor("pointer")
}

let areas = {
  "Calendar Next Month Dates": [555, 255, 800, 425],
  "Calendar Current Month Dates": [300, 265, 540, 455],
  "Calendar Close": [815, 530, 865, 550],
  "Calendar Next Button": [809, 293, 843, 330],
  "Calendar": [225, 150, 890, 565],
  "Map": [881, 190, 2225, 1590],
  "Search Box": [20, 80, 365, 130],
  "Listings": [0, 440, 880, 1590],
  "Check Dates": [375, 70, 720, 120],
  "Group": [740, 70, 970, 120],
  "Top Text": [30, 220, 213, 270],
  "Bottom Text": [24, 272, 168, 302],
  "Filter Buttons": [13, 135, 212, 175]
}

let hover = {
  "Calendar Next Month Dates": next_month_dates,
  "Calendar Current Month Dates": current_month_dates,
  "Calendar": calendar,
  "Map": map,
  "Search Box": text,
  "Listings": listings,
  "Check Dates": clickable,
  "Group": clickable,
  "Calendar Close": close_button,
  'Top Text': text,
  "Bottom Text": text,
  "Filter Buttons": clickable,
  "Calendar Next Button": next_button,
}


function test(event) {
  console.log("Can pass functions")
}

function printMousePos(event) {
  //   if (event.clientX < 100 && event.clientY < 100 && state == "test") {
  //     state = "nope"
  //     document.body.textContent =
  //       "clientX: " + event.clientX +
  //       " - clientY: " + event.clientY;
  //   }

  // }
  if (!mouseEnds.includes(savedTime)) {
    mouseEnds.push(savedTime)
  }

  console.log(event.clientX)
  console.log(event.clientY)
  // console.log(mouseStarts)
  // console.log(mouseEnds)
  // for (let x = 1; x < mouseEnds.length; x++) {
  //   let timing = mouseEnds[x] - mouseStarts[x - 1]
  //   console.log("Mouse moves: " + timing )
  // }

  let x = event.clientX
  let y = event.clientY
  let selection;

  let keys = Object.keys(areas)
  for (let key = 0; key < keys.length; key++) {
    if (x > areas[keys[key]][0] && x < areas[keys[key]][2] && y > areas[keys[key]][1] && y < areas[keys[key]][3]) {
      console.log(keys[key])
      selection = keys[key]
      break
    }
  }

  let TopLeftCalendar = [225, 150]
  let bottomRightCalendar = [890, 565]

  let topLeftMap = [891, 200]
  let bottomRightMap = [2235, 1600]

  let topLeftListings = []
  let BottomRightListings = []

  let topLeftSearch = [20, 80]
  let bottomRightSearch = [980, 130]


  let object = {
    selection: selection,
    start: mouseStarts,
    ends: mouseEnds
  }
  let dataStr = JSON.stringify(object)

  fetch('https://hci-sandbox.usask.ca/logging_holes',{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
  },
  body: dataStr
})
  for (let x = 1; x < mouseEnds.length; x++) {
    let timing = mouseEnds[x] - mouseStarts[x - 1]
    // console.log("Mouse moves: " + timing )
  }
}

function printMove(event) {
  let image = document.getElementById("image")
  image.style.cursor = "default"

  let highlight = document.getElementById("highlight")
  highlight.style.opacity = 0

  let currentTime = Date.now() - startTime
  if (currentTime - savedTime > 100) {
    console.log("New Mouse Move: " + currentTime)
    mouseStarts.push(currentTime)
    mouseEnds.push(savedTime)

  }

  let x = event.clientX
  let y = event.clientY

  ickX = x
  ickY = y
  savedTime = currentTime
  let keys = Object.keys(areas)
  for (let key = 0; key < keys.length; key++) {
    if (x > areas[keys[key]][0] && x < areas[keys[key]][2] && y > areas[keys[key]][1] && y < areas[keys[key]][3]) {
      hover[keys[key]](x, y)
      break
    }
  }
}



document.addEventListener("click", printMousePos);
document.addEventListener("mousemove", printMove);

// block 1 - 5

let cover1 = document.getElementById("block1")
cover1.style.position="absolute"
cover1.style.top ="195px"
cover1.style.width="204px"
cover1.style.height="875px"
cover1.style.zIndex = 2
cover1.style.background="white"
cover1.style.opacity=1

let cover2 = document.getElementById("block2")
cover2.style.position="absolute"
cover2.style.top ="557px"
cover2.style.width="880px"
cover2.style.height="522px"
cover2.style.zIndex = 2
cover2.style.background="white"
// cover2.style.background="black"
cover2.style.opacity=1

let cover3 = document.getElementById("block3")
cover3.style.position="absolute"
cover3.style.top ="135px"
cover3.style.width="204px"
cover3.style.height="55px"
cover3.style.zIndex = 2
cover3.style.background="#f5f4f3"
// cover3.style.background="yellow"
cover3.style.opacity=1

let cover4 = document.getElementById("block4")
cover4.style.position="absolute"
cover4.style.top ="135px"
cover4.style.left = "203px"
cover4.style.width="680px"
cover4.style.height="55px"
cover4.style.zIndex = 2
cover4.style.background="#f5f4f3"
// cover4.style.background="blue"
cover4.style.opacity=1

let cover5 = document.getElementById("block5")
cover5.style.position="absolute"
cover5.style.top ="190px"
cover5.style.width="870px"
cover5.style.height="890px"
cover5.style.zIndex = 2
cover5.style.background="white"
// cover5.style.background="red"
cover5.style.opacity=1

let cover6 = document.getElementById("block6")
cover6.style.position="absolute"
cover6.style.top ="190px"
cover6.style.left="877px"
cover6.style.width="1038px"
cover6.style.height="890px"
cover6.style.zIndex = 2
cover6.style.background="#dddddd"
// cover6.style.background="blue"
cover6.style.opacity=1

let cover7 = document.getElementById("block7")
cover7.style.position="absolute"
cover7.style.top ="190px"
cover7.style.left="873px"
cover7.style.width="30px"
cover7.style.height="890px"
cover7.style.zIndex = 2
cover7.style.background="#dddddd"
// cover7.style.background="green"
cover7.style.opacity=1



// calender, map, listings

function uncover_0(time){
    if(time > 2000){

        let cover = document.getElementById("block4")
        cover.remove()
        cover = document.getElementById("block5")
        cover.remove()  
        cover = document.getElementById("block7")
        cover.style.top ="558px"
        cover.style.height ="522px"
     
        state = 1
    }
    return
}
function uncover_1(time){
    if (time > 3000){

        let cover = document.getElementById("block2")
        cover.remove() 
        cover = document.getElementById("block1")
        cover.remove()
       
        state = 2
    }
    return
}
function uncover_2(time){
    if(time > 4000 && state == 2){
        let cover = document.getElementById("block3")
        cover.remove()
        state = 3
        return
    }

    }
function uncover_3(time){
    if(time > 6000 && state == 3){
        let cover = document.getElementById("block6")
        cover.remove()
        cover = document.getElementById("block7")
        cover.remove()
        state = 4
        return
    }
}

function updateState(){
  // console.log(time - startTime)
  let time = Date.now() - startTime
  console.log("Checking")
  if (time > 7000){
    console.log("done")
    state = "loaded"
    clearInterval(myInterval)
}
    else{
        switch (state){
            case 0:
                uncover_0(time)
                break
            case 1:
                uncover_1(time)
                break
            case 2:
                uncover_2(time)
            default:
                uncover_3(time)
        }
    }
}

const myInterval = setInterval(updateState, 500)
