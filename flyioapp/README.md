# flyioapp | fly.io nettisivu

Tämä nettisivu on tehty testimielessä [fly.io](https://fly.io/) ja [flyctl](https://fly.io/docs/hands-on/install-flyctl/) ympäristöjä käyttäen. Sovelluksen pohjana on [NodeJS](https://nodejs.org/en) ja [Express](https://expressjs.com/).

Tässä ohjeessa kerrotaan miten tämä sovellus käynnistetään fly.iossa, ja miten sovellusta voi jatkokehittää.

## 1 Sovelluksen sisältö

Sovellus on yksinkertainen sivusto, jolla on yksi sivu juurikansiossa ('/').
Sivusto avaa nettisivun portilla 3030.

Sovellus näyttää sivustolla ainoastaan merkkijonon `Seeking truths beyond meaning of life, you will find 43.` .

## 2 Käyttöönotto

### 2.1 vaatimukset

- [NodeJS & npm](https://nodejs.org/en/download/current)
- [docker desktop](https://www.docker.com/products/docker-desktop/)
- [flyctl](https://fly.io/docs/hands-on/install-flyctl/) (ei pakollinen paikallisessa käytössä)

### 2.2 Riippuvuudet

Projekti käyttää tällä hetkellä npm paketteja
- [express](https://expressjs.com/)
- [dotenv (.env)](https://www.npmjs.com/package/dotenv)
- [nodemon](https://www.npmjs.com/package/nodemon) (ei pakollinen)

### 2.3 paikallinen käyttöönotto

Sivuston voi käynnistää paikallisesti ilman tarvetta tuoda sivustoa fly.io alustalle.

Sivuston käynnistämiseen käytetään NodeJSää. Varmista että node on asennettu tietokoneen PATH -ympäristöön (kokeile `node -v`)

1. Avaa komentokehote sivuston juureen
2. varmista että kaikki riippuvuudet on asennettu käyttämällä `npm install` komentoa
3. Käytä komentoa `node app.js` tai `npm run nodemon`

- komento `node app.js` käynnistää verkkosivun manuaalisesti. Muutoksia lähdekoodiin ei huomioida.

- komento `npm run nodemon` käynnistää nodemonin avulla verkkosivun (huomaa [package.json](/flyioapp/package.json) tiedoston scripti). Lähdekoodin muutokset muuttavat verkkosivua automaattisesti.

Sivusto avautuu osoitteeseen [http://localhost:3030](http://localhost:3030)

### 2.4 fly.io käyttöönotto

Sivuston voi myöskin avata internettiin fly.io palvelun avulla. **Huomaa, että sinulla tulee olla fly.io käyttäjä luotuna. Käyttäjän luontiin vaaditaan pankkikortti.**

*komennon `flyctl` sijasta myös komento `fly` saattaa toimia terminaalissa.*
```
# esim
flyctl logs === fly logs
```

Ennen fly.io käyttöönottoa varmista, että [flyctl](https://fly.io/docs/hands-on/install-flyctl/) on asennettu kokeilemalla komentoa `flyctl`

#### 2.4.1 Flyctl kirjautuminen

Kirjaudu sisään komennolla `flyctl auth login`

Kirjaudu sisään fly.io tunnuksillasi avautuvaan ikkunaan.

#### 2.4.2 fly.io apin luominen

**Huomaa, että sinulla voi olla vain 3 appia kerrallaan, jos haluat että fly.io pysyy ilmaisena!**

1. Avaa terminaali projektin juureen (flyioapp juureen).

2. Käytä komentoa `flyctl launch`, ja seuraa terminaalin ohjeita.

*voit myös käyttää komentoa `flyctl apps create`, joka luo tyhjän apin. Huomaa, että käyttämällä komentoa `flyctl launch`, `flyctl` pyrkii tekemään kaikki fly.io vaatimukset automaattisesti. Jos käytät komentoa `flyctl apps create`, appi ei välttämättä toimi odotetusti.*

*Huomaa, että fly.io appien nimet ovat globaalisti uniikkeja. Kenelläkään ei saa olla samannimistä appia.*

3. Vaihda sovelluksen nimi tiedostossa [fly.toml](/flyioapp/fly.toml).

sovelluksen nimi löytyy kohdasta `app`, joka on ensimmäisellä rivillä

esimerkiksi:
```
app = "jopec305-03-flyioapp"
```
kun sovelluksen nimenä on `jopec305-03-flyioapp`

#### 2.4.3 fly.io apin julkaisu

Ennen apin julkaisua, varmista että sinulla on appi dashboardilla fly.io -sivustolla.

1. käytä komentoa `flyctl deploy`.

Jos komento menee läpi onnistuneesti, sivustosi tulisi olla toiminnassa.
Voit avata sivuston fly.iosta tai terminaalissa näkyvällä osoitteella.

Osoite koostuu appisi nimestä, ja `fly.dev` päätteestä.

## 3 ylläpito

fly.io -sivusto antaa vain rajatun määrän resursseja ilmaiseksi. Huomaa, että sinulla voi olla vain 3 appia samaan aikaan jos haluat käyttää palvelua ilmaiseksi.

voit nähdä sovelluksen lokit joko fly.io -sivustolla avaamalla apin, tai komennolla `flyctl logs` terminaalissa.

Käytä sovelluksen debuggaamiseen komentoja `flyctl doctor` ja `flyctl status`, jotka kertovat lisätietoja toiminnasta.

Sovellus käyttää noden versiota `20.10.0`, ja npm versiota `10.2.3`

## 4 päivitykset ja muutokset

Voit päivittää fly.io sovellusta käyttämällä komentoa `flyctl deploy`. Muutokset kannattaa käydä läpi paikallisesti ennen niiden lähettämistä fly.io palvelimelle, sillä palvelimelle siirtäminen kestää jonkin aikaa.