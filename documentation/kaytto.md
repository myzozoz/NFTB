# Käyttö
- Sovellus koostuu (toistaiseksi) yhteensä neljästä sivusta: /news, /writer, /category ja /manage
- Kun mennään sovelluksen oletusosoitteeseen <https://nftb.herokuapp.com>, avataan etusivuna uutissivu /news
    --* sivulla näkyy viisi tuoreinta uutisjuttua
    --* sivun ylälaidassa näkyy kategoriat
    --* uutista klikkaamalla latautuu kategorioiden ja uutislistan väliin itse "juttu"
    --* kuva ei toimi Herokun versiossa, mutta itse uutinen toimii (omalla koneella kuvat toimivat hienosti)
- /writer -osiossa pääsee tarkastelemaan kirjoittajia
    --* jostain syystä ei toimi kunnolla Herokussa. (Aiheesta enemmän myöhemmin, omalla koneella toimii hienosti)
    --* ideana hyvin samanlainen, kuin uutiset
    --* kun sivu aluksi ladataan, näytetään lista kirjoittajista sivun keskellä ja ylälaidassa kategoriat
    --* kirjoittajaa voi klikata, jolloin aukeaa listan ja kategorioiden väliin tarkennettu näkymä kyseisestä kirjoittajasta (ei toimi)
    --* kirjoittajan tiedoissa näkyy kuva, nimi, syntymäpäivä ja lista kirjoitetuista artikkeleista
    --* artikkeleita voi klikata, jolloin päästään takaisin /news -sivulle niin, että valittu artikkeli on suoraan auki (huraa)
- /category -sivulla näkee kaikki kategoriat
    --* Jos tulit sivulle painamalla yläpalkin nappia, näytetään suoraan tämän kategorian tiedot
    --* muuten saa kategoriaa klikkaamalla nähdä sen kategorian uutiset
- /manage -sivulla pääsee lisäämään uutisia, kirjoittajia ja kategorioita
    --* Add writer -> pääsee lisäämään kirjoittajia
    --* Add category -> pääsee lisäämään kategorioita
    --* Add article - pääsee lisäämään uutisartikkelin
    --* artikkelia lisätessä pääsee liittämään artikkeliin kirjoittajia ja kategorioita
    --* edellyttää, että kirjoittajat ja kategoriat on lisätty ennen, kuin avataan "add article" -lomake (hädän hetkellä refresh auttaa, mutta kadottaa)
    --* artikkelin lisääminen vie suoraan artikkelin sivulle