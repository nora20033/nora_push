import React from 'react';
import {Link} from 'react-router-dom';
import Mljet from './mljett.jpg';

function Druga() {
  return (
    <div>

    <Link to = "/" class = "povratak"> Povratak na naslovnu stranicu </Link>

    <br></br>

    <h1> Otok Mljet </h1>

    <img src = {Mljet}></img>

    <br></br>
    <p>
    U blizini Dubrovnika, Pelješca i Korčule smjestio se otok Mljet. Zbog svojih prirodnih ljepota te kristalno čistog mora, sjeverozapadni dio otoka je proglašen nacionalnim parkom. Pomalo neobični nazivi mjesta na Mljetu kao što su Okuklje, Prožura, Sobra, Ropa, Babine Kuće kriju ljepotu crnogoričnih šuma, kristalno čistog mora te prekrasne plaže koje svi rado posjećuju. Uz nacionalni park svakako se isplati posjetiti otočić Sv.Marije sa dominikanskim samostanom, romaničko-renesansno-baroknog uređenja, pješčane plaže Saplunaru i Blaće, Antičku palaču, Odisejevu špilju te Veliko i Malo jezero.  Bogatu gastronomsku ponudu možete iskušati u brojnim restoranima i konobama, svakako ne propustite probati jegulju koja je jedan od najpopularnijih mljetskih specijaliteta. Zbog nedostatka disko-klubova i barova koji bi radili kasno u noć, Mljet je idealan izbor za sve koji žele provesti miran odmor uživajući u prirodnim ljepotama.




    </p>
    
      
    </div>
  );
}

export default Druga;
