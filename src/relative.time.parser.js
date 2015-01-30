/* global require, define, module */
(function() {

    var relativeTimeRe = /([-+])(\d*)(s|d|min|h|d|w|mon|y)/,
    unitConverter = function(unit){
        /*
        s   Seconds
        min Minutes
        h   Hours
        d   Days
        w   Weeks
        mon 30 Days (month)
        y   365 Days (year)
        */
        switch(unit){
            case 's':
                return 'seconds';
            case 'min':
                return 'minutes';
            case 'h':
                return 'hours';
            case 'd':
                return 'days';
            case 'w':
                return 'weeks';
            case 'mon':
                return 'months';
            case 'y':
                return 'years';
            default:
                return null;
        }

    }, initialize;

    initialize = function(moment) {
        moment.fn.relativeTime = function (relativeTimeString) {
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