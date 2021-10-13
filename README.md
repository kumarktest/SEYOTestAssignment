Seyo assignment Test Details
==========================================

## Introduction
This Repository contains details and test coverage of manual and automation test for the test assignment.
	
Repository structure contains below
- Manual
- Automation

## Assumptions and requirements considered for testing
### Requirements

* room dimensions as [X and Y coordinates](https://en.wikipedia.org/wiki/Cartesian_coordinate_system), identifying the top right corner of the room rectangle. This room is divided up in a grid based on these dimensions; a room that has dimensions X: 5 and Y: 5 has 5 columns and 5 rows, so 25 possible hoover positions. The bottom left corner is the point of origin for our coordinate system, so as the room contains all coordinates its bottom left corner is defined by X: 0 and Y: 0 and the top-right corner of a 5 by 5 room is defined by X: 4 and Y: 4.
* locations of patches of dirt, also defined by X and Y coordinates identifying the bottom left corner of those grid positions.
* an initial hoover position (X and Y coordinates like patches of dirt)
* driving instructions (as [cardinal directions](https://en.wikipedia.org/wiki/Cardinal_direction) where e.g. N and E mean "go north" and "go east" respectively) 

1. The room will be rectangular, has no obstacles (except the room walls), no doors and all locations in the room will be clean (hoovering has no effect) except for the locations of the patches of dirt presented in the program input.

2.Placing the hoover on a patch of dirt ("hoovering") removes the patch of dirt so that the patch is then clean for the remainder of the program run. The hoover is always on - there is no need to enable it.

3.Driving into a wall has no effect (the robot skids in place).
  
### Assumptions

1. Hoover is facing towards North
2. When hoover skids to the wall it is coming back to it's last position.

### Missing Requirements
1. How many maximum number of patches can be given?
2. What is the Minium and Maximun Length of Instrcutions that was allowed?
3. What error messages should be displayed?
	
## Manual Test folder
Manual test folder contains 
1. Test Suite 
2. Bug Report
	
## Automation Test Folder
This folder contains the test project build on Cucumber, Rest assured with Java programing language to test API service.
	
Project contains following project structure
  
  ![image](https://user-images.githubusercontent.com/92436442/137136917-16b2195f-5e1f-4234-a2c1-c5b7189cbad9.png)

### Features 
 Test scenarios covered in manual test are created as a feature file with scenarios.
 
### Report
Test run reports are displayed in target as below

![image](https://user-images.githubusercontent.com/92436442/137137587-5a418dbb-591c-419a-8bf3-4325c5e7b90e.png)

Reports will be displayed as follows 

![image](https://user-images.githubusercontent.com/92436442/137139771-8f5ef24e-091d-42dd-b770-9030a910f30b.png)

Bugs will be displayed as follows

![image](https://user-images.githubusercontent.com/92436442/137140034-221ba635-efb9-4927-8575-71be958edc88.png)

### Installations, downloads and Running test - Maven
#### Pre-requisites
- <a href="https://java.com/en/download/manual.jsp" target="_blank">Java</a>
- <a href="https://maven.apache.org/download.cgi" target="_blank">Maven</a>
- Intellij

#### Maven dependencies
- Cucumber
- Rest Assured
- Extent Report

#### Setting up selenium-cucumber-java
- Install Java and set path.
- Install Maven and set path.
- Clone respective repository or download zip.
	- maven : https://github.com/kumarktest/SEYOTestAssignment.git

#### Running features
- Goto project directory.
- Use "mvn clean install" command to run features.


