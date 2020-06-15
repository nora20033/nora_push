import React from 'react';
import {Link} from 'react-router-dom';
import Slika from './haii.jpg';

function Naslovna() {
  return (
    <div>
 <table class = "tablica">
<tr>
<td>
<Link to = "/Pocetna" class = "povratak"> Top destinacije u Hrvatskoj  </Link>
</td>
<td>
<Link to = "/Hiperveza" class = "povratak"> Povijest Hrvatske </Link>
</td>
 </tr>
        </table>
        <h1>
            TOP DESTINACIJE U HRVATSKOJ 
        </h1>

        <img src = {Slika}></img>
      
    </div>
  );
}


export default Naslovna;
