import DashboardCard from "../../component/card/dashboardCard/card.component";
import BaseLayout from "../../component/Layout";
import usericon from "../../assets/svg/users.svg";
import charticon from "../../assets/svg/chart.svg";
import cardicon from "../../assets/svg/cardicon.svg";
import bgVector from "../../assets/svg/Vector.svg";
import bgVector2 from "../../assets/svg/Vector2.png";
import bgVector3 from "../../assets/svg/Vector3.png";
import UserTable from "../../component/User/user.component";
import Chart from "../../component/chart/chart.component";

const Dashboard = () => {
  return (
    <BaseLayout>
      {
        <div className=" w-full ">
          <div className="flex items-center ">
            <DashboardCard
              bgColor={bgVector}
              title={"Total Users"}
              icon={usericon}
              value={"40"}
              bg="#FFF4DE"
            />
            <DashboardCard
              bgColor={bgVector2}
              title={"Total Campaigns"}
              icon={charticon}
              value={"5"}
              bg={"#D7EAFC"}
            />
            <DashboardCard
              bgColor={bgVector3}
              title={"Total Commision"}
              icon={cardicon}
              value={"$30k"}
              bg={"#C8FFE2"}
            />
          </div>
          <div className="m-4 flex justify-start">
            <div>
              <UserTable />
            </div>
            <div>
              <Chart />
              <div className="rounded-md p-8 bg-white mx-5 mb-3 w-full">
                <div>
                  <p>Reached by device</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </BaseLayout>
  );
};
export default Dashboard;

Dashboard.Layout = BaseLayout;