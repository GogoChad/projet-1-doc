---
id: api
title: API et dashboard
description: Exposer les audits via FastAPI avec un historique SQLite
---

# API et dashboard

La version 0.6.0 inclut une API FastAPI minimale. Elle illustre comment les résultats du moteur peuvent être consommés par un autre composant et ne constitue pas une plateforme d’administration.

## Lancement

```bash
linux-hardener-api
```

| Ressource | URL |
| --- | --- |
| API | `http://127.0.0.1:8000` |
| Documentation OpenAPI | `http://127.0.0.1:8000/docs` |

## Endpoints

| Méthode | Endpoint | Description |
| --- | --- | --- |
| `GET` | `/api/health` | État de l’API |
| `GET` | `/api/scan` | Lance et enregistre un audit local |
| `POST` | `/api/scans` | Reçoit un rapport d’agent |
| `GET` | `/api/scans` | Liste les audits récents |
| `GET` | `/` | Dashboard minimal |

## Health check

```bash
curl http://127.0.0.1:8000/api/health
```

```json
{"status":"ok","service":"linux-hardener-api"}
```

## Stockage

L’historique est stocké dans SQLite, adapté à un laboratoire ou à un prototype mono-hôte. Un déploiement multi-hôtes nécessiterait au minimum une base adaptée, une authentification, une gestion des droits et le chiffrement des échanges.

## Architecture

La CLI et l’API partagent le même moteur d’audit. La logique de sécurité n’est pas réimplémentée dans l’interface web, ce qui facilite les tests et l’évolution du projet.
