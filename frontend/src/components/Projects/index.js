import React, { useState } from 'react'

import {
  Container,
  Wrapper,
  Input,
  SearchIcon,
  NewProjectButton,
  BoxContainer,
  LeftSide,
  ProjectsIcon,
  CheckIcon,
  RightSide,
  ArrowDown,
  DropdownMenu,
  CheckMark,
  ProjectButton,
  Link
} from './styles'

function Projects() {
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState('Newest')
  const handleOpen = () => setOpen(!open)

  return (
    <Container>
      <Wrapper>
        <header>
          <Input>
            <SearchIcon />
            <input placeholder='is:open sort:created-desc' />
          </Input>

          <NewProjectButton>New Project</NewProjectButton>
        </header>

        <BoxContainer>
          <header>
            <LeftSide>
              <ProjectsIcon />
              <span style={{ fontWeight: '600' }}>0 Open</span>
              <CheckIcon style={{ marginLeft: '10px' }} />
              <span>0 Closed</span>
            </LeftSide>
            <RightSide onClick={handleOpen}>
              <span> Sort </span>
              <ArrowDown />
              <DropdownMenu open={open}>
                <div className='dropdown-header'>Sort</div>
                {[
                  'Newest',
                  'Oldest',
                  'Recently Updated',
                  'Least recently updated',
                  'Name'
                ].map(option => (
                  <li onClick={() => setSelected(option)}>
                    <CheckMark visible={selected === option} />

                    {option}
                  </li>
                ))}
              </DropdownMenu>
            </RightSide>
          </header>
          <section>
            <h3>You don't have any projects yet.</h3>
            <ProjectButton>New Project</ProjectButton>
            <Link href='https://docs.github.com/en/github/managing-your-work-on-github/about-project-boards'>
              Learn More
            </Link>
          </section>
        </BoxContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects
