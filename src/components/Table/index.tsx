/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import React from 'react';
import { Props } from '@/src/utils/types/tableTypes';
import useViewModel from './useViewModel';
import CustomTable from './Screen/desktop';
import CustomMobileTable from './Screen/mobile';

const Table: React.FC<Props> = ({ columns, rows }) => {
  const { constants } = useViewModel();
  return (
    <>
      {constants.isMobilV1 ? <CustomMobileTable /> : <CustomTable columns={columns} rows={rows} />}
    </>
  );
};

export default Table;
