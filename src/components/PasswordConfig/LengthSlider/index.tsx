import * as Slider from '@radix-ui/react-slider';
import { useState } from 'react';

import styles from './styles.module.scss';

export function LengthSlider() {
  const [sliderValue, setSliderValue] = useState([15]);

  return (
    <div className={styles.characterLength}>
      <div className={styles.top}>
        <h2>
          Character Length
        </h2>

        <span>
          {sliderValue}
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
        <Slider.Thumb className={styles.SliderThumb} />
      </Slider.Root>
    </div>
  )
}