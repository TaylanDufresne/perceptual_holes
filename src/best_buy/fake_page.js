let state = "test"
let startTime = Date.now()
let savedTime = 0
let mouseStarts = []
let mouseEnds = []
let locations = {
  "Map": [],
  "Search Box": [],
  "Listings": [],
  "Check Dates": [],
  "Group": [],
  "Top Text": [],
  "Bottom Text": [],
  "Filter Buttons": [],
  "Nothing": [],
  "Zoom Buttons": [],
  "Map Search Button": [],
  "Listing Sort": [],
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

function listings(x, y) {
  change_cursor("pointer")
  if (y > 1455*y_ratio) {
    underline(370*x_ratio, 450*x_ratio, 1535*y_ratio)
  }
  else if (y > 1190*y_ratio) {
    underline(370*x_ratio, 470*x_ratio, 1280*y_ratio)
  }
  else if (y > 945*y_ratio) {
    underline(370*x_ratio, 410*x_ratio, 1023*y_ratio)
    underline2(370*x_ratio, 90*x_ratio, 1048*y_ratio )
  }
  else if (y > 685*y_ratio) {
    underline(370*x_ratio, 250*x_ratio, 767*y_ratio)
  }
  else if (y > 450*y_ratio) {
    underline(370*x_ratio, 435*x_ratio, 510*y_ratio)
  }
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

function underline2(x, width, y) {
  let highlight = document.getElementById("highlight2")
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
// Top left (x,y) and bottom right (x,y)
let areas = {
  "Zoom Buttons": [900, 210, 949, 289],
  "Map Search Button": [1700, 200, 1897, 240],
  "Map": [881, 190, 2225, 1590],
  "Search Box": [20, 80, 365, 130],
  "Listings": [0, 440, 880, 1590],
  "Check Dates": [375, 70, 720, 120],
  "Group": [740, 70, 970, 120],
  "Top Text": [30, 220, 631, 270],
  "Bottom Text": [24, 272, 168, 302],
  "Filter Buttons": [13, 135, 407, 175],
  "Listing Sort": [790, 225, 845, 245],
}

let hover = {
  "Map": map,
  "Search Box": text,
  "Listings": listings,
  "Check Dates": clickable,
  "Group": clickable,
  'Top Text': text,
  "Bottom Text": text,
  "Filter Buttons": clickable,
  "Zoom Buttons":  clickable,
  "Map Search Button": clickable,
  "Listing Sort": clickable,
}


function test(event) {
  console.log("Can pass functions")
}

function printMousePos(event) {

  if (!mouseEnds.includes(savedTime)) {
    mouseEnds.push(savedTime)
  }

  console.log(event.clientX/x_ratio)
  console.log(event.clientY/y_ratio)


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

//   fetch('http://hci-sandbox.usask.ca:3018/logging_holes',{
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//   },
//   body: dataStr
// })

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
  // window.location.replace("http://hci-sandbox.usask.ca:3017/questionnaire2.html")
}

function printMove(event) {
  let image = document.getElementById("image")
  image.style.cursor = "default"

  let highlight = document.getElementById("highlight")
  highlight.style.opacity = 0

  let highlight2 = document.getElementById("highlight2")
  highlight2.style.opacity = 0

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
    // currentLocation = "Nothing"
    // locations['Nothing'].push(currentTime)
  }
}




document.addEventListener("click", printMousePos);
document.addEventListener("mousemove", printMove);

document.getElementById("image").style.zIndex = 0
document.getElementById("image").style.opacity = 1
