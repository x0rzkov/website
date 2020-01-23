import React, { useContext } from 'react'
import { LocaleContext } from '../context/LocaleContext'
import { Row, Col, Avatar, Tag } from 'antd';
import styled from 'styled-components'

const CardGroup = styled.div `
  background: ${props => props.theme.bg.matt};
  width: 100%;
  border-radius: 12px;
  padding: 50px 70px;
  margin: 20px 0;
  box-shadow: rgba(0,0,0,.09) 0 10px 20px 0;

  h3, h4 {
    color: ${props => props.theme.text.primary};
  }
`

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: .5rem;
`

const ToolsGroup = styled.div`
  .ant-avatar {
    margin-left: -0.5rem;
    border: solid 2px #fafafa;
  }
`

const CardContent = styled.div`
  margin-bottom: 1.5rem;
`

const CardTags = styled.div`
`

type PlaybookProps = { 
  playbook: {
    title_en: string,
    title_fr: string,
    areas: any,
    business_role: any,
    tools: any
  }
}

const PlaybookCard = ({ playbook }: PlaybookProps) => {

  const { locale } = useContext(LocaleContext)

  return (
    <a href="">
      <CardGroup>
        <CardHeader>
          <h4>{playbook.business_role[`name_${locale}`]}</h4>
          <ToolsGroup>
            {playbook.tools.map((tool) => (
              <Avatar src={process.env.BACKEND_URL + tool.logo.url}/>
            ))}
          </ToolsGroup>
        </CardHeader>
        <CardContent>
            <h3>{playbook[`title_${locale}`]}</h3>
        </CardContent>
        <CardTags>
          {playbook.areas.map((area) => (
            <Tag>{area[`name_${locale}`]}</Tag>
          ))}
        </CardTags> 
      </CardGroup> 
    </a>
  )
}

export default PlaybookCard