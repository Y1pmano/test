@Forgot_password_feature
  Feature: I want to test Forgot password functionality
    Background: Kashkick login page visit and click on forgot password button
      Given I visit Kashkick login website
      When I click on Forgot password button


    @test_three
    Scenario: Check if Forgot password message can be sent
      And  I enter email as "gafurovstanislav@gmail.com"
      And  I click on Request Password Reset Link
      Then I get the alert message that email was sent


    @test_four
    Scenario: Check if Forgot password message can be sent with unknown email
      And  I enter email as "stanislav@gmail.com"
      And  I click on Request Password Reset Link
      Then I get the alert that Message was not sent


    @test_five
    Scenario: Check if Forgot password message can be sent with empty email field
      And  I click on Request Password Reset Link
      Then I get the alert message that email field is empty


    @test_six
    Scenario: Check if Forgot password text field placeholder is displayed after cleaning the text field
      And  I enter email as "hellotestsix@gmail.com"
      And  I clear the Forgot password texfield
      And  I click on empty space of the website
      Then I see the Forgot password placeholder text - Enter your Email
