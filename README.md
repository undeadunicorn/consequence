# Consequence


## Install

```
npm install burst_consequence
```


## Usage

```
import {on, off, emit} from 'burst_consequence'

// Namespace events
on('namespace', 'event name', myListener);
off('namespace', 'event name', myListener);
emit('namespace', 'event name', params);

// Object events
on(something, 'my event', myListener);
off(something, 'my event', myListener);
emit(something, 'my event', myListener);
```
