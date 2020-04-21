import React from 'react'
import {divideScale, sinify} from './utils'

const heightFactor = 50
const sizeFactor = 6
const color = '#388E3C'

const lineStyle = (scale, w, h) => {
    const position = 'absolute'
    const size = Math.min(w, h) / sizeFactor
    const hf = h / heightFactor
    const height = `${hf}px`
    const width = `${(w - 2 * size) * scale}px`
    const top = `${h / 2 - hf / 2}px`
    const left = `${size}px`
    const background = color
    return {position, top,left, width, height, background}
}

const rectStyle = (scale, i, w, h, filled) => {
    const sci = divideScale(scale, i * 2, 3)
    const position = 'absolute'
    const size = Math.min(w, h) / sizeFactor
    const xFactor = filled ? size * (1 - i) * sci: 0
    const left = `${i * (w - size) + xFactor}px`
    const top = `${h / 2 - size / 2}px`

    const factor = (1 - i) * (1 - sci) + i * sci
    console.log(i, factor)
    const wup = filled ? size  * factor : size
    const width = `${wup}px`
    const height = `${size}px`
    const background = filled ? color : undefined
    const border = filled ? undefined : `2px solid ${color}`
    return {position, left, top, width, height, background, border}
}

const LineComponent = ({scale, w, h}) => {
    return (<div style = {lineStyle(scale, w, h)}></div>)
}

const RectComponent = ({onClick, i, scale, w, h}) => {
    return (<div onClick = {onClick}>
              <div style = {rectStyle(scale, i, w, h, true)}></div>
              <div style = {rectStyle(scale, i, w, h)}></div>
           </div>)
}

const rectComponents = (onClick, w, h, scale) => {
    const components = []
    for (var i = 0; i < 2; i++) {
        components.push(<RectComponent i = {i} scale = {scale} w = {w} h = {h} onClick = {onClick}/>)
    }
    return components
}

const CircleToCircleGrowComponent = ({onClick, scale, w, h}) => {
    console.log(w, h)
    const sf = sinify(scale)
    const sc2 = divideScale(sf, 1, 3)
    return (<div>
              {rectComponents(onClick, w, h, sf)}
              <LineComponent w = {w} h = {h} scale = {sc2}/>
          </div>)
}

export default CircleToCircleGrowComponent
