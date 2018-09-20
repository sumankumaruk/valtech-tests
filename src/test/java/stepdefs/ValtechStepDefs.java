package stepdefs;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class ValtechStepDefs {

    public static WebDriver driver = new ChromeDriver();

    public void setChromeProperty() {
        System.setProperty("webdriver.chrome.driver", "./valtechtest/src/test/resources/drivers/chromedriver");
    }

    @Given("^I am on valtech homepage$")
    public void i_am_on_valtech_homepage() throws Throwable {
        driver.get("https://www.valtech.co.uk/");
    }

    @When("^I click on the Accept cookies$")
    public void i_click_on_the_Accept_cookies() throws Throwable {
        new WebDriverWait(driver, 20).until(ExpectedConditions.
                visibilityOf(driver.findElement(By.xpath("//*[@id='CybotCookiebotDialogBodyButtonAccept']"))));
        driver.findElement(By.xpath("//*[@id='CybotCookiebotDialogBodyButtonAccept']")).click();
    }

    @Then("^I should be able to see \"([^\"]*)\"$")
    public void i_should_be_able_to_see(String arg1) throws Throwable {
        driver.findElement(By.xpath("//*[@id='container']/div[2]/div[3]/section/div/div[1]/header/h2"))
                .getText().contentEquals("RECENT BLOGS");
    }

    @When("^I click on the Menu icon$")
    public void i_click_on_the_Menu_icon() throws Throwable {
        new WebDriverWait(driver, 20).until(ExpectedConditions.
                visibilityOf(driver.findElement(By.xpath("//*[@id=\"menu-toggle-button\"]/span[1]/span/span[1]/i"))));
        driver.findElement(By.xpath("//*[@id=\"menu-toggle-button\"]/span[1]/span/span[1]/i")).click();
    }

    @Then("^I should see the (.*)")
    public void i_should_see_the_ABOUT(String param) throws Throwable {
        String element = "//a[@href='/" + param.toLowerCase() + "/']";
        driver.findElement(By.xpath(element)).click();
        if (param.toLowerCase().startsWith("about")) {
            new WebDriverWait(driver, 20).until(ExpectedConditions.
                    visibilityOf(driver.findElement(By.xpath("//*[@id='container']/div[1]/h1"))));
            driver.findElement(By.xpath("//*[@id='container']/div[1]/h1")).getText().contentEquals(param);
        } else if (param.toLowerCase().startsWith("services")) {
            new WebDriverWait(driver, 20).until(ExpectedConditions.
                    visibilityOf(driver.findElement(By.xpath("//*[@id=\"container\"]/section/header/h1"))));
            driver.findElement(By.xpath("//*[@id=\"container\"]/section/header/h1")).getText().contentEquals(param);
        } else {
            new WebDriverWait(driver, 20).until(ExpectedConditions.
                    visibilityOf(driver.findElement(By.xpath("//*[@id='container']/header/h1"))));
            driver.findElement(By.xpath("//*[@id='container']/header/h1 ")).getText().contentEquals(param);
        }
    }

    @When("^I navigate to contact-us page$")
    public void i_navigate_to_contact_us_page() throws Throwable {
       driver.navigate().to("https://www.valtech.co.uk/about/contact-us");
    }

    @Then("^I should be able to see the total number of offices of Valtech$")
    public void i_should_be_able_to_see_the_total_number_of_branches_of_Valtech() throws Throwable {

    }
}

    