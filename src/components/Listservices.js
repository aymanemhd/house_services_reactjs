
import  Navigation  from "./Navigation";
import Header from "./header";
import  {Contact}  from "./contact";
import JsonData from "../data/data.json";

import {useState} from 'react';
import { Button,Modal,Input } from 'react-bootstrap';

function Listservices() {
    const [show, setShow] = useState(false);
 
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <div>
      <Navigation />
      <div class="container ">
          <div className="crud shadow-lg p-3 mb-5 mt-5 bg-body rounded"> 
          <div class="row ">
           
           <div class="col-sm-3 mt-5 mb-4 text-gred">
              <div className="search">
                <form class="form-inline">
                 <input class="form-control mr-sm-2" type="search" placeholder="Search Student" aria-label="Search"/>
                
                </form>
              </div>    
              </div>  
              <div class="col-sm-3 offset-sm-2 mt-5 mb-4 text-gred" style={{color:"green"}}><h2><b>Services Details</b></h2></div>
              <div class="col-sm-3 offset-sm-1  mt-5 mb-4 text-gred">
              <Button variant="primary" onClick={handleShow}>
                Add New Student
              </Button>
             </div>
           </div>  
            <div class="row">
                <div class="table-responsive " >
                 <table class="table table-striped table-hover table-bordered">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nom service </th>
                            <th>Nombre D'annonceur</th>
                            <th>Nombre D'Offre</th>
                            <th>Moyen de payment</th>
                         
                        </tr>
                    </thead>
                    <tbody>
                        
                        <tr>
                            <td>1</td>
                            <td>Jardinier</td>
                            <td>15</td>
                            <td>5</td>
                            <td>250 DH</td>
                            
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Plombier</td>
                            <td>10</td>
                            <td>2</td>
                            <td>150 DH</td>
                           
                        </tr>
                         
 
                        <tr>
                            <td>3</td>
                            <td>electrecien</td>
                            <td>2</td>
                            <td>1</td>
                            <td>350 DH</td>
                            
                        </tr>
 
                        <tr>
                            <td>4</td>
                            <td>painture</td>
                            <td>4</td>
                            <td>6</td>
                            <td>120 DH</td>
                           
                        </tr>
 
 
                        <tr>
                            <td>5</td>
                            <td>Installation Parabole</td>
                            <td>3</td>
                            <td>1</td>
                            <td>180 DH</td>
                           
                        </tr>
 
 
                        
                    </tbody>
                </table>
            </div>   
        </div>  
 
        {/* <!--- Model Box ---> */}
        <div className="model_box">
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Record</Modal.Title>
        </Modal.Header>
            <Modal.Body>
            <form>
                <div class="form-group">
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name"/>
                </div>
                <div class="form-group mt-3">
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Country"/>
                </div>
                <div class="form-group mt-3">
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter City"/>
                </div>
                <div class="form-group mt-3">
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Enter Country"/>
                </div>
                
                  <button type="submit" class="btn btn-success mt-4">Add Record</button>
                </form>
            </Modal.Body>
 
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
  
       {/* Model Box Finsihs */}
       </div>  
      </div>    
      </div>  
    </div>
  );
}

export default Listservices;
