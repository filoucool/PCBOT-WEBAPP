import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';
// material
import { Card, CardHeader, Box, Typography, Button } from '@mui/material';
//
import SendIcon from '@mui/icons-material/Send';
import { BaseOptionChart } from '../../components/charts';

// ----------------------------------------------------------------------

const CHART_DATA = [
  {
    name: ' Luminosity (Lm)',
    type: 'line',
    data: [400, 725, 536, 730, 645, 735, 564, 552, 659, 536, 639]
  }
];

export default function AppPhotoresistorSensor() {
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
            offset: 1,
            color: '#fff',
            opacity: 1
          },
          {
            offset: 100,
            color: '#000000',
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
      <CardHeader
        title="Luminosity (Lm) over Time"
        style={{ color: '#45a29e', textAlign: 'Left' }}
      />

      <Box sx={{ p: 3, pb: 1 }} dir="ltr">
        <ReactApexChart type="line" series={CHART_DATA} options={chartOptions} height={364} />
      </Box>
    </Card>
  );
}
