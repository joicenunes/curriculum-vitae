
const title = 'Meu currículo';

const personalData = {
  title,
  name: 'Joice Maria Araújo Nunes',
  profession: 'System Analyst in 3v3 Tecnologia',
  description: 'Experiência com Node.js, Vue.js e Git. Fácil aprendizado, mente aberta para conhecer novas ferramentas. Recente início de estudo da área de design.',
  personal: {
    birth: 'nov 7, 1997',
    phone: '(85) 999888312',
    email: 'anunes.joice@gmail.com',
    github: 'https://github.com/joicenunes'
  },
  experience: [{
    company: 'Techpar',
    office: 'Software Developer Trainee',
    period: {
      start: 'mar 2017',
      end: 'dez 2017'
    },
    description: 'Desenvolvimento de rede social voltada para o igrejas católicas. Primeiros contatos com frameworks para front-end e back-end. Desenvolvimento de habilidades com Vue.js e Node.js.'
  }, {
    company: '3v3 Tecnologia',
    office: 'System Analyst IT',
    period: {
      start: 'mar 2018',
      end: 'presente'
    },
    description: 'Análise e desenvolvimento da interface de usuário do sistema de automação de irrigação da empresa.'
  }],
  education: [{
    institution: 'IFCE',
    description: '(2016 - 2019) Computer Engineering.'
  }],
  skills: ['Backend', 'Fronted'],
  interests: []
};

module.exports = personalData;
