import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import SendIcon from '@mui/icons-material/Send';
import Refresh from '@iconify/icons-eva/refresh-fill';
import { Button, Icon } from '@mui/material';
import AppTempSensor from './AppTempSensor';
import AppHumiditySensor from './AppHumiditySensor';
import AppTemperatureGrids from './AppTemperatureGrids';
import AppHumidityGrids from './AppHumidityGrid';
import AppVoltageSensor from './AppVoltageSensor';
import AppVoltageGrids from './AppVoltageGrid';
import AppAmperageGrids from './AppAmperageGrid';
import AppAmperageSensor from './AppAmperageSensor';
import AppGassSensor from './AppGasSensor';
import AppGasGrids from './AppGasGrid';
import AppPhotoresistorSensor from './AppPhotoresistorSensor';
import AppPhotoresistorGrid from './AppPhotoresistorGrid';

export default function DataTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Temperature" value="1" />
            <Tab label="Humidity" value="2" />
            <Tab label="Voltage" value="3" />
            <Tab label="Amperage" value="4" />
            <Tab label="Gas" value="5" />
            <Tab label="Photoresistor" value="6" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <AppTempSensor />
          <AppTemperatureGrids />
        </TabPanel>
        <TabPanel value="2">
          <AppHumiditySensor />
          <AppHumidityGrids />
        </TabPanel>
        <TabPanel value="3">
          <AppVoltageSensor />
          <AppVoltageGrids />
        </TabPanel>
        <TabPanel value="4">
          <AppAmperageSensor />
          <AppAmperageGrids />
        </TabPanel>
        <TabPanel value="5">
          <AppGassSensor />
          <AppGasGrids />
        </TabPanel>
        <TabPanel value="6">
          <AppPhotoresistorSensor />
          <AppPhotoresistorGrid />
        </TabPanel>
      </TabContext>
    </Box>
  );
}
