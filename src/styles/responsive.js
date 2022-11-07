import { css } from "styled-components";

// Mobile first approach

/*const screenSizes = {
    mobile: 0,
    tablet: 768,
    desktop: 1023,
    fullhd: 1408,
    widescreen: 1215,
};
*/
export const tablet = (props) => {
    return css `
    @media only screen and (min-width: 768px) {
      ${props}
    }
  `;
};

export const laptop = (props) => {
    return css `
    @media only screen and (min-width: 1024px) {
      ${props}
    }
  `;
};