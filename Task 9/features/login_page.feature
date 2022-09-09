@first_feature
Feature: Login page test suite
  I want to cover Kashkick Login page with tests

  Background: Kashkick login page visit
    Given I visit Kashkick login website

  @test_one
  Scenario: Check if Kashkick Header logo redirects to Login page
    When I click on Header Logo
    Then I should be returned to Kashkick main page

  # @test_two
  # Scenario: Check if Kashkick Footer logo redirects to Login page
  #   When I click on Footer Logo
  #   Then I should be returned to Kashkick main page2

  # @test_three
  # Scenario: Check if Forgot password message can be sent
  #   When I click on Forgot password button1
  #   And  I fill in Forgot password with valid email field
  #   And  I click on Request Password Reset Link1
  #   Then Im succesfully redirected to Login page

  # @test_four
  # Scenario: Check if Forgot password message can be sent with unknown email
  #   When I click on Forgot password button2
  #   And  I fill in Forgot password with unknown email
  #   And  I click on Request Password Reset Link2
  #   Then I get the alert that Message is not sent

  # @test_five
  # Scenario: Check if Forgot password message can be sent with empty email field
  #   When I click on Forgot password button3
  #   And  I click on Request Password Reset Link3
  #   Then Alert message that email field is empty is displayed
    
  # @test_six
  # Scenario: Check if Forgot password text field placeholder is displayed after cleaning the text field
  #   When I click on Forgot password button4
  #   And  I fill in Forgot password field with any email
  #   And  I clear the Forgot password texfield
  #   And  I click on empty space of the website
  #   Then I see the Forgot password placeholder text - Enter your Email

  # @test_seven
  # Scenario: Check if I can login via existing in the DB credentials
  #   When I enter <email> as "studytest@gmail.com"
  #   And  I enter <password> as "test123"
  #   And  I click on Sign In button
  #   Then I am Logged in


  # @test_eight
  #   Scenario Outline: Check if I can login via invalid or not existing in the DB credentials
  #     When I enter email <email> 
  #     And  I enter password <password>
  #     And  I click on Sign In button1
  #     Then I am not Logged in
  #     Examples:
  #         | email                 | password     |
  #         | a                     | 123123       |
  #         | test@                 | !@$+         |
  #         | test@123              | test         |
  #         | #$%^@gmail.com        | <bold>       |
  #         |                       |              |

  # @test_nine
  #   Scenario: Check if you can fill in credentials in login after failed login attempt
  #     When I enter invalid <email> as "test@"
  #     And  I enter invalid  <password> as "123"
  #     And  I clear email and password fields
  #     And  I enter email2 <email> as "studytest@gmail.com"
  #     And  I enter password2 <password> as "test123"
  #     And  I click on Sign in again
  #     Then I am Logged in2

  # @test_ten
  #   Scenario: Check if I can login using valid credentials
  #     When User enters valid user credentials
  #      | key             |  value               | 
  #      | userEmail       |  test123@gmail.com   |
  #      | userPassword    |  test123             |
  #     And I click on Sign in button2
  #     Then I am Logged in3




  


  


    

  