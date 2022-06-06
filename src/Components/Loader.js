import React from 'react'
import { Loader, Segment, Dimmer  } from 'semantic-ui-react'
function Loadercomponent() {
  return (
    <div >
      <Segment >
        <Dimmer active>
          <Loader size='large' active> Loading... </Loader>
        </Dimmer>
      </Segment>
    </div>
  )
}

export default Loadercomponent