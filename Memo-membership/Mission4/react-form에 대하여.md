## 📕 Day 0 - BoostCamp

### 📘 샘플 코드

* react 기본 코드

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

* setState 이용

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
        alert('이름은: ' + this.state.value);
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



### 🎞 Remark
