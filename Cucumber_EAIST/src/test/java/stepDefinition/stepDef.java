package stepDefinition;

import static com.codeborne.selenide.Selenide.*;

import static com.codeborne.selenide.Condition.*;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;

public class stepDef 
{
	@Given("^I log in as demo with password demo with name Иванов О\\.З\\.$")
	public void i_log_in_as_demo_with_password_demo_with_name_Иванов_О_З() throws Exception
	{
        Thread.sleep(5000);
        if($("#auth_user_name").is(visible))
        {
            $("#auth_user_name").sendKeys("demo");
            $("#auth_user_password").sendKeys("demo");
            $(".enter_btn").click();
            $(".c_header").waitUntil(visible, 5000);
            $(".c_header").$(".user-name").shouldHave(text("Иванов О.З."));
        }
    }

	@When("^I go to \"([^\"]*)\"$")
	public void i_go_to(String table) throws Exception
	{	open(table);	}

	@When("^I check for the table$")
	public void i_check_for_the_table() throws Exception
	{	
		$("#creport-grid > div.grid-table-wrap > table").shouldBe(visible);	
		//String S = "По установленным параметрам нет данных.";
		$("#creport-grid > div.grid-table-wrap > div").shouldNotBe(visible);
	}
}