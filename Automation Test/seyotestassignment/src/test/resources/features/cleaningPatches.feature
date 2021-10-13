Feature: Testing Patches and final hover positions
  As a user
  I give the instruction, room size, patches location
  Hoover should clear the patches and move to final position

  Scenario Outline: TS1 and TS2 - Verify response  Changing Instructions only
    Given the roomsize "<roomsize>", coords "<cords>", "<instructions>" as instructions
    And  the patches listofpatches
      | 1,0 | 2,2 | 2,3 |
    When  post request is made on "http://localhost:8080/v1/cleaning-sessions" endpoint
    Then  status code <statuscode> is returned
    And  Final coords are "<finalCoords>" are returned
    And  Number of cleaned patches <patchcount> is displayed
    Examples:
      | roomsize | cords | instructions | statuscode | finalCoords | patchcount |
      | 5,5      | 1,2   | NNESEESWNWW  | 201        | [1, 3]      | 1          |
      | 5,5      | 1,2   | NESSWS       | 201        | [1, 0]      | 3          |

  Scenario Outline: TS3 - Verify response Changing Coords only
    Given the roomsize "<roomsize>", coords "<cords>", "<instructions>" as instructions
    And  the patches listofpatches
      | 1,0 | 2,2 | 2,3 |
    When  post request is made on "http://localhost:8080/v1/cleaning-sessions" endpoint
    Then  status code <statuscode> is returned
    And  Final coords are "<finalCoords>" are returned
    And  Number of cleaned patches <patchcount> is displayed
    Examples:
      | roomsize | cords | instructions | statuscode | finalCoords | patchcount |
      | 5,5      | 1,1   | NNESEESWNWW  | 201        | [1, 2]      | 2          |
      | 5,5      | 1,3   | NNESEESWNWW  | 201        | [1, 3]      | 1          |

  Scenario: TS4 - Verify response  Changing patches only
    Given the roomsize "5,5", coords "1,2", "NNESEESWNWW" as instructions
    And  the patches listofpatches
      | 1,0 | 2,2 | 2,3 |
    When  post request is made on "http://localhost:8080/v1/cleaning-sessions" endpoint
    Then  status code 201 is returned
    And  Final coords are "[1, 3]" are returned
    And  Number of cleaned patches 1 is displayed

  Scenario: TS5 - Verify response  Changing patches and instructions only
    Given the roomsize "5,5", coords "1,2", "NENEESESWSWW" as instructions
    And  the patches listofpatches
      | 4,4 | 2,3 | 3,1 |
    When  post request is made on "http://localhost:8080/v1/cleaning-sessions" endpoint
    Then  status code 201 is returned
    And  Final coords are "[2, 1]" are returned
    And  Number of cleaned patches 3 is displayed

  Scenario Outline: TS6 - Verify response Changing Coords and Instructions only
    Given the roomsize "<roomsize>", coords "<cords>", "<instructions>" as instructions
    And  the patches listofpatches
      | 1,0 | 2,2 | 2,3 |
    When  post request is made on "http://localhost:8080/v1/cleaning-sessions" endpoint
    Then  status code <statuscode> is returned
    And  Final coords are "<finalCoords>" are returned
    And  Number of cleaned patches <patchcount> is displayed
    Examples:
      | roomsize | cords | instructions | statuscode | finalCoords | patchcount |
      | 5,5      | 1,3   | NNNNN        | 201        | [0, 4]      | 0          |
      | 5,5      | 1,4   | SSSS         | 201        | [1, 0]      | 1          |

  Scenario: TS7 - Verifying no of patches cleared - changing coords and patches but instructions fixed
    Given the roomsize "5,5", coords "2,2", "NNESEESWNWW" as instructions
    And  the patches listofpatches
      | 1,3 | 2,4 | 2,3|
    When  post request is made on "http://localhost:8080/v1/cleaning-sessions" endpoint
    Then  status code 201 is returned
    And  Final coords are "[2, 3]" are returned
    And  Number of cleaned patches 1 is displayed


