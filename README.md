# Relative Time Parser Plugin for [Moment.js](http://momentjs.com/)
This plugin converts a simple string to a manipulated moment object.  The string format is inspired by Graphite's [relative time](http://graphite.readthedocs.org/en/latest/render_api.html#from-until) format.

# Badges
[![NPM](https://img.shields.io/npm/v/relative-time-parser.svg)](https://nodei.co/npm/relative-time-parser/)
[![npm downloads](https://img.shields.io/npm/dm/relative-time-parser.svg?style=flat-square)](http://npm-stat.com/charts.html?package=relative-time-parser)
[![Known Vulnerabilities](https://snyk.io/test/github/cmaurer/relative.time.parser/badge.svg?targetFile=package.json)](https://snyk.io/test/github/cmaurer/relative.time.parser?targetFile=package.json)

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
### ```sec``` - seconds
##### subtract seconds
```JavaScript
moment().relativeTime('-6sec');
```
##### add seconds
```JavaScript
moment().relativeTime('+6sec');
```
### ```second``` - seconds
##### subtract seconds
```JavaScript
moment().relativeTime('-6second');
```
##### add seconds
```JavaScript
moment().relativeTime('+6second');
```
### ```seconds``` - seconds
##### subtract seconds
```JavaScript
moment().relativeTime('-6seconds');
```
##### add seconds
```JavaScript
moment().relativeTime('+6seconds');
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
### ```minute``` - minutes
##### subtract minutes
```JavaScript
moment().relativeTime('-6minute');
```
##### add minutes
```JavaScript
moment().relativeTime('+6minute');
```
### ```minutes``` - minutes
##### subtract minutes
```JavaScript
moment().relativeTime('-6minutes');
```
##### add minutes
```JavaScript
moment().relativeTime('+6minutes');
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
### ```hour``` - hours
##### subtract hours
```JavaScript
moment().relativeTime('-6hour');
```
##### add hours
```JavaScript
moment().relativeTime('+6hour');
```
### ```hours``` - hours
##### subtract hours
```JavaScript
moment().relativeTime('-6hours');
```
##### add hours
```JavaScript
moment().relativeTime('+6hours');
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
### ```day``` - days
##### subtract days
```JavaScript
moment().relativeTime('-6day');
```
##### add days
```JavaScript
moment().relativeTime('+6day');
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
### ```week``` - weeks
##### subtract weeks
```JavaScript
moment().relativeTime('-6week');
```
##### add weeks
```JavaScript
moment().relativeTime('+6week');
```

### ```weeks``` - weeks
##### subtract weeks
```JavaScript
moment().relativeTime('-6weeks');
```
##### add weeks
```JavaScript
moment().relativeTime('+6weeks');
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
### ```month``` - months
##### subtract months
```JavaScript
moment().relativeTime('-6month');
```
##### add months
```JavaScript
moment().relativeTime('+6month');
```
### ```months``` - months
##### subtract months
```JavaScript
moment().relativeTime('-6months');
```
##### add months
```JavaScript
moment().relativeTime('+6months');
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
### ```Quarter``` - quarters
##### subtract quarters
```JavaScript
moment().relativeTime('-6Quarter');
```
##### add quarters
```JavaScript
moment().relativeTime('+6Quarter');
```
### ```Quarters``` - quarters
##### subtract quarters
```JavaScript
moment().relativeTime('-6Quarters');
```
##### add quarters
```JavaScript
moment().relativeTime('+6Quarters');
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
### ```year``` - years
##### subtract years
```JavaScript
moment().relativeTime('-6year');
```
##### add years
```JavaScript
moment().relativeTime('+6year');
```
### ```years``` - years
##### subtract years
```JavaScript
moment().relativeTime('-6years');
```
##### add years
```JavaScript
moment().relativeTime('+6years');
```

### ```now``` - now
```JavaScript
moment().relativeTime('now');
```

## Is Relative Time String Format

### Tests a String to determine if it is in the RelativeTimeFormat

```JavaScript
moment().isRelativeTimeFormat('-2y'); // should === true
```

```JavaScript
moment().isRelativeTimeFormat('xxx'); // should === false
```

```JavaScript
moment().isRelativeTimeFormat('now'); // should === true
```


## Resources

[Graphite URL Api Reference](http://graphite.readthedocs.org/en/latest/render_api.html)
