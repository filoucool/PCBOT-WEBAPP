const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const cors = require('cors')

const mysql = require('mysql')

const db = mysql.createPool({
    host: "",
    user: "",
    password: "",
    database: ""
})

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))
app.post("/api/SubtmitSettings", (req, res) => {

    const FLED = req.body.FLED;
    const PCBLED = req.body.PCBLED;
    const COMMLED = req.body.COMMLED;
    const BEACON = req.body.BEACON;

    const CONVAII = req.body.CONVAII;
    const ORECOGNN = req.body.ORECOGNN;
    const HRECOGNN = req.body.HRECOGNN;
    const EMAPPINGG = req.body.EMAPPINGG;

    const FCOLLISIONN = req.body.FCOLLISIONN;
    const SCOLLISIONN = req.body.SCOLLISIONN;
    const FEDGESENSNGG = req.body.FEDGESENSNGG;
    const BEDGESENSNGG = req.body.BEDGESENSNGG;

    const GASS = req.body.GASS;
    const TEMPERATUREE = req.body.TEMPERATUREE;
    const HUMIDITYY = req.body.HUMIDITYY;
    const TILTT = req.body.TILTT;
    const PHOTORESS = req.body.PHOTORESS;
    const FLAMEE = req.body.FLAMEE;
    const SMOKEE = req.body.SMOKEE;
    const GPSS = req.body.GPSS;


    const sqlInsert = "INSERT INTO SETTINGS (FLED, PCBLED, COMMLED, BEACON, CONVAI, ORECOGN, HRECOGN, EMAPPING, FCOLLISION, SCOLLISION, FEDGESENSNG, BEDGESENSNG, GAS, TEMPERATURE, HUMIDITY, TILT, PHOTORES, FLAME, SMOKE, GPS) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
    db.query("DELETE FROM SETTINGS")
    db.query(sqlInsert, [FLED, PCBLED, COMMLED, BEACON, CONVAII, ORECOGNN, HRECOGNN, EMAPPINGG, FCOLLISIONN, SCOLLISIONN, FEDGESENSNGG, BEDGESENSNGG, GASS, TEMPERATUREE, HUMIDITYY, TILTT, PHOTORESS, FLAMEE, SMOKEE, GPSS], (err, result)=>{
        console.log(result);
    })
});

app.get('/api/getTemperature', (req, res)=> {
    const selectTempData = "SELECT * FROM TEMPERATURE";
    db.query(selectTempData, (err, result) => {
        res.send(result);
    });
})

app.get('/api/getHumidity', (req, res)=> {
    const selectHumidityData = "SELECT * FROM HUMIDITY";
    db.query(selectHumidityData, (err, result) => {
        res.send(result);
    });
})


app.get('/api/getVoltage', (req, res)=> {
    const selectVoltageData = "SELECT * FROM VOLTAGE";
    db.query(selectVoltageData, (err, result) => {
        res.send(result);
    });
})

app.get('/api/getAmperage', (req, res)=> {
    const selectAmperageData = "SELECT * FROM AMPERAGE";
    db.query(selectAmperageData, (err, result) => {
        res.send(result);
    });
})

app.get('/api/getGAS', (req, res)=> {
    const selectGASData = "SELECT * FROM GAS";
    db.query(selectGASData, (err, result) => {
        res.send(result);
    });
})

app.get('/api/getPhotoresistor', (req, res)=> {
    const selectPhotoresData = "SELECT * FROM PHOTORESISTOR";
    db.query(selectPhotoresData, (err, result) => {
        res.send(result);
    });
})

app.get('/api/getEventCount', (req, res)=> {
    const selectEventCountData = "SELECT * FROM EVENTCOUNT";
    db.query(selectEventCountData, (err, result) => {
        res.send(result);
    });
})

app.get('/api/getEvents', (req, res)=> {
    const selectEventsData = "SELECT * FROM EVENTS";
    db.query(selectEventsData, (err, result) => {
        res.send(result);
    });
})

app.listen(3001, () =>{
    console.log('running on port 3001')
});
