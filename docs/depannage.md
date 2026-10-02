---
id: depannage
title: Dépannage
description: Diagnostic des problèmes courants
---

# Dépannage

La plupart des erreurs proviennent de l’environnement Python ou d’un écart entre le système attendu et le système réel. Commencer par le diagnostic avant toute modification du code.

## `linux-hardener: command not found`

```bash
which python3
which pip
which linux-hardener
```

Si le projet n’est pas installé dans l’environnement virtuel actif :

```bash
python3 -m pip install -e .
hash -r
```

## Le Python utilisé pointe vers un ancien dossier

Un environnement virtuel contient des chemins absolus. Si le dépôt a été déplacé ou copié, `(.venv)` peut s’afficher dans le prompt alors qu’un ancien interpréteur est utilisé. Recréer l’environnement :

```bash
deactivate
rm -rf .venv
python3 -m venv .venv
source .venv/bin/activate
```

Puis réinstaller les dépendances.

## Erreur setuptools « Multiple top-level packages »

Le fichier `pyproject.toml` doit limiter la découverte de packages à `hardener`. Les répertoires `policies`, `systemd` et les fichiers du laboratoire ne doivent pas être traités comme des packages Python.

## Résultats SSH inattendus

La configuration effective peut différer du contenu du fichier. La comparer à la sortie de :

```bash
sudo sshd -T | grep -E 'permitrootlogin|permitemptypasswords|passwordauthentication|maxauthtries|x11forwarding|allowtcpforwarding'
```

## `FW-001` en `WARN`

Comparer avec :

```bash
sudo systemctl is-active nftables
sudo systemctl is-active ufw
sudo ufw status
sudo nft list ruleset
```

L’objectif est de distinguer une absence réelle de pare-feu d’une détection incomplète.

## Résultats différents dans le Docker Lab

Comportement normal : un conteneur ne reproduit pas l’environnement d’une machine Debian.

## Méthode de diagnostic

1. reproduire le problème ;
2. exécuter `linux-hardener doctor` ;
3. vérifier les commandes système utilisées par le contrôle ;
4. comparer leur sortie à celle de l’outil ;
5. ajouter ou corriger un test automatisé avant de modifier le comportement.
