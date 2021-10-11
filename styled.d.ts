import styled from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      backgroundHeader: string;
      backgroundFooter: string;
      backgroundLayout: string;
      backgrounInput: string;
    };
  }
}
