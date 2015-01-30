#### Relative Time Parser Plugin for Moment.js`
This plugin converts a simple string to a manipulated moment object.  The string format is inspired by Graphite's formate for relative time.

##### Example
Using the string ```-7d``` would be equivalent of ```moment().subtract(7, 'days');```, and similarly, using the string ```+7d``` would be equivalent of ```moment().add(7, 'days');```.  The specific abbreviations are listed in the table below.

|Abbreviation|Unit|
|:---|:---|
|s|Seconds|
|min| Minutes|
|h |  Hours|
|d |  Days|
|w |  Weeks|
|mon |30 Days (month)|
|y |  365 Days (year)|

[Graphite URL Api Reference](http://graphite.readthedocs.org/en/latest/render_api.html)
