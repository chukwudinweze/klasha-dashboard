import pieChartIcon from "../../assets/pie-chart.svg";
import walletIcon from "../../assets/wallet.svg";
import barChatIcon from "../../assets/statistics.svg";
import radarIcon from "../../assets/radar.svg";
import exchangeRateIcon from "../../assets/exchange-rate.svg";
import shoppingCartIcon from "../../assets/shopping cart.svg";
import transactionIcon from "../../assets/transactions.svg";
import paymentLinkIcon from "../../assets/payment-link.svg";

interface NavItemContent {
  label: string;
  icon: string;
  link: string;
}

interface NavItem {
  section: string;
  contents: NavItemContent[];
}

const navItems: NavItem[] = [
  {
    section: "Main Page",
    contents: [
      { label: "Dashboard", icon: pieChartIcon, link: "/" },
      { label: "Balances", icon: walletIcon, link: "/dashboard" },
      { label: "Analytics", icon: barChatIcon, link: "/dashboard" },
      { label: "Marketing", icon: radarIcon, link: "/dashboard" },
      { label: "Exchange rates", icon: exchangeRateIcon, link: "/dashboard" },
    ],
  },
  {
    section: "Accept Payments",
    contents: [
      { label: "Checkouts", icon: shoppingCartIcon, link: "/users" },
      { label: "Payment Links", icon: paymentLinkIcon, link: "/none" },
    ],
  },
  {
    section: "Send Payments",
    contents: [{ label: "Wire", icon: transactionIcon, link: "/none" }],
  },
];

export default navItems;
