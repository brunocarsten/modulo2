var scopackager = require('simple-scorm-packager')
var path = require('path')

const config = {
  version: '1.2',
  organization: 'Faros Educacional',
  title: 'Módulo 2',
  language: 'pt-BR',
  masteryScore: 80,
  startingPage: 'index.html',
  source: path.join(__dirname, 'build'),
  package: {
    version: process.env.npm_package_version,
    zip: true,
    author: 'Área Local',
    outputFolder: path.join(__dirname, 'scorm_packages'),
    description: 'SHOW DO DESENVOLVIMENTO INTEGRAL',
    keywords: ['scorm', 'course'],
    typicalDuration: 'PT0H5M0S',
    rights: `©${new Date().getFullYear()} Área Local. All right reserved.`
  }
}

scopackager(config, function (msg) {
  console.log(msg)
  process.exit(0)
})
