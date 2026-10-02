import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import clsx from 'clsx';
import styles from './index.module.css';

const features = [
  {eyebrow: '01', title: 'Audit local', text: 'État de SSH, du noyau, des permissions, des services, du réseau et des mises à jour dans une sortie homogène.', to: '/docs/premier-audit'},
  {eyebrow: '02', title: 'Remédiation encadrée', text: 'Dry-run, sauvegarde, validation et rollback pour chaque modification.', to: '/docs/remediation'},
  {eyebrow: '03', title: 'Policies YAML', text: 'Les contrôles actifs sont déclarés par profil, selon le rôle de la machine.', to: '/docs/policies'},
  {eyebrow: '04', title: 'Intégration CI/CD', text: 'Rapports JSON et SARIF, security gate, GitHub Actions, agent périodique et API FastAPI.', to: '/docs/cicd'},
  {eyebrow: '05', title: 'Détection de drift', text: 'Comparaison de l’état courant à une baseline de référence.', to: '/docs/baseline-drift'},
  {eyebrow: '06', title: 'Laboratoire Docker', text: 'Environnement reproductible pour tester la détection sans toucher à une machine de production.', to: '/docs/docker-lab'},
];

export default function Home() {
  return (
    <Layout title="Documentation" description="Documentation technique de Linux Hardener">
      <main>
        <section className={styles.hero}>
          <div className="container">
            <div className={styles.heroGrid}>
              <div>
                <div className={styles.kicker}><span className={styles.dot} /> DOCUMENTATION TECHNIQUE</div>
                <Heading as="h1">Audit et conformité<br /><span>pour systèmes Linux.</span></Heading>
                <p className={styles.lead}>
                  Linux Hardener relève l’état d’une machine Linux, le compare à une grille de règles, produit des rapports exploitables et applique des corrections encadrées. Les contrôles s’intègrent à une chaîne CI/CD.
                </p>
                <div className={styles.actions}>
                  <Link className={clsx('button button--lg', styles.primary)} to="/docs/installation">Commencer</Link>
                  <Link className={clsx('button button--lg', styles.secondary)} to="/docs/architecture">Architecture</Link>
                </div>
                <div className={styles.metaRow}>
                  <span>Python 3.10+</span><span>Debian / Ubuntu</span><span>v0.6.0</span>
                </div>
              </div>
              <div className={styles.terminal}>
                <div className={styles.termTop}><span/><span/><span/><b>audit</b></div>
                <pre>{`$ sudo linux-hardener audit

Linux Hardener v0.6 - debian
OS: Debian GNU/Linux 13 (trixie)
Score: 95/100

SSH-001   PASS    PermitRootLogin = no
SSH-002   PASS    PermitEmptyPasswords = no
SSH-003   WARN    PasswordAuthentication = yes
FS-001    PASS    /etc/shadow mode=0o640
KERNEL-002 FAIL    accept_redirects = 1
FW-001    WARN    No active firewall detected

PASS=18  FAIL=2  WARN=8`}</pre>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className="container">
            <div className={styles.sectionIntro}>
              <div><div className={styles.smallLabel}>PRÉSENTATION</div><Heading as="h2">Fonctionnalités principales</Heading></div>
              <p>La documentation décrit le fonctionnement interne, les commandes et les limites de l’outil afin de faciliter la reprise du dépôt par un autre développeur.</p>
            </div>
            <div className={styles.grid}>
              {features.map((f) => <Link key={f.title} to={f.to} className={styles.card}>
                <div className={styles.cardNumber}>{f.eyebrow}</div>
                <Heading as="h3">{f.title}</Heading>
                <p>{f.text}</p>
                <span className={styles.cardLink}>Consulter →</span>
              </Link>)}
            </div>
          </div>
        </section>

        <section className={styles.band}>
          <div className="container">
            <div className={styles.bandGrid}>
              <div><div className={styles.smallLabel}>WORKFLOW</div><Heading as="h2">Audit, correction, vérification</Heading></div>
              <div className={styles.pipeline}>
                {['Audit', 'Dry-run', 'Remédiation', 'Vérification', 'Rollback'].map((x, i) => <div key={x} className={styles.pipeItem}><span>{String(i + 1).padStart(2, '0')}</span>{x}</div>)}
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
