import styled from 'styled-components';

import { RootContainerStyleProps } from './interfaces';

import { getBackgroundColor } from '../../utils';

export const Container: React.FC<RootContainerStyleProps> = styled.div`
  background-color: ${(props: RootContainerStyleProps) => getBackgroundColor(props.theme, props.background)};
`;
