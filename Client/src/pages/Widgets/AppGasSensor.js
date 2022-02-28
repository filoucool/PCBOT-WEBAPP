import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';
// material
import { Card, CardHeader, Box, Typography } from '@mui/material';
//
import { BaseOptionChart } from '../../components/charts';

// ----------------------------------------------------------------------

const CHART_DATA = [
  {
    name: ' Gas 1',
    type: 'line',
    data: [1100, 8000, 11000, 12500, 13500, 9500, 3500, 17400, 6300, 3200, 15500]
  },
  {
    name: ' Gas 2',
    type: 'line',
    data: [17400, 6300, 3200, 1100, 8000, 11000, 12500, 13500, 9500, 3500, 15500]
  },
  {
    name: ' Gas 3',
    type: 'line',
    data: [3500, 15500, 17400, 12500, 13500, 9500, 6300, 3200, 1100, 8000, 11000]
  },
  {
    name: ' Gas 4',
    type: 'line',
    data: [12500, 13500, 9500, 6300, 3500, 15500, 17400, 3200, 1100, 8000, 11000]
  },
  {
    name: ' Gas 5',
    type: 'line',
    data: [9500, 6300, 3200, 1100, 8000, 3500, 15500, 17400, 12500, 13500, 11000]
  }
];

export default function AppGasSensor() {
  const chartOptions = merge(BaseOptionChart(), {
    stroke: { width: '3', curve: 'smooth' },
    plotOptions: { bar: { columnWidth: '11%', borderRadius: 4 } },
    legend: { show: false },
    labels: [
      '01/01/2003',
      '02/01/2003',
      '03/01/2003',
      '04/01/2003',
      '05/01/2003',
      '06/01/2003',
      '07/01/2003',
      '08/01/2003',
      '09/01/2003',
      '10/01/2003',
      '11/01/2003'
    ],
    xaxis: { type: 'datetime' },
    tooltip: {
      shared: true,
      intersect: false
    }
  });

  return (
    <Card style={{ backgroundColor: '#1f2833', boxShadow: 'none' }}>
      <CardHeader title="Gas Particles (%)" style={{ color: '#45a29e', textAlign: 'Left' }} />
      <Box sx={{ p: 3, pb: 1 }} dir="ltr">
        <ReactApexChart type="line" series={CHART_DATA} options={chartOptions} height={364} />
      </Box>
    </Card>
  );
}
