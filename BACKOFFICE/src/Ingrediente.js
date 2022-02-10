import React, { Component } from "react";
import { Table } from "react-bootstrap";

import { Button, ButtonToolbar } from "react-bootstrap";
import { AddIngredienteModal } from "./AddIngredienteModal";
import { EditIngredienteModal } from "./EditIngredienteModal";


export class Ingrediente extends Component{

    constructor(props){
        super(props);
        this.state={ngr:[], AddModalShow:false, editModalShow:false}
    }

    refreshList(){
        fetch("https://localhost:44307/api/Ingredienti")
        .then(response=>response.json())
        .then(data=>{
            this.setState({ngr:data});
        })
    }

    componentDidMount(){
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }

    deleteDolce(ngrid){
        if(window.confirm("Sei sicuro di voler eliminare il prodotto?")){
            fetch("https://localhost:44307/api/Ingredienti/" + ngrid, {
                method:"DELETE",
                header:{
                    "Accept":"application/json",
                    "Content-Type":"application/json"
                }
            })
        }
    }

    render(){
        const {ngr, ngrid, ngrnome}=this.state;
        let addModalClose=() => this.setState({addModalShow:false});
        let editModalClose=() => this.setState({editModalShow:false});
        return(
            <div>
                <Table className="mt-4" striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>IdIngrediente</th>
                            <th>Nome</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ngr.map(ingrediente => 
                            <tr key={ingrediente.id}>
                                <td>{ingrediente.id}</td>
                                <td>{ingrediente.nome}</td>
                                <td>
                                    <ButtonToolbar>
                                        <Button className="mr-2" variant="info" onClick={() => this.setState({editModalShow:true, ngrid:ingrediente.id, ngrnome:ingrediente.nome})}>
                                            Modifica
                                        </Button>

                                        <Button className="mr-2" variant="danger" onClick={() => this.deleteIngrediente(ingrediente.id)}>
                                            Elimina
                                        </Button>

                                        <EditIngredienteModal show={ this.state.editModalShow }
                                        onHide={editModalClose}
                                        ngrid={ngrid}
                                        ngrnome={ngrnome}/>
                                    </ButtonToolbar>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </Table>

                <ButtonToolbar>
                    <Button variant="primary" onClick={() => this.setState({addModalShow:true})}>
                        Aggiungi ingrediente
                    </Button>

                    <AddIngredienteModal show={ this.state.addModalShow }
                    onHide={addModalClose} />
                </ButtonToolbar>
            </div>
        )
    }
}