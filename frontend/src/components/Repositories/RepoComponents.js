import React from 'react'
import { RepoCardContainer, ActivityBar, LangColor, StarIcon } from './styles'

const colors = {
  Javascript: '#f1e05a',
  Typescript: '#2b7489'
}

export const RepoCard = ({
  name,
  description,
  language,
  lastUpdated,
  stars
}) => {
  const visibleStars =
    stars > 999 ? stars.toString().charAt(0).concat('K ') : stars.toString()
  return (
    <RepoCardContainer>
      <span style={{ marginTop: '0' }}>
        <a href={() => false}>{name}</a>
        <button>
          <StarIcon />
          {visibleStars}
          Stars
        </button>
      </span>
      <span>
        <p>{description}</p>
        <ActivityBar />
      </span>
      <span style={{ justifyContent: 'flex-start' }}>
        <h4>
          <LangColor color={colors[language]} />
          {language}
        </h4>
        <h4 style={{ marginLeft: '6px' }}>{lastUpdated}</h4>
      </span>
    </RepoCardContainer>
  )
}

export const RepoSearchBar = () => {
  return <h1>Repositorio</h1>
}
