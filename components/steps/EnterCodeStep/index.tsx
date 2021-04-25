import React from 'react';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import { WhiteBlock } from '../../WhiteBlock';
import { Button } from '../../Button';
import { StepInfo } from '../../StepInfo';
import Axios from '../../../core/axios';

import styles from './EnterPhoneStep.module.scss';

export const EnterCodeStep = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [codes, setCodes] = React.useState(['', '', '', '']);

  const nextDisabled = codes.some((v) => !v); //проверка "если какого-то значения нет, то кнопка неактивна"

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const index = Number(event.target.getAttribute('id')) - 1;
    const value = event.target.value;
    setCodes(() => {
      const newArr = [...codes];
      newArr[index] = value;
      return newArr;
    });
    if (event.target.nextSibling) {
      //спрашивает, есть ли дальше справа html-элемент, и делает на нем фокус
      (event.target.nextSibling as HTMLInputElement).focus();
    }
  };

  const onSumbit = async () => {
    try {
      setIsLoading(true);
      await Axios.get('/todos');
      router.push('/rooms');
    } catch (error) {
      alert('Ошибка при активации!');
    }

    setIsLoading(false);
  };

  return (
    <div className={styles.block}>
      {!isLoading ? (
        <>
          <StepInfo icon="/static/numbers.png" title="Enter your activate code" />
          <WhiteBlock className={clsx('m-auto mt-30', styles.whiteBlock)}>
            <div className={clsx('mb-30', styles.codeInput)}>
              <input
                type="tel"
                placeholder="X"
                maxLength={1}
                id="1"
                onChange={handleChangeInput}
                value={codes[0]}
              />
              <input
                type="tel"
                placeholder="X"
                maxLength={1}
                id="2"
                onChange={handleChangeInput}
                value={codes[1]}
              />
              <input
                type="tel"
                placeholder="X"
                maxLength={1}
                id="3"
                onChange={handleChangeInput}
                value={codes[2]}
              />
              <input
                type="tel"
                placeholder="X"
                maxLength={1}
                id="4"
                onChange={handleChangeInput}
                value={codes[3]}
              />
            </div>
            <Button onClick={onSumbit} disabled={nextDisabled}>
              Next
              <img className="d-ib ml-10" src="/static/arrow.svg" />
            </Button>
          </WhiteBlock>
        </>
      ) : (
        <div className="text-center">
          <div className="loader"></div>
          <h3 className="mt-5">Activation in progress ...</h3>
        </div>
      )}
    </div>
  );
};
