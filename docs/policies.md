---
id: policies
title: Policies YAML
description: Définir les contrôles applicables à une machine
---

# Policies YAML

Une policy déclare la liste des contrôles à exécuter. Elle sépare le contexte d’usage du code des contrôles : une même grille peut ainsi servir plusieurs rôles de machines avec des niveaux d’exigence différents.

## Structure

```yaml
name: server
version: 1

enabled:
  - SSH-001
  - SSH-002
  - SSH-003
  - FS-001
  - KERNEL-001
  - FW-001
```

| Champ | Rôle |
| --- | --- |
| `name` | Nom du profil. |
| `version` | Version de la policy. |
| `enabled` | Identifiants des contrôles actifs. |

## Profils fournis

- `server.yml` : active la grille complète ;
- `workstation.yml` : sélectionne les contrôles adaptés à un poste de travail.

```bash
sudo linux-hardener audit --policy policies/server.yml
sudo linux-hardener audit --policy policies/workstation.yml
```

## Créer un profil

Copier un profil existant, puis adapter la liste `enabled` au rôle de la machine :

```bash
cp policies/server.yml policies/web-server.yml
```

## Périmètre d’une policy

Une policy définit ce qui est observé, pas la manière de corriger. Les modifications système restent dans le moteur de remédiation, où elles peuvent être validées, testées et relues séparément.
