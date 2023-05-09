var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  res.render("index", {
      title: "MOCK DATA",
      url: {
        users: "/api/users",
        roles: "/api/roles",
        roles_detail: "/api/roles/:id",
        clients: "/api/clients",
        client_detail: "/api/clients/:id",
        actions: "/api/actions",
        resources: "/api/resources",
        sampleMainMenu: "/api/sample_main_menu",
        framework: "/api/frameworks",
        framework_detail: "/api/frameworks/:id",
        survey_templates: "/api/surveyTemplates",
        survey_templates_detail: "/api/surveyTemplates/:id",
        maturity_model: "/api/maturityModel",
        maturity_model_detail: "/api/maturityModel/:id",
        scoring_logic: "/api/scoringLogic",
        scoring_logic_detail: "/api/scoringLogic/:id",
        mapping: "/api/mapping",
        mapping_detail: "/api/mapping/:id",
      },
  });
});

module.exports = router;
