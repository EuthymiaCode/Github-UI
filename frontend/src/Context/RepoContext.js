const repos = [
  {
    name: 'Um repositorio ai',
    description: 'Projeto dos garotos de Programa',
    language: 'Javascript',
    lastUpdated: '5 dias atrás',
    stars: 5000
  },
  {
    name: 'Um repositorio ai',
    description: 'Projeto dos garotos de Programa',
    language: 'Typescript',
    lastUpdated: '5 dias atrás',
    stars: 5000
  },
  {
    name: 'Um repositorio ai',
    description: 'Projeto dos garotos de Programa',
    language: 'Javascript',
    lastUpdated: '5 dias atrás',
    stars: 5000
  },
  {
    name: 'Um repositorio ai',
    description: 'Projeto dos garotos de Programa',
    language: 'Typescript',
    lastUpdated: '5 dias atrás',
    stars: 5000
  },
  {
    name: 'Um repositorio ai',
    description: 'Projeto dos garotos de Programa',
    language: 'Javascript',
    lastUpdated: '5 dias atrás',
    stars: 5000
  },
  {
    name: 'Um repositorio ai',
    description: 'Projeto dos garotos de Programa',
    language: 'Typescript',
    lastUpdated: '5 dias atrás',
    stars: 5000
  },
  {
    name: 'Um repositorio ai',
    description: 'Projeto dos garotos de Programa',
    language: 'Javascript',
    lastUpdated: '5 dias atrás',
    stars: 5000
  }
]

export default function getRepos(repoIndex = null) {
  if (repoIndex) {
    return repos.find((repo, index) => index === repoIndex)
  } else {
    return repos
  }
}
