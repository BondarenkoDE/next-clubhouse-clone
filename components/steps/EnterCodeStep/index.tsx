import React from 'react';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import { WhiteBlock } from '../../WhiteBlock';
import { Button } from '../../Button';
import { StepInfo } from '../../StepInfo';
import Axios from '../../../core/axios';

import styles from './EnterPhoneStep.module.scss';

export const EnterCodeStep = () => {
  return (
    <div className={styles.block}>
      <StepInfo icon="/static/numbers.png" title="Enter your activate code" />
      <WhiteBlock className={clsx('m-auto mt-30', styles.whiteBlock)}>
        <div className={clsx('mb-30', styles.codeInput)}>
          <input
            key={index}
            type="tel"
            placeholder="X"
            maxLength={1}
            id={String(index)}
            onChange={handleChangeInput}
            value={code}
          />
        </div>
        <Button>
          Next
          <img className="d-ib ml-10" src="/static/arrow.svg" />
        </Button>
      </WhiteBlock>
      <div className="text-center">
        <div className="loader"></div>
        <h3 className="mt-5">Activation in progress ...</h3>
      </div>
    </div>
  );
};
