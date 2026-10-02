const sidebars = {
  tutorialSidebar: [
    'intro',
    'installation',
    'premier-audit',
    {
      type: 'category',
      label: 'Comprendre le moteur',
      items: ['architecture', 'controles', 'policies', 'scoring'],
    },
    {
      type: 'category',
      label: 'Remédiation',
      items: ['remediation', 'rollback', 'baseline-drift'],
    },
    {
      type: 'category',
      label: 'Rapports & CI/CD',
      items: ['rapports', 'cicd'],
    },
    {
      type: 'category',
      label: 'Plateforme',
      items: ['api', 'agent', 'docker-lab', 'systemd'],
    },
    {
      type: 'category',
      label: 'Développement',
      items: ['developpement', 'depannage', 'securite'],
    },
  ],
};

export default sidebars;
