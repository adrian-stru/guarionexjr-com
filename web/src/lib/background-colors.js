const colors = [
  // 4:00am - 4:15am
  {
    from: 'rgba(0,0,0,1)',
    to: 'rgba(7,33,52,1)',
    angle: '315deg'
  },
  // 4:15am - 4:30am
  {
    from: 'rgba(7,33,52,1)',
    to: 'rgba(26,54,82,1)',
    angle: '315deg'
  },
  // 4:30 - 4:45am
  {
    from: 'rgba(26,54,82,1)',
    to: 'rgba(45,63,97,1)',
    angle: '315deg'
  },
  // 4:45 - 5:00am
  {
    from: 'rgba(45,63,97,1)',
    to: 'rgba(84,80,111,1)',
    angle: '315deg'
  },
  // 5:00am - 5:15am
  {
    from: 'rgba(84,80,111,1)',
    to: 'rgba(132,103,128,1)',
    angle: '315deg'
  },
  // 5:15am - 5:30am
  {
    from: 'rgba(132,103,128,1)',
    to: 'rgba(161,130,143,1)',
    angle: '315deg'
  },
  // 5:30am - 5:45am
  {
    from: 'rgba(161,130,143,1)',
    to: 'rgba(201,158,151,1)',
    angle: '315deg'
  },
  // 5:45 - 6:00am
  {
    from: 'rgba(201,158,151,1)',
    to: 'rgba(146,165,177,1)',
    angle: '315deg'
  },
  // 6:00am - 6:15am
  {
    from: 'rgba(146,165,177,1)',
    to: 'rgba(178,190,196,1)',
    angle: '315deg'
  },
  // 6:15am - 6:30am
  {
    from: 'rgba(178,190,196,1)',
    to: 'rgba(202,206,209,1)',
    angle: '315deg'
  },
  // 6:30am - 6:45am
  {
    from: 'rgba(202,206,209,1)',
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
    to: 'rgba(207,207,207,1)',
    angle: '90deg'
  },
  // 6:15pm - 6:30pm
  {
    from: 'rgba(207,207,207,1)',
    to: 'rgba(189,206,210,1)',
    angle: '90deg'
  },
  // 6:30pm - 6:45pm
  {
    from: 'rgba(189,206,210,1)',
    to: 'rgba(242,213,180,1)',
    angle: '225deg'
  },
  // 6:45pm - 7:00pm
  {
    from: 'rgba(242,213,180,1)',
    to: 'rgba(251,191,135,1)',
    angle: '225deg'
  },
  // 7:00pm - 7:15pm
  {
    from: 'rgba(251,191,135,1)',
    to: 'rgba(214,155,149,1)',
    angle: '225deg'
  },
  // 7:15pm - 7:30pm
  {
    from: 'rgba(214,155,149,1)',
    to: 'rgba(148,145,170,1)',
    angle: '225deg'
  },
  // 7:30pm - 7:45pm
  {
    from: 'rgba(148,145,170,1)',
    to: 'rgba(111,144,166,1)',
    angle: '225deg'
  },
  // 7:45pm - 8:00pm
  {
    from: 'rgba(111,144,166,1)',
    to: 'rgba(66,121,154,1)',
    angle: '225deg'
  },
  // 8:00pm - 8:15pm
  {
    from: 'rgba(66,121,154,1)',
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
