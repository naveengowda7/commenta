export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  LOGIN: '/login',
  SIGNUP: '/signup',
  ACCOUNT: '/account',
  ACCOUNT_PROFILE: '/account/profile',
  ACCOUNT_SUBSCRIPTION: '/account/subscription',
  DASHBOARD: '/dashboard',
  VIDEOS: '/dashboard/videos',
  VIDEO_DETAIL: '/dashboard/videos/:id',
  VIDEO_COMMENTS: '/dashboard/videos/:id/comments',
  NOT_FOUND: '*',
}

export const PUBLIC_ROUTES = [
  ROUTES.HOME,
  ROUTES.ABOUT,
  ROUTES.SIGNUP,
  ROUTES.LOGIN,
]

export const PRIVATE_ROUTES = [
  ROUTES.ACCOUNT,
  ROUTES.ACCOUNT_PROFILE,
  ROUTES.ACCOUNT_SUBSCRIPTION,
  ROUTES.DASHBOARD,
  ROUTES.VIDEOS,
  ROUTES.VIDEO_COMMENTS,
  ROUTES.VIDEO_DETAIL
]