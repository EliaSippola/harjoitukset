import pip._vendor.requests
import json

# get all possible data
def hae_kaikki(dir: str):

    # start year
    y = 1987
    while True:
        for i in range(1, 13):

            j = i+1

            # month syntax
            if i < 10:
                m1 = f"0{i}"
            else:
                m1 = i
            if j < 10:
                m2 = f"0{j}"
            elif j == 13:
                m2 = "01"
            else:
                m2 = j

            data = hae_kk(y, m1, m2)

            if data != None:
                d = f"{dir}/{y}{m1}-{m2}_data.json"
                with open(d, "w", encoding='utf8') as json_file:
                    json.dump(data, json_file, ensure_ascii=False)
            else:
                raise Exception('No more data found.')

        if y == 2025:
            return
        
        y += 1
            
def hae_kk(y, m1, m2):

    if m2 == "01":
        y2 = y+1
    else:
        y2 = y

    print(f"y -> {y}, y2 -> {y}, m1 -> {m1}, m2 -> {m2}")

    url = f"https://avoindata.prh.fi/bis/v1?totalResults=false&maxResults=1000&resultsFrom=0&businessLineCode=62&companyRegistrationFrom={y}-{m1}-01&companyRegistrationTo={y2}-{m2}-01"
    res = pip._vendor.requests.get(url)

    if res.status_code == 200 and res.text:
        data = res.json()
        return data
    else:
        return None

if __name__ == "__main__":
    json_valiaik = []
    hae_kaikki("./NoSQL/240131/data")
    print("\x1B[38;5;200msuccess!")