var express = require('express');
var router = express.Router();

const CLIENT = require('../data/clients.json');
const USERS = require('../data/users.json');
const ROLES = require('../data/roles.json');
const ACTIONS = require('../data/sample_actions.json');
const RESOURCES = require('../data/resources.json');

const SAMPLE_MAIN_MENU = require('../data/main_menu.json');
const ROLE_DETAIL = require('../data/role_detail.json');
const CLIENT_DETAIL = require('../data/client_detail.json');
const FRAMEWORk = require('../data/framework.json');
const FRAMEWORk_DETAIL = require('../data/framework_detail.json');
const SURVEY_TEMPLATES = require('../data/survey_template.json');
const SURVEY_TEMPLATES_DEATIL = require('../data/survey_template_detail.json');
const INTERVIEW_TEMPLATES_DEATIL = require('../data/interview_detail.json');

const MATURITY_MODEL = require('../data/maturity_model.json');
const MATURITY_MODEL_DEATIL = require('../data/maturity_detail.json');

const SCCORING_LOGIC = require('../data/scoring_logic.json');
const SCCORING_LOGIC_DEATIL = require('../data/scoring_logic_detail.json');

const MAPPING = require('../data/mapping.json');
const MAPPING_DEATIL = require('../data/mapping_detail.json');

const MATURITY = require('../data/assessment-assess.json');
const READINESS = require('../data/assessment-readiness.json');
const SECURITY = require('../data/security-assess.json');
const MATURITY_NEW = require('../data/maturity_new.json');


const INITIATIVES = require('../data/analyze_initiatives.json');
const RECOMENDATION = require('../data/analyze_recomendation.json');
const GAPS = require('../data/analyze_gaps.json');
const GAPSBYID = require('../data/analyze_gapsbyId.json');

const ASSESSMENTINFO = require('../data/profile_assessment_information.json');
const ORGINFO = require('../data/org_info.json');
const RISKAPPETITE = require('../data/risk_appetite.json');
const CROWNJEWEL = require('../data/profile_crown_jewel.json');

const SURVEYINFO = require('../data/profile_survey.json');
const JEWELINFO = require('../data/profile_crown_jewel.json');
const PROFILEMENU = require('../data/profile_menu.json');
const STACKHOLDERWISERATING = require('../data/stack_holder_wise_rating.json');
const ADDSTACKHOLDER = require('../data/add_stack_holder.json');

const GETSTACKHOLDERBYID = require('../data/get_stackHolder_byId.json');





router.get('/users', function(req, res, next) {
  res.send(USERS);
});

router.get('/clients', function(req, res, next) {
  res.send(CLIENT);
});

router.get('/clients/:id', function(req, res, next) {
  res.send(CLIENT_DETAIL);
});

router.get('/roles', function(req, res, next) {
  res.send(ROLES);
});

router.get('/roles/:id', function(req, res, next) {
  res.send(ROLE_DETAIL);
});

router.get('/actions', function(req, res, next) {
  res.send(ACTIONS);
});

router.get('/resources', function(req, res, next) {
  res.send(RESOURCES);
});

router.get('/sample_main_menu', function(req, res, next) {
  res.send(SAMPLE_MAIN_MENU);
});

router.get('/frameworks', function(req, res, next) {
  res.send(FRAMEWORk);
});

router.get('/frameworks/:id', function(req, res, next) {
  res.send(FRAMEWORk_DETAIL);
});

router.get('/surveyTemplates', function(req, res, next) {
  res.send(SURVEY_TEMPLATES);
});

router.get('/surveyTemplates/:id', function(req, res, next) {
  res.send(SURVEY_TEMPLATES_DEATIL);
});

router.get('/interviewTemplates/:id', function(req, res, next) {
  res.send(INTERVIEW_TEMPLATES_DEATIL);
});

router.get('/maturityModel', function(req, res, next) {
  res.send(MATURITY_MODEL);
});



router.get('/maturityModel/:id', function(req, res, next) {
  res.send(MATURITY_MODEL_DEATIL);
});

router.get('/scoringLogic', function(req, res, next) {
  res.send(SCCORING_LOGIC);
});

router.get('/scoringLogic/:id', function(req, res, next) {
  res.send(SCCORING_LOGIC_DEATIL);
});

router.get('/mapping', function(req, res, next) {
  res.send(MAPPING);
});

router.get('/mapping/:id', function(req, res, next) {
  res.send(MAPPING_DEATIL);
});

router.get('/maturity', function(req, res, next) {
  res.send(MATURITY);
});

router.get('/maturity_new', function(req, res, next) {
  res.send(MATURITY_NEW);
});

router.get('/readiness', function(req, res, next) {
  res.send(READINESS);
});

router.get('/security', function(req, res, next) {
  res.send(SECURITY);
});

router.get('/initiatives', function(req, res, next) {
  res.send(INITIATIVES);
});
router.get('/recomendation', function(req, res, next) {
  res.send(RECOMENDATION);
});

router.get('/gaps', function(req, res, next) {
  res.send(GAPS);
});

router.get('/assessmentInfo', function(req, res, next) {
  res.send(ASSESSMENTINFO);
});

router.get('/riskAppetite', function(req, res, next) {
  res.send(RISKAPPETITE);
});

router.get('/gapsById', function(req, res, next) {
  res.send(GAPSBYID);
});

router.get('/orgInfo', function(req, res, next) {
  res.send(ORGINFO);
});

router.get('/surveyInfo', function(req, res, next) {
  res.send(SURVEYINFO);
});

router.get('/crownJewels', function(req, res, next) {
  res.send(JEWELINFO);
});

router.get('/profileMenu', function(req, res, next) {
  res.send(PROFILEMENU);
});

router.get('/stackHolderWiseRating', function(req, res, next) {
  res.send(STACKHOLDERWISERATING);
});

router.get('/addStackHolder', function(req, res, next) {
  res.send(ADDSTACKHOLDER);
});

router.get('/getStackHolderById', function(req, res, next) {
  res.send(GETSTACKHOLDERBYID);
});








module.exports = router;
