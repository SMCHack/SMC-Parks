/**
 * Created by srasokan on 6/3/15.
 */
/**
 * Created by srasokan on 5/24/15.
 */
angular.module('starter.services', [])
    .service('ParksInfoService', function() {
        return {
            getAllParks: function() {

            }
        }
    })
    .service('FilterService', function() {
        return {
            getAllByActivity: function() {
                var filters = [{id:1,name:'Filter1'},{id:2,name:'Filter2'},{id:3,name:'Filter3'}];
                return filters;
            },
            getAllByLocation: function() {
                var filters = [{id:100,name:'Filter1'},{id:200,name:'Filter2'},{id:300,name:'Filter3'}];
                return filters;
            },
            getAllByTrailUsage: function() {
                var filters = [{id:1000,name:'Filter1'},{id:2000,name:'Filter2'},{id:3000,name:'Filter3'}];
                return filters;
            }
        }
    })
    .service('ParksAlertsService', function() {
        return {
            getAllParkAlerts: function() {

            }
        }
    })
    .service('ReportService', function() {
        return {
            reportParkIncident: function() {

            }
        }
    });
