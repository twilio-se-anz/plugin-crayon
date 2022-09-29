import VerifyTab from './VerifyTab';
import VideoTab from './VideoTab';

import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import VideoCallIcon from '@material-ui/icons/VideoCall';

const taskCanvasTabsList = [
  {
    label: 'Verify',
    id: 'taskCanvasTabVerify',
    icon: <VerifiedUserIcon />,
    component: VerifyTab,
  },
  {
    label: 'Video',
    id: 'taskCanvasTabVideo',
    icon: <VideoCallIcon />,
    component: VideoTab,
  },
];

export { taskCanvasTabsList };
