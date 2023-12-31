let state = 0
let startTime = Date.now()
let savedTime = 0
let mouseStarts = []
let mouseEnds = []
let ickX = 0
let ickY = 0
let locations = {
  "Calendar Next Month Dates": [],
  "Calendar Current Month Dates": [],
  "Calendar Close": [],
  "Calendar Next Button": [],
  "Calendar": [],
  "Map": [],
  "Search Box": [],
  "Listings": [],
  "Check Dates": [],
  "Group": [],
  "Top Text": [],
  "Bottom Text": [],
  "Filter Buttons": [], 
  "Nothing": [],
}
currentLocation = ""
let load_progress = {
  "Loaded": "undefined",
  "Loading": Date.now(),
  "Distraction_1": "undefined",
  "Distraction_2": "undefined",
  "Distraction_3": "undefined",
  "Distraction_4": "undefined",

}

let width = document.getElementById("image").getBoundingClientRect().width
let height = document.getElementById("image").getBoundingClientRect().height

let x_ratio = width/1920
let y_ratio = height/1080

console.log(width, height)

function next_month_dates(x, y) {
  let pos_x = (35*x_ratio * Math.floor((x - 555*x_ratio) /( 35*x_ratio)) + 555*x_ratio) 
  let pos_y = (35*y_ratio * Math.floor((y - 257*y_ratio) / (35*y_ratio)) + 257*y_ratio) 
  let highlight = document.getElementById("highlight")
  let image = document.getElementById("image")
  if ((pos_x >= 625*x_ratio || pos_y >= 280*y_ratio) && (pos_x <= 729*x_ratio || pos_y <= 390*y_ratio)) {
    highlight.style.background = "grey"
    highlight.style.borderRadius = "0px"
    highlight.style.opacity = 0.5
    highlight.style.width = 35*x_ratio + "px"
    highlight.style.height = 35*y_ratio + "px"
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
  if (y > 1455*y_ratio) {
    underline(370*x_ratio, 450*x_ratio, 1535*y_ratio)
  }
  else if (y > 1190*y_ratio) {
    underline(370*x_ratio, 450*x_ratio, 1280*y_ratio)
  }
  else if (y > 945*y_ratio) {
    underline(370*x_ratio, 385*x_ratio, 1023*y_ratio)
  }
  else if (y > 685*y_ratio) {
    underline(370*x_ratio, 430*x_ratio, 767*y_ratio)
  }
  else if (y > 450*y_ratio) {

  }
  return
}

function calendar(x, y) {
  return
}

function current_month_dates(x, y) {
  let pos_x = (35*x_ratio* Math.floor((x - 290*x_ratio) / (35*x_ratio)) + 290*x_ratio)
  let pos_y = (35*y_ratio * Math.floor((y - 257*y_ratio) /( 35*y_ratio)) + 257*y_ratio)
  let highlight = document.getElementById("highlight")
  let image = document.getElementById("image")
  if ((pos_x > 495*x_ratio || pos_y > 280*y_ratio) && (pos_x < 360*x_ratio || pos_y < 425*y_ratio)) {
    highlight.style.background = "grey"
    highlight.style.borderRadius = "0px"
    highlight.style.opacity = 0.5
    highlight.style.width = 35*x_ratio + "px"
    highlight.style.height = 35*y_ratio + "px"
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
  underline(804* x_ratio, 45*x_ratio, 539*y_ratio)
  return
}

function text(x, y){
  change_cursor("text")
}

function next_button(x, y){
  let highlight = document.getElementById("highlight")
  highlight.style.left = 806*x_ratio + "px"
  highlight.style.top = 295*y_ratio + "px"
  highlight.style.opacity = 0.3
  highlight.style.background = "#1d91f0"
  highlight.style.width = 40 * x_ratio +"px"
  highlight.style.height = 40 * y_ratio + "px"
  highlight.style.borderRadius = "150px"
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
  "Filter Buttons": [13, 135, 212, 175],
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
  if (!mouseEnds.includes(savedTime)) {
    mouseEnds.push(savedTime)
  }

  let x = event.clientX
  let y = event.clientY
  let selection;

  let keys = Object.keys(areas)
  for (let key = 0; key < keys.length; key++) {
    if (x > areas[keys[key]][0] *x_ratio && x < areas[keys[key]][2] * x_ratio && y > areas[keys[key]][1] * y_ratio && y < areas[keys[key]][3] *y_ratio) {
      console.log(keys[key])
      selection = keys[key]
      break
    }
  }

  let object = {
    page: "Loading Bar with distractions",
    selection: selection,
    clickTime: Date.now(),
    start: mouseStarts,
    ends: mouseEnds,
    startTime: startTime,
    locations: locations,
    load_progress: load_progress,
  }

  let dataStr = JSON.stringify(object)

  fetch('http://hci-sandbox.usask.ca:3018/logging_holes',{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
  },
  body: dataStr
})

// fetch('http://localhost:8016/logging_holes',{
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
// },
// body: dataStr
// })

  for (let x = 1; x < mouseEnds.length; x++) {
    let timing = mouseEnds[x] - mouseStarts[x - 1]

  }
  window.location.replace("http://hci-sandbox.usask.ca:3017/questionnaire.html")
}

function printMove(event) {
  let image = document.getElementById("image")
  image.style.cursor = "default"

  let highlight = document.getElementById("highlight")
  highlight.style.opacity = 0

  let currentTime = Date.now()
  if (currentTime - savedTime > 100) {
    // console.log("New Mouse Move: " + currentTime)
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
    if (x > areas[keys[key]][0] *x_ratio && x < areas[keys[key]][2] * x_ratio && y > areas[keys[key]][1] * y_ratio && y < areas[keys[key]][3] *y_ratio) {
      if (currentLocation !== keys[key]){
        currentLocation = keys[key]
        locations[keys[key]].push(currentTime)
      }
      hover[keys[key]](x, y)
      break
    }
    // currentLocation = "Nothing"
    // locations['Nothing'].push(currentTime)
  }
}



document.addEventListener("click", printMousePos);
document.addEventListener("mousemove", printMove);

// block 1 - 5
// image is 2225*1595

let cover1 = document.getElementById("block1")
cover1.style.position = "absolute"
cover1.style.top = "0px"
cover1.style.left = "0px"
cover1.style.width = "100%"
cover1.style.height = "100%"
cover1.style.zIndex = 1
cover1.style.background = "white"
cover1.style.opacity = 1

let cover2 = document.getElementById("block2")
cover2.style.position = "absolute"
cover2.style.top = 540*y_ratio+"px"
cover2.style.left = 485*x_ratio+"px"
cover2.style.width = 0*x_ratio+"px"
cover2.style.height = 75*y_ratio+"px"
cover2.style.borderRadius=15*x_ratio+"px"
cover2.style.zIndex = 2
cover2.style.background = "green"
cover2.style.opacity = 1


let cover3 = document.getElementById("block3")
cover3.style.position = "absolute"
cover3.style.top = 535*y_ratio+"px"
cover3.style.left = 480*x_ratio+"px"
cover3.style.width = 960*x_ratio+"px"
cover3.style.height = 85*y_ratio+"px"
cover3.style.zIndex = 1
cover3.style.background = "grey"
cover3.style.borderRadius = 10*x_ratio+"px"
cover3.style.opacity = 1


let cover4 = document.getElementById("block4")
cover4.style.position = "absolute"
cover4.style.top = 135*y_ratio+"px"
cover4.style.left = 224*x_ratio+"px"
cover4.style.width = 50*x_ratio+"px"
cover4.style.height = 50*y_ratio+"px"
cover4.style.zIndex = 2
cover4.style.borderRadius = 25*x_ratio+"px"
cover4.style.background = "blue"
cover4.style.opacity = 0

let cover5 = document.getElementById("block5")
cover5.style.position = "absolute"
cover5.style.top = 200*y_ratio+"px"
cover5.style.width = 50*x_ratio+"px"
cover5.style.height = 50*y_ratio+"px"
cover5.style.zIndex = 2
cover5.style.borderRadius = 25*x_ratio+"px"
cover5.style.background = "red"
cover5.style.opacity = 0

let cover6 = document.getElementById("block6")
cover6.style.position = "absolute"
cover6.style.top = 1000*y_ratio+"px"
cover6.style.left = 889*x_ratio+"px"
cover6.style.width = 50*x_ratio+"px"
cover6.style.height = 50*y_ratio+"px"
cover6.style.zIndex = 2
cover6.style.borderRadius = 25*x_ratio+"px"
cover6.style.background = "orange"
cover6.style.opacity = 0

let cover7 = document.getElementById("block7")
cover7.style.position = "absolute"
cover7.style.top = 200*y_ratio+"px"
cover7.style.left = 886*x_ratio+"px"
cover7.style.width = 50*x_ratio+"px"
cover7.style.height = 50*y_ratio+"px"
cover7.style.zIndex = 2
cover7.style.borderRadius = 25*x_ratio+"px"
cover7.style.background = "green"
cover7.style.opacity = 0

//locations 202, 216
// 1527, 207
// 1527, 663
document.getElementById("image").style.zIndex = 0
document.getElementById("image").style.opacity = 1
// calender, map, listings

function incrementLoadingScreen() {
  let id = setInterval(frame, 5);
  let counter = 0
  function frame() {
    let cover = document.getElementById("block2")
    let width = cover ? cover.getBoundingClientRect().width : 950*x_ratio
    if (counter >= 500) {
      clearInterval(id)
    }
    else if (width >= 950*x_ratio) {
      clearInterval(id)
    }
    else {
      counter += 5
      let cover = document.getElementById("block2")
      cover.style.width = cover.getBoundingClientRect().width + 1 + "px"
    }
  }
}

function uncover_0(time) {
  let cover = document.getElementById("block2")

  incrementLoadingScreen()
  if (time > 2000) {

    cover = document.getElementById("block4")
    cover.style.opacity = 1
    load_progress["Distraction_1"] = Date.now()
    state = 1

  }
  return
}
function uncover_1(time) {
  incrementLoadingScreen()
  if (time > 3000) {
    let cover = document.getElementById("block5")
    cover.style.opacity = 1
    load_progress["Distraction_2"] = Date.now()
    cover = document.getElementById("block4")
    cover.remove()
    state = 2
  }
  return
}
function uncover_2(time) {
  incrementLoadingScreen()
  if (time > 4000 && state == 2) {
    let cover = document.getElementById("block5")
    cover.remove()
    cover = document.getElementById("block6")
    cover.style.opacity = 1 
    load_progress["Distraction_3"] = Date.now()
    state = 3
    return
  }

}
function uncover_3(time) {
  incrementLoadingScreen()
  if (time > 5000 && state == 3) {

    cover = document.getElementById("block6")
    cover.remove()
    cover = document.getElementById("block7")
    cover.style.opacity = 1
    load_progress["Distraction_4"] = Date.now()


    state = 4
    return
  }
}
function uncover_4(time) {
  incrementLoadingScreen()
  if (time > 6000 && state == 4) {


    let cover = document.getElementById("block2")
    cover.remove()
    cover = document.getElementById("block1")
    cover.remove()
    cover = document.getElementById("block3")
    cover.remove()
    cover = document.getElementById("block7")
    cover.remove()

    load_progress["Loaded"] = Date.now()
    state = 5
    return
  }
}


function updateState() {
  // console.log(time - startTime)
  let time = Date.now() - startTime
  console.log("Checking")
  if (time > 7000) {
    console.log("done")
    state = "loaded"
    clearInterval(myInterval)
  }
  else {
    switch (state) {
      case 0:
        uncover_0(time)
        break
      case 1:
        uncover_1(time)
        break
      case 2:
        uncover_2(time)
        case 3:
          uncover_3(time)
          case 4:
            uncover_4(time)
      default:
        return
    }
  }
}

const myInterval = setInterval(updateState, 500)
