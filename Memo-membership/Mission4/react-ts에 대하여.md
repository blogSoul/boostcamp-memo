## 📕 Day 0 - BoostCamp

### 📘  

```typescript
import React from 'react';

type GreetingsProps = {
  name: string;
  mark: string;
};

const App: React.FC<GreetingsProps> = ({name, mark}) => {
    return (
        <div>
          Hello, {name} {mark}
        </div>
    );
};

App.defaultProps = {
  mark: '!'
};

export default App;
```

### 📘

* App.tsx

```typescript
import React from 'react';
import Greetings from './Greetings';

const App: React.FC = () => {
    const onClick = (name: string) => {
        console.log(`${name} says hello`);
    };
    return <Greetings name="Hello" onClick={onClick}/>;
};

export default App;
```

* Greetings.tsx

```typescript
import React from 'react';

type GreetingsProps = {
    name: string;
    mark: string;
    optional?: string;
    onClick: (name: string) => void;
};

function Greetings({ name, mark, optional, onClick }: GreetingsProps) {
    const handleClick = () => onClick(name);
    return (
        <div>
            Hello, {name} {mark}
            {optional && <p>{optional}</p>}
            <div>
                <button onClick={handleClick}>Click Me</button>
            </div>
        </div>
    );
}

Greetings.defaultProps = {
    mark: '!'
};

export default Greetings;
```

### 📘


### 📘

### 🎞 Remark

* ⏱ 시간 체크

체크인 : 분
체크아웃 : 분
