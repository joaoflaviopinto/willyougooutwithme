'use client'

import Link from 'next/link';
import {useState} from 'react';

export default function page() {

  const [img, $img] = useState('puppy-eyes');
  const [how, $how] = useState(false);
  const [p, $p] = useState(null);

  const updteImg = (im) => {
    $img(im);
  }

  const nah = () => {
    const x = Math.random() * 90;
    const y = Math.random() * 90;

    $p({x: `${x}%`, y: `${y}%`});
    updteImg('unamused');
  };

  const dontdoit = () => {
    nah();
    updteImg('shock');
    $how(true)
  }

  return (
    <div className='box'>
      <img alt='gumball' className='gif' src={`/${img}.gif`} />
      {how ? 'Rummm, Você não tem escolha!' : 'Ana Paula Chiodelli, você aceita namorar comigo e ser minha para sempre?'}
      <div className='btns'>
        <Link className='yes' href='/yay'>
          <button onMouseOver={() => updteImg('sparkle-eyes')} onMouseOut={() => updteImg('puppy-eyes')}>
            Sim
          </button>
        </Link>
        <button className='no' 
          style={p ? {position: 'absolute', top: p.x, right: p.y} : null} 
          onClick={dontdoit} onMouseOver={nah}>
            Não
        </button> 
      </div>
    </div>
  )
  
}
