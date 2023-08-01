let state = "test"
let startTime = Date.now()
let savedTime = 0
let mouseStarts = []
let mouseEnds = []
let locations = {
  "Logo": [],
  "Search Bar": [],
  "Submit Search Button": [],
  "Shop Button": [],
  "Brands Button": [],
  "Deals Button": [],
  "Services Button": [],
  "Ad": [],
  "Banner Link 1": [],
  "Banner Link 2": [],
  "Banner Link 3": [],
  "Banner Link 4": [],
  "Order Status Link": [],
  "Blog Link": [],
  "Business Link": [],
  "French Link": [],
}

// Top left (x,y) and bottom right (x,y)
let areas = {
  "Logo": [340, 160, 445, 220],
  "Search Bar": [460, 155, 880, 210],
  "Submit Search Button": [880, 165, 910, 210],
  "Shop Button": [350,240,410,270],
  "Brands Button": [430,240,510,270],
  "Deals Button": [530,240,580,270],
  "Services Button": [610,240,700,270],
  "Ad": [480, 0, 1430, 110],
  "Banner Link 1": [560, 870, 725, 925],
  "Banner Link 2": [1278, 520, 1370, 565],
  "Banner Link 3": [1040, 912, 1152, 950],
  "Banner Link 4": [1365, 912, 1449, 950],
  "Order Status Link": [1265, 130, 1340, 143],
  "Blog Link": [1345, 130, 1375, 143],
  "Business Link": [1390, 130, 1490, 143],
  "French Link": [1500, 130, 1555, 143],
}

let hover = {
  "Logo": clickable,
  "Search Bar": text,
  "Submit Search Button": clickable,
  "Shop Button": clickable,
  "Brands Button": clickable,
  "Deals Button": clickable,
  "Services Button": clickable,
  "Ad": clickable,
  "Banner Link 1": button1,
  "Banner Link 2": button2,
  "Banner Link 3": button3,
  "Banner Link 4": button4,
  "Order Status Link": order_link,
  "Blog Link": blog_link,
  "Business Link": business_link,
  "French Link": french_link,
}

function button1(x,y){
  clickable(x,y)
  let highlight = document.getElementById("highlight")
  highlight.style.background = "grey"
  highlight.style.opacity = 0.3
  highlight.style.position = "absolute"
  highlight.style.top = 870*y_ratio + "px"
  highlight.style.left = 560*x_ratio + "px"
  highlight.style.width = 165*x_ratio + "px"
  highlight.style.height = 55*y_ratio + "px"
}

function button2(x,y){
  let highlight = document.getElementById("highlight")
  highlight.style.background = "grey"
  highlight.style.opacity = 0.3
  highlight.style.position = "absolute"
  highlight.style.top = 524*y_ratio + "px"
  highlight.style.left = 1278*x_ratio + "px"
  highlight.style.width = 90*x_ratio + "px"
  highlight.style.height = 41*y_ratio + "px"
}

function button3(x,y){
  let highlight = document.getElementById("highlight")
  highlight.style.background = "grey"
  highlight.style.opacity = 0.3
  highlight.style.position = "absolute"
  highlight.style.top = 912*y_ratio + "px"
  highlight.style.left = 1040*x_ratio + "px"
  highlight.style.width = 112*x_ratio + "px"
  highlight.style.height = 38*y_ratio + "px"
}

function button4(x,y){
  let highlight = document.getElementById("highlight")
  highlight.style.background = "grey"
  highlight.style.opacity = 0.3
  highlight.style.position = "absolute"
  highlight.style.top = 912*y_ratio + "px"
  highlight.style.left = 1365*x_ratio + "px"
  highlight.style.width = 84*x_ratio + "px"
  highlight.style.height = 38*y_ratio + "px"
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

function order_link(x,y){
  link(1265*x_ratio, 75*x_ratio, 143*y_ratio)
}

function blog_link(x,y){
  link(1350*x_ratio, 10*x_ratio, 143*y_ratio)
}

function business_link(x,y){
  link(1390*x_ratio, 100*x_ratio, 143*y_ratio)
}

function french_link(x,y){
  link(1500*x_ratio, 50*x_ratio, 143*y_ratio)
}


function link(x, width, y){
  change_cursor("text");
  underline(x, width, y)
}
function change_cursor(text) {
  let image = document.getElementById("image")
  image.style.cursor = text
}

function clickable(x, y){
  change_cursor("pointer")
}

function text(x,y){
  change_cursor("text")
}

function underline(x, width, y) {
  let highlight = document.getElementById("highlight")
  highlight.style.background = "white"
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
  highlight.style.background = "white"
  highlight.style.opacity = 1
  highlight.style.width = width + "px"
  highlight.style.height = "1px"
  highlight.style.position = "absolute"
  highlight.style.left = x + "px"
  highlight.style.top = y + "px"
  highlight.style.cursor = "pointer"
  change_cursor("pointer")
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

function trackScroll(event){
  console.log("Scrolling")
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
document.addEventListener("wheel", trackScroll)

document.getElementById("image").style.zIndex = 0
document.getElementById("image").style.opacity = 1
