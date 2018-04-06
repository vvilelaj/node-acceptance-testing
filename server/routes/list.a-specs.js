
var uuid = require('uuid');
var axios = require('axios');
var config = require('../../server/config/config')['test'];
var helper = require('./../../test/acceptance-specs-helper');

describe('/api', function(){
    'use strict';
    var userId;
    before(function(){
        userId = uuid.v4();
    });

    describe('list',function(){
        context('When the user does NOT have a list', function(){
            var actual;
            beforeEach(function(){
                var url = `http://localhost:${config.port}/api/list`;
                var headers = { 
                    Cookie: `${config.userCookieName}=${userId}`
                };
                return axios.get(url,{ headers })
                    .then(function(response){
                        actual = response.data;
                    });    
            });

            it('should not return a list',function(){
                expect(actual).to.be.null;
            });
        });
    });
});