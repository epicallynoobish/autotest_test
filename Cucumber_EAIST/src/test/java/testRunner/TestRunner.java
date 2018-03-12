package testRunner;

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
        glue = "stepDefinition"
        //tags = "@tag"
		)

public class TestRunner
{
	public static ClassLoader TestRunner;

	@BeforeClass
    static public void setupTimeout()
    {
        Configuration.timeout = 60000;
        System.setProperty("webdriver.chrome.driver", "D:/QA/drivers/chromedriver_win32_2-355/chromedriver.exe");
        Configuration.browser = "chrome";
        open("http://eaistan-dev.proitr.ru/index.php");
    }
}