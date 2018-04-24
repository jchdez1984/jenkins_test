@requires_browser
Feature: Enter a search in Google

  Scenario: Search results should display the search term in the page title when pressing "enter"
    Given A Google search page
    When I enter the search term "cats"
    And I submit the search by pressing "search button"
    Then The search result page title should contain the search term

