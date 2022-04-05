---
sidebar_position: 1
title: Welcome
---

```jsx live
function Welcome(props) {
  const [name, setName] = useState('guys');

  function showName() {
    const urName = prompt('plz input ur name')
    urName && setName(urName)
  }

  return (
    <div>
        <h2>Hi, { name }! Welcome to Leedom's docs.</h2>
        <button onClick={ () => showName() }>click me!</button>
    </div>
  );
}
```