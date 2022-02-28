import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';
// material
import { Card, CardHeader, Box } from '@mui/material';
//
import { BaseOptionChart } from '../../components/charts';

// ----------------------------------------------------------------------

const CHART_DATA = [
  {
    name: 'Robot API',
    type: 'area',
    data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30]
  }
];

export default function AppBugsOverTime() {
  const chartOptions = merge(BaseOptionChart(), {
    stroke: { width: 5 },
    plotOptions: { bar: { columnWidth: '11%', borderRadius: 4 } },
    fill: { type: ['gradient'] },
    colors: ['#45a29e', '#000000'],
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
      intersect: false,
      y: {
        formatter: (y) => {
          if (typeof y !== 'undefined') {
            return `${y.toFixed(0)} Bugs & Warnings`;
          }
          return y;
        }
      }
    }
  });

  return (
    <Card style={{ backgroundColor: '#1f2833', color: '#66fcf1', boxShadow: 'none' }}>
      <CardHeader title="Bugs & warnings" />
      <Box sx={{ p: 3, pb: 1 }} dir="ltr">
        <ReactApexChart type="area" series={CHART_DATA} options={chartOptions} height={364} />
      </Box>
    </Card>
  );
}
