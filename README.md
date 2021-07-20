# plex-library-html
WWW Frontend viewer of Plex's Library.

This uses PHP for API and Javascript for the frontend

### DEMO: [https://myplex.rsrl.eu/](https://myplex.rsrl.eu/)

## How to set up
- edit `api/settings.php` and change the settings there
> Make sure you have Plex accessible through the internet if you want to make this public

> If you have trouble finding the plex token, look here: https://support.plex.tv/articles/204059436-finding-an-authentication-token-x-plex-token/
- store the website files in a PHP hosting, min version: 5.4

## Is this secure?
- Yes. The API was developed behind PHP which is a backend programming language, no one accessing the website will get more data than this allows.

## Which data the API returns from my Plex?
- Only basic information, the list of your libraries, all movies and tvshows from them and respective information. Basically, only the information displayed on the frontend.

## Can I customize Home page?
- Sure! In `index.html` just edit what's inside `<app-container>` tag