$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/cleaningPatches.feature");
formatter.feature({
  "name": "Testing Patches and final hover positions",
  "description": "  As a user\n  I give the instruction, room size, patches location\n  Hoover should clear the patches and move to final position",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "TS1 and TS2 - Verify response  Changing Instructions only",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the roomsize \"\u003croomsize\u003e\", coords \"\u003ccords\u003e\", \"\u003cinstructions\u003e\" as instructions",
  "keyword": "Given "
});
formatter.step({
  "name": "the patches listofpatches",
  "keyword": "And ",
  "rows": [
    {
      "cells": [
        "1,0",
        "2,2",
        "2,3"
      ]
    }
  ]
});
formatter.step({
  "name": "post request is made on \"http://localhost:8080/v1/cleaning-sessions\" endpoint",
  "keyword": "When "
});
formatter.step({
  "name": "status code \u003cstatuscode\u003e is returned",
  "keyword": "Then "
});
formatter.step({
  "name": "Final coords are \"\u003cfinalCoords\u003e\" are returned",
  "keyword": "And "
});
formatter.step({
  "name": "Number of cleaned patches \u003cpatchcount\u003e is displayed",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "roomsize",
        "cords",
        "instructions",
        "statuscode",
        "finalCoords",
        "patchcount"
      ]
    },
    {
      "cells": [
        "5,5",
        "1,2",
        "NNESEESWNWW",
        "201",
        "[1, 3]",
        "1"
      ]
    },
    {
      "cells": [
        "5,5",
        "1,2",
        "NESSWS",
        "201",
        "[1, 0]",
        "3"
      ]
    }
  ]
});
formatter.scenario({
  "name": "TS1 and TS2 - Verify response  Changing Instructions only",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the roomsize \"5,5\", coords \"1,2\", \"NNESEESWNWW\" as instructions",
  "keyword": "Given "
});
formatter.match({
  "location": "cleaningPatchesTest.the_roomsize_coords_patches_and_as_instructions(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the patches listofpatches",
  "rows": [
    {
      "cells": [
        "1,0",
        "2,2",
        "2,3"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "cleaningPatchesTest.the_patches_listofpatches(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "post request is made on \"http://localhost:8080/v1/cleaning-sessions\" endpoint",
  "keyword": "When "
});
formatter.match({
  "location": "cleaningPatchesTest.post_request_is_made_on_endpoint(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status code 201 is returned",
  "keyword": "Then "
});
formatter.match({
  "location": "cleaningPatchesTest.status_code_is_returned(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Final coords are \"[1, 3]\" are returned",
  "keyword": "And "
});
formatter.match({
  "location": "cleaningPatchesTest.final_coords_are_are_returned(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Number of cleaned patches 1 is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "cleaningPatchesTest.number_of_cleaned_patches_is_displayed(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TS1 and TS2 - Verify response  Changing Instructions only",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the roomsize \"5,5\", coords \"1,2\", \"NESSWS\" as instructions",
  "keyword": "Given "
});
formatter.match({
  "location": "cleaningPatchesTest.the_roomsize_coords_patches_and_as_instructions(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the patches listofpatches",
  "rows": [
    {
      "cells": [
        "1,0",
        "2,2",
        "2,3"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "cleaningPatchesTest.the_patches_listofpatches(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "post request is made on \"http://localhost:8080/v1/cleaning-sessions\" endpoint",
  "keyword": "When "
});
formatter.match({
  "location": "cleaningPatchesTest.post_request_is_made_on_endpoint(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status code 201 is returned",
  "keyword": "Then "
});
formatter.match({
  "location": "cleaningPatchesTest.status_code_is_returned(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Final coords are \"[1, 0]\" are returned",
  "keyword": "And "
});
formatter.match({
  "location": "cleaningPatchesTest.final_coords_are_are_returned(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Number of cleaned patches 3 is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "cleaningPatchesTest.number_of_cleaned_patches_is_displayed(int)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected:\u003c4\u003e but was:\u003c3\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:834)\r\n\tat org.junit.Assert.assertEquals(Assert.java:645)\r\n\tat org.junit.Assert.assertEquals(Assert.java:631)\r\n\tat stepDefinitions.cleaningPatchesTest.number_of_cleaned_patches_is_displayed(cleaningPatchesTest.java:98)\r\n\tat ✽.Number of cleaned patches 3 is displayed(file:src/test/resources/features/cleaningPatches.feature:13)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "name": "TS3 - Verify response Changing Coords only",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the roomsize \"\u003croomsize\u003e\", coords \"\u003ccords\u003e\", \"\u003cinstructions\u003e\" as instructions",
  "keyword": "Given "
});
formatter.step({
  "name": "the patches listofpatches",
  "keyword": "And ",
  "rows": [
    {
      "cells": [
        "1,0",
        "2,2",
        "2,3"
      ]
    }
  ]
});
formatter.step({
  "name": "post request is made on \"http://localhost:8080/v1/cleaning-sessions\" endpoint",
  "keyword": "When "
});
formatter.step({
  "name": "status code \u003cstatuscode\u003e is returned",
  "keyword": "Then "
});
formatter.step({
  "name": "Final coords are \"\u003cfinalCoords\u003e\" are returned",
  "keyword": "And "
});
formatter.step({
  "name": "Number of cleaned patches \u003cpatchcount\u003e is displayed",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "roomsize",
        "cords",
        "instructions",
        "statuscode",
        "finalCoords",
        "patchcount"
      ]
    },
    {
      "cells": [
        "5,5",
        "1,1",
        "NNESEESWNWW",
        "201",
        "[1, 2]",
        "2"
      ]
    },
    {
      "cells": [
        "5,5",
        "1,3",
        "NNESEESWNWW",
        "201",
        "[1, 3]",
        "1"
      ]
    }
  ]
});
formatter.scenario({
  "name": "TS3 - Verify response Changing Coords only",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the roomsize \"5,5\", coords \"1,1\", \"NNESEESWNWW\" as instructions",
  "keyword": "Given "
});
formatter.match({
  "location": "cleaningPatchesTest.the_roomsize_coords_patches_and_as_instructions(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the patches listofpatches",
  "rows": [
    {
      "cells": [
        "1,0",
        "2,2",
        "2,3"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "cleaningPatchesTest.the_patches_listofpatches(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "post request is made on \"http://localhost:8080/v1/cleaning-sessions\" endpoint",
  "keyword": "When "
});
formatter.match({
  "location": "cleaningPatchesTest.post_request_is_made_on_endpoint(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status code 201 is returned",
  "keyword": "Then "
});
formatter.match({
  "location": "cleaningPatchesTest.status_code_is_returned(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Final coords are \"[1, 2]\" are returned",
  "keyword": "And "
});
formatter.match({
  "location": "cleaningPatchesTest.final_coords_are_are_returned(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Number of cleaned patches 2 is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "cleaningPatchesTest.number_of_cleaned_patches_is_displayed(int)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected:\u003c3\u003e but was:\u003c2\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:834)\r\n\tat org.junit.Assert.assertEquals(Assert.java:645)\r\n\tat org.junit.Assert.assertEquals(Assert.java:631)\r\n\tat stepDefinitions.cleaningPatchesTest.number_of_cleaned_patches_is_displayed(cleaningPatchesTest.java:98)\r\n\tat ✽.Number of cleaned patches 2 is displayed(file:src/test/resources/features/cleaningPatches.feature:26)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "TS3 - Verify response Changing Coords only",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the roomsize \"5,5\", coords \"1,3\", \"NNESEESWNWW\" as instructions",
  "keyword": "Given "
});
formatter.match({
  "location": "cleaningPatchesTest.the_roomsize_coords_patches_and_as_instructions(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the patches listofpatches",
  "rows": [
    {
      "cells": [
        "1,0",
        "2,2",
        "2,3"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "cleaningPatchesTest.the_patches_listofpatches(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "post request is made on \"http://localhost:8080/v1/cleaning-sessions\" endpoint",
  "keyword": "When "
});
formatter.match({
  "location": "cleaningPatchesTest.post_request_is_made_on_endpoint(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status code 201 is returned",
  "keyword": "Then "
});
formatter.match({
  "location": "cleaningPatchesTest.status_code_is_returned(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Final coords are \"[1, 3]\" are returned",
  "keyword": "And "
});
formatter.match({
  "location": "cleaningPatchesTest.final_coords_are_are_returned(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Number of cleaned patches 1 is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "cleaningPatchesTest.number_of_cleaned_patches_is_displayed(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TS4 - Verify response  Changing patches only",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "the roomsize \"5,5\", coords \"1,2\", \"NNESEESWNWW\" as instructions",
  "keyword": "Given "
});
formatter.match({
  "location": "cleaningPatchesTest.the_roomsize_coords_patches_and_as_instructions(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the patches listofpatches",
  "rows": [
    {
      "cells": [
        "1,0",
        "2,2",
        "2,3"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "cleaningPatchesTest.the_patches_listofpatches(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "post request is made on \"http://localhost:8080/v1/cleaning-sessions\" endpoint",
  "keyword": "When "
});
formatter.match({
  "location": "cleaningPatchesTest.post_request_is_made_on_endpoint(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status code 201 is returned",
  "keyword": "Then "
});
formatter.match({
  "location": "cleaningPatchesTest.status_code_is_returned(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Final coords are \"[1, 3]\" are returned",
  "keyword": "And "
});
formatter.match({
  "location": "cleaningPatchesTest.final_coords_are_are_returned(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Number of cleaned patches 1 is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "cleaningPatchesTest.number_of_cleaned_patches_is_displayed(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TS5 - Verify response  Changing patches and instructions only",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "the roomsize \"5,5\", coords \"1,2\", \"NENEESESWSWW\" as instructions",
  "keyword": "Given "
});
formatter.match({
  "location": "cleaningPatchesTest.the_roomsize_coords_patches_and_as_instructions(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the patches listofpatches",
  "rows": [
    {
      "cells": [
        "4,4",
        "2,3",
        "3,1"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "cleaningPatchesTest.the_patches_listofpatches(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "post request is made on \"http://localhost:8080/v1/cleaning-sessions\" endpoint",
  "keyword": "When "
});
formatter.match({
  "location": "cleaningPatchesTest.post_request_is_made_on_endpoint(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status code 201 is returned",
  "keyword": "Then "
});
formatter.match({
  "location": "cleaningPatchesTest.status_code_is_returned(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Final coords are \"[2, 1]\" are returned",
  "keyword": "And "
});
formatter.match({
  "location": "cleaningPatchesTest.final_coords_are_are_returned(String)"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[[1], 1]\u003e but was:\u003c[[2], 1]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat stepDefinitions.cleaningPatchesTest.final_coords_are_are_returned(cleaningPatchesTest.java:92)\r\n\tat ✽.Final coords are \"[2, 1]\" are returned(file:src/test/resources/features/cleaningPatches.feature:47)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Number of cleaned patches 3 is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "cleaningPatchesTest.number_of_cleaned_patches_is_displayed(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "name": "TS6 - Verify response Changing Coords and Instructions only",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the roomsize \"\u003croomsize\u003e\", coords \"\u003ccords\u003e\", \"\u003cinstructions\u003e\" as instructions",
  "keyword": "Given "
});
formatter.step({
  "name": "the patches listofpatches",
  "keyword": "And ",
  "rows": [
    {
      "cells": [
        "1,0",
        "2,2",
        "2,3"
      ]
    }
  ]
});
formatter.step({
  "name": "post request is made on \"http://localhost:8080/v1/cleaning-sessions\" endpoint",
  "keyword": "When "
});
formatter.step({
  "name": "status code \u003cstatuscode\u003e is returned",
  "keyword": "Then "
});
formatter.step({
  "name": "Final coords are \"\u003cfinalCoords\u003e\" are returned",
  "keyword": "And "
});
formatter.step({
  "name": "Number of cleaned patches \u003cpatchcount\u003e is displayed",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "roomsize",
        "cords",
        "instructions",
        "statuscode",
        "finalCoords",
        "patchcount"
      ]
    },
    {
      "cells": [
        "5,5",
        "1,3",
        "NNNNN",
        "201",
        "[0, 4]",
        "0"
      ]
    },
    {
      "cells": [
        "5,5",
        "1,4",
        "SSSS",
        "201",
        "[1, 0]",
        "1"
      ]
    }
  ]
});
formatter.scenario({
  "name": "TS6 - Verify response Changing Coords and Instructions only",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the roomsize \"5,5\", coords \"1,3\", \"NNNNN\" as instructions",
  "keyword": "Given "
});
formatter.match({
  "location": "cleaningPatchesTest.the_roomsize_coords_patches_and_as_instructions(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the patches listofpatches",
  "rows": [
    {
      "cells": [
        "1,0",
        "2,2",
        "2,3"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "cleaningPatchesTest.the_patches_listofpatches(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "post request is made on \"http://localhost:8080/v1/cleaning-sessions\" endpoint",
  "keyword": "When "
});
formatter.match({
  "location": "cleaningPatchesTest.post_request_is_made_on_endpoint(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status code 201 is returned",
  "keyword": "Then "
});
formatter.match({
  "location": "cleaningPatchesTest.status_code_is_returned(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Final coords are \"[0, 4]\" are returned",
  "keyword": "And "
});
formatter.match({
  "location": "cleaningPatchesTest.final_coords_are_are_returned(String)"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[[1], 4]\u003e but was:\u003c[[0], 4]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat stepDefinitions.cleaningPatchesTest.final_coords_are_are_returned(cleaningPatchesTest.java:92)\r\n\tat ✽.Final coords are \"[0, 4]\" are returned(file:src/test/resources/features/cleaningPatches.feature:56)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Number of cleaned patches 0 is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "cleaningPatchesTest.number_of_cleaned_patches_is_displayed(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "TS6 - Verify response Changing Coords and Instructions only",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the roomsize \"5,5\", coords \"1,4\", \"SSSS\" as instructions",
  "keyword": "Given "
});
formatter.match({
  "location": "cleaningPatchesTest.the_roomsize_coords_patches_and_as_instructions(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the patches listofpatches",
  "rows": [
    {
      "cells": [
        "1,0",
        "2,2",
        "2,3"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "cleaningPatchesTest.the_patches_listofpatches(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "post request is made on \"http://localhost:8080/v1/cleaning-sessions\" endpoint",
  "keyword": "When "
});
formatter.match({
  "location": "cleaningPatchesTest.post_request_is_made_on_endpoint(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status code 201 is returned",
  "keyword": "Then "
});
formatter.match({
  "location": "cleaningPatchesTest.status_code_is_returned(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Final coords are \"[1, 0]\" are returned",
  "keyword": "And "
});
formatter.match({
  "location": "cleaningPatchesTest.final_coords_are_are_returned(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Number of cleaned patches 1 is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "cleaningPatchesTest.number_of_cleaned_patches_is_displayed(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TS7 - Verifying no of patches cleared - changing coords and patches but instructions fixed",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "the roomsize \"5,5\", coords \"2,2\", \"NNESEESWNWW\" as instructions",
  "keyword": "Given "
});
formatter.match({
  "location": "cleaningPatchesTest.the_roomsize_coords_patches_and_as_instructions(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the patches listofpatches",
  "rows": [
    {
      "cells": [
        "1,3",
        "2,4",
        "2,3"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "cleaningPatchesTest.the_patches_listofpatches(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "post request is made on \"http://localhost:8080/v1/cleaning-sessions\" endpoint",
  "keyword": "When "
});
formatter.match({
  "location": "cleaningPatchesTest.post_request_is_made_on_endpoint(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status code 201 is returned",
  "keyword": "Then "
});
formatter.match({
  "location": "cleaningPatchesTest.status_code_is_returned(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Final coords are \"[2, 3]\" are returned",
  "keyword": "And "
});
formatter.match({
  "location": "cleaningPatchesTest.final_coords_are_are_returned(String)"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[[1], 3]\u003e but was:\u003c[[2], 3]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat stepDefinitions.cleaningPatchesTest.final_coords_are_are_returned(cleaningPatchesTest.java:92)\r\n\tat ✽.Final coords are \"[2, 3]\" are returned(file:src/test/resources/features/cleaningPatches.feature:69)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Number of cleaned patches 1 is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "cleaningPatchesTest.number_of_cleaned_patches_is_displayed(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("file:src/test/resources/features/errorDisplay.feature");
formatter.feature({
  "name": "Testing  Error Message display",
  "description": "  As a user\n  I gave wrong  instructions or patches or hoover  location\n  Error code and error message should be displayed",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Wrong Instructions provided - error message displayed",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the roomsize \"\u003croomsize\u003e\", coords \"\u003ccords\u003e\", \"\u003cinstructions\u003e\" as instructions",
  "keyword": "Given "
});
formatter.step({
  "name": "the patches listofpatches",
  "keyword": "And ",
  "rows": [
    {
      "cells": [
        "1,0",
        "2,2",
        "2,3"
      ]
    }
  ]
});
formatter.step({
  "name": "post request is made on \"http://localhost:8080/v1/cleaning-sessions\" endpoint",
  "keyword": "When "
});
formatter.step({
  "name": "status code \u003cstatuscode\u003e is returned",
  "keyword": "Then "
});
formatter.step({
  "name": "Error message should display as \"\u003cerrorMessage\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "roomsize",
        "cords",
        "instructions",
        "statuscode",
        "errorMessage"
      ]
    },
    {
      "cells": [
        "5,5",
        "4,4",
        "NN",
        "400",
        "Wrong instructions display"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Wrong Instructions provided - error message displayed",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the roomsize \"5,5\", coords \"4,4\", \"NN\" as instructions",
  "keyword": "Given "
});
formatter.match({
  "location": "cleaningPatchesTest.the_roomsize_coords_patches_and_as_instructions(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the patches listofpatches",
  "rows": [
    {
      "cells": [
        "1,0",
        "2,2",
        "2,3"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "cleaningPatchesTest.the_patches_listofpatches(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "post request is made on \"http://localhost:8080/v1/cleaning-sessions\" endpoint",
  "keyword": "When "
});
formatter.match({
  "location": "cleaningPatchesTest.post_request_is_made_on_endpoint(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status code 400 is returned",
  "keyword": "Then "
});
formatter.match({
  "location": "cleaningPatchesTest.status_code_is_returned(int)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected:\u003c201\u003e but was:\u003c400\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:834)\r\n\tat org.junit.Assert.assertEquals(Assert.java:645)\r\n\tat org.junit.Assert.assertEquals(Assert.java:631)\r\n\tat stepDefinitions.cleaningPatchesTest.status_code_is_returned(cleaningPatchesTest.java:86)\r\n\tat ✽.status code 400 is returned(file:src/test/resources/features/errorDisplay.feature:11)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Error message should display as \"Wrong instructions display\"",
  "keyword": "And "
});
formatter.match({
  "location": "cleaningPatchesTest.error_message_should_display_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "name": "Robot must placed inside the room - error message displayed",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the roomsize \"\u003croomsize\u003e\", coords \"\u003ccords\u003e\", \"\u003cinstructions\u003e\" as instructions",
  "keyword": "Given "
});
formatter.step({
  "name": "the patches listofpatches",
  "keyword": "And ",
  "rows": [
    {
      "cells": [
        "1,0",
        "2,2",
        "2,3"
      ]
    }
  ]
});
formatter.step({
  "name": "post request is made on \"http://localhost:8080/v1/cleaning-sessions\" endpoint",
  "keyword": "When "
});
formatter.step({
  "name": "status code \u003cstatuscode\u003e is returned",
  "keyword": "Then "
});
formatter.step({
  "name": "Error message should display as \"\u003cerrorMessage\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "roomsize",
        "cords",
        "instructions",
        "statuscode",
        "errorMessage"
      ]
    },
    {
      "cells": [
        "5,5",
        "1,6",
        "NN",
        "400",
        "Robot must placed inside the room."
      ]
    },
    {
      "cells": [
        "5,5",
        "1,5",
        "NN",
        "400",
        "Robot must placed inside the room."
      ]
    },
    {
      "cells": [
        "5,5",
        "6,1",
        "NN",
        "400",
        "Robot must placed inside the room."
      ]
    }
  ]
});
formatter.scenario({
  "name": "Robot must placed inside the room - error message displayed",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the roomsize \"5,5\", coords \"1,6\", \"NN\" as instructions",
  "keyword": "Given "
});
formatter.match({
  "location": "cleaningPatchesTest.the_roomsize_coords_patches_and_as_instructions(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the patches listofpatches",
  "rows": [
    {
      "cells": [
        "1,0",
        "2,2",
        "2,3"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "cleaningPatchesTest.the_patches_listofpatches(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "post request is made on \"http://localhost:8080/v1/cleaning-sessions\" endpoint",
  "keyword": "When "
});
formatter.match({
  "location": "cleaningPatchesTest.post_request_is_made_on_endpoint(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status code 400 is returned",
  "keyword": "Then "
});
formatter.match({
  "location": "cleaningPatchesTest.status_code_is_returned(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Error message should display as \"Robot must placed inside the room.\"",
  "keyword": "And "
});
formatter.match({
  "location": "cleaningPatchesTest.error_message_should_display_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Robot must placed inside the room - error message displayed",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the roomsize \"5,5\", coords \"1,5\", \"NN\" as instructions",
  "keyword": "Given "
});
formatter.match({
  "location": "cleaningPatchesTest.the_roomsize_coords_patches_and_as_instructions(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the patches listofpatches",
  "rows": [
    {
      "cells": [
        "1,0",
        "2,2",
        "2,3"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "cleaningPatchesTest.the_patches_listofpatches(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "post request is made on \"http://localhost:8080/v1/cleaning-sessions\" endpoint",
  "keyword": "When "
});
formatter.match({
  "location": "cleaningPatchesTest.post_request_is_made_on_endpoint(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status code 400 is returned",
  "keyword": "Then "
});
formatter.match({
  "location": "cleaningPatchesTest.status_code_is_returned(int)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected:\u003c201\u003e but was:\u003c400\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:834)\r\n\tat org.junit.Assert.assertEquals(Assert.java:645)\r\n\tat org.junit.Assert.assertEquals(Assert.java:631)\r\n\tat stepDefinitions.cleaningPatchesTest.status_code_is_returned(cleaningPatchesTest.java:86)\r\n\tat ✽.status code 400 is returned(file:src/test/resources/features/errorDisplay.feature:23)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Error message should display as \"Robot must placed inside the room.\"",
  "keyword": "And "
});
formatter.match({
  "location": "cleaningPatchesTest.error_message_should_display_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Robot must placed inside the room - error message displayed",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the roomsize \"5,5\", coords \"6,1\", \"NN\" as instructions",
  "keyword": "Given "
});
formatter.match({
  "location": "cleaningPatchesTest.the_roomsize_coords_patches_and_as_instructions(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the patches listofpatches",
  "rows": [
    {
      "cells": [
        "1,0",
        "2,2",
        "2,3"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "cleaningPatchesTest.the_patches_listofpatches(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "post request is made on \"http://localhost:8080/v1/cleaning-sessions\" endpoint",
  "keyword": "When "
});
formatter.match({
  "location": "cleaningPatchesTest.post_request_is_made_on_endpoint(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status code 400 is returned",
  "keyword": "Then "
});
formatter.match({
  "location": "cleaningPatchesTest.status_code_is_returned(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Error message should display as \"Robot must placed inside the room.\"",
  "keyword": "And "
});
formatter.match({
  "location": "cleaningPatchesTest.error_message_should_display_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Patches must be placed inside the room - error message displayed",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the roomsize \"\u003croomsize\u003e\", coords \"\u003ccords\u003e\", \"\u003cinstructions\u003e\" as instructions",
  "keyword": "Given "
});
formatter.step({
  "name": "the patches listofpatches",
  "keyword": "And ",
  "rows": [
    {
      "cells": [
        "1,5",
        "2,2",
        "2,3"
      ]
    }
  ]
});
formatter.step({
  "name": "post request is made on \"http://localhost:8080/v1/cleaning-sessions\" endpoint",
  "keyword": "When "
});
formatter.step({
  "name": "status code \u003cstatuscode\u003e is returned",
  "keyword": "Then "
});
formatter.step({
  "name": "Error message should display as \"\u003cerrorMessage\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "roomsize",
        "cords",
        "instructions",
        "statuscode",
        "errorMessage"
      ]
    },
    {
      "cells": [
        "5,5",
        "1,1",
        "NNESEESWNWW",
        "400",
        "Patches must be placed inside the room."
      ]
    }
  ]
});
formatter.scenario({
  "name": "Patches must be placed inside the room - error message displayed",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the roomsize \"5,5\", coords \"1,1\", \"NNESEESWNWW\" as instructions",
  "keyword": "Given "
});
formatter.match({
  "location": "cleaningPatchesTest.the_roomsize_coords_patches_and_as_instructions(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the patches listofpatches",
  "rows": [
    {
      "cells": [
        "1,5",
        "2,2",
        "2,3"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "cleaningPatchesTest.the_patches_listofpatches(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "post request is made on \"http://localhost:8080/v1/cleaning-sessions\" endpoint",
  "keyword": "When "
});
formatter.match({
  "location": "cleaningPatchesTest.post_request_is_made_on_endpoint(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status code 400 is returned",
  "keyword": "Then "
});
formatter.match({
  "location": "cleaningPatchesTest.status_code_is_returned(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Error message should display as \"Patches must be placed inside the room.\"",
  "keyword": "And "
});
formatter.match({
  "location": "cleaningPatchesTest.error_message_should_display_as(String)"
});
formatter.result({
  "status": "passed"
});
});