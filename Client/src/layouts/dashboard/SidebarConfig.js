import { Icon } from '@iconify/react';
import pieChart2Fill from '@iconify/icons-eva/pie-chart-2-fill';
import options2fill from '@iconify/icons-eva/options-2-fill';
import videofill from '@iconify/icons-eva/video-fill';
import activityFILL from '@iconify/icons-eva/activity-fill';
import shakefill from '@iconify/icons-eva/shake-fill';
import clipboardoutline from '@iconify/icons-eva/clipboard-outline';

// ----------------------------------------------------------------------

const getIcon = (name) => <Icon icon={name} width={22} height={22} />;

const sidebarConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: getIcon(pieChart2Fill)
  },
  {
    title: 'Live Camera',
    path: '/dashboard/LiveCamera',
    icon: getIcon(videofill)
  },
  {
    title: 'Sensor Data',
    path: '/dashboard/SensorData',
    icon: getIcon(shakefill)
  },
  {
    title: 'System Health',
    path: '/dashboard/SystemHealth',
    icon: getIcon(activityFILL)
  },
  {
    title: 'Event Viewer',
    path: '/dashboard/EventViewer',
    icon: getIcon(clipboardoutline)
  },
  {
    title: 'Settings',
    path: '/dashboard/Settings',
    icon: getIcon(options2fill)
  }
];

export default sidebarConfig;
