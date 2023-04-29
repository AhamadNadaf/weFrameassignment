import React, { useEffect, useState } from "react";
import './homePage.css'
import Ellipse1 from '../../assets/Ellipse1.png'
import Vector7 from '../../assets/Vector(7).png'
import Vector8 from '../../assets/Vector(8).png'
import Rectangle23 from '../../assets/Rectangle23.png'
import Vector9 from '../../assets/Vector(9).png'

const HomePage = () => {

    const recurring_Invoices_data = [
        {
            client: "MadeByMack",
            send: 25,
            end_date: '24-20-2024',
            interval: '3/month',
            amount: '€3000'
        },
        {
            client: "ahamad",
            send: 25,
            end_date: '24-20-2024',
            interval: '3/month',
            amount: '€3000'
        },
        {
            client: "ahamad",
            send: 2525,
            end_date: '24-20-2024',
            interval: '3/month',
            amount: '€3000'
        },
        {
            client: "ahamad",
            send: 2525,
            end_date: '24-20-2024',
            interval: '3/month',
            amount: '€3000'
        },
        {
            client: "ahamad",
            send: 2525,
            end_date: '24-20-2024',
            interval: '3/month',
            amount: '€3000'
        },
        {
            client: "ahamad",
            send: 2525,
            end_date: '24-20-2024',
            interval: '3/month',
            amount: '€3000'
        },

    ]

    const [searchVal, setSearchVal] = useState()
    const [filterData, setFilterData] = useState(recurring_Invoices_data)
    const [found, setFound] = useState(true)

    const handleSearch = () => {
        const newData = recurring_Invoices_data.filter((datas) => {
            return datas.client.toLowerCase().includes(searchVal.toLowerCase())
        })
        setFilterData(newData)
        if(newData.length === 0){
            setFound(false)
        }
        console.log(searchVal)
    }
    const handleChange = (e) => {
        const val = e.target.value
        if(val === ""){
            setFilterData(recurring_Invoices_data)
            setFound(true)
        }
        setSearchVal(val)
    }

    return (
        <div >
            <div className="homePage">
                <span className="lastText">Last 30 days:</span>
                <div className="paid"><span className="paidSpan">Paid</span> <span className="paid€24000">€24.000</span></div>
                <div className="pending"><span className="pendingSpan">pending</span><br /> <span className="pending€41000">€41.000</span></div>
                <div className="overdue"><span className="overdueSpan">overdue</span> <span className="overdue€65600">€65.600</span></div>
            </div>
            <div className="userInfo">
                <img src={Ellipse1} alt="Ellipse1" className="Ellipse1" /> <span className="Ellipse1Text">Jort KKKKKKKKKKKK</span>
            </div>
            <div className="Recurring_Invoices">
                <span>Recurring Invoices</span>
                <button className="Add_recurring_invoice"><span className="Add_recurring_invoiceText">Add recurring invoice</span><img src={Vector7} alt="Vector7" className="Vector7Img" /></button>
            </div>

            <div className="grid">
                <div className="grid1"><sap className='gridSpanText'></sap># recurring invoices<sap className='gridSpanNumber'>215</sap></div>
                <div className="grid1"><sap className='gridSpanText'></sap>recurring revenue<sap className='gridSpanNumber'>€2500/month</sap></div>
                <div className="grid1"><sap className='gridSpanText'></sap>recurring overdue<sap className='gridSpanNumber'>22</sap></div>
            </div>
            <div className="Per_client">
                <sapn>
                    Per client
                </sapn>
            </div>
            <div className="searchDiv">
                <input className="Search_client" type="text" placeholder="Search client" onChange={(e) => handleChange(e)} />
                <button className="searchButton" onClick={(e) => handleSearch(e)} >Search <img src={Vector8} alt="Vector8" /></button>
            </div>
            <div className="dataTables">
                <table className="tableStyle">
                    <tr className="titleTable">
                        <th className="titleClient">Client</th>
                        <th className="titlesend"># send</th>
                        <th className="titleend_date">end date</th>
                        <th className="titleInterval">Interval</th>
                        <th className="titleAmount">amount</th>
                        <th className="titleEdit">Edit</th>
                    </tr>
                    <hr className="lineHr" />
                    {
                       found ?  (filterData.map((data) =>
                            <div>
                                <tr>
                                    <td className="titleClientdata"><span><img src={Rectangle23} alt='Rectangle23'className="Rectangle23" />{data.client}</span></td>
                                    <td className="titlesenddata"><span>{data.send}</span></td>
                                    <td className="titleend_datedata">{data.end_date}</td>
                                    <td className="titleIntervaldata">{data.interval}</td>
                                    <td className="titleAmountdata">{data.amount}</td>
                                    <td><button className="editTableButton"><span className="editSpan">Edit </span><img src={Vector9} alt='Vector9' /></button></td>
                                </tr>
                                <hr className="lineHr" />

                            </div>
                        )
                       ) : (
                        <div><h1>No data found</h1></div>
                       )
                    }

                </table>
            </div>
        </div>
    )
}

export default HomePage;