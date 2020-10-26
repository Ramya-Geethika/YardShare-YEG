import React from 'react';
import './Gardeningguide.scss';

function Gardeningguide() {
  return (
    <div className='row'>
      <div className='column'>
        <ul>
          <li><h1>Gardening Education</h1></li>
          <li><a href='https://www.almanac.com/gardening/planting-calendar/AB/Edmonton' target='_blank'>Zone 3 Climate Planting Calendar</a></li>
          <li><a href='http://edmontonnativeplantgroup.org/library.htm' target='_blank'>Ed Native Plant Society Library</a></li>
          <li><a href='https://www.evergreen.ca/downloads/pdfs/Backyard-Composting-Guide.pdf' target='_blank'>Backyard Composting</a></li>
          <li><a href='https://www.youtube.com/watch?v=eMQ1G4hTS1w' target='_blank'>Building a Raised Bed </a></li>
          <li><a href='https://veginyeg.ca/Community.php' target='_blank'>Starting an Urban Farm</a></li>
          <li><a href='https://archgreenhouses.com/learn/' target='_blank'>Sun Exposure & Other Tips</a></li>
          <li><a href='https://www.edmonton.ca/residential_neighbourhoods/gardens_lawns_trees/bugs-101.aspx#:~:text=Beneficial%20Insects&text=Predatory%20insects%20include%20commonly%20seen,dragonflies%20that%20feed%20on%20pests.' target='_blank'>Good Bugs, Bad Bugs</a></li>
        </ul>
      </div>
      <div className='column'>
        <ul>
          <li><h1>Finding Materials</h1></li>
          <li><a href='http://www.edmontontoollibrary.ca/' target='_blank'>Edmonton Tool Library </a></li>
          <li><a href='http://www.edmontonseedysunday.org/seedy-resources.html' target='_blank'>Seedy Sunday Resources</a></li>
          <li><a href='https://www.cleanitgreenit.net/organic-soil-1' target='_blank'>Compost</a></li>
          <li><a href='https://www.edmonton.ca/residential_neighbourhoods/gardens_lawns_trees/free-mulch-program.aspx' target='_blank'>City of Ed Free Mulch Program</a></li>
        </ul>
      </div>
    </div>

  )
}

export default Gardeningguide;