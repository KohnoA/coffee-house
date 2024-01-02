export const enum APP_ROUTES {
  MAIN = '/',
  MENU = '/menu',
}

export const enum MAIN_SECTIONS_ID {
  NEW_PRODUCTS = 'new-products',
  ABOUT = 'about',
  MOBILE_APP = 'mobile-app',
  CONTACT_US = 'contact-us',
}

export const enum MAIN_ANCHORS {
  NEW_PRODUCTS = `${APP_ROUTES.MAIN}#new-products`,
  ABOUT = `${APP_ROUTES.MAIN}#about`,
  MOBILE_APP = `${APP_ROUTES.MAIN}#mobile-app`,
  CONTACT_US = `${APP_ROUTES.MAIN}#contact-us`,
}
