pipeline {
  agent any

  stages {
    stage('Install') {
      steps {
        sh 'npm install'
      }
    }
    stage('Build') {
      steps {
        sh 'npm run build'
      }
    }
    stage('Archive') {
      steps {
        sh 'cd public && tar -czvf ../site.tar.gz * && cd ..'
        archiveArtifacts 'site.tar.gz'
      }
    }
  }
}
