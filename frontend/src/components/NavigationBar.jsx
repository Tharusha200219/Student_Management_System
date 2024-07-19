import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/material/styles'; 
import { Link } from 'react-router-dom';

const StyledAppBar = styled(AppBar)({
    backgroundColor: '#201E43',
});

const NavigationBar = () => {
    return (
        <StyledAppBar position="static">
            <Toolbar style={{ justifyContent: 'space-between' }}>
                
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    {/* school logo (i used my school logo as in this project) */}
                    <img src="/images/logo.png" alt="Company Logo" style={{ height: '40px', marginRight: '10px' }} />
                    {/* school name (i used my school name in this project) */}
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                        Siyane national school
                    </Typography>
                </div>
                {/* Navigation buttons */}
                <div>
                    <Button color="inherit" component={Link} to="/" >Home</Button>
                    <Button color="inherit" component={Link} to="/Studentshome">Student Home</Button>
                    
                </div>
            </Toolbar>
        </StyledAppBar>
    );
};

export default NavigationBar;
