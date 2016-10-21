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
			var fieldHashMap = fields.getHashMap();

      function isObject(variable){
        return (typeof variable === "object") && (variable !== null);
      }
			
			/**
			 * 
			 * Report logic  
			 */
			function generateReportModel(inputModel, fieldModel){

        var reportModel = {
          title:'PICU Sign-out Report',
          hpiUpdatedInfo:'',
          sections:{}
        };

  			for (var key in inputModel) {
          var value = inputModel[key];
  		    var field = fieldModel[key];

          //remove the riff raff
          if(!key.startsWith('noActiveIssues') && value !== null && 
            value !== false && value !== ""){
            var sectionTitle = field.templateOptions.section;
            if(!(sectionTitle in reportModel.sections) && sectionTitle !== 'none'){
              reportModel.sections[sectionTitle] = {};
            }
            
            switch(field.type){
              case "checkbox": 
                if(!("checkboxes" in reportModel.sections[sectionTitle])){
                  reportModel.sections[sectionTitle].checkboxes = {};
                }
                reportModel.sections[sectionTitle].checkboxes[key] = {};
              break;

              case "input":
                if(!("inputs" in reportModel.sections[sectionTitle])){
                  reportModel.sections[sectionTitle].inputs = {};
                }
                reportModel.sections[sectionTitle].inputs[key] = { "value" : value };
              break;

              case "datepicker":
                if(!("datepickers" in reportModel.sections[sectionTitle])){
                  reportModel.sections[sectionTitle].datepickers = {};
                }
                reportModel.sections[sectionTitle].datepickers[key] = { "value" : value };
              break;

              case "textarea":
                if(field.key.startsWith('otherMeds')){
                  reportModel.sections[sectionTitle].otherMeds = value;
                }
                else if(field.key.startsWith('other')){
                  reportModel.sections[sectionTitle].other = value;
                }
                else if(field.key.startsWith('diagnosisAssessment')){
                  reportModel.sections[sectionTitle].diagnosisAssessment = value;
                }
                else if(field.key.startsWith('hpiUpdatedInfo')){
                  reportModel.hpiUpdatedInfo = value;
                }
              break;

            }
          }
        }

        for (var sectionKey in reportModel.sections) {
            var section = reportModel.sections[sectionKey];
            if(isObject(section)){
              for(var subKey in section){
                var subSection = section[subKey];
                if(isObject(subSection)){
                  var numKeys = Object.keys(subSection).length;
                  for(var key in subSection){
                    subSection[key].width = 1 / numKeys;
                  }
                }
              }
            }
        }
        return reportModel;
			}
			
      var reportModel = {
        title:'PICU Sign-out Report',
        hpiUpdatedInfo:'blahblahblah',
        sections:{
          'Lines | Tubes | Drains': {
            diagnosisAssessment: 'more blah blah',
            checkboxes:{
              'PIV': {
                width: 1/3
              },
              'NG': {
                width: 1/3
              },
              'OG': {
                width: 1/3
              }
            },
            inputs:{
              'ETT': {
                width: 1/4,
                value: 55.4
              },
              'Trach (size)': {
                width: 1/4,
                value: 57.6
              },
              'Trach (type)': {
                width: 1/4,
                value: 34.2
              },
             'Surgical Drains': {
                width: 1/4,
                value: 57.2
              }
            }
          }
        }
      };
      
      function jsonToReportHTML(json) {
        var source   = document.getElementById("report-template").innerHTML;
        var template = Handlebars.compile(source);
        var context = generateReportModel(vm.model, fieldHashMap);
        //context = reportModel;
  
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