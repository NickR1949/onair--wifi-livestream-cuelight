from blinkt import set_pixel, set_brightness, show, clear
import time

####
#Status lights -
#PreFlight:
#  0:Config.json missing
#  1:ip config invalid
#  2
#Status:
# 0:Uninitialised
#  1:Offline
#  2:Standby
#  3:start Countdown
#  4:10Sec
#  5:Pause
#  6: 5Sec
#  7: 2Sec
#  8: Go Onair
#  9: Onair
#####
MAXLIGHT = 9

Colours = {
            "RED":[155,0,0],
            "LRED":[50,0,0],
            "GRN":[0,100,0],
            "BLU":[0,0,100],
            "YEL":[100,30,0],
            "MAG":[50,0,100]
           }
    
displayReg = [[0,0,0],
              [0,0,0],
              [0,0,0],
              [0,0,0],
              [0,0,0],
              [0,0,0],
              [0,0,0],
              [0,0,0]]

statusColours = [["BLU","GRN","BLU","GRN","BLU","GRN","BLU","GRN"],
                ["GRN","GRN","GRN","GRN","GRN","GRN","GRN","GRN"],
                ["YEL","YEL","YEL","YEL","YEL","YEL","YEL","YEL"],
                ["YEL","YEL","RED","MAG","MAG","RED","YEL","YEL"],
                ["YEL","YEL","YEL","YEL","YEL","YEL","RED","RED"], 
                ["YEL","YEL","YEL","YEL","RED","RED","YEL","YEL"],
                ["YEL","YEL","RED","RED","YEL","YEL","YEL","YEL"],
                ["RED","RED","YEL","YEL","YEL","YEL","YEL","YEL"],
                ["RED","RED","RED","RED","RED","RED","RED","RED"],
                ["LRED","LRED","LRED","LRED","LRED","LRED","LRED","LRED"]]


def displayClear(bright):
    clear()
    set_brightness(bright)
    for x, displayR in enumerate(displayReg):
        displayReg[x] = [0,0,0]
    show()

def setStatus(status):
    print("status = "+ str(status))
    lightList = statusColours[status]
    for i in range(0,8):
        displayReg[i] = Colours[lightList[i]]
    for i ,displayR in enumerate(displayReg):
        if not displayReg[i] == [0,0,0]:
            set_pixel(i, displayReg[i][0],displayReg[i][1],displayReg[i][2])
    show()
     
            
  

def setError(preFlight):
    displayReg[preFlight] = Colours["RED"]
    for i ,displayR in enumerate(displayReg):
        if not displayReg[i] == [0,0,0]:
            set_pixel(i, displayReg[i][0],displayReg[i][1],displayReg[i][2])
    show()
    time.sleep(10)
 


#setStatus(0)
