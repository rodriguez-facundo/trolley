# [WIP] trolley 
A simplified POS webapp for middle size markets

### Development installation:

#### requires
- git
- node & npm
- conda with python 3 & tornado package

#### install
- git clone -b development https://github.com/rodriguez-facundo/trolley.git
- cd trolley 
- npm install

#### launch
- npm run dev  (runs in http://localhost:8888/)

#### for testing:
- install firefox browser (version < 60 )
- npm install -g phantomjs casperjs slimerjs
- cd test
- casperjs test tests.js --host=http://localhost:8888/ --engine=slimerjs



### we are using:
- frontend: React-latest, material-ui-latest
- backend: python3, tornado-latest, tinyDB
