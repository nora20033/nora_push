import React from 'react';
import {Link} from 'react-router-dom';
import Druga from './druga.jpg';

function Pocetna() {
  return (
    <div>

        <Link to = "/Nova" class = "povratak"> Sljedeća stranica </Link>

        <br></br>
        <h1>
          Dubrovnik
        </h1>

        <img src = {Druga}></img>

        <p>
       Dubrovnik se smjestio na jugu države. Okružen sa svoja 3 elafita, otocima Lopudom, Lokrumom i Koločepom u blizini Trstena i Orašca. Osnovan je u 7.stoljeću, a svoj barokni izgled duguje požaru iz 17.stoljeća. Kao grad pod UNESCO-vom zaštitom cijeli grad je veliki muzej. Najistaknutiji kulturni spomenici su svakako, Knežev dvor, Gradske zidine, Lovrijenac, Orlandov stup, Tvrđava sv.Ivana i brojni drugi. Na Stradunu ćete pronaći sve što kao turist možete sanjati - od trgovina i suvenirnica do brojnih restorana koji su se ovdje smjestili. Noću je Stradun jedno od glavnih mjesta za izlazak i zabavu. Popularni za izlazak su još i Latino Club Fuego i Culture Club Revelin gdje ćete uz zvukove svjetski poznatih DJ-a moći tulumariti do ranih jutarnjih sati.
        
        
        
        </p>      
      
    </div>
  );
}

export default Pocetna;
