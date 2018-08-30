import React from 'react';
import './movie-form.css'

class MovieFormControlled extends React.Component {

    constructor(props){
        super(props);
        this.formRef = React.createRef();
        this.state = {
            errors:null,
            formData:{}
        }
    }
    componentDidMount(){
    }

    componentDidUpdate(prevProps){
    }

    resetForm(){
        this.setState({formData:{}});
    }
    submitForm(event){
        event.preventDefault();
        const form=this.formRef.current;
        const formData = this.validate(form.elements);
        if(formData.isValid){
            this.props.formSubmitted(this.state.formData);
        }
        else{
            this.setState({errors:formData.errors})
        }
    }

    validate(elements){
        const elemArr = Array.from(elements);
        
        const formResult = { isValid:true, data:{}, errors:[]}
        return elemArr.reduce((formResult,elem) =>{
            if(formResult.isValid){
                if(elem.hasAttribute('name')){
                    const field = this.validateField(elem);
                    formResult.isValid = field.valid
                    if(field.valid){
                        formResult.data[elem.name] = elem.value; 
                    }
                    else{
                        formResult.errors.push({name:elem.name, error:field.errMsg});
                    }
                }
                return formResult; 
            }
            return formResult;
        },formResult);        
    }


    handleChange(event){

        const element = event.target;
        let elementVal;
        if(element.type === 'select-multiple'){
            elementVal = {[element.name]:[...element.options].filter(o => o.selected).map(o => o.value)};
        }
        else{
            elementVal = { [element.name]: element.type === 'checkbox' ? element.checked : element.value };
        }
        const newFormData = {...this.state.formData, ...elementVal};
        this.setState({formData:newFormData});
    }
    
    validateField(element){

        if(element.hasAttribute('required')){
            return { valid:!!element.value, errMsg:'field is required' } ;
        }


        return {valid:true}

    }

    render(){
        return <React.Fragment>
            <div>
                <button onClick={this.resetForm.bind(this)} >Reset</button>
            </div>
            <form className="movie-form" noValidate ref={this.formRef} onSubmit={this.submitForm.bind(this)} > 
                {this.state.errors ? <div className='error'>
                    <div>form is invalid:</div>
                    <ul>
                        {this.state.errors.map(item => <li key={item.name} >{item.name}:{item.error}</li>) }
                    </ul>
                </div> : '' }
                <div >
                    <div className="input-wrapper" >
                        <input name="title" 
                            ref={this.inputTitle}
                            placeholder="Enter Title"
                            onChange={this.handleChange.bind(this)}
                            value={this.state.formData.title || ""}
                            required
                            />
                    </div>
                    <div className="input-wrapper">
                        <input name="year" 
                            placeholder="Enter year" 
                            onChange={this.handleChange.bind(this)}
                            value={this.state.formData.year || ""} />
                    </div>
                    <div className="input-wrapper">
                        <input name="poster" 
                            placeholder="Enter poster url" 
                            onChange={this.handleChange.bind(this)}
                            value={this.state.formData.poster || ""} />
                    </div>
                    <div className="input-wrapper">
                        <label>
                            In Cinemas:
                            <input 
                                name="inCinemas"
                                type="checkbox"
                                checked={!!this.state.formData.inCinemas} 
                                onChange={this.handleChange.bind(this)}
                            /> 
                        </label>
                    </div>
                    <div className="input-wrapper">
                        <label>Rating</label>:
                        <div>
                            <label>
                                <input 
                                    name="rating"
                                    type="radio"
                                    checked={this.state.formData.rating === "G"}
                                    value="G" 
                                    onChange={this.handleChange.bind(this)}
                                /> 
                                G
                            </label>
                            <label>
                                <input 
                                    name="rating"
                                    type="radio"
                                    checked={this.state.formData.rating === "PG"}
                                    value="PG" 
                                    onChange={this.handleChange.bind(this)}
                                /> 
                                PG
                            </label>
                            <label>
                                <input 
                                    name="rating"
                                    type="radio"
                                    checked={this.state.formData.rating === "PG-13"}
                                    value="PG-13" 
                                    onChange={this.handleChange.bind(this)}
                                /> 
                                PG-3
                            </label>
                        </div>
                    </div>
                    <div className="input-wrapper select multi">
                        <label>Genres:</label>
                        <select multiple={true} name="genres" 
                            value={this.state.formData.genres || []} 
                            onChange={this.handleChange.bind(this)} >
                            <option value="Drama">Drama</option>
                            <option value="Action">Action</option>
                            <option value="Horror">Horror</option>
                            <option value="Comedy">Comedy</option>
                        </select>
                    </div>

                    <button >Save</button>
                </div> 
            </form>
        </React.Fragment>
    }
    
} 

export default MovieFormControlled;

