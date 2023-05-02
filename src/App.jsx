import React from "react"
import Contact from "./Contact.jsx"
import mrFelix from './assets/felix.png'
import mrFluffykins from './assets/fluffykins.png'

import mrWhiskerson from './assets/mr-whiskerson.png'

import mrPumkin from './assets/pumpkin.png'



function App() {
  return (
      <div className="contacts">
          <Contact 
              img={mrWhiskerson}
              name="Mr. Whiskerson"
              phone="(212) 555-1234"
              email="mr.whiskaz@catnap.meow"
          />
          <Contact 
              img={mrFluffykins}
              name="Fluffykins"
              phone="(212) 555-2345"
              email="fluff@me.com"
          />
          <Contact 
              img={mrFelix}
              name="Felix"
              phone="(212) 555-4567"
              email="thecat@hotmail.com"
          />
          <Contact 
              img={mrPumkin}
              name="Pumpkin"
              phone="(0800) CAT KING"
              email="pumpkin@scrimba.com"
          />
      </div>
  )
}

export default App