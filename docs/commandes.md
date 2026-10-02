---
id: commandes
title: Commandes CLI
description: Référence de la CLI Linux Hardener
---

# Commandes CLI

Cette page constitue une référence rapide. Le détail de chaque fonctionnalité est décrit dans les pages dédiées.

## Aide, version et diagnostic

```bash
linux-hardener --help
linux-hardener version
linux-hardener doctor
```

`doctor` affiche le système détecté, la version de Python, l’exécution éventuelle en root et la disponibilité des binaires utilisés par les contrôles.

## Contrôles

```bash
linux-hardener list-controls
```

## Audit

```bash
sudo linux-hardener audit
sudo linux-hardener audit --policy policies/server.yml
sudo linux-hardener audit --plugins
```

## Rapports

```bash
sudo linux-hardener audit \
  --json report.json \
  --html report.html \
  --sarif report.sarif
```

## Security gate

```bash
linux-hardener audit --fail-on high
```

Seuils acceptés : `low`, `medium`, `high`, `critical`.

## Baseline et drift

```bash
sudo linux-hardener baseline --output baseline.json
sudo linux-hardener drift baseline.json
```

## Remédiation

```bash
# Simulation
sudo linux-hardener remediate --dry-run

# Application
sudo linux-hardener remediate

# Contrôles ciblés
sudo linux-hardener remediate --only SSH-001 SSH-003
```

## Historique et rollback

```bash
sudo linux-hardener list-runs
sudo linux-hardener rollback <RUN_ID>
```

## API

```bash
linux-hardener-api
```

## Agent

```bash
# Exécution unique
linux-hardener-agent --once

# Avec envoi à l’API
linux-hardener-agent --once --server http://127.0.0.1:8000/api/scans

# Mode périodique (intervalle en secondes)
linux-hardener-agent --interval 900 --server http://127.0.0.1:8000/api/scans
```
