## π Day 0 - BoostCamp

### π μν μ½λ

* react κΈ°λ³Έ μ½λ

```javascript
import React from 'react';

function App(props) {
    return (
        <form action="">
            <label>
                <div>Enter your name :</div>
                <input type="text" name={"name"}/>
            </label>
            <input type={"submit"} value={"Submit"}/>
        </form>
    );
}

export default App;
```

* setState μ΄μ©

```javascript
import React, {Component} from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({value: event.target.value});
    }
    handleSubmit(event) {
        alert('μ΄λ¦μ: ' + this.state.value);
        event.preventDefault();
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    <div>Name : </div>
                    <input type={"text"} value={this.state.value} onChange={this.handleChange}/>
                </label>
                <input type={'submit'} value={'Submit'}/>
            </form>
        );
    }
}

export default App;
```



### π Remark
