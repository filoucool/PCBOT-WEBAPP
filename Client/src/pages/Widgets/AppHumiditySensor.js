import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';
// material
import { Card, CardHeader, Box, Typography } from '@mui/material';
//
import { BaseOptionChart } from '../../components/charts';

// ----------------------------------------------------------------------

const CHART_DATA = [
  {
    name: ' Humidity (%)',
    type: 'line',
    data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
  }
];

export default function AppHumiditySensor() {
  const chartOptions = merge(BaseOptionChart(), {
    stroke: { width: '3', curve: 'smooth' },
    plotOptions: { bar: { columnWidth: '11%', borderRadius: 4 } },
    fill: {
      type: 'gradient',
      gradient: {
        type: 'vertical',
        shadeIntensity: 1,
        opacityFrom: 1,
        opacityTo: 1,
        colorStops: [
          {
            offset: 10,
            color: '#47edff',
            opacity: 1
          },
          {
            offset: 40,
            color: '#4cd93d',
            opacity: 1
          },
          {
            offset: 60,
            color: '#fff647',
            opacity: 1
          },
          {
            offset: 90,
            color: '#ff4747',
            opacity: 1
          }
        ]
      }
    },
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
      <CardHeader title="Humidity (%) over Time" style={{ color: '#45a29e', textAlign: 'Left' }} />
      <Box sx={{ p: 3, pb: 1 }} dir="ltr">
        <ReactApexChart type="line" series={CHART_DATA} options={chartOptions} height={364} />
      </Box>
    </Card>
  );
}
