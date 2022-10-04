# React Dynamic Env

The library provides a service to dynamically load and get `env` file after build. 

## Installation

Install via npm 

```cmd
npm install react-dynamic-env
```

Importing

```js
import loadConfig from "react-dynamic-env";
```

## Usage

Create `env` (without dot) file and put it into `public` folder.
If you are using Docker create a Docker Volume in `docker-compose.yml`, if not skip this step.

```yml
...
volumes:
      - ./public/env:path/to/your/project/in/container/assets/env
```

Then load the config file where it's needed by calling `loadConfig` method, see the example below :point_down:

```tsx
import { useEffect, useState } from "react";
import loadConfig from "react-dynamic-env";

function App() {
  const [env, setEnv] = useState({});

  useEffect(() => {
    loading();
  }, []);

  const loading = async () => {
    const env = await loadConfig();
    setEnv(env);
  };

  return (
    <div className="App">
      <p>{env.API_URL}</p>
    </div>
  );
}

export default App;
```

If everything is setup correct you'll have a dynamically changing `env` file after build.

## Contributing

**Email**: <petrosyanartur78@gmail.com> \
**Website**: <https://stayyourself.art/> \
**GitHub**: <https://github.com/ArturPetrosyan003>

## License

Uses MIT licensed code

MIT License

Copyright (c) 2022 Artur Petrosyan

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.