import React from 'react';
import {Link} from 'react-router-dom';
import Jej from './jej.jpg';

function Hiperveza() {
  return (
    <div>

    <Link to = "/" class = "povratak">Povratak na naslovnu stranicu</Link>

    <br></br>
    <h1> Povijest :) </h1>

    <img src = {Jej}></img>

    <br></br>

    <p>
    
    Hrvatska država izlazi na europsku pozornicu prvi put u 8 vijeku, i nakon nekoliko stoljeća samostalnosti, ulazi u personalnu uniju s Mađarskom, a obadvije države tijekom ratova s Turcima dolaze pod vlast Habsburgovaca, vladara Austrije, dok je primorski dio pod vlašću Venecije. U 19. stoljeću i Primorje i Dalmacija dolaze pod vlast Austrije, a dolazi i do oživljavanja hrvatskih težnji za ujedinjenjem države i stvaranje unije s drugim južnoslavenskim narodima. Austro-Ugarska raspada se 1918. godine, a Hrvatska nakon kratkotrajne Države SHS ulazi u zajedničku državu sa Srbijom, Crnom Gorom i Slovenijom koja se na kraju zvala Kraljevina Jugoslavija. Nakon raspada Kraljevine Jugoslavije poslije Nemačke invazije, okupatori proglašavaju stvaranje Nezavisne Države Hrvatske pod "vlašću" Ustaša. Opća narodna pobuna protiv ove zločinačke kvazidržave dovodi do stvaranja Socijalističke Republike Hrvatske koja ulazi kao federalna jedinica u novostvorenu socijalističku Jugoslaviju. Početkom 90-ih godina 20. stoljeća Jugoslavija se u krvavom ratu raspada, a Hrvatska postaje samostalna i međunarodno priznata država, s perspektivom ulaska u Europsku Uniju.
      
      
      
      
      </p>      
    </div>
  );
}

export default Hiperveza;
