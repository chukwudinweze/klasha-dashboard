import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import styles from "./SalesSummaryChart.module.css";
import { options } from "./chartOptions";
import { data } from "./chartData";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

interface PropType {
  darkTheme: boolean;
  dailyChart: boolean;
}

export function SaleSummary({ darkTheme, dailyChart }: PropType) {
  return (
    <div className={darkTheme ? styles.sale_summary_dark : styles.sale_summary}>
      {!dailyChart && (
        <p className={darkTheme ? styles.range_date : styles.range_date_white}>
          21 Aug - 01 Sep 2021
        </p>
      )}
      <div className={dailyChart ? styles.hide_chart : styles.chart_cover}>
        <Line
          id="chart"
          style={{ marginLeft: "-30px" }}
          options={options}
          data={data}
        />
      </div>
      {!dailyChart && (
        <p className={darkTheme ? styles.title_dark : styles.title}>
          This week
        </p>
      )}
      {dailyChart && <p className={styles.todays_sale_title}>Todays sales</p>}
      <p className={darkTheme ? styles.amount : styles.amount_white}>
        ₦16520.56
      </p>
    </div>
  );
}
