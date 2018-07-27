var element=document.getElementById("app");
var element1=document.getElementById("app1");
    
    function Mymessage(props) {
        return <h2 className={props.clName} > {props.nm} </h2>;
    }

    class Welcome extends React.Component{
        constructor(props){
            super(props);
            this.state = { name : props.name, age: props.age, message:null };
            this.alertMessage=this.alertMessage.bind(this);
             this.upEvent=this.upEvent.bind(this);
              this.downEvent=this.downEvent.bind(this);
        }
        componentDidMount(){
             this.checkAge(this.state.age);
        }
        componentWillUnmount(){}
        checkAge(age){
            console.log('age',age);
            if(age>=35)
                this.setState({ message: "You are overaged "}) 
            else
                this.setState({ message: "You are underaged "}) 
             
        }
        alertMessage(){
                alert('Hello ahmad');
            }
        upEvent(e){
              const ageState=parseInt(this.state.age)+1;
              this.setState({age:ageState});
            }
        downEvent(e){
             const ageState=parseInt(this.state.age)-1;
              this.setState({age:ageState});
            }    
        render(){
            return <div>
                <h2>{ this.state.name }</h2>
                <p>{ this.state.age }</p>
                <p>{ this.state.message }</p>
                <button onClick={this.alertMessage}>Click me !</button>
                <button onClick={this.upEvent}>Up !</button>
                <button onClick={this.downEvent}>down !</button>
            </div>
        }
    }

   ReactDOM.render(<Welcome name="ahmad" age="25"/>,element);
   ReactDOM.render(<Welcome name="mutaal" age="25"/>,element1);

  