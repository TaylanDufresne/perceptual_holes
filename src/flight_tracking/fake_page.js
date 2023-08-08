let state = "test"
let startTime = Date.now()
let savedTime = 0
let mouseStarts = []
let mouseEnds = []
let locations = {
  "Ad": [],
  "LAX": [],
}

// Top left (x,y) and bottom right (x,y)
let areas = {
  "Ad": [1759, 0, 1914, 630],
  "LAX": [790, 498, 807, 513],
}

let flightData = {
  "AA123": {
    "departureTime": "10:00 AM",
    "arrivalTime": "12:00 PM",
    "departureAirport": "JFK",
    "arrivalAirport": "LAX",
    "aircraftType": "Boeing 737"
  },
  "UA456": {
    "departureTime": "1:00 PM",
    "arrivalTime": "3:00 PM",
    "departureAirport": "ORD",
    "arrivalAirport": "LAX",
    "aircraftType": "Airbus A320"
  },
  "DL789": {
    "departureTime": "6:00 AM",
    "arrivalTime": "9:00 AM",
    "departureAirport": "ATL",
    "arrivalAirport": "LAX",
    "aircraftType": "Boeing 757"
  },
  "WN234": {
    "departureTime": "8:00 PM",
    "arrivalTime": "10:00 PM",
    "departureAirport": "LAS",
    "arrivalAirport": "LAX",
    "aircraftType": "Boeing 737"
  },
  "AS567": {
    "departureTime": "11:00 AM",
    "arrivalTime": "1:00 PM",
    "departureAirport": "SEA",
    "arrivalAirport": "LAX",
    "aircraftType": "Airbus A321"
  },
  "B6123": {
    "departureTime": "2:00 PM",
    "arrivalTime": "4:00 PM",
    "departureAirport": "JFK",
    "arrivalAirport": "LAX",
    "aircraftType": "Embraer E190"
  },
  "NK456": {
    "departureTime": "5:00 PM",
    "arrivalTime": "7:00 PM",
    "departureAirport": "ORD",
    "arrivalAirport": "LAX",
    "aircraftType": "Airbus A320"
  },
  "F9789": {
    "departureTime": "9:00 AM",
    "arrivalTime": "11:00 AM",
    "departureAirport": "ATL",
    "arrivalAirport": "LAX",
    "aircraftType": "Boeing 737"
  },
  "G4123": {
    "departureTime": "3:00 PM",
    "arrivalTime": "5:00 PM",
    "departureAirport": "LAS",
    "arrivalAirport": "LAX",
    "aircraftType": "Embraer E175"
  },
  "HA567": {
    "departureTime": "7:00 AM",
    "arrivalTime": "10:00 AM",
    "departureAirport": "HNL",
    "arrivalAirport": "LAX",
    "aircraftType": "Airbus A330"
  },
  "SY456": {
    "departureTime": "4:00 PM",
    "arrivalTime": "6:00 PM",
    "departureAirport": "MSP",
    "arrivalAirport": "LAX",
    "aircraftType": "Boeing 737"
  },
  "YX789": {
    "departureTime": "12:00 PM",
    "arrivalTime": "2:00 PM",
    "departureAirport": "ORD",
    "arrivalAirport": "LAX",
    "aircraftType": "Embraer E175"
  },
  "9E234": {
    "departureTime": "6:00 AM",
    "arrivalTime": "8:00 AM",
    "departureAirport": "JFK",
    "arrivalAirport": "LAX",
    "aircraftType": "Bombardier CRJ900"
  },
  "MQ567": {
    "departureTime": "9:00 AM",
    "arrivalTime": "11:00 AM",
    "departureAirport": "ORD",
    "arrivalAirport": "LAX",
    "aircraftType": "Embraer E175"
  },
  "OH456": {
    "departureTime": "2:00 PM",
    "arrivalTime": "4:00 PM",
    "departureAirport": "CLT",
    "arrivalAirport": "LAX",
    "aircraftType": "Bombardier CRJ700"
  },
  "YV789": {
    "departureTime": "5:00 PM",
    "arrivalTime": "7:00 PM",
    "departureAirport": "IAD",
    "arrivalAirport": "LAX",
    "aircraftType": "Embraer E175"
  },
  "CP123": {
    "departureTime": "11:00 AM",
    "arrivalTime": "1:00 PM",
    "departureAirport": "PHX",
    "arrivalAirport": "LAX",
    "aircraftType": "Embraer E175"
  },
  "ZW456": {
    "departureTime": "3:00 PM",
    "arrivalTime": "5:00 PM",
    "departureAirport": "MKE",
    "arrivalAirport": "LAX",
    "aircraftType": "Bombardier CRJ200"
  },
  "G7123": {
    "departureTime": "8:00 AM",
    "arrivalTime": "10:00 AM",
    "departureAirport": "SFO",
    "arrivalAirport": "LAX",
    "aircraftType": "Embraer E175"
  },
  "EV567": {
    "departureTime": "1:00 PM",
    "arrivalTime": "3:00 PM",
    "departureAirport": "IAH",
    "arrivalAirport": "LAX",
    "aircraftType": "Bombardier CRJ700"
  },
  "OO789": {
    "departureTime": "7:00 AM",
    "arrivalTime": "9:00 AM",
    "departureAirport": "DEN",
    "arrivalAirport": "LAX",
    "aircraftType": "Bombardier CRJ700"
  },
  "C5123": {
    "departureTime": "12:00 PM",
    "arrivalTime": "2:00 PM",
    "departureAirport": "CLE",
    "arrivalAirport": "LAX",
    "aircraftType": "Embraer E175"
  },
  "PT456": {
    "departureTime": "4:00 PM",
    "arrivalTime": "6:00 PM",
    "departureAirport": "PHL",
    "arrivalAirport": "LAX",
    "aircraftType": "Embraer E175"
  },
  "AX789": {
    "departureTime": "10:00 AM",
    "arrivalTime": "12:00 PM",
    "departureAirport": "STL",
    "arrivalAirport": "LAX",
    "aircraftType": "Embraer E175"
  },
  "ZW234": {
    "departureTime": "5:00 PM",
    "arrivalTime": "7:00 PM",
    "departureAirport": "MKE",
    "arrivalAirport": "LAX",
    "aircraftType": "Bombardier CRJ200"
  },
  "KS567": {
    "departureTime": "3:00 PM",
    "arrivalTime": "5:00 PM",
    "departureAirport": "LAX",
    "arrivalAirport": "ADQ",
    "aircraftType": "Saab 340"
  },
  "EM456": {
    "departureTime": "6:00 AM",
    "arrivalTime": "8:00 AM",
    "departureAirport": "LAX",
    "arrivalAirport": "MFR",
    "aircraftType": "Cessna 208"
  },
  "2O789": {
    "departureTime": "9:00 AM",
    "arrivalTime": "11:00 AM",
    "departureAirport": "HNL",
    "arrivalAirport": "LAX",
    "aircraftType": "Bombardier Q400"
  },
  "3M123": {
    "departureTime": "1:00 PM",
    "arrivalTime": "3:00 PM",
    "departureAirport": "SFO",
    "arrivalAirport": "LAX",
    "aircraftType": "ATR 72"
  },
  "5Y456": {
    "departureTime": "4:00 PM",
    "arrivalTime": "6:00 PM",
    "departureAirport": "ONT",
    "arrivalAirport": "LAX",
    "aircraftType": "Boeing 747"
  }
  // add more flight data here
};

let hover = {
  "Ad": clickable,
  "LAX": lax,
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

function lax(x, y){
  let highlight = document.getElementById("highlight");
  highlight.style.background = "#1FCA23"
  highlight.style.opacity = 1;
  highlight.style.border = "1px solid black"
  highlight.style.borderRadius = "50px"
  highlight.style.position = "absolute"
    highlight.style.left = 785*x_ratio + "px"
    highlight.style.top = 495 *y_ratio + "px"
    highlight.style.width = 17*x_ratio + "px"
    highlight.style.height= 17*y_ratio + "px"

}
function map(x, y) {
  change_cursor("grab")
  return
}


function change_cursor(text) {
  let image = document.getElementById("image")
  image.style.cursor = text
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
  console.log("scrolling")
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
document.addEventListener("wheel", trackScroll);

document.getElementById("image").style.zIndex = 0
document.getElementById("image").style.opacity = 1
