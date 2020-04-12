const MINUTE_IN_HOUR = 60
const QUARTERS_IN_HOUR = 4

export const RAVE_START_MINUTES = 1 * MINUTE_IN_HOUR + 2 // 1:02am
export const RAVE_END_MINUTES = 3 * MINUTE_IN_HOUR + 50 // 3:50am
export const BUSINESS_HOURS_START_MINUTES = 6 * MINUTE_IN_HOUR + 15 // 6:15am
export const BUSINESS_HOURS_END_MINUTES = 18 * MINUTE_IN_HOUR // 6:00pm
export const NIGHT_HOURS_START_MINUTES = 20 * MINUTE_IN_HOUR // 8:00pm
export const NIGHT_HOURS_END_MINUTES = 1 * MINUTE_IN_HOUR + 2 // 1:02am
export const SUNRISE_START_QUARTERS = 4 * QUARTERS_IN_HOUR + 2 // 4:30am
export const SUNRISE_END_QUARTERS = 6 * QUARTERS_IN_HOUR + 1 // 6:15am
export const SUNSET_START_QUARTERS = 18 * QUARTERS_IN_HOUR + 1 // 6:15pm
export const SUNSET_END_QUARTERS = 20 * QUARTERS_IN_HOUR // 8:00pm
export const BUSINESS_HOURS_START_QUARTERS = SUNRISE_END_QUARTERS // 6:15am
export const BUSINESS_HOURS_END_QUARTERS = SUNSET_START_QUARTERS // 8:00pm

export const colors = [
  // 12:00am - 12:15am
  {
    from: 'rgba(0,0,0,1)',
    to: 'rgba(0,0,0,1)',
    angle: '90deg'
  },
  // 12:15am - 12:30am
  {
    from: 'rgba(0,0,0,1)',
    to: 'rgba(0,0,0,1)',
    angle: '90deg'
  },
  // 12:30am - 12:45am
  {
    from: 'rgba(0,0,0,1)',
    to: 'rgba(0,0,0,1)',
    angle: '90deg'
  },
  // 12:45am - 1:00am
  {
    from: 'rgba(0,0,0,1)',
    to: 'rgba(0,0,0,1)',
    angle: '90deg'
  },
  // 1:00am - 1:15am
  {
    from: 'rgba(0,0,0,1)',
    to: 'rgba(0,0,0,1)',
    angle: '90deg'
  },
  // 1:15am - 1:30am
  {
    from: 'rgba(0,0,0,1)',
    to: 'rgba(0,0,0,1)',
    angle: '90deg'
  },
  // 1:30am - 1:45am
  {
    from: 'rgba(0,0,0,1)',
    to: 'rgba(0,0,0,1)',
    angle: '90deg'
  },
  // 1:45am - 2:00am
  {
    from: 'rgba(0,0,0,1)',
    to: 'rgba(0,0,0,1)',
    angle: '90deg'
  },
  // 2:00am - 2:15am
  {
    from: 'rgba(0,0,0,1)',
    to: 'rgba(0,0,0,1)',
    angle: '90deg'
  },
  // 2:15am - 2:30am
  {
    from: 'rgba(0,0,0,1)',
    to: 'rgba(0,0,0,1)',
    angle: '90deg'
  },
  // 2:30am - 2:45am
  {
    from: 'rgba(0,0,0,1)',
    to: 'rgba(0,0,0,1)',
    angle: '90deg'
  },
  // 2:45am - 3:00am
  {
    from: 'rgba(0,0,0,1)',
    to: 'rgba(0,0,0,1)',
    angle: '90deg'
  },
  // 3:00am - 3:15am
  {
    from: 'rgba(0,0,0,1)',
    to: 'rgba(0,0,0,1)',
    angle: '90deg'
  },
  // 3:15am - 3:30am
  {
    from: 'rgba(0,0,0,1)',
    to: 'rgba(0,0,0,1)',
    angle: '90deg'
  },
  // 3:30am - 3:45am
  {
    from: 'rgba(0,0,0,1)',
    to: 'rgba(0,0,0,1)',
    angle: '90deg'
  },
  // 3:45am - 4:00am
  {
    from: 'rgba(0,0,0,1)',
    to: 'rgba(0,0,0,1)',
    angle: '90deg'
  },
  // 4:00am - 4:15am
  {
    from: 'rgba(0,0,0,1)',
    to: 'rgba(0,0,0,1)',
    angle: '315deg'
  },
  // 4:15am - 4:30am
  {
    from: 'rgba(0,0,0,1)',
    to: 'rgba(0,0,0,1)',
    angle: '315deg'
  },
  // 4:30 - 4:45am
  {
    from: 'rgba(0,0,0,1)',
    to: 'rgba(7,33,52,1)',
    angle: '315deg'
  },
  // 4:45 - 5:00am
  {
    from: 'rgba(7,33,52,1)',
    to: 'rgba(45,63,97,1)',
    angle: '315deg'
  },
  // 5:00am - 5:15am
  {
    from: 'rgba(45,63,97,1)',
    to: 'rgba(222,127,116,1)',
    angle: '315deg'
  },
  // 5:15am - 5:30am
  {
    from: 'rgba(222,127,116,1)',
    to: 'rgba(138,181,208,1)',
    angle: '315deg'
  },
  // 5:30am - 5:45am
  {
    from: 'rgba(138,181,208,1)',
    to: 'rgba(184,209,224,1)',
    angle: '315deg'
  },
  // 5:45 - 6:00am
  {
    from: 'rgba(184,209,224,1)',
    to: 'rgba(203,221,230,1)',
    angle: '315deg'
  },
  // 6:00am - 6:15am
  {
    from: 'rgba(203,221,230,1)',
    to: 'rgba(250,250,250,1)',
    angle: '315deg'
  },
  // 6:15am - 6:30am
  {
    from: 'rgba(250,250,250,1)',
    to: 'rgba(204,211,216,1)',
    angle: '315deg'
  },
  // 6:30am - 6:45am
  {
    from: 'rgba(204,211,216,1)',
    to: 'rgba(209,209,209,1)',
    angle: '315deg'
  },
  // 6:45 - 7:00am
  {
    from: 'rgba(209,209,209,1)',
    to: 'rgba(211,211,211,1)',
    angle: '315deg'
  },
  // 7:00am - 7:15am
  {
    from: 'rgba(211,211,211,1)',
    to: 'rgba(213,213,213,1)',
    angle: '215deg'
  },
  // 7:15am - 7:30am
  {
    from: 'rgba(213,213,213,1)',
    to: 'rgba(215,215,215,1)',
    angle: '215deg'
  },
  // 7:30 - 7:45am
  {
    from: 'rgba(215,215,215,1)',
    to: 'rgba(217,217,217,1)',
    angle: '90deg'
  },
  // 7:45 - 8:00am
  {
    from: 'rgba(217,217,217,1)',
    to: 'rgba(219,219,219,1)',
    angle: '90deg'
  },
  // 8:00am - 8:15am
  {
    from: 'rgba(219,219,219,1)',
    to: 'rgba(221,221,221,1)',
    angle: '90deg'
  },
  // 8:15am - 8:30am
  {
    from: 'rgba(221,221,221,1))',
    to: 'rgba(223,223,223,1)',
    angle: '90deg'
  },
  // 8:30am - 8:45am
  {
    from: 'rgba(223,223,223,1)',
    to: 'rgba(225,225,225,1)',
    angle: '90deg'
  },
  // 8:45 - 9:00am
  {
    from: 'rgba(225,225,225,1)',
    to: 'rgba(227,227,227,1)',
    angle: '90deg'
  },
  // 9:00am - 9:15am
  {
    from: 'rgba(227,227,227,1)',
    to: 'rgba(229,229,229,1)',
    angle: '90deg'
  },
  // 9:15am - 9:30am
  {
    from: 'rgba(229,229,229,1)',
    to: 'rgba(231,231,231,1)',
    angle: '90deg'
  },
  // 9:30am - 9:45am
  {
    from: 'rgba(231,231,231,1)',
    to: 'rgba(233,233,233,1)',
    angle: '90deg'
  },
  // 9:45 - 10:00am
  {
    from: 'rgba(233,233,233,1)',
    to: 'rgba(235,235,235,1)',
    angle: '90deg'
  },
  // 10:00am - 10:15am
  {
    from: 'rgba(235,235,235,1)',
    to: 'rgba(237,237,237,1)',
    angle: '90deg'
  },
  // 10:15am - 10:30am
  {
    from: 'rgba(237,237,237,1)',
    to: 'rgba(239,239,239,1)',
    angle: '90deg'
  },
  // 10:30am - 10:45am
  {
    from: 'rgba(239,239,239,1)',
    to: 'rgba(241,241,241,1)',
    angle: '90deg'
  },
  // 10:45 - 11:00am
  {
    from: 'rgba(241,241,241,1)',
    to: 'rgba(243,243,243,1)',
    angle: '90deg'
  },
  // 11:00am - 11:15am
  {
    from: 'rgba(243,243,243,1)',
    to: 'rgba(245,245,245,1)',
    angle: '90deg'
  },
  // 11:15am - 11:30am
  {
    from: 'rgba(245,245,245,1)',
    to: 'rgba(247,247,247,1)',
    angle: '90deg'
  },
  // 11:30am - 11:45am
  {
    from: 'rgba(247,247,247,1)',
    to: 'rgba(249,249,249,1)',
    angle: '90deg'
  },
  // 11:45 - 12:00pm
  {
    from: 'rgba(249,249,249,1)',
    to: 'rgba(251,251,251,1)',
    angle: '90deg'
  },
  // 12:00pm - 12:15pm
  {
    from: 'rgba(251,251,251,1)',
    to: 'rgba(253,253,253,1)',
    angle: '90deg'
  },
  // 12:15pm - 12:30pm
  {
    from: 'rgba(253,253,253,1)',
    to: 'rgba(255,255,255,1)',
    angle: '90deg'
  },
  // 12:30pm - 12:45pm
  {
    from: 'rgba(255,255,255,1)',
    to: 'rgba(253,253,253,1)',
    angle: '90deg'
  },
  // 12:45pm - 1:00pm
  {
    from: 'rgba(253,253,253,1)',
    to: 'rgba(251,251,251,1)',
    angle: '90deg'
  },
  // 1:00pm - 1:15pm
  {
    from: 'rgba(251,251,251,1)',
    to: 'rgba(249,249,249,1)',
    angle: '90deg'
  },
  // 1:15pm - 1:30pm
  {
    from: 'rgba(249,249,249,1)',
    to: 'rgba(247,247,247,1)',
    angle: '90deg'
  },
  // 1:30pm - 1:45pm
  {
    from: 'rgba(247,247,247,1)',
    to: 'rgba(245,245,245,1)',
    angle: '90deg'
  },
  // 1:45pm - 2:00pm
  {
    from: 'rgba(243,243,243,1)',
    to: 'rgba(241,241,241,1)',
    angle: '90deg'
  },
  // 2:00pm - 2:15pm
  {
    from: 'rgba(241,241,241,1)',
    to: 'rgba(239,239,239,1)',
    angle: '90deg'
  },
  // 2:15pm - 2:30pm
  {
    from: 'rgba(239,239,239,1)',
    to: 'rgba(237,237,237,1)',
    angle: '90deg'
  },
  // 2:30pm - 2:45pm
  {
    from: 'rgba(237,237,237,1)',
    to: 'rgba(235,235,235,1)',
    angle: '90deg'
  },
  // 2:45pm - 3:00pm
  {
    from: 'rgba(235,235,235,1)',
    to: 'rgba(233,233,233,1)',
    angle: '90deg'
  },
  // 3:00pm - 3:15pm
  {
    from: 'rgba(233,233,233,1)',
    to: 'rgba(231,231,231,1)',
    angle: '90deg'
  },
  // 3:15pm - 3:30pm
  {
    from: 'rgba(231,231,231,1)',
    to: 'rgba(229,229,229,1)',
    angle: '90deg'
  },
  // 3:30pm - 3:45pm
  {
    from: 'rgba(229,229,229,1)',
    to: 'rgba(227,227,227,1)',
    angle: '90deg'
  },
  // 3:45pm - 4:00pm
  {
    from: 'rgba(227,227,227,1)',
    to: 'rgba(225,225,225,1)',
    angle: '90deg'
  },
  // 4:00pm - 4:15pm
  {
    from: 'rgba(225,225,225,1)',
    to: 'rgba(223,223,223,1)',
    angle: '90deg'
  },
  // 4:15pm - 4:30pm
  {
    from: 'rgba(223,223,223,1)',
    to: 'rgba(221,221,221,1)',
    angle: '90deg'
  },
  // 4:30pm - 4:45pm
  {
    from: 'rgba(221,221,221,1)',
    to: 'rgba(219,219,219,1)',
    angle: '90deg'
  },
  // 4:45pm - 5:00pm
  {
    from: 'rgba(219,219,219,1)',
    to: 'rgba(217,217,217,1)',
    angle: '90deg'
  },
  // 5:00pm - 5:15pm
  {
    from: 'rgba(217,217,217,1)',
    to: 'rgba(215,215,215,1)',
    angle: '90deg'
  },
  // 5:15pm - 5:30pm
  {
    from: 'rgba(215,215,215,1)',
    to: 'rgba(213,213,213,1)',
    angle: '90deg'
  },
  // 5:30pm - 5:45pm
  {
    from: 'rgba(213,213,213,1)',
    to: 'rgba(211,211,211,1)',
    angle: '90deg'
  },
  // 5:45pm - 6:00pm
  {
    from: 'rgba(211,211,211,1)',
    to: 'rgba(209,209,209,1)',
    angle: '90deg'
  },
  // 6:00pm - 6:15pm
  {
    from: 'rgba(209,209,209,1)',
    to: 'rgba(250,250,250,1)',
    angle: '90deg'
  },
  // 6:15pm - 6:30pm
  {
    from: 'rgba(250,250,250,1)',
    to: 'rgba(189,206,210,1)',
    angle: '90deg'
  },
  // 6:30pm - 6:45pm
  {
    from: 'rgba(189,206,210,1)',
    to: 'rgba(251,191,135,1)',
    angle: '225deg'
  },
  // 6:45pm - 7:00pm
  {
    from: 'rgba(251,191,135,1)',
    to: 'rgba(228,124,114,1)',
    angle: '225deg'
  },
  // 7:00pm - 7:15pm
  {
    from: 'rgba(228,124,114,1)',
    to: 'rgba(50,135,194,1)',
    angle: '225deg'
  },
  // 7:15pm - 7:30pm
  {
    from: 'rgba(50,135,194,1)',
    to: 'rgba(0,97,149,1)',
    angle: '225deg'
  },
  // 7:30pm - 7:45pm
  {
    from: 'rgba(0,97,149,1)',
    to: 'rgba(0,52,87,1)',
    angle: '225deg'
  },
  // 7:45pm - 8:00pm
  {
    from: 'rgba(0,52,87,1)',
    to: 'rgba(0,0,0,1)',
    angle: '225deg'
  },
  // 8:00pm - 8:15pm
  {
    from: 'rgba(0,0,0,1)',
    to: 'rgba(0,97,149,1)',
    angle: '225deg'
  },
  // 8:15pm - 8:30pm
  {
    from: 'rgba(0,97,149,1)',
    to: 'rgba(0,52,87,1)',
    angle: '225deg'
  },
  // 8:30pm - 8:45pm
  {
    from: 'rgba(0,52,87,1)',
    to: 'rgba(0,0,0,1)',
    angle: '225deg'
  },
  // 8:45pm - 9:00pm
  {
    from: 'rgba(0,0,0,1)',
    to: 'rgba(0,0,0,1)',
    angle: '225deg'
  },
  // 9:00pm - 9:15pm
  {
    from: 'rgba(0,0,0,1)',
    to: 'rgba(0,0,0,1)',
    angle: '225deg'
  },
  // 9:15pm - 9:30pm
  {
    from: 'rgba(0,0,0,1)',
    to: 'rgba(0,0,0,1)',
    angle: '90deg'
  },
  // 9:30pm - 9:45pm
  {
    from: 'rgba(0,0,0,1)',
    to: 'rgba(0,0,0,1)',
    angle: '90deg'
  },
  // 9:45pm - 10:00pm
  {
    from: 'rgba(0,0,0,1)',
    to: 'rgba(0,0,0,1)',
    angle: '90deg'
  },
  // 10:00pm - 10:15pm
  {
    from: 'rgba(0,0,0,1)',
    to: 'rgba(0,0,0,1)',
    angle: '90deg'
  },
  // 10:15pm - 10:30pm
  {
    from: 'rgba(0,0,0,1)',
    to: 'rgba(0,0,0,1)',
    angle: '90deg'
  },
  // 10:30pm - 10:45pm
  {
    from: 'rgba(0,0,0,1)',
    to: 'rgba(0,0,0,1)',
    angle: '90deg'
  },
  // 10:45pm - 11:00pm
  {
    from: 'rgba(0,0,0,1)',
    to: 'rgba(0,0,0,1)',
    angle: '90deg'
  },
  // 11:00pm - 11:15pm
  {
    from: 'rgba(0,0,0,1)',
    to: 'rgba(0,0,0,1)',
    angle: '90deg'
  },
  // 11:15pm - 11:30pm
  {
    from: 'rgba(0,0,0,1)',
    to: 'rgba(0,0,0,1)',
    angle: '90deg'
  },
  // 11:30pm - 11:45pm
  {
    from: 'rgba(0,0,0,1)',
    to: 'rgba(0,0,0,1)',
    angle: '90deg'
  },
  // 11:45pm - 12:00pm
  {
    from: 'rgba(0,0,0,1)',
    to: 'rgba(0,0,0,1)',
    angle: '90deg'
  }
]

export default colors
