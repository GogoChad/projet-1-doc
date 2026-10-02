---
id: controles
title: Contrôles de sécurité
description: Référence des 28 contrôles de Linux Hardener
---

# Contrôles de sécurité

La version 0.6.0 intègre 28 contrôles. Chacun possède un identifiant stable, utilisé comme référence commune par le code, les policies, les rapports et les tests.

:::note
Un contrôle vérifie une condition précise selon la grille du projet. Il ne prouve pas qu’un système est sûr.
:::

## SSH (6)

| ID | Vérifie | Sévérité |
| --- | --- | --- |
| `SSH-001` | Connexion SSH directe de root | High |
| `SSH-002` | Mots de passe vides | High |
| `SSH-003` | Authentification SSH par mot de passe | High |
| `SSH-004` | X11 forwarding | Medium |
| `SSH-005` | `MaxAuthTries` | Medium |
| `SSH-006` | TCP forwarding | Medium |

## Système de fichiers (5)

| ID | Vérifie | Sévérité |
| --- | --- | --- |
| `FS-001` | Permissions de `/etc/shadow` | Critical |
| `FS-002` | Permissions de `/etc/passwd` | High |
| `FS-003` | Fichiers world-writable ciblés | High |
| `FS-004` | Présence de binaires SUID | Medium |
| `FS-005` | Sticky bit de `/tmp` | Medium |

La présence d’un binaire SUID est un point à examiner et non un indicateur de compromission : de nombreux utilitaires légitimes en dépendent.

## Noyau et `sysctl` (7)

| ID | Vérifie | Sévérité |
| --- | --- | --- |
| `KERNEL-001` | IPv4 forwarding | Medium |
| `KERNEL-002` | `accept_redirects` | Medium |
| `KERNEL-003` | `send_redirects` | Medium |
| `KERNEL-004` | `rp_filter` | Medium |
| `KERNEL-005` | Source routing | High |
| `KERNEL-006` | TCP SYN cookies | Medium |
| `KERNEL-007` | IPv6 `accept_redirects` | Medium |

## Services, réseau et journalisation (6)

| ID | Vérifie | Sévérité |
| --- | --- | --- |
| `FW-001` | Pare-feu actif | High |
| `SERVICE-001` | État du service SSH | Medium |
| `SERVICE-002` | Présence de Telnet | High |
| `LOG-001` | Service de journalisation actif | Medium |
| `LOG-002` | Présence d’`auditd` | Medium |
| `NET-001` | Nombre de sockets TCP en écoute | Medium |

## MAC, paquets, comptes et sudo (4)

| ID | Vérifie | Sévérité |
| --- | --- | --- |
| `MAC-001` | AppArmor ou SELinux détecté | High |
| `PKG-001` | Mises à jour apt disponibles | High |
| `USER-001` | Comptes avec UID 0 | High |
| `SUDO-001` | Règles `NOPASSWD` | High |

## Emplacement du code

Les contrôles intégrés se trouvent dans `hardener/checks/` et sont enregistrés dans `hardener/registry.py`.

Pour intervenir sur un contrôle :

1. identifier son ID ;
2. lire son code et son test ;
3. vérifier sa présence dans les policies ;
4. observer son résultat sur une machine virtuelle ;
5. n’associer une remédiation qu’après validation de l’audit.
