(function() {

	'use strict';

	angular
		.module('formlyApp')
		.controller('MainController', MainController);

		function MainController(fields) {

			var vm = this;

			// The model object that we reference
			// on the <formly-form> element in index.html
			vm.model = {};
			vm.options = {};
			
			vm.author = {
			  name: "Brian Olsen",
			  url: "https://github.com/brianolsen87"
			};
      // funcation assignment
      vm.onSubmit = onSubmit;

			vm.fields = fields.getFields();
			var hashMap = fields.getHashMap();
			
			/**
			 * 
			 * Report logic  
			 */
			function generateReportModel(inputModel, fieldModel){
			  var generationModel = {};
  			for (var key in inputModel) {
  		    var field = inputModel[key];
          if('key' in field && 'type' in field){
            if(field.type === ""){
              
            }
          }
        }
			}
			
      var reportModel = {
        title:'PICU Sign-out Report',
        hpiUpdatedInfo:'blahblahblah',
        sections:[
          {
            title:'Lines | Tubes | Drains',
            diagnosisAssessment: 'more blah blah',
            checkboxes:[
              {
                label:'PIV',
                width: 1/3
              },
              {
                label:'NG',
                width: 1/3
              },
              {
                label:'OG',
                width: 1/3
              }
            ],
            inputs:[
              {
                label:'ETT',
                width: 1/4,
                value: 55.4
              },
              {
                label:'Trach (size)',
                width: 1/4,
                value: 57.6
              },
              {
                label:'Trach (type)',
                width: 1/4,
                value: 34.2
              },
              {
                label:'Surgical Drains',
                width: 1/4,
                value: 57.2
              }
            ]
          },
          {
            title:'Neurology',
            diagnosisAssessment: 'more blah blah',
            checkboxes:[
              {
                label:'PIV',
                width: 1/3
              },
              {
                label:'NG',
                width: 1/3
              },
              {
                label:'OG',
                width: 1/3
              }
            ],
            inputs:[
              {
                label:'ETT',
                width: 1/4,
                value: 55.4
              },
              {
                label:'Trach (size)',
                width: 1/4,
                value: 57.6
              },
              {
                label:'Trach (type)',
                width: 1/4,
                value: 34.2
              },
              {
                label:'Surgical Drains',
                width: 1/4,
                value: 57.2
              }
            ],
            other:"This movie is okay. It's not the best movie I've ever seen, not the worst either. It has good acting by both Dakota Fanning and Elizabeth Olsen but it's a bit cliché. It's the typical best friends fall for the boy and don't let it come between them. Still a good movie, I guess. It was well made and acted and has good character development for the two girls but not the guy. Perhaps that was intentional to make you focus more on the two girls. Overall, a movie worth watching.",
            otherMeds:'this is other meds'
          }
          
        ]
      };
      
      function jsonToReportHTML(json) {
        var source   = document.getElementById("report-template").innerHTML;
        var template = Handlebars.compile(source);
        //var context = generateReportModel(vm.model, vm.fields);
        var context = reportModel;
  
        var html = template(context);
        return html;
      }
      
      /**
			 * 
			 * End report logic  
			 */
			
			// function definition
      function onSubmit() {
        var win = window.open("", "Title", "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=yes, width=780, height=200, top="+(screen.height-400)+", left="+(screen.width-840));
        win.document.body.innerHTML = jsonToReportHTML(vm.model);
      }

		}

})();