import React from 'react';
import {Link} from 'react-router-dom';
import Zadarr from './zadarr.jpg';

function Nova() {
  return (
    <div>

    <Link to = "/Prva" class = "povratak"> Sljedeća stranica </Link>

    <br></br>

    <h1> Zadar </h1>

    <img src = {Zadarr}></img>

    <br></br>
    <p>
    Smješten na samo nekoliko sati vožnje od Zagreba i Rijeke, Zadar je uz Split najurbanije mjesto Dalmacije. Ako je vjerovati londonskim novinama Timesu i Guardianu, Zadar je središte i prijestolnica zabave na Jadranu. Odlikuje se mnoštvom manifestacija kao što su: Glazbene večeri u Sv.Donatu, The Garden Festival, Noći punog miseca, Milennium Jump i još brojni drugi. Osim scensko-kulturnih manifestacija, grad obiluje bogatstvom kulturne baštine od kojih su najpoznatije: Gradske zidine, Perivoj kraljice Jelene Madijevke, crkva sv. Stošije, koju krasi romantična legenda rimske patricijke, i još 597 drugih. Od modernih spomenika svakako je bitno izdvojiti morske orgulje, koje su prve te vrste na svijetu, te već svjetski poznatu instalaciju Pozdrav Suncu. Uz to zadarski arhipelag obiluje i brojnim prirodnim ljepotama od kojih treba izdvojiti parkove prirode Sjeverni Velebit, Vransko jezero, Telašćicu te nacionalni parkove Kornati, Velebit, Plitvice, Krka i Paklenica.
    




    </p>
    
      
    </div>
  );
}

export default Nova;
