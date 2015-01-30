/* global require, describe, it */

var moment = require('../src/relative.time.parser.js'),
    should = require('should'),
    moment = require('moment')
    ;

describe('Parse Relative Time', function(){


    describe('Subtract Tests', function(){

        it('should subtract minutes to the time', function(done){
            should(moment().subtract(7, 'minutes').minutes()).eql(moment().relativeTime('-7min').minutes());
            done();
        });

        it('should subtract hours to the time', function(done){
            should(moment().subtract(7, 'hours').hours()).eql(moment().relativeTime('-7h').hours());
            done();
        });

        it('should subtract days to the time', function(done){
            should(moment().subtract(7, 'days').day()).eql(moment().relativeTime('-7d').day());
            done();
        });

        it('should subtract months to the time', function(done){
            should(moment().subtract(2, 'months').months()).eql(moment().relativeTime('-2mon').months());
            done();
        });

        it('should subtract weeks to the time', function(done){
            should(moment().subtract(2, 'weeks').weeks()).eql(moment().relativeTime('-2w').weeks());
            done();
        });

        it('should subtract years to the time', function(done){
            should(moment().subtract(2, 'year').year()).eql(moment().relativeTime('-2y').year());
            done();
        });

    });


    describe('Add Tests', function(){
        it('should add minutes to the time', function(done){
            should(moment().add(7, 'minutes').minutes()).eql(moment().relativeTime('+7min').minutes());
            done();
        });

        it('should add hours to the time', function(done){
            should(moment().add(7, 'hours').hours()).eql(moment().relativeTime('+7h').hours());
            done();
        });

        it('should add days to the time', function(done){
            should(moment().add(7, 'days').day()).eql(moment().relativeTime('+7d').day());
            done();
        });

        it('should add months to the time', function(done){
            should(moment().add(3, 'months').months()).eql(moment().relativeTime('+3mon').months());
            done();
        });

        it('should add weeks to the time', function(done){
            should(moment().add(3, 'weeks').weeks()).eql(moment().relativeTime('+3w').weeks());
            done();
        });

        it('should add years to the time', function(done){
            should(moment().add(3, 'year').year()).eql(moment().relativeTime('+3y').year());
            done();
        });

    });



});
