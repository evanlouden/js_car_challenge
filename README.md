# js_car_challenge
Javascript Car Challenge

Write a short, simple program which simulates 3 cars on a road and a stoplight.  Each car is either moving at full speed, which is one unit per second, or it is stopped because of the stoplight.  The stoplight is either green or red.  If a car is at the same position as the stoplight (i.e. 50), and the stoplight is red, the car stops until the light turns green.  You can assume that cars can occupy the same space without regard for each other.

The cars initially start at positions 24, 12, and 0. The stoplight is at position 50, is initially green, and switches every 10 seconds.

Your program should simulate 100 seconds of operation.  For each second, it should print out a line with the second number, the state of the stoplight and the positions of all three cars. The 'seconds' are simulated, and they can advance through a mechanism of your choosing (eg clicking a button, interval timer, keystroke, etc)

Example output will be twofold:
1: Show the page updating to indicate the car position, light color, etc. Don't worry too much about the look of the cars on screen, but bonus points for lanes and styling on the visuals
2: Textual output as described above.  For example:
S   Light    c1 c2 c3
0   Green 24 12  0
1   Green 25 13  1
2   Green 26 14  2
etc...
