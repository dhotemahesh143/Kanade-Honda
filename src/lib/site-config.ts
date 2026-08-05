export const siteConfig = {
  name: "Kanade Honda (Geet Motors)",
  legalName: "Kanade Honda (Geet Motors)",
  subtitle: "Honda 2 Wheeler Authorized Dealer",
  tagline: "Kanade Honda. Your Trusted Honda Partner.",
  servicesTagline: "Sales, service, spares and genuine accessories",
  established: "2012",

  phone: "+91 78878 86390",
  phoneHref: "tel:+917887886390",
  serviceCenterPhone: "+91 86699 77652",
  serviceCenterPhoneHref: "tel:+918669977652",
  email: "geetmotors.honda@gmail.com",
  secondaryEmail: "kanadehonda@gmail.com",

  address: "Sr.No-28/1 Kanade Nagar Katraj-Saswad By Pass Road Pune-411060",
  mapsUrl:
    "https://www.google.com/maps/place/Kanade+Honda+(Geet+Motors)/@18.4509577,73.9170735,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc2ea313d21b033:0x94c482c3075ecd2b!8m2!3d18.4509577!4d73.9196484!16s%2Fg%2F11b72nt86x?authuser=0&entry=ttu&g_ep=EgoyMDI2MDcwOC4wIKXMDSoASAFQAw%3D%3D",

  openingTime: "9.00 AM",
  closingTime: "7.00 PM",
  weeklyOff: "None (Open All 7 Days)",
  hours: "Mon – Sun · 9.00 AM – 7.00 PM",

  whatsappNumber: "917887886390",

  social: {
    instagram: "https://www.instagram.com/kanadehonda?igsh=dHhrOHZkd3luNWQx",
    facebook: "https://m.facebook.com/105769091568867/",
  },
};

export function whatsappLink(message: string) {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function testRideLink(vehicleName?: string) {
  const message = vehicleName
    ? `Hi Kanade Honda, I'd like to book a test ride for the Honda ${vehicleName}.`
    : "Hi Kanade Honda, I'd like to book a test ride.";
  return whatsappLink(message);
}

export function enquiryLink(vehicleName?: string) {
  const message = vehicleName
    ? `Hi Kanade Honda, I'd like more information about the Honda ${vehicleName}.`
    : "Hi Kanade Honda, I'd like some more information.";
  return whatsappLink(message);
}
