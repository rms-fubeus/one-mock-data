var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  res.render("index", {
      title: "MOCK DATA",
      url: {
   

        role: "/api/role",
        skills: "/api/skill",
        user: "/api/user",
        jobs: "/api/jobs",
        company_template: "api/company_template",
        // purge: "/api/purge",
        // purgeClinet:"/api/purgeClinet",
        // colorTheme:"/api/colorTheme",
        // basereport:"/api/basereport",
        // activity:"/api/activity",
        // mappingDetail:"/api/mappingDetail"
        skill: "api/skill"
        
      },
  });
});

module.exports = router;
