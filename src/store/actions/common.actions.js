export const DISPLAY_NAV = "DISPLAY_NAV";
export const LOADING_START = "LOADING_START";
export const MODAL_VIEW = "MODAL_VIEW";
export const SCROLL_NAV = "SCROLL_NAV";
export const ADMIN_CSS_LOAD = "ADMIN_CSS_LOAD";
export const PUBLIC_CSS_LOAD = "PUBLIC_CSS_LOAD";
export const CLASSIC_TEMPLATE_CSS_LOAD = "CLASSIC_TEMPLATE_CSS_LOAD";
export const loadingStart = () => dispatch => {
  dispatch({
    type: LOADING_START
  });
};

export const scrollStart = () => dispatch => {
  dispatch({
    type: SCROLL_NAV
  });
};

export const modelView = creator => dispatch => {
  dispatch({
    type: MODAL_VIEW,
    payload: creator
  });
};

export const mobileNav = () => dispatch => {
  dispatch({
    type: DISPLAY_NAV
  });
};

export const adminCssLoad = () => dispatch => {
  dispatch({
    type: ADMIN_CSS_LOAD
  });
};

export const publicCssLoad = () => dispatch => {
  dispatch({
    type: PUBLIC_CSS_LOAD
  });
};

export const ClassicTemplateCssLoad = () => dispatch => {
  dispatch({
    type: CLASSIC_TEMPLATE_CSS_LOAD
  });
};
