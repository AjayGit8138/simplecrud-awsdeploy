pipeline {

 agent any

 stages {

  stage('Clone Repository') {
   steps {
    git 'https://github.com/AjayGit8138/simplecrud-awsdeploy.git'
   }
  }

  stage('Install Backend Dependencies') {
   steps {
    dir('backend') {
      sh 'npm install'
    }
   }
  }

  stage('Install Frontend Dependencies') {
   steps {
    dir('frontend') {
      sh 'npm install'
    }
   }
  }

  stage('Build Angular App') {
   steps {
    dir('frontend') {
      sh 'npm run build'
    }
   }
  }

  stage('Build Docker Images') {
   steps {
    sh 'docker-compose build'
   }
  }

  stage('Deploy Containers') {
   steps {
    sh 'docker-compose up -d'
   }
  }

 }

}