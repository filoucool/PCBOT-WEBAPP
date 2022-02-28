import faker from 'faker';
import PropTypes from 'prop-types';
// material
import { Card, Typography, CardHeader, CardContent } from '@mui/material';
import {
  Timeline,
  TimelineItem,
  TimelineContent,
  TimelineConnector,
  TimelineSeparator,
  TimelineDot
} from '@mui/lab';
// utils
import { fDateTime } from '../../utils/formatTime';

// ----------------------------------------------------------------------

const TIMELINES = [
  {
    title: 'this is a new bug. Please give me love and attention!',
    time: faker.date.past(),
    type: 'error'
  },
  {
    title: 'this is a new bug. Please give me love and attention!',
    time: faker.date.past(),
    type: 'warning'
  },
  {
    title: 'this is a new bug. Please give me love and attention!',
    time: faker.date.past(),
    type: 'request'
  },
  {
    title: 'this is a new bug. Please give me love and attention!',
    time: faker.date.past(),
    type: 'task'
  },
  {
    title: 'this is a new bug. Please give me love and attention!',
    time: faker.date.past(),
    type: 'warning'
  }
];

// ----------------------------------------------------------------------

OrderItem.propTypes = {
  item: PropTypes.object,
  isLast: PropTypes.bool
};

function OrderItem({ item, isLast }) {
  const { type, title, time } = item;
  return (
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot
          sx={{
            bgcolor:
              (type === 'error' && 'error.main') ||
              (type === 'warning' && 'warning.main') ||
              (type === 'task' && '#66fcf1') ||
              (type === 'request' && '#45a29e') ||
              '#45a29e'
          }}
        />
        {isLast ? null : <TimelineConnector />}
      </TimelineSeparator>
      <TimelineContent>
        <Typography variant="subtitle2">{title}</Typography>
        <Typography variant="caption" sx={{ color: 'text.secondary' }}>
          {fDateTime(time)}
        </Typography>
        <Typography variant="caption" sx={{ color: 'text.secondary' }}>
          Event type: {type}
        </Typography>
      </TimelineContent>
    </TimelineItem>
  );
}

export default function AppLatestEvent() {
  return (
    <Card
      sx={{
        '& .MuiTimelineItem-missingOppositeContent:before': {
          display: 'none'
        }
      }}
      style={{ backgroundColor: '#1f2833', color: '#45a29e', boxShadow: 'none' }}
    >
      <CardHeader style={{ color: '#66fcf1' }} title="Latest Events" />
      <CardContent>
        <Timeline>
          {TIMELINES.map((item, index) => (
            <OrderItem key={item.title} item={item} isLast={index === TIMELINES.length - 1} />
          ))}
        </Timeline>
      </CardContent>
    </Card>
  );
}
