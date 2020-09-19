import React, { useState } from 'react'
import styled from 'styled-components'
import { ArrowDown } from '../NavBar/styles'
import { RepoIcon } from './styles'
import {
  RepoCardContainer,
  ActivityBar,
  LangColor,
  StarIcon,
  SearchBarContainer,
  CheckMark,
  CloseIcon,
  Button,
  DropdownMenu
} from './styles'

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

const NewRepoButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-radius: 0.5em;

  padding: 5px 16px;
  height: 32px;
  cursor: pointer;
  color: ${({ theme }) => theme.font};
  background-color: #2ea44f;
  &:hover {
    filter: brightness(90%);
  }
`
export const RepoSearchBar = () => {
  const TypeButtonProps = {
    title: `Type:`,
    body: {
      title: 'Select type',
      options: [
        'All',
        'Public',
        'Private',
        'Sources',
        'Forks',
        'Archived',
        'Mirrors'
      ]
    }
  }

  const LanguageButtonProps = {
    title: `Language:`,
    body: {
      title: 'Select language',
      options: ['All', ...Object.keys(colors)]
    }
  }

  return (
    <SearchBarContainer>
      <input type='text' placeholder='Find a repository' />
      <DropdownButton {...TypeButtonProps} />
      <DropdownButton {...LanguageButtonProps} />
      <NewRepoButton>
        <RepoIcon />
        New
      </NewRepoButton>
    </SearchBarContainer>
  )
}

const DropdownButton = ({ title, body }) => {
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState(body.options[0])
  const handleOpen = () => setOpen(!open)
  return (
    <>
      <Button onClick={handleOpen} open={open}>
        {`${title} ${selected}`}
        <ArrowDown />

        <DropdownMenu open={open}>
          <header>
            {body.title}
            <CloseIcon />
          </header>
          {body.options.map(option => (
            <li onClick={() => setSelected(option)}>
              <CheckMark visible={selected === option} />

              {option}
            </li>
          ))}
        </DropdownMenu>
      </Button>
    </>
  )
}

DropdownButton.defaultProps = {
  body: {
    title: '',
    options: []
  },
  title: ''
}
