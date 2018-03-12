@tag
Feature: Test data existance
  I want to check if there is some data in all the tables
  Background:
    Given I log in as demo with password demo with name Иванов О.З.

  @tag2
  Scenario Outline: Test data existance outline
    When I go to <table>
    When I check for the table

    Examples:
      | table                                                                               		|
      | "http://eaistan-dev.proitr.ru/index.php?show=rating&menu_id=21"                     		|
      | "http://eaistan-dev.proitr.ru/index.php?show=ExpertNMC&menu_id=1500&report_id=56"   		|
      | "http://eaistan-dev.proitr.ru/index.php?show=ExpertNMC&menu_id=1500&report_id=1501" 		|
      | "http://eaistan-dev.proitr.ru/index.php?show=ExpertNMC&menu_id=1500&report_id=1505" 		|
      | "http://eaistan-dev.proitr.ru/index.php?show=ExpertNMC&menu_id=1500&report_id=1506" 		|
      | "http://eaistan-dev.proitr.ru/index.php?show=KpgzSpgz&menu_id=1503&report_id=54"    		|
			| "http://eaistan-dev.proitr.ru/index.php?show=KpgzSpgz&menu_id=1503&report_id=1504"			|
			| "http://eaistan-dev.proitr.ru/index.php?show=KpgzSpgz&menu_id=1503&report_id=1507"			|
			| "http://eaistan-dev.proitr.ru/index.php?show=KpgzSpgz&menu_id=1503&report_id=1509"			|
			| "http://eaistan-dev.proitr.ru/index.php?show=Administration&menu_id=1700&report_id=1701"|
			| "http://eaistan-dev.proitr.ru/index.php?show=Administration&menu_id=1700&report_id=1702"|
			| "http://eaistan-dev.proitr.ru/index.php?show=Administration&menu_id=1700&report_id=1703"|
			| "http://eaistan-dev.proitr.ru/index.php?show=Administration&menu_id=1700&report_id=1704"|
			| "http://eaistan-dev.proitr.ru/index.php?show=new_reports&menu_id=1096&report_id=49"			|
			| "http://eaistan-dev.proitr.ru/index.php?show=new_reports&menu_id=1096&report_id=47"			|
			| "http://eaistan-dev.proitr.ru/index.php?show=new_reports&menu_id=1096&report_id=46"			|
			| "http://eaistan-dev.proitr.ru/index.php?show=new_reports&menu_id=1096&report_id=57"			|
			| "http://eaistan-dev.proitr.ru/index.php?show=new_reports&menu_id=1096&report_id=44"			|
			| "http://eaistan-dev.proitr.ru/index.php?show=new_reports&menu_id=1096&report_id=48"			|
			| "http://eaistan-dev.proitr.ru/index.php?show=new_reports&menu_id=1096&report_id=50"			|
			| "http://eaistan-dev.proitr.ru/index.php?show=new_reports&menu_id=1096&report_id=51"			|
			| "http://eaistan-dev.proitr.ru/index.php?show=new_reports&menu_id=1096&report_id=52"			|
			| "http://eaistan-dev.proitr.ru/index.php?show=new_reports&menu_id=1096&report_id=53"			|
			| "http://eaistan-dev.proitr.ru/index.php?show=new_reports&menu_id=1096&report_id=67"			|
			| "http://eaistan-dev.proitr.ru/index.php?show=Mrg&menu_id=1800&report_id=1801"						|
			| "http://eaistan-dev.proitr.ru/index.php?show=Mrg&menu_id=1800&report_id=1802"						|
			| "http://eaistan-dev.proitr.ru/index.php?show=Mrg&menu_id=1800&report_id=1803"						|
			| "http://eaistan-dev.proitr.ru/index.php?show=Mrg&menu_id=1800&report_id=1804"						|
			| "http://eaistan-dev.proitr.ru/index.php?show=Mrg&menu_id=1800&report_id=1805"						|
			| "http://eaistan-dev.proitr.ru/index.php?show=TreeContract&menu_id=1600"									|			