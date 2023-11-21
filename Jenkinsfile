pipeline {
    agent any

    stages {
        stage('Build Application') {
            steps {
                echo 'Application built'
            }
        }
        
        stage('Test Application') {
            steps {
                echo 'Application tested'
            }
        }
        
        stage('Deploy application') {
            steps {
                echo 'Application deployed'
            }
        }
    
    }
        
    post
        {
            always
            {
                emailext body: 'Pipeline summary', subject: 'Pipeline status', to: 'raudam72@gmail.com'
            }
        }
}
