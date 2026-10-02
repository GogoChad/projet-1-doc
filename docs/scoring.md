---
id: scoring
title: Score et security gate
description: Interpréter le score de conformité et définir un seuil de blocage
---

# Score et security gate

Le score sur 100 est un indicateur de synthèse propre au projet. Il sert à suivre une évolution et à présenter un état global, mais ne correspond pas à un pourcentage de sécurité.

## Exemple

Un score peut passer de 82/100 à 95/100 après la remédiation de contrôles ciblés. Cette évolution est utile dans un tableau de bord ou un compte rendu.

## Limites

Un score élevé peut masquer un problème important : une machine peut obtenir 95/100 avec un seul `FAIL` critique. Une décision de pipeline doit donc s’appuyer sur les contrôles et leur sévérité, et non sur le score.

## Security gate

```bash
linux-hardener audit --fail-on high
```

Ordre de sévérité :

```text
low < medium < high < critical
```

Tout `FAIL` dont la sévérité atteint le seuil fait échouer la commande, ce qui permet à la CI d’interrompre le pipeline.
