export const header_links = [
  {
    name: "Home",
    path: "/",
    isChildren: false
  },
  {
    name: "About Us",
    path: "/about-us",
    isChildren: false
  },
  {
    name: "Services",
    path: "/services",
    isChildren: true,
    children: [
       {
        name: "All Services",
        path: "/services",
      },
      {
        name: "Weight Management",
        path: "/weight-management",
      },
      {
        name: "Hair Therapy",
        path: "/hair-therapy",
      },
      {
        name: "Aesthetic Gynecology",
        path: "/aesthetic",
      },
    ]
  },
  {
    name: "Store",
    path: "/store",
    isChildren: false
  },
  {
    name: "Book",
    path: "/book",
    isChildren: false
  },
  {
    name: "Academy",
    path: "/academy",
    isChildren: false
  },
  {
    name: "Coaching",
    path: "/coaching",
    isChildren: false
  },
  {
    name: "Horse",
    path: "/horse",
    isChildren: false
  },
  {
    name:"Contact Us",
    path:"/contact-us",
    isChildren:false
  }
]