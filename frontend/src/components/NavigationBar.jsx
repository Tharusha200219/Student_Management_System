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
                {/* Flex container for logo and company name */}
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    {/* Company logo */}
                    <img src="/images/logo.png" alt="Company Logo" style={{ height: '40px', marginRight: '10px' }} />
                    {/* Company name */}
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
