---
id: systemd
title: Déploiement avec systemd
description: Exécuter l’agent Linux Hardener comme service
---

# Déploiement avec systemd

Le dépôt fournit un exemple d’unité dans `systemd/linux-hardener-agent.service`. Elle suppose une installation dans `/opt/linux-hardener`. Le chemin et le compte système doivent être adaptés à l’environnement cible avant installation.

## Installation

```bash
sudo cp systemd/linux-hardener-agent.service /etc/systemd/system/
sudo systemctl daemon-reload
sudo systemctl enable --now linux-hardener-agent.service
```

## Supervision

```bash
sudo systemctl status linux-hardener-agent.service
sudo journalctl -u linux-hardener-agent.service -f
```

## Arrêt et désactivation

```bash
sudo systemctl disable --now linux-hardener-agent.service
```

## Avant un usage en production

L’unité fournie est un exemple et non une configuration prête pour la production. Points à vérifier :

- compte système utilisé ;
- chemin de l’environnement virtuel ;
- URL de l’API ;
- authentification ;
- permissions de la base SQLite et des rapports ;
- restrictions de privilèges du service.
