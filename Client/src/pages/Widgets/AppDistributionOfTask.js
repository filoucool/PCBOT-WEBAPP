import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';
// material
import { useTheme, styled } from '@mui/material/styles';
import { Card, CardHeader } from '@mui/material';
//
import { BaseOptionChart } from '../../components/charts';

// ----------------------------------------------------------------------

const CHART_HEIGHT = 392;
const LEGEND_HEIGHT = 72;

const ChartWrapperStyle = styled('div')(({ theme }) => ({
  height: CHART_HEIGHT,
  marginTop: theme.spacing(2),
  '& .apexcharts-canvas svg': {
    height: CHART_HEIGHT
  },
  '& .apexcharts-canvas svg,.apexcharts-canvas foreignObject': {
    overflow: 'visible'
  },
  '& .apexcharts-legend': {
    height: LEGEND_HEIGHT,
    alignContent: 'center',
    position: 'relative !important',
    borderTop: `solid 1px ${theme.palette.divider}`,
    top: `calc(${CHART_HEIGHT - LEGEND_HEIGHT}px) !important`
  }
}));

// ----------------------------------------------------------------------

const CHART_DATA = [{ name: 'Series 1', data: [80, 50, 30, 40, 100, 20] }];

export default function AppDistributionOfTask() {
  const theme = useTheme();

  const chartOptions = merge(BaseOptionChart(), {
    stroke: {
      width: 2,
      colors: ['#66fcf1', '#66fcf1', '#66fcf1', '#66fcf1', '#66fcf1', '#66fcf1']
    },
    fill: {
      opacity: 0.7,
      colors: ['#45a29e', '#45a29e', '#45a29e', '#45a29e', '#45a29e', '#45a29e']
    },
    legend: { floating: true, horizontalAlign: 'center' },
    xaxis: {
      categories: ['Standby', 'Talking', 'Confused', 'Thinking', 'Moving', 'In Error'],
      labels: {
        style: {
          colors: ['#45a29e', '#45a29e', '#45a29e', '#45a29e', '#45a29e', '#45a29e']
        }
      }
    }
  });

  return (
    <Card style={{ backgroundColor: '#1f2833', color: '#66fcf1', boxShadow: 'none' }}>
      <CardHeader title="Distribution of Tasks" />
      <ChartWrapperStyle dir="ltr">
        <ReactApexChart type="radar" series={CHART_DATA} options={chartOptions} height={380} />
      </ChartWrapperStyle>
    </Card>
  );
}
