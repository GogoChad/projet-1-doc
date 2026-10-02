---
id: rollback
title: Rollback et historique
description: Sauvegardes générées par les remédiations et procédure de restauration
---

# Rollback et historique

Chaque remédiation réelle est tracée dans :

```text
/var/lib/linux-hardener/runs/
```

## Lister les exécutions

```bash
sudo linux-hardener list-runs
```

Chaque répertoire d’exécution contient les éléments nécessaires à la restauration :

```text
/var/lib/linux-hardener/runs/
└── 20261002-203512/
    ├── manifest.jsonl
    └── etc_ssh_sshd_config.backup
```

## Restaurer une exécution

```bash
sudo linux-hardener rollback 20261002-203512
```

Les opérations de restauration sont rejouées dans l’ordre inverse.

## Intérêt

Le rollback permet de tester une règle sur une machine virtuelle, de revenir à un état connu après un essai et de limiter le risque d’une modification automatique.

## Limites

Le rollback restaure uniquement les changements effectués par Linux Hardener. Il ne peut pas annuler les modifications apportées entre-temps par un administrateur, un autre outil ou un gestionnaire de configuration.

Les sauvegardes peuvent contenir des informations sensibles. Le répertoire de stockage doit être protégé comme tout répertoire de configuration système.
