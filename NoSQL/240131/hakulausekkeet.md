1. Etsi yritykset, jotka sijaitsevat Helsingissä.

`db.Suomenohjelmistoyritystiedot.find({"Kaupunki":"HELSINKI"});`

2. Hae yritykset, joiden nimi alkaa kirjaimilla "A".

`db.Suomenohjelmistoyritystiedot.find({"Nimi":{$regex:"^A.*"}});`

3. Etsi yritykset, jotka tarjoavat mobiilisovelluskehityspalveluja eli yrityksen nimessä voisi olla mobile tms. lyhenne.

`db.Suomenohjelmistoyritystiedot.find({"Nimi":{$regex:".*mobile.*", $options:"i"}});`

4. Hae yritykset, jotka toimivat sekä Kuopiossa.

`db.Suomenohjelmistoyritystiedot.find({"Kaupunki":"KUOPIO"});`

5. Etsi yritykset, joiden rekisteröintipäivä on ennen vuotta 2010.

`db.Suomenohjelmistoyritystiedot.find({"Rekisterointi_pvm":{$lt:ISODate("2010-01-01")}});`

7. Etsi yritykset, jotka tarjoavat pilvipalveluiden konsultointipalveluja. eli yrityksen nimessä voisi olla cloud tms. lyhenne.

`db.Suomenohjelmistoyritystiedot.find({"Nimi": {$regex: ".*cloud.*", $options: "i"}});`

8. Etsi yritykset, joiden palveluihin kuuluu "web-suunnittelu" eli yrityksen nimessä voisi olla web tms. lyhenne.

`db.Suomenohjelmistoyritystiedot.find({"Nimi": {$regex: "(.*web.*|.*design.*)", $options: "i"}});`

9. Hae yritykset, jotka toimivat Tampereella.

`db.Suomenohjelmistoyritystiedot.find({"Kaupunki":"TAMPERE"});`

10. Hae yritykset, jotka ovat rekisteröityneet viimeisen vuoden aikana. Lisähaaste tehtävään. Miten ottasit kyselyyn mukaan kyselyn ajopäivän ja sitä kautta ko. vuoden hakuehdoksi.

`db.Suomenohjelmistoyritystiedot.find({"Rekisterointi_pvm":{$gte: new Date("2023-01-31")}});`

11. Hae yritykset, joiden palveluihin kuuluu "tekoälykehitys" eli yrityksen nimessä voisi olla AI (=artificial intelligense) tms.

`db.Suomenohjelmistoyritystiedot.find({"Nimi":{$regex: ".* AI .*", $options: "i"}})`

12. Hae yritykset, jotka tarjoavat palveluita "ohjelmistotestaus" tai "software testing".

`db.Suomenohjelmistoyritystiedot.find({"Toimiala": {$regex: ".*ohjelmistokonsultointi"}});`

13. Etsi yritykset, jotka sijaitsevat Joensuussa.

`db.Suomenohjelmistoyritystiedot.find({"Kaupunki":"JOENSUU"});`


14. Etsi yritykset, jotka ovat perustettu ennen vuotta 2005.

`db.Suomenohjelmistoyritystiedot.find({"Rekisterointi_pvm":{$lt:new Date("2005-01-01")}});`

15. Etsi yritykset, joiden puhelinnumero ei ole saatavilla.

`db.Suomenohjelmistoyritystiedot.find({"Yhteystiedot":{$regex: "(^\s*$|^w{3}.*$|^http.*$)"}})`

16. Hae yritykset, joiden nimessä on "Soft" tai "software" -teksti.

`db.Suomenohjelmistoyritystiedot.find({"Yhteystiedot":{$regex: ".*soft.*"}})`

tai

`db.Suomenohjelmistoyritystiedot.find({"Yhteystiedot":{$regex: "(.*Soft.*|.*software.*)"}})`

jos halutaan olla tarkkoja

17. Etsi yritykset, joiden rekisteröintipäivä on tasan 5 vuotta sitten. Lisähaaste tehtävään. Miten ottasit kyselyyn mukaan kyselyn ajopäivän ja siitä aina 5 vuotta taaksepäin?

`db.Suomenohjelmistoyritystiedot.find({"Rekisterointi_pvm":new Date("2014-01-31")});`

18. Hae yritykset, jotka tarjoavat "verkkomarkkinointi" -palveluita.



19. Mieti järkeviä käyttö- ja soveltamiskohteita PRH:n avoimelle datalle erilaisissa ohjelmistoissa.



20. Miten hakisit yritykset, jotka ovat rekisteröity jollekin muulle toimialalle kuin ohjelmistojen kehittäminen, mutta niillä voi kuitenkin olla silti omaa ohjelmistokehitystä.

