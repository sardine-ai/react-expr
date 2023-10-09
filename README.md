# react-expr

## Install

```bash
npm install gist:17a409eb205ae555c0635f3bd0ca69eb
```

## Usage

```js
import ReactExpr from 'react-expr'

function App() {
  const [code, setCode] = React.useState('')

  return <ReactExpr value={code} onChange={setCode}/>
}
```

## Autocomplete

To enable autocomplete, first generate docs from your Go types.

Create Go file wth next content:

```go
package main

import (
 "encoding/json"
 "fmt"

 "github.com/antonmedv/expr/docgen"
)

func main() {
 // TODO: Replace env with your own types.
 doc := docgen.CreateDoc(env)

 buf, err := json.MarshalIndent(doc, "", "  ")
 if err != nil {
  panic(err)
 }
 fmt.Println(string(buf))
}
```

Run this go file and save it as JSON.

```bash
go run . > doc.json
```

Now import generated JSON file and pass it as `doc` prop to the component.

```js
import doc from './doc.json'

<ReactExpr ... doc={doc}/>
```

Autocomplete should work now.

## Documentation

Component provides next props:

* doc: any; — generated doc
* width: string; — width of editor
* height: string; — height of editor
* maxHeight: string; — max height if autoSize is on
* autoSize: boolean; — turns on autogrow of editor
* readOnly: boolean; — readonly mode
* showTypes: boolean; — should autocomlete display types info
* className: string; — class name of editor
* value: string; — value (for usage as controller component)
* defaultValue: string; — initial value
* onChange: func; — callback for getting updates
