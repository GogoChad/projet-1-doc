---
id: installation
title: Installation
description: Installer Linux Hardener sur une machine Debian ou Ubuntu de test
---

# Installation

L’installation recommandée utilise un environnement virtuel Python. Pour les premiers essais, il est préférable d’utiliser une machine virtuelle Debian ou Ubuntu plutôt qu’un poste de travail.

## Prérequis

- Python 3.10 ou supérieur ;
- `sudo` ;
- Debian ou Ubuntu, pour disposer des outils ciblés par les contrôles ;
- `systemd`, `ss`, `sysctl` et `sshd` pour une couverture complète ;
- Docker, uniquement pour le laboratoire et les plugins associés.

## Environnement virtuel

Depuis la racine du dépôt :

```bash
python3 -m venv .venv
source .venv/bin/activate
```

Vérifier que les exécutables utilisés appartiennent bien au `.venv` du projet :

```bash
which python3
which pip
```

## Installation du projet

```bash
python3 -m pip install --upgrade pip
python3 -m pip install -r requirements.txt
python3 -m pip install -e .
```

L’option `-e` installe la CLI en mode éditable : les modifications du code sont prises en compte sans réinstallation.

## Vérification

```bash
linux-hardener version
linux-hardener doctor
linux-hardener list-controls
```

Si la commande `linux-hardener` est introuvable alors que `python3` pointe vers le bon environnement :

```bash
python3 -m pip install -e .
hash -r
```

## Désactivation de l’environnement

```bash
deactivate
```

Pour le réactiver : `source .venv/bin/activate`.

## Pourquoi utiliser une machine virtuelle

L’outil peut modifier la configuration SSH et certains paramètres `sysctl`. Sur une machine distante, une erreur de configuration peut couper l’accès d’administration. Une machine virtuelle permet d’observer, corriger et restaurer ces changements sans risque pour un système en production.
