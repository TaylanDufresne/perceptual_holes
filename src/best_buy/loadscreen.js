let state = 0
let startTime = Date.now()
let savedTime = 0
let mouseStarts = []
let mouseEnds = []
let ickX = 0
let ickY = 0

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
  "Loaded": "undefined",
  "Loading": Date.now()

}

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

function map(x, y) {
  change_cursor("grab")
  return
}


function change_cursor(text) {
  let image = document.getElementById("image")
  image.style.cursor = text
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
    if (x > areas[keys[key]][0] *x_ratio && x < areas[keys[key]][2] * x_ratio && y > areas[keys[key]][1] * y_ratio && y < areas[keys[key]][3] *y_ratio) {
      console.log(keys[key])
      selection = keys[key]
      break
    }
  }


  let object = {
    page: "Loading Bar",
    selection: selection,
    clickTime: Date.now(),
    start: mouseStarts,
    ends: mouseEnds,
    startTime: startTime,
    locations: locations,
    load_progress: load_progress
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
    // console.log("Mouse moves: " + timing )
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
cover2.style.top = 540*y_ratio + "px"
cover2.style.left = 485*x_ratio+"px"
cover2.style.width = 0*x_ratio+"px"
cover2.style.height = 75*y_ratio+"px"
cover2.style.borderRadius=15+"px"
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
cover4.style.width = 700*x_ratio+"px"
cover4.style.height = 65*y_ratio+"px"
cover4.style.zIndex = 2
cover4.style.background = "#f5f4f3"
cover4.style.opacity = 0

let cover5 = document.getElementById("block5")
cover5.style.position = "absolute"
cover5.style.top = 10*y_ratio+"px"
cover5.style.width = 88*x_ratio+"px"
cover5.style.height = 80*y_ratio+"px"
cover5.style.zIndex = 2
cover5.style.background = "white"
cover5.style.opacity = 0

let cover6 = document.getElementById("block6")
cover6.style.position = "absolute"
cover6.style.top = 10*y_ratio+"px"
cover6.style.left = 88*x_ratio+"px"
cover6.style.width = 10*x_ratio+"px"
cover6.style.height = 80*y_ratio+"px"
cover6.style.zIndex = 2
cover6.style.background = "#dddddd"
cover6.style.opacity = 0

let cover7 = document.getElementById("block7")
cover7.style.position = "absolute"
cover7.style.top = 10*y_ratio+"px"
cover7.style.left = 86*x_ratio+"px"
cover7.style.width = 30*x_ratio+"px"
cover7.style.height = 80*y_ratio+"px"
cover7.style.zIndex = 2
cover7.style.background = "#dddddd"
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
    let width = cover ? cover.getBoundingClientRect().width : 950 *x_ratio
    if (counter >= 500) {
      clearInterval(id)
    }
    else if (width >= 950 * x_ratio) {
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
    cover.style.opacity = 0

    state = 1

  }
  return
}
function uncover_1(time) {
  incrementLoadingScreen()
  if (time > 3000) {
    let cover = document.getElementById("block5")
    cover.style.opacity = 0
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
    cover.style.opacity = 0 
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
    cover.style.opacity = 0


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
