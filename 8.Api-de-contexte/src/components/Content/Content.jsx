import React from 'react'
import './Content.css'
import { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeProvider'

export default function Content() {

    const {darkmode} = useContext(ThemeContext)

  return (
    <div className='container'>
        <h1>{darkmode ? "C'est la nuit" : "Le jour s'est levé"}</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet, distinctio!
        Maiores quas cum totam fugiat veritatis enim fugit reprehenderit eos.
        Magnam, nulla iste? Quasi harum obcaecati officia eligendi. Sequi, tempore!
        Ut officia voluptatum magnam sequi repudiandae ipsum voluptatem, quo perspiciatis?
        Totam nihil adipisci repudiandae! Eaque atque ipsam dicta labore saepe.
        Provident natus fuga veritatis eius eum, ratione beatae magnam ducimus?
        Excepturi atque culpa similique nulla esse sint eligendi praesentium repudiandae?
        Laboriosam esse, culpa iusto minima totam nam laudantium eos harum.
        Sequi corrupti dolorem eveniet aspernatur iusto veritatis similique rerum magnam?
        Sunt quo modi ut in, est at quaerat optio quasi.</p>
    </div>
  )
}
