import React, { useState } from 'react'
import { BiSearch } from 'react-icons/bi';
import { CgMenuLeft } from 'react-icons/cg';
import { GiCrossMark } from 'react-icons/gi';
import { BsCalendarDate } from 'react-icons/bs';
import { Sdata2, Sdata3 } from './data/Sdata';
const Projects = () => {
  const [query, setQuery] = useState("");
  const [bar, setBar] = useState("hiddenBar");

  const toggleBar = () => {
    if (bar === "hiddenBar") {
      setBar(`${"hiddenBar"} ${"hLeft"}`);
    } else {
      setBar("hiddenBar");
    }
  }
  const closeHam = () => {
    if (bar === `${"hiddenBar"} ${"hLeft"}`) {
      setBar("hiddenBar");
    } else {
      setBar(`${"hiddenBar"} ${"hLeft"}`);
    }

  }

  const sdata = Sdata3.filter((data) => data.name.toLowerCase().includes(query.toLowerCase()));
  let val = query


  return (

    <>
      <section className='project-section project-section2'>
        {bar && <div className={bar}>
          <section className='project-section '>
            <div className='container'>
              <div className='hero-section hero-sectionHam'>
                <div className='hero-left2'>
                  <div className='hamItem'>
                    <h1>Live projects</h1>
                    <GiCrossMark onClick={closeHam}/>
                  </div>

                  {Sdata2.map((data, index) => {
                    return (
                      <div className='hleft-item' key={index}>
                        <div className='h-imgBox'>
                          <img src={data.img} alt="" />
                        </div>
                        <span>{data.name}</span>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </section>
        </div>}
        <div className='container'>
          <div className='search-sec'>
            <h1>Live Projects </h1>
            <div className='hamburger' onClick={toggleBar}>
              <div className='hamDiv'>
                <CgMenuLeft />
              </div>

            </div>
            <div className='search-menu'>
              <div className='search-icon'>
                <BiSearch />
              </div>
              <input type="search" placeholder="Search my projects..." onChange={e => setQuery(e.target.value)} />
            </div>
          </div>
        </div>
      </section>
      <section className='project-section project-height'>
        <div className='container'>
          <div className='hero-section'>
            <div className='hero-left'>
              {Sdata2.map((data, index) => {
                return (
                  <div className='hleft-item' key={index}>
                    <div className='h-imgBox'>
                      <img src={data.img} alt="" />
                    </div>
                    <span>{data.name}</span>
                  </div>
                )
              })}

            </div>
            <div className='hero-right'>
              <p>Project Area</p>
              <h1>neoGCamp Level-0 Projects</h1>
              {sdata.length === 0 && <h3>{`No result found for "${val}"`}</h3>}
              <div className='hero-grid'>
                {Sdata3.filter((data) => {
                  if (query === "") {
                    return data;
                  }
                  else if (data.name.toLowerCase().includes(query.toLowerCase())) {
                    return data;
                  }

                }).map((data, index) => {
                  return (
                    <div className='hero-card' key={index}>
                      <div className='hero-cardItem'>
                        <h5>{data.ser}</h5>
                        <h2>{data.name}</h2>
                        <div className='hero-date'>
                          <span><BsCalendarDate />  {data.time}</span>
                        </div>
                        <p>{data.desc}</p>
                        <div className='hero-button'>
                          <button>Live project</button>
                          <button>Source code</button>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Projects