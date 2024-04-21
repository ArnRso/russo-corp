# Projet RUSSO CORP

## Initialisation

Pour lancer le projet, vous devez coller le fichier `.env.(votre-prénom)` à la racine du dossier.
Il devra être renommé en `.env`. Ce fichier contient un token CloudFlare Tunnel ainsi que les URLs du front et de l'api.

## Commandesz

### Allumer / redémarrer le projet
Pour lancer le projet, il vous suffit de le cloner, puis, à la racine du dossier, de faire :
```bash
docker compose build --no-cache && docker compose up -d
```
Vous n'avez pas besoin de lancer de `npm install` ou de `npm run dev`, l'image docker s'en charge elle même. 

Vous devrez lancer cette commande dans les cas suivants : 
- Vous commencez votre session de travail
- Vous avez fait un changement de branche
- Vous avez installé de nouvelles dépendances dans le back ou dans le front

### Arrêter le projet
Pour arrêter le projet, il vous suffit de faire :
```bash
docker compose down -t 2
```
Vous pouvez éteindre votre projet une fois votre session de travail terminée