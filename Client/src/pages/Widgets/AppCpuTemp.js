import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';
// material
import { Card, CardHeader, Box } from '@mui/material';
//
import { BaseOptionChart } from '../../components/charts';

// ----------------------------------------------------------------------

const CHART_DATA = [
  {
    name: 'Robot Sensors',
    type: 'line',
    data: [35, 64, 52, 59, 30, 25, 36, 36, 30, 45, 39]
  }
];

export default function CpuTemp() {
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
            color: '#ff4747',
            opacity: 1
          },
          {
            offset: 40,
            color: '#fff647',
            opacity: 1
          },
          {
            offset: 60,
            color: '#4cd93d',
            opacity: 1
          },
          {
            offset: 90,
            color: '#47edff',
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
        title="Processor Temperature over Time"
        style={{ color: '#45a29e', textAlign: 'center' }}
      />
      <Box sx={{ p: 3, pb: 1 }} dir="ltr">
        <ReactApexChart type="line" series={CHART_DATA} options={chartOptions} height={364} />
      </Box>
    </Card>
  );
}
