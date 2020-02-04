import {Row, Col } from 'antd'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import fetch from 'isomorphic-unfetch';
import parser from 'fast-xml-parser'
import ApplyModal from '../../components/ApplyModal'
import PageLayout from '../../layouts/Page'

const OfferGroup = styled.div`
  p {
    text-align: justify;
  }
`

const Offer = props => {
  const router = useRouter()
  const { id } = router.query
  const offer = props.offers.find(offer => offer.offer_keyid === Number(id))

  return (
    <PageLayout title={offer.job_title}>
      <Row type="flex" justify="center" align="top">
        <Col xs={24} md={6}>
          <ApplyModal offer={offer} />
        </Col>
        <Col xs={24} md={12}>
          <OfferGroup>
            <h2>À propos</h2>
            <p>{offer.company_description}</p>
            <h2>Descriptif du poste</h2>
            <p>{offer.job_description}</p>
          </OfferGroup>
        </Col>
        <Col xs={0} md={6}/>
      </Row>
    </PageLayout>
  )
}

Offer.getInitialProps = async function() {
 
  const res = await fetch('http://www.mytalentplug.com/xml.aspx?jbID=u/S3BRjmcl8=')
  const xml = await res.text()
  const json = await parser.parse(xml).offers.offer;

  return {
    offers: json
  }

};
  
export default Offer