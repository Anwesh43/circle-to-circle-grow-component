import React from 'react'
import {divideScale, sinify} from './utils'

const heightFactor = 50
const sizeFactor = 6
const color = '#388E3C'

const lineStyle = (scale, w, h) => {
    const position = 'absolute'
    const hf = h / heightFactor
    const height = `${hf}px`
    const width = `${(w - 2 * size) * scale}px`
    const size = Math.min(w, h) / sizeFactor
    const top = `${h / 2 - hf / 2}px`
    const left = `${size}px`
    const background = color
    return {position, top,left, width, height, background}
}

const rectStyle = (scale, i, w, h) => {
    const position = 'absolute'
    const size = Math.min(w, h) / sizeFactor
    const left = `${i * (w - size)}px`
    const top = `${h / 2 - size / 2}px`
    const width = `${size  * (1 - i) * (1 - divideScale(scale, i * 2, 3))}px`
    const height = `${size}px`
    const background = color
    return {position, left, top, width, height, background}

const LineComponent = (scale, w, h) => {
    return (<div style = {lineStyle}></div>)
}

const RectComponent = (onClick, i, scale, w, h) => {
    return (<div onClick = {onClick} style = {rectStyle(scale, i, w, h)}></div>)
}

const CircleToCircleGrowComponent = ({onClick, scale, w, h}) => {
    const sf = sinify(scale)
    const sc2 = divideScale(sf, 1, 3)
    return (<div>
              {[0, 1].map(i => <RectComponent i = {i} scale = {sf} w = {w} h = {h} onClick = {onClick}/>}
              <LineComponent w = {w} h = {h} scale = {sc2}/>
          </div>)
}

export default CircleToCircleGrowComponent
