let state = 0
let startTime = Date.now()
let savedTime = 0
let mouseStarts = []
let mouseEnds = []
let ickX = 0
let ickY = 0




function next_month_dates(x, y) {
  let pos_x = 35 * Math.floor((x - 565) / 35) + 568
  let pos_y = 35 * Math.floor((y - 265) / 35) + 265
  let highlight = document.getElementById("highlight")
  let image = document.getElementById("image")
  if ((pos_x > 635 || pos_y > 290) && (pos_x < 740 || pos_y < 400)) {
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
  if (y > 1465) {
    underline(380, 450, 1545)
  }
  else if (y > 1200) {
    underline(380, 450, 1290)
  }
  else if (y > 955) {
    underline(380, 250, 1033)
  }
  else if (y > 695) {
    underline(380, 310, 777)
  }
  else if (y > 450) {

  }
  return
}

function calendar(x, y) {
  return
}

function current_month_dates(x, y) {
  let pos_x = 35 * Math.floor((x - 300) / 35) + 300
  let pos_y = 35 * Math.floor((y - 265) / 35) + 265
  let highlight = document.getElementById("highlight")
  let image = document.getElementById("image")
  if ((pos_x > 505 || pos_y > 290) && (pos_x < 370 || pos_y < 435)) {
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
  underline(815, 45, 548)
  return
}

function text(x, y) {
  change_cursor("text")
}

function next_button(x, y) {
  let highlight = document.getElementById("highlight")
  highlight.style.left = 817 + "px"
  highlight.style.top = 303 + "px"
  highlight.style.opacity = 0.3
  highlight.style.background = "#1d91f0"
  highlight.style.width = "40px"
  highlight.style.height = "40px"
  highlight.style.borderRadius = "50px"
}

function clickable(x, y) {
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
  "Calendar Next Month Dates": [565, 265, 810, 435],
  "Calendar Current Month Dates": [300, 265, 540, 455],
  "Calendar Close": [815, 530, 865, 550],
  "Calendar Next Button": [819, 303, 853, 340],
  "Calendar": [225, 150, 890, 565],
  "Map": [891, 200, 2235, 1600],
  "Search Box": [20, 80, 365, 130],
  "Listings": [0, 450, 890, 1600],
  "Check Dates": [385, 80, 730, 130],
  "Group": [750, 80, 980, 130],
  "Top Text": [40, 230, 223, 280],
  "Bottom Text": [34, 282, 178, 312],
  "Filter Buttons": [23, 145, 222, 185]
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

  let keys = Object.keys(areas)
  for (let key = 0; key < keys.length; key++) {
    if (x > areas[keys[key]][0] && x < areas[keys[key]][2] && y > areas[keys[key]][1] && y < areas[keys[key]][3]) {
      console.log(keys[key])
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

  fetch('http://localhost:8016',{
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
cover2.style.top = "755px"
cover2.style.left = "556px"
cover2.style.width = "0px"
cover2.style.height = "75px"
cover2.style.borderRadius = "15px"
cover2.style.zIndex = 2
cover2.style.background = "green"
cover2.style.opacity = 1

let cover3 = document.getElementById("block3")
cover3.style.position = "absolute"
cover3.style.top = "750px"
cover3.style.left = "550px"
cover3.style.width = "1123px"
cover3.style.height = "85px"
cover3.style.zIndex = 1
cover3.style.background = "grey"
cover3.style.borderRadius = "10px"
cover3.style.opacity = 1

let cover4 = document.getElementById("block4")
cover4.style.position = "absolute"
cover4.style.top = "135px"
cover4.style.left = "224px"
cover4.style.width = "50px"
cover4.style.height = "50px"
cover4.style.zIndex = 2
cover4.style.borderRadius = "25px"
cover4.style.background = "blue"
cover4.style.opacity = 0

let cover5 = document.getElementById("block5")
cover5.style.position = "absolute"
cover5.style.top = "200px"
cover5.style.width = "50px"
cover5.style.height = "50px"
cover5.style.zIndex = 2
cover5.style.borderRadius = "25px"
cover5.style.background = "red"
cover5.style.opacity = 0

let cover6 = document.getElementById("block6")
cover6.style.position = "absolute"
cover6.style.top = "1200px"
cover6.style.left = "889px"
cover6.style.width = "50px"
cover6.style.height = "50px"
cover6.style.zIndex = 2
cover6.style.borderRadius = "25px"
cover6.style.background = "orange"
cover6.style.opacity = 0

let cover7 = document.getElementById("block7")
cover7.style.position = "absolute"
cover7.style.top = "200px"
cover7.style.left = "886px"
cover7.style.width = "50px"
cover7.style.height = "50px"
cover7.style.zIndex = 2
cover7.style.borderRadius = "25px"
cover7.style.background = "green"
cover7.style.opacity = 0

//locations 202, 216
// 1527, 207
// 1527, 663


// calender, map, listings

function incrementLoadingScreen() {
  let id = setInterval(frame, 5);
  let counter = 0
  function frame() {
    let cover = document.getElementById("block2")
    let width = cover ? cover.getBoundingClientRect().width : 1113
    if (counter >= 500) {
      clearInterval(id)
    }
    else if (width >= 1112) {
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
  // cover.style.width = cover.getBoundingClientRect().width + 68 + "px"
  // console.log(cover.getBoundingClientRect().width)
  // cover.style.animationDuration = "0.5s"
  // cover.style.cssText= "@keyframes {0% {background-color: red}}"
  // 
  incrementLoadingScreen()
  if (time > 2000) {
    // debugger

    cover = document.getElementById("block4")
    cover.style.opacity = 1

    // cover = document.getElementById("block7")
    // cover.style.top = "566px"
    // cover.style.height = "1074px"
    state = 1

  }
  return
}
function uncover_1(time) {
  incrementLoadingScreen()
  if (time > 3000) {
    let cover = document.getElementById("block5")
    cover.style.opacity = 1
    cover = document.getElementById("block4")
    cover.remove()
    // cover = document.getElementById("block7")
    // cover.style.opacity = 1
    state = 2
  }
  return
}
function uncover_2(time) {
  incrementLoadingScreen()
  if (time > 4000 && state == 2) {
    let cover = document.getElementById("block5")
    cover.remove()
    // cover = document.getElementById("block7")
    // cover.remove()
    cover = document.getElementById("block6")
    cover.style.opacity = 1 
    state = 3
    return
  }

}
function uncover_3(time) {
  incrementLoadingScreen()
  if (time > 5000 && state == 3) {


    // let cover = document.getElementById("block2")
    // cover.remove()
    // cover = document.getElementById("block1")
    // cover.remove()
    // cover = document.getElementById("block3")
    // cover.remove()
    cover = document.getElementById("block6")
    cover.remove()
    cover = document.getElementById("block7")
    cover.style.opacity = 1


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
