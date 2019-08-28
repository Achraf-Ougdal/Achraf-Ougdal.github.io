import React from "react"
import generator from "./functions/generator"
import "./Generator.css"

class Generator extends React.Component{
	constructor(){
		super()
		this.state={
			input:"",
		}
		this.onChange = this.onChange.bind(this)
	}

	onChange(event){
		this.setState({
			input: event.target.value
		})
	}


	render(){
		return(
			<div style={{display:"flex", flexDirection:"column", justifyContent:"center"}}>
				<div className="centerIt">
						<div className="container">
							<div className="center">
								<div className="logo-container">
									<img className="achraf" src={ require('./logos/AchrafLogo.png') } alt={""}/>
									<img className="souhaib" src={ require('./logos/SouhaibLogo.png') } alt={""}/>
								</div>
							</div>
							<h1>Password Generator</h1>
							<input type="text" value={this.state.input} placeholder="Type a string to generate your password" onChange={this.onChange}/>
							<h2>Your password :</h2>
							<p>{generator(this.state.input)}</p>
						</div>
				</div>
			</div>
		)
	}
}

export default Generator