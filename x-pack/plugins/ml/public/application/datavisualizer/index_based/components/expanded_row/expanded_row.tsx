/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

import React from 'react';

import { FieldVisConfig } from '../../../stats_table/types';
import {
  BooleanContent,
  DateContent,
  GeoPointContent,
  IpContent,
  KeywordContent,
  NumberContent,
  OtherContent,
  TextContent,
} from '../../../stats_table/components/field_data_expanded_row';

import { ML_JOB_FIELD_TYPES } from '../../../../../../common/constants/field_types';
import { LoadingIndicator } from '../field_data_row/loading_indicator';
import { NotInDocsContent } from '../field_data_row/content_types';

export const IndexBasedDataVisualizerExpandedRow = ({ item }: { item: FieldVisConfig }) => {
  const config = item;
  const { loading, type, existsInDocs, fieldName } = config;

  function getCardContent() {
    if (existsInDocs === false) {
      return <NotInDocsContent />;
    }

    switch (type) {
      case ML_JOB_FIELD_TYPES.NUMBER:
        return <NumberContent config={config} />;

      case ML_JOB_FIELD_TYPES.BOOLEAN:
        return <BooleanContent config={config} />;

      case ML_JOB_FIELD_TYPES.DATE:
        return <DateContent config={config} />;

      case ML_JOB_FIELD_TYPES.GEO_POINT:
        return <GeoPointContent config={config} />;

      case ML_JOB_FIELD_TYPES.IP:
        return <IpContent config={config} />;

      case ML_JOB_FIELD_TYPES.KEYWORD:
        return <KeywordContent config={config} />;

      case ML_JOB_FIELD_TYPES.TEXT:
        return <TextContent config={config} />;

      default:
        return <OtherContent config={config} />;
    }
  }

  return (
    <div
      className="mlDataVisualizerFieldExpandedRow"
      data-test-subj={`mlDataVisualizerFieldExpandedRow-${fieldName}`}
    >
      {loading === true ? <LoadingIndicator /> : getCardContent()}
    </div>
  );
};
