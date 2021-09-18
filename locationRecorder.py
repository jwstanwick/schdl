import sys

def recordLocation(address, nickname): #This function records the location that is put into it
    f=open('commonLocations.txt', 'a')
    f.write('\n' + address + ' | ' + nickname)
    f.close
addy = sys.argv[1]
nick = sys.argv[2]

recordLocation(addy, nick)