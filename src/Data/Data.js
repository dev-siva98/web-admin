// Sidebar imports
import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,
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
    link: '',
    selectionIndex: 1
  },
  {
    icon: UilClipboardAlt,
    heading: "Orders",
    link: 'orders',
    selectionIndex: 2
  },
  {
    icon: UilUsersAlt,
    heading: "Customers",
    link: 'customers',
    selectionIndex: 3
  },
  {
    icon: UilPackage,
    heading: 'Products',
    link: 'products',
    selectionIndex: 4
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

export const tableHeaderData = [
  {
    id: 'orders',
    headerData: [
      {
        id: 'orderId',
        numeric: false,
        disablePadding: true,
        label: 'Order Id',
      },
      {
        id: 'paymentMode',
        numeric: false,
        disablePadding: false,
        label: 'Payment Mode',
      },
      {
        id: 'orderStatus',
        numeric: false,
        disablePadding: false,
        label: 'Order Status',
      },
      {
        id: 'total',
        numeric: true,
        disablePadding: false,
        label: 'Total',
      },
      {
        id: 'createdAt',
        numeric: false,
        disablePadding: false,
        label: 'Date',
      }
    ]
  },
  {
    id: 'products',
    headerData: [
      {
        id: 'proId',
        numeric: false,
        disablePadding: true,
        label: 'Product Id',
      },
      {
        id: 'pname',
        numeric: false,
        disablePadding: false,
        label: 'Product Name',
      },
      {
        id: 'Weight',
        numeric: false,
        disablePadding: false,
        label: 'weight',
      },
      {
        id: 'price',
        numeric: true,
        disablePadding: false,
        label: 'Price',
      },
      {
        id: 'createdAt',
        numeric: false,
        disablePadding: false,
        label: 'Created At',
      }
    ]
  },
  {
    id: 'customers',
    headerData: [
      {
        id: 'id',
        numeric: false,
        disablePadding: true,
        label: 'User Id',
      },
      {
        id: 'name',
        numeric: false,
        disablePadding: false,
        label: 'Name',
      },
      {
        id: 'mobile',
        numeric: false,
        disablePadding: false,
        label: 'Contact',
      },
      {
        id: 'createdAt',
        numeric: false,
        disablePadding: false,
        label: 'Created At',
      }
    ]
  }
]

export const tableBodyData = [
  {
    id: 'orders',
    bodyData: ['orderId', 'paymentMode', 'orderStatus', 'total']
  },
  {
    id: 'products',
    bodyData: ['proId', 'pname', 'weight', 'price']
  },
  {
    id: 'customers',
    bodyData: ['id', 'name', 'mobile', 'cartLength']
  }
]