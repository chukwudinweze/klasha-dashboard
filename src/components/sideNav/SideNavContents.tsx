import pieChartIcon from "../../assets/pie-chart.svg";
import walletIcon from "../../assets/wallet.svg";
import barChatIcon from "../../assets/statistics.svg";
import radarIcon from "../../assets/radar.svg";
import exchangeRateIcon from "../../assets/exchange-rate.svg";
import shoppingCartIcon from "../../assets/shopping cart.svg";
import transactionIcon from "../../assets/transactions.svg";
import paymentLinkIcon from "../../assets/payment-link.svg";
import ArrowupAndDown from "../../assets/arrowUpDown.svg";

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
      { label: "Balances", icon: walletIcon, link: "/none" },
      { label: "Transactions", icon: ArrowupAndDown, link: "/transactions" },
      { label: "Analytics", icon: barChatIcon, link: "/none" },
      { label: "Marketing", icon: radarIcon, link: "/none" },
      { label: "Exchange rates", icon: exchangeRateIcon, link: "/none" },
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
