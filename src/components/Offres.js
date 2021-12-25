
import  Navigation  from "./Navigation";
import Header from "./header";
import  {Contact}  from "./contact";
import JsonData from "../data/data.json";

import {useState} from 'react';
import { Button,Modal,Input, OffcanvasHeader } from 'react-bootstrap';

function Offres() {
  
  return (
    <div>
      <Navigation />
      <h1 class="separator"></h1>
                <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item">
                <a class="nav-link active" id="Jardinier-tab" data-toggle="tab" href="#Jardinier" role="tab" aria-controls="Jardinier" aria-selected="true">Jardinier</a>
            </li>
            <li class="nav-item">
                <a class="nav-link " id="Plombier-tab" data-toggle="tab" href="#Plombier" role="tab" aria-controls="Plombier" aria-selected="true">Plombier</a>
            </li>
            <li class="nav-item">
                <a class="nav-link " id="Electricien-tab" data-toggle="tab" href="#Electricien" role="tab" aria-controls="Electricien" aria-selected="true">Electricien</a>
            </li>
            <li class="nav-item">
                <a class="nav-link " id="Painture-tab" data-toggle="tab" href="#Painture" role="tab" aria-controls="Painture" aria-selected="true">Painture</a>
            </li>
            <li class="nav-item">
                <a class="nav-link " id="InstallationParabole-tab" data-toggle="tab" href="#InstallationParabole" role="tab" aria-controls="InstallationParabole" aria-selected="true">Installation Parabole</a>
            </li>
           
            </ul>
            <div class="tab-content" id="myTabContent">
            <div class="tab-pane fade show active" id="Jardinier" role="tabpanel" aria-labelledby="Jardinier-tab">
                <div class="jumbotron">
                <h1 class="display-3 ">Mohammed </h1>
                <p class="lead">crée, aménage et entretient parcs. La préparation des sols, les semis, les plantations de fleurs 
                ou d'arbustes et l'entretien des allées et des pelouses sont de son ressort.</p>
                <a class="btn btn-primary btn-lg" href="#" role="button">Accepter</a>
                <a class="btn  btn-lg" href="#" role="button">250 Dh</a>
                </div>
                <div class="jumbotron">
                <h1 class="display-3 ">Haytam </h1>
                <p class="lead">crée, aménage et entretient parcs. La préparation des sols, les semis, les plantations de fleurs 
                ou d'arbustes et l'entretien des allées et des pelouses sont de son ressort.</p>
                <a class="btn btn-primary btn-lg" href="#" role="button">Accepter</a>
                <a class="btn  btn-lg" href="#" role="button">270 Dh</a>
                </div>
                <div class="jumbotron">
                <h1 class="display-3 ">Morade </h1>
                <p class="lead">crée, aménage et entretient parcs. La préparation des sols, les semis, les plantations de fleurs 
                ou d'arbustes et l'entretien des allées et des pelouses sont de son ressort.</p>
                <a class="btn btn-primary btn-lg" href="#" role="button">Accepter</a>
                <a class="btn  btn-lg" href="#" role="button">150 Dh</a>
                </div>
            </div>
            <div class="tab-pane fade" id="Plombier" role="tabpanel" aria-labelledby="Plombier-tab">
            <div class="jumbotron">
                <h1 class="display-3 ">Mehdi </h1>
                <p class="lead">crée, aménage Rénovation et installation de nouveaux matériaux sanitaires</p>
                <a class="btn btn-primary btn-lg" href="#" role="button">Accepter</a>
                <a class="btn  btn-lg" href="#" role="button">750 Dh</a>
                </div>
                <div class="jumbotron">
                <h1 class="display-3 ">Anass </h1>
                <p class="lead">crée, aménage Rénovation et installation de nouveaux matériaux sanitaires</p>
                <a class="btn btn-primary btn-lg" href="#" role="button">Accepter</a>
                <a class="btn  btn-lg" href="#" role="button">370 Dh</a>
                </div>
                <div class="jumbotron">
                <h1 class="display-3 ">Kamal </h1>
                <p class="lead">crée, aménage Rénovation et installation de nouveaux matériaux sanitaires</p>
                <a class="btn btn-primary btn-lg" href="#" role="button">Accepter</a>
                <a class="btn  btn-lg" href="#" role="button">190 Dh</a>
                </div>
            </div>
            <div class="tab-pane fade" id="Electricien" role="tabpanel" aria-labelledby="Electricien-tab">
            <div class="jumbotron">
                <h1 class="display-3 ">Nabil </h1>
                <p class="lead">chargé de remplacer les anciennes installations électriques pour en assurer la conformité aux normes.</p>
                <a class="btn btn-primary btn-lg" href="#" role="button">Accepter</a>
                <a class="btn  btn-lg" href="#" role="button">750 Dh</a>
                </div>
                <div class="jumbotron">
                <h1 class="display-3 ">Mohammed </h1>
                <p class="lead">chargé de remplacer les anciennes installations électriques pour en assurer la conformité aux normes.</p>
                <a class="btn btn-primary btn-lg" href="#" role="button">Accepter</a>
                <a class="btn  btn-lg" href="#" role="button">370 Dh</a>
                </div>
                <div class="jumbotron">
                <h1 class="display-3 ">Ali </h1>
                <p class="lead">chargé de remplacer les anciennes installations électriques pour en assurer la conformité aux normes.</p>
                <a class="btn btn-primary btn-lg" href="#" role="button">Accepter</a>
                <a class="btn  btn-lg" href="#" role="button">500 Dh</a>
                </div>
            </div>
            
            <div class="tab-pane fade" id="Painture" role="tabpanel" aria-labelledby="Painture-tab">
            <div class="jumbotron">
                <h1 class="display-3 ">Nabil </h1>
                <p class="lead">charge des nettoyages et ravalements de façade et de l’application de peinture extérieure.</p>
                <a class="btn btn-primary btn-lg" href="#" role="button">Accepter</a>
                <a class="btn  btn-lg" href="#" role="button">750 Dh</a>
                </div>
                <div class="jumbotron">
                <h1 class="display-3 ">Mohammed </h1>
                <p class="lead">charge des nettoyages et ravalements de façade et de l’application de peinture extérieure.</p>
                <a class="btn btn-primary btn-lg" href="#" role="button">Accepter</a>
                <a class="btn  btn-lg" href="#" role="button">370 Dh</a>
                </div>
                <div class="jumbotron">
                <h1 class="display-3 ">Ali </h1>
                <p class="lead">charge des nettoyages et ravalements de façade et de l’application de peinture extérieure.</p>
                <a class="btn btn-primary btn-lg" href="#" role="button">Accepter</a>
                <a class="btn  btn-lg" href="#" role="button">500 Dh</a>
                </div>
            </div>
            <div class="tab-pane fade" id="InstallationParabole" role="tabpanel" aria-labelledby="InstallationParabole-tab">.dzdz..</div>
            </div>
       </div>  
    
  );
}

export default Offres;
