/* jshint expr: true */
/* global require, describe, it */

var momentTimeParser = require('../src/relative.time.parser.js'),
    should = require('should'),
    moment = require('moment');

describe('Parse Relative Time', function(){

    describe('Moment Compatibility', function(){

        it('should return a valid moment object', function(done){
            var newMoment = moment().relativeTime('-5d');
            should(newMoment).not.eql(undefined);
            newMoment.isValid().should.be.True;
            done();
        });

    });

    describe('Subtract Tests', function(){

        it('should subtract minutes to the time: -7m', function(done){
            should(moment().subtract(7, 'minutes').minutes()).eql(momentTimeParser().relativeTime('-7m').minutes());
            done();
        });

        it('should subtract minutes to the time: -7min', function(done){
            should(moment().subtract(7, 'minutes').minutes()).eql(momentTimeParser().relativeTime('-7min').minutes());
            done();
        });

        it('should subtract hours to the time: -7h', function(done){
            should(moment().subtract(7, 'hours').hours()).eql(momentTimeParser().relativeTime('-7h').hours());
            done();
        });

        it('should subtract days to the time: -7d', function(done){
            should(moment().subtract(7, 'days').day()).eql(momentTimeParser().relativeTime('-7d').day());
            done();
        });

        it('should subtract months to the time: -2mon', function(done){
            should(moment().subtract(2, 'months').months()).eql(momentTimeParser().relativeTime('-2mon').months());
            done();
        });

        it('should subtract months to the time: -2M', function(done){
            should(moment().subtract(2, 'months').months()).eql(momentTimeParser().relativeTime('-2M').months());
            done();
        });

        it('should subtract weeks to the time: -2w', function(done){
            should(moment().subtract(2, 'weeks').weeks()).eql(momentTimeParser().relativeTime('-2w').weeks());
            done();
        });

        it('should subtract quarters to the time: -2Q', function(done){
            should(moment().subtract(2, 'quarters').quarter()).eql(momentTimeParser().relativeTime('-2Q').quarter());
            done();
        });

        it('should subtract years to the time: -2y', function(done){
            should(moment().subtract(2, 'year').year()).eql(momentTimeParser().relativeTime('-2y').year());
            done();
        });

    });


    describe('Add Tests', function(){

        it('should add minutes to the time: +7m', function(done){
            should(moment().add(7, 'minutes').minutes()).eql(momentTimeParser().relativeTime('+7m').minutes());
            done();
        });

        it('should add minutes to the time: +7min', function(done){
            should(moment().add(7, 'minutes').minutes()).eql(momentTimeParser().relativeTime('+7min').minutes());
            done();
        });

        it('should add hours to the time: +7h', function(done){
            should(moment().add(7, 'hours').hours()).eql(momentTimeParser().relativeTime('+7h').hours());
            done();
        });

        it('should add days to the time: +7d', function(done){
            should(moment().add(7, 'days').day()).eql(momentTimeParser().relativeTime('+7d').day());
            done();
        });

        it('should add months to the time: +3mon', function(done){
            should(moment().add(3, 'months').months()).eql(momentTimeParser().relativeTime('+3mon').months());
            done();
        });

        it('should add months to the time: +3M', function(done){
            should(moment().add(3, 'months').months()).eql(momentTimeParser().relativeTime('+3M').months());
            done();
        });

        it('should add weeks to the time: +3w', function(done){
            should(moment().add(3, 'weeks').weeks()).eql(momentTimeParser().relativeTime('+3w').weeks());
            done();
        });

        it('should add quarters to the time: +3Q', function(done){
            should(moment().add(3, 'quarters').quarter()).eql(momentTimeParser().relativeTime('+3Q').quarter());
            done();
        });

        it('should add years to the time: +3y', function(done){
            should(moment().add(3, 'year').year()).eql(momentTimeParser().relativeTime('+3y').year());
            done();
        });

    });

    describe('now Tests', function(){

        it('should return a non manipulated moment object when now is used', function(done){
            should(moment().hours()).eql(momentTimeParser().relativeTime('now').hours());
            done();
        });

    });

});
