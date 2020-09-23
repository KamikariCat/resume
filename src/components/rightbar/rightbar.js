import React from 'react';

// Components
import Social from "../social";

// Elements
import {TextElements, ImageElements} from '../../elements';

export default () =>
{
  return(
      <>
          <div className="column column_right">
              <div className="column_container jcfe">
                  <div className="userName">
                      <TextElements.HeaderText value="Max Matiichuk"/>
                      <TextElements.SubHeaderText value="JavaScript developer"/>
                  </div>
                  <ImageElements.Avatar />
              </div>
              <div className="column_container fdc">
                  <nav>
                      <Social />
                  </nav>
              </div>
          </div>
      </>
  )
}
