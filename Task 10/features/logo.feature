@Logo_tests_feature
  Feature: I want to test Logo's
    Background: Kashkick login page visit
      Given I visit Kashkick login website

    @test_one
    Scenario: Check if Kashkick Header logo redirects to Login page
      When I click on Header Logo
      Then I am returned to Kashkick main page

    @test_two
    Scenario: Check if Kashkick Footer logo redirects to Login page
      When I click on Footer Logo
      Then I am returned to website main page