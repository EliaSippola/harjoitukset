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

def preSortListV2():
    # read file
    start = timer()
    with open("./harjoitukset/python/unsorted.txt", "r") as file:
        str = file.read()

    l = []
    for i in str[:len(str)-1].split(";"):
        l.append(int(i))
    end = timer()
    print("File read:", end-start)

    # presort
    start = timer()
    length = len(l)

    minimum = l[0]
    maximum = minimum

    for item in l:
        if (minimum > item):
            minimum = item
        if (maximum < item):
            maximum = item

    k = (maximum-minimum) / (length-1)
    i = 0
    end = timer()
    print("setup",end-start)

    start = timer()
    # wait till ready
    while True:
        # check index of current item
        index = int((l[i]-minimum)/k)

        # check if indexes match with current (it's a loop)
        if (i == index):
            # move to next item
            i += 1

            # check if we are at end
            if (i == (length)):
                break

        # switch items at current indexes
        #l[i] = l[i] + l[index] # 10 + 8 = 18
        #l[index] = l[i] - l[index] # 18 - 8 = 10
        #l[i] = l[i] - l[index] # 18 - 10 = 8
        l[i], l[index] = l[index], l[i]

    end = timer()
    print("preSortV2:", end-start)

    start = timer()
    str = ""
    for item in l:
        str += f"{item};"

    with open("./harjoitukset/python/sorted.txt", "w") as file:
        file.write(str)
    end = timer()
    print("File write:", end-start)

    return

def preSortListV3():
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

    minimum = min(l)
    maximum = max(l)
    
    k = (maximum-minimum) / (length-1)

    #newList = list(range(length))
    newList = [0] * length

    end = timer()
    print("Setup:", end-start)

    start = timer()
    # predict where item will be in list
    for i in range(0,length):
        newList[int((l[i]-minimum)/k)] = l[i]

    end = timer()
    print("Predictions:", end-start)

    start = timer()
    str = ""
    for item in newList:
        str += f"{item};"

    with open("./harjoitukset/python/sorted.txt", "w") as file:
        file.write(str)
    end = timer()
    print("File write:", end-start)

    return

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
    l = list(range(-1,1000000))
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

    print("---\nPresortV1:")
    start = timer()
    preSortList()
    end = timer()
    print("---\npresort full time:", end - start,"\n---")

    checkSorted()

    print("---\nPresortV2:")
    start = timer()
    preSortListV2()
    end = timer()
    print("---\npresortV2 full time:", end - start,"\n---")

    checkSorted()

    print("---\nPresortV3:")
    start = timer()
    preSortListV3()
    end = timer()
    print("---\npresortV3 full time:", end - start,"\n---")

    checkSorted()

    print("---\nNormal sort:")
    start = timer()
    normalsort()
    end = timer()
    print("---\nNormal Sort full time:", end - start,"\n---")
