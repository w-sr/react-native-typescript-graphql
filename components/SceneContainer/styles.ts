import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const StyledSafeAreaView = styled(SafeAreaView)<{ forceInset: { top: string; bottom: string } }>`
  flex-grow: 1;
`;
