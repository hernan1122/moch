import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import '../styles/CardDetails.css'

//icons
import { AiFillStar } from 'react-icons/ai'

import avatar from '../images/avatar_the_way_of_water.jpg'

function CardDetails({title, image, score, description, categories, similarTitles}) {
  return (
    <div className='CardDetails'>
      <Header />
      <img className='CardDetails-img' src={avatar} alt="" />
      <div className='CardDetails-container'>
        <div className='CardDetails-container-title'>
          <h2>Avatar: the way of water</h2>
          <div className='CardDetails-score'>
            <AiFillStar className='icon' />
            <p>80</p>
          </div>
        </div>
        <div className='CardDetails-description'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae fugiat iusto architecto minima soluta repellat consequuntur dolores velit non! Dicta sunt assumenda vitae laudantium nobis dolores sequi est perferendis necessitatibus!
          </p>
        </div>
        <div className='CardDetails-categories'>
          <div className='CardDetails-categories-content'>
            <h3>Acción</h3>
          </div>
          <div className='CardDetails-categories-content'>
            <h3>Acción</h3>
          </div>
          <div className='CardDetails-categories-content'>
            <h3>Acción</h3>
          </div>
        </div>
        <div className='CardDetails-similar'>
          <h2>Titulos similares</h2>
          <div className='CardDetails-similar-container'>
            <Link to={'/details'}>
              <img src={avatar} alt=''/>
            </Link>
            <Link to={'/details'}>
              <img src={avatar} alt=''/>
            </Link>
            <Link to={'/details'}>
              <img src={avatar} alt=''/>
            </Link>
            <Link to={'/details'}>
              <img src={avatar} alt=''/>
            </Link>
            <Link to={'/details'}>
              <img src={avatar} alt=''/>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardDetails




// return (
//     <div className='CardDetails'>
//       <Header />
//       <img className='CardDetails-img' src={avatar} alt="" />
//       <div className='CardDetails-container'>
//         <div className='CardDetails-container-title'>
//           <h2>Avatar: the way of water</h2>
//           <div className='CardDetails-score'>
//             <AiFillStar className='icon' />
//             <p>80</p>
//           </div>
//         </div>
//         <div className='CardDetails-description'>
//           <p>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae fugiat iusto architecto minima soluta repellat consequuntur dolores velit non! Dicta sunt assumenda vitae laudantium nobis dolores sequi est perferendis necessitatibus!
//           </p>
//         </div>
//         <div className='CardDetails-categories'>
//           <div className='CardDetails-categories-content'>
//             <h3>Acción</h3>
//           </div>
//           <div className='CardDetails-categories-content'>
//             <h3>Acción</h3>
//           </div>
//           <div className='CardDetails-categories-content'>
//             <h3>Acción</h3>
//           </div>
//         </div>
//         <div className='CardDetails-similar'>
//           <h2>Titulos similares</h2>
//           <div className='CardDetails-similar-container'>
//             <Link to={'/details'}>
//               <img src={avatar} alt=''/>
//             </Link>
//             <Link to={'/details'}>
//               <img src={avatar} alt=''/>
//             </Link>
//             <Link to={'/details'}>
//               <img src={avatar} alt=''/>
//             </Link>
//             <Link to={'/details'}>
//               <img src={avatar} alt=''/>
//             </Link>
//             <Link to={'/details'}>
//               <img src={avatar} alt=''/>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
// );
