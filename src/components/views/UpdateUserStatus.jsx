import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Switch from 'react-switch';

const UpdateUserStatus = () => {
    const [shopId, setShopId] = useState('1');
    const [activeStatus, setActiveStatus] = useState(false); // false means "deactive", true means "active"
    const [approvedStatus, setApprovedStatus] = useState('');
    const [currentStatus, setCurrentStatus] = useState({ activeStatus: '', approvedStatus: '' });

    useEffect(() => {
        if (shopId) {
            fetchUserStatus();
        }
    }, [shopId]);

    useEffect(() => {
        if (shopId && currentStatus.activeStatus !== '') {
            const status = activeStatus ? 'active' : 'deactive';
            axios.put(`http://localhost:8095/shop/${shopId}/active-status`, null, {
                params: { activeStatus: status }
            }).then(() => {
                alert(`Active status updated to ${status}`);
            });
        }
    }, [activeStatus]);

    useEffect(() => {
        if (shopId && currentStatus.approvedStatus !== '') {
            axios.put(`http://localhost:8095/shop/${shopId}/approved-status`, null, {
                params: { approvedStatus }
            }).then(() => {
                alert(`Approved status updated to ${approvedStatus}`);
            });
        }
    }, [approvedStatus]);

    const fetchUserStatus = async () => {
        const response = await axios.get(`http://localhost:8095/shop/${shopId}`);
        setCurrentStatus({
            activeStatus: response.data.activeStatus,
            approvedStatus: response.data.approvedStatus,
        });
        setActiveStatus(response.data.activeStatus === 'active');
        setApprovedStatus(response.data.approvedStatus);
    };

    return (
        <div>
            <h1>Update User Status</h1>
            <input 
                type="text" 
                value={shopId} 
                onChange={(e) => setShopId(e.target.value)} 
                placeholder="Shop ID" 
            />
            <div>
                <h2>Current Status</h2>
                <p>Active Status: {currentStatus.activeStatus}</p>
                <p>Approved Status: {currentStatus.approvedStatus}</p>
            </div>
            <div>
                <h2>Update Active Status</h2>
                <label>
                    <span>Deactive</span>
                    <Switch
                        checked={activeStatus}
                        onChange={setActiveStatus}
                        onColor="#86d3ff"
                        onHandleColor="#2693e6"
                        handleDiameter={30}
                        uncheckedIcon={false}
                        checkedIcon={false}
                        height={20}
                        width={48}
                    />
                    <span>Active</span>
                </label>
            </div>
            <div>
                <h2>Update Approved Status</h2>
                <div>
                    <label>
                        <input 
                            type="radio" 
                            value="pending" 
                            checked={approvedStatus === 'pending'} 
                            onChange={(e) => setApprovedStatus(e.target.value)} 
                        />
                        Pending
                    </label>
                    <label>
                        <input 
                            type="radio" 
                            value="approved" 
                            checked={approvedStatus === 'approved'} 
                            onChange={(e) => setApprovedStatus(e.target.value)} 
                        />
                        Approved
                    </label>
                    <label>
                        <input 
                            type="radio" 
                            value="rejected" 
                            checked={approvedStatus === 'rejected'} 
                            onChange={(e) => setApprovedStatus(e.target.value)} 
                        />
                        Rejected
                    </label>
                </div>
            </div>
        </div>
    );
};

export default UpdateUserStatus;
