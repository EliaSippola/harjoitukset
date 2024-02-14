import pip._vendor.requests
import json
from datetime import date, datetime

def format_all(dir: str):
    temp = []

    with open(f"{dir}/all_data.json", "w") as json_file:
        pass

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

            d = f"{dir}/{y}{m1}-{m2}_data.json"
            with open(d, "r", encoding='utf8') as tied:
                temp = json.load(tied)
            
            res = temp["results"]

            for yritys in res:
                ytunn = yritys['businessId']
                data = get_data(ytunn)

                if data == None:
                    raise Exception("error in data")
                
                nimi = yritys['name']
                rekisterointipaiva = date.isoformat(datetime.strptime(yritys["registrationDate"], '%Y-%m-%d'))
                tietolinkki = yritys["detailsUri"]

                for dataRes in data["results"]:

                    json_valiaik = []

                    
                    if dataRes["businessId"] == ytunn:

                        nimiLista = []
                        for names in dataRes['names']:
                            if names["registrationDate"] == None:
                                nimiLista.append({"name": names["name"], "registrationDate": names["registrationDate"]})
                            else:
                                nimiLista.append({"name": names["name"], "registrationDate": date.isoformat(datetime.strptime(names["registrationDate"], '%Y-%m-%d'))})
                        
                        osoitteet = []
                        for osoite in dataRes["addresses"]:
                            if osoite['language'] == "FI" or osoite['language'] == None:
                                if osoite["registrationDate"] == None:
                                    osoitteet.append({"street": osoite["street"], "postCode": osoite["postCode"], "city": osoite["city"], "registrationDate": osoite["registrationDate"]})
                                else:
                                    osoitteet.append({"street": osoite["street"], "postCode": osoite["postCode"], "city": osoite["city"], "registrationDate": date.isoformat(datetime.strptime(osoite["registrationDate"], '%Y-%m-%d'))})

                        yritysmuodot = []
                        for yritysmuoto in dataRes["companyForms"]:
                            if yritysmuoto['language'] == "FI" or yritysmuoto['language'] == None:
                                if yritysmuoto["registrationDate"] == None:
                                    yritysmuodot.append({'name': yritysmuoto['name'], "registrationDate": yritysmuoto["registrationDate"]})
                                else:
                                    yritysmuodot.append({'name': yritysmuoto['name'], "registrationDate": date.isoformat(datetime.strptime(yritysmuoto["registrationDate"], '%Y-%m-%d'))})

                        yrityslinjat = []
                        for yrityslinja in dataRes["businessLines"]:
                            if yrityslinja['language'] == "FI" or yrityslinja['language'] == None:
                                if yrityslinja["registrationDate"] == None:
                                    yrityslinjat.append({'code': yrityslinja['code'] ,'name': yrityslinja['name'], "registrationDate": yrityslinja["registrationDate"]})
                                else:
                                    yrityslinjat.append({'code': yrityslinja['code'] ,'name': yrityslinja['name'], "registrationDate": date.isoformat(datetime.strptime(yrityslinja["registrationDate"], '%Y-%m-%d'))})

                        kielet = []
                        for kieli in dataRes["languages"]:
                            if kieli['language'] == "FI" or kieli['language'] == None:
                                if kieli["registrationDate"] == None:
                                    kielet.append({'name': kieli['name'], "registrationDate": kieli["registrationDate"]})
                                else:
                                    kielet.append({'name': kieli['name'], "registrationDate": date.isoformat(datetime.strptime(kieli["registrationDate"], '%Y-%m-%d'))})
                        
                        toimistot = []
                        for toimisto in dataRes["registedOffices"]:
                            if toimisto['language'] == "FI" or toimisto['language'] == None:
                                if toimisto["registrationDate"] == None:
                                    toimistot.append({'name': toimisto['name'], "registrationDate": toimisto["registrationDate"]})
                                else:
                                    toimistot.append({'name': toimisto['name'], "registrationDate": date.isoformat(datetime.strptime(toimisto["registrationDate"], '%Y-%m-%d'))})
                        
                        yhteystiedot = []
                        for yhteystieto in dataRes["contactDetails"]:
                            if yhteystieto['language'] == "FI" or yhteystieto['language'] == None:
                                if yhteystieto["registrationDate"] == None:
                                    yhteystiedot.append({'type': yhteystieto['type'],'value': yhteystieto['value'] ,"registrationDate": yhteystieto["registrationDate"]})
                                else:
                                    yhteystiedot.append({'type': yhteystieto['type'],'value': yhteystieto['value'] ,"registrationDate": date.isoformat(datetime.strptime(yhteystieto["registrationDate"], '%Y-%m-%d'))})
                        
                        tiedot = {
                            'bussinesID': ytunn,
                            'name': nimi,
                            'otherNames': nimiLista,
                            'registrationDate': rekisterointipaiva,
                            'adresses': osoitteet,
                            'contactDetails': yhteystiedot,
                            'registeredOffices': toimistot,
                            'companyForms': yritysmuodot,
                            'bussinessLines': yrityslinjat,
                            'languages': kielet,
                            'detailsUri': tietolinkki
                        }

                        json_valiaik.append(tiedot)

                        with open(f"{dir}/all_data.json", "a", encoding='utf8') as json_file:
                            json.dump(json_valiaik, json_file, ensure_ascii=False, indent=4)

                    else:
                        print("No more data found")
                        
            print(f"{m1}-{m2} {y}")

        if y == 2025:
            return
        
        y += 1

def get_data(ytunn):
    url = f"http://avoindata.prh.fi/opendata/bis/v1/{ytunn}"
    res = pip._vendor.requests.get(url)

    if res.status_code == 200 and res.text:
        data = res.json()
        return data
    else:
        return None

if __name__ == "__main__":
    format_all("./NoSQL/240131/data")
    print("\x1B[38;5;200msuccess!")