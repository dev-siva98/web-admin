// Sidebar imports
import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,
} from "@iconscout/react-unicons";


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
  }
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