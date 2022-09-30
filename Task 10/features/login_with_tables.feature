@Log_In_feature_3
  Feature: I want to test Log In functionality using data tables

  @test_ten
    Scenario: Check if I can login using valid credentials
      Given I visit Kashkick login website
      When I enter valid user's credentials
       | key             |  value               |
       | userEmail       |  test123@gmail.com   |
       | userPassword    |  test123             |
      And I click on Sign In button
      Then I am Logged in