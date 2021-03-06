import React from 'react';
import { Link } from "react-router-dom";

//classe que gera os percursos para a homePage do administrador
export class ListaPercursos extends React.Component{
	constructor(props){
		super(props);
		this.state ={
			percursos: props.percursos,
		};
	}

	renderLinhaPercurso(i){
		const url = "/editarPercurso/" + i[0]
		return (
			<div>
				{/*render de um percurso, com botao para editar*/}
				<Link to={url} percurso={i}>
					 {i[0]}<span className="secondary-content"><i className="material-icons green-text text-darken-4">edit</i></span>
				</Link>
			</div>
		);
	}

	render(){
		//transformando o vetor de paradas em uma colecao de elementos na pagina
		var aux = <p>Sem percursos cadastrados.</p>
		if(this.props.percursos != []){
			aux = this.props.percursos.map((percursos) => <li className="collection-item">{this.renderLinhaPercurso(percursos)}</li>);
		}
		return(
			<div>
				<div className="row">
					<ul className="collection col s12 m4 offset-m4 l4 offset-l4">
						{/*render da lista de percursos */}
						{aux}
					</ul>
				</div>
			</div>
		);
	}
}
