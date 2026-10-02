---
id: securite
title: Sécurité et limites
description: Précautions d’usage et limites connues
---

# Sécurité et limites

Linux Hardener agit sur un système pouvant contenir des données et configurations sensibles. Les précautions suivantes font partie de l’usage normal de l’outil.

## Procédure recommandée

```bash
sudo linux-hardener audit
sudo linux-hardener remediate --dry-run
```

Une remédiation réelle ne doit intervenir qu’après relecture des changements prévus.

## Accès d’administration

Avant toute modification SSH, conserver une console de secours ou une seconde session. Une configuration invalide peut couper la connexion utilisée pour appliquer le correctif.

## Sauvegardes

Les fichiers de rollback sont stockés dans `/var/lib/linux-hardener/runs/` et peuvent contenir des copies de fichiers sensibles. Les permissions de ce répertoire doivent être adaptées au contexte de la machine.

## Interprétation du score

Le score mesure la conformité à la grille du projet. Il ne remplace pas :

- une analyse de vulnérabilités ;
- une revue des paquets et des CVE ;
- une supervision des événements ;
- une protection de poste (EDR) ;
- une revue de l’application et de son exposition réseau.

## API et exposition réseau

L’API ne comporte ni authentification complète ni gestion des droits (RBAC). Elle doit rester cantonnée à un environnement de développement tant que ces protections ne sont pas ajoutées.

## Principe général

> Observer d’abord, expliquer ensuite, ne modifier que ce qui est maîtrisé et vérifiable.
