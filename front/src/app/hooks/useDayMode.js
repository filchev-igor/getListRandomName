import { useEffect, useState } from 'react';

import { HAS_DAY_MODE_KEY } from '../constants/indexedDB';

import {
  getDataIntoIndexedDB,
  updateDataIntoIndexedDB,
} from '../utils/IndexedDB';

const useDayMode = () => {
  const [state, setState] = useState(true);

  const handleDayModeUpdate = (isDayModeSelected = true) => {
    updateDataIntoIndexedDB({
      value: isDayModeSelected,
      key: HAS_DAY_MODE_KEY,
    })
      .then((hasDayMode) => setState(hasDayMode))
      .catch((error) => console.log(`Day mode change has failed: ${error}`));
  };

  useEffect(() => {
    (async () => {
      try {
        const hasDayMode = await getDataIntoIndexedDB({
          initialValue: true,
          key: HAS_DAY_MODE_KEY,
        });

        setState(hasDayMode);
      } catch (e) {
        console.error('Initial day mode value extraction has failed');
      }
    })();
  }, []);

  return { hasDayMode: state, setHasDayMode: handleDayModeUpdate };
};

export default useDayMode;
