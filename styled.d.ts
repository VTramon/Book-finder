import styled from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      backgroundHeader: string;
      backgrounInput: string;
    };
  }
}
