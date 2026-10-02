---
id: docker-lab
title: Docker Lab
description: Reproduire des scénarios de test dans un environnement contrôlé
---

# Docker Lab

Le Docker Lab permet de tester le projet sans utiliser de serveur de travail. Il contient des composants de démonstration et un scénario volontairement non conforme.

:::caution
Cet environnement est destiné au développement et aux tests. Ce n’est pas une image de production.
:::

## Construire et lancer l’image

Depuis la racine du dépôt :

```bash
docker build -t linux-hardener-lab docker-lab
docker run --rm linux-hardener-lab
```

## Docker Compose

Le fichier `docker-compose.yml` lance le scénario API et agent :

```bash
docker compose up --build
docker compose ps
docker compose down
```

## Intérêt

Le laboratoire garantit des démonstrations reproductibles : chaque développeur part du même état, sans modifier manuellement sa propre machine.

## Limite

Un conteneur n’est pas une machine virtuelle Linux complète. `systemd`, SSH, les namespaces et les paramètres réseau se comportent différemment. Les tests de remédiation système, notamment SSH et `sysctl`, doivent être réalisés sur une machine virtuelle Debian ou Ubuntu.
