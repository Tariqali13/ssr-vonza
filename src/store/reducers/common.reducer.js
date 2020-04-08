import {
  LOADING_START,
  SCROLL_NAV,
  SENDING_EMAIL,
  CLEAR_ERROR,
  MODAL_VIEW,
  DISPLAY_NAV,
  ADMIN_CSS_LOAD,
  PUBLIC_CSS_LOAD,
  CLASSIC_TEMPLATE_CSS_LOAD,
} from "../actions";

const initialState = {
  displayNav: "",
  changeNavBtn: "",
  show: "",
  videolink: "",
  display: "",
  title: "",
  loading: false,
  adminCssLoad: false,
  publicCssLoad: false,
  classicTemplateCssLoad: false,
  backgroundForNav: "none",
};

const common = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_START:
      return {
        ...state,
        loading: !state.loading,
      };

    case ADMIN_CSS_LOAD:
      return {
        ...state,
        adminCssLoad: !state.adminCssLoad,
      };
    case PUBLIC_CSS_LOAD:
      return {
        ...state,
        publicCssLoad: !state.publicCssLoad,
      };
    case CLASSIC_TEMPLATE_CSS_LOAD:
      return {
        ...state,
        classicTemplateCssLoad: !state.classicTemplateCssLoad,
      };
    case SCROLL_NAV:
      let scroll = window.scrollY;
      if (scroll > 50) {
        return {
          ...state,
          backgroundForNav: "active",
        };
      }
      if (scroll < 50) {
        return {
          ...state,
          backgroundForNav: "none",
        };
      }
    case DISPLAY_NAV:
      return {
        ...state,
        displayNav: !state.displayNav ? "block" : "",
        changeNavBtn: !state.changeNavBtn ? "change" : "",
      };
    case MODAL_VIEW:
      return {
        ...state,
        show: !state.show ? "show" : "",
        display: !state.display ? "block" : "",
        videolink: !state.videolink ? action.payload.videoLink : "",
        title: !state.title ? action.payload.title : "",
      };

    default:
      return state;
  }
};

export { common };
