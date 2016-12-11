(function(){
  'use strict';

  angular
    .module('formlyApp')
    .factory('fields', fields);

  function fields() {
    
    var hashMap = {};
    
    var storeToHashMap = function(field){
      if('key' in field){
        hashMap[field.key] = field;
      }
      return field;
    };
    
    var noneFields = {
      title:"none",
      fields:[
        {  
           "key":"hpiUpdatedInfo",
           "type":"textarea",
           "templateOptions":{  
              "section":"none",
              "label":"HPI Updated Info"
           }
        }
      ].map(storeToHashMap)
    };
    
    var ltrFields = {
      title:"Lines | Tubes | Drains",
      fields:[
        {  
           "template":"<h3>Lines | Tubes | Drains</h3><hr/>"
        },
        {  
           "key":"piv",
           "type":"checkbox",
           "templateOptions":{  
              "section":"Lines | Tubes | Drains",
              "label":"PIV"
           }
        },
        {  
           "key":"foley",
           "type":"checkbox",
           "templateOptions":{  
              "section":"Lines | Tubes | Drains",
              "label":"Foley"
           }
        },
        {  
           "key":"ng",
           "type":"checkbox",
           "templateOptions":{  
              "section":"Lines | Tubes | Drains",
              "label":"NG"
           }
        },
        {  
           "key":"nj",
           "type":"checkbox",
           "templateOptions":{  
              "section":"Lines | Tubes | Drains",
              "label":"NJ"
           }
        },
        {  
           "key":"og",
           "type":"checkbox",
           "templateOptions":{  
              "section":"Lines | Tubes | Drains",
              "label":"OG"
           }
        },
        {  
           "key":"gt",
           "type":"checkbox",
           "templateOptions":{  
              "section":"Lines | Tubes | Drains",
              "label":"GT"
           }
        },
        {  
           "key":"pdHdCatheter",
           "type":"checkbox",
           "templateOptions":{  
              "section":"Lines | Tubes | Drains",
              "label":"PD/HD Catheter"
           }
        },
        {  
           "key":"vpShunt",
           "type":"checkbox",
           "templateOptions":{  
              "section":"Lines | Tubes | Drains",
              "label":"VP shunt"
           }
        },
        {  
           "key":"ett",
           "type":"input",
           "templateOptions":{  
              "section":"Lines | Tubes | Drains",
              "type":"number",
              "label":"ETT(size)"
           }
        },
        {  
           "key":"trachSize",
           "type":"input",
           "templateOptions":{  
              "section":"Lines | Tubes | Drains",
              "type":"number",
              "label":"Trach(size)"
           }
        },
        {  
           "key":"trachType",
           "type":"input",
           "templateOptions":{  
              "section":"Lines | Tubes | Drains",
              "type":"text",
              "label":"Trach(type)"
           }
        },
        {  
           "key":"surgicalDrains",
           "type":"input",
           "templateOptions":{  
              "section":"Lines | Tubes | Drains",
              "type":"number",
              "label":"Surgical drains"
           }
        },
        {  
           "key":"chestTubes",
           "type":"input",
           "templateOptions":{  
              "section":"Lines | Tubes | Drains",
              "type":"number",
              "label":"Chest tubes"
           }
        },
        {  
           "key":"icpMonitoring",
           "type":"input",
           "templateOptions":{  
              "section":"Lines | Tubes | Drains",
              "type":"number",
              "label":"ICP Monitoring"
           }
        },
        {  
           "key":"evd",
           "type":"input",
           "templateOptions":{  
              "section":"Lines | Tubes | Drains",
              "type":"number",
              "label":"EVD at"
           }
        },
        {  
           "key":"centralVenousInsertedDate",
           "type":"datepicker",
           "templateOptions":{  
              "section":"Lines | Tubes | Drains",
              "label":"Central Venous Inserted On",
              "type":"text",
              "datepickerPopup":"dd-MMMM-yyyy"
           }
        },
        {  
           "key":"arterialInsertedDate",
           "type":"datepicker",
           "templateOptions":{  
              "section":"Lines | Tubes | Drains",
              "label":"Arterial Inserted On",
              "type":"text",
              "datepickerPopup":"dd-MMMM-yyyy"
           }
        },
        {  
           "key":"piccInsertedDate",
           "type":"datepicker",
           "templateOptions":{  
              "section":"Lines | Tubes | Drains",
              "label":"PICC Inserted On",
              "type":"text",
              "datepickerPopup":"dd-MMMM-yyyy"
           }
        },
        {  
           "key":"otherLtr",
           "type":"textarea",
           "templateOptions":{  
              "section":"Lines | Tubes | Drains",
              "label":"Other"
           }
        }
      ].map(storeToHashMap)
    };
    
    var neuroFields = {
      title:"",
      fields:[
        {  
           "template":"<h3>NEUROLOGY</h3><hr/>"
        },
        {  
           "key":"noActiveIssuesNeuro",
           "type":"checkbox",
           "templateOptions":{  
              "section":"none",
              "label":"No active issues for Neurology (hide below)"
           }
        },
        {  
           "key":"diagnosisAssessmentNeuro",
           "type":"textarea",
           "templateOptions":{  
              "section":"NEUROLOGY",
              "label":"Diagnosis|Assessment"
           },
           "hideExpression":"model.noActiveIssuesNeuro"
        },
        {  
           "key":"goalICP",
           "type":"input",
           "templateOptions":{  
              "section":"NEUROLOGY",
              "type":"number",
              "label":"Goal ICP"
           },
           "hideExpression":"model.noActiveIssuesNeuro"
        },
        {  
           "key":"goalCPP",
           "type":"input",
           "templateOptions":{  
              "section":"NEUROLOGY",
              "type":"number",
              "label":"Goal CPP"
           },
           "hideExpression":"model.noActiveIssuesNeuro"
        },
        {  
           "key":"sbsGoal",
           "type":"input",
           "templateOptions":{  
              "section":"NEUROLOGY",
              "type":"number",
              "label":"SBS Goal"
           },
           "hideExpression":"model.noActiveIssuesNeuro"
        },
        {  
           "key":"watGoal",
           "type":"input",
           "templateOptions":{  
              "section":"NEUROLOGY",
              "type":"number",
              "label":"WAT Goal"
           },
           "hideExpression":"model.noActiveIssuesNeuro"
        },
        {  
           "key":"versedGTT",
           "type":"input",
           "templateOptions":{  
              "section":"NEUROLOGY",
              "type":"number",
              "label":"Versed GTT at"
           },
           "hideExpression":"model.noActiveIssuesNeuro"
        },
        {  
           "key":"dilaudidGTT",
           "type":"input",
           "templateOptions":{  
              "section":"NEUROLOGY",
              "type":"number",
              "label":"Dilauded GTT at"
           },
           "hideExpression":"model.noActiveIssuesNeuro"
        },
        {  
           "key":"fentanylGTT",
           "type":"input",
           "templateOptions":{  
              "section":"NEUROLOGY",
              "type":"number",
              "label":"Fentanyl GTT at"
           },
           "hideExpression":"model.noActiveIssuesNeuro"
        },
        {  
           "key":"morphineGTT",
           "type":"input",
           "templateOptions":{  
              "section":"NEUROLOGY",
              "type":"number",
              "label":"Morphine GTT at"
           },
           "hideExpression":"model.noActiveIssuesNeuro"
        },
        {  
           "key":"dexmedetomidineGTT",
           "type":"input",
           "templateOptions":{  
              "section":"NEUROLOGY",
              "type":"number",
              "label":"Dexmedetomidine GTT at"
           },
           "hideExpression":"model.noActiveIssuesNeuro"
        },
        {  
           "key":"otherNeuro",
           "type":"textarea",
           "templateOptions":{  
              "section":"NEUROLOGY",
              "label":"Other"
           },
           "hideExpression":"model.noActiveIssuesNeuro"
        },
        {  
           "key":"otherMedsNeuro",
           "type":"textarea",
           "templateOptions":{  
              "section":"NEUROLOGY",
              "label":"Other Meds"
           },
           "hideExpression":"model.noActiveIssuesNeuro"
        }
      ].map(storeToHashMap)
    };
    
    var respFields = {
      title:"",
      fields:[
        {  
           "template":"<h3>RESPIRATORY</h3><hr/>"
        },
        {  
           "key":"noActiveIssuesResp",
           "type":"checkbox",
           "templateOptions":{  
              "section":"none",
              "label":"No active issues for Respiratory (hide below)"
           }
        },
        {  
           "key":"diagnosisAssessmentRESP",
           "type":"textarea",
           "templateOptions":{  
              "section":"RESPIRATORY",
              "label":"Diagnosis|Assessment"
           },
           "hideExpression":"model.noActiveIssuesResp"
        },
        {  
           "key":"airLeakNoted",
           "type":"checkbox",
           "templateOptions":{  
              "section":"RESPIRATORY",
              "label":"Air leak noted around ETT"
           },
           "hideExpression":"model.noActiveIssuesResp"
        },
        {  
           "key":"roomAir",
           "type":"checkbox",
           "templateOptions":{  
              "section":"RESPIRATORY",
              "label":"Room Air"
           },
           "hideExpression":"model.noActiveIssuesResp"
        },
        {  
           "key":"robinol",
           "type":"checkbox",
           "templateOptions":{  
              "section":"RESPIRATORY",
              "label":"Robinol"
           },
           "hideExpression":"model.noActiveIssuesResp"
        },
        {  
           "key":"steroidsIVPO",
           "type":"input",
           "templateOptions":{  
              "section":"RESPIRATORY",
              "type":"text",
              "label":"Steroids IV/PO"
           },
           "hideExpression":"model.noActiveIssuesResp"
        },
        {  
           "key":"goalSats",
           "type":"input",
           "templateOptions":{  
              "section":"RESPIRATORY",
              "type":"number",
              "label":"Goal Sats"
           },
           "hideExpression":"model.noActiveIssuesResp"
        },
        {  
           "key":"nasalCannula",
           "type":"input",
           "templateOptions":{  
              "section":"RESPIRATORY",
              "type":"number",
              "label":"Goal Sats"
           },
           "hideExpression":"model.noActiveIssuesResp"
        },
        {  
           "key":"heliox",
           "type":"input",
           "templateOptions":{  
              "section":"RESPIRATORY",
              "type":"number",
              "label":"Heliox"
           },
           "hideExpression":"model.noActiveIssuesResp"
        },
        {  
           "key":"bipap",
           "type":"input",
           "templateOptions":{  
              "section":"RESPIRATORY",
              "type":"number",
              "label":"Bipap"
           },
           "hideExpression":"model.noActiveIssuesResp"
        },
        {  
           "key":"cpap",
           "type":"input",
           "templateOptions":{  
              "section":"RESPIRATORY",
              "type":"number",
              "label":"CPAP"
           },
           "hideExpression":"model.noActiveIssuesResp"
        },
        {  
           "key":"hfnc",
           "type":"input",
           "templateOptions":{  
              "section":"RESPIRATORY",
              "type":"number",
              "label":"HFNC"
           },
           "hideExpression":"model.noActiveIssuesResp"
        },
        {  
           "key":"optiflow",
           "type":"input",
           "templateOptions":{  
              "section":"RESPIRATORY",
              "type":"number",
              "label":"Optiflow"
           },
           "hideExpression":"model.noActiveIssuesResp"
        },
        {  
           "key":"vapotherm",
           "type":"input",
           "templateOptions":{  
              "section":"RESPIRATORY",
              "type":"number",
              "label":"Vapotherm"
           },
           "hideExpression":"model.noActiveIssuesResp"
        },
        {  
           "key":"fio2",
           "type":"input",
           "templateOptions":{  
              "section":"RESPIRATORY",
              "type":"number",
              "label":"FiO2"
           },
           "hideExpression":"model.noActiveIssuesResp"
        },
        {  
           "key":"nitricOxide",
           "type":"input",
           "templateOptions":{  
              "section":"RESPIRATORY",
              "type":"number",
              "label":"Nitric Oxide"
           },
           "hideExpression":"model.noActiveIssuesResp"
        },
        {  
           "key":"cpt",
           "type":"input",
           "templateOptions":{  
              "section":"RESPIRATORY",
              "type":"number",
              "label":"CPT"
           },
           "hideExpression":"model.noActiveIssuesResp"
        },
        {  
           "key":"hfovVentSettings",
           "type":"textarea",
           "templateOptions":{  
              "section":"RESPIRATORY",
              "label":"HFOV|Vent settings"
           },
           "hideExpression":"model.noActiveIssuesResp"
        },
        {  
           "key":"albuterol",
           "type":"input",
           "templateOptions":{  
              "section":"RESPIRATORY",
              "type":"number",
              "label":"Albuterol"
           },
           "hideExpression":"model.noActiveIssuesResp"
        },
        {  
           "key":"xopenex",
           "type":"input",
           "templateOptions":{  
              "section":"RESPIRATORY",
              "type":"number",
              "label":"Xopenex"
           },
           "hideExpression":"model.noActiveIssuesResp"
        },
        {  
           "key":"atrovent",
           "type":"input",
           "templateOptions":{  
              "section":"RESPIRATORY",
              "type":"number",
              "label":"Atrovent"
           },
           "hideExpression":"model.noActiveIssuesResp"
        },
        {  
           "key":"naclPercentage",
           "type":"select",
           "templateOptions":{  
              "section":"RESPIRATORY",
              "label":"NaCl %",
              "options":[  
                 {  
                    "name":"3%",
                    "value":"three"
                 },
                 {  
                    "name":"7%",
                    "value":"seven"
                 }
              ]
           },
           "hideExpression":"model.noActiveIssuesResp"
        },
        {  
           "key":"nacl",
           "type":"input",
           "templateOptions":{  
              "section":"RESPIRATORY",
              "type":"number",
              "label":"NaCl"
           },
           "hideExpression":"model.noActiveIssuesResp"
        },
        {  
           "key":"pulmozyme",
           "type":"input",
           "templateOptions":{  
              "section":"RESPIRATORY",
              "type":"number",
              "label":"Pulmozyme"
           },
           "hideExpression":"model.noActiveIssuesResp"
        },
        {  
           "key":"terbutalineGTT",
           "type":"input",
           "templateOptions":{  
              "section":"RESPIRATORY",
              "type":"number",
              "label":"Terbutaline GTT at"
           },
           "hideExpression":"model.noActiveIssuesResp"
        },
        {  
           "key":"magnesiumSulfateGTT",
           "type":"input",
           "templateOptions":{  
              "section":"RESPIRATORY",
              "type":"number",
              "label":"Magnesium Sulfate GTT at"
           },
           "hideExpression":"model.noActiveIssuesResp"
        },
        {  
           "key":"magnesiumSulfateGTTHrs",
           "type":"input",
           "templateOptions":{  
              "section":"RESPIRATORY",
              "type":"number",
              "label":"Magnesium Sulfate"
           },
           "hideExpression":"model.noActiveIssuesResp"
        },
        {  
           "key":"aminophyllineDrip",
           "type":"input",
           "templateOptions":{  
              "section":"RESPIRATORY",
              "type":"number",
              "label":"Aminophylline Drip at"
           },
           "hideExpression":"model.noActiveIssuesResp"
        },
        {  
           "key":"otherResp",
           "type":"textarea",
           "templateOptions":{  
              "section":"RESPIRATORY",
              "label":"Other"
           },
           "hideExpression":"model.noActiveIssuesResp"
        },
        {  
           "key":"otherMedsResp",
           "type":"textarea",
           "templateOptions":{  
              "section":"RESPIRATORY",
              "label":"Other Meds"
           },
           "hideExpression":"model.noActiveIssuesResp"
        }
      ].map(storeToHashMap)
    };
    
    var cvFields = {
      title:"",
      fields:[
        {  
           "template":"<h3>CV</h3><hr/>"
        },
        {  
           "key":"noActiveIssuesCV",
           "type":"checkbox",
           "templateOptions":{  
              "section":"none",
              "label":"No active issues for CV (hide below)"
           }
        },
        {  
           "key":"diagnosisAssessmentCV",
           "type":"textarea",
           "templateOptions":{  
              "section":"CV",
              "label":"Diagnosis|Assessment"
           },
           "hideExpression":"model.noActiveIssuesCV"
        },
        {  
           "key":"goalBP",
           "type":"input",
           "templateOptions":{  
              "section":"CV",
              "type":"text",
              "label":"Goal BP (range)"
           },
           "hideExpression":"model.noActiveIssuesCV"
        },
        {  
           "key":"goalMap",
           "type":"input",
           "templateOptions":{  
              "section":"CV",
              "type":"number",
              "label":"Goal MAP (range)"
           },
           "hideExpression":"model.noActiveIssuesCV"
        },
        {  
           "key":"goalCVP",
           "type":"input",
           "templateOptions":{  
              "section":"CV",
              "type":"number",
              "label":"Goal CVP"
           },
           "hideExpression":"model.noActiveIssuesCV"
        },
        {  
           "key":"dopamineGTT",
           "type":"input",
           "templateOptions":{  
              "section":"CV",
              "type":"number",
              "label":"Dopamine GTT at"
           },
           "hideExpression":"model.noActiveIssuesCV"
        },
        {  
           "key":"epinephrineGTT",
           "type":"input",
           "templateOptions":{  
              "section":"CV",
              "type":"number",
              "label":"Epinephrine GTT at"
           },
           "hideExpression":"model.noActiveIssuesCV"
        },
        {  
           "key":"milrinoneGTT",
           "type":"input",
           "templateOptions":{  
              "section":"CV",
              "type":"number",
              "label":"Milrinone GTT at"
           },
           "hideExpression":"model.noActiveIssuesCV"
        },
        {  
           "key":"norepinephrineGTT",
           "type":"input",
           "templateOptions":{  
              "section":"CV",
              "type":"number",
              "label":"Norepinephrine GTT at"
           },
           "hideExpression":"model.noActiveIssuesCV"
        },
        {  
           "key":"vasopressinGTT",
           "type":"input",
           "templateOptions":{  
              "section":"CV",
              "type":"number",
              "label":"Vasopressin GTT at"
           },
           "hideExpression":"model.noActiveIssuesCV"
        },
        {  
           "key":"dobutamineGTT",
           "type":"input",
           "templateOptions":{  
              "section":"CV",
              "type":"number",
              "label":"Dobutamine GTT at"
           },
           "hideExpression":"model.noActiveIssuesCV"
        },
        {  
           "key":"otherCV",
           "type":"textarea",
           "templateOptions":{  
              "section":"CV",
              "label":"Other"
           },
           "hideExpression":"model.noActiveIssuesCV"
        }
      ].map(storeToHashMap)
    };
    
    //alert(hashMap.noActiveIssuesCV.type);

    function getFields() {
      return [].concat(
        noneFields.fields, 
        ltrFields.fields, 
        neuroFields.fields, 
        respFields.fields, 
        cvFields.fields);
    }
    
    function getHashMap(){
      return hashMap;
    }

    return {
      getFields: getFields,
      getHashMap: getHashMap
    };
  }
})();
