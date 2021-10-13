Feature: Testing  Error Message display
  As a user
  I gave wrong  instructions or patches or hoover  location
  Error code and error message should be displayed

  Scenario Outline:  Wrong Instructions provided - error message displayed
    Given the roomsize "<roomsize>", coords "<cords>", "<instructions>" as instructions
    And  the patches listofpatches
      | 1,0 | 2,2 | 2,3 |
    When  post request is made on "http://localhost:8080/v1/cleaning-sessions" endpoint
    Then  status code <statuscode> is returned
    And Error message should display as "<errorMessage>"
    Examples:
      | roomsize | cords | instructions | statuscode | errorMessage               |
      | 5,5      | 4,4   | NN           | 400        | Wrong instructions display |


  Scenario Outline:  Robot must placed inside the room - error message displayed
    Given the roomsize "<roomsize>", coords "<cords>", "<instructions>" as instructions
    And  the patches listofpatches
      | 1,0 | 2,2 | 2,3 |
    When  post request is made on "http://localhost:8080/v1/cleaning-sessions" endpoint
    Then  status code <statuscode> is returned
    And Error message should display as "<errorMessage>"
    Examples:
      | roomsize | cords | instructions | statuscode | errorMessage                       |
      | 5,5      | 1,6   | NN           | 400        | Robot must placed inside the room. |
      | 5,5      | 1,5   | NN           | 400        | Robot must placed inside the room. |
      | 5,5      | 6,1   | NN           | 400        | Robot must placed inside the room. |


  Scenario Outline: Patches must be placed inside the room - error message displayed
    Given the roomsize "<roomsize>", coords "<cords>", "<instructions>" as instructions
    And  the patches listofpatches
      | 1,5 | 2,2 | 2,3 |
    When  post request is made on "http://localhost:8080/v1/cleaning-sessions" endpoint
    Then  status code <statuscode> is returned
    And Error message should display as "<errorMessage>"
    Examples:
      | roomsize | cords | instructions | statuscode | errorMessage|
      | 5,5      | 1,1   | NNESEESWNWW  | 400        | Patches must be placed inside the room.|
