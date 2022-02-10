import React, { Component } from "react";
import { Table } from "react-bootstrap";

import { Button, ButtonToolbar } from "react-bootstrap";
import { AddDolceModal } from "./AddDolceModal";
import { EditDolceModal } from "./EditDolceModal";


export class Dolce extends Component{

    constructor(props){
        super(props);
        this.state={dlc:[], AddModalShow:false, editModalShow:false}
    }

    refreshList(){
        fetch("https://localhost:44307/api/Dolci")
        .then(response=>response.json())
        .then(data=>{
            this.setState({dlc:data});
        })
    }

    componentDidMount(){
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }

    deleteDolce(dlcid){
        if(window.confirm("Sei sicuro di voler eliminare il prodotto?")){
            fetch("https://localhost:44307/api/Dolci/" + dlcid, {
                method:"DELETE",
                header:{
                    "Accept":"application/json",
                    "Content-Type":"application/json"
                }
            })
        }
    }

    render(){
        const {dlc, dlcid, dlcnome, dlcquantita, dlcprezzo}=this.state;
        let addModalClose=() => this.setState({addModalShow:false});
        let editModalClose=() => this.setState({editModalShow:false});
        return(
            <div>
                <Table className="mt-4" striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>IdDolce</th>
                            <th>Nome</th>
                            <th>Prezzo</th>
                            <th>Quantità</th>
                            <th>Opzioni</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dlc.map(dolce => 
                            <tr key={dolce.id}>
                                <td>{dolce.id}</td>
                                <td>{dolce.nome}</td>
                                <td>{dolce.prezzo}</td>
                                <td>{dolce.quantita}</td>
                                <td>
                                    <ButtonToolbar>
                                        <Button className="mr-2" variant="info" onClick={() => this.setState({editModalShow:true, dlcid:dolce.id, dlcnome:dolce.nome, dlcquantita:dolce.quantita, dlcprezzo:dolce.prezzo})}>
                                            Modifica
                                        </Button>

                                        <Button className="mr-2" variant="danger" onClick={() => this.deleteDolce(dolce.id)}>
                                            Elimina
                                        </Button>

                                        <EditDolceModal show={ this.state.editModalShow }
                                        onHide={editModalClose}
                                        dlcid={dlcid}
                                        dlcnome={dlcnome}
                                        dlcquantita={dlcquantita}
                                        dlcprezzo={dlcprezzo}/>
                                    </ButtonToolbar>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </Table>

                <ButtonToolbar>
                    <Button variant="primary" onClick={() => this.setState({addModalShow:true})}>
                        Aggiungi dolce
                    </Button>

                    <AddDolceModal show={ this.state.addModalShow }
                    onHide={addModalClose} />
                </ButtonToolbar>
            </div>
        )
    }
}