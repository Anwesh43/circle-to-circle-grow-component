import React from 'react';
import logo from './logo.svg';
import './App.css';
import {useDimension, useAnimatedScale} from './hooks'
import CircleToCircleGrowComponent from './CircleToCircleGrowComponent'
function App() {
  const {resize, w, h} = useDimension()
  const {scale, start} = useAnimatedScale(0.02 / 3, 30)
  return (
    <div className="App">
      <CircleToCircleGrowComponent w = {w} h = {h} scale = {scale} onClick = {start}/>
    </div>
  );
}

export default App;
