import CoreComponent, { register, Store, Data, StructureBase, RdcTheme, StyledBackgrond } from './core';
import { DefaultConfigStyles, useDefaultStyles } from './utils';

export { RootContainer } from './components/RootContainer';
import { Grid, Row, Column } from './components/Grid';
import { Container } from './components/Container';
import { Text } from './components/Text';
import { Image } from './components/Image';
import { Label } from './components/Label';

export {
  // Core
  CoreComponent as Core,
  register,
  // Utils
  useDefaultStyles,
  // Interfaces
  Store,
  Data,
  StructureBase,
  RdcTheme,
  StyledBackgrond,
  DefaultConfigStyles,
  // Components
  Grid,
  Row,
  Column,
  Container,
  Text,
  Image,
  Label,
};
