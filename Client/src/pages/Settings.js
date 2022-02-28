/* eslint-disable react/no-unused-state */
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import React, { Component, useState, useEffect } from 'react';
import Axios from 'axios';

// material
import {
  Grid,
  Button,
  Container,
  Stack,
  Typography,
  Slider,
  Divider,
  FormGroup,
  FormControlLabel,
  Switch,
  TextField
} from '@mui/material';
// components
import Tooltip from '@mui/material/Tooltip';
import { Box, maxHeight } from '@mui/system';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';
import DataService from '../services/db.services';
import Page from '../components/Page';

const marks = [
  {
    value: 0,
    label: '0%'
  },
  {
    value: 20,
    label: '20%'
  },
  {
    value: 40,
    label: '40%'
  },
  {
    value: 60,
    label: '60%'
  },
  {
    value: 80,
    label: '80%'
  },
  {
    value: 100,
    label: '100%'
  }
];

export default function Settings() {
  const [PCBLEDS, setPCBLEDS] = useState(''); // PCB leds on/off
  const [FRONTLEDS, setFRONTLEDS] = useState(''); // front leds on/off
  const [COMMLEDS, setCOMMLEDS] = useState(''); // communication Ai on/off
  const [BEACONLED, setBEACONLED] = useState(''); // beacon led on/off

  const [CONVAI, setCONVAI] = useState(''); // conversationnal ai on/off
  const [ORECOGN, setORECOGN] = useState(''); // object recognition on/off
  const [HRECOGN, setHRECOGN] = useState(''); // human recognition on/off
  const [EMAPPING, setEMAPPING] = useState(''); // environement mapping on/off

  const [FCOLLISION, setFCOLLISION] = useState(''); // front collision sensing on/off
  const [SCOLLISION, setSCOLLISION] = useState(''); // side collision sensing on/off
  const [FEDGESENSNG, setFEDGESENSNG] = useState(''); // front edge sensing on/off
  const [BEDGESENSNG, setBEDGESENSNG] = useState(''); // back edge sensing on/off

  const [GAS, setGAS] = useState(''); // front collision sensing on/off
  const [TEMPERATURE, setTEMPERATURE] = useState(''); // side collision sensing on/off
  const [HUMIDITY, setHUMIDITY] = useState(''); // front edge sensing on/off
  const [TILT, setTILT] = useState(''); // back edge sensing on/off
  const [PHOTORES, setPHOTORES] = useState(''); // front collision sensing on/off
  const [FLAME, setFLAME] = useState(''); // side collision sensing on/off
  const [SMOKE, setSMOKE] = useState(''); // front edge sensing on/off
  const [GPS, setGPS] = useState(''); // back edge sensing on/off

  const sumbitSettings = () => {
    // eslint-disable-next-line prettier/prettier
    Axios.post("http://localhost:3001/api/SubtmitSettings", {
      FLED: FRONTLEDS,
      PCBLED: PCBLEDS,
      COMMLED: COMMLEDS,
      BEACON: BEACONLED,

      CONVAII: CONVAI,
      ORECOGNN: ORECOGN,
      HRECOGNN: HRECOGN,
      EMAPPINGG: EMAPPING,

      FCOLLISIONN: FCOLLISION,
      SCOLLISIONN: SCOLLISION,
      FEDGESENSNGG: FEDGESENSNG,
      BEDGESENSNGG: BEDGESENSNG,

      GASS: GAS,
      TEMPERATUREE: TEMPERATURE,
      HUMIDITYY: HUMIDITY,
      TILTT: TILT,
      PHOTORESS: PHOTORES,
      FLAMEE: FLAME,
      SMOKEE: SMOKE,
      GPSS: GPS
    }).then(() => {
      alert('success!');
    });
  };

  return (
    <Page title="Settings">
      <Container maxWidth="xl">
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={0}>
          <Typography variant="h4" gutterBottom style={{ color: '#66fcf1' }}>
            Settings
          </Typography>
        </Stack>
        <Container maxWidth="xl">
          <Grid paddingTop={1}>
            <Divider>
              <Typography variant="h5" gutterBottom style={{ color: '#66fcf1' }}>
                Lights & Leds
              </Typography>
            </Divider>
            <Grid container spacing={{ xs: 10 }} columns={{ xs: 8, sm: 8, md: 8, lg: 8 }}>
              <Grid item xs={2} style={{ color: '#fff' }}>
                <FormGroup>
                  <Typography
                    variant="h7"
                    gutterBottom
                    style={{ color: '#45a29e', alignSelf: 'center' }}
                  >
                    Front Lights 12V
                  </Typography>
                  <FormControlLabel
                    control={
                      <Switch
                        onChange={(e) => {
                          setFRONTLEDS(e.target.checked);
                        }}
                      />
                    }
                    label="OFF/ON"
                    color="red"
                    style={{ color: '#fff', alignSelf: 'center' }}
                  />
                </FormGroup>
              </Grid>
              <Grid item xs={2} style={{ color: '#fff' }}>
                <FormGroup>
                  <Typography
                    variant="h7"
                    gutterBottom
                    style={{ color: '#45a29e', alignSelf: 'center' }}
                  >
                    Top Pcb Status LEDs
                  </Typography>
                  <FormControlLabel
                    control={
                      <Switch
                        onChange={(e) => {
                          setPCBLEDS(e.target.checked);
                        }}
                      />
                    }
                    label="OFF/ON"
                    style={{ alignSelf: 'center' }}
                  />
                </FormGroup>
              </Grid>
              <Grid item xs={2} style={{ color: '#fff' }}>
                <FormGroup>
                  <Typography
                    variant="h7"
                    gutterBottom
                    style={{ color: '#45a29e', alignSelf: 'center' }}
                  >
                    Serial Communication LEDs
                  </Typography>
                  <FormControlLabel
                    control={
                      <Switch
                        onChange={(e) => {
                          setCOMMLEDS(e.target.checked);
                        }}
                      />
                    }
                    label="OFF/ON"
                    style={{ alignSelf: 'center' }}
                  />
                </FormGroup>
              </Grid>
              <Grid item xs={2} style={{ color: '#fff' }}>
                <FormGroup>
                  <Typography
                    variant="h7"
                    gutterBottom
                    style={{ color: '#45a29e', alignSelf: 'center' }}
                  >
                    Beacon LED
                  </Typography>
                  <FormControlLabel
                    control={
                      <Switch
                        onChange={(e) => {
                          setBEACONLED(e.target.checked);
                        }}
                      />
                    }
                    label="OFF/ON"
                    style={{ alignSelf: 'center' }}
                  />
                </FormGroup>
              </Grid>
            </Grid>
          </Grid>

          <Grid paddingTop={1}>
            <Divider>
              <Typography variant="h5" gutterBottom style={{ color: '#66fcf1' }}>
                Artificial Intelligence
              </Typography>
            </Divider>
            <Grid container spacing={{ xs: 10 }} columns={{ xs: 8, sm: 8, md: 8, lg: 8 }}>
              <Grid item xs={2} style={{ color: '#fff' }}>
                <Tooltip
                  disableFocusListener
                  disableTouchListener
                  title="*This setting will greatly affect CPU & GPU performance & temperatures*"
                >
                  <FormGroup>
                    <Typography
                      variant="h7"
                      gutterBottom
                      style={{ color: '#45a29e', alignSelf: 'center' }}
                    >
                      Conversational AI
                    </Typography>
                    <FormControlLabel
                      control={
                        <Switch
                          onChange={(e) => {
                            setCONVAI(e.target.checked);
                          }}
                        />
                      }
                      label="OFF/ON"
                      style={{ alignSelf: 'center' }}
                    />
                  </FormGroup>
                </Tooltip>
              </Grid>
              <Grid item xs={2} style={{ color: '#fff' }}>
                <Tooltip
                  disableFocusListener
                  disableTouchListener
                  title="*This setting will greatly affect CPU & GPU performance & temperatures*"
                >
                  <FormGroup>
                    <Typography
                      variant="h7"
                      gutterBottom
                      style={{ color: '#45a29e', alignSelf: 'center' }}
                    >
                      Object Recognition
                    </Typography>
                    <FormControlLabel
                      control={
                        <Switch
                          onChange={(e) => {
                            setORECOGN(e.target.checked);
                          }}
                        />
                      }
                      label="OFF/ON"
                      style={{ alignSelf: 'center' }}
                    />
                  </FormGroup>
                </Tooltip>
              </Grid>
              <Grid item xs={2} style={{ color: '#fff' }}>
                <Tooltip
                  disableFocusListener
                  disableTouchListener
                  title="*This setting will greatly affect CPU & GPU performance & temperatures*"
                >
                  <FormGroup>
                    <Typography
                      variant="h7"
                      gutterBottom
                      style={{ color: '#45a29e', alignSelf: 'center' }}
                    >
                      Human Recognition
                    </Typography>
                    <FormControlLabel
                      control={
                        <Switch
                          onChange={(e) => {
                            setHRECOGN(e.target.checked);
                          }}
                        />
                      }
                      label="OFF/ON"
                      style={{ alignSelf: 'center' }}
                    />
                  </FormGroup>
                </Tooltip>
              </Grid>
              <Grid item xs={2} style={{ color: '#fff' }}>
                <Tooltip
                  disableFocusListener
                  disableTouchListener
                  title="*This setting will greatly affect CPU & GPU performance & temperatures*"
                >
                  <FormGroup>
                    <Typography
                      variant="h7"
                      gutterBottom
                      style={{ color: '#45a29e', alignSelf: 'center' }}
                    >
                      Environment Mapping
                    </Typography>
                    <FormControlLabel
                      control={
                        <Switch
                          onChange={(e) => {
                            setEMAPPING(e.target.checked);
                          }}
                        />
                      }
                      label="OFF/ON"
                      style={{ alignSelf: 'center' }}
                    />
                  </FormGroup>
                </Tooltip>
              </Grid>
            </Grid>
          </Grid>
          <Grid paddingTop={1}>
            <Divider>
              <Typography variant="h5" gutterBottom style={{ color: '#66fcf1' }}>
                Collision & Edge Detection
              </Typography>
            </Divider>
            <Grid container spacing={{ xs: 10 }} columns={{ xs: 8, sm: 8, md: 8, lg: 8 }}>
              <Grid item xs={2} style={{ color: '#fff' }}>
                <Tooltip
                  disableFocusListener
                  disableTouchListener
                  title="*By turning off this setting, the robot may commit suicide*"
                >
                  <FormGroup>
                    <Typography
                      variant="h7"
                      gutterBottom
                      style={{ color: '#45a29e', alignSelf: 'center' }}
                    >
                      Front Collision Sensing
                    </Typography>
                    <FormControlLabel
                      control={
                        <Switch
                          onChange={(e) => {
                            setFCOLLISION(e.target.checked);
                          }}
                        />
                      }
                      label="OFF/ON"
                      style={{ alignSelf: 'center' }}
                    />
                  </FormGroup>
                </Tooltip>
              </Grid>
              <Grid item xs={2} style={{ color: '#fff' }}>
                <Tooltip
                  disableFocusListener
                  disableTouchListener
                  title="*By turning off this setting, the robot may commit suicide*"
                >
                  <FormGroup>
                    <Typography
                      variant="h7"
                      gutterBottom
                      style={{ color: '#45a29e', alignSelf: 'center' }}
                    >
                      Side Collision Sensing
                    </Typography>
                    <FormControlLabel
                      control={
                        <Switch
                          onChange={(e) => {
                            setSCOLLISION(e.target.checked);
                          }}
                        />
                      }
                      label="OFF/ON"
                      style={{ alignSelf: 'center' }}
                    />
                  </FormGroup>
                </Tooltip>
              </Grid>
              <Grid item xs={2} style={{ color: '#fff' }}>
                <Tooltip
                  disableFocusListener
                  disableTouchListener
                  title="*By turning off this setting, the robot may commit suicide*"
                >
                  <FormGroup>
                    <Typography
                      variant="h7"
                      gutterBottom
                      style={{ color: '#45a29e', alignSelf: 'center' }}
                    >
                      Front Edge Sensing
                    </Typography>
                    <FormControlLabel
                      control={
                        <Switch
                          onChange={(e) => {
                            setFEDGESENSNG(e.target.checked);
                          }}
                        />
                      }
                      label="OFF/ON"
                      style={{ alignSelf: 'center' }}
                    />
                  </FormGroup>
                </Tooltip>
              </Grid>
              <Grid item xs={2} style={{ color: '#fff' }}>
                <Tooltip
                  disableFocusListener
                  disableTouchListener
                  title="*By turning off this setting, the robot may commit suicide*"
                >
                  <FormGroup>
                    <Typography
                      variant="h7"
                      gutterBottom
                      style={{ color: '#45a29e', alignSelf: 'center' }}
                    >
                      Back Edge Sensing
                    </Typography>
                    <FormControlLabel
                      control={
                        <Switch
                          onChange={(e) => {
                            setBEDGESENSNG(e.target.checked);
                          }}
                        />
                      }
                      label="OFF/ON"
                      style={{ alignSelf: 'center' }}
                    />
                  </FormGroup>
                </Tooltip>
              </Grid>
            </Grid>
          </Grid>

          <Grid
            paddingTop={1}
            style={{
              overflow: 'hidden'
            }}
          >
            <Divider>
              <Typography variant="h5" gutterBottom style={{ color: '#66fcf1' }}>
                Sensors
              </Typography>
            </Divider>
            <Grid container spacing={{ xs: 10 }} columns={{ xs: 8, sm: 8, md: 8, lg: 8 }}>
              <Grid item xs={1} style={{ color: '#fff' }}>
                <FormGroup>
                  <Typography
                    variant="h7"
                    gutterBottom
                    style={{ color: '#45a29e', alignSelf: 'center' }}
                  >
                    Gas
                  </Typography>
                  <FormControlLabel
                    control={
                      <Switch
                        onChange={(e) => {
                          setGAS(e.target.checked);
                        }}
                      />
                    }
                    label="OFF/ON"
                    style={{ alignSelf: 'center' }}
                  />
                </FormGroup>
              </Grid>
              <Grid item xs={1} style={{ color: '#fff' }}>
                <FormGroup>
                  <Typography
                    variant="h7"
                    gutterBottom
                    style={{ color: '#45a29e', alignSelf: 'center' }}
                  >
                    Temperature
                  </Typography>
                  <FormControlLabel
                    control={
                      <Switch
                        onChange={(e) => {
                          setTEMPERATURE(e.target.checked);
                        }}
                      />
                    }
                    label="OFF/ON"
                    style={{ alignSelf: 'center' }}
                  />
                </FormGroup>
              </Grid>
              <Grid item xs={1} style={{ color: '#fff' }}>
                <FormGroup>
                  <Typography
                    variant="h7"
                    gutterBottom
                    style={{ color: '#45a29e', alignSelf: 'center' }}
                  >
                    Humidity
                  </Typography>
                  <FormControlLabel
                    control={
                      <Switch
                        onChange={(e) => {
                          setHUMIDITY(e.target.checked);
                        }}
                      />
                    }
                    label="OFF/ON"
                    style={{ alignSelf: 'center' }}
                  />
                </FormGroup>
              </Grid>
              <Grid item xs={1} style={{ color: '#fff' }}>
                <FormGroup>
                  <Typography
                    variant="h7"
                    gutterBottom
                    style={{ color: '#45a29e', alignSelf: 'center' }}
                  >
                    Tilt
                  </Typography>
                  <FormControlLabel
                    control={
                      <Switch
                        onChange={(e) => {
                          setTILT(e.target.checked);
                        }}
                      />
                    }
                    label="OFF/ON"
                    style={{ alignSelf: 'center' }}
                  />
                </FormGroup>
              </Grid>
              <Grid item xs={1} style={{ color: '#fff' }}>
                <FormGroup>
                  <Typography
                    variant="h7"
                    gutterBottom
                    style={{ color: '#45a29e', alignSelf: 'center' }}
                  >
                    Photoresistor
                  </Typography>
                  <FormControlLabel
                    control={
                      <Switch
                        onChange={(e) => {
                          setPHOTORES(e.target.checked);
                        }}
                      />
                    }
                    label="OFF/ON"
                    style={{ alignSelf: 'center' }}
                  />
                </FormGroup>
              </Grid>
              <Grid item xs={1} style={{ color: '#fff' }}>
                <FormGroup>
                  <Typography
                    variant="h7"
                    gutterBottom
                    style={{ color: '#45a29e', alignSelf: 'center' }}
                  >
                    Flame
                  </Typography>
                  <FormControlLabel
                    control={
                      <Switch
                        onChange={(e) => {
                          setFLAME(e.target.checked);
                        }}
                      />
                    }
                    label="OFF/ON"
                    style={{ alignSelf: 'center' }}
                  />
                </FormGroup>
              </Grid>
              <Grid item xs={1} style={{ color: '#fff' }}>
                <FormGroup>
                  <Typography
                    variant="h7"
                    gutterBottom
                    style={{ color: '#45a29e', alignSelf: 'center' }}
                  >
                    Smoke
                  </Typography>
                  <FormControlLabel
                    control={
                      <Switch
                        onChange={(e) => {
                          setSMOKE(e.target.checked);
                        }}
                      />
                    }
                    label="OFF/ON"
                    style={{ alignSelf: 'center' }}
                  />
                </FormGroup>
              </Grid>
              <Grid item xs={1} style={{ color: '#fff' }}>
                <FormGroup>
                  <Typography
                    variant="h7"
                    gutterBottom
                    style={{ color: '#45a29e', alignSelf: 'center' }}
                  >
                    GPS
                  </Typography>
                  <FormControlLabel
                    control={
                      <Switch
                        onChange={(e) => {
                          setGPS(e.target.checked);
                        }}
                      />
                    }
                    label="OFF/ON"
                    style={{ alignSelf: 'center' }}
                  />
                </FormGroup>
              </Grid>
            </Grid>
          </Grid>

          <Grid container paddingTop={2}>
            <Divider orientation="horizontal" flexItem />

            <Grid item xs={12} style={{ color: '#fff' }} align="center">
              <Button
                onClick={sumbitSettings}
                color="primary"
                variant="contained"
                style={{
                  color: '#fff',
                  fontWeight: 'bolder',
                  fontSize: '1.1em',
                  backgroundColor: '#45a29e',
                  maxWidth: '300px',
                  maxHeight: '30px',
                  minWidth: '150px',
                  minHeight: '55px',
                  top: '38px',
                  boxShadow: 'none'
                }}
              >
                Submit Changes
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Container>
    </Page>
  );
}
