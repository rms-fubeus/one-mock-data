var express = require('express');
var router = express.Router();





const SKILLS = require('../data/skills.json');
// const USER_MANAGEMENT = reqiure('../data/user');
const ROLE_MANAGEMENT = require('../data/role_management.json');
const COMPANY_TEMPLATE = require('../data/company_template.json');
const JOB_OPENING = require('../data/job_opening.json');


router.get('/skill', function(req, res, next) {
  res.send(SKILLS);
});
// router.get('/user', function(req, res, next) {
//   res.send(USER_MANAGEMENT);
// });
router.get('/role', function(req, res, next) {
  res.send(ROLE_MANAGEMENT);
});
router.get('/company_template', function(req, res, next) {
  res.send(COMPANY_TEMPLATE);
});
router.get('/jobs', function(req, res, next) {
  res.send(JOB_OPENING);
});


// router.get('/assess/sidenav', function(req, res, next) {
//   res.send(ASSESS_SIDENAV);
// });
// router.get('/assess/maturity-current', function(req, res, next) {
//   res.send(ASSESS_MATURITY_CURRENT);
// });
// router.get('/assess/maturity-domain', function(req, res, next) {
//   res.send(ASSESS_MATURITY_DOMAIN);
// });
// router.get('/assess/target', function(req, res, next) {
//   res.send(ASSESS_TARGET);
// });
// router.get('/assess/readiness-current', function(req, res, next) {
//   res.send(ASSESS_READINESS_CURRENT);
// });
// router.get('/assess/readiness-domain', function(req, res, next) {
//   res.send(ASSESS_READINESS_DOMAIN);
// });
// router.get('/assess/ssa-current', function(req, res, next) {
//   res.send(ASSESS_SSA_CURRENT);
// });
// router.get('/assess/ssa-domain', function(req, res, next) {
//   res.send(ASSESS_SSA_DOMAIN);
// });

// router.get('/reports/maturity', function(req, res, next) {
//   res.send(REPORTS_MATURITY);
// });
// router.get('/reports/readiness', function(req, res, next) {
//   res.send(REPORTS_READINESS);
// });
// router.get('/reports/ssa', function(req, res, next) {
//   res.send(REPORTS_SSA);
// });


// router.get('/users', function(req, res, next) {
//   res.send(USERS);
// });

// router.get('/clients', function(req, res, next) {
//   res.send(CLIENT);
// });

// router.get('/clients/:id', function(req, res, next) {
//   res.send(CLIENT_DETAIL);
// });

// router.get('/roles', function(req, res, next) {
//   res.send(ROLES);
// });

// router.get('/roles/:id', function(req, res, next) {
//   res.send(ROLE_DETAIL);
// });

// router.get('/actions', function(req, res, next) {
//   res.send(ACTIONS);
// });

// router.get('/resources', function(req, res, next) {
//   res.send(RESOURCES);
// });

// router.get('/sample_main_menu', function(req, res, next) {
//   res.send(SAMPLE_MAIN_MENU);
// });

// router.get('/frameworks', function(req, res, next) {
//   res.send(FRAMEWORk);
// });

// router.get('/frameworks/:id', function(req, res, next) {
//   res.send(FRAMEWORk_DETAIL);
// });

// router.get('/surveyTemplates', function(req, res, next) {
//   res.send(SURVEY_TEMPLATES);
// });

// router.get('/surveyTemplates/:id', function(req, res, next) {
//   res.send(SURVEY_TEMPLATES_DEATIL);
// });

// router.get('/interviewTemplates/:id', function(req, res, next) {
//   res.send(INTERVIEW_TEMPLATES_DEATIL);
// });

// router.get('/maturityModel', function(req, res, next) {
//   res.send(MATURITY_MODEL);
// });



// router.get('/maturityModel/:id', function(req, res, next) {
//   res.send(MATURITY_MODEL_DEATIL);
// });

// router.get('/scoringLogic', function(req, res, next) {
//   res.send(SCCORING_LOGIC);
// });

// router.get('/scoringLogic/:id', function(req, res, next) {
//   res.send(SCCORING_LOGIC_DEATIL);
// });

// router.get('/mapping', function(req, res, next) {
//   res.send(MAPPING);
// });

// router.get('/mapping/:id', function(req, res, next) {
//   res.send(MAPPING_DEATIL);
// });

// router.get('/maturity', function(req, res, next) {
//   res.send(MATURITY);
// });

// router.get('/maturity_new', function(req, res, next) {
//   res.send(MATURITY_NEW);
// });

// router.get('/readiness', function(req, res, next) {
//   res.send(READINESS);
// });

// router.get('/security', function(req, res, next) {
//   res.send(SECURITY);
// });

// router.get('/initiatives', function(req, res, next) {
//   res.send(INITIATIVES);
// });
// router.get('/recomendation', function(req, res, next) {
//   res.send(RECOMENDATION);
// });

// router.get('/gaps', function(req, res, next) {
//   res.send(GAPS);
// });

// router.get('/assessmentInfo', function(req, res, next) {
//   res.send(ASSESSMENTINFO);
// });

// router.get('/riskAppetite', function(req, res, next) {
//   res.send(RISKAPPETITE);
// });

// router.get('/gapsById', function(req, res, next) {
//   res.send(GAPSBYID);
// });

// router.get('/orgInfo', function(req, res, next) {
//   res.send(ORGINFO);
// });

// router.get('/surveyInfo', function(req, res, next) {
//   res.send(SURVEYINFO);
// });

// router.get('/crownJewels', function(req, res, next) {
//   res.send(JEWELINFO);
// });

// router.get('/profileMenu', function(req, res, next) {
//   res.send(PROFILEMENU);
// });

// router.get('/stackHolderWiseRating', function(req, res, next) {
//   res.send(STACKHOLDERWISERATING);
// });

// router.get('/addStackHolder', function(req, res, next) {
//   res.send(ADDSTACKHOLDER);
// });

// router.get('/getStackHolderById', function(req, res, next) {
//   res.send(GETSTACKHOLDERBYID);
// });

// router.get('/notification', function(req, res, next) {
//   res.send(NOTIFICATION);
// });

router.get('/purge', function(req, res, next) {
  res.send(PURGE);
});

router.get('/purgeClinet', function(req, res, next) {
  res.send(PURGECLINET);
});

router.get('/colorTheme', function(req, res, next) {
  res.send(COLORTHEME);
});

router.get('/basereport', function(req, res, next) {
  res.send(BASEREPORT);
});

router.get('/activity', function(req, res, next) {
  res.send(ACTIVITY);
});
router.get('/mappingDetail', function(req, res, next) {
  res.send(MAPPINGDETAIL);
});



















module.exports = router;
