import React from 'react'
import { Row, Col } from 'antd'
import WallStorey from 'components/WallStorey'
import SvgBrick from 'components/SvgBrick'
import { Wheel1, Wheel2 } from 'components/Wheels'
import License from 'components/License'

export default () => (
  <div>
    <License>
      <a href='http://www.flaticon.com/packs/sharing-out-3' target='_blank'>
        icons designed by Freepik from Flaticon
      </a>
    </License>
    <WallStorey title='wheels'>
      <Row gutter={16}>
        <Col lg={8} xl={6}>
          <SvgBrick>
            <Wheel1 />
          </SvgBrick>
        </Col>
        <Col lg={8} xl={6}>
          <SvgBrick>
            <Wheel2 />
          </SvgBrick>
        </Col>
      </Row>
    </WallStorey>
  </div>
)
