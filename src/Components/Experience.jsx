import React from 'react'
import experience from "./data/experience.json"

const Experience = () => {
  return (
    <>
      <div className="container ex" id='experience'> 
        <h1>EXPERIENCE</h1>
        {experience.map((data) => {
          return (
            <>
              <div key={data.id} className="ex-text text-center;"
                data-aos="zoom-in"
                data-aos-duration="1000">
                <div className="left">
                  <img src={`./assets/${data.imageSrc}`} alt="" />
                </div>

                <div className="right">
                  <h2>{data.role}</h2>
                  <h4>
                    {data.startDate} {data.endDate} {data.location}
                  </h4>
                  <h4>
                    {data.experiences[1]}
                    {data.experiences[2]}
                  </h4>


                </div>
              </div>
            </>
          )
        })}

      </div>
    </>
  )
}

export default Experience