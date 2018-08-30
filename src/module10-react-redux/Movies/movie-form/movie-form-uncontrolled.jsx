import React from 'react';
import './movie-form.css'

class MovieFormUncontrolled extends React.Component {

    constructor(props){
        super(props);
        this.inputTitle = React.createRef();
        this.formRef = React.createRef();
        this.state = {
            errors:null
        }

    }

    componentDidMount(){
        this.inputTitle.current.focus();
    }

    componentDidUpdate(prevProps){
        
        if(prevProps.movieId !== this.props.movieId)
            this.inputTitle.current.focus();
    }
    resetForm(){
        this.formRef.current.reset();
    }
    submitForm(event){
        event.preventDefault();
        const form=this.formRef.current;
        const formData = this.validate(form.elements);
        if(formData.isValid){
            console.log(formData);
            this.props.formSubmitted(formData);
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

    validateField(element){

        if(element.hasAttribute('required')){
            return { valid:!!element.value, errMsg:'field is required' } ;
        }


        return {valid:true}

    }

    render(){
        return <React.Fragment>
            <form noValidate ref={this.formRef} onSubmit={this.submitForm.bind(this)} > 
                {this.state.errors ? <div className='error'>
                    <div>form is invalid:</div>
                    <ul>
                        {this.state.errors.map(item => <li key={item.name} >{item.name}:{item.error}</li>) }
                    </ul>
                </div> : '' }
                <div >
                    <div>
                        <input name="title" 
                            ref={this.inputTitle}
                            placeholder="Enter Title"
                            defaultValue={this.props.title}
                            required
                            />
                    </div>
                    <div>
                        <input name="year" 
                            placeholder="Enter year"  />
                    </div>
                    <div>
                        <input name="poster" 
                            placeholder="Enter poster url"  />
                    </div>
                    <button >Save</button>
                </div> 
            </form>
            <div>
                <button onClick={this.resetForm.bind(this)} >Reset</button>
            </div>
        </React.Fragment>
    }
    
} 

export default MovieFormUncontrolled;

