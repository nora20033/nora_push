import React from 'react';
import {Link} from 'react-router-dom';
import Treca from './treca.jpg';

function Prva() {
  return (
    <div>

    <Link to = "/Druga" class = "povratak"> Sljedeća stranica </Link>

    <br></br>

    <h1> Grad Split </h1>

    <img src = {Treca}></img>

    <br></br>
    <p>
    Podno Marijana u blizini Trogira i Omiša smjestio se drugi po veličini grad u Hrvatskoj Split. Ovo urbano središte Dalmacije idealno je za sve koji žele svoj odmor provesti tulumareći do kasno u noć. Najpoznatije znamenitosti Splita su Dioklecijanova palača koja stoji pod zaštitom UNESCO-a, katedrala sv.Dujma, kip Grgura Ninskog, Jupiterov hram i  Prokurative. S obzirom na to da je Split dalmatinsko urbano središte, imat ćete neograničene mogućnosti shoppinga, cijeli grad vrvi trgovinama i shopping-centrima. Ni gurmani neće u Splitu ostati gladni. U samom središtu grada, u blizini Dioklecijanove palače, nalazi se nekoliko kvalitetnih restorana koji će vam ponuditi specijalitete kako autohtone dalmatinske kuhinje, tako i inozemnih specijaliteta. Svi željni noćnog provoda i zabave do ranih jutarnjih sati moći će to učiniti u brojnim barovima i klubovima od kojih bismo kao najpoznatije izdvojili: Metropolis, Kocka, O Hara i Hemingvej gdje ćete uživati u glazbi domaćih i stranih izvođača.
       




    </p>
    
      
    </div>
  );
}

export default Prva;
