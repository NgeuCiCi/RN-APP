import { FC, memo } from 'react';
import { isEqual } from '../utils/Utils';

const withMemo = <T>(Component: FC<T>) => memo(Component, isEqual);

export default withMemo;
