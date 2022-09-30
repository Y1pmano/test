@Log_In_feature_2
  Feature: I want to test Log In functionality using arguments from feature page
    Background: Kashkick login page visit
      Given I visit Kashkick login website

    @test_seven
    Scenario: Check if I can login via existing in the DB credentials
      When I enter email as "studytest@gmail.com"
      And  I enter password as "test123"
      And  I click on Sign In button
      Then I am Logged in

    @test_eight
    Scenario: Check if I can fill in credentials in login after failed login attempt
      When I enter email as "test@"
      And  I enter password as "123"
      And  I clear email and password fields
      And  I enter email as "studytest@gmail.com"
      And  I enter password as "test123"
      And  I click on Sign In button
      Then I am Logged in
