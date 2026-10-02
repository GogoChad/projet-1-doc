---
id: developpement
title: Développement
description: Structure du dépôt, ajout d’un contrôle et tests
---

# Développement

Pour contribuer, partir d’un contrôle existant, comprendre son test, puis procéder à une modification ciblée.

## Arborescence

```text
linux-hardener/
├── hardener/
│   ├── checks/
│   ├── plugins/
│   ├── api.py
│   ├── agent.py
│   ├── baseline.py
│   ├── cli.py
│   ├── db.py
│   ├── engine.py
│   ├── models.py
│   ├── policy.py
│   ├── registry.py
│   ├── remediation.py
│   ├── reporters.py
│   └── utils.py
├── policies/
├── tests/
├── docker-lab/
├── systemd/
├── docker-compose.yml
├── pyproject.toml
└── requirements.txt
```

## Ajouter un contrôle

Un contrôle suit un principe unique : lire, décider, retourner un résultat.

```python
def check_example():
    value = read_value()

    if value == "expected":
        return result(
            "EXAMPLE-001",
            "Mon contrôle",
            "example",
            "medium",
            "PASS",
            f"Valeur = {value}",
            value,
            False,
            ["example"],
        )

    return result(
        "EXAMPLE-001",
        "Mon contrôle",
        "example",
        "medium",
        "WARN",
        f"Valeur = {value}",
        value,
        False,
        ["example"],
    )
```

La signature exacte de `result` dépend du modèle défini dans le dépôt.

Une fois le contrôle enregistré, ajouter son identifiant aux policies YAML concernées pour l’activer par défaut.

## Séparer audit et remédiation

Aucune modification système ne doit figurer dans un contrôle :

| Emplacement | Responsabilité |
| --- | --- |
| `checks/` | Lecture et décision |
| `remediation.py` | Modification |

Cette séparation garantit qu’un audit peut s’exécuter en CI sans effet de bord, et permet de tester les deux chemins indépendamment.

## Tests

```bash
pytest -q
```

Puis un test manuel sur une machine virtuelle :

```bash
sudo linux-hardener audit
```

## Principe de conception

Le projet privilégie un code explicite à une abstraction difficile à justifier. Une contribution doit pouvoir être relue et comprise par un autre membre de l’équipe sans interprétation des intentions de son auteur.
