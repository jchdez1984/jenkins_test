$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("com/dev9/web/search.feature");
formatter.feature({
  "line": 2,
  "name": "Enter a search in Google",
  "description": "",
  "id": "enter-a-search-in-google",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@requires_browser"
    }
  ]
});
formatter.before({
  "duration": 2767625658,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Search results should display the search term in the page title when pressing \"enter\"",
  "description": "",
  "id": "enter-a-search-in-google;search-results-should-display-the-search-term-in-the-page-title-when-pressing-\"enter\"",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "A Google search page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter the search term \"cats\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I submit the search by pressing \"search button\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "The search result page title should contain the search term",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchSteps.A_Google_search_page()"
});
formatter.result({
  "duration": 3168804968,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cats",
      "offset": 25
    }
  ],
  "location": "SearchSteps.I_enter_the_search_term(String)"
});
formatter.result({
  "duration": 53006353,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "search button",
      "offset": 33
    }
  ],
  "location": "SearchSteps.I_submit_the_search_by_pressing(String)"
});
formatter.result({
  "duration": 1891450668,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.The_search_result_page_title_should_contain_the_word()"
});
formatter.result({
  "duration": 13001194,
  "status": "passed"
});
formatter.after({
  "duration": 543089929,
  "status": "passed"
});
});