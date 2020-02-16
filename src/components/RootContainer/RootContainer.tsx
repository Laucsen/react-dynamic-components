import React from 'react';

import { RootContainerProps } from './interfaces';
import { Container } from './styles';
import { useDefaultStyles } from '../../utils';
import { GradientContainer, ContentContainer } from '../../shared';

const RootContainer: React.FC<RootContainerProps> = ({ structure, store, rootData }) => {
  const styles = useDefaultStyles(structure);
  return (
    <>
      {structure.background && structure.background.gradient && (
        <GradientContainer color={structure.background.gradient} />
      )}
      <ContentContainer>
        <Container {...styles}>{store.buildAppendDataToContainer(structure.root, rootData)}</Container>;
      </ContentContainer>
    </>
  );
};

export default RootContainer;
