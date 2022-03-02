import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';
// material
import { Card, CardHeader, Box } from '@mui/material';
//
import { BaseOptionChart } from '../../components/charts';

// ----------------------------------------------------------------------

const CHART_DATA = [
  {
    name: ' Power Draw (mW)',
    type: 'line',
    data: [12500, 13500, 9500, 3500, 15500, 17400, 6300, 3200, 1100, 8000, 11000]
  }
];

export default function AppAmperageSensor() {
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
            offset: 0,
            color: '#ff4747',
            opacity: 1
          },
          {
            offset: 50,
            color: '#fff647',
            opacity: 1
          },
          {
            offset: 70,
            color: '#4cd93d',
            opacity: 1
          },
          {
            offset: 90,
            color: '#4cd93d',
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
        title="Power Draw (mW) over Time"
        style={{ color: '#45a29e', textAlign: 'Left' }}
      />
      <Box sx={{ p: 3, pb: 1 }} dir="ltr">
        <ReactApexChart type="line" series={CHART_DATA} options={chartOptions} height={364} />
      </Box>
    </Card>
  );
}
