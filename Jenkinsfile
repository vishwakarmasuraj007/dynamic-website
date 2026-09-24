pipeline {

    agent any

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/vishwakarmasuraj007/dynamic-website.git'
            }
        }

        stage('Validate') {
            steps {
                bat 'if not exist index.html exit /b 1'
                bat 'if not exist style.css exit /b 1'
                bat 'if not exist script.js exit /b 1'

                echo 'All required files found.'
            }
        }

        stage('Test') {
            steps {
                echo 'Testing website...'

                bat 'findstr /i "<html" index.html'
                bat 'findstr /i "style.css" index.html'
                bat 'findstr /i "script.js" index.html'

                echo 'Tests passed.'
            }
        }

        stage('Build') {
            steps {
                echo 'Build successful.'
            }
        }

        stage('Deploy') {
            steps {

                sshagent(['ec2-deploy-key']) {

                    bat '''
                    scp -o StrictHostKeyChecking=no index.html style.css script.js ec2-user@3.110.213.157:/tmp/
                    '''

                    bat '''
                    ssh -o StrictHostKeyChecking=no ec2-user@3.110.213.157 "sudo cp /tmp/index.html /usr/share/nginx/html/ && sudo cp /tmp/style.css /usr/share/nginx/html/ && sudo cp /tmp/script.js /usr/share/nginx/html/ && sudo systemctl reload nginx"
                    '''
                }
            }
        }
    }

    post {

        success {
            emailext(
                subject: "SUCCESS: ${env.JOB_NAME} #${env.BUILD_NUMBER}",
                body: """
Jenkins Pipeline SUCCESS

Job: ${env.JOB_NAME}
Build: #${env.BUILD_NUMBER}

Website successfully deployed to EC2.

Website:
http://3.110.213.157

Jenkins Build:
${env.BUILD_URL}
""",
                to: "surajvishwakarmav@gmail.com"
            )
        }

        failure {
            emailext(
                subject: "FAILED: ${env.JOB_NAME} #${env.BUILD_NUMBER}",
                body: """
Jenkins Pipeline FAILED

Job: ${env.JOB_NAME}
Build: #${env.BUILD_NUMBER}

Please check Jenkins Console Output.

Jenkins Build:
${env.BUILD_URL}

Console:
${env.BUILD_URL}console
""",
                to: "surajvishwakarmav@gmail.com"
            )
        }
    }
}