import React from 'react'
import img1 from "./images/img1.svg"
import wave from "./images/wave.png"
import Sdata from './data/Sdata'
import project from "./images/icons8-project-64.png"
import blog from "./images/icons8-google-blog-search.svg"
import {NavLink} from "react-router-dom"


const Home = () => {
    return (
        <div className='mainRoot'>
            <section className='home-section'>
                <div className='container'>
                    <div className='content-box'>
                        <div className='content-item'>
                            <div className='left-sec'>
                                <h1>Hi all, I'm Sahil <span><img src={wave} alt="" /></span></h1>
                                <p>A passionate Full Stack Web Developer 🚀 and Graphic Designer having an experience of building Web and Graphic designs with JavaScript / ReactJs / NextJs / and some other cool libraries and frameworks.</p>
                                <div className='left-btn'>
                                    <a href="mailto:mosahil228@gmail.com" target="_blank" rel="noreferrer noopener"><button>CONTACT VIA EMAIL</button></a>
                                    <a href="/" target="_blank" rel="noreferrer noopener"><button>MY RESUME</button></a>
                                    <NavLink to="/projects" ><button >neoG Projects</button></NavLink>
                                </div>
                            </div>
                            <div className='right-sec'>
                                <img src={img1} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Techlogies i know section */}
            <section className='home-section'>
                <div className='container'>
                    <div className='content-box'>
                        <div className='tech-sec'>
                            <h1>Technoligies I Know</h1>
                            <div className='tech-item'>
                                {Sdata.map((item, index) => {
                                    return (
                                        <div className='tech-box' key={index}>
                                            <div className='tech-left'>
                                                <img src={`${item.img}`} alt="" />
                                            </div>
                                            <div className='tech-right'>
                                                <h4>{item.name}</h4>
                                                <p>{item.level}</p>
                                            </div>
                                        </div>
                                    )
                                })}

                            </div>
                            <div className='project-box'>
                                <div className='pBox1'>
                                    <div className='pRounded'>
                                        <img src={project} alt=""/>
                                    </div>
                                    <p>I like to showcase my work and you can see my projects hosted online.</p>
                                    <NavLink to="/projects"><div className='pBtn'><span>See my Projects</span></div></NavLink>
                                </div>
                                <div className='pBox2'>
                                    <div className='pRounded pRounded2'>
                                        <img src={blog} alt=""/>
                                    </div>
                                    <p>I am also working on some technical and non techincal blogs.</p>
                                    <NavLink to="/"><div className='pBtn2'><span>See my Blogs </span></div></NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home