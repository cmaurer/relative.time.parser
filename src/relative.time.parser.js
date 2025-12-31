/* global define */
/* eslint-env node, mocha */
(function() {

  var relativeTimeRe = /([-+])(\d*)\s*(milliseconds|millisecond|Milliseconds|Millisecond|ms|minutes|minute|min|Min|Minute|Minutes|seconds|second|Seconds|Second|sec|hours|hour|Hours|Hour|hr|Hr|days|day|Days|Day|weeks|week|Weeks|Week|wk|Wk|months|month|Months|Month|mon|years|year|Years|Year|yrs|yr|Yr|Quarters|Quarter|quarters|quarter|qtr|Qr|qr|s|m|h|d|D|w|W|M|y|Y|q|Q)/,
    initialize,
    convertCase;

  convertCase = ({
    'ms': 'milliseconds',
    'millisecond': 'milliseconds',
    'milliseconds': 'milliseconds',
    'Millisecond': 'milliseconds',
    'Milliseconds': 'milliseconds',
    's': 'seconds',
    'sec': 'seconds',
    'second': 'seconds',
    'seconds': 'seconds',
    'Second': 'seconds',
    'Seconds': 'seconds',
    'm': 'minutes',
    'min': 'minutes',
    'minute': 'minutes',
    'minutes': 'minutes',
    'Min': 'minutes',
    'Minute': 'minutes',
    'Minutes': 'minutes',
    'h': 'hours',
    'hr': 'hours',
    'Hr': 'hours',
    'hour': 'hours',
    'hours': 'hours',
    'Hour': 'hours',
    'Hours': 'hours',
    'd': 'days',
    'D': 'days',
    'day': 'days',
    'days': 'days',
    'Day': 'days',
    'Days': 'days',
    'w': 'weeks',
    'W': 'weeks',
    'wk': 'weeks',
    'Wk': 'weeks',
    'week': 'weeks',
    'weeks': 'weeks',
    'Week': 'weeks',
    'Weeks': 'weeks',
    'M': 'months',
    'mon': 'months',
    'month': 'months',
    'months': 'months',
    'Month': 'months',
    'Months': 'months',
    'y': 'years',
    'Y': 'years',
    'yr': 'years',
    'Yr': 'years',
    'yrs': 'years',
    'year': 'years',
    'years': 'years',
    'Year': 'years',
    'Years': 'years',
    'q': 'quarters',
    'qr': 'quarters',
    'Q': 'quarters',
    'Qr': 'quarters',
    'qtr': 'quarters',
    'quarter': 'quarters',
    'quarters': 'quarters',
    'Quarter': 'quarters',
    'Quarters': 'quarters'
  });

  initialize = function(moment) {
    moment.fn.relativeTime = function(relativeTimeString) {
      relativeTimeString = relativeTimeString.trim();
      if (relativeTimeString === 'now') {
        return moment(this);
      }
      if (relativeTimeRe.test(relativeTimeString)) {
          var result = relativeTimeRe.exec(relativeTimeString);
          if (relativeTimeString.charAt(0) === '-') {
            return moment(this).subtract(+result[2], convertCase[result[3]]);
          }
          return moment(this).add(+result[2], convertCase[result[3]]);
      }
      return moment(this);
    };

    moment.fn.isRelativeTimeFormat = function(relativeTimeString) {
      relativeTimeString = relativeTimeString.trim();
      if (relativeTimeString === 'now') {
        return true;
      }
      return relativeTimeRe.test(relativeTimeString);
    };

    return moment;
  };

  if (typeof define === 'function' && define.amd) {
    define('moment-relative-time', ['moment'], function(moment) {
      return initialize(moment);
    });
  } else if (typeof module !== 'undefined') {
    module.exports = initialize(require('moment'));
  } else if (typeof window !== 'undefined' && window.moment) {
    this.moment = initialize(this.moment);
  }

}).call(this);
