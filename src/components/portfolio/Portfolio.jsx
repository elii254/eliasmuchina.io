import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'


const data = [
  {
 id: 1,
 image: IMG1,
 tittle: 'Orion UI kit - Charts templates & infographics in Figma',
 github: "https://github.com",
 demo: "https://dribbble.com/shots/18543050-Orion-UI-kit-Charts-templates-infographics-in-Figma"
  },
  
  {
   id: 2,
   image: IMG2,
   tittle: 'Orion UI kit - Charts templates & infographics in Figma',
   github: "https://github.com",
   demo: "https://dribbble.com/shots/18543050-Orion-UI-kit-Charts-templates-infographics-in-Figma"
    },

  {
     id: 3,
     image: IMG3,
     tittle: 'Orion UI kit - Charts templates & infographics in Figma',
     github: "https://github.com",
     demo: "https://dribbble.com/shots/18543050-Orion-UI-kit-Charts-templates-infographics-in-Figma"
      },
      {
       id: 4,
       image: IMG4,
       tittle: 'Orion UI kit - Charts templates & infographics in Figma',
       github: "https://github.com",
       demo: "https://dribbble.com/shots/18543050-Orion-UI-kit-Charts-templates-infographics-in-Figma"
        },
        {
         id: 5,
         image: IMG5,
         tittle: 'Orion UI kit - Charts templates & infographics in Figma',
         github: "https://github.com",
         demo: "https://dribbble.com/shots/18543050-Orion-UI-kit-Charts-templates-infographics-in-Figma"
          },
          {
           id: 6,
           image: IMG6,
           tittle: 'Orion UI kit - Charts templates & infographics in Figma',
           github: "https://github.com",
           demo: "https://dribbble.com/shots/18543050-Orion-UI-kit-Charts-templates-infographics-in-Figma"
            }



]


function Portfolio() {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">

        {
          data.map(({id, image, github, tittle,demo}) => {
            return (
              <article key={id} className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={image} alt="tittle" />
          </div>
          <h3>{tittle}</h3>
          
          <div className="portfolio__item-cta">
          <a href={github} className='btn'>Github</a>
          <a href={demo} className='btn btn-primary' target='_blank'>
            Live Demo</a>
          </div>

        </article>
            )
          }
          )
        }

         

      </div>
      
      </section>
  )
}

export default Portfolio