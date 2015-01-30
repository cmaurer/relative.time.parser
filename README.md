# Relative Time Parser Plugin for [Moment.js](http://momentjs.com/)
This plugin converts a simple string to a manipulated moment object.  The string format is inspired by Graphite's [relative time](http://graphite.readthedocs.org/en/latest/render_api.html#from-until) format.

## Install - NPM

```
npm install relative-time-parser
```

## Usage
Using the string ```-7d``` would be equivalent of ```moment().subtract(7, 'days');```, and similarly, using the string ```+7d``` would be equivalent of ```moment().add(7, 'days');```.  The specific abbreviations are listed in the table below.

```JavaScript
var moment = require('relative-time-parser');
moment().relativeTime('-6h').format();
```

## Patterns

### ```ms``` - milliseconds
##### subtract milliseconds
```JavaScript
moment().relativeTime('-6ms');
```
##### add milliseconds
```JavaScript
moment().relativeTime('+6ms');
```
### ```s``` - seconds
##### subtract seconds
```JavaScript
moment().relativeTime('-6s');
```
##### add seconds
```JavaScript
moment().relativeTime('+6s');
```
### ```m``` - minutes
##### subtract minutes
```JavaScript
moment().relativeTime('-6m');
```
##### add minutes
```JavaScript
moment().relativeTime('+6m');
```
### ```min``` - minutes
##### subtract minutes
```JavaScript
moment().relativeTime('-6min');
```
##### add minutes
```JavaScript
moment().relativeTime('+6min');
```
### ```h``` - hours
##### subtract hours
```JavaScript
moment().relativeTime('-6h');
```
##### add hours
```JavaScript
moment().relativeTime('+6h');
```
### ```d``` - days
##### subtract days
```JavaScript
moment().relativeTime('-6d');
```
##### add days
```JavaScript
moment().relativeTime('+6d');
```
### ```w``` - weeks
##### subtract weeks
```JavaScript
moment().relativeTime('-6w');
```
##### add weeks
```JavaScript
moment().relativeTime('+6w');
```
### ```mon``` - months
##### subtract months
```JavaScript
moment().relativeTime('-6mon');
```
##### add months
```JavaScript
moment().relativeTime('+6mon');
```
### ```M``` - months
##### subtract months
```JavaScript
moment().relativeTime('-6M');
```
##### add months
```JavaScript
moment().relativeTime('+6M');
```
### ```Q``` - quarters
##### subtract quarters
```JavaScript
moment().relativeTime('-6Q');
```
##### add quarters
```JavaScript
moment().relativeTime('+6Q');
```
### ```y``` - years
##### subtract years
```JavaScript
moment().relativeTime('-6y');
```
##### add years
```JavaScript
moment().relativeTime('+6y');
```
### ```now``` - now
##### subtract minutes
```JavaScript
moment().relativeTime('now');
```
##### add minutes
```JavaScript
moment().relativeTime('now');
```

## Resources

[Graphite URL Api Reference](http://graphite.readthedocs.org/en/latest/render_api.html)

