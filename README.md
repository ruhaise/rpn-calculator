# rpn-computer

Reverse Polish Notation implementation, written in Typescript

## Install

```bash
npm install rpn-computer

yarn add rpn-computer
```

## Usage

```javascript
import rpn from 'rpn-computer' // ES modules

const rpn = require('rpn-computer') // CommonJS

rpn('2 5 +') // => 7
```

### rpn(expression)

Evalutes the postfix `expression` and returns the result.
