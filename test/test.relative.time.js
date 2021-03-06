/* jshint expr: true */
/* eslint-env node, mocha */
/* global require, describe, it */

var momentTimeParser = require('../src/relative.time.parser.js'),
  should = require('should'),
  moment = require('moment');

describe('Parse Relative Time', function() {

  describe('Moment Compatibility', function() {

    it('should return a valid moment object', function(done) {
      var newMoment = moment().relativeTime('-5d');
      should(newMoment).not.eql(undefined);
      newMoment.isValid().should.be.True;
      done();
    });

  });

  describe('Subtract Tests', function() {

    it('should subtract minutes to the time: -7m', function(done) {
      should(moment().subtract(7, 'minutes').minutes()).eql(momentTimeParser().relativeTime('-7m').minutes());
      done();
    });
    it('should subtract minutes to the time: -7min', function(done) {
      should(moment().subtract(7, 'minutes').minutes()).eql(momentTimeParser().relativeTime('-7min').minutes());
      done();
    });
    it('should subtract minutes to the time: -7minute', function(done) {
      should(moment().subtract(7, 'minutes').minutes()).eql(momentTimeParser().relativeTime('-7minute').minutes());
      done();
    });
    it('should subtract minutes to the time: -7minutes', function(done) {
      should(moment().subtract(7, 'minutes').minutes()).eql(momentTimeParser().relativeTime('-7minutes').minutes());
      done();
    });
    it('should subtract minutes to the time: -7Minute', function(done) {
      should(moment().subtract(7, 'minutes').minutes()).eql(momentTimeParser().relativeTime('-7Minute').minutes());
      done();
    });
    it('should subtract minutes to the time: -7Minutes', function(done) {
      should(moment().subtract(7, 'minutes').minutes()).eql(momentTimeParser().relativeTime('-7Minutes').minutes());
      done();
    });
    it('should subtract hours to the time: -7h', function(done) {
      should(moment().subtract(7, 'hours').hours()).eql(momentTimeParser().relativeTime('-7h').hours());
      done();
    });
    it('should subtract hours to the time: -7hr', function(done) {
      should(moment().subtract(7, 'hours').hours()).eql(momentTimeParser().relativeTime('-7hr').hours());
      done();
    });
    it('should subtract hours to the time: -7hr', function(done) {
      should(moment().subtract(7, 'hours').hours()).eql(momentTimeParser().relativeTime('-7Hr').hours());
      done();
    });
    it('should subtract hours to the time: -7hour', function(done) {
      should(moment().subtract(7, 'hours').hours()).eql(momentTimeParser().relativeTime('-7hour').hours());
      done();
    });
    it('should subtract hours to the time: -7hours', function(done) {
      should(moment().subtract(7, 'hours').hours()).eql(momentTimeParser().relativeTime('-7hours').hours());
      done();
    });
    it('should subtract hours to the time: -7Hour', function(done) {
      should(moment().subtract(7, 'hours').hours()).eql(momentTimeParser().relativeTime('-7Hour').hours());
      done();
    });
    it('should subtract hours to the time: -7Hours', function(done) {
      should(moment().subtract(7, 'hours').hours()).eql(momentTimeParser().relativeTime('-7Hours').hours());
      done();
    });
    it('should subtract days to the time: -7d', function(done) {
      should(moment().subtract(7, 'days').day()).eql(momentTimeParser().relativeTime('-7d').day());
      done();
    });
    it('should subtract days to the time: -7D', function(done) {
      should(moment().subtract(7, 'days').day()).eql(momentTimeParser().relativeTime('-7D').day());
      done();
    });
    it('should subtract days to the time: -7day', function(done) {
      should(moment().subtract(7, 'days').day()).eql(momentTimeParser().relativeTime('-7day').day());
      done();
    });
    it('should subtract days to the time: -7days', function(done) {
      should(moment().subtract(7, 'days').day()).eql(momentTimeParser().relativeTime('-7days').day());
      done();
    });
    it('should subtract days to the time: -7Day', function(done) {
      should(moment().subtract(7, 'days').day()).eql(momentTimeParser().relativeTime('-7Day').day());
      done();
    });
    it('should subtract days to the time: -7Days', function(done) {
      should(moment().subtract(7, 'days').day()).eql(momentTimeParser().relativeTime('-7Days').day());
      done();
    });
    it('should subtract months to the time: -2mon', function(done) {
      should(moment().subtract(2, 'months').month()).eql(momentTimeParser().relativeTime('-2mon').month());
      done();
    });
    it('should subtract months to the time: -2month', function(done) {
      should(moment().subtract(2, 'months').month()).eql(momentTimeParser().relativeTime('-2month').month());
      done();
    });
    it('should subtract months to the time: -2months', function(done) {
      should(moment().subtract(2, 'months').month()).eql(momentTimeParser().relativeTime('-2months').month());
      done();
    });
    it('should subtract months to the time: -2Month', function(done) {
      should(moment().subtract(2, 'months').month()).eql(momentTimeParser().relativeTime('-2Month').month());
      done();
    });
    it('should subtract months to the time: -2Months', function(done) {
      should(moment().subtract(2, 'months').month()).eql(momentTimeParser().relativeTime('-2Months').month());
      done();
    });
    it('should subtract months to the time: -2M', function(done) {
      should(moment().subtract(2, 'months').month()).eql(momentTimeParser().relativeTime('-2M').month());
      done();
    });
    it('should subtract weeks to the time: -2w', function(done) {
      should(moment().subtract(2, 'weeks').weeks()).eql(momentTimeParser().relativeTime('-2w').weeks());
      done();
    });
    it('should subtract weeks to the time: -2week', function(done) {
      should(moment().subtract(2, 'weeks').weeks()).eql(momentTimeParser().relativeTime('-2week').weeks());
      done();
    });
    it('should subtract weeks to the time: -2weeks', function(done) {
      should(moment().subtract(2, 'weeks').weeks()).eql(momentTimeParser().relativeTime('-2weeks').weeks());
      done();
    });
    it('should subtract weeks to the time: -2wk', function(done) {
      should(moment().subtract(2, 'weeks').weeks()).eql(momentTimeParser().relativeTime('-2wk').weeks());
      done();
    });
    it('should subtract weeks to the time: -2Wk', function(done) {
      should(moment().subtract(2, 'weeks').weeks()).eql(momentTimeParser().relativeTime('-2Wk').weeks());
      done();
    });
    it('should subtract quarters to the time: -2Q', function(done) {
      should(moment().subtract(2, 'quarters').quarter()).eql(momentTimeParser().relativeTime('-2Q').quarter());
      done();
    });
    it('should subtract quarters to the time: -2Qr', function(done) {
      should(moment().subtract(2, 'quarters').quarter()).eql(momentTimeParser().relativeTime('-2Qr').quarter());
      done();
    });
    it('should subtract quarters to the time: -2qr', function(done) {
      should(moment().subtract(2, 'quarters').quarter()).eql(momentTimeParser().relativeTime('-2qr').quarter());
      done();
    });
    it('should subtract quarters to the time: -2Quarter', function(done) {
      should(moment().subtract(2, 'quarters').quarter()).eql(momentTimeParser().relativeTime('-2Quarter').quarter());
      done();
    });
    it('should subtract quarters to the time: -2Quarters', function(done) {
      should(moment().subtract(2, 'quarters').quarter()).eql(momentTimeParser().relativeTime('-2Quarters').quarter());
      done();
    });
    it('should subtract years to the time: -2y', function(done) {
      should(moment().subtract(2, 'year').year()).eql(momentTimeParser().relativeTime('-2y').year());
      done();
    });
    it('should subtract years to the time: -2Y', function(done) {
      should(moment().subtract(2, 'year').year()).eql(momentTimeParser().relativeTime('-2Y').year());
      done();
    });
    it('should subtract years to the time: -2yr', function(done) {
      should(moment().subtract(2, 'year').year()).eql(momentTimeParser().relativeTime('-2yr').year());
      done();
    });
    it('should subtract years to the time: -2yrs', function(done) {
      should(moment().subtract(2, 'year').year()).eql(momentTimeParser().relativeTime('-2yrs').year());
      done();
    });
    it('should subtract years to the time: -2year', function(done) {
      should(moment().subtract(2, 'year').year()).eql(momentTimeParser().relativeTime('-2year').year());
      done();
    });
    it('should subtract years to the time: -2years', function(done) {
      should(moment().subtract(2, 'year').year()).eql(momentTimeParser().relativeTime('-2years').year());
      done();
    });
    it('should subtract years to the time: -2Year', function(done) {
      should(moment().subtract(2, 'year').year()).eql(momentTimeParser().relativeTime('-2Year').year());
      done();
    });
    it('should subtract years to the time: -2Years', function(done) {
      should(moment().subtract(2, 'year').year()).eql(momentTimeParser().relativeTime('-2Years').year());
      done();
    });
  });

  describe('Add Tests', function() {

    it('should add minutes to the time: +7m', function(done) {
      should(moment().add(7, 'minutes').minutes()).eql(momentTimeParser().relativeTime('+7m').minutes());
      done();
    });
    it('should add minutes to the time: +7min', function(done) {
      should(moment().add(7, 'minutes').minutes()).eql(momentTimeParser().relativeTime('+7min').minutes());
      done();
    });
    it('should add minutes to the time: +7minute', function(done) {
      should(moment().add(7, 'minutes').minutes()).eql(momentTimeParser().relativeTime('+7minute').minutes());
      done();
    });
    it('should add minutes to the time: +7minutes', function(done) {
      should(moment().add(7, 'minutes').minutes()).eql(momentTimeParser().relativeTime('+7minutes').minutes());
      done();
    });
    it('should add minutes to the time: +7Minute', function(done) {
      should(moment().add(7, 'minutes').minutes()).eql(momentTimeParser().relativeTime('+7Minute').minutes());
      done();
    });
    it('should add minutes to the time: +7Minutes', function(done) {
      should(moment().add(7, 'minutes').minutes()).eql(momentTimeParser().relativeTime('+7Minutes').minutes());
      done();
    });

    it('should add hours to the time: +7h', function(done) {
      should(moment().add(7, 'hours').hours()).eql(momentTimeParser().relativeTime('+7h').hours());
      done();
    });
    it('should add hours to the time: +7hr', function(done) {
      should(moment().add(7, 'hours').hours()).eql(momentTimeParser().relativeTime('+7hr').hours());
      done();
    });
    it('should add hours to the time: +7Hr', function(done) {
      should(moment().add(7, 'hours').hours()).eql(momentTimeParser().relativeTime('+7Hr').hours());
      done();
    });
    it('should add hours to the time: +7hour', function(done) {
      should(moment().add(7, 'hours').hours()).eql(momentTimeParser().relativeTime('+7hour').hours());
      done();
    });
    it('should add hours to the time: +7hours', function(done) {
      should(moment().add(7, 'hours').hours()).eql(momentTimeParser().relativeTime('+7hours').hours());
      done();
    });
    it('should add hours to the time: +7Hour', function(done) {
      should(moment().add(7, 'hours').hours()).eql(momentTimeParser().relativeTime('+7Hour').hours());
      done();
    });
    it('should add hours to the time: +7Hours', function(done) {
      should(moment().add(7, 'hours').hours()).eql(momentTimeParser().relativeTime('+7Hours').hours());
      done();
    });

    it('should add days to the time: +7d', function(done) {
      should(moment().add(7, 'days').day()).eql(momentTimeParser().relativeTime('+7d').day());
      done();
    });

    it('should add days to the time: +7day', function(done) {
      should(moment().add(7, 'days').day()).eql(momentTimeParser().relativeTime('+7day').day());
      done();
    });

    it('should add days to the time: +7days', function(done) {
      should(moment().add(7, 'days').day()).eql(momentTimeParser().relativeTime('+7days').day());
      done();
    });

    it('should add months to the time: +3mon', function(done) {
      should(moment().add(3, 'months').month()).eql(momentTimeParser().relativeTime('+3mon').month());
      done();
    });

    it('should add months to the time: +3month', function(done) {
      should(moment().add(3, 'months').month()).eql(momentTimeParser().relativeTime('+3month').month());
      done();
    });

    it('should add months to the time: +3months', function(done) {
      should(moment().add(3, 'months').month()).eql(momentTimeParser().relativeTime('+3months').month());
      done();
    });

    it('should add months to the time: +3M', function(done) {
      should(moment().add(3, 'months').month()).eql(momentTimeParser().relativeTime('+3M').month());
      done();
    });

    it('should add weeks to the time: +3w', function(done) {
      should(moment().add(3, 'weeks').weeks()).eql(momentTimeParser().relativeTime('+3w').weeks());
      done();
    });

    it('should add weeks to the time: +3week', function(done) {
      should(moment().add(3, 'weeks').weeks()).eql(momentTimeParser().relativeTime('+3week').weeks());
      done();
    });

    it('should add weeks to the time: +3weeks', function(done) {
      should(moment().add(3, 'weeks').weeks()).eql(momentTimeParser().relativeTime('+3weeks').weeks());
      done();
    });

    it('should add quarters to the time: +3Q', function(done) {
      should(moment().add(3, 'quarters').quarter()).eql(momentTimeParser().relativeTime('+3Q').quarter());
      done();
    });
    it('should add quarters to the time: +3q', function(done) {
      should(moment().add(3, 'quarters').quarter()).eql(momentTimeParser().relativeTime('+3q').quarter());
      done();
    });
    it('should add quarters to the time: +3Qr', function(done) {
      should(moment().add(3, 'quarters').quarter()).eql(momentTimeParser().relativeTime('+3Qr').quarter());
      done();
    });

    it('should add quarters to the time: +3Quarter', function(done) {
      should(moment().add(3, 'quarters').quarter()).eql(momentTimeParser().relativeTime('+3Quarter').quarter());
      done();
    });

    it('should add quarters to the time: +3Quarters', function(done) {
      should(moment().add(3, 'quarters').quarter()).eql(momentTimeParser().relativeTime('+3Quarters').quarter());
      done();
    });

    it('should add years to the time: +3y', function(done) {
      should(moment().add(3, 'year').year()).eql(momentTimeParser().relativeTime('+3y').year());
      done();
    });
    it('should add years to the time: +3yr', function(done) {
      should(moment().add(3, 'year').year()).eql(momentTimeParser().relativeTime('+3yr').year());
      done();
    });
    it('should add years to the time: +3Yr', function(done) {
      should(moment().add(3, 'year').year()).eql(momentTimeParser().relativeTime('+3Yr').year());
      done();
    });

    it('should add years to the time: +3year', function(done) {
      should(moment().add(3, 'year').year()).eql(momentTimeParser().relativeTime('+3year').year());
      done();
    });
    it('should add years to the time: +3years', function(done) {
      should(moment().add(3, 'year').year()).eql(momentTimeParser().relativeTime('+3years').year());
      done();
    });
    it('should add years to the time: +3Year', function(done) {
      should(moment().add(3, 'year').year()).eql(momentTimeParser().relativeTime('+3Year').year());
      done();
    });

    it('should add years to the time: +3Years', function(done) {
      should(moment().add(3, 'year').year()).eql(momentTimeParser().relativeTime('+3Years').year());
      done();
    });

  });

  describe('Spacing Tests', function() {
    it('should tolerate a space before the amount and the units', function(done) {
      should(moment().add(2, 'year').year()).eql(momentTimeParser().relativeTime(' +2years').year());
      done();
    });

    it('should tolerate a space after the amount and the units', function(done) {
      should(moment().add(2, 'year').year()).eql(momentTimeParser().relativeTime('+2years ').year());
      done();
    });

    it('should tolerate a space before and after the amount and the units', function(done) {
      should(moment().add(2, 'year').year()).eql(momentTimeParser().relativeTime(' +2years ').year());
      done();
    });

    it('should tolerate a space before, after, and in between the amount and the units', function(done) {
      should(moment().add(2, 'year').year()).eql(momentTimeParser().relativeTime(' +2 years ').year());
      done();
    });

    it('should tolerate a space between the amount and the units', function(done) {
      should(moment().add(2, 'year').year()).eql(momentTimeParser().relativeTime('+2 years').year());
      done();
    });

    it('should fail if there is a space in the amount', function(done) {
      should(moment().isRelativeTimeFormat('+1 0 years')).eql(false);
      done();
    });
  });

  describe('Arbitrary Value Tests', function() {

    it('should add to the object\'s value +3m', function(done) {
      should(moment('2017-01-01 00:00:00').add(3, 'm')).eql(moment('2017-01-01 00:00:00').relativeTime('+3m'));
      done();
    });

    it('should add to the object\'s value +3h', function(done) {
      should(moment('2017-01-01 00:00:00').add(3, 'h')).eql(moment('2017-01-01 00:00:00').relativeTime('+3h'));
      done();
    });

    it('should add to the object\'s value +3y', function(done) {
      should(moment('2017-01-01').add(3, 'year')).eql(moment('2017-01-01').relativeTime('+3y'));
      done();
    });
    it('should subtract from the object\'s value -3y', function(done) {
      should(moment('2017-01-01').subtract(3, 'year')).eql(moment('2017-01-01').relativeTime('-3y'));
      done();
    });

  });

  describe('now Tests', function() {

    it('should return a non manipulated moment object when now is used', function(done) {
      should(moment().day()).eql(momentTimeParser().relativeTime('now').day());
      should(moment().hours()).eql(momentTimeParser().relativeTime('now').hours());
      should(moment().minutes()).eql(momentTimeParser().relativeTime('now').minutes());
      done();
    });

    it('should return a non manipulated moment object when now is used that has additional spaces after', function(done) {
      should(moment().day()).eql(momentTimeParser().relativeTime('now ').day());
      should(moment().hours()).eql(momentTimeParser().relativeTime('now ').hours());
      should(moment().minutes()).eql(momentTimeParser().relativeTime('now ').minutes());
      done();
    });

    it('should return a non manipulated moment object when now is used that has additional spaces before', function(done) {
      should(moment().day()).eql(momentTimeParser().relativeTime(' now').day());
      should(moment().hours()).eql(momentTimeParser().relativeTime(' now').hours());
      should(moment().minutes()).eql(momentTimeParser().relativeTime(' now').minutes());
      done();
    });

    it('should return a non manipulated moment object when now is used that has additional spaces before and after', function(done) {
      should(moment().day()).eql(momentTimeParser().relativeTime(' now ').day());
      should(moment().hours()).eql(momentTimeParser().relativeTime(' now ').hours());
      should(moment().minutes()).eql(momentTimeParser().relativeTime(' now ').minutes());
      done();
    });

  });

  describe('Is RelativeTimeString Tests', function() {

    it('should return true for a valid relative time string format', function(done) {
      should(moment().isRelativeTimeFormat('-2y')).eql(true);
      done();
    });

    it('should return false for an invalid relative time string format', function(done) {
      should(moment().isRelativeTimeFormat('xxx')).eql(false);
      done();
    });

    it('should return true for "now" relative time', function(done) {
      should(moment().isRelativeTimeFormat('now')).eql(true);
      done();
    });

    it('should return true for "now" relative time with spaces before', function(done) {
      should(moment().isRelativeTimeFormat(' now')).eql(true);
      done();
    });

    it('should return true for "now" relative time with spaces after', function(done) {
      should(moment().isRelativeTimeFormat('now ')).eql(true);
      done();
    });

    it('should return true for "now" relative time with spaces around', function(done) {
      should(moment().isRelativeTimeFormat(' now ')).eql(true);
      done();
    });

  });

});
