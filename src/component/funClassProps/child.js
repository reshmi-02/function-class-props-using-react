import React,{Component} from 'react'

class Child extends Component{
    render(){
        console.log(this);
        console.log(this.props);

        return(
            <div>
                <p>{this.props.name}</p>
                <p>{this.props.age}</p>
                <p>{this.props.obj.age}</p>
                <p>{this.props.arr[2]}</p>

                <p>
                    {
                        this.props.arrobj.map((value,i)=>{
                            return(
                                <div key={i}>
                                    <p>name={value.name}</p>
                                    <p>age={value.age}</p>
                                </div>
                            )
                        })
                    }
                </p>
            </div>
        )
    }
}

export default Child