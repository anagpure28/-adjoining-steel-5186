import style from "../Styles/AdminDashboard.module.css"
import ColumnBars from "../graphs/ColumnBars"
import PieChart from "../graphs/PieChart"
import RingChart from "../graphs/RingChart"

export const AdminDashboard = ()=>{
    

    return <div id={style.Dashboard}>
        <div>
            <div id={style.ringChart}>
                <div>
                    <div>
                        <RingChart percent={0.85}/>
                    </div>
                    <h4>$489,23.89 Sales</h4>
                </div>
                <div>
                    <div>
                        <RingChart percent={0.64}/>
                    </div>
                    <h4>Trafic</h4>
                </div>
                <div>
                    <div>
                        <RingChart percent={0.83}/>
                    </div>
                    <h4>893,89 Live Users</h4>
                </div>
            </div>
            <div id={style.pieChart}>
                <PieChart/>
            </div>
        </div>
        <div>
            <ColumnBars/>
        </div>
    </div>
}