---
id: rapports
title: Rapports
description: Formats d’export JSON, HTML et SARIF
---

# Rapports

L’audit produit un rapport interne unique, exportable sous plusieurs formats. La logique de détection n’est donc pas dupliquée selon l’usage.

```bash
sudo linux-hardener audit \
  --json report.json \
  --html report.html \
  --sarif report.sarif
```

Les trois formats représentent le même audit.

| Format | Usage |
| --- | --- |
| JSON | Automatisation, archivage, ingestion par un autre outil |
| HTML | Lecture humaine, compte rendu de revue, démonstration |
| SARIF | Intégration CI et outils de sécurité |

## JSON

Adapté aux scripts, à l’archivage et à l’API.

```bash
python3 -m json.tool report.json
```

## HTML

Rapport lisible dans un navigateur.

```bash
xdg-open report.html
```

## SARIF

Format standard de représentation des résultats d’analyse de sécurité, pris en charge par plusieurs plateformes de développement. Il permet de transmettre les résultats de la CLI à une chaîne CI.
