/* global require, define, module */
(function() {

    var relativeTimeRe = /([-+])(\d*)\s*(minutes|minute|min|hours|hour|days|day|weeks|week|months|month|mon|years|year|Quarters|Quarter|seconds|second|sec|s|m|h|d|M|y|Y|Q|ms|w)/,
    unitConverter = function(unit){
        switch(unit){
            case 'ms':
                return 'milliseconds';
            case 's':
                return 'seconds';
            case 'sec':
                return 'seconds';
            case 'second':
                return 'seconds';
            case 'seconds':
                return 'seconds';
            case 'min':
                return 'minutes';
            case 'm':
                return 'minutes';
            case 'minute':
                return 'minutes';
            case 'minutes':
                return 'minutes';
            case 'hour':
                return 'hours';
            case 'hours':
                return 'hours';
            case 'h':
                return 'hours';
            case 'day':
                return 'days';
            case 'days':
                return 'days';
            case 'd':
                return 'days';
            case 'w':
                return 'weeks';
            case 'week':
                return 'weeks';
            case 'weeks':
                return 'weeks';
            case 'mon':
                return 'months';
            case 'month':
                return 'months';
            case 'months':
                return 'months';
            case 'M':
                return 'months';
            case 'y':
                return 'years';
            case 'Y':
                return 'years';
            case 'year':
                return 'years';
            case 'years':
                return 'years';
            case 'Q':
                return 'quarters';
            case 'Quarter':
                return 'quarters';
            case 'Quarters':
                return 'quarters';
            default:
                return null;
        }

    }, initialize;

    initialize = function(moment) {
        moment.fn.relativeTime = function (relativeTimeString) {
            if (relativeTimeString.trim() === 'now') {
                return moment();
            } else {
                if (relativeTimeRe.test(relativeTimeString.trim())) {
                    var result = relativeTimeRe.exec(relativeTimeString),
                        amount = result[2],
                        unit = unitConverter(result[3]);
                    if (unit === null) {
                        return null;
                    }
                    if (result[1] === '-') {
                        return moment().subtract(+amount, unit);
                    } else {
                        return moment().add(+amount, unit);
                    }
                } else {
                    return null;
                }
            }
        };
        moment.fn.isRelativeTimeFormat = function(relativeTimeString){
            if (relativeTimeString.trim() === 'now') {
                return true;
            }
            return relativeTimeRe.test(relativeTimeString);
        };
        return moment;
    };

    if (typeof define === 'function' && define.amd) {
        define('moment-relative-time', ['moment'], function(moment) {
            moment = initialize(moment);
            return moment;
        });
    } else if (typeof module !== 'undefined') {
        module.exports = initialize(require('moment'));
    } else if (typeof window !== 'undefined' && window.moment) {
        this.moment = initialize(this.moment);
    }

}).call(this);
