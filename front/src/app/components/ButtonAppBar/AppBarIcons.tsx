import React, { useMemo } from 'react';
import AddIcon from '@mui/icons-material/Add';
import { v4 as uuidv4 } from 'uuid';
import AdjustIcon from '@mui/icons-material/Adjust';
import AppsIcon from '@mui/icons-material/Apps';
import SettingsIcon from '@mui/icons-material/Settings';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import FontDownloadIcon from '@mui/icons-material/FontDownload';
import {
  Grid, IconButton, Tooltip,
} from '@mui/material';
import useDayMode from '../../hooks/useDayMode';

const AppBarIcons = () : JSX.Element => {
  const {
    hasDayMode,
    setHasDayMode,
  } = useDayMode();

  const icons = useMemo(() => [
    {
      icon: <AddIcon />,
      id: uuidv4(),
      ariaLabel: 'link to add new icon page',
    },
    {
      icon: <AdjustIcon />,
      id: uuidv4(),
      ariaLabel: 'link to select appropriate list page',
    },
    {
      icon: <AppsIcon />,
      id: uuidv4(),
      ariaLabel: 'link to select list page',
    },
    {
      icon: <SettingsIcon />,
      id: uuidv4(),
      ariaLabel: 'link to settings page',
    },
    {
      icon: hasDayMode ? <DarkModeIcon /> : <LightModeIcon />,
      id: uuidv4(),
      ariaLabel: hasDayMode ? 'select dark mode' : 'select light mode',
      onClick: () => setHasDayMode(!hasDayMode),
    },
    {
      icon: <FontDownloadIcon />,
      id: uuidv4(),
      ariaLabel: 'change font',
    },
  ], [hasDayMode]);

  return (
    <>
      {icons.map(({
        icon, id, ariaLabel, onClick,
      }) => (
        <Grid
          item
          key={id}
          xs
          textAlign="center"
        >
          <Tooltip
            title={ariaLabel[0].toUpperCase() + ariaLabel.slice(1)}
          >
            <IconButton
              size="large"
              color="secondary"
              aria-label={ariaLabel}
              onClick={onClick}
            >
              {icon}
            </IconButton>
          </Tooltip>
        </Grid>
      ))}
    </>
  );
};

export default AppBarIcons;
