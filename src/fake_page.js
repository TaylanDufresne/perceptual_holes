let state = "test"
let startTime = Date.now()
let savedTime = 0
let mouseStarts = []
let mouseEnds = []
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
  "Loaded": Date.now()
}
let ickX = 0
let ickY = 0

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

  if (!mouseEnds.includes(savedTime)) {
    mouseEnds.push(savedTime)
  }

  // console.log(event.clientX)
  // console.log(event.clientY)


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
    page: "Instant Load",
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
  // for (let x = 1; x < mouseEnds.length; x++) {
  //   let timing = mouseEnds[x] - mouseStarts[x - 1]
  //   // console.log("Mouse moves: " + timing )
  // }
  window.location.replace("http://hci-sandbox.usask.ca:3017/questionnaire2.html")
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
    if (x > areas[keys[key]][0]*x_ratio && x < areas[keys[key]][2]*x_ratio && y > areas[keys[key]][1]*y_ratio && y < areas[keys[key]][3]*y_ratio) {
      console.log(keys[key])
      if (currentLocation !== keys[key]){
        currentLocation = keys[key]
        locations[keys[key]].push(currentTime)
      }
      hover[keys[key]](x, y)
      break
    }
    currentLocation = "Nothing"
    locations['Nothing'].push(currentTime)
  }
}




document.addEventListener("click", printMousePos);
document.addEventListener("mousemove", printMove);

document.getElementById("image").style.zIndex = 0
document.getElementById("image").style.opacity = 1