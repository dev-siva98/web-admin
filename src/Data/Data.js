// Sidebar imports
import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,
  UilChart,
} from "@iconscout/react-unicons";

// Analytics Cards imports
import { UilUsdSquare, UilMoneyWithdrawal } from "@iconscout/react-unicons";

// Recent Card Imports
import img1 from "../imgs/img1.png";
import img2 from "../imgs/img2.png";
import img3 from "../imgs/img3.png";

// Sidebar Data
export const sidebarData = [
  {
    icon: UilEstate,
    heading: "Dashboard",
    link: ''
  },
  {
    icon: UilClipboardAlt,
    heading: "Orders",
    link: 'orders'
  },
  {
    icon: UilUsersAlt,
    heading: "Customers",
    link: 'customers'
  },
  {
    icon: UilPackage,
    heading: 'Products',
    link: 'products'
  },
  {
    icon: UilChart,
    heading: 'Analytics',
    link: 'analytics'
  }
];

// Analytics Cards Data
export const cardsData = [
  {
    title: "Sales",
    color: {
      backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 70,
    value: "25,970",
    png: UilUsdSquare,
    series: [
      {
        name: "Sales",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },
  {
    title: "Revenue",
    color: {
      backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
    },
    barValue: 80,
    value: "14,270",
    png: UilMoneyWithdrawal,
    series: [
      {
        name: "Revenue",
        data: [10, 100, 50, 70, 80, 30, 40],
      },
    ],
  },
  {
    title: "Expenses",
    color: {
      backGround:
        "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
      boxShadow: "0px 10px 20px 0px #F9D59B",
    },
    barValue: 60,
    value: "4,270",
    png: UilClipboardAlt,
    series: [
      {
        name: "Expenses",
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
  },
];

// Recent Update Card Data
export const updatesData = [
  {
    img: img1,
    name: "Andrew Thomas",
    noti: "has ordered Apple smart watch 2500mh battery.",
    time: "25 seconds ago",
  },
  {
    img: img2,
    name: "James Bond",
    noti: "has received Samsung gadget for charging battery.",
    time: "30 minutes ago",
  },
  {
    img: img3,
    name: "Iron Man",
    noti: "has ordered Apple smart watch, samsung Gear 2500mh battery.",
    time: "2 hours ago",
  },
];

export const ordersCard = [
  {
    title: "Active Orders",
    backGround: "linear-gradient(180deg, #3699f5 0%, #6eb6fa 100%)",
    boxShadow: "0px 10px 20px 0px #b0d4f5",
    barValue: 70,
    value: "12",
    png: UilClipboardAlt,

  },
  {
    title: "Completed Orders",
    backGround: "linear-gradient(180deg, #5ee851 0%, #5ddb51 100%)",
    boxShadow: "0px 10px 20px 0px #8aff92",
    barValue: 70,
    value: "32",
    png: UilClipboardAlt,

  },
  {
    title: "Cancelled Orders",
    backGround: "linear-gradient(180deg, #ff7a6e 0%, #f57064 100%)",
    boxShadow: "0px 10px 20px 0px #f5897f",
    barValue: 70,
    value: "8",
    png: UilClipboardAlt,

  },
  {
    title: "Total Orders",
    backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
    boxShadow: "0px 10px 20px 0px #e0c6f5",
    barValue: 70,
    value: "52",
    png: UilClipboardAlt,

  },
]

export const productsCard = [
  {
    title: "All Products",
    backGround: "linear-gradient(180deg, #3699f5 0%, #6eb6fa 100%)",
    boxShadow: "0px 10px 20px 0px #b0d4f5",
    barValue: 70,
    value: "64",
    png: UilClipboardAlt,

  },
  {
    title: "Active Products",
    backGround: "linear-gradient(180deg, #5ee851 0%, #5ddb51 100%)",
    boxShadow: "0px 10px 20px 0px #8aff92",
    barValue: 70,
    value: "60",
    png: UilClipboardAlt,

  },
  {
    title: "Inactive Products",
    backGround: "linear-gradient(180deg, #ff7a6e 0%, #f57064 100%)",
    boxShadow: "0px 10px 20px 0px #f5897f",
    barValue: 70,
    value: "4",
    png: UilClipboardAlt,

  }
]

export const customersCard = [
  {
    title: "All Customers",
    backGround: "linear-gradient(180deg, #3699f5 0%, #6eb6fa 100%)",
    boxShadow: "0px 10px 20px 0px #b0d4f5",
    barValue: 70,
    value: "64",
    png: UilClipboardAlt,

  },
  {
    title: "New Customers",
    backGround: "linear-gradient(180deg, #5ee851 0%, #5ddb51 100%)",
    boxShadow: "0px 10px 20px 0px #8aff92",
    barValue: 70,
    value: "60",
    png: UilClipboardAlt,

  }
]