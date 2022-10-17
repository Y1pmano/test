pipeline {
    agent any

    stages {
        stage('Preconditions') {
            steps {
                echo 'Preparing.'
                sh 'rm -rf allure-results/*'
                sh 'docker compose up -d --scale firefox=2'
                sleep 10

            }
        }
        stage('Test') {
            steps {
            echo 'Start testing ... '
                 echo 'Parallel execution in 2 streams.'
                 sh 'npm update'
                 sh 'npm test'

            }
        }

    }
    post{
        always{

           echo 'WE shut down docker.'
           sh 'docker compose down'
            script{
            allure([
            includeProperties: false,
            jdk:'',
            properties: [],
            reportBuildPolicy: 'ALWAYS',
            results: [[path: 'allure-results']]
            ])
          }
       }
    }
}