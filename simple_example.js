function wait(ms){
    var start = new Date().getTime();
    var end = start;
    while(end < start + ms) {
      end = new Date().getTime();
   }
 }
const tello = require('tellojs')

const x = 25,
    y = 15,
    z = 15,
    speed = 15,
    yaw = 15,
    start = {x, y, z},
    end = {x, y, z},
    ssid = "pilot112220",
    password = "tellopilot"

//CONTROL COMMANDS
tello.control.connect()                     // Enter SDK mode.
tello.control.takeOff()                     // Auto takeoff.
                        // Hovers in the air
tello.control.move.up(x)  
// wait(3000);                  // Ascend to “x” cm.
tello.control.move.down(x) 
tello.control.move.left(x)                 // Descend to “x” cm.
tello.control.land()                        // Auto landing.
tello.control.emergency()                   // Stop motors immediately
tello.control.stop()
// sdk.control.move.left(x)                  // move left to “x” cm.
// sdk.control.move.right(x)                 // move right to “x” cm.
// sdk.control.move.front(x)                 // move forward to “x” cm.
// sdk.control.move.back(x)                  // move backwards to “x” cm.
// // sdk.control.move.go(end, speed)           //  fly to x y z in speed (cm/s)
// // sdk.control.move.curve(start, end, speed) //  fly to x y z in speed (cm/s)
// sdk.control.rotate.clockwise(x)           // rotate clockwise 'x' degrees.
// sdk.control.rotate.counterClockwise(x)    // rotate counter clockwise 'x' degrees.
// sdk.control.flip.left()                   // Flip to the left.
// sdk.control.flip.right()                  // Flip to the right.
// sdk.control.flip.back()                   // Flip in backward.
// sdk.control.flip.front()                  // Flip in forward.
// // COMMANDS
// sdk.set.speed(x)                          // set speed to x cm/s
// sdk.set.rc(x, y, z, yaw)                  // Send RC control via four channels.
// sdk.set.wifi(ssid, password)              // Set Wi-Fi with SSID password
// //  COMMANDS
// sdk.read.speed()                          // Obtain current speed (cm/s).
// sdk.read.battery()                        // Obtain current battery percentage.
// sdk.read.time()                           // Obtain current flight time.
// sdk.read.height()                         // Obtain get height (cm)
// sdk.read.temperature()                    // Obtain temperature (°C)
// sdk.read.attitude()                       // Obtain IMU attitude data
// sdk.read.barometer()                      // Obtain barometer value (m)
// sdk.read.tof()                            // Obtain distance value from TOF（cm）
// sdk.read.acceleration()                   // Obtain IMU angular acceleration data (0.001g)
tello.read.wifi()                           // Obtain Wi-Fi SNR.

//STREAM STATE
const stateEmitter = tello.receiver.state.bind()  // Binding to port of state
stateEmitter.on('message', res => console.log)  // React to messages on received
tello.receiver.state.close()                      // Stop receiving messages

//STREAM VIDEO
// const videoEmitter = sdk.receiver.video.bind()  // Binding to port of video
// videoEmitter.on('message', res => console.log)  // React to messages on received
// sdk.receiver.video.close()                      // Stop receiving messages

/*
Example output of state:
{ 
    pitch: 1,
    roll: 0,
    yaw: 0,
    speed: { x: 0, y: 0, z: 0 },
    temperature: { low: 51, high: 53 },
    tof: 6553,
    heigh: 0,
    battery: 87,
    barometer: 24.65,
    time: 0,
    acceleration: { x: 16, y: 3, z: -990 } 
}

Example output of video: is binary ;)
*/
