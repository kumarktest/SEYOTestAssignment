package stepDefinitions;

import io.cucumber.datatable.DataTable;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import io.restassured.response.Response;
import models.CleanSessionsRequest;
import org.junit.Assert;


import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

import static io.restassured.RestAssured.baseURI;
import static io.restassured.RestAssured.given;

public class cleaningPatchesTest {

    Response res;
    CleanSessionsRequest csBody;
    List<Integer> roomsize, intialcoords;
    List<List<Integer>> listOfPatches = new ArrayList<>();
    String instructionsString;


    // @Given("the roomsize {string}, coords {string},  patches {string}, {string} and {string} as instructions")
   //@Given("the roomsize {string}, coords {string}, patches (.*) and {string} as instructions")
   @Given("the roomsize {string}, coords {string}, {string} as instructions")
    public void the_roomsize_coords_patches_and_as_instructions(String rsize, String coords, String instructions) {
       roomsize = transform(rsize);
       intialcoords = transform(coords);
       instructionsString = instructions;
    }

    @And("the patches listofpatches")
    public void the_patches_listofpatches(DataTable dataTable) {

       // System.out.println("DataTable got from scenario "+ dataTable);
        List<List<String>> data = dataTable.asLists();
       // System.out.println("List of List of Strings after extraction from data table" + data);

        int total = 0;
        int subListCount;
        for (List<String> sublist : data) {
            total += sublist.size();
            subListCount = sublist.size();
           // System.out.println(subListCount);
           // System.out.println("sublist"+ sublist);
            for (String patch : sublist){
                System.out.println(patch);
                List<Integer> patchint = transform(patch);
                listOfPatches.add(patchint);
            }
          //  System.out.println(listOfPatches);
        }
        csBody = new CleanSessionsRequest(roomsize,intialcoords,listOfPatches,instructionsString);

    }

//    @Given("the roomsize [{Integer}], coords [{Integer}], patches [[{int}, {int}], [{int}, {int}], [{int}, {int}]] and {string} as instructions")
//    public void the_roomsize_coords_patches_and_as_instructions(List<Integer> roomSize, List<Integer> coords,  List<List<Integer>> listOfPatches , String instructions) {
//         csBody = new CleanSessionsRequest(roomSize,coords,listOfPatches,instructions);
//    }

    @When("post request is made on {string} endpoint")
    public void post_request_is_made_on_endpoint(String url) {

        RestAssured.baseURI = url;

         res = given().
                contentType(ContentType.JSON).
                body(csBody).
                when().
                post(baseURI);
    }

    @Then("status code {int} is returned")
    public void status_code_is_returned(int ExpectedstatusCode) {
       res.prettyPrint();
        Assert.assertEquals(res.statusCode(),ExpectedstatusCode);
    }

    @And("Final coords are {string} are returned")
    public void final_coords_are_are_returned(String expectedcoords) {
        String actualCoords = res.getBody().path("coords").toString();
        Assert.assertEquals(actualCoords,expectedcoords);
    }

    @And("Number of cleaned patches {int} is displayed")
    public void number_of_cleaned_patches_is_displayed(int expectedcleanPatches) {
        int actualPatches = res.getBody().path("patches");
        Assert.assertEquals(actualPatches,expectedcleanPatches);
    }

    @Then("Error message should display as {string}")
    public void error_message_should_display_as(String expectedErrorMessage) {
       String actualErrormessage =  res.getBody().asString();
       Assert.assertEquals(actualErrormessage,expectedErrorMessage);
    }

    private List<Integer> transform(String integers) {
        List<String> integersAsString = Arrays.asList(integers.split(","));
        return integersAsString.stream().map(s -> Integer.valueOf(s.trim())).collect(Collectors.toList());
    }

}
