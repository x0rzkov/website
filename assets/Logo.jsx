import React, { Component } from 'react'
import styled from 'styled-components'

const LogoMode = styled.svg`
  path {
    fill: ${props => props.theme.text.primary};
  }
`

class Logo extends React.Component {
  render () {
    return (
      <LogoMode width={this.props.width} height={this.props.height} viewBox="0 0 100 24" xmlns="http://www.w3.org/2000/svg">
        <rect id="Rectangle" fill="#1EB650" x="94.0448186" y="17.8156126" width="5.91515939" height="5.89917247" rx="0.324324324"></rect>
        <path d="M5.2133628,23.3967268 L5.2133628,17.5150497 L6.1582848,17.5150497 L11.4693982,23.3967268 L18.1490192,23.3967268 L10.2312245,14.8504224 L17.3995983,7.08400895 L11.1109795,7.08400895 L5.93020018,12.6407316 L5.2133628,12.6407316 L5.2133628,2.84217094e-14 L0,2.84217094e-14 L0,23.3967268 L5.2133628,23.3967268 Z M26.6424561,23.8841586 C30.3895606,23.8841586 33.3546607,22.2268905 34.755752,18.7823724 L30.1288925,17.8400042 C29.2491375,19.4322814 27.8480463,19.7247405 26.6424561,19.7247405 C24.8829462,19.7247405 23.547022,18.5224087 23.1234362,16.5726815 L35.1141707,16.5726815 L35.1141707,15.2403679 C35.0164201,9.91111345 31.3018991,6.59657715 26.6750396,6.59657715 C21.9178461,6.59657715 18.007824,10.1060862 18.007824,15.2403679 C18.007824,20.4071451 21.9178461,23.8841586 26.6424561,23.8841586 Z M29.9659749,13.388127 L23.2211868,13.388127 C23.7099396,11.7308589 25.2087814,10.8209862 26.6750396,10.8209862 C28.1738814,10.8209862 29.4772221,11.6333725 29.9659749,13.388127 Z M43.2491889,23.3967268 L43.2491889,18.2949406 C43.2491889,14.0705315 45.2367834,12.1857952 48.8861374,12.1857952 L49.8310594,12.1857952 L50.059144,6.98652259 C49.6681418,6.88903623 49.3423066,6.85654078 48.8861374,6.85654078 C46.214289,6.85654078 44.4221955,8.2538453 43.2491889,10.2035725 L43.2491889,7.08400895 L38.0358261,7.08400895 L38.0358261,23.3967268 L43.2491889,23.3967268 Z M57.7054095,23.3967268 L57.7054095,15.8252861 C57.7054095,12.673227 59.0413337,11.2759225 61.0940953,11.2759225 C62.7558547,11.2759225 63.8962778,12.5757407 63.8962778,14.4929724 L63.8962778,23.3967268 L69.0770571,23.3967268 L69.0770571,13.388127 C69.0770571,9.29369982 66.5355427,6.59657715 62.7232711,6.59657715 C60.6705095,6.59657715 58.9435831,7.34397259 57.7054095,8.64379074 L57.7054095,7.08400895 L52.4920467,7.08400895 L52.4920467,23.3967268 L57.7054095,23.3967268 Z M78.0592467,23.3967268 L78.0592467,15.8252861 C78.0592467,12.673227 79.3951709,11.2759225 81.4479325,11.2759225 C83.1096919,11.2759225 84.250115,12.5757407 84.250115,14.4929724 L84.250115,23.3967268 L89.4308943,23.3967268 L89.4308943,13.388127 C89.4308943,9.29369982 86.8893799,6.59657715 83.0771084,6.59657715 C81.0243468,6.59657715 79.2974204,7.34397259 78.0592467,8.64379074 L78.0592467,7.08400895 L72.8458839,7.08400895 L72.8458839,23.3967268 L78.0592467,23.3967268 Z" id="kernn" fill="#0E2A3E" fill-rule="nonzero"></path>  
      </LogoMode>
    )
  }
}

Logo.defaultProps = {
  width: '100px',
  height: '24px'
};

export default Logo