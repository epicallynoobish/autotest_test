package stepDefExport;

import static com.codeborne.selenide.Condition.text;
import static com.codeborne.selenide.Condition.visible;
import static com.codeborne.selenide.Selenide.$;
import static com.codeborne.selenide.Selenide.open;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class stepDefExport 
{
	@Given("^I login as demo with password demo$") 
	public void i_login_as_demo_with_password_demo() throws Exception
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

	@Given("^I go throught \"([^\"]*)\"$") 
	public void i_go_throught(String table) throws Exception
	{
		open(table);
	}

	@When("^I click on exportBtn$") 
	public void I_click_on_exportBtn() throws Exception 
	{
		//$("//*[@id='dc_print']/div[3]").click();
		$("#dc_print > button").click();
		$("").$$("#tree_ul_t_print").contains("#lt_print_2");
	}

	@When("^choose \"([^\"]*)\" from comboBox$")
	public void choose_from_comboBox(String fileFormat) throws Exception
	{
	    $(fileFormat).click();
	    Thread.sleep(1000);
	    $("#w83483_ok > div.ui-b-text").click();
	}

	@Then("^I see ok message$")
	public void i_see_ok_message() throws Exception 
	{
		$("#bkg-export")
		.shouldHave(text("Отчет будет сформирован в фоновом режиме. Ссылка для скачивания отчета станет доступна после окончания его формирования"));
	}
}
