import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';
// material
import { styled } from '@mui/material/styles';
import { Card, CardHeader } from '@mui/material';
// utils
import { fNumber } from '../../utils/formatNumber';
//
import { BaseOptionChart } from '../../components/charts';

// ----------------------------------------------------------------------

const CHART_HEIGHT = 372;
const LEGEND_HEIGHT = 0;

const ChartWrapperStyle = styled('div')(({ theme }) => ({
  height: CHART_HEIGHT,
  marginTop: theme.spacing(5),
  '& .apexcharts-canvas svg': { height: CHART_HEIGHT },
  '& .apexcharts-canvas svg,.apexcharts-canvas foreignObject': {
    overflow: 'visible'
  },
  '& .apexcharts-legend': {
    height: LEGEND_HEIGHT,
    alignContent: 'center',
    position: 'relative !important',
    top: `calc(${CHART_HEIGHT - LEGEND_HEIGHT}px) !important`
  }
}));

// ----------------------------------------------------------------------

const CHART_DATA = [4344, 5435, 1443, 4443];

export default function AppDistributionOfTime() {
  const chartOptions = merge(BaseOptionChart(), {
    colors: ['#45a29e', '#91dbd5', '#1bf5e3', '#28bdb2'],
    labels: ['Path Finding', 'Moving', 'Standby', 'Turning'],
    legend: { show: false },
    dataLabels: { enabled: true },
    tooltip: {
      fillSeriesColor: false,
      y: {
        formatter: (seriesName) => fNumber(seriesName),
        title: {
          formatter: (seriesName) => `${seriesName}`
        }
      }
    },
    plotOptions: {
      pie: { donut: { labels: { show: false } } }
    }
  });

  return (
    <Card style={{ backgroundColor: '#1f2833', color: '#66fcf1', boxShadow: 'none' }}>
      <CardHeader title="Distribution of Time" />
      <ChartWrapperStyle dir="ltr">
        <ReactApexChart type="pie" series={CHART_DATA} options={chartOptions} height={360} />
      </ChartWrapperStyle>
    </Card>
  );
}
