import React from 'react';
import "./featured.scss";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";
import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const Featured = () => {
    return (
        <div className="featured">
            <div className="top">
                <h1 className='title'>Total Revenue</h1>
                <MoreVertIcon fontSize='small' />
            </div>
            <div className="bottom">
                <div className="featuredChart">
                    <CircularProgressbar value={70} text='70%' strokeWidth={5} />
                </div>
                <p className="title">Total sales made today</p>
                <p className='amount'><CurrencyRupeeOutlinedIcon />400</p>
                <p className='desc'>Previous transactions processing. Last payments may not be included</p>
                <div className='summary'>
                    <div className='item'>
                        <div className='itemTitle'>Target</div>
                        <div className='itemResult positive'>
                            <KeyboardArrowUpIcon fontSize='small' />
                            <div className='resultAmount'>200</div>
                        </div>
                    </div>
                    <div className='item'>
                        <div className='itemTitle'>Target</div>
                        <div className='itemResult negative'>
                            <KeyboardArrowDownIcon fontSize='small' />
                            <div className='resultAmount'>200</div>
                        </div>
                    </div>
                    <div className='item'>
                        <div className='itemTitle'>Target</div>
                        <div className='itemResult positive'>
                            <KeyboardArrowUpIcon fontSize='small' />
                            <div className='resultAmount'>200</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured