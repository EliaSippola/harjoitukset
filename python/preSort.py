import copy
import math
import random
from timeit import default_timer as timer

def preSortList():

    start = timer()
    with open("./harjoitukset/python/unsorted.txt", "r") as file:
        str = file.read()

    l = []
    for i in str[:len(str)-1].split(";"):
        l.append(int(i))
    end = timer()
    print("File read:", end-start)

    start = timer()
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
    end = timer()
    print("Setup:", end-start)

    start = timer()
    # predict where item will be in list
    for i in range(0,length):
        index = math.floor((l[i]-minimum)/k)

        if (newList[index] == minimum - 1):
            newList[index] = l[i]
            #print(l[i], "->", index)
        elif (newList[index] > l[i]):
            if (0 == index):
                #print(l[i], ">", index, "up")
                loopTillMatch(newList, True, index, l[i], length, minimum)
            else:
                #print(l[i], ">", index, "down")
                loopTillMatch(newList, False, index, l[i], length, minimum)
        else:
            if (length == index):
                #print(l[i], ">", index, "down")
                loopTillMatch(newList, False, index, l[i], length, minimum)
            else:
                #print(l[i], ">", index, "up")
                loopTillMatch(newList, True, index, l[i], length, minimum)

        #print(newList)

    # for fixing errors in list
    #for i in range(0, len(newList)):
    #    if (i == len(newList) - 1):
    #        break
    #    else:
    #        if (newList[i] > newList[i+1]):
    #            newList[i], newList[i+1] = newList[i+1], newList[i]
    end = timer()
    print("Predictions:", end-start)

    start = timer()
    #while True:
    #    last = minimum-1
    #    stop = True
    #    for i in range(0,length):
    #        if (last <= l[i]):
    #            last = copy.copy(l[i])
    #        else:
    #            #print(item, l[i])
    #            item, l[i] = last, l[i]
    #            stop = False
    #    print(stop)
    #    if stop:
    #        break
    end = timer()
    print("check:", end-start)

    start = timer()
    str = ""
    for item in newList:
        str += f"{item};"

    with open("./harjoitukset/python/sorted.txt", "w") as file:
        file.write(str)
    end = timer()
    print("File write:", end-start)

    return

def loopTillMatch(newList, up, i, value, length, minimum):
    i2 = copy.copy(i)
    val = copy.copy(value)
    length = length-1
    try:
        while True:
            if (newList[i2] == minimum-1):
                newList[i2] = val
                #print(val, "->", i2)
                break
            elif (newList[i2] > val):
                if (i2 == length):
                    up = False
                else:
                    up = True
                    newList[i2], val = val, newList[i2]
            elif (newList[i2] < val):
                if (i2 == 0):
                    up = True
                else:
                    up = False
                    newList[i2], val = val, newList[i2]

            #print("up:" , up, "i:", i2, "val:", val)

            if (up):
                if (i2 >= length):
                    i2 -= 1
                    up = False
                else:
                    i2 += 1
            else:
                if (i2 <= 0):
                    i2 += 1
                    up = True
                else:
                    i2 -= 1

    except IndexError:
        print("error:")
        print(newList, up, i, val, length, minimum)

def normalsort():
    start = timer()
    with open("./harjoitukset/python/unsorted.txt", "r") as file:
        str = file.read()

    l = []
    for i in str[:len(str)-1].split(";"):
        l.append(int(i))
    end = timer()
    print("file read:", end-start)

    start = timer()
    l.sort()
    end = timer()
    print("sort:", end-start)

    start = timer()
    str = ""
    for item in l:
        str += f"{item};"

    with open("./harjoitukset/python/sorted.txt", "w") as file:
        file.write(str)
    end = timer()
    print("file write:", end-start)

    return

def easyList():
    l = list(range(11,1000000))
    random.shuffle(l)
    setUnsorted(l)

def harderList():
    l = []
    for i in range(0, 10000):
        l.append(random.randint(0,10000))
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

def checkSorted():

    with open("./harjoitukset/python/sorted.txt", "r") as file:
        str = file.read()

    l = []
    for i in str[:len(str)-1].split(";"):
        l.append(int(i))

    last = -1
    for item in l:
        if (last > item):
            print("not sorted!: ", last, "!<=", item)
        last = copy.copy(item)
            

if __name__ == "__main__":
    #harderList()
    easyList()

    print("Presort:")
    start = timer()
    preSortList()
    end = timer()
    print("presort:", end - start)

    checkSorted()

    print("Normal sort:")
    start = timer()
    normalsort()
    end = timer()
    print("sort():", end - start)
