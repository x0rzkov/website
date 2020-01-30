import React from 'react'
import { Row, Col, Button } from 'antd';
import styled from 'styled-components'

const ContentGroup = styled(Row)`
  @media only screen and (min-width: 768px) {
    height: 200px;
  }
  position: relative;
  height: 300px;
`

const ContentCard = styled.div`
  width: 100%;
  margin-top: 80px;
  padding: 60px 0;
  text-align: center;
  background: ${props => props.theme.bg.secondaryLightOnly};
  border: 1px solid ${props => props.theme.bg.borderDarkOnly};
  box-shadow: ${props => props.theme.bg.shadowLightOnly};
  border-radius: 12px;
  position: absolute;

  h3 {
    opacity: 0.5;
    font-size: 14px;
    font-weight: bold;
    line-height: 1.5;
    color: white;
  }
  p {
    font-size: 20px;
    font-weight: 500;
    line-height: 1.5;
    color: white;
    margin: 12px 0 40px;
  }
`

type CTAProps = { 
  title: string,
  description: string,
  button: any,
  locale: any
}

const CTA = ({ title, description, button, locale }: CTAProps) => {

  return (
    <ContentGroup type="flex" justify="center" align="middle">
      <ContentCard>
        <Row type="flex" justify="center" align="middle">
          <Col xs={18} md={16}>
            <h3>{title}</h3>
            <p>{description}</p>
            <Button type={button.type} htmlType="submit" size="large">{button[`text_${locale}`]}</Button>
          </Col>
        </Row>
      </ContentCard>
    </ContentGroup>
  )
}

export default CTA;