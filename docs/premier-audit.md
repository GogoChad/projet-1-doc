---
id: premier-audit
title: Premier audit
description: Lancer et interpréter un premier audit
---

# Premier audit

Un audit ne modifie pas la machine. Il collecte des informations, applique les règles sélectionnées et produit un rapport.

## Lancer l’audit

```bash
sudo linux-hardener audit
```

Exemple de sortie :

```text
Linux Hardener v0.6 - debian
OS: Debian GNU/Linux 13 (trixie)
Score: 95/100

ID             STATUS  SEVERITY  MESSAGE
--------------------------------------------------------------------------------------
SSH-001        PASS    high      PermitRootLogin = no
SSH-002        PASS    high      PermitEmptyPasswords = no
SSH-003        WARN    high      PasswordAuthentication = yes
FS-001         PASS    critical  /etc/shadow mode=0o640
KERNEL-002     FAIL    medium    accept_redirects = 1
FW-001         WARN    high      No active firewall was detected
```

## Lecture des résultats

Chaque ligne comporte un identifiant, un statut, une sévérité et un message. L’identifiant (par exemple `KERNEL-002`) désigne une règle précise et sert de référence dans les rapports, les policies et les remédiations.

| Statut | Signification |
| --- | --- |
| `PASS` | La valeur observée respecte la règle. |
| `WARN` | La situation nécessite une revue. |
| `FAIL` | La règle n’est pas respectée. |
| `SKIP` | Le contrôle n’est pas applicable dans l’environnement courant. |
| `ERROR` | Le contrôle a rencontré une erreur d’exécution. |

La sévérité traduit l’importance accordée au contrôle dans la grille du projet. Elle ne représente pas le risque propre à une organisation.

## Analyser avant de corriger

Un `FAIL` n’appelle pas nécessairement une correction immédiate : la décision dépend du rôle de la machine. Avant de modifier l’authentification SSH par exemple, il convient de vérifier la configuration effective :

```bash
sudo sshd -T | grep -E 'permitrootlogin|permitemptypasswords|passwordauthentication|maxauthtries|x11forwarding|allowtcpforwarding'
```

## Exporter les résultats

```bash
sudo linux-hardener audit \
  --json report.json \
  --html report.html \
  --sarif report.sarif \
  --plugins
```

Les formats sont détaillés dans la page [Rapports](./rapports).
