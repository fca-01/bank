import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSideBar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import { getLoggedInUser } from "@/lib/actions/user.actions";

export default async function Home() {
  const user = await getLoggedInUser()
  console.log("user", user)
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox title="Bem-vindo(a)," user={user?.name} type="greeting" subtext="Acesse e controle sua conta e transações de forma eficiente."></HeaderBox>
          <TotalBalanceBox accounts={[]} totalBanks={1} totalCurrentBalance={10000.00} />
        </header>
      </div>
      <RightSidebar user={user} transactions={[]} banks={[{currentBalance: 5023.82}, {currentBalance: 5000}]}></RightSidebar>
    </section>
  );
}
