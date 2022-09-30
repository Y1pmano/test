@Log_In_feature_1
  Feature: I want to test Log In functionality using scenario outline

  @test_nine
    Scenario Outline: Check if I can login via invalid or not existing in the DB credentials
        Given I visit Kashkick login website
        When I enter Email credentials as email
        And  I enter Password credentials as email
        And  I click on Sign In button
        Then I am not Logged in
        Examples:
            | email                 | password     |
            | a                     | 123123       |
            | test@                 | !@$+         |
            | test@123              | test         |
            | #$%^@gmail.com        | bold         |
            |                       |              |