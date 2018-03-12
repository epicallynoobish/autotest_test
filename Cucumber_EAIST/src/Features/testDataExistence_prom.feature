@tag
Feature: Test data existance_prom
  I want to check if there is some data in all the tables
  Background:
    Given I login as demo with password reptilian with name Иванов О.З.

  @tag2
  Scenario Outline: Test data existance outline
    When I go to <table>
    When I checking the table

    Examples:
      | table                                                                             		  	|
      | "http://eaist.mos.ru/analytics/index.php?show=rating&menu_id=21"                  		   	|
      | "http://eaist.mos.ru/analytics/index.php?show=ExpertNMC&menu_id=1500&report_id=56" 			  |
      | "http://eaist.mos.ru/analytics/index.php?show=ExpertNMC&menu_id=1500&report_id=1501"		 	|
      | "http://eaist.mos.ru/analytics/index.php?show=ExpertNMC&menu_id=1500&report_id=1505"		 	|
      | "http://eaist.mos.ru/analytics/index.php?show=ExpertNMC&menu_id=1500&report_id=1506"		 	|
      | "http://eaist.mos.ru/analytics/index.php?show=KpgzSpgz&menu_id=1503&report_id=54"   		 	|
			| "http://eaist.mos.ru/analytics/index.php?show=KpgzSpgz&menu_id=1503&report_id=1504"				|
			| "http://eaist.mos.ru/analytics/index.php?show=KpgzSpgz&menu_id=1503&report_id=1507"				|
			| "http://eaist.mos.ru/analytics/index.php?show=KpgzSpgz&menu_id=1503&report_id=1509"				|
			| "http://eaist.mos.ru/analytics/index.php?show=Administration&menu_id=1700&report_id=1701"	|
			| "http://eaist.mos.ru/analytics/index.php?show=Administration&menu_id=1700&report_id=1702"	|
			| "http://eaist.mos.ru/analytics/index.php?show=Administration&menu_id=1700&report_id=1703"	|
			| "http://eaist.mos.ru/analytics/index.php?show=Administration&menu_id=1700&report_id=1704"	|
			| "http://eaist.mos.ru/analytics/index.php?show=new_reports&menu_id=1096&report_id=49"			|
			| "http://eaist.mos.ru/analytics/index.php?show=new_reports&menu_id=1096&report_id=47"			|
			| "http://eaist.mos.ru/analytics/index.php?show=new_reports&menu_id=1096&report_id=46"			|
			| "http://eaist.mos.ru/analytics/index.php?show=new_reports&menu_id=1096&report_id=57"			|
			| "http://eaist.mos.ru/analytics/index.php?show=new_reports&menu_id=1096&report_id=44"			|
			| "http://eaist.mos.ru/analytics/index.php?show=new_reports&menu_id=1096&report_id=48"			|
			| "http://eaist.mos.ru/analytics/index.php?show=new_reports&menu_id=1096&report_id=50"			|
			| "http://eaist.mos.ru/analytics/index.php?show=new_reports&menu_id=1096&report_id=51"			|
			| "http://eaist.mos.ru/analytics/index.php?show=new_reports&menu_id=1096&report_id=52"			|
			| "http://eaist.mos.ru/analytics/index.php?show=new_reports&menu_id=1096&report_id=53"			|
			| "http://eaist.mos.ru/analytics/index.php?show=new_reports&menu_id=1096&report_id=67"			|
			| "http://eaist.mos.ru/analytics/index.php?show=Mrg&menu_id=1800&report_id=1801"						|
			| "http://eaist.mos.ru/analytics/index.php?show=Mrg&menu_id=1800&report_id=1802"						|
			| "http://eaist.mos.ru/analytics/index.php?show=Mrg&menu_id=1800&report_id=1803"						|
			| "http://eaist.mos.ru/analytics/index.php?show=Mrg&menu_id=1800&report_id=1804"						|
			| "http://eaist.mos.ru/analytics/index.php?show=Mrg&menu_id=1800&report_id=1805"						|
			| "http://eaist.mos.ru/analytics/index.php?show=TreeContract&menu_id=1600"									|