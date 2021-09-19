import React from 'react';
import { Line } from 'react-chartjs-2';

export default (props)=> (
  <>
    <div className='header'>
      <h1 className='title'>Evolução da criptomoeda {props.coinName}</h1>
      <h3>Valores referentes aos ultimos 30 dias </h3>
      <div className='links'>
        <a
          className='btn btn-gh'
          href='https://github.com/reactchartjs/react-chartjs-2/blob/master/example/src/charts/Line.js'
        >
        </a>
      </div>
    </div>
    <Line data={props.data} options={props.options} />
  </>
);
