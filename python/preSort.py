import json
import math
import random

def preSortList():

    with open("./harjoitukset/python/unsorted.txt", "r") as file:
        str = file.read()

    l = []
    for i in str[:len(str)-1].split(";"):
        l.append(int(i))

    length = len(l)

    minimum = l[0]
    maximum = minimum

    for item in l:
        if (minimum > item):
            minimum = item
        if (maximum < item):
            maximum = item
    
    k = (maximum-minimum) / length + 1/maximum
    print("k:",k)

    newList = []

    for i in range(0,length):
        newList.append(minimum-1)

    # predict where item will be in list
    for i in range(0,length):
        index = math.floor((l[i]-minimum)/k)

        if (newList[index] == minimum - 1):
            newList[index] = l[i]
        elif (newList[index] == l[i]):
            loopTillMatch(newList, True, i, l[i], length, minimum)
        
        elif (newList[index] > l[i]):
            val = l[i]
            if (0 == i):
                loopTillMatch(newList, True, i, val, length, minimum)
            else:
                loopTillMatch(newList, False, i, val, length, minimum)
        else:
            val = l[i]
            if (length == i):
                loopTillMatch(newList, False, i, val, length, minimum)
            else:
                loopTillMatch(newList, True, i, val, length, minimum)

    # for fixing errors in list
    #for i in range(0, len(newList)):
    #    if (i == len(newList) - 1):
    #        break
    #    else:
    #        if (newList[i] > newList[i+1]):
    #            newList[i], newList[i+1] = newList[i+1], newList[i]

    str = ""
    for item in newList:
        str += f"{item};"

    with open("./harjoitukset/python/sorted.txt", "w") as file:
        file.write(str)

    return

def loopTillMatch(newList, up, i, val, length, minimum):
    length = length-1
    try:
        while True:
            if (newList[i] == minimum-1):
                newList[i] = val
                break
            elif (newList[i] > val):
                up = True
                newList[i], val = val, newList[i]
            elif (newList[i] < val):
                up = False
                newList[i], val = val, newList[i]

            if (up):
                if (length >= i):
                    i -= 1
                    up = False
                else:
                    i += 1
            else:
                if (0 >= i):
                    i += 1
                    up = True
                else:
                    i -= 1
    except IndexError:
        print("error:")
        print(newList, up, i, val, length, minimum)

def easyList():
    l = list(range(1,1000000))
    random.shuffle(l)
    setUnsorted(l)

def harderList():
    l = []
    for i in range(0, 5):
        l.append(random.randint(0,10))
    setUnsorted(l)

def presetList():
    l = [3,9,8,8,10]
    setUnsorted(l)

def setUnsorted(l):

    str = ""
    for item in l:
        str += f"{item};"

    with open("./harjoitukset/python/unsorted.txt", "w") as file:
        file.write(str)

if __name__ == "__main__":
    harderList()
    preSortList()
