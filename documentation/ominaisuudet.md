# Ominaisuudet
### Mikä toimii?
 - Etusivulla 5 viimeisintä uutista listattuna, listauksessa näkyy
    --* Otsikko
    --* Ingressi
 - Uutisia voi tarkastella, jolloin näistä näkyy
    --* Otsikko
    --* Ingressi
    --* Varsinainen teksti
    --* Kuva (ei toimi Herokussa, eli taistelin turhaan monta tuntia tämän kanssa)
    --* Julkaisuaika ja kirjoittaja ovat olemassa, mutta eivät tällä hetkellä näy sivulla
 - Kirjoittajilla on oma sivunsa, jolla voi käydä tarkastelemassa kirjoittajia (ei toimi Herokussa)
    --* kuva
    --* Nimi
    --* Syntymäaika
    --* Kirjoitetut uutiset (toimivat linkkeinä)
 - Kategorioilla on oma sivunsa, josta näkee kaikkia kyseisen kategorian uutiset (toimivat linkkeinä)
 - Uutisia voi lisätä
 - Kirjoittajia voi lisätä
 - Kategorioita voi lisätä

 ### Mitä jäi uupumaan?
 - Sivusto ei kerää tilastoja uutisten lukijoista
 - Uutisten tarkennetussa näkymässä ei näy kirjoittajaa, kategorioita, eikä päivämäärää
    --* (Ovat kuitenkin olemassa ja näkyvät mm. Postmanilla tehdyllä kyselyllä)
 - Ainoa uutisten listaus on 5 viimeisintä + muissa näkymissä (kirjoittaja/kategoria), eli puuttuu siis toiminto selata kaikkia uutisia (REST -rajapinta kaikille kuitenkin löytyy)
 - Mitään ei voi poistaa :)
 - Testit (sori siitä)