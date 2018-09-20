$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("AssertRecentBlog.feature");
formatter.feature({
  "line": 2,
  "name": "",
  "description": "As a user\nI would like to navigate to valtech home page\nSo that i can see the recent blogs about valtech",
  "id": "",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@wip"
    }
  ]
});
formatter.scenario({
  "line": 7,
  "name": "Navigate to Valtech home page and check for recent blogs",
  "description": "",
  "id": ";navigate-to-valtech-home-page-and-check-for-recent-blogs",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "I am on valtech homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I click on the Accept cookies",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I should be able to see \"Recent blogs\"",
  "keyword": "Then "
});
formatter.match({
  "location": "ValtechStepDefs.i_am_on_valtech_homepage()"
});
formatter.result({
  "duration": 11753935410,
  "status": "passed"
});
formatter.match({
  "location": "ValtechStepDefs.i_click_on_the_Accept_cookies()"
});
formatter.result({
  "duration": 261232243,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Recent blogs",
      "offset": 25
    }
  ],
  "location": "ValtechStepDefs.i_should_be_able_to_see(String)"
});
formatter.result({
  "duration": 229735116,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 12,
  "name": "Naviagate to About , Services and Work",
  "description": "",
  "id": ";naviagate-to-about-,-services-and-work",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "I am on valtech homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I click on the Menu icon",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I should see the \u003coption\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": ";naviagate-to-about-,-services-and-work;",
  "rows": [
    {
      "cells": [
        "option"
      ],
      "line": 18,
      "id": ";naviagate-to-about-,-services-and-work;;1"
    },
    {
      "cells": [
        "About"
      ],
      "line": 19,
      "id": ";naviagate-to-about-,-services-and-work;;2"
    },
    {
      "cells": [
        "Services"
      ],
      "line": 20,
      "id": ";naviagate-to-about-,-services-and-work;;3"
    },
    {
      "cells": [
        "Work"
      ],
      "line": 21,
      "id": ";naviagate-to-about-,-services-and-work;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 19,
  "name": "Naviagate to About , Services and Work",
  "description": "",
  "id": ";naviagate-to-about-,-services-and-work;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@wip"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I am on valtech homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I click on the Menu icon",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I should see the About",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ValtechStepDefs.i_am_on_valtech_homepage()"
});
formatter.result({
  "duration": 1260494196,
  "status": "passed"
});
formatter.match({
  "location": "ValtechStepDefs.i_click_on_the_Menu_icon()"
});
formatter.result({
  "duration": 181321145,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "About",
      "offset": 17
    }
  ],
  "location": "ValtechStepDefs.i_should_see_the_ABOUT(String)"
});
formatter.result({
  "duration": 1450340936,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Naviagate to About , Services and Work",
  "description": "",
  "id": ";naviagate-to-about-,-services-and-work;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@wip"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I am on valtech homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I click on the Menu icon",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I should see the Services",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ValtechStepDefs.i_am_on_valtech_homepage()"
});
formatter.result({
  "duration": 1085274904,
  "status": "passed"
});
formatter.match({
  "location": "ValtechStepDefs.i_click_on_the_Menu_icon()"
});
formatter.result({
  "duration": 448622280,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Services",
      "offset": 17
    }
  ],
  "location": "ValtechStepDefs.i_should_see_the_ABOUT(String)"
});
formatter.result({
  "duration": 1395798032,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Naviagate to About , Services and Work",
  "description": "",
  "id": ";naviagate-to-about-,-services-and-work;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@wip"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I am on valtech homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I click on the Menu icon",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I should see the Work",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ValtechStepDefs.i_am_on_valtech_homepage()"
});
formatter.result({
  "duration": 755452163,
  "status": "passed"
});
formatter.match({
  "location": "ValtechStepDefs.i_click_on_the_Menu_icon()"
});
formatter.result({
  "duration": 165970338,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Work",
      "offset": 17
    }
  ],
  "location": "ValtechStepDefs.i_should_see_the_ABOUT(String)"
});
formatter.result({
  "duration": 3992179311,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Navigate to contact page",
  "description": "",
  "id": ";navigate-to-contact-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 24,
  "name": "I am on valtech homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "I navigate to contact-us page",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "I should be able to see the total number of offices of Valtech",
  "keyword": "Then "
});
formatter.match({
  "location": "ValtechStepDefs.i_am_on_valtech_homepage()"
});
formatter.result({
  "duration": 1482994421,
  "status": "passed"
});
formatter.match({
  "location": "ValtechStepDefs.i_navigate_to_contact_us_page()"
});
formatter.result({
  "duration": 2168908787,
  "status": "passed"
});
formatter.match({
  "location": "ValtechStepDefs.i_should_be_able_to_see_the_total_number_of_branches_of_Valtech()"
});
formatter.result({
  "duration": 86024,
  "status": "passed"
});
});