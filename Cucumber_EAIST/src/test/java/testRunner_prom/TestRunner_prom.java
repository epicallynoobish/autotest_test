package testRunner_prom;

import static com.codeborne.selenide.Selenide.open;

import org.junit.BeforeClass;
import org.junit.runner.RunWith;

import com.codeborne.selenide.Configuration;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)

@CucumberOptions
		(
        plugin = {"html:target/cucumber-report/smoketest", "json:target/cucumber.json"},
        features = "src/Features",
        glue = "stepDefinition_prom"
        //glue = "ru/riskmarket/steps"
        //tags = "@tag"
		)

public class TestRunner_prom 
{
	@BeforeClass
    static public void setupTimeout()
    {
        Configuration.timeout = 90000;
        System.setProperty("webdriver.chrome.driver", "D:/QA/drivers/chromedriver_win32_2-355/chromedriver.exe");
        Configuration.browser = "chrome";
        open("http://eaist.mos.ru/analytics/index.php");
    }
}
