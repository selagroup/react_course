import React, {Component} from 'react'

const withLifecyclelog = (WrappedComponent, componentName ) => {

    return class extends Component{

        constructor(props){
            super(props);
            this.log('constructor');
        }

        render(){
            this.log('component rendered');
            return <WrappedComponent {...this.props} />
        }

        componentDidMount(){
            this.log('component mounted');
        }

        componentDidUpdate(){
            this.log('component updated');
        }

        shouldComponentUpdate(){
            this.log('component should update');
            return true;
        }
        
        log(msg){
            console.log( `[${componentName}] - ${msg}`)
        }

    }
}

export default withLifecyclelog;