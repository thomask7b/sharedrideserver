# Guide

[![SharedRide CI](https://github.com/thomask7b/sharedrideserver/actions/workflows/github-ci.yml/badge.svg)](https://github.com/thomask7b/sharedrideserver/actions/workflows/github-ci.yml)
[![codecov](https://codecov.io/gh/thomask7b/sharedrideserver/branch/master/graph/badge.svg?token=ZSCC7ANA09)](https://codecov.io/gh/thomask7b/sharedrideserver)

### Compiler et exécuter le projet :

Les prérequis sont une JRE 17 ainsi qu'un service mongod démarré.

Il faudra aussi ajouter la clé pour l'API Google Maps nommée **MAPS_API_KEY** en variable d'environnement.
Exemple sous Ubuntu:

```
sudo echo MAPS_API_KEY=maCle >> /etc/environment
```

Pour obtenir une base de données pré-remplie avec un jeux d'essai :

```
mongosh < create-test-db.js
```

> **Attention :** si une base de données "sharedRide" existe déjà elle sera supprimée.

Pour produire un **jar** executable :

```
./gradlew build
```

Pour démarrer le server :

```
cd build/libs
java -jar sharedrideserver-0.0.1-SNAPSHOT.jar 
```

Ouvrir swagger :

```
http://localhost:8080/swagger-ui/index.html
```