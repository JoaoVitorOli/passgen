import { useEffect, useState } from 'react';
import * as Slider from '@radix-ui/react-slider';

import { usePassConfigActions, usePassConfigStoreState } from '../../../stores/hooks/passwordConfig';

import styles from './styles.module.scss';
import { PasswordConfigStores } from '../../../stores';

export default function LengthSlider() {
  const updateConfig = usePassConfigActions(action => action.updateCharLength);
  const passConfig = usePassConfigStoreState(state => state.charLength);
  const [sliderValue, setSliderValue] = useState([15]);

  useEffect(() => {
    setSliderValue([passConfig]);
  }, []);

  useEffect(() => {
    updateConfig(sliderValue[0]);
  }, [sliderValue]);

  return (
    <div className={styles.characterLength}>
      <div className={styles.top}>
        <h2>
          Character Length
        </h2>

        <span>
          {sliderValue[0]}
        </span>
      </div>

      <Slider.Root 
        className={styles.SliderRoot} 
        defaultValue={sliderValue}
        value={sliderValue}
        onValueChange={(value) => setSliderValue(value)}
        max={30} 
        step={1} 
        aria-label="Character Length"
      >
        <Slider.Track className={styles.SliderTrack}>
          <Slider.Range className={styles.SliderRange} />
        </Slider.Track>
        <Slider.Thumb aria-label='thumb' className={styles.SliderThumb} />
      </Slider.Root>
    </div>
  )
}