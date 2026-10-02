# Linux Hardener |  Documentation

Documentation technique de **Linux Hardener 0.6.0**, outil d’audit, de conformité et de remédiation pour systèmes Linux.

## Public concerné

- développeurs reprenant le dépôt ;
- administrateurs système souhaitant connaître le périmètre des contrôles ;
- relecteurs techniques évaluant l’architecture et les limites de l’outil.

## Démarrage

Prérequis : Node.js 20 ou supérieur.

```bash
npm install
npm run start
```

Le site est servi sur `http://localhost:3000`.

## Build de production

```bash
npm run build
npm run serve
```

Le site statique est généré dans `build/`.

## Conventions rédactionnelles

La documentation présente Linux Hardener comme un outil de conformité et de laboratoire, et non comme une solution de sécurité exhaustive. Chaque fonctionnalité est décrite selon quatre axes : ce qui est observé, la règle attendue, ce que la remédiation peut modifier, et ce qui reste hors périmètre.
