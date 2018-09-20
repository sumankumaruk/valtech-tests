@wip

Feature:
  As a user
  I would like to navigate to valtech home page
  So that i can see the recent blogs about valtech

  Scenario: Navigate to Valtech home page and check for recent blogs
    Given I am on valtech homepage
    When I click on the Accept cookies
    Then I should be able to see "Recent blogs"

  Scenario Outline: Naviagate to About , Services and Work
    Given I am on valtech homepage
    When I click on the Menu icon
    Then I should see the <option>

    Examples:
      | option   |
      | About    |
      | Services |
      | Work     |

  Scenario: Navigate to contact page
    Given I am on valtech homepage
    When I navigate to contact-us page
    Then I should be able to see the total number of offices of Valtech


